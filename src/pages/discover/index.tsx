// import { ROUTES } from '@/config/constant';
import StepsCard from '@/components/Discover/StepsCard';
import { ROUTES } from '@/config/constant';
import Link from 'next/link';
import React from 'react';

const Discover = () => {
    return (
        <div className="2xl:container 2xl:mx-auto overflow-hidden">
            <div className="bg-gradient-to-b from-blue-600  to-white w-full h-screens flex flex-col pb-5">
                <div className="flex flex-col justify-center items-center self-center text-center w-11/12 md:w-1/2 z-10 mt-14">
                    <div className="flex flex-col items-center">
                        <h1 className="text-[1.5rem] md:text-[2rem] text-white font-bold mb-1">
                            Discover the Right Course
                        </h1>
                        <p className="text-white w-full text-xs md:text-sm">
                            Our course search feature is designed to help you
                            find the perfect program that aligns with your
                            academic goals, preferred location, and budget. Use
                            our advanced filters to narrow down your options.
                        </p>

                        <Link href={ROUTES.FILTER_COURSE} className="mt-5">
                            <button className="text-md text-[#2C79FF] flex items-center gap-1 bg-white px-6 md:px-8 py-2 rounded-full hover:shadow-xl transition-all font-extrabold">
                                Try Now
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col items-start p-6 pb-20">
                        <img
                            src="/images/Discover/Mockup.png"
                            alt="Mockup"
                            className="w-full max-w-md md:max-w-lg h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
            <div className="relative">
                <hr className="w-1     lg:w-2 bg-[#2563eb] border-none rounded-full h-[86%] z-150 absolute left-6  lg:left-16   top-44" />
                <StepsCard
                    heading="Choose Location"
                    description="Choose the city in the UK where you want to study."
                    imageUrl="/images/Discover/Step1.png"
                />
                <StepsCard
                    heading="Choose Institute"
                    description="Select from over 100+ UK universities and colleges."
                    imageUrl="/images/Discover/Step2.png"
                    colorChange
                />
                <StepsCard
                    heading="Choose Degree Level"
                    description="Filter by undergraduate, postgraduate, or diploma levels."
                    imageUrl="/images/Discover/Step3.png"
                />
                <StepsCard
                    heading="Choose Discipline"
                    description="Pick your desired field of study, including sub-disciplines for specific focus areas."
                    imageUrl="/images/Discover/Step4.png"
                    colorChange
                />
                <StepsCard
                    heading="Choose Intake"
                    description="Filter by the start date that fits your schedule."
                    imageUrl="/images/Discover/Step5.png"
                />
                <StepsCard
                    heading="Tuition Fees"
                    description="Set your budget to see courses within your financial range."
                    imageUrl="/images/Discover/Step6.png"
                    colorChange
                />
                <StepsCard
                    heading="English Language"
                    description="Filter by institutions accepting your preferred language test 
or medium of instruction letter."
                    imageUrl="/images/Discover/Step7.png"
                />
            </div>
        </div>
    );
};

export default Discover;
