import GuidanceCard from '@/components/AboutUs/GuidanceCard';
import SmartMatchBanner from '@/components/AboutUs/SmartMatchBanner';
import FAQ from '@/components/FAQ/FAQ';
import { ROUTES } from '@/config/constant';
import Link from 'next/link';
import React from 'react';
import { CiGlobe } from 'react-icons/ci';
import { HiOutlineSparkles } from 'react-icons/hi';
import { IoBookOutline, IoBulbOutline } from 'react-icons/io5';
import { PiBuildings } from 'react-icons/pi';
import { TbSchool, TbTargetArrow } from 'react-icons/tb';

const AboutUs = () => {
    return (
        <div className="2xl:container 2xl:mx-auto overflow-hidden">
            <div className="bg-[#2B79FF] py-10 text-center flex-col flex justify-center items-center gap-5">
                <div className="bg-white px-8 py-2 rounded-full text-[#2B79FF] font-bold text-sm">
                    About us
                </div>
                <h1 className="text-center font-extrabold text-white text-3xl md:text-4xl w-11/12 md:w-3/6">
                    Transforming the world&apos;s access to international
                    education
                </h1>
            </div>
            <div className="flex flex-col items-center relative">
                <img
                    alt="Elipse"
                    className="absolute lg:h-32 h-24 -right-10  top-72"
                    src="/images/elipse.png"
                />
                <img
                    src="/images/LocalEntry/WorldMap.png"
                    alt="WorldMap"
                    className="h-60 md:h-80 object-contain my-4 md:mt-10"
                />

                <div className="flex flex-col gap-10 pb-10 md:flex-row justify-evenly px-4 md:px-10 w-full">
                    <div className="flex flex-col gap-3 md:gap-5 justify-center items-center">
                        <div className="rounded-full border-4 border-[#2B79FF]">
                            <IoBookOutline className="p-2 text-[40px] md:text-[60px]" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold">
                            16,000+
                        </h1>
                        <p className="text-lg md:text-xl font-semibold">
                            Courses
                        </p>
                        <p className="text-center text-gray-400 max-w-xs md:max-w-72">
                            Explore a vast selection of programs to suit every
                            interest and career goal.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-5 justify-center items-center">
                        <div className="rounded-full border-4 border-[#2B79FF]">
                            <PiBuildings className="p-2 text-[40px] md:text-[60px]" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold">100+</h1>
                        <p className="text-lg md:text-xl font-semibold">
                            Institutes
                        </p>
                        <p className="text-center text-gray-400 max-w-xs md:max-w-72">
                            Discover diverse programs across leading 100+ UK
                            universities.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-5 justify-center items-center">
                        <div className="rounded-full border-4 border-[#2B79FF]">
                            <TbSchool className="p-2 text-[40px] md:text-[60px]" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold">750+</h1>
                        <p className="text-lg md:text-xl font-semibold">
                            Scholarships
                        </p>
                        <p className="text-center text-gray-400 max-w-xs md:max-w-72">
                            Access exclusive scholarships to help support your
                            education abroad.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center bg-[#EAF2FF] py-10 gap-5">
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
