import Button from '@/components/Button';
import InputBox from '@/components/Input';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { ROUTES } from '@/config/constant';
import { useUserAuth } from '@/hooks/auth';
import { signUpForm } from '@/types';
import { fetchRequest } from '@/utils/axios/fetch';
import { signUpFormSchema } from '@/utils/formSchemas';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiLock } from 'react-icons/bi';
import { MdOutlineMail } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import { IoIosPhonePortrait } from 'react-icons/io';
import { FaArrowLeft, FaFacebookF } from 'react-icons/fa6';
import { PhoneNumberValidate } from '@/utils/PhoneValidate';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleOAuthWraper from '@/components/Auth/GoogleSignInBtn';
import getConfig from 'next/config';

const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { updateUserDetails, loggedInUser } = useUserAuth();
    const { replace } = useRouter();
    const {
        register,
        handleSubmit: fromSubmit,
        formState: { errors },
        setError
    } = useForm<signUpForm>({ resolver: signUpFormSchema });

    const handleSubmit = (body: signUpForm) => {
        setIsLoading(true);
        fetchRequest({
            url: API_ENDPOINTS.AUTH.SIGNUP,
            type: 'post',
            body: {
                ...body,
                phone_number: PhoneNumberValidate(body.phone_number)
            }
        })
            .then((res) => {
                updateUserDetails(res.data.user);
                loggedInUser({
                    access: res.data.accessToken,
                    refresh: res.data.refreshToken
                });
                replace(ROUTES.HOMEPAGE);
                toast.success(res.data.message);
            })
            .catch((err) => {
                setError('email', {
                    type: 'custom',
                    message: err.response.data.message
                });
            })
            .finally(() => setIsLoading(false));
    };

    const { publicRuntimeConfig } = getConfig();
    const googleClientId =
        publicRuntimeConfig?.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '';

    return (
        <div className="w-full flex justify-center items-center px-0 lg:px-10 2xl:px-40 bg-loginBgColor min-h-[100vh]">
            <div className="w-full px-0 lg:px-2 transition-all duration-300">
                <div className="relative w-full flex items-center justify-center pt-20 pb-20 md:py-20">
                    <Image
                        height={610}
                        width={560}
                        alt="mainBgImg"
                        src="/images/sign-up 1.svg"
                        className="h-[750px] object-cover md:h-auto w-full md:w-auto"
                        priority
                    />
                    <Image
                        height={74}
                        width={74}
                        alt="logIn-Img"
                        className="absolute right-12 md:left-12 lg:left-28 xl:left-60 top-16 md:top-24 w-[74px]"
                        src="/images/signUpuRound1.svg"
                        priority
                    />
                    <Image
                        height={200.78}
                        width={98}
                        alt="man"
                        className="absolute left-10 lg:left-20 xl:left-64 bottom-60 w-[98px] hidden md:block"
                        src="/images/man-3.svg"
                        priority
                    />
                    <Image
                        height={48}
                        width={48}
                        alt="login-round-2"
                        className="absolute left-12 md:left-auto md:right-24 lg:right-36 xl:right-80 bottom-4 md:bottom-72 h-20 w-20 md:h-[48px] md:w-[48px]"
                        src="/images/signInRound1.svg"
                        priority
                    />
                    <Image
                        height={123}
                        width={100}
                        alt="man-2"
                        className="absolute right-6 lg:right-8 xl:right-52 bottom-4 md:top-60 h-24 w-24 md:h-[123px] md:w-[123px]"
                        src="/images/man-2.svg"
                        priority
                    />
                    <Image
                        height={66}
                        width={70}
                        alt="flower"
                        className="absolute right-20 lg:right-32 xl:right-64 bottom-20 lg:bottom-20 w-[50px] md:w-[70px] hidden md:block"
                        src="/images/flower.svg"
                        priority
                    />
                    <div className=" absolute top-1/2 -translate-y-1/2  rounded-[10px] bg-white custom-shadow pt-10 pb-7 px-4 md:px-12 flex flex-col items-center w-[90%] md:w-[53%] lg:w-[45%] xl:w-[35%] 2xl:w-[50%]">
                        <Link href={ROUTES.SIGN_IN}>
                            <FaArrowLeft className="absolute left-5 top-5 cursor-pointer text-blueColor h-6 w-6" />
                        </Link>
                        <h1 className="font-medium text-2xl md:text-[36px] text-mainTextColor mb-3">
                            Welcome Back
                        </h1>
                        <Link href={ROUTES.SIGN_IN}>
                            <p className="text-mainTextColor font-medium mb-4 md:mb-6 text-sm md:text-base">
                                Have an account?{' '}
                                <span className="text-blueColor">Sign In</span>{' '}
                            </p>
                        </Link>
                        <form
                            onSubmit={fromSubmit(handleSubmit)}
                            className="w-full"
                        >
                            <div className="flex flex-col w-full gap-y-5 mb-3">
                                <InputBox
                                    {...register('name', {
                                        required: true
                                    })}
                                    placeholder="Name"
                                    title="Full Name"
                                    error={errors.name?.message}
                                    icon={BiUser}
                                    autoComplete="off"
                                />
                                <InputBox
                                    {...register('email', {
                                        required: true
                                    })}
                                    placeholder="Email Address..."
                                    title="Email"
                                    error={errors.email?.message}
                                    icon={MdOutlineMail}
                                />
                                <InputBox
                                    {...register('phone_number', {
                                        required: true
                                    })}
                                    type="tel"
                                    placeholder="Phone Number..."
                                    title="Phone Number"
                                    error={errors.phone_number?.message}
                                    icon={IoIosPhonePortrait}
                                />

                                <InputBox
                                    {...register('password', {
                                        required: true
                                    })}
                                    type="password"
                                    placeholder="Password"
                                    title="Password"
                                    error={errors.password?.message}
                                    icon={BiLock}
                                />
                            </div>
                            <div className="flex items-center gap-x-3 w-full mb-8">
                                {/* <input
                                    type="checkbox"
                                    className="h-5 w-5 border border-grayColor"
                                />
                                <p className="text-lightGrayColor pt-[2px]">
                                    I have read the Terms of Service
                                </p> */}
                            </div>
                            <Button
                                type="submit"
                                disabled={isLoading}
                                isLoader={isLoading}
                                text="Sign Up"
                            />
                        </form>
                        <GoogleOAuthProvider clientId={googleClientId}>
                            <div className="w-full ">
                                <div className="flex items-center w-full my-3 justify-center">
                                    <div className="w-16 h-px bg-gray-500 mr-4" />
                                    <span className="text-gray-500">OR</span>
                                    <div className="w-16 h-px bg-gray-500 ml-4" />
                                </div>
                                <GoogleOAuthWraper isRegister />
                                <button
                                    type="button"
                                    className="flex justify-center items-center px-3 py-2 border-2 border-blueColor rounded-md text-white bg-blueColor gap-2 w-full my-2 hover:bg-white hover:text-blueColor hover:border-2"
                                >
                                    <FaFacebookF />
                                    Register with Facebook
                                </button>
                            </div>
                        </GoogleOAuthProvider>
                    </div>
                </div>
            </div>
        </div>
    );
};

SignUp.layout = { header: false, footer: false, isPublic: true };

export default SignUp;
