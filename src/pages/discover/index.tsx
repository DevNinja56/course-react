import StepsCard from '@/components/Discover/StepsCard';
import LetUsHelpContainer from '@/components/LetUsHelpContainer';
import { ROUTES } from '@/config/constant';
import Link from 'next/link';
import React from 'react';

const Discover = () => {
    return (
        <>
            <div className="2xl:container 2xl:mx-auto overflow-hidden">
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
                            Discover the Right Course
                        </h1>
                        <p className="text-white w-full md:w-3/4 text-sm md:text-base font-light">
                            Our course search feature is designed to help you
                            find the perfect program that aligns with your
                            academic goals, preferred location, and budget. Use
                            our advanced filters to narrow down your options.
                        </p>
                        <Link href={ROUTES.FILTER_COURSE} className="mt-5">
                            <button className="text-md text-[#2C79FF] flex items-center gap-1 bg-white px-6 md:px-10 py-2 rounded-full hover:shadow-xl transition-all font-extrabold">
                                Find Now
                            </button>
                        </Link>
                        <div className="mt-6 md:mt-10">
                            <img
                                src="/images/Discover/Mockup.png"
                                alt="Mockup"
                                className="  md:h-[400px] lg:h-[500px] object-contain max-md:py-10"
                            />
                        </div>
                    </div>
                </div>
                <div className="relative mb-10 lg:mt-44">
                    <StepsCard
                        heading="Choose Location"
                        description="Choose the city in the UK where you want to study."
                        imageUrl="/images/Discover/Step1.png"
                        top
                    />
                    <StepsCard
                        heading="Choose Institute"
                        description="Select from over 100+ UK universities and colleges."
                        imageUrl="/images/Discover/Step2.png"
                        colorChange
                        leftCircle
                        middle
                    />
                    <StepsCard
                        heading="Choose Degree Level"
                        description="Filter by undergraduate, postgraduate, or diploma levels."
                        imageUrl="/images/Discover/Step3.png"
                        middle
                    />
                    <StepsCard
                        heading="Choose Discipline"
                        description="Pick your desired field of study, including sub-disciplines for specific focus areas."
                        imageUrl="/images/Discover/Step4.png"
                        rightCircle
                        colorChange
                        middle
                    />
                    <StepsCard
                        heading="Choose Intake"
                        description="Filter by the start date that fits your schedule."
                        imageUrl="/images/Discover/Step5.png"
                        leftSmallLeftCircle
                        middle
                    />
                    <StepsCard
                        heading="Tuition Fees"
                        description="Set your budget to see courses within your financial range."
                        imageUrl="/images/Discover/Step6.png"
                        colorChange
                        middle
                    />
                    <StepsCard
                        heading="English Language"
                        description="Filter by institutions accepting your preferred language test 
or medium of instruction letter."
                        imageUrl="/images/Discover/Step7.png"
                        leftSmallLeftBottomCircle
                        bottom
                    />
                </div>
                <LetUsHelpContainer
                    link={ROUTES.FILTER_COURSE}
                    containerWIdth
                    heading="Our intuitive filters make it easier than ever to find a course that suits your academic journey. Simply set your preferences, and we’ll do the rest!"
                    buttonText="Try Now"
                />
            </div>
        </>
    );
};

export default Discover;
