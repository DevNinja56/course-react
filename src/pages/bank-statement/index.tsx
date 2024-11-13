// import { ROUTES } from '@/config/constant';
import Link from 'next/link';
import React from 'react';

const BankStatement = () => {
    return (
        <div className="overflow-hidden">
            <div className="bg-[#2C79FF] relative w-full h-auto md:h-[520px] flex flex-col items-center">
                <div className="flex justify-between absolute w-full">
                    <img
                        src="/images/SmartMatch/Pattern.png"
                        className="hidden lg:block h-80 md:h-[520px] scale-x-[-1] opacity-50"
                        alt="Pattern"
                    />
                    <img
                        src="/images/SmartMatch/Pattern.png"
                        className="hidden lg:block h-80 md:h-[520px] opacity-50"
                        alt="Pattern"
                    />
                </div>
                <div className="flex flex-col justify-center items-center text-center w-11/12 lg:w-2/3 z-10 mt-8 md:mt-12">
                    <h1 className="text-2xl md:text-3xl text-white font-bold mt-4 mb-2">
                        Bank Statement Calculator
                    </h1>
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <p className="text-white w-full md:w-3/4 text-sm  font-light">
                            Our Bank Statement Calculator is designed to ensure
                            you know exactly how much financial proof is
                            required for your UK student visa. This unique
                            feature provides an accurate calculation tailored to
                            the course and university you&apos;re applying for.
                        </p>
                        <p className="text-white w-full md:w-3/4 text-sm  font-light">
                            Simply click the button on any course page, and
                            within moments, you&apos;ll have the precise amount
                            needed to support your visa application.
                        </p>
                    </div>

                    <div>
                        <img
                            src="/images/BankStatement/AppMobileScreenMockup.png"
                            alt="Mockup"
                            className="  md:h-[300px] lg:h-[400px] object-contain max-md:py-10"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse justify-center  items-center relative bg-white pb-10 lg:mt-44">
                <img
                    src="/images/BankStatement/AppMobileScreenMockup2.png"
                    alt="Mockup"
                    className="h-80 sm:h-[450px] object-contain z-100"
                />
                <img
                    alt="FAQ-Round"
                    className="absolute h-32 -left-20 top-48"
                    src="/images/elipse.png"
                />

                <img
                    alt="FAQ-Round"
                    className="absolute h-32 -top-36 -right-10"
                    src="/images/elipse.png"
                />
                <div className="px-5 flex flex-col gap-3 justify-center lg:mb-0 mt-14 w-fit">
                    <h1 className="text-2xl max-[400px]:text-[1.1rem] sm:text-3xl text-[#2563eb] font-extrabold text-left">
                        Key Features:
                    </h1>

                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col items-start">
                            <h1 className="pr-0 text-md  sm:text-xl  font-extrabold">
                                Accurate:
                            </h1>
                            <p className="text-sm">
                                Provides exact calculations based on visa
                                requirements.
                            </p>
                        </div>
                        <div className="flex flex-col items-start">
                            <h1 className="pr-0 text-md  sm:text-xl  font-extrabold">
                                Visa Ready:
                            </h1>
                            <p className="text-sm">
                                Ensures you meet the financial proof needed for
                                a smooth visa process.
                            </p>
                        </div>
                        <div className="flex flex-col items-start">
                            <h1 className="pr-0 text-md  sm:text-xl  font-extrabold">
                                Convenient:
                            </h1>
                            <p className="text-sm">
                                Accessible on every course page for instant
                                results.
                            </p>
                        </div>
                        <div className="flex flex-col items-start">
                            <h1 className="pr-0 text-md  sm:text-xl  font-extrabold">
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
