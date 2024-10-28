import KeyService from '@/components/KeyService';
import LetUsHelpContainer from '@/components/LetUsHelpContainer';
import { ROUTES } from '@/config/constant';
import Image from 'next/image';
import React from 'react';

const UcasApplication = () => {
    return (
        <>
            <div className="w-full py-8 md:py-12 flex justify-center bg-gradient-to-b from-blueColor to-white via-blueColor h-[72vh] md:h-[95vh] lg:h-[87vh] relative px-2 md:px-0">
                <div className="flex flex-col gap-8 md:gap-10 items-center">
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="font-bold text-xl md:text-3xl text-white">
                            UCAS Application Support
                        </h1>
                        <p className="w-full md:w-10/12 lg:w-8/12 text-center text-white text-xs md:text-lg md:px-2 font-light">
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
                        className="h-48 w-48 md:h-60 md:w-60 lg:h-80 lg:w-80"
                    />
                </div>
            </div>
            <div className="w-full py-12 md:py-28 relative px-2 md:px-0">
                <Image
                    height={2168}
                    width={2181}
                    alt="circle-1"
                    src="/images/elipse.png"
                    className="absolute -top-16 -right-8 h-32 w-32 hidden md:block"
                />
                <div className="w-full md:w-11/12 mx-auto flex md:justify-end">
                    <div className="flex flex-col gap-5 w-full md:w-8/12 lg:w-7/12">
                        <h1 className="text-[#2563EB] text-2xl md:text-3xl font-extrabold">
                            Key Services:
                        </h1>
                        <div className="flex flex-col gap-8 md:gap-10 py-5 border-t border-[#2563EB]">
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
                                description="We track deadlines to make sure your application is timely and complete.you are fully prepared."
                            />
                        </div>
                    </div>
                </div>
                <Image
                    height={2168}
                    width={2181}
                    alt="circle-1"
                    src="/images/elipse.png"
                    className="absolute lg:bottom-32 -left-16 h-36 w-36 hidden md:block"
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
