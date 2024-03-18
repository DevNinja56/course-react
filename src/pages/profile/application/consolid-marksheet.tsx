import React, { useState } from 'react';
import InputBox from '@/components/Input';
import { BiMessageRoundedError } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import { fetchRequest } from '@/utils/axios/fetch';
import Button from '@/components/Button/index';
import PDFViewer from '@/components/PDFViewer';
import PDFSmallViewer from '@/components/PDFViewer/PDFSmallViewer';
import { FaArrowLeft } from 'react-icons/fa';
import ReactSelectCustom from '@/components/Select/index';
import { useRouter } from 'next/router';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import axios from 'axios';
import { BASE_URL } from '@/utils/axios';
import { getToken } from '@/utils/axios/token';
import { country_list } from '@/utils/data/country';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addFiles } from '@/store/slices/apply.slice';
import { useGetApplyByIdQuery } from '@/store/slices/allRequests';

interface formType {
    startDate: string;
    completeDate: string;
    institution: string;
    country: string;
}
interface selectType {
    value: string;
    label: string;
}

interface FileDetails {
    apply: {
        files: {
            conSolidFile: File[];
        };
    };
}

const ConSolid_MarkSheet = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<formType>();
    const Files = useSelector((state: FileDetails) => state.apply.files);
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;
    const { data: getApply } = useGetApplyByIdQuery(id);
    const token = getToken();
    const [isLoading, setIsLoading] = useState(false);
    const [fullFile, setFullFile] = useState('');

    const identity = {
        passport: {
            url: [getApply?.documents?.identity?.passport?.url],
            given_name: getApply?.documents?.identity?.passport?.given_name,
            sur_name: getApply?.documents?.identity?.passport?.sur_name,
            number: getApply?.documents?.identity?.passport?.number,
            date_of_issue: getApply?.documents?.identity?.passport?.date_of_issue,
            date_of_expiry: getApply?.documents?.identity?.passport?.date_of_expiry
        }
    };
    const semester_mark_sheets = {
        url: getApply?.documents?.academic_certificates?.semester_mark_sheets
            ?.url
    };

    const provisional_certificate = {
        url: getApply?.documents?.academic_certificates?.provisional_certificate
            ?.url
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = e.target.files;
        const filesArray = uploadedFiles ? [...uploadedFiles] : [];
        dispatch(addFiles({ type: 'conSolid', filesArray }));
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

    const handleBack = () => {
        router.back();
    };

    const onSubmit = async (data: formType) => {
        const uploadResponse = await uploadFilesToApi(Files.conSolidFile);
        toast
            .promise(
                fetchRequest({
                    url: `${BASE_URL}${API_ENDPOINTS.APPLY_DOCUMENTS}/${id}`,
                    type: 'patch',
                    body: {
                        ...getApply,
                        course: getApply?.course.id,
                        user: getApply?.user.id,
                        documents: {
                            ...(identity.passport.url
                                ? {
                                      identity: {
                                          passport: {
                                            url: identity.passport.url[0],
                                            given_name: identity.passport.given_name,
                                            sur_name: identity.passport.sur_name,
                                            number: identity.passport.number,
                                            date_of_issue: identity.passport.date_of_issue,
                                            date_of_expiry: identity.passport.date_of_expiry
                                          }
                                      }
                                  }
                                : {}),
                            academic_certificates: {
                                consolidated_mark_sheets: {
                                    url: uploadResponse,
                                    date_of_start: data.startDate,
                                    date_of_completion: data.completeDate,
                                    institute: data.institution,
                                    country: data.country
                                },
                                ...(semester_mark_sheets.url
                                    ? {
                                          semester_mark_sheets: {
                                              url: semester_mark_sheets.url
                                          }
                                      }
                                    : {}),
                                ...(provisional_certificate.url
                                    ? {
                                          provisional_certificate: {
                                              url: provisional_certificate.url
                                          }
                                      }
                                    : {})
                            },
                            professional_records: {
                                ...getApply?.documents?.professional_records
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

    const handleCountryChange = (selectedOptions: selectType) => {
        setValue('country', selectedOptions.value);
    };

    const handleFileClick = (fileUrl: string) => {
        setFullFile(fileUrl);
    };

    return (
        <>
            <div className="flex justify-between py-8 px-4 bg-white">
                <div className="flex items-center gap-4 pl-4">
                    <div onClick={handleBack}>
                        <FaArrowLeft />
                    </div>
                    <div>
                        <span className="font-bold text-xl block">
                            Consolidated Marksheets
                        </span>
                        <span className="text-base font-medium">
                            UNDERGRADUTE
                        </span>
                    </div>
                    <div className="bg-blueColor bg-opacity-10 p-2 rounded">
                        <span className="text-blueColor">Submitted</span>
                    </div>
                </div>
                <div className="md:hidden lg:block sm:hidden">
                    <Button
                        type="submit"
                        text="Save"
                        onClick={handleSubmit(onSubmit)}
                        className="rounded-none py-2 px-4"
                    />
                </div>
            </div>

            <div className="flex w-full lg:flex-row md:flex-col sm:flex-col">
                <div className="w-1/4 flex flex-col md:hidden lg:block sm:hidden">
                    <div className="w-full bg-BgColorPassport bg-opacity-5 p-8">
                        <div className="w-full bg-BgCardPassport p-4">
                            {Files && (
                                <PDFSmallViewer
                                    pdfUrl={Files.conSolidFile}
                                    onFileClick={handleFileClick}
                                />
                            )}
                        </div>
                    </div>
                    <label
                        htmlFor="fileUpload"
                        className=" text-center py-4 font-semibold text-3xl cursor-pointer bg-blueColor border-transparent text-white hover:bg-white hover:border-2 hover:border-blueColor hover:text-blueColor px-12 ml-12"
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
                <div className="lg:w-[48%] sm:w-full md:w-full py-8 px-16">
                    <div className="w-full bg-BgCardPassport sm:pl-4 md:pl-36 lg:pl-0">
                        {fullFile && <PDFViewer pdfUrl={fullFile} />}
                    </div>
                    <div className="md:flex sm:flex lg:hidden justify-between w-[85%] mx-auto mt-4">
                        <label
                            htmlFor="fileUpload"
                            className=" text-center py-[19px] px-[127px] font-semibold cursor-pointer bg-blueColor border-transparent text-white hover:bg-white hover:border-2 hover:border-blueColor hover:text-blueColor"
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
                                className="rounded py-[19px] px-[127px]"
                                onClick={handleSubmit(onSubmit)}
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-full sm:w-full p-8 bg-blueColor bg-opacity-5">
                    <span className="font-bold text-xl text-mainTextColor">
                        Fill in your details
                    </span>
                    <p className="p-4 bg-white flex gap-2 items-center rounded-md mt-4">
                        <BiMessageRoundedError className="text-[4rem] text-blueColor" />
                        <span className="text-[15px] font-medium text-blueColor">
                            Add your Undergraduate details and get personalised
                            tips to improve your chances.
                        </span>
                    </p>
                    <form
                        className="flex flex-col gap-4 pt-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="w-full border border-gray-300 md:border-none">
                            <label className="font-bold text-gray-600">
                                Where did you studied this ?
                            </label>
                            <ReactSelectCustom
                                options={country_list.map((country) => ({
                                    value: country,
                                    label: country
                                }))}
                                className=" mt-2 pt-[6px] pb-[6px] rounded-[8px] w-full outline-none placeholder:text-sm text-grayColor border border-grayColor bg-white "
                                placeholder="Country for Education?"
                                onChange={(selectedOption) =>
                                    handleCountryChange(
                                        selectedOption as selectType
                                    )
                                }
                            />
                        </div>

                        <div className="w-full border border-gray-300 md:border-none">
                            <label className="font-bold text-gray-600">
                                Which institution did you study at?
                            </label>
                            <InputBox
                                {...register('institution', {
                                    required: 'Institution is required'
                                })}
                                type="text"
                                placeholder="University*"
                                error={errors.institution?.message}
                                autoComplete="off"
                                className="p-0"
                                customInputClass="px-2 py-[10px] text-[15px] w-full rounded-md outline-none placeholder:text-sm"
                            />
                        </div>

                        <div className="w-full border border-gray-300 md:border-none">
                            <label className="font-bold text-gray-600">
                                Start date of your degree
                            </label>
                            <InputBox
                                {...register('startDate', {
                                    required: 'Start Date is required'
                                })}
                                type="dob"
                                placeholder="Date Of start*"
                                error={errors.startDate?.message}
                                autoComplete="off"
                                className="p-0"
                                customInputClass="px-2 py-[10px] text-[15px] w-full rounded-md outline-none placeholder:text-sm mb-4"
                            />
                            <label className="font-bold text-gray-600">
                                Completion date of your degree
                            </label>
                            <InputBox
                                {...register('completeDate', {
                                    required: 'Start Date is required'
                                })}
                                type="dob"
                                placeholder="Date Of completion*"
                                error={errors.completeDate?.message}
                                autoComplete="off"
                                className="p-0"
                                customInputClass="px-2 py-[10px] text-[15px] w-full rounded-md outline-none placeholder:text-sm"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

ConSolid_MarkSheet.layout = { header: false, footer: false };
export default ConSolid_MarkSheet;
