import CounselingWork from '@/components/CounselingWork/CounselingWork';
import Testimonial from '@/components/Testimonial';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CourseDetail = () => {
    return (
        <>
            <div className="w-full mt-[100px] bg-profileBgColor relative py-20">
                <Image
                    height={60}
                    width={60}
                    alt="course-round"
                    className="bottom-[-60px] absolute"
                    src="/images/CourseDetail/Circle 3.svg"
                    priority
                />
                <div className="max-w-[1163px] 2xl:max-w-[2300px] mx-auto px-2 2xl:px-8 transition-all duration-300 flex flex-col">
                    <div className="w-[70%]">
                        <h1 className="text-textLightBlackColor text-[32px] font-semibold">
                            Advanced Diploma in Architectural Technician
                            <br /> (Adv Dip)
                        </h1>
                        <div className="w-full flex justify-end pr-[92px]">
                            <div className="flex items-center gap-5">
                                <button className="rounded-[20px] pt-[9px] pb-2 px-4 border-2 border-white hover:border-purpleColor text-white hover:text-purpleColor bg-purpleColor hover:bg-white">
                                    M.Sc.
                                </button>
                                <button className="rounded-[20px] pt-[9px] pb-2 px-4 border-2 border-white hover:border-blueColor text-white hover:text-blueColor bg-blueColor hover:bg-white">
                                    On Campus
                                </button>
                                <button className="h-[36px] w-[36px] rounded-full flex items-center justify-center border-2 border-white bg-heartBgColor hover:bg-white group">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.76953 9.3571C2.76953 13.8459 6.47978 16.238 9.19575 18.3791C10.1541 19.1346 11.0772 19.8459 12.0003 19.8459C12.9234 19.8459 13.8465 19.1346 14.8049 18.3791C17.5209 16.238 21.2311 13.8459 21.2311 9.3571C21.2311 4.86823 16.154 1.68482 12.0003 6.00036C7.8466 1.68482 2.76953 4.86823 2.76953 9.3571Z"
                                            className="fill-white group-hover:fill-red-600"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white absolute right-24 top-20 rounded-[10px] p-3 w-[25%] z-10 custom-shadow">
                    <div className="relative flex justify-center w-full h-[228px]">
                        <Image
                            height={228}
                            width={353.5}
                            alt="mainimg"
                            className="absolute top-0 left-0 w-full h-[228px]"
                            src="/images/CourseDetail/Rectangle 1697.svg"
                            priority
                        />
                        <h1 className="text-center font-bold text-2xl text-white z-10 pt-32">
                            Mississippi State University
                        </h1>
                    </div>
                    <div className="px-3 pt-5">
                        <h1 className="text-mainTextColor text-xl font-bold mb-2">
                            About
                        </h1>
                        <p className="text-[13px] text-grayColor mb-2">
                            This Forestry MSc study from Mississippi State
                            University offers graduate programs leading to the
                            degrees of Master of Science in forestry and Doctor
                            of Philosophy in forest resources.
                        </p>
                        <p className="text-[11px] text-grayColor mb-8">
                            Visit the{' '}
                            <span className="text-blueColor font-bold">
                                Visit university website
                            </span>{' '}
                            for more information
                        </p>
                        <Link href="/apply">
                            <button className="w-full pt-[19px] pb-[18px] rounded-[5px] text-white text-lg font-semibold bg-blueColor hover:bg-blue-600 mb-4">
                                Apply
                            </button>
                        </Link>
                        <Link href="/compare">
                            <button className="w-full pt-[19px] pb-[18px] rounded-[5px] hover:text-white text-lg font-semibold bg-white hover:bg-blueColor border border-blueColor text-blueColor mb-2">
                                Compare
                            </button>
                        </Link>
                    </div>
                    <div className="px-3 pt-5 mb-5">
                        <h1 className="text-mainTextColor text-xl font-bold mb-6">
                            Key information
                        </h1>
                        <div className="flex flex-col gap-y-5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-2">
                                    <Image
                                        height={20}
                                        width={20}
                                        alt="duration-icon"
                                        src="/images/CourseDetail/Clock Circle.svg"
                                        priority
                                    />
                                    <p className="text-textLightBlackColor">
                                        Duration
                                    </p>
                                </div>
                                <p className="text-darkGrayColor">02 Years</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-2">
                                    <Image
                                        height={20}
                                        width={20}
                                        alt="cup-icon"
                                        src="/images/CourseDetail/Cup.svg"
                                        priority
                                    />
                                    <p className="text-textLightBlackColor">
                                        Level
                                    </p>
                                </div>
                                <p className="text-darkGrayColor">
                                    Advanced Diploma
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-2">
                                    <Image
                                        height={20}
                                        width={20}
                                        alt="subject-icon"
                                        src="/images/CourseDetail/subject.svg"
                                        priority
                                    />
                                    <p className="text-textLightBlackColor">
                                        Discipline
                                    </p>
                                </div>
                                <p className="text-darkGrayColor">
                                    Architecture
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-2">
                                    <Image
                                        height={20}
                                        width={20}
                                        alt="language-icon"
                                        src="/images/CourseDetail/Language.svg"
                                        priority
                                    />
                                    <p className="text-textLightBlackColor">
                                        Language
                                    </p>
                                </div>
                                <p className="text-darkGrayColor">English</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-2">
                                    <Image
                                        height={20}
                                        width={20}
                                        alt="target-icon"
                                        src="/images/CourseDetail/target-05.svg"
                                        priority
                                    />
                                    <p className="text-textLightBlackColor">
                                        Format
                                    </p>
                                </div>
                                <p className="text-darkGrayColor">Full time</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-2">
                                    <Image
                                        height={20}
                                        width={20}
                                        alt="map-icon"
                                        src="/images/CourseDetail/Map Point.svg"
                                        priority
                                    />
                                    <p className="text-textLightBlackColor">
                                        Delivery
                                    </p>
                                </div>
                                <p className="text-darkGrayColor">On Campus</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-2">
                                    <Image
                                        height={20}
                                        width={20}
                                        alt="plain-icon"
                                        src="/images/CourseDetail/Plain.svg"
                                        priority
                                    />
                                    <p className="text-textLightBlackColor">
                                        Apply date
                                    </p>
                                </div>
                                <p className="text-darkGrayColor">
                                    24 Oct, 2023
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-2">
                                    <Image
                                        height={20}
                                        width={20}
                                        alt="calender-icon"
                                        src="/images/CourseDetail/Calendar.svg"
                                        priority
                                    />
                                    <p className="text-textLightBlackColor">
                                        Start date
                                    </p>
                                </div>
                                <p className="text-darkGrayColor">Jan 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    height={273}
                    width={274}
                    alt="courseDetail-round"
                    className="absolute right-5 top-5"
                    src="/images/CourseDetail/Ciecle 4.svg"
                    priority
                />
            </div>
            <div className="w-full pb-28 bg-white">
                <div className="max-w-[1110px] 2xl:max-w-[2300px] mx-auto px-2 2xl:px-8 transition-all duration-300 pt-16 pr-[360px] 2xl:pr-[700px]">
                    <div className="w-full flex items-center gap-x-5 border-b-2 border-borderColor mb-20 text-sm">
                        <h1 className="py-[10px] border-b-2 border-blueColor font-medium text-blueColor">
                            Overview
                        </h1>
                        <h1 className="py-[10px] font-medium text-mainTextColor">
                            Programme Structure
                        </h1>
                        <h1 className="py-[10px] font-medium text-mainTextColor">
                            Academic requirements
                        </h1>
                        <h1 className="py-[10px] font-medium text-mainTextColor">
                            Fees and funding
                        </h1>
                        <h1 className="py-[10px] font-medium text-mainTextColor">
                            Visa information
                        </h1>
                        <h1 className="py-[10px] font-medium text-mainTextColor">
                            Work permit
                        </h1>
                    </div>
                    <div className="flex flex-col gap-y-6 mb-20">
                        <h1 className="font-semibold text-xl text-textLightBlackColor">
                            Description
                        </h1>
                        <p className="text-lightGrayColor">
                            Within this{' '}
                            <span className="text-blueColor">Forestry</span> MSc
                            study from{' '}
                            <span className="text-blueColor">
                                Mississippi State University
                            </span>{' '}
                            , specialized areas of study include forest
                            business, forest management and economics, forest
                            genetics, forest hydrology and soils, silviculture,
                            forest biometrics, forest photogrammetry and remote
                            sensing, forest tree and seed physiology, forest
                            harvesting and operations, and forest ecophysiology.
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-6 mb-20">
                        <h1 className="font-semibold text-xl text-textLightBlackColor">
                            Key fact:
                        </h1>
                        <p className="text-lightGrayColor">
                            The department has an extensive research program
                            within the MSU Forest and Wildlife Research Center.
                            This program provides graduate students with a wide
                            choice of problems for thesis or dissertation
                            research supervised by an experienced faculty
                            member.
                        </p>
                    </div>
                    <div className="py-6 border-t-2 border-borderColor flex items-center justify-between w-full mb-20">
                        <h1 className="text-xl font-semibold text-textLightBlackColor">
                            Get more details
                        </h1>
                        <p className="text-blueColor">
                            Visit university website
                        </p>
                    </div>
                </div>
            </div>
            <CounselingWork />
            <Testimonial />
        </>
    );
};

export default CourseDetail;
