import React, { useState } from 'react';
import InputBox from '@/components/Input';
import { BiMessageRoundedError } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import Button from '@/components/Button/index';
import PDFViewer from '@/components/PDFViewer';
import PDFSmallViewer from '@/components/PDFViewer/PDFSmallViewer';
import { FaArrowLeft } from 'react-icons/fa';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import axios from 'axios';
import { BASE_URL } from '@/utils/axios';
import { getToken } from '@/utils/axios/token';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { fetchRequest } from '@/utils/axios/fetch';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addFiles } from '@/store/slices/apply.slice';
import { useGetApplyByIdQuery } from '@/store/slices/allRequests';

interface formType {
    number: string;
    sur_name: string;
    given_name: string;
    date_of_issue: Date;
    date_of_expiry: Date;
}

interface FileDetails {
    apply: {
        files: {
            passportFile: File[];
        };
    };
}

const FileSubmitted = () => {
    const Files = useSelector((state: FileDetails) => state.apply.files);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<formType>();
    const token = getToken();
    const router = useRouter();
    const { id } = router.query;
    const { data: GetApply } = useGetApplyByIdQuery(id);
    const [isLoading, setIsLoading] = useState(false);
    const [fullFile, setFullFile] = useState('');

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = e.target.files;
        const filesArray = uploadedFiles ? [...uploadedFiles] : [];
        dispatch(addFiles({ type: 'passport', filesArray }));
    };

    const uploadFilesToApi = async (files: File[]) => {
        const uploadResponses = [];
        try {
            for (const file of files) {
                const formData = new FormData();
                formData.append('file', file);
                const response = await axios.post(
                    BASE_URL + API_ENDPOINTS.FILE_S3_UPLOAD,
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                uploadResponses.push(response.data.data.Location);
            }
            return uploadResponses;
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    const onSubmit = async (data: formType) => {
        setIsLoading(true);
        const uploadResponse = await uploadFilesToApi(Files.passportFile);
        toast
            .promise(
                fetchRequest({
                    url: `${BASE_URL}${API_ENDPOINTS.APPLY_DOCUMENTS}/${id}`,
                    type: 'patch',
                    body: {
                        ...GetApply,
                        course: GetApply?.course.id,
                        user: GetApply?.user.id,
                        documents: {
                            ...GetApply?.documents,
                            identity: {
                                passport: {
                                    url: uploadResponse,
                                    given_name: data.given_name,
                                    sur_name: data.sur_name,
                                    number: data.number,
                                    date_of_expiry: data.date_of_expiry,
                                    date_of_issue: data.date_of_issue
                                }
                            }
                        }
                    }
                }),
                {
                    loading: 'Please wait...',
                    success: () => {
                        return 'Form submitted successfully';
                    },
                    error: 'An error occurred'
                }
            )
            .finally(() => setIsLoading(false));
    };

    const handleFileClick = (fileUrl: string) => {
        setFullFile(fileUrl);
    };

    return (
        <>
            <div className="flex justify-between py-8 px-4 bg-white">
                <div className="flex items-center gap-4 pl-4">
                    <FaArrowLeft onClick={() => router.back()} />
                    <div>
                        <span className="font-bold text-xl block">
                            Passport
                        </span>
                        <span className="text-base font-medium">IDENTITY</span>
                    </div>
                    <div className="bg-blueColor bg-opacity-10 p-2 rounded">
                        <span className="text-blueColor">Submitted</span>
                    </div>
                </div>
                <div className="md:hidden lg:block sm:hidden">
                    <Button
                        type="submit"
                        text={isLoading ? 'Loading...' : 'save'}
                        className="rounded-none py-2 px-4"
                        onClick={handleSubmit(onSubmit)}
                    />
                </div>
            </div>

            <div className="flex w-full h-[600px] lg:flex-row md:flex-col sm:flex-col">
                <div className="w-1/4 flex flex-col md:hidden sm:hidden lg:block">
                    <div className="w-full bg-BgColorPassport bg-opacity-5 p-8">
                        <div className="w-full bg-BgCardPassport p-4">
                            {Files && (
                                <PDFSmallViewer
                                    pdfUrl={Files.passportFile}
                                    onFileClick={handleFileClick}
                                />
                            )}
                        </div>
                    </div>
                    <label
                        htmlFor="fileUpload"
                        className=" px-24 ml-12 text-center py-4 font-semibold text-3xl cursor-pointer bg-blueColor border-transparent text-white hover:bg-white hover:border-2 hover:border-blueColor hover:text-blueColor"
                    >
                        {' '}
                        {isLoading ? 'Loading...' : '+ ADD'}
                    </label>
                    <input
                        type="file"
                        accept=".pdf, image/*"
                        className="hidden"
                        multiple
                        id="fileUpload"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="lg:w-2/4 md:w-full sm:w-full py-8 px-16">
                    <div className="w-full bg-BgCardPassport md:pl-36 sm:pl-4 lg:pl-0">
                        {fullFile && <PDFViewer pdfUrl={fullFile} />}
                    </div>
                    <div className="md:flex sm:flex lg:hidden justify-between w-[85%] mx-auto mt-4">
                        <label
                            htmlFor="fileUpload"
                            className="text-center py-[19px] px-[127px]  font-semibold cursor-pointer bg-blueColor border-transparent text-white hover:bg-white hover:border-2 hover:border-blueColor hover:text-blueColor"
                        >
                            {' '}
                            {isLoading ? 'Loading...' : '+ ADD'}
                        </label>
                        <input
                            type="file"
                            accept=".pdf, image/*"
                            className="hidden"
                            multiple
                            id="fileUpload"
                            onChange={handleFileChange}
                        />
                        <div className="">
                            <Button
                                type="submit"
                                text="Save"
                                className="rounded-none py-[19px] px-[127px] "
                                onClick={handleSubmit(onSubmit)}
                            />
                        </div>
                    </div>
                </div>
                <div className=" lg:w-1/4 sm:w-full md:w-full p-8 bg-blueColor bg-opacity-5">
                    <span className="font-bold text-xl">
                        Fill in your details
                    </span>
                    <p className="p-2 bg-white flex gap-2 items-center rounded-md mt-4">
                        <BiMessageRoundedError className="text-[4rem] text-blueColor" />
                        <span className="text-[15px] font-medium text-blueColor">
                            Add your details and get personalised tips to
                            improve your chances.
                        </span>
                    </p>
                    <form
                        className="flex flex-col pt-1 "
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <label className="font-bold text-gray-600 pt-2">
                            Passport Number
                        </label>
                        <InputBox
                            {...register('number', {
                                required: 'Passport is required'
                            })}
                            placeholder="Passport Number*"
                            error={errors.number?.message}
                            autoComplete="off"
                            className="p-0 border-blueColor"
                            customInputClass="px-2 py-[10px] text-[15px] w-full rounded-md outline-none placeholder:text-sm"
                        />
                        <label className="font-bold text-gray-600  pt-2">
                            Surname
                        </label>
                        <InputBox
                            {...register('sur_name', {
                                required: 'Surname is required'
                            })}
                            placeholder="Surname*"
                            error={errors.sur_name?.message}
                            autoComplete="off"
                            className="p-0"
                            customInputClass="px-2 py-[10px] text-[15px] w-full rounded-md outline-none placeholder:text-sm"
                        />
                        <label className="font-bold text-gray-600 pt-2">
                            Given Name
                        </label>
                        <InputBox
                            {...register('given_name', {
                                required: 'Given Name is required'
                            })}
                            placeholder="Given Name(s)*"
                            error={errors.given_name?.message}
                            autoComplete="off"
                            className="p-0"
                            customInputClass="px-2 py-[10px] text-[15px] w-full rounded-md outline-none placeholder:text-sm"
                        />
                        <label className="font-bold text-gray-600 pt-2">
                            Date Of Issue
                        </label>
                        <InputBox
                            {...register('date_of_issue', {
                                required: 'Date Of Issue is required'
                            })}
                            type="dob"
                            placeholder="Date Of Issue*"
                            error={errors.date_of_issue?.message}
                            autoComplete="off"
                            className="p-0"
                            customInputClass="px-2 py-[10px] text-[15px] w-full rounded-md outline-none placeholder:text-sm"
                        />
                        <label className="font-bold text-gray-600 pt-2">
                            Date Of Expiry
                        </label>
                        <InputBox
                            {...register('date_of_expiry', {
                                required: 'Date Of Expiry is required'
                            })}
                            type="dob"
                            placeholder="Date Of Expiry*"
                            error={errors.date_of_expiry?.message}
                            autoComplete="off"
                            className="p-0"
                            customInputClass="px-2 py-[10px] text-[15px] w-full rounded-md outline-none placeholder:text-sm"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

FileSubmitted.layout = { header: false, footer: false };
export default FileSubmitted;
