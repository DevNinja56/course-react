import GuidanceCard from '@/components/AboutUs/GuidanceCard';
import SmartMatchBanner from '@/components/AboutUs/SmartMatchBanner';
import FAQ from '@/components/FAQ/FAQ';
import React from 'react';
import { CiGlobe } from 'react-icons/ci';
import { IoBookOutline, IoBulbOutline } from 'react-icons/io5';
import { PiBuildings } from 'react-icons/pi';
import { TbSchool, TbTargetArrow } from 'react-icons/tb';

const AboutUs = () => {
    return (
        <div className="2xl:container 2xl:mx-auto overflow-hidden">
            <div className="bg-[#2B79FF] py-10 text-center flex-col flex justify-center items-center gap-5 relative md:h-[320px]">
                <div className="flex justify-between absolute w-full">
                    <img
                        src="/images/SmartMatch/Pattern.png"
                        className="hidden lg:block h-80 md:h-[320px] scale-x-[-1] opacity-50"
                        alt="Pattern"
                    />
                    <img
                        src="/images/SmartMatch/Pattern.png"
                        className="hidden lg:block h-80 md:h-[320px] opacity-50"
                        alt="Pattern"
                    />
                </div>
                <div className="bg-white px-8 py-2 rounded-full text-[#2B79FF] font-bold text-xs">
                    About us
                </div>
                <h1 className="text-center font-extrabold text-white text-2xl md:text-3xl w-11/12 md:w-3/6">
                    Transforming the UK&apos;s access to international
                    education
                </h1>
            </div>
            <div className="flex flex-col-reverse my-14 items-center relative">
                <img
                    alt="Elipse"
                    className="absolute lg:h-32 h-24 -right-10  top-72"
                    src="/images/elipse.png"
                />
                <img
                    src="/images/LocalEntry/WorldMap.png"
                    alt="WorldMap"
                    className="h-60 md:h-96 object-contain my-4 md:mt-10"
                />
                 <img
                    alt="Elipse"
                    className="absolute lg:h-32 h-24 -left-12  bottom-10"
                    src="/images/elipse.png"
                />
                <div className='text-center flex flex-col justify-center items-center my-10'>
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-[#2563eb] font-extrabold mb-6">
                        Our Mission
                    </h1>
                    <p className="text-gray-500 w-full max-w-[75%] text-sm md:text-base font-light">
                        We aim to connect UK universities directly with
                        international students worldwide, providing streamlined
                        access to educational opportunities across borders.
                    </p>
                </div>

                <div className="flex flex-col pb-8 md:flex-row justify-evenly px-4 md:px-10 w-full">
                    <div className="flex flex-col gap-3 md:gap-4 justify-center items-center">
                        <div className="rounded-full border-4 border-[#2B79FF]">
                            <IoBookOutline className="p-2 text-[30px] md:text-[50px]" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b]">
                            16,000+
                        </h1>
                        <p className="text-md md:text-lg  ">Courses</p>
                        <p className="text-center text-gray-400 text-xs max-w-xs md:max-w-72">
                            Explore a vast selection of programs to suit every
                            interest and career goal.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4 justify-center items-center">
                        <div className="rounded-full border-4 border-[#2B79FF]">
                            <PiBuildings className="p-2 text-[30px] md:text-[50px]" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b]">
                            100+
                        </h1>
                        <p className="text-md md:text-lg  ">Institutes</p>
                        <p className="text-center text-gray-400 text-xs max-w-xs md:max-w-72">
                            Discover diverse programs across leading 100+ UK
                            universities.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4 justify-center items-center">
                        <div className="rounded-full border-4 border-[#2B79FF]">
                            <TbSchool className="p-2 text-[30px] md:text-[50px]" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b]">
                            750+
                        </h1>
                        <p className="text-md md:text-lg  ">Scholarships</p>
                        <p className="text-center text-gray-400 text-xs max-w-xs md:max-w-72">
                            Access exclusive scholarships to help support your
                            education abroad.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center bg-[#EAF2FF] py-10 gap-5 relative">
            <img
                    alt="Elipse"
                    className="absolute lg:h-24 h-16 -right-14 top-72"
                    src="/images/elipse.png"
                />
                 <img
                    alt="Elipse"
                    className="absolute  h-16 -left-10 bottom-10"
                    src="/images/Blogs/Ellipse 426.svg"
                />
                <div className="bg-white px-6 py-2 rounded-full text-black font-bold text-sm">
                    Our Goals
                </div>
                <h1 className="text-[1.5rem] md:text-[2rem] text-[#2B79FF] font-bold my-1 text-center">
                    Helping Students to Succeed Globally
                </h1>
                <p className="text-[#2B79FF] w-3/6 text-xs md:text-sm text-center">
                    We provide students with the resources, guidance, and
                    connections to excel in their academic and career paths
                    globally, supporting success in the international education
                    landscape.
                </p>
                <div className=" my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              
                    <GuidanceCard
                        number="01"
                        title="Access"
                        description="Expanding opportunities for students globally."
                        bgColor="bg-[#2563EB]"
                        icon={<CiGlobe />}
                    />
                    <GuidanceCard
                        number="02"
                        title="Guidance"
                        description="Expert support throughout the application process."
                        bgColor="bg-[#2563EB]"
                        svg="/images/About us/guidance 1.svg"
                    />
                    <GuidanceCard
                        number="03"
                        title="Success"
                        description="Helping students achieve education success."
                        bgColor="bg-[#10BDF3]"
                        icon={<TbTargetArrow />}
                    />
                    <GuidanceCard
                        number="04"
                        title="Innovation"
                        description="Utilizing technology to enhance student experiences."
                        bgColor="bg-white"
                        textColor="text-black"
                        icon={<IoBulbOutline />}
                    />
                </div>
            </div>
            <SmartMatchBanner />
            <FAQ />
        </div>
    );
};

export default AboutUs;
