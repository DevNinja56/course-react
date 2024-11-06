import KeyService from '@/components/KeyService';
import LetUsHelpContainer from '@/components/LetUsHelpContainer';
import KeyServiceIconContainer from '@/components/UcasApplication/KeyServiceIconContainer';
import { ROUTES } from '@/config/constant';
import Image from 'next/image';
import React from 'react';

const UcasApplication = () => {
    return (
        <>
            <div className="w-full py-8 md:py-12 flex justify-center bg-blueColor relative px-2 md:px-0 h-[80vh]">
                <Image
                    height={2202}
                    width={2347}
                    alt="pattern"
                    src="/images/SmartMatch/Pattern.png"
                    className="absolute left-0 top-0  scale-x-[-1] w-7/12 lg:w-[42%] xl:w-[40%] md:block hidden opacity-35"
                />
                <Image
                    height={2202}
                    width={2347}
                    alt="pattern"
                    src="/images/SmartMatch/Pattern.png"
                    className="absolute right-0 top-0   w-7/12 lg:w-[42%] xl:w-[40%] md:block hidden opacity-35"
                />
                <div className="flex flex-col gap-5 items-center md:w-7/12 lg:w-6/12 xl:w-5/12 relative">
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="font-bold text-xl md:text-4xl text-white">
                            UCAS Application Support
                        </h1>
                        <p className="w-full text-center text-white text-xs md:text-sm md:px-2 font-light">
                            Applying for undergraduate courses in the UK can be
                            challenging, but our UCAS Application Support makes
                            it easy. We guide you through each step of the
                            process to ensure your application is accurate and
                            on time.
                        </p>
                    </div>
                    <Image
                        height={2350}
                        width={2339}
                        alt="ucas-application"
                        src="/images/Home/home-ucas-image.png"
                        className="w-48 md:w-80 lg:w-7/12 xl:w-9/12"
                    />
                </div>
            </div>
            <div className="w-full py-12 md:pt-40 relative px-2 md:px-0">
                <Image
                    height={2168}
                    width={2181}
                    alt="circle-1"
                    src="/images/elipse.png"
                    className="absolute -top-8 -right-4 h-24 w-24 sm:h-32 sm:w-32 hidden md:block"
                />
                <div className="w-full md:w-[87%] lg:w-[80%] xl:w-9/12 mx-auto flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-16 justify-between lg:justify-start">
                    <div className="grid grid-cols-2 gap-6 lg:gap-8 w-60 md:w-[35%] xl:w-[32%] ">
                        <KeyServiceIconContainer src="/images/UcasApplication/Plain.svg" />
                        <KeyServiceIconContainer src="/images/UcasApplication/subject.svg" />
                        <KeyServiceIconContainer src="/images/UcasApplication/Document Add.svg" />
                        <KeyServiceIconContainer src="/images/UcasApplication/ranking.svg" />
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-7/12 lg:w-7/12">
                        <h1 className="text-[#2563EB] text-2xl md:text-4xl font-extrabold">
                            Key Services:
                        </h1>
                        <div className="flex flex-col py-4 border-t border-blueColor/20 gap-3">
                            <KeyService
                                heading="Step-by-Step Guidance:"
                                description="We help you navigate the UCAS portal and complete your application with ease."
                            />
                            <KeyService
                                heading="Course Preferences:"
                                description="Assistance in selecting and ranking your top course choices."
                            />
                            <KeyService
                                heading="Document Review:"
                                description="Ensure your personal statement and required documents meet university standards."
                            />
                            <KeyService
                                heading="Deadline Management:"
                                description="We track deadlines to make sure your application is timely and complete."
                            />
                        </div>
                    </div>
                </div>
                <Image
                    height={2168}
                    width={2181}
                    alt="circle-1"
                    src="/images/elipse.png"
                    className="absolute bottom-8 left-4 sm:-bottom-16 sm:-left-8 h-28 w-28 sm:h-36 sm:w-36 hidden md:block"
                />
            </div>
            <LetUsHelpContainer
                link={ROUTES.UCAS}
                heading="Let us help you submit a winning UCAS application!"
                buttonText="Start Now!"
            />
        </>
    );
};

export default UcasApplication;
