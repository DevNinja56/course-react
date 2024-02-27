import React, { useState } from 'react';
import InputBox from '@/components/Input';
import { BiMessageRoundedError } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
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

interface formType {
    startDate: string;
    completeDate: string;
    institution: string;
    country: string;
}
interface selectType  {
    value: string;
    label: string;
}

const ConSolid_MarkSheet = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<formType>();

    const router = useRouter();
    const { id } = router.query;
    const token = getToken();
    const [uploadFiles, setUploadFiles] = useState<string>();
    const [isLoading, setIsLoading] = useState(false);

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

    const handleBack = () => {
        router.back();
    };

    const onSubmit = async (data: formType) => {
        try {
            const response = await axios.patch(
                `${BASE_URL}${API_ENDPOINTS.APPLY_DOCUMENTS}/${id}`,
                {
                    documents: {
                        academic_certificates: {
                            consolidated_mark_sheets: {
                                url: [uploadFiles],
                                startDate: data.startDate,
                                completeDate: data.completeDate,
                                institution: data.institution,
                                country: data.country
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

    const handleCountryChange = (selectedOptions: selectType) => {
        setValue('country', selectedOptions.value);
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
                <div>
                    <Button
                        type="submit"
                        text="Save"
                        onClick={handleSubmit(onSubmit)}
                        className="rounded-none py-2 px-4"
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
                <div className="w-[48%] py-8 px-16">
                    <div className="w-full h-[600px] bg-BgCardPassport">
                        {uploadFiles && <PDFViewer pdfUrl={uploadFiles} />}
                    </div>
                </div>

                <div className="w-1/4 p-8 bg-blueColor bg-opacity-5">
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
                                onChange={(selectedOption) => handleCountryChange(selectedOption as selectType)}
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
