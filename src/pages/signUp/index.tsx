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

const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { updateUserDetails, loggedInUser } = useUserAuth();
    const { push } = useRouter();
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
            body
        })
            .then((res) => {
                updateUserDetails(res.data.user);
                loggedInUser({
                    access: res.data.accessToken,
                    refresh: res.data.refreshToken
                });
                push(ROUTES.HOMEPAGE);
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
                        alt="round-login"
                        className="absolute left-0 lg:left-28 top-0 lg:top-24 w-[50px] md:w-[74px]"
                        src="/images/signUpuRound1.svg"
                        priority
                    />
                    <Image
                        height={200.78}
                        width={98}
                        alt="man"
                        className="absolute left-28 bottom-36 w-[60px] md:w-[98px]"
                        src="/images/man-3.svg"
                        priority
                    />
                    <Image
                        height={48}
                        width={48}
                        alt="login-round-2"
                        className="absolute right-44 bottom-[250px] w-[34px] md:w-[44px]"
                        src="/images/signInRound1.svg"
                        priority
                    />
                    <Image
                        height={123}
                        width={100}
                        alt="man-2"
                        className="absolute right-16 top-40 w-[60px] md:w-[100px]"
                        src="/images/man-2.svg"
                        priority
                    />
                    <Image
                        height={66}
                        width={70}
                        alt="flower"
                        className="absolute right-32 bottom-12 w-[50px] md:w-[70px]"
                        src="/images/flower.svg"
                        priority
                    />
                    <div className="absolute top-9 2xl:top-80 rounded-[10px] bg-white custom-shadow pt-10 pb-7 px-8 md:px-16 flex flex-col items-center min-w-[256px] md:w-[45%] 2xl:w-[50%] md:min-w-[456px]">
                        <h1 className="font-medium text-2xl md:text-[36px] text-mainTextColor mb-3">
                            Welcome Back
                        </h1>
                        <Link href={ROUTES.SIGN_IN}>
                            <p className="text-blueColor font-medium mb-4 md:mb-12 text-sm md:text-base">
                                I do not have an account yet
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
                                    title="Full Name..."
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
                                <input
                                    type="checkbox"
                                    className="h-5 w-5 border border-grayColor"
                                />
                                <p className="text-lightGrayColor pt-[2px]">
                                    I have read the Terms of Service
                                </p>
                            </div>
                            <Button
                                type="submit"
                                disabled={isLoading}
                                isLoader={isLoading}
                                text="Sign Up"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

SignUp.layout = { header: false, footer: false, isPublic: true };

export default SignUp;
