import ResetPasswordModal from '@/components/Modal/ResetPasswordModal';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { ROUTES } from '@/config/constant';
import { useUserAuth } from '@/hooks/auth';
import { signInForm } from '@/types';
import { fetchRequest } from '@/utils/axios/fetch';
import { signInFormSchema } from '@/utils/formSchemas';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const SignIn = () => {
    const [showResetModal, setShowResetModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { updateUserDetails, loggedInUser } = useUserAuth();
    const { push } = useRouter();
    const {
        register,
        handleSubmit: fromSubmit,
        formState: { errors },
        setError
    } = useForm<signInForm>({ resolver: signInFormSchema });

    console.log(errors);

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
                push(ROUTES.HOMEPAGE);
                toast.success('User Logged In Success');
            })
            .catch((err) => {
                setError('email', {
                    type: 'custom',
                    message: err.response.data.message
                });
                setError('password', {
                    type: 'custom',
                    message: err.response.data.message
                });
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="w-full flex justify-center items-center py-16 lg:px-16 2xl:px-40 bg-loginBgColor min-h-[100vh]">
            <div className="w-full lg:max-w-[1000px] 2xl:max-w-[2000px] mx-0 lg:mx-auto px-0 lg:px-2 transition-all duration-300">
                <div className="relative w-full flex items-center justify-center">
                    <Image
                        height={610}
                        width={560}
                        alt="mainBgImg"
                        className="w-[60%]"
                        src="/images/sign-up 1.svg"
                        priority
                    />
                    <Image
                        height={74}
                        width={74}
                        alt="logIn-Img"
                        className="absolute left-0 lg:left-28 top-0 lg:top-40 w-[50px] md:w-[74px]"
                        src="/images/signUpuRound1.svg"
                        priority
                    />
                    <Image
                        height={188}
                        width={98}
                        alt="logIn-Img"
                        className="absolute left-0 lg:left-20 bottom-0 lg:bottom-16 w-[60px] md:w-[98px]"
                        src="/images/man-1.svg"
                        priority
                    />
                    <Image
                        height={48}
                        width={48}
                        alt="logIn-Img"
                        className="absolute right-0 lg:right-28 top-0 lg:top-28 w-[38px] md:w-[48px]"
                        src="/images/signUpuRound1.svg"
                        priority
                    />
                    <Image
                        height={123}
                        width={100}
                        alt="logIn-Img"
                        className="absolute right-24 bottom-0 lg:bottom-24 w-[60px] md:w-[98px]"
                        src="/images/man-2.svg"
                        priority
                    />
                    <div className="absolute top-9 2xl:top-80 rounded-[10px] bg-white custom-shadow pt-10 pb-7 px-8 md:px-16 flex flex-col items-center min-w-[256px] md:w-[45%] 2xl:w-[50%] md:min-w-[456px]">
                        <h1 className="font-medium text-2xl md:text-[36px] text-mainTextColor mb-3">
                            Welcome Back
                        </h1>
                        <Link href="/signUp">
                            <p className="text-blueColor font-medium mb-4 md:mb-12 text-sm md:text-base">
                                I do not have an account yet
                            </p>
                        </Link>
                        <form onSubmit={fromSubmit(handleSubmit)}>
                            <div className="flex flex-col w-full gap-y-7 mb-3">
                                <label className="text-lg text-darkGrayColor flex flex-col gap-y-1">
                                    Username
                                    <div className="relative">
                                        <input
                                            {...register('email', {
                                                required: true
                                            })}
                                            className="pt-[10px] pb-[9px] pl-12 text-grayColor border border-grayColor rounded-[10px] w-full outline-none"
                                            placeholder="Username"
                                        />
                                        <Image
                                            height={20}
                                            width={20}
                                            alt="user"
                                            className="absolute left-5 top-[15.4px]"
                                            src="/images/user (1).svg"
                                            priority
                                        />
                                    </div>
                                </label>
                                <label className="text-lg text-darkGrayColor flex flex-col gap-y-1">
                                    Password
                                    <div className="relative">
                                        <input
                                            className="pt-[10px] pb-[9px] pl-12 text-grayColor border border-grayColor rounded-[10px] w-full outline-none"
                                            placeholder="Password"
                                            type="password"
                                            {...register('password', {
                                                required: true
                                            })}
                                        />
                                        <Image
                                            height={20}
                                            width={20}
                                            alt="lock"
                                            className="absolute left-5 top-[15.4px]"
                                            src="/images/Keyhole Minimalistic.svg"
                                            priority
                                        />
                                    </div>
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3 w-full mb-10">
                                <input
                                    type="checkbox"
                                    className="h-5 w-5 border border-grayColor"
                                />
                                <p className="text-lightGrayColor pt-[2px]">
                                    Remember me
                                </p>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="bg-blueColor w-full pt-[14px] pb-[13px] rounded-[10px] text-white font-semibold mb-1"
                            >
                                Sign In
                            </button>
                            <button
                                onClick={() =>
                                    setShowResetModal((prev) => !prev)
                                }
                                className="w-full pt-[14px] rounded-10px text-darkGrayColor"
                            >
                                Forgot password?
                            </button>
                        </form>
                        {showResetModal && (
                            <ResetPasswordModal
                                setShowResetModal={setShowResetModal}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

SignIn.layout = { header: false, footer: false, isPublic: true };

export default SignIn;
