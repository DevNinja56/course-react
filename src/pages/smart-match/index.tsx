import FAQ from '@/components/FAQ/FAQ';
import { ROUTES } from '@/config/constant';
import Link from 'next/link';
import React from 'react';
import { FaSliders } from 'react-icons/fa6';
import { GoArrowDown } from 'react-icons/go';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { TbClockBolt, TbTargetArrow } from 'react-icons/tb';

const SmartMatch = () => {
    return (
        <div className="2xl:container 2xl:mx-auto overflow-hidden">
            <div className="bg-[#2C79FF] relative w-full h-auto flex flex-col items-center justify-center">
                <img
                    src="/images/SmartMatch/Pattern.png"
                    className="h-80 md:h-[520px] scale-x-[-1] opacity-50 absolute top-0 left-0 hidden lg:block"
                    alt="Pattern"
                />
                <img
                    src="/images/SmartMatch/Pattern.png"
                    className="h-80 md:h-[520px] opacity-50 absolute top-0 right-0 hidden lg:block"
                    alt="Pattern"
                />

                <div className="flex flex-col items-center text-center w-11/12 md:w-1/2 z-10 mt-12">
                    <div className="text-xl flex items-center justify-center gap-1">
                        <HiOutlineSparkles className="text-2xl text-white" />
                        <h1 className="font-extrabold italic text-white m-0 p-0">
                            SmartMatch
                        </h1>
                    </div>

                    <div className="flex flex-col items-center">
                        <h1 className="text-[1.5rem] md:text-3xl text-white font-bold mt-4 mb-2">
                            Unlock Your Future with SmartMatch
                        </h1>
                        <p className="text-white w-full md:w-3/4 text-xs font-light">
                            Our platform provides localized entry requirements
                            based on your country of education, ensuring you see
                            only relevant criteria for your application.
                        </p>

                        <Link href={ROUTES.SMART_MATCH_TOOL} className="mt-8">
                            <button className="text-md text-[#2C79FF] flex items-center gap-1 bg-white px-6 md:px-8 py-3 rounded-full hover:shadow-xl transition-all">
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
                            className="h-fit w-36 relative bottom-5"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row justify-between mx-4 my-14 sm:px-20 max-lg:items-center max-lg:gap-10">
                <div className="px-5 flex flex-col gap-5 justify-center lg:mb-0 mb-8 md:w-5/6 lg:w-auto">
                    <div>
                        <p className="font-bold">PEOPLE LOVE US</p>
                        <h1 className="text-2xl max-[400px]:text-[1.1rem] sm:text-3xl text-[#2563eb] flex items-center gap-1">
                            <span className="font-extrabold">Why Choose</span>
                            <HiOutlineSparkles className="text-2xl sm:text-5xl" />
                            <span className="font-extrabold italic">
                                SmartMatch?
                            </span>
                        </h1>
                        <p className="text-[#838383] text-xs md:max-w-[70%]">
                            Dolor sit amet consectetur elit sed eiusmod tempor
                            incidi dunt labore dolore magna aliqua enim ad minim
                            veniam quis nostrud.
                        </p>
                    </div>
                    <div className="flex flex-col gap-5 justify-center">
                        <div className="flex items-center gap-5 max-sm:gap-2">
                            <div className="bg-white rounded-full shadow-lg p-2 h-16 w-16 flex items-center justify-center">
                                <TbTargetArrow className="text-blue-600 text-3xl sm:text-4xl min-w-10 self-center flex" />
                            </div>
                            <div className="max-w-[80%]">
                                <h3 className="text-sm sm:text-lg font-semibold">
                                    AI-Driven Accuracy:
                                </h3>
                                <p className="text-xs">
                                    Get courses that truly match your academic
                                    strengths and future goals.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 max-sm:gap-2">
                            <div className="bg-white rounded-full shadow-lg p-2 h-16 w-16 flex items-center justify-center">
                                <TbClockBolt className="text-blue-600 text-3xl sm:text-4xl min-w-10 self-center flex" />
                            </div>
                            <div className="max-w-[80%]">
                                <h3 className="text-sm sm:text-lg font-semibold">
                                    Fast & Efficient:
                                </h3>
                                <p className="text-xs">
                                    Save hours of research—let SmartMatch AI
                                    analyze thousands of courses in seconds.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 max-sm:gap-2">
                            <div className="bg-white rounded-full shadow-lg p-2 h-16 w-16 flex items-center justify-center">
                                <FaSliders className="text-blue-600 text-3xl sm:text-4xl min-w-10 self-center flex" />
                            </div>
                            <div className="max-w-[80%]">
                                <h3 className="text-sm sm:text-lg font-semibold">
                                    Tailored Suggestions:
                                </h3>
                                <p className="text-xs">
                                    Receive personalized results that fit your
                                    qualifications and budget.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        src="/images/SmartMatch/Card.png"
                        alt="AiBotShadow"
                        className="h-80 sm:h-[550px] drop-shadow-md"
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between mx-4 sm:px-20 lg:p-10 items-center relative gap-16">
                <img
                    src="/images/SmartMatch/Preferences.png"
                    alt="Preferences"
                    className="lg:h-72 xl:h-80 sm:h-[400px] mx-auto object-contain z-100"
                />
                <img
                    alt="FAQ-Round"
                    className="absolute md:h-32 h-12 -right-20 top-5"
                    src="/images/elipse.png"
                />
                <img
                    alt="FAQ-Round"
                    className="absolute h-7 md:h-20 -top-10 left-2"
                    src="/images/Ellipse 424.svg"
                />

                <div className="px-5 flex flex-col gap-5 justify-center lg:mb-0 mb-8 md:w-5/6 lg:w-auto">
                    <div>
                        <p className="font-bold">HOW IT WORKS</p>
                        <h1 className="text-2xl max-[400px]:text-[1.1rem] sm:text-[1.75rem] text-[#2563eb] flex items-center gap-1">
                            <span className="font-extrabold">How</span>
                            <HiOutlineSparkles className="text-2xl sm:text-5xl" />
                            <span className="font-extrabold italic">
                                SmartMatch Works?
                            </span>
                        </h1>
                        <p className="text-[#838383] text-xs md:max-w-[90%]">
                            Dolor sit amet consectetur elit sed eiusmod tempor
                            incidi dunt labore dolore magna aliqua enim ad minim
                            veniam quis nostrud.
                        </p>
                    </div>
                    <div className="flex flex-col gap-7 justify-center relative">
                        <div className="bg-[#2563eb] w-0.5 h-2/3 absolute left-[1.95rem] z-0">
                            <GoArrowDown className="text-[#2563eb] top-7 absolute text-xl -left-[0.55rem]" />
                            <GoArrowDown className="text-[#2563eb] top-[7.5rem] absolute text-xl -left-[0.55rem]" />
                        </div>
                        <div className="flex items-center gap-5 max-sm:gap-2">
                            <div className="bg-white rounded-full shadow-lg p-2 h-16 w-16 flex items-center justify-center z-10">
                                <p className="text-blue-600 text-3xl sm:text-4xl min-w-10 self-center flex justify-center font-bold">
                                    1
                                </p>
                            </div>
                            <div className="max-w-[80%]">
                                <h3 className="text-sm sm:text-lg font-semibold">
                                    Step 1:
                                </h3>
                                <p className="text-xs">
                                    Fill out the SmartMatch questionnaire to
                                    indicate your preferences and
                                    qualifications.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 max-sm:gap-2">
                            <div className="bg-white rounded-full shadow-lg p-2 h-16 w-16 flex items-center justify-center z-10">
                                <p className="text-blue-600 text-3xl sm:text-4xl min-w-10 self-center flex items-center justify-center font-bold">
                                    2
                                </p>
                            </div>
                            <div className="max-w-[80%]">
                                <h3 className="text-sm sm:text-lg font-semibold">
                                    Step 2:
                                </h3>
                                <p className="text-xs">
                                    Our AI analyzes your data to find the best
                                    course matches.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 max-sm:gap-2">
                            <div className="bg-white rounded-full shadow-lg p-2 h-16 w-16 flex items-center justify-center z-10">
                                <p className="text-blue-600 text-3xl sm:text-4xl min-w-10 self-center flex justify-center font-bold">
                                    3
                                </p>
                            </div>
                            <div className="max-w-[80%]">
                                <h3 className="text-sm sm:text-lg font-semibold">
                                    Step 3:
                                </h3>
                                <p className="text-xs">
                                    Review your personalized results and take
                                    the next step towards your future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FAQ />
        </div>
    );
};

export default SmartMatch;
