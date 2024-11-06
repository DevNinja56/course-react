import KeyService from '@/components/KeyService';
import LetUsHelpContainer from '@/components/LetUsHelpContainer';
import { ROUTES } from '@/config/constant';
import Image from 'next/image';
import React from 'react';

const UcasApplication = () => {
    return (
        <>
            <div className="w-full py-8 md:py-12 flex justify-center bg-blueColor relative px-4 md:px-6 lg:px-0 h-[80vh] sm:h-auto md:h-[70vh] lg:h-[80vh]">
                <Image
                    height={2202}
                    width={2347}
                    alt="pattern"
                    src="/images/SmartMatch/Pattern.png"
                    className="absolute left-0 top-0 scale-x-[-1] w-6/12 sm:w-5/12 md:w-4/12 lg:w-3/12 xl:w-[40%] hidden sm:block opacity-35"
                />
                <Image
                    height={2202}
                    width={2347}
                    alt="pattern"
                    src="/images/SmartMatch/Pattern.png"
                    className="absolute right-0 top-0 w-6/12 sm:w-5/12 md:w-4/12 lg:w-3/12 xl:w-[40%] hidden sm:block opacity-35"
                />
                <div className="flex flex-col gap-5 items-center w-full sm:w-8/12 md:w-6/12 lg:w-5/12 relative px-4">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1 className="font-bold text-lg sm:text-2xl md:text-4xl text-white">
                            UCAS Application Support
                        </h1>
                        <p className="text-white text-sm sm:text-base md:text-lg px-2 font-light">
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
                        className="w-32 sm:w-48 md:w-60 lg:w-9/12"
                    />
                </div>
            </div>
            <div className="w-full py-12 md:py-28 relative px-4 md:px-6 lg:px-0">
                <Image
                    height={2168}
                    width={2181}
                    alt="circle-1"
                    src="/images/elipse.png"
                    className="absolute -top-8 -right-4 h-24 w-24 sm:h-32 sm:w-32 hidden md:block"
                />
                <div className="w-full md:w-11/12 mx-auto flex justify-center md:justify-end">
                    <div className="flex flex-col gap-5 w-full md:w-10/12 lg:w-8/12">
                        <h1 className="text-blue-500 text-xl sm:text-2xl md:text-3xl font-extrabold">
                            Key Services:
                        </h1>
                        <div className="flex flex-col py-5 border-t border-blue-500">
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
