import KeyService from '@/components/KeyService';
import LetUsHelpContainer from '@/components/LetUsHelpContainer';
import { ROUTES } from '@/config/constant';
import Image from 'next/image';
import React from 'react';

const ExpertCounselling = () => {
    return (
        <>
            {/* <div className="w-full py-8 md:py-12 flex justify-center bg-gradient-to-b from-blueColor to-white via-blueColor h-[72vh] md:h-[95vh] lg:h-[87vh] relative px-2 md:px-0">
                <div className="flex flex-col gap-8 md:gap-10 items-center">
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="font-bold text-xl md:text-3xl text-white">
                            Expert Counselling At Every Step
                        </h1>
                        <p className="w-full md:w-10/12 lg:w-8/12 text-center text-white text-xs md:text-lg md:px-2 font-light">
                            From application submission to visa processing, our
                            expert counselors guide you every step of the way,
                            ensuring your success.
                        </p>
                    </div>
                    <div className="w-80 md:w-6/12 lg:w-6/12 pl-10">
                        <Image
                            height={2350}
                            width={2339}
                            alt="ucas-application"
                            src="/images/Home/home-counsellor.png"
                            className="h-full w-full"
                        />
                    </div>
                </div>
            </div> */}
            <div className="w-full py-8 md:py-12 flex justify-center bg-blueColor relative px-2 md:px-0 h-[83vh]">
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
                <div className="flex flex-col gap-5 items-center relative">
                    <div className="flex flex-col items-center gap-2 md:w-10/12 lg:w-7/12 px-6">
                        <h1 className="font-bold text-xl md:text-4xl text-white text-center">
                            Expert Counselling At Every Step{' '}
                        </h1>
                        <p className="w-full text-center text-white text-xs md:text-sm md:px-2 font-light">
                            From application submission to visa processing, our
                            expert counselors guide you every step of the way,
                            ensuring your success.
                        </p>
                    </div>
                    <Image
                        height={2350}
                        width={2339}
                        alt="ucas-application"
                        src="/images/expert-counsellor/expert-counsellor-hero-section.svg"
                        className="w-96 md:w-8/12 lg:w-7/12 xl:w-[74%]"
                    />
                </div>
            </div>
            <div className="w-full py-12 md:pt-32 md:pb-28 lg:pt-40 lg:pb-28 relative px-2 md:px-0">
                <Image
                    height={2168}
                    width={2181}
                    alt="circle-1"
                    src="/images/elipse.png"
                    className="absolute -top-16 -left-8 h-32 w-32 hidden md:block"
                />
                <div className="w-full md:w-10/12 mx-auto flex flex-col lg:flex-row items-center gap-9">
                    <Image
                        height={2500}
                        width={2500}
                        src="/images/ExpertCounselling/expert-counselling-key-service.png"
                        alt="expert-counselling-key-service"
                        className="w-7/12 lg:w-[50%] hidden md:block"
                    />
                    <div className="flex flex-col gap-3 w-full md:w-full lg:w-5/12">
                        <h1 className="text-[#2563EB] text-2xl md:text-3xl font-extrabold">
                            Key Services:
                        </h1>
                        <div className="flex flex-col gap-8 md:gap-3 py-5 border-t border-blueColor/20">
                            <KeyService
                                heading="Course Selection:"
                                description="Personalized guidance to help you choose the best-fit course and institution."
                            />
                            <KeyService
                                heading="Application Support:"
                                description="Assistance in preparing and submitting accurate, timely applications."
                            />
                            <KeyService
                                heading="Document Preparation:"
                                description="We help compile and review key documents, including transcripts, financial statements, and recommendation letters."
                            />
                            <KeyService
                                heading="Interviews:"
                                description="Guidance for university credibility interviews and UKVI interviews, ensuring you are fully prepared."
                            />
                            <KeyService
                                heading="Visa Guidance:"
                                description="Step-by-step support for securing your UK student visa. We assist with gathering documents, preparing financial proof, and more."
                            />
                            <KeyService
                                heading="Post-Application Help:"
                                description="From insurance to accommodation, we've got you covered."
                            />
                        </div>
                    </div>
                </div>
                <Image
                    height={2168}
                    width={2181}
                    alt="circle-1"
                    src="/images/elipse.png"
                    className="absolute md:bottom-10 lg:bottom-20 -right-16 h-36 w-36 hidden md:block"
                />
            </div>
            <LetUsHelpContainer
                link={ROUTES.FILTER_COURSE}
                heading="Need Our Expert Counselling?"
                buttonText="Schedule A Meeting Now!"
            />
        </>
    );
};

export default ExpertCounselling;
