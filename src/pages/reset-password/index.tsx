import Button from '@/components/Button';
import InputBox from '@/components/Input';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { ROUTES } from '@/config/constant';
import { resetForm } from '@/types';
import { fetchRequest } from '@/utils/axios/fetch';
import { resetFormSchema } from '@/utils/formSchemas';
// import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import jwtDecode from 'jwt-decode';
import { GetServerSideProps } from 'next';

const ResetPassword = ({ email, token }: { email: string; token: string }) => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit: fromSubmit,
        formState: { errors }
    } = useForm<resetForm>({ resolver: resetFormSchema });
    const { push } = useRouter();

    const handleSubmit = (body: resetForm) => {
        setIsLoading(true);
        fetchRequest({
            url: API_ENDPOINTS.AUTH.RESET_PASSWORD,
            type: 'post',
            body: { password: body.password, email, token }
        })
            .then((res) => {
                push(ROUTES.SIGN_IN);
                toast.success(res.message);
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="w-full flex justify-center items-center py-0 md:py-16 px-0 lg:px-16 2xl:px-40 bg-loginBgColor min-h-[100vh]">
            <div className="w-full px-0 lg:px-2 transition-all duration-300">
                <div className="relative w-full flex items-center justify-center pt-20 pb-20 md:py-0">
                    <img
                        height={610}
                        width={560}
                        alt="mainBgImg"
                        src="/images/sign-up 1.svg"
                        className="h-[650px] object-cover md:h-auto w-full md:w-auto"
                        // priority
                    />
                    <img
                        height={74}
                        width={74}
                        alt="logIn-Img"
                        className="absolute right-12 md:left-12 lg:left-28 xl:left-60 top-16 md:top-40 w-[74px]"
                        src="/images/signUpuRound1.svg"
                        // priority
                    />
                    <img
                        height={188}
                        width={98}
                        alt="logIn-Img"
                        className="absolute left-10 lg:left-20 xl:left-60 bottom-16 w-[98px] hidden md:block"
                        src="/images/man-1.svg"
                        // priority
                    />
                    <img
                        height={48}
                        width={48}
                        alt="logIn-Img"
                        className="absolute left-12 md:left-auto md:right-20 lg:right-28 xl:right-72 bottom-4 md:top-28 h-20 w-20 md:h-[48px] md:w-[48px]"
                        src="/images/signUpuRound1.svg"
                        // priority
                    />
                    <img
                        height={123}
                        width={100}
                        alt="logIn-Img"
                        className="absolute right-10 lg:right-24 xl:right-60 bottom-4 md:bottom-24 h-24 w-24  md:h-[123px] md:w-[123px]"
                        src="/images/man-2.svg"
                        // priority
                    />
                    <div className=" absolute top-40 md:top-9 2xl:top-80 rounded-[10px] bg-white custom-shadow pt-10 pb-7 px-4 md:px-12 flex flex-col items-center w-[90%] md:w-[53%] lg:w-[45%] xl:w-[35%] 2xl:w-[50%] py-5 ">
                        <h1 className="font-medium text-2xl md:text-[36px] text-mainTextColor mb-3">
                            Reset Password
                        </h1>

                        <form
                            className="flex flex-col gap-4 w-full my-5 "
                            onSubmit={fromSubmit(handleSubmit)}
                        >
                            <div className="flex flex-col gap-4">
                                <InputBox
                                    {...register('password', {
                                        required: true
                                    })}
                                    type="password"
                                    placeholder="Password"
                                    className=""
                                    autoComplete="password"
                                    error={errors.password?.message}
                                />
                                <InputBox
                                    {...register('c_password', {
                                        required: true
                                    })}
                                    type="password"
                                    placeholder="Confirm Password"
                                    className=""
                                    autoComplete="password"
                                    error={errors.c_password?.message}
                                />
                            </div>
                            <div className="w-full">
                                <Button
                                    type="submit"
                                    text="Change Password"
                                    className="w-4/5 pt-[14px] pb-[13px]"
                                    disabled={isLoading}
                                />
                                <p className="text-sm text-center mt-5 text-blueColor  ">
                                    For Sign In{' '}
                                    <Link
                                        href={ROUTES.SIGN_IN}
                                        className="text-mainColor ml-1 font-bold  "
                                    >
                                        Log in
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query, res } = context;
    const token = query.token as string;

    const { _id: email }: { _id: string | null } = token
        ? jwtDecode(token)
        : { _id: null };

    // Redirect if necessary
    if (!email || !token) {
        if (res) {
            res.writeHead(302, { Location: ROUTES.HOMEPAGE });
            res.end();
        }
        return { props: {} };
    }

    return {
        props: {
            email,
            token
        }
    };
};
ResetPassword.layout = { header: false, footer: false, isPublic: true };

export default ResetPassword;
