import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { ROUTES } from '@/config/constant';
import { fetchRequest } from '@/utils/axios/fetch';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import jwtDecode from 'jwt-decode';
import { GetServerSideProps } from 'next';
import Button from '@/components/Button';
import { useUserAuth } from '@/hooks/auth';

const VerifyAccount = ({ email, token }: { email: string; token: string }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { replace } = useRouter();
    const { updateUserDetails, loggedInUser } = useUserAuth();

    const handleClick = () => {
        setIsLoading(true);

        toast
            .promise(
                fetchRequest({
                    url: API_ENDPOINTS.AUTH.VERIFY_ACCOUNT,
                    type: 'post',
                    body: { token, email }
                }),
                {
                    loading: 'Please wait...',
                    success: 'Account Verified Successfully',
                    error: 'an error occurred'
                }
            )
            .then((res) => {
                updateUserDetails(res.data.user);
                loggedInUser({
                    access: res.data.accessToken,
                    refresh: res.data.refreshToken
                });
                replace(ROUTES.HOMEPAGE);
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="w-full flex justify-center items-center py-0 md:py-16 px-0 lg:px-16 2xl:px-40 bg-loginBgColor min-h-[100vh]">
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
                    <div className=" absolute top-40 md:top-9 2xl:top-80 rounded-[10px] bg-white custom-shadow pt-10 pb-7 px-4 md:px-12 flex flex-col items-center w-[90%] md:w-[53%] lg:w-[45%] xl:w-[35%] 2xl:w-[50%] py-5 ">
                        <h1 className="font-medium text-2xl md:text-[36px] text-mainTextColor mb-3">
                            Verify your account
                        </h1>

                        <Button
                            className="pt-[14px] pb-[13px]"
                            text="Verify"
                            onClick={handleClick}
                            disabled={isLoading}
                            isLoader={isLoading}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

VerifyAccount.layout = { header: false, footer: false };

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

export default VerifyAccount;
