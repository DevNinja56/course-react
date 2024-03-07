import Button from '@/components/Button';
import InputBox from '@/components/Input';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { ROUTES } from '@/config/constant';
import { useUserAuth } from '@/hooks/auth';
import { useUi } from '@/hooks/user-interface';
import { modalType } from '@/store/slices/ui.slice';
import { signInForm } from '@/types';
import { fetchRequest } from '@/utils/axios/fetch';
import { signInFormSchema } from '@/utils/formSchemas';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { MdOutlineMail } from 'react-icons/md';
import { BiLock } from 'react-icons/bi';
import { FaArrowLeft } from 'react-icons/fa6';
import GoogleOAuthWraper from '@/components/Auth/GoogleSignInBtn';
import { GoogleOAuthProvider } from '@react-oauth/google';
import dynamic from 'next/dynamic';
const FacebookLoginBtn = dynamic(import('@/components/Auth/FacebookLoginBtn'), {
    ssr: false
});

const SignIn = () => {
    const { updateModal } = useUi();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { updateUserDetails, loggedInUser } = useUserAuth();
    const {
        register,
        handleSubmit: fromSubmit,
        formState: { errors },
        setError
    } = useForm<signInForm>({ resolver: signInFormSchema });

    const handleSubmit = (body: signInForm) => {
        setIsLoading(true);
        fetchRequest({
            url: API_ENDPOINTS.AUTH.SIGNIN,
            type: 'post',
            body
        })
            .then((res) => {
                updateUserDetails(res.data.user);
                loggedInUser({
                    access: res.data.accessToken,
                    refresh: res.data.refreshToken
                });
                router.back();
                toast.success('User Logged In Success');
            })
            .catch((err) => {
                setError('email', {
                    type: 'custom',
                    message: err.response?.data?.message
                });
                setError('password', {
                    type: 'custom',
                    message: err.response?.data?.message
                });
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="w-full flex justify-center items-center px-0 lg:px-16 2xl:px-40 bg-loginBgColor min-h-[100vh]">
            <div className="w-full px-0 lg:px-2 transition-all duration-300">
                <div className="relative w-full flex items-center justify-center pt-20 pb-20 md:py-0">
                    <Image
                        height={610}
                        width={560}
                        alt="mainBgImg"
                        src="/images/sign-up 1.svg"
                        className="h-[650px] object-cover md:h-auto w-full md:w-auto"
                        priority
                    />
                    <Image
                        height={74}
                        width={74}
                        alt="logIn-Img"
                        className="absolute right-12 md:left-12 lg:left-28 xl:left-60 top-16 md:top-40 w-[74px]"
                        src="/images/signUpuRound1.svg"
                        priority
                    />
                    <Image
                        height={188}
                        width={98}
                        alt="logIn-Img"
                        className="absolute left-10 lg:left-20 xl:left-60 bottom-16 w-[98px] hidden md:block"
                        src="/images/man-1.svg"
                        priority
                    />
                    <Image
                        height={48}
                        width={48}
                        alt="logIn-Img"
                        className="absolute left-12 md:left-auto md:right-20 lg:right-28 xl:right-72 bottom-4 md:top-28 h-20 w-20 md:h-[48px] md:w-[48px]"
                        src="/images/signUpuRound1.svg"
                        priority
                    />
                    <Image
                        height={123}
                        width={100}
                        alt="logIn-Img"
                        className="absolute right-10 lg:right-24 xl:right-60 bottom-4 md:bottom-24 h-24 w-24  md:h-[123px] md:w-[123px]"
                        src="/images/man-2.svg"
                        priority
                    />
                    <div className=" absolute top-1/2 -translate-y-1/2 rounded-[10px] bg-white custom-shadow pt-10 pb-7 px-4 md:px-12 flex flex-col items-center w-[90%] md:w-[53%] lg:w-[45%] xl:w-[35%] 2xl:w-[50%]">
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
                        <form
                            className="w-full"
                            onSubmit={fromSubmit(handleSubmit)}
                        >
                            <div className="flex flex-col w-full gap-y-7 mb-3">
                                <InputBox
                                    {...register('email', {
                                        required: true
                                    })}
                                    placeholder="Email"
                                    title="Email"
                                    error={errors.email?.message}
                                    icon={MdOutlineMail}
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
                </div>
            </div>
        </div>
    );
};

SignIn.layout = { header: false, footer: false, isPublic: true };

export default SignIn;
