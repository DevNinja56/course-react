// import { ROUTES } from '@/config/constant';
import Link from 'next/link';
import React from 'react';

const BankStatement = () => {
    return (
        <div className="2xl:container 2xl:mx-auto overflow-hidden">
            <div className="bg-gradient-to-b from-blue-600  to-white w-full h-screens flex flex-col">
                <div className="flex flex-col justify-center items-center self-center text-center w-11/12 md:w-3/4 z-10 mt-14">
                    <div className="flex flex-col items-center gap-3">
                        <h1 className="text-[1.5rem] md:text-[2rem] text-white font-bold mb-1">
                            Bank Statement Calculator
                        </h1>
                        <p className="text-white w-full text-xs md:text-sm">
                            Our Bank Statement Calculator is designed to ensure
                            you know exactly how much financial proof is
                            required for your UK student visa. This unique
                            feature provides an accurate calculation tailored to
                            the course and university you&apos;re applying for.
                        </p>
                        <p className="text-white w-full text-xs md:text-sm">
                            Simply click the button on any course page, and
                            within moments, you&apos;ll have the precise amount
                            needed to support your visa application.
                        </p>

                        <Link href={''} className="mt-5">
                            <button className="text-md text-[#2C79FF] flex items-center gap-1 bg-white px-6 md:px-8 py-2 rounded-full hover:shadow-xl transition-all font-extrabold">
                                Try Now
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center pb-6">
                        <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
                            <img
                                src="/images/BankStatement/AppMobileScreenMockup.png"
                                alt="Mockup"
                                className="w-full h-auto object-contain drop-shadow-2xl"
                            />
                            <img
                                src="/images/BankStatement/Ellipse.png"
                                alt="Shadow"
                                className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[80%] md:w-[90%] lg:w-[100%]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between mx-4 sm:px-20 lg:p-10 items-center relative bg-white pb-10">
                <img
                    src="/images/BankStatement/AppMobileScreenMockup2.png"
                    alt="Mockup"
                    className="h-80 sm:h-[450px] mx-auto object-contain z-100"
                />
                <img
                    alt="FAQ-Round"
                    className="absolute h-32 -left-20 top-64"
                    src="/images/elipse.png"
                />

                <img
                    alt="FAQ-Round"
                    className="absolute h-32 -top-10 -right-10"
                    src="/images/elipse.png"
                />
                <div className="px-5 flex flex-col gap-3 justify-center lg:mb-0 mt-14 w-fit">
                    <h1 className="text-2xl max-[400px]:text-[1.1rem] sm:text-3xl text-[#2563eb] font-extrabold text-left">
                        Key Features:
                    </h1>

                    <hr className="h-px bg-[#2563eb] border-none" />

                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col items-start">
                            <h1 className="pr-0 text-md  sm:text-xl text-[#2563eb] font-extrabold">
                                Accurate:
                            </h1>
                            <p className="text-sm">
                                Provides exact calculations based on visa
                                requirements.
                            </p>
                        </div>
                        <div className="flex flex-col items-start">
                            <h1 className="pr-0 text-md  sm:text-xl text-[#2563eb] font-extrabold">
                                Visa Ready:
                            </h1>
                            <p className="text-sm">
                                Ensures you meet the financial proof needed for
                                a smooth visa process.
                            </p>
                        </div>
                        <div className="flex flex-col items-start">
                            <h1 className="pr-0 text-md  sm:text-xl text-[#2563eb] font-extrabold">
                                Convenient:
                            </h1>
                            <p className="text-sm">
                                Accessible on every course page for instant
                                results.
                            </p>
                        </div>
                        <div className="flex flex-col items-start">
                            <h1 className="pr-0 text-md  sm:text-xl text-[#2563eb] font-extrabold">
                                Detailed Calculations:
                            </h1>
                            <p className="text-sm">
                                Takes into account your course, location, and
                                duration to provide a comprehensive estimate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-[#2C79FF] flex justify-center items-center text-center  py-10  ">
                <p className="text-white w-11/12 md:w-1/2 md:text-lg   ">
                    For more information about financial requirements for UK
                    student visas, visit the official{' '}
                    <Link className="hover:underline" href={''}>
                        UK Government Student Visa Money Requirements.
                    </Link>
                </p>
            </div>

            <div className="w-full  flex flex-col justify-center items-center text-center  py-16 relative ">
                <h1 className="text-2xl font-bold">Disclaimer:</h1>
                <p className="w-11/12 md:w-3/4 md:text-lg">
                    The calculations provided are based on UKVI Money
                    Requirements for a Student Visa. They may differ depending
                    on the initial deposit you’ve paid to your university and
                    the amount of scholarship received. For precise calculations
                    based on your actual offer, please consult one of our
                    counselors.
                </p>
                <img
                    alt="FAQ-Round"
                    className="absolute md:h-32 md:top-10  md:-right-20  h-20 top-5  -right-10"
                    src="/images/elipse.png"
                />
            </div>
        </div>
    );
};

export default BankStatement;
