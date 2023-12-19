/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import InputBox from '../Input';
import { useForm } from 'react-hook-form';
import { fetchRequest } from '@/utils/axios/fetch';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import toast from 'react-hot-toast';
import Button from '../Button';
import { useUserAuth } from '@/hooks/auth';
import {
    useGetCoursesByDegreeQuery,
    useGetDegreesQuery,
    useGetInstituteQuery
} from '@/store/slices/allRequests';
import Select from 'react-select';
import { ROUTES } from '@/config/constant';
import Link from 'next/link';
import { useApply } from '@/hooks/apply';

interface formType {
    name?: string;
    email?: string;
    phone_number?: string;
    message: string;
    degree: string;
    course: string;
    institute: string;
}

const messageList = [
    'I want to apply for this course.',
    'I want to know more about this course.',
    'I want to confirm the scholarship on this course.',
    'Other Message'
];

const ApplyOnline = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const [otherMessage, setMessage] = useState(false);
    const {
        degree,
        course,
        institute,
        addDegreeState,
        addCourseState,
        addInstituteState
    } = useApply();
    const { isAuthenticated, user } = useUserAuth();
    const { data: degreeList, isLoading: degreeLoading } = useGetDegreesQuery();
    const { data: courseList, isLoading: courseLoading } =
        useGetCoursesByDegreeQuery({ degreeId: degree?.value ?? '' });
    const { data: instituteList, isLoading: instituteLoading } =
        useGetInstituteQuery();
    const {
        register,
        handleSubmit: fromSubmit,
        formState: { errors },
        setValue,
        reset
    } = useForm<formType>();

    useEffect(() => {
        setValue('degree', degree?.value ?? '');
        setValue('course', course?.value ?? '');
        setValue('institute', institute?.value ?? '');
    }, [degree, course, institute]);

    const handleSubmit = ({ name, email, phone_number, ...body }: formType) => {
        setIsLoading(true);

        toast
            .promise(
                fetchRequest({
                    url: API_ENDPOINTS.APPLY,
                    type: 'post',
                    body: {
                        ...body,
                        userDetails: !isAuthenticated
                            ? { name, email, phone_number }
                            : null,
                        user: isAuthenticated ? user.id : null
                    }
                }),
                {
                    loading: 'Please wait...',
                    success: () => {
                        reset();
                        setIsSubmit(true);
                        return 'Form submitted successfully';
                    },
                    error: 'An error occurred'
                }
            )
            .finally(() => setIsLoading(false));
    };

    return (
        <>
            {isSubmit ? (
                <>
                    <div className="bg-blue-500 text-white p-4 rounded-md shadow-md">
                        <p className="font-bold">Congrats!</p>
                        <p>
                            Your application has been received, and our team
                            will be in touch with you soon.
                        </p>
                    </div>
                    <div className="my-5 flex justify-center">
                        <Link
                            href={ROUTES.APPLIES}
                            className="border-2 border-blueColor text-blueColor px-5 py-2 rounded-md hover:text-white hover:bg-blueColor"
                        >
                            View My Applies
                        </Link>
                    </div>
                </>
            ) : (
                <div className="w-full bg-white custom-shadow rounded-xl px-5 py-8 mb-24">
                    <form onSubmit={fromSubmit(handleSubmit)}>
                        {!isAuthenticated && (
                            <div className="flex gap-3 justify-between">
                                <InputBox
                                    {...register('name', {
                                        required: 'Name is required'
                                    })}
                                    placeholder="Name"
                                    error={errors.name?.message}
                                    autoComplete="off"
                                    className="p-0"
                                    customInputClass="px-2 py-[5px] text-[15px] w-full rounded-md outline-none placeholder:text-sm"
                                />
                                <InputBox
                                    {...register('email', {
                                        required: 'Email is required'
                                    })}
                                    placeholder="Email Address"
                                    error={errors.email?.message}
                                    customInputClass="px-2 py-[5px] text-[15px] w-full rounded-md outline-none placeholder:text-sm"
                                />
                                <InputBox
                                    {...register('phone_number', {
                                        required: 'Phone Number is required'
                                    })}
                                    type="tel"
                                    placeholder="Phone Number"
                                    error={errors.phone_number?.message}
                                    customInputClass="px-2 py-[5px] text-[15px] w-full rounded-md outline-none placeholder:text-sm"
                                />
                            </div>
                        )}
                        <div className="flex gap-3 justify-between my-3">
                            <div className="w-full">
                                <Select
                                    {...register('institute', {
                                        required: 'Institute is required'
                                    })}
                                    options={instituteList?.map(
                                        (institute) => ({
                                            label: institute.name,
                                            value: institute.id
                                        })
                                    )}
                                    placeholder="Select Institute"
                                    isLoading={instituteLoading}
                                    onChange={(e) => {
                                        addInstituteState({
                                            value: e?.value ?? '',
                                            label: e?.label ?? ''
                                        });
                                    }}
                                    defaultValue={institute ?? null}
                                    styles={{
                                        control: (base: any) => ({
                                            ...base,
                                            border: errors.institute?.message
                                                ? '1px solid red'
                                                : '1px solid #717070'
                                        })
                                    }}
                                />
                                {errors.institute?.message && (
                                    <span className="text-xs mt-1 text-red-600 ">
                                        {errors.institute?.message}
                                    </span>
                                )}
                            </div>
                            <div className="w-full">
                                <Select
                                    {...register('degree', {
                                        required: 'Degree is required'
                                    })}
                                    options={degreeList?.map((degree) => ({
                                        label: degree.name,
                                        value: degree.id
                                    }))}
                                    placeholder="Select Degree"
                                    isLoading={degreeLoading}
                                    onChange={(e) => {
                                        addDegreeState({
                                            value: e?.value ?? '',
                                            label: e?.label ?? ''
                                        });
                                    }}
                                    defaultValue={degree ?? null}
                                    styles={{
                                        control: (base: any) => ({
                                            ...base,
                                            border: errors.degree?.message
                                                ? '1px solid red'
                                                : '1px solid #717070'
                                        })
                                    }}
                                />
                                {errors.degree?.message && (
                                    <span className="text-xs mt-1 text-red-600 ">
                                        {errors.degree?.message}
                                    </span>
                                )}
                            </div>
                            <div className="w-full">
                                <Select
                                    {...register('course', {
                                        required: 'Course is required'
                                    })}
                                    options={courseList?.map((course) => ({
                                        label: course.name,
                                        value: course.id
                                    }))}
                                    isDisabled={!degree}
                                    placeholder="Select Course"
                                    isLoading={courseLoading}
                                    onChange={(e) => {
                                        addCourseState({
                                            value: e?.value ?? '',
                                            label: e?.label ?? ''
                                        });
                                    }}
                                    defaultValue={course ?? null}
                                    styles={{
                                        control: (base: any) => ({
                                            ...base,
                                            border: errors.course?.message
                                                ? '1px solid red'
                                                : '1px solid #717070'
                                        })
                                    }}
                                />
                                {errors.course?.message && (
                                    <span className="text-xs mt-1 text-red-600 ">
                                        {errors.course?.message}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="w-full my-2">
                            <Select
                                {...register('message', {
                                    required: 'Message is required'
                                })}
                                options={messageList?.map((msg) => ({
                                    label: msg,
                                    value: msg
                                }))}
                                placeholder="Select Message"
                                onChange={(e) => {
                                    if (
                                        e?.value ===
                                        messageList[messageList.length - 1]
                                    ) {
                                        setMessage(true);
                                        return;
                                    }
                                    setMessage(false);
                                    setValue('message', e?.value ?? '');
                                }}
                                styles={{
                                    control: (base: any) => ({
                                        ...base,
                                        border: errors.message?.message
                                            ? '1px solid red'
                                            : '1px solid #717070'
                                    })
                                }}
                            />
                            {errors.message?.message && (
                                <span className="text-xs mt-1 text-red-600 ">
                                    {errors.message?.message}
                                </span>
                            )}
                        </div>
                        {otherMessage && (
                            <div className="message">
                                <textarea
                                    {...register('message', {
                                        required: 'Message is required',
                                        min: 20
                                    })}
                                    className={`block p-2.5 w-full text-sm md:text-xl bg-gray-50 rounded-lg  resize-none outline-none  ${
                                        errors.message?.message
                                            ? 'text-red-600 border border-red-600'
                                            : 'text-grayColor border border-grayColor focus:ring-blue-500 focus:border-blue-500'
                                    }`}
                                    placeholder="Write your message..."
                                    rows={5}
                                />
                                {errors.message?.message && (
                                    <span className="text-xs mt-1 text-red-600 ">
                                        {errors.message?.message}
                                    </span>
                                )}
                            </div>
                        )}
                        <div className="mt-5 w-1/4  mx-auto">
                            <Button
                                type="submit"
                                disabled={isLoading}
                                isLoader={isLoading}
                                text="Submit"
                            />
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default ApplyOnline;
