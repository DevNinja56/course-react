import CounselingWork from '@/components/CounselingWork/CounselingWork';
import Testimonial from '@/components/Testimonial';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const CourseDetail = () => {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <>
            <div className="w-full mt-[100px] bg-profileBgColor relative py-20 overflow-hidden md:overflow-visible">
                <Image
                    height={60}
                    width={60}
                    alt="course-round"
                    className="bottom-[-30px] lg:bottom-[-60px] absolute h-16 w-16 lg:h-24 lg:w-24 hidden md:block"
                    src="/images/CourseDetail/Circle 3.svg"
                    priority
                />
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-[20px] md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300 flex flex-col">
                    <div className="w-full flex flex-col gap-y-8 lg:w-[70%]">
                        <h1 className="text-textLightBlackColor text-2xl md:text-[30px] font-semibold">
                            Advanced Diploma in Architectural Technician (Adv
                            Dip)
                        </h1>
                        <div className="w-full flex justify-start lg:justify-end pr-0 lg:pr-[92px]">
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
                <div className="bg-white absolute right-8 xl:right-24 top-20 rounded-[10px] p-3 w-[25%] z-10 custom-shadow hidden lg:block">
                    <div className="relative flex justify-center items-end w-full h-[228px] pb-3">
                        <Image
                            height={228}
                            width={353.5}
                            alt="mainimg"
                            className="absolute top-0 left-0 w-full h-[228px] object-cover"
                            src="/images/CourseDetail/Rectangle 1697.svg"
                            priority
                        />
                        <h1 className="text-center font-bold text-2xl text-white z-10">
                            Mississippi State University
                        </h1>
                    </div>
                    <div className="pt-5">
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
                    className="absolute right-[-40px] md:right-5 lg:right-0 xl:right-5 top-[-20px] md:top-auto md:bottom-8 lg:top-5 h-28 w-28 md:h-32 md:w-32 lg:h-60 lg:w-60"
                    src="/images/CourseDetail/Ciecle 4.svg"
                    priority
                />
            </div>
            <div className="w-full bg-white h-auto lg:h-[180vh] xl:h-[160vh] pb-20 lg:pb-0">
                <div className="max-w-[1110px] 2xl:max-w-[2300px] mx-auto px-0 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300 pt-16 pr-auto lg:pr-[293px] 2xl:pr-[700px]">
                    <div className="w-full lg:w-[100%] xl:w-[94%] flex flex-col md:flex-row items-start md:items-center gap-x-2 justify-between lg:justify-start lg:gap-x-5 xl:gap-x-6 border-b-none md:border-b-2 border-borderColor mb-12 lg:mb-20 text-sm">
                        <div className="w-full md:w-auto">
                            <h1
                                onClick={() =>
                                    setShowDescription(!showDescription)
                                }
                                className="py-[10px] border-b-2 border-gray-100 md:border-blueColor text-blueColor w-full flex items-center justify-between md:w-auto px-5 md:px-0 font-semibold md:font-medium"
                            >
                                Overview
                                <Image
                                    height={20}
                                    width={20}
                                    alt="down-arrow"
                                    src="/images/chevron-down.svg"
                                    className={`block md:hidden transition-all duration-500 ${
                                        showDescription
                                            ? 'rotate-[180deg]'
                                            : 'rotate-0'
                                    }`}
                                    priority
                                />
                            </h1>
                            <div
                                className={`pt-5 pb-10 overflow-hidden transition-all duration-500 block md:hidden bg-white px-5 ${
                                    showDescription
                                        ? 'h-[105vh] static visible opacity-[1]'
                                        : 'absolute invisible opacity-0'
                                }`}
                            >
                                <div className="flex flex-col gap-y-6 mb-5">
                                    <h1 className="font-semibold text-lg md:text-xl text-textLightBlackColor">
                                        Description
                                    </h1>
                                    <p className="text-lightGrayColor text-sm md:text-base">
                                        Within this{' '}
                                        <span className="text-blueColor">
                                            Forestry
                                        </span>{' '}
                                        MSc study from{' '}
                                        <span className="text-blueColor">
                                            Mississippi State University
                                        </span>{' '}
                                        , specialized areas of study include
                                        forest business, forest management and
                                        economics, forest genetics, forest
                                        hydrology and soils, silviculture,
                                        forest biometrics, forest photogrammetry
                                        and remote sensing, forest tree and seed
                                        physiology, forest harvesting and
                                        operations, and forest ecophysiology.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-y-6 mb-5">
                                    <h1 className="font-semibold text-lg md:text-xl text-textLightBlackColor">
                                        Key fact:
                                    </h1>
                                    <p className="text-lightGrayColor text-sm md:text-base">
                                        The department has an extensive research
                                        program within the MSU Forest and
                                        Wildlife Research Center. This program
                                        provides graduate students with a wide
                                        choice of problems for thesis or
                                        dissertation research supervised by an
                                        experienced faculty member.
                                    </p>
                                </div>
                                <div className="pt-6 border-t border-borderColor flex items-center justify-between w-full">
                                    <h1 className="text-lg md:text-xl font-semibold text-textLightBlackColor">
                                        Get more details
                                    </h1>
                                    <p className="text-blueColor">
                                        Visit university website
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-auto">
                            <h1 className="py-[10px] border-b-2 border-gray-100 lg:border-none text-blueColor md:text-mainTextColor w-full flex items-center justify-between md:w-auto px-5 md:px-0 font-semibold md:font-medium">
                                Programme Structure
                                <Image
                                    height={20}
                                    width={20}
                                    alt="down-arrow"
                                    src="/images/chevron-down.svg"
                                    className="block md:hidden"
                                    priority
                                />
                            </h1>
                        </div>
                        <div className="w-full md:w-auto">
                            <h1 className="py-[10px] border-b-2 border-gray-100 lg:border-none text-blueColor md:text-mainTextColor w-full flex items-center justify-between md:w-auto px-5 md:px-0 font-semibold md:font-medium">
                                Academic requirements
                                <Image
                                    height={20}
                                    width={20}
                                    alt="down-arrow"
                                    src="/images/chevron-down.svg"
                                    className="block md:hidden"
                                    priority
                                />
                            </h1>
                        </div>
                        <div className="w-full md:w-auto">
                            <h1 className="py-[10px] border-b-2 border-gray-100 lg:border-none text-blueColor md:text-mainTextColor w-full flex items-center justify-between md:w-auto px-5 md:px-0 font-semibold md:font-medium">
                                Fees and funding
                                <Image
                                    height={20}
                                    width={20}
                                    alt="down-arrow"
                                    src="/images/chevron-down.svg"
                                    className="block md:hidden"
                                    priority
                                />
                            </h1>
                        </div>
                        <div className="w-full md:w-auto">
                            <h1 className="py-[10px] border-b-2 border-gray-100 lg:border-none text-blueColor md:text-mainTextColor w-full flex items-center justify-between md:w-auto px-5 md:px-0 font-semibold md:font-medium">
                                Visa information
                                <Image
                                    height={20}
                                    width={20}
                                    alt="down-arrow"
                                    src="/images/chevron-down.svg"
                                    className="block md:hidden"
                                    priority
                                />
                            </h1>
                        </div>
                        <div className="w-full md:w-auto">
                            <h1 className="py-[10px] border-b-2 border-gray-100 lg:border-none text-blueColor md:text-mainTextColor w-full flex items-center justify-between md:w-auto px-5 md:px-0 font-semibold md:font-medium">
                                Work permit
                                <Image
                                    height={20}
                                    width={20}
                                    alt="down-arrow"
                                    src="/images/chevron-down.svg"
                                    className="block md:hidden"
                                    priority
                                />
                            </h1>
                        </div>
                    </div>
                    <div className="pr-4 xl:pr-7 px-5 md:px-0">
                        <div className="hidden md:block">
                            <div className="flex flex-col gap-y-6 mb-12 lg:mb-20">
                                <h1 className="font-semibold text-xl text-textLightBlackColor">
                                    Description
                                </h1>
                                <p className="text-lightGrayColor">
                                    Within this{' '}
                                    <span className="text-blueColor">
                                        Forestry
                                    </span>{' '}
                                    MSc study from{' '}
                                    <span className="text-blueColor">
                                        Mississippi State University
                                    </span>{' '}
                                    , specialized areas of study include forest
                                    business, forest management and economics,
                                    forest genetics, forest hydrology and soils,
                                    silviculture, forest biometrics, forest
                                    photogrammetry and remote sensing, forest
                                    tree and seed physiology, forest harvesting
                                    and operations, and forest ecophysiology.
                                </p>
                            </div>
                            <div className="flex flex-col gap-y-6 mb-12 lg:mb-20">
                                <h1 className="font-semibold text-xl text-textLightBlackColor">
                                    Key fact:
                                </h1>
                                <p className="text-lightGrayColor">
                                    The department has an extensive research
                                    program within the MSU Forest and Wildlife
                                    Research Center. This program provides
                                    graduate students with a wide choice of
                                    problems for thesis or dissertation research
                                    supervised by an experienced faculty member.
                                </p>
                            </div>
                            <div className="py-6 border-t-2 border-borderColor flex items-center justify-between w-full mb-12 lg:mb-20">
                                <h1 className="text-xl font-semibold text-textLightBlackColor">
                                    Get more details
                                </h1>
                                <p className="text-blueColor">
                                    Visit university website
                                </p>
                            </div>
                        </div>
                        <div className="p-5 md:p-7 mb-5 w-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[10px] block lg:hidden">
                            <h1 className="text-mainTextColor text-xl font-bold mb-6">
                                Key information
                            </h1>
                            <div className="flex flex-col gap-y-5 mb-16">
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
                                    <p className="text-darkGrayColor">
                                        02 Years
                                    </p>
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
                                    <p className="text-darkGrayColor">
                                        English
                                    </p>
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
                                    <p className="text-darkGrayColor">
                                        Full time
                                    </p>
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
                                    <p className="text-darkGrayColor">
                                        On Campus
                                    </p>
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
                                    <p className="text-darkGrayColor">
                                        Jan 2024
                                    </p>
                                </div>
                            </div>
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
                    </div>
                </div>
            </div>
            <CounselingWork />
            <Testimonial />
        </>
    );
};

export default CourseDetail;
