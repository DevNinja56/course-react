import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SignUp = () => {
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
                        alt="ligin-round-2"
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
                        <p className="text-blueColor font-medium mb-4 md:mb-5 text-sm md:text-base">
                            I do not have an account yet
                        </p>
                        <div className="flex flex-col w-full gap-y-5 mb-3">
                            <label className="text-lg text-darkGrayColor flex flex-col gap-y-1">
                                Email
                                <div className="relative">
                                    <input
                                        className="pt-[10px] pb-[9px] pl-12 text-grayColor border border-grayColor rounded-[10px] w-full outline-none"
                                        placeholder="Email Adress..."
                                    />
                                    <Image
                                        height={20}
                                        width={20}
                                        alt="user"
                                        className="absolute left-5 top-[15.4px]"
                                        src="/images/mail.svg"
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
                            <label className="text-lg text-darkGrayColor flex flex-col gap-y-1">
                                Repeat Password
                                <div className="relative">
                                    <input
                                        className="pt-[10px] pb-[9px] pl-12 text-grayColor border border-grayColor rounded-[10px] w-full outline-none"
                                        placeholder="Repeat Password"
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
                        <div className="flex items-center gap-x-3 w-full mb-8">
                            <input
                                type="checkbox"
                                className="h-5 w-5 border border-grayColor"
                            />
                            <p className="text-lightGrayColor pt-[2px]">
                                I have read the Terms of Service
                            </p>
                        </div>
                        <Link href="/signIn" className="w-full">
                            <button className="bg-blueColor w-full pt-[14px] pb-[13px] rounded-[10px] text-white font-semibold mb-3">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
