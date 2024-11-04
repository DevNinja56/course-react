import FAQ from '@/components/FAQ/FAQ';
import { ROUTES } from '@/config/constant';
import Link from 'next/link';
import React from 'react';
import { FaSliders } from 'react-icons/fa6';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { TbClockBolt, TbTargetArrow } from 'react-icons/tb';

const SmartMatch = () => {
    return (
        <div className="2xl:container 2xl:mx-auto overflow-hidden">
            <div className="bg-gradient-to-b from-blue-600 via-blue-600/20 to-white w-full relative h-screens flex flex-col pb-5 ">
                <img
                    src="/images/SmartMatch/Pattern.png"
                    className="h-80 absolute left-0 top-0 scale-x-[-1] hidden md:h-[450px] lg:block"
                    alt="Pattern"
                />
                <img
                    src="/images/SmartMatch/Pattern.png"
                    className="h-80 absolute right-0 top-0 hidden md:h-[450px] lg:block"
                    alt="Pattern"
                />
                <div className="flex flex-col justify-center items-center self-center text-center w-11/12 md:w-1/2 z-10 mt-12">
                    <div className="text-[1.8rem] flex items-center justify-center gap-1 ">
                        <HiOutlineSparkles className="text-4xl text-white" />
                        <h1 className="font-extrabold italic text-white m-0 p-0">
                            SmartMatch
                        </h1>
                    </div>

                    <div className="flex flex-col items-center">
                        <h1 className="text-[1.5rem] md:text-[2rem] text-white font-[500] mb-1">
                            Unlock Your Future with SmartMatch
                        </h1>
                        <p className="text-white w-full md:w-3/4 text-xs md:text-sm">
                            Our platform provides localized entry requirements
                            based on your country of education, ensuring you see
                            only relevant criteria for your application.
                        </p>

                        <Link href={ROUTES.SMART_MATCH_TOOL} className="  mt-8">
                            <button className="text-md text-[#2C79FF] flex items-center gap-1 bg-white px-6 md:px-8 py-2 rounded-full hover:shadow-xl transition-all">
                                <p className="font-extrabold">Try Now</p>
                                <HiOutlineSparkles className="text-2xl" />
                                <p className="font-extrabold italic">
                                    SmartMatch
                                </p>
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center p-6">
                        <img
                            src="/images/SmartMatch/AiBot.png"
                            alt="AiBot"
                            className="h-44"
                        />
                        <img
                            src="/images/SmartMatch/AiBotShadow.png"
                            alt="AiBotShadow"
                            className="h-fit w-36"
                        />
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row justify-between mx-4 sm:px-20 lg:-mt-[4.6rem] max-lg:items-center max-lg:gap-10">
                    <div className="px-5 flex flex-col gap-5 justify-center lg:mb-0 mb-8">
                        <h1 className="text-2xl max-[400px]:text-[1.1rem] sm:text-3xl text-[#2563eb] flex items-center gap-1">
                            <span className="font-extrabold">Why Choose</span>
                            <HiOutlineSparkles className="text-2xl sm:text-5xl" />
                            <span className="font-extrabold italic">
                                SmartMatch?
                            </span>
                        </h1>

                        <div className="flex flex-col gap-5 justify-center ">
                            <div className="flex items-start gap-2">
                                <TbTargetArrow className="text-blue-600 text-4xl sm:text-5xl min-w-10 self-center flex" />
                                <div>
                                    <h3 className="text-md sm:text-lg font-semibold">
                                        AI-Driven Accuracy:
                                    </h3>
                                    <p className="text-sm">
                                        Get courses that truly match your
                                        academic strengths and future goals.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <TbClockBolt className="text-blue-600 text-4xl sm:text-5xl min-w-10 self-center flex" />
                                <div>
                                    <h3 className="text-md sm:text-lg font-semibold">
                                        Fast & Efficient:
                                    </h3>
                                    <p className="text-sm">
                                        Save hours of research—let SmartMatch AI
                                        analyze thousands of courses in seconds.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <FaSliders className="text-blue-600 text-4xl sm:text-5xl p-1 min-w-10 self-center flex" />
                                <div>
                                    <h3 className="text-md sm:text-lg font-semibold">
                                        Tailored Suggestions:
                                    </h3>
                                    <p className="text-sm">
                                        Receive personalized results that fit
                                        your qualifications and budget.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center ">
                        <img
                            src="/images/SmartMatch/Card.png"
                            alt="AiBotShadow"
                            className="h-80 sm:h-[500px] drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between mx-4 sm:px-20 lg:p-10 items-center relative">
                <img
                    src="/images/SmartMatch/Preferences.png"
                    alt="Preferences"
                    className="h-80 sm:h-[450px] mx-auto object-contain z-100"
                />
                <img
                    alt="FAQ-Round"
                    className="absolute h-32 -right-20 top-64"
                    src="/images/elipse.png"
                />

                <img
                    alt="FAQ-Round"
                    className="absolute h-20 -top-10 left-2"
                    src="/images/Ellipse 424.svg"
                />
                <div className="px-5 flex flex-col gap-5 justify-center">
                    <h1 className="text-xl sm:text-3xl text-[#2563eb] font-extrabold">
                        How It Works?
                    </h1>

                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col items-start gap-2">
                            <h3 className="text-md sm:text-lg font-semibold">
                                Enter Your Details:
                            </h3>
                            <p className="text-sm">
                                Get courses that truly match your academic
                                strengths and future goals.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <h3 className="text-md sm:text-lg font-semibold">
                                Fast & Efficient:
                            </h3>
                            <p className="text-sm">
                                Save hours of research—let SmartMatch AI analyze
                                thousands of courses in seconds.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <h3 className="text-md sm:text-lg font-semibold">
                                Tailored Suggestions:
                            </h3>
                            <p className="text-sm">
                                Receive personalized results that fit your
                                qualifications and budgetx.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-10">
                <FAQ />
            </div>
        </div>
    );
};

export default SmartMatch;
