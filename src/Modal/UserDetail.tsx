import { useUi } from '@/hooks/user-interface';
import React, { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUserAuth } from '@/hooks/auth';
import toast from 'react-hot-toast';
import { fetchRequest } from '@/utils/axios/fetch';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import InputBox from '@/components/Input';
import Select, { SingleValue } from 'react-select';
import Image from 'next/image';
import { CiCircleRemove } from 'react-icons/ci';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleOAuthWraper from '@/components/Auth/GoogleSignInBtn';
import Button from '@/components/Button';
import { ROUTES } from '@/config/constant';
import { modalType } from '@/store/slices/ui.slice';
import Link from 'next/link';
import { MdOutlineMail } from 'react-icons/md';
import { BiLock } from 'react-icons/bi';
import { FaArrowLeft } from 'react-icons/fa6';
import dynamic from 'next/dynamic';
import {
    useGetCoursesByInstituteQuery,
    useGetInstituteQuery
} from '@/store/slices/allRequests';
const FacebookLoginBtn = dynamic(import('@/components/Auth/FacebookLoginBtn'), {
    ssr: false
});

interface formType {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone_number?: string;
    dob: string;
    nationality: string;
    country_of_residence: string;
    city_of_residence: string;
    intake: string;
    campus: string;
    course: string;
    message: string;
    permission: boolean;
}

const intakeOptions = [
    'January 2025',
    'July 2025',
    'January 2026',
    'July 2026',
    'January 2027',
    'July 2027'
];
const messageList = [
    'I want to apply for this course.',
    'I want to know more about this course.',
    'I want to confirm the scholarship on this course.',
    'Other Message'
];

const UserDetail = () => {
    const { modalState, hideModal } = useUi();
    const [otherMessage, setMessage] = useState(false);
    const { courseId } = modalState as { courseId: string };
    const { isAuthenticated, user, updateUserDetails, loggedInUser } =
        useUserAuth();
    const { updateModal } = useUi();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [selectedInstituteId, setSelectedInstituteId] = useState<string>();
    const [selectedCourseId, setSelectedCourseId] = useState<string>();
    const [selectedIntake, setSelectedIntake] = useState<string[]>();

    const { data } = useGetInstituteQuery();
    const { data: courseData } = useGetCoursesByInstituteQuery({
        limit: 10,
        page: 1,
        instituteId: selectedInstituteId as string
    });

    const {
        register,
        handleSubmit: fromSubmit,
        formState: { errors },
        setValue,
        getValues,
        reset
    } = useForm<formType>();

    const [firstStep, setFirstStep] = useState<'first' | 'second'>(
        !isAuthenticated ? 'first' : 'second'
    );
    const intake = getValues('intake');
    const message = getValues('message');

    const onClickBack = () => {
        if (!isAuthenticated && firstStep === 'second') {
            setFirstStep('first');
        }
    };

    const handleSubmit = ({
        first_name,
        last_name,
        dob,
        nationality,
        country_of_residence,
        city_of_residence,
        phone_number,
        ...body
    }: formType) => {
        toast.promise(
            fetchRequest({
                url: API_ENDPOINTS.APPLY,
                type: 'post',
                body: {
                    ...body,
                    course: courseId ? courseId : selectedCourseId,
                    userDetails: !isAuthenticated
                        ? {
                              first_name,
                              last_name,
                              dob,
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
                    hideModal();
                    return 'Form submitted successfully';
                },
                error: 'An error occurred'
            }
        );
    };

    const handleSubmitUser = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        fetchRequest({
            url: API_ENDPOINTS.AUTH.SIGNIN,
            type: 'post',
            body: { email: email, password: password }
        })
            .then((res) => {
                updateUserDetails(res.data.user);
                loggedInUser({
                    access: res.data.accessToken,
                    refresh: res.data.refreshToken
                });
                setFirstStep('second');
                toast.success('User Logged In Success');
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <>
            {firstStep === 'first' ? (
                <div className="rounded-[10px] bg-white custom-shadow p-7 flex flex-col items-center relative min-w-0 md:min-w-[500px]">
                    <CiCircleRemove
                        onClick={hideModal}
                        className="text-blueColor absolute top-4 right-4 text-2xl cursor-pointer"
                    />
                    <Link href={ROUTES.HOMEPAGE}>
                        <FaArrowLeft className="absolute left-5 top-5 cursor-pointer text-blueColor h-6 w-6" />
                    </Link>
                    <h1 className="font-medium text-2xl md:text-[36px] text-mainTextColor mb-3">
                        Welcome Back
                    </h1>
                    <Link href={ROUTES.SIGN_UP}>
                        <p className="text-mainTextColor font-medium mb-4 md:mb-12 text-sm md:text-base">
                            No Account?{' '}
                            <span className="text-blueColor">Sign Up</span>
                        </p>
                    </Link>
                    <form className="w-full" onSubmit={handleSubmitUser}>
                        <div className="flex flex-col w-full gap-y-7 mb-3">
                            <InputBox
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                title="Email"
                                icon={MdOutlineMail}
                            />
                            <InputBox
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                                title="Password"
                                icon={BiLock}
                            />
                        </div>
                        <div className="flex justify-end mb-4">
                            <button
                                type="button"
                                onClick={() =>
                                    updateModal({
                                        type: modalType.reset_password,
                                        state: {}
                                    })
                                }
                                className="w-full text-right rounded-10px text-darkGrayColor"
                            >
                                Forgot password?
                            </button>
                        </div>
                        <Button
                            className="pt-[14px] pb-[13px]"
                            type="submit"
                            disabled={isLoading}
                            isLoader={isLoading}
                            text="Sign In"
                        />
                    </form>
                    <GoogleOAuthProvider
                        clientId={
                            process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? ''
                        }
                    >
                        <div className="w-full ">
                            <div className="flex items-center w-full my-3 justify-center">
                                <div className="w-16 h-px bg-gray-500 mr-4" />
                                <span className="text-gray-500">OR</span>
                                <div className="w-16 h-px bg-gray-500 ml-4" />
                            </div>
                            <GoogleOAuthWraper />
                            <FacebookLoginBtn />
                        </div>
                    </GoogleOAuthProvider>
                </div>
            ) : (
                <div className="p-7 bg-white rounded-3xl relative">
                    <CiCircleRemove
                        onClick={hideModal}
                        className="text-blueColor absolute top-4 right-4 text-2xl cursor-pointer"
                    />
                    <div className="flex items-center gap-2">
                        <div className="bg-blueColor p-2 rounded-full">
                            <Image
                                width={30}
                                height={30}
                                src="/images/userLogo.png"
                                alt=""
                            />
                        </div>
                        <h2 className="text-3xl font-bold">Choose Intake</h2>
                    </div>
                    <p className="text-lg font-medium text-darkGrayColor py-3">
                        Please choose your preferred intake. By default earliest
                        intake is choosen
                    </p>
                    <form onSubmit={fromSubmit(handleSubmit)}>
                        <div className="flex justify-between gap-5 py-3 flex-col">
                            {!courseId ? (
                                <>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm font-semibold text-grayColor">
                                            Institute
                                        </label>
                                        <Select
                                            options={data?.map((institute) => ({
                                                label: institute.name,
                                                value: institute.id
                                            }))}
                                            placeholder="Select Institute"
                                            onChange={(selectedOption) => {
                                                setSelectedInstituteId(
                                                    selectedOption?.value
                                                );
                                            }}
                                            styles={{
                                                control: (base: {
                                                    [key: string]: unknown;
                                                }) => ({
                                                    ...base,
                                                    padding: '0px',
                                                    borderRadius: '6px',
                                                    fontSize: '14px',
                                                    border: errors.intake
                                                        ?.message
                                                        ? '1px solid red'
                                                        : '1px solid #717070'
                                                })
                                            }}
                                            defaultValue={
                                                intake
                                                    ? {
                                                          label: intake,
                                                          value: intake
                                                      }
                                                    : undefined
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm font-semibold text-grayColor">
                                            Course
                                        </label>
                                        <Select
                                            options={
                                                courseData &&
                                                courseData?.data?.map(
                                                    (course) => ({
                                                        label: course.name,
                                                        value: course.id,
                                                        intake: course?.intakes
                                                    })
                                                )
                                            }
                                            isDisabled={!courseData?.data}
                                            placeholder="Select Course"
                                            onChange={(
                                                selectedOption: SingleValue<{
                                                    label: string;
                                                    value: string;
                                                    intake: string[];
                                                }>
                                            ) => {
                                                if (selectedOption !== null) {
                                                    setSelectedCourseId(
                                                        selectedOption.value
                                                    );
                                                    setSelectedIntake(
                                                        selectedOption.intake
                                                    );
                                                }
                                            }}
                                            styles={{
                                                control: (base: {
                                                    [key: string]: unknown;
                                                }) => ({
                                                    ...base,
                                                    padding: '0px',
                                                    borderRadius: '6px',
                                                    fontSize: '14px',
                                                    border: errors.intake
                                                        ?.message
                                                        ? '1px solid red'
                                                        : '1px solid #717070'
                                                })
                                            }}
                                            defaultValue={
                                                intake
                                                    ? {
                                                          label: intake,
                                                          value: intake,
                                                          intake: [intake]
                                                      }
                                                    : undefined
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm font-semibold text-grayColor">
                                            Intake
                                        </label>
                                        <Select
                                            {...register('intake', {
                                                required:
                                                    'Intake selection is required'
                                            })}
                                            options={selectedIntake?.map(
                                                (intake) => ({
                                                    label: intake,
                                                    value: intake
                                                })
                                            )}
                                            placeholder="Select Course Intake"
                                            onChange={(e) => {
                                                setValue(
                                                    'intake',
                                                    e?.value ?? ''
                                                );
                                            }}
                                            isDisabled={!selectedIntake}
                                            styles={{
                                                control: (base: {
                                                    [key: string]: unknown;
                                                }) => ({
                                                    ...base,
                                                    padding: '0px',
                                                    borderRadius: '6px',
                                                    fontSize: '14px',
                                                    border: errors.intake
                                                        ?.message
                                                        ? '1px solid red'
                                                        : '1px solid #717070'
                                                })
                                            }}
                                            defaultValue={
                                                intake
                                                    ? {
                                                          label: intake,
                                                          value: intake
                                                      }
                                                    : undefined
                                            }
                                        />
                                        {errors.intake?.message && (
                                            <span className="text-xs  text-red-600 ">
                                                {errors.intake?.message}
                                            </span>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-semibold text-grayColor">
                                        Intake
                                    </label>
                                    <Select
                                        {...register('intake', {
                                            required:
                                                'Intake selection is required'
                                        })}
                                        options={intakeOptions?.map(
                                            (intake) => ({
                                                label: intake,
                                                value: intake
                                            })
                                        )}
                                        placeholder="January 2025"
                                        onChange={(e) => {
                                            setValue('intake', e?.value ?? '');
                                        }}
                                        styles={{
                                            control: (base: {
                                                [key: string]: unknown;
                                            }) => ({
                                                ...base,
                                                padding: '0px',
                                                borderRadius: '6px',
                                                fontSize: '14px',
                                                border: errors.intake?.message
                                                    ? '1px solid red'
                                                    : '1px solid #717070'
                                            })
                                        }}
                                        defaultValue={
                                            intake
                                                ? {
                                                      label: intake,
                                                      value: intake
                                                  }
                                                : undefined
                                        }
                                    />
                                    {errors.intake?.message && (
                                        <span className="text-xs  text-red-600 ">
                                            {errors.intake?.message}
                                        </span>
                                    )}
                                </div>
                            )}
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
                                    defaultValue={
                                        message
                                            ? {
                                                  label: message,
                                                  value: message
                                              }
                                            : undefined
                                    }
                                    styles={{
                                        control: (base: {
                                            [key: string]: unknown;
                                        }) => ({
                                            ...base,
                                            padding: '0px',
                                            borderRadius: '6px',
                                            fontSize: '14px',
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
                            <input
                                type="checkbox"
                                {...register('permission', {
                                    required:
                                        'You must give permission to proceed'
                                })}
                            />
                            <p className="text-base text-darkGrayColor">
                                I hereby give permission to Course Option to
                                represent me and my application with
                                institutions
                            </p>
                        </div>
                        {errors.permission && (
                            <span className="text-xs text-red-600">
                                {errors.permission.message}
                            </span>
                        )}

                        <div className="flex items-end justify-between pt-9">
                            <button
                                onClick={onClickBack}
                                className={`flex items-center gap-2 px-7 py-3 rounded-md text-lg font-semibold  hover:bg-blue-400 hover:text-wh ${
                                    isAuthenticated && firstStep === 'second'
                                        ? 'hidden'
                                        : 'bg-[#D5E4FF]  text-blueColor '
                                }`}
                                disabled={
                                    isAuthenticated && firstStep === 'second'
                                        ? true
                                        : undefined
                                }
                            >
                                Back
                            </button>
                            <button className="flex items-center gap-2 px-7 py-3 rounded-md text-lg font-semibold bg-blueColor text-white  hover:bg-blue-600">
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
