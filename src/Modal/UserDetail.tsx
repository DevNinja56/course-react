import { useUi } from '@/hooks/user-interface';
import { cities_list, country_list } from '@/utils/data/country';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUserAuth } from '@/hooks/auth';
import toast from 'react-hot-toast';
import { fetchRequest } from '@/utils/axios/fetch';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import InputBox from '@/components/Input';
import Select from 'react-select';
import { CSSObject } from '@emotion/styled';

interface formType {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone_number?: string;
    date_of_birth: string;
    nationality: string;
    country_of_residence: string;
    city_of_residence: string;
    intake: string;
    campus: string;
    course: string;
    message: string;
}

const intakeOptions = [
    'january 2025',
    'july 2025',
    'january 2026',
    'july 2026',
    'january 2027',
    'july 2027'
];
const messageList = [
    'I want to apply for this course.',
    'I want to know more about this course.',
    'I want to confirm the scholarship on this course.',
    'Other Message'
];

const UserDetail = () => {
    const { modalState } = useUi();
    const [otherMessage, setMessage] = useState(false);
    const { courseId } = modalState as { courseId: string };

    const { isAuthenticated, user } = useUserAuth();
    const {
        register,
        handleSubmit: fromSubmit,
        formState: { errors, isValid },
        setValue,
        reset
    } = useForm<formType>();

    const [firstStep, setFirstStep] = useState<'first' | 'second'>(
        !isAuthenticated ? 'first' : 'second'
    );

    const onClickNext = () => {
        if (firstStep === 'first' && isValid) {
            setFirstStep('second');
        }
    };

    const onClickBack = () => {
        if (!isAuthenticated && firstStep === 'second') {
            setFirstStep('first');
        }
    };

    const handleSubmit = ({
        first_name,
        last_name,
        date_of_birth,
        nationality,
        country_of_residence,
        city_of_residence,
        phone_number,
        ...body
    }: formType) => {
        // setIsLoading(true);

        toast.promise(
            fetchRequest({
                url: API_ENDPOINTS.APPLY,
                type: 'post',
                body: {
                    ...body,
                    course: courseId,
                    userDetails: !isAuthenticated
                        ? {
                              first_name,
                              last_name,
                              date_of_birth,
                              nationality,
                              country_of_residence,
                              city_of_residence,
                              phone_number
                          }
                        : null,
                    user: isAuthenticated ? user.id : null
                }
            }),
            {
                loading: 'Please wait...',
                success: () => {
                    reset();

                    return 'Form submitted successfully';
                },
                error: 'An error occurred'
            }
        );
    };

    return (
        <>
            {firstStep === 'first' ? (
                <div className="p-7 bg-white rounded-3xl">
                    <div className="flex items-center gap-2">
                        <div className="bg-blueColor p-2 rounded-full">
                            <img src="/images/userLogo.png" alt="" />
                        </div>
                        <h2 className="text-3xl font-bold">Basic Details</h2>
                    </div>
                    <p className="text-lg font-medium text-darkGrayColor py-3 w-3/4 leading-5">
                        We have your basic information, please review and make
                        sure all your data is accurate
                    </p>
                    <form
                        onSubmit={fromSubmit(handleSubmit)}
                        className="h-auto"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 py-1">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold text-grayColor">
                                    First Name
                                </label>

                                <InputBox
                                    {...register('first_name', {
                                        required: 'Name is required'
                                    })}
                                    placeholder="Your First Name"
                                    error={
                                        errors.first_name &&
                                        errors.first_name.message
                                    }
                                    autoComplete="off"
                                    className="p-0"
                                    customInputClass="border py-2 pl-2 pr-20 rounded-md w-full text-sm"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold text-grayColor">
                                    Last Name
                                </label>

                                <InputBox
                                    {...register('last_name', {
                                        required: 'Last Name is required'
                                    })}
                                    placeholder="Your Last Name"
                                    error={errors.last_name?.message}
                                    autoComplete="off"
                                    className="p-0"
                                    customInputClass="border py-2 pl-2 pr-20 rounded-md w-full text-sm"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-1">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold text-grayColor">
                                    Date of birth
                                </label>

                                <InputBox
                                    {...register('date_of_birth', {
                                        required: 'Date of Birth is required'
                                    })}
                                    placeholder="DD/MM/YYYY"
                                    error={
                                        errors.date_of_birth &&
                                        errors.date_of_birth.message
                                    }
                                    autoComplete="off"
                                    className="p-0"
                                    customInputClass="border py-2 pl-2 pr-20 rounded-md w-full text-sm"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold text-grayColor ">
                                    Nationality
                                </label>

                                <Select
                                    {...register('nationality', {
                                        required: 'Nationality is required'
                                    })}
                                    options={country_list?.map(
                                        (nationality) => ({
                                            label: nationality,
                                            value: nationality
                                        })
                                    )}
                                    placeholder="Select Nationality"
                                    onChange={(e) => {
                                        setValue('nationality', e?.value ?? '');
                                    }}
                                    styles={{
                                        control: (base: CSSObject) => ({
                                            ...base,
                                            padding: '0px',
                                            borderRadius: '6px',
                                            border:
                                                errors.nationality &&
                                                errors.nationality?.message
                                                    ? '1px solid red'
                                                    : '1px solid #717070'
                                        })
                                    }}
                                />
                                {errors.nationality?.message && (
                                    <span className="text-xs  text-red-600 ">
                                        {errors.nationality?.message}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-1">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold text-grayColor">
                                    Country of residence
                                </label>
                                <Select
                                    {...register('country_of_residence', {
                                        required: 'Country is required'
                                    })}
                                    options={country_list?.map((country) => ({
                                        label: country,
                                        value: country
                                    }))}
                                    placeholder="Select Country"
                                    onChange={(e) => {
                                        setValue(
                                            'country_of_residence',
                                            e?.value ?? ''
                                        );
                                    }}
                                    styles={{
                                        control: (base: CSSObject) => ({
                                            ...base,
                                            padding: '0px',
                                            borderRadius: '6px',
                                            border:
                                                errors.country_of_residence &&
                                                errors.country_of_residence
                                                    ?.message
                                                    ? '1px solid red'
                                                    : '1px solid #717070'
                                        })
                                    }}
                                />
                                {errors.country_of_residence?.message && (
                                    <span className="text-xs  text-red-600 ">
                                        {errors.country_of_residence?.message}
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold text-grayColor">
                                    City of residence
                                </label>
                                <Select
                                    {...register('city_of_residence', {
                                        required: 'City is required'
                                    })}
                                    options={cities_list?.map((city) => ({
                                        label: city,
                                        value: city
                                    }))}
                                    placeholder="Select City"
                                    onChange={(e) => {
                                        setValue(
                                            'city_of_residence',
                                            e?.value ?? ''
                                        );
                                    }}
                                    styles={{
                                        control: (base: CSSObject) => ({
                                            ...base,
                                            padding: '0px',
                                            borderRadius: '6px',
                                            border:
                                                errors.city_of_residence &&
                                                errors.city_of_residence
                                                    ?.message
                                                    ? '1px solid red'
                                                    : '1px solid #717070'
                                        })
                                    }}
                                />
                                {errors.city_of_residence?.message && (
                                    <span className="text-xs  text-red-600 ">
                                        {errors.city_of_residence?.message}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 w-1/2">
                            <label className="text-sm font-semibold text-grayColor">
                                Phone Number
                            </label>

                            <InputBox
                                {...register('phone_number', {
                                    required: 'Phone Number is required'
                                })}
                                placeholder="+92 300 1234567"
                                error={errors.phone_number?.message}
                                autoComplete="off"
                                className="p-0"
                                customInputClass="border py-2 pl-2 pr-20 rounded-md w-[97%] text-sm"
                            />
                        </div>
                        <div className="flex items-end justify-end">
                            <button
                                onClick={onClickNext}
                                className=" flex items-center gap-2 px-7 py-3 rounded-md text-lg font-semibold bg-blueColor text-white"
                            >
                                Continue
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.5 15L12.5 10L7.5 5"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="p-7 bg-white rounded-3xl">
                    <div className="flex items-center gap-2">
                        <div className="bg-blueColor p-2 rounded-full">
                            <img src="/images/userLogo.png" alt="" />
                        </div>
                        <h2 className="text-3xl font-bold">Choose Intake</h2>
                    </div>
                    <p className="text-lg font-medium text-darkGrayColor py-3">
                        Please choose your preferred intake. By default earliest
                        intake is choosen
                    </p>
                    <form onSubmit={fromSubmit(handleSubmit)}>
                        <div className="flex justify-between gap-5 py-3 flex-col">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold text-grayColor">
                                    Intake
                                </label>

                                <Select
                                    {...register('intake', {
                                        required: 'Intake selection is required'
                                    })}
                                    options={intakeOptions?.map((intake) => ({
                                        label: intake,
                                        value: intake
                                    }))}
                                    placeholder="January 2025"
                                    onChange={(e) => {
                                        setValue('intake', e?.value ?? '');
                                    }}
                                    styles={{
                                        control: (base: CSSObject) => ({
                                            ...base,
                                            padding: '0px',
                                            borderRadius: '6px',
                                            border: errors.intake?.message
                                                ? '1px solid red'
                                                : '1px solid #717070'
                                        })
                                    }}
                                />
                                {errors.intake?.message && (
                                    <span className="text-xs  text-red-600 ">
                                        {errors.intake?.message}
                                    </span>
                                )}
                            </div>
                            <div className="w-full my-2">
                                <label className="text-sm font-semibold text-grayColor">
                                    Message
                                </label>

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
                                        control: (base: CSSObject) => ({
                                            ...base,
                                            padding: '0px',
                                            borderRadius: '6px',
                                            border: errors.message?.message
                                                ? '1px solid red'
                                                : '1px solid #717070'
                                        })
                                    }}
                                />
                                {errors.message?.message && (
                                    <span className="text-xs  text-red-600 ">
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
                                        <span className="text-xs  text-red-600 ">
                                            {errors.message?.message}
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <p className="text-base text-darkGrayColor">
                                I hereby give permission to Course Option to
                                represent me and my application with
                                institutions
                            </p>
                        </div>

                        <div className="flex items-end justify-between pt-9">
                            <button
                                onClick={onClickBack}
                                className={`flex items-center gap-2 px-7 py-3 rounded-md text-lg font-semibold ${
                                    isAuthenticated && firstStep === 'second'
                                        ? 'hidden'
                                        : 'bg-[#D5E4FF]  text-blueColor'
                                }`}
                                disabled={
                                    isAuthenticated && firstStep === 'second'
                                        ? true
                                        : undefined
                                }
                            >
                                back
                            </button>
                            <button className="flex items-center gap-2 px-7 py-3 rounded-md text-lg font-semibold bg-blueColor text-white">
                                Continue
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.5 15L12.5 10L7.5 5"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default UserDetail;
