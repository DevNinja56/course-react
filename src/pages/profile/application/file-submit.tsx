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

interface formType {
    number: string;
    sur_name: string;
    given_name: string;
    date_of_issue: Date;
    date_of_expiry: Date;
}

const FileSubmitted = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<formType>();
    const token = getToken();
    const router = useRouter();
    const { id } = router.query;
    const [isLoading, setIsLoading] = useState(false);
    const [uploadFiles, setUploadFiles] = useState<string>('');

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e?.target?.files?.[0];
        if (files) {
            setIsLoading(true);
            try {
                const formData = new FormData();
                formData.append('file', files);
                const response = await axios.post(
                    BASE_URL + API_ENDPOINTS.FILE_S3_UPLOAD,
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                setUploadFiles(response.data.data.Location);
            } catch (error) {
                toast.error('Error uploading file');
            } finally {
                setIsLoading(false);
                toast.success('Document Upload Successfully');
            }
        }
    };

    const onSubmit = async (data: formType) => {
        try {
            const response = await axios.patch(
                `${BASE_URL}${API_ENDPOINTS.APPLY_DOCUMENTS}/${id}`,
                {
                    documents: {
                        identity: {
                            passport: {
                                url: [uploadFiles],
                                given_name: data.given_name,
                                sur_name: data.sur_name,
                                number: data.number,
                                date_of_expiry: data.date_of_expiry,
                                date_of_issue: data.date_of_issue
                            }
                        }
                    }
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            toast.success('Documents Updates Successfully');
            console.log(response)
        } catch (error) {
            toast.error('Error updating data');
        }
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
                <div>
                    <Button
                        type="submit"
                        text="Save"
                        className="rounded-none py-2 px-4"
                        onClick={handleSubmit(onSubmit)}
                    />
                </div>
            </div>

            <div className="flex w-full">
                <div className="w-1/4 flex flex-col ">
                    <div className="w-full bg-BgColorPassport bg-opacity-5 p-8">
                        <div className="w-full bg-BgCardPassport p-4">
                            {uploadFiles && (
                                <PDFSmallViewer pdfUrl={uploadFiles} />
                            )}
                        </div>
                    </div>
                    <label
                        htmlFor="fileUpload"
                        className=" text-center py-4 font-semibold text-3xl cursor-pointer bg-blueColor border-transparent text-white hover:bg-white hover:border-2 hover:border-blueColor hover:text-blueColor"
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
                <div className="w-2/4 py-8 px-16">
                    <div className="w-full bg-BgCardPassport ">
                        {uploadFiles && <PDFViewer pdfUrl={uploadFiles} />}
                    </div>
                </div>

                {uploadFiles && (
                    <div className="w-1/4 p-8 bg-blueColor bg-opacity-5">
                        <span className="font-bold text-xl">
                            Fill in your details
                        </span>
                        <p className="p-4 bg-white flex gap-2 items-center rounded-md mt-4">
                            <BiMessageRoundedError className="text-[4rem] text-blueColor" />
                            <span className="text-[15px] font-medium text-blueColor">
                                Add your details and get personalised tips to
                                improve your chances.
                            </span>
                        </p>
                        <form
                            className="flex flex-col gap-4 pt-4 "
                            onSubmit={handleSubmit(onSubmit)}
                        >
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
                )}
            </div>
        </>
    );
};

FileSubmitted.layout = { header: false, footer: false };
export default FileSubmitted;
