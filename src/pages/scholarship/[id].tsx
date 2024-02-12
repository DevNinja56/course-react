import Button from '@/components/Button';
import FavoriteButton from '@/components/Button/FavoriteButton';
import ScreenLoader from '@/components/Loader/ScreenLoader';
import Tabs from '@/components/Tabs';
import CourseTag from '@/components/course/CourseTag';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { ROUTES } from '@/config/constant';
import { scholarshipType } from '@/types';
import { getSsrRequest } from '@/utils/ssrRequest';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiSolidCalendar } from 'react-icons/bi';
import { CiCalculator2 } from 'react-icons/ci';
import { FaCalendar, FaMoneyBillWave } from 'react-icons/fa6';
import { GiOpenBook, GiTrophy } from 'react-icons/gi';
import { GoClockFill } from 'react-icons/go';
import { IoShareSocialSharp } from 'react-icons/io5';

const CourseDetail = ({ data: scholarship }: { data: scholarshipType }) => {
    return (
        <>
            {!scholarship ? (
                <ScreenLoader />
            ) : (
                <>
                    <div className="w-full flex justify-center overflow-hidden mt-[100px] relative">
                        <Image
                            height={60}
                            width={60}
                            alt="course-round"
                            className="top-1/3 absolute -left-3 md:-left-5 h-8 w-8 md:h-16 md:w-16 lg:h-24 lg:w-24 z-10"
                            src="/images/CourseDetail/Circle 3.svg"
                            priority
                        />
                        <div className="w-full py-5 pb-10 md:py-10 xl:py-20 flex justify-center xl:container px-4 md:px-[50px] lg:px-2 2xl:px-8">
                            <Image
                                height={375}
                                width={1240}
                                alt="courseDetail"
                                src="/images/CourseDetail/courseDetailMain.png"
                                className="z-20 h-full w-full lg:block hidden"
                                priority
                            />
                            <Image
                                height={375}
                                width={1240}
                                alt="courseDetail"
                                src="/images/CourseDetail/courseDetailMainTablet.png"
                                className="z-20 h-full w-full lg:hidden block"
                                priority
                            />
                        </div>
                        <Image
                            height={273}
                            width={274}
                            alt="courseDetail-round"
                            className="absolute right-[-40px] lg:-right-20 -top-7 md:-top-16 md:-right-8 md:translate-y-8 lg:translate-y-0 md:bottom-8 lg:-top-16 h-20 w-20 md:h-32 md:w-32 lg:h-80 lg:w-80"
                            src="/images/CourseDetail/Ciecle 4.svg"
                            priority
                        />
                    </div>
                    <div className="flex items-center w-full xl:container px-4 md:px-[50px] lg:px-2 2xl:px-8 mx-auto transition-all duration-300 flex-col gap-6 mb-32">
                        <div className="w-full flex flex-wrap gap-2 gap-y-4 md:gap-y-8 justify-between">
                            <h1 className="text-mainTextColor text-xl md:text-3xl font-bold">
                                {scholarship?.name}
                            </h1>
                            <div className="flex pr-0">
                                <div className="flex flex-wrap items-center gap-1 md:gap-2 lg:gap-3">
                                    <button className="rounded-[20px] py-2 px-3 md:px-4 text-xs md:text-sm border-2 border-white hover:border-purpleColor text-white hover:text-purpleColor bg-purpleColor hover:bg-white capitalize">
                                        {scholarship?.type}
                                    </button>
                                    <button className="rounded-[20px] py-2 px-3 md:px-4 text-xs md:text-sm border-2 border-white hover:border-blueColor text-white hover:text-blueColor bg-blueColor hover:bg-white flex gap-2 items-center">
                                        {scholarship?.institute.sector}
                                        <CiCalculator2 />
                                    </button>
                                    <FavoriteButton
                                        isActive={
                                            !!scholarship?.favoriteId?.[0]
                                        }
                                        body={{
                                            scholarship: scholarship.id
                                        }}
                                        className="h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center border-2 border-white bg-heartBgColor hover:bg-white group"
                                        iconClass={`text-3xl text-white group-hover:text-red-600`}
                                    />
                                    <div className="h-8 w-8 rounded-full bg-white shadow-lg lg:flex items-center justify-center hidden">
                                        <IoShareSocialSharp className="text-gray-400 h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-0 xl:gap-16 w-full justify-between">
                            <div className="bg-white w-full lg:w-[70%] xl:w-2/3 h-headerStickyHeight static lg:sticky top-[110px] no-scrollbar mb-0 md:mb-0 lg:mb-96">
                                <div className=" transition-all duration-300">
                                    <div className="flex flex-col gap-y-6 mb-16 md:mb-20">
                                        <div className="tabs-container capitalize">
                                            <Tabs
                                                data={[
                                                    {
                                                        title: 'Eligibility Criteria',
                                                        element: (
                                                            <div className="flex flex-col gap-8 items-start">
                                                                <h3 className="text-black text-lg md:text-2xl font-bold">
                                                                    Eligibility
                                                                    Criteria
                                                                </h3>
                                                                <div className="content text-sm md:text-base">
                                                                    test
                                                                </div>
                                                            </div>
                                                        )
                                                    },
                                                    {
                                                        title: 'Application Status',
                                                        element: (
                                                            <div className="flex flex-col gap-8">
                                                                <h3 className="text-black text-lg md:text-2xl font-bold">
                                                                    Application
                                                                    Status
                                                                </h3>
                                                                <p className="text-sm md:text-base">
                                                                    test
                                                                </p>
                                                            </div>
                                                        )
                                                    },
                                                    {
                                                        title: 'Amount',
                                                        element: (
                                                            <div className="flex flex-col gap-8">
                                                                <h3 className="text-black text-lg md:text-2xl font-bold">
                                                                    Amount
                                                                </h3>
                                                                <p className="text-sm md:text-base">
                                                                    test
                                                                </p>
                                                            </div>
                                                        )
                                                    }
                                                ]}
                                            />
                                        </div>
                                    </div>
                                    <div className="py-6 border-t-2 border-borderColor flex items-center justify-between w-full mb-8 md:mb-20">
                                        <h1 className="text-base md:text-xl font-semibold text-textLightBlackColor">
                                            Get more details
                                        </h1>
                                        <Link
                                            href={
                                                scholarship.institute
                                                    .instituteURL
                                            }
                                            target="_blank"
                                            className="text-blueColor text-xs md:text-base"
                                        >
                                            Visit university website
                                        </Link>
                                    </div>
                                    {/* {scholarship.documentsRequirement && (
                                        <div className="flex flex-col gap-5 w-full">
                                            <div className="flex items-center gap-2">
                                                <IoDocumentText className="h-7 w-7 md:h-8 md:w-8" />
                                                <h1 className="font-bold text-lg md:text-2xl text-mainTextColor">
                                                    Requirements
                                                </h1>
                                            </div>
                                            <p className="text-sm md:text-xl font-medium text-lightGrayColor">
                                                Listed below are the documents
                                                required to apply for this
                                                course.
                                            </p>
                                            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
                                                {course.documentsRequirement?.map(
                                                    ({ title, url }, i) => (
                                                        <RequirementBox
                                                            key={
                                                                'docs requirement--' +
                                                                i +
                                                                title
                                                            }
                                                            text={title}
                                                            url={url}
                                                        />
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )} */}
                                </div>
                            </div>
                            <div className="flex flex-col gap-11 w-full lg:w-[28%] xl:w-[30%]">
                                <div className="bg-white rounded-[10px] px-4 py-6 w-full z-10 shadow-RequirementBox mt-4 hidden lg:block">
                                    <div className="relative flex justify-center items-end w-full h-[228px] pb-3">
                                        <Image
                                            height={228}
                                            width={353.5}
                                            alt="minim"
                                            className="absolute top-0 left-0 w-full h-[228px] object-cover"
                                            src={
                                                scholarship.institute?.image ??
                                                '/images/CourseDetail/Rectangle 1697.svg'
                                            }
                                            priority
                                        />
                                        <h1 className="text-center font-bold text-2xl text-white z-10">
                                            {scholarship.institute.name}
                                        </h1>
                                    </div>
                                    <div className="pt-5 px-1 xl:px-3">
                                        <h1 className="text-mainTextColor text-xl font-bold mb-2">
                                            About
                                        </h1>
                                        <p className="text-[13px] text-lightGrayColor mb-2">
                                            {scholarship.institute.description.slice(
                                                0,
                                                200
                                            )}
                                            ...
                                        </p>
                                        <p className="text-xs text-lightGrayColor mb-8">
                                            Visit the{' '}
                                            <Link
                                                href={
                                                    scholarship.institute
                                                        .instituteURL
                                                }
                                                target="_blank"
                                                className="text-blueColor font-bold"
                                            >
                                                Visit university website
                                            </Link>{' '}
                                            for more information
                                        </p>
                                        <div className="flex flex-col gap-3">
                                            <Button
                                                className="py-3 rounded-md text-sm font-semibold"
                                                text="Start Application"
                                                link={ROUTES.APPLY}
                                            />

                                            <Button
                                                className="py-3 rounded-md text-sm font-semibold"
                                                text="Compare"
                                                link={{
                                                    pathname: ROUTES.COMPARE,
                                                    query: {
                                                        scholarship_id:
                                                            scholarship.id
                                                    }
                                                }}
                                                variant="outline"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-[10px] w-full z-10 shadow-RequirementBox mt-4 py-3">
                                    <div className="flex flex-col capitalize">
                                        <div className="flex items-center gap-4 pl-5 border-b-2 border-gray-200 border-opacity-50 py-4">
                                            <FaMoneyBillWave className="h-8 w-8 text-blueColor" />
                                            <div className="flex flex-col gap-1">
                                                <p className="font-bold text-base text-mainTextColor">
                                                    Type
                                                </p>
                                                <p className="text-lightGrayColor text-base">
                                                    {scholarship.type}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 pl-5 border-b-2 border-gray-200 border-opacity-50 py-4">
                                            <GiTrophy className="h-8 w-8 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-base text-mainTextColor">
                                                    Level
                                                </p>
                                                <p className="text-lightGrayColor text-base">
                                                    {scholarship.degrees
                                                        .map(
                                                            (degree) =>
                                                                degree.name
                                                        )
                                                        .join('-')}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 pl-5 border-b-2 border-gray-200 border-opacity-50 py-4">
                                            <GoClockFill className="h-8 w-8 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-base text-mainTextColor">
                                                    Applicable
                                                </p>
                                                <p className="text-lightGrayColor text-base">
                                                    {scholarship.applicable}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 pl-5 border-b-2 border-gray-200 border-opacity-50 py-4">
                                            <FaCalendar className="h-8 w-8 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-base text-mainTextColor">
                                                    Start date
                                                </p>
                                                <p className="text-lightGrayColor text-base">
                                                    {new Date(
                                                        scholarship.startDate
                                                    ).toDateString()}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 pl-5 border-b-2 border-gray-200 border-opacity-50 py-4">
                                            <FaCalendar className="h-8 w-8 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-base text-mainTextColor">
                                                    End date
                                                </p>
                                                <p className="text-lightGrayColor text-base">
                                                    {new Date(
                                                        scholarship.endDate
                                                    ).toDateString()}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row items-center w-full gap-3 md:gap-5 lg:hidden">
                                    <div className="w-full">
                                        <Button
                                            className="py-4 rounded-md text-sm md:text-base font-semibold w-full"
                                            text="Start Application"
                                            link={ROUTES.APPLY}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <Button
                                            className="py-4 rounded-md text-base font-semibold w-full"
                                            text="Compare"
                                            link={{
                                                pathname: ROUTES.COMPARE,
                                                query: {
                                                    scholarship_id:
                                                        scholarship.id
                                                }
                                            }}
                                            variant="outline"
                                        />
                                    </div>
                                </div>
                                <CourseTag
                                    icon={
                                        <BiSolidCalendar className="h-7 w-7" />
                                    }
                                    text="Upcoming Intakes"
                                    tagName="September 2024"
                                />
                                <CourseTag
                                    icon={<GiOpenBook className="h-7 w-7" />}
                                    text="Mode of Study"
                                    tagName="Full Time"
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
        // <>
        //     {!scholarship ? (
        //         <ScreenLoader />
        //     ) : (
        //         <>
        //             <div className="w-full mt-[100px] bg-profileBgColor relative py-20 overflow-hidden md:overflow-visible">
        //                 <Image
        //                     height={60}
        //                     width={60}
        //                     alt="course-round"
        //                     className="bottom-[-30px] lg:bottom-[-60px] absolute h-16 w-16 lg:h-24 lg:w-24 hidden md:block"
        //                     src="/images/CourseDetail/Circle 3.svg"
        //                     priority
        //                 />
        //                 <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-4 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300 flex flex-col">
        //                     <div className="w-full flex flex-col gap-y-8 lg:w-[70%]">
        //                         <h1 className="text-textLightBlackColor text-2xl md:text-[30px] font-semibold">
        //                             {scholarship?.name}
        //                         </h1>
        //                         <div className="w-full flex justify-start lg:justify-end pr-0 lg:pr-[92px]">
        //                             <div className="flex items-center gap-5">
        //                                 <button className="rounded-[20px] pt-[9px] pb-2 px-4 border-2 border-white hover:border-purpleColor text-white hover:text-purpleColor bg-purpleColor hover:bg-white">
        //                                     {scholarship?.type}
        //                                 </button>
        //                                 <button className="rounded-[20px] pt-[9px] pb-2 px-4 border-2 border-white hover:border-blueColor text-white hover:text-blueColor bg-blueColor hover:bg-white">
        //                                     {' '}
        //                                     {scholarship?.institute.sector}
        //                                 </button>
        //                                 <FavoriteButton
        //                                     isActive={
        //                                         !!scholarship?.favoriteId?.[0]
        //                                     }
        //                                     body={{
        //                                         scholarship: scholarship.id
        //                                     }}
        //                                     className="h-[46px] w-[46px] rounded-full flex items-center justify-center border-2 border-white bg-heartBgColor hover:bg-white group"
        //                                     iconClass={`text-3xl text-white group-hover:text-red-600`}
        //                                 />
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="bg-white absolute right-8 xl:right-24 top-20 rounded-[10px] p-3 w-[28%] xl:w-[25%] z-10 custom-shadow hidden lg:block">
        //                     <div className="relative flex justify-center items-end w-full h-[228px] pb-3">
        //                         <Image
        //                             height={228}
        //                             width={353.5}
        //                             alt="mainimg"
        //                             className="absolute top-0 left-0 w-full h-[228px] object-cover"
        //                             src={
        //                                 scholarship.institute?.image ??
        //                                 '/images/CourseDetail/Rectangle 1697.svg'
        //                             }
        //                             priority
        //                         />
        //                         <h1 className="text-center font-bold text-2xl text-white z-10">
        //                             {scholarship.institute.name}
        //                         </h1>
        //                     </div>
        //                     <div className="pt-5">
        //                         <h1 className="text-mainTextColor text-xl font-bold mb-2">
        //                             About
        //                         </h1>
        //                         <p className="text-[13px] text-grayColor mb-2">
        //                             {scholarship.institute.description.slice(
        //                                 0,
        //                                 200
        //                             )}
        //                             ...
        //                         </p>
        //                         <p className="text-[11px] text-grayColor mb-8">
        //                             Visit the{' '}
        //                             <Link
        //                                 href={
        //                                     scholarship.institute.instituteURL
        //                                 }
        //                                 target="_blank"
        //                                 className="text-blueColor font-bold"
        //                             >
        //                                 Visit university website
        //                             </Link>{' '}
        //                             for more information
        //                         </p>
        //                         <div className="flex flex-col gap-3">
        //                             <Button
        //                                 className="pt-[14px] pb-[13px]"
        //                                 text="Apply"
        //                                 link={ROUTES.APPLY}
        //                             />
        //                         </div>
        //                     </div>
        //                     <div className="px-3 pt-5 mb-5">
        //                         <h1 className="text-mainTextColor text-xl font-bold mb-6">
        //                             Key information
        //                         </h1>
        //                         <div className="flex flex-col gap-y-5 capitalize ">
        //                             <div className="flex items-center justify-between">
        //                                 <div className="flex items-center gap-x-2">
        //                                     <Image
        //                                         height={20}
        //                                         width={20}
        //                                         alt="cup-icon"
        //                                         src="/images/CourseDetail/Cup.svg"
        //                                         priority
        //                                     />
        //                                     <p className="text-textLightBlackColor">
        //                                         Level
        //                                     </p>
        //                                 </div>
        //                                 <p className="text-darkGrayColor truncate px-5 max-w-[250px] text-right">
        //                                     {scholarship.degrees
        //                                         .map((degree) => degree.name)
        //                                         .join('-')}
        //                                 </p>
        //                             </div>
        //                             <div className="flex items-center justify-between">
        //                                 <div className="flex items-center gap-x-2">
        //                                     <Image
        //                                         height={20}
        //                                         width={20}
        //                                         alt="duration-icon"
        //                                         src="/images/CourseDetail/Clock Circle.svg"
        //                                         priority
        //                                     />
        //                                     <p className="text-textLightBlackColor">
        //                                         applicable
        //                                     </p>
        //                                 </div>
        //                                 <p className="text-darkGrayColor">
        //                                     {scholarship.applicable}
        //                                 </p>
        //                             </div>

        //                             <div className="flex items-center justify-between">
        //                                 <div className="flex items-center gap-x-2">
        //                                     <Image
        //                                         height={20}
        //                                         width={20}
        //                                         alt="subject-icon"
        //                                         src="/images/CourseDetail/subject.svg"
        //                                         priority
        //                                     />
        //                                     <p className="text-textLightBlackColor">
        //                                         Type
        //                                     </p>
        //                                 </div>
        //                                 <p className="text-darkGrayColor">
        //                                     {scholarship.type}
        //                                 </p>
        //                             </div>

        //                             <div className="flex items-center justify-between">
        //                                 <div className="flex items-center gap-x-2">
        //                                     <Image
        //                                         height={20}
        //                                         width={20}
        //                                         alt="calender-icon"
        //                                         src="/images/CourseDetail/Calendar.svg"
        //                                         priority
        //                                     />
        //                                     <p className="text-textLightBlackColor">
        //                                         Start date
        //                                     </p>
        //                                 </div>
        //                                 <p className="text-darkGrayColor">
        //                                     {new Date(
        //                                         scholarship.startDate
        //                                     ).toDateString()}
        //                                 </p>
        //                             </div>
        //                             <div className="flex items-center justify-between">
        //                                 <div className="flex items-center gap-x-2">
        //                                     <Image
        //                                         height={20}
        //                                         width={20}
        //                                         alt="calender-icon"
        //                                         src="/images/CourseDetail/Calendar.svg"
        //                                         priority
        //                                     />
        //                                     <p className="text-textLightBlackColor">
        //                                         End date
        //                                     </p>
        //                                 </div>
        //                                 <p className="text-darkGrayColor">
        //                                     {new Date(
        //                                         scholarship.endDate
        //                                     ).toDateString()}
        //                                 </p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <Image
        //                     height={273}
        //                     width={274}
        //                     alt="courseDetail-round"
        //                     className="absolute right-[-40px] md:right-5 lg:right-0 xl:right-5 top-[-20px] md:top-auto md:bottom-8 lg:top-5 h-28 w-28 md:h-32 md:w-32 lg:h-60 lg:w-60"
        //                     src="/images/CourseDetail/Ciecle 4.svg"
        //                     priority
        //                 />
        //             </div>
        //             <div className="w-full bg-white h-auto lg:h-[140vh] xl:h-[120vh] pb-20 lg:pb-0 mb-10 lg:mb-0">
        //                 <div className="max-w-[1110px] 2xl:max-w-[2300px] mx-auto px-5 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300 pt-16 pr-auto lg:pr-[350px] 2xl:pr-[700px]">
        //                     <div className="flex flex-col gap-y-6 mb-20">
        //                         <div className="tabs-container capitalize">
        //                             <Tabs
        //                                 data={[
        //                                     {
        //                                         title: 'Eligibility Criteria',
        //                                         element: (
        //                                             <div>
        //                                                 <h3 className="text-black text-lg font-semibold">
        //                                                     Eligibility Criteria
        //                                                 </h3>
        //                                                 <div className="content">
        //                                                     test
        //                                                 </div>
        //                                             </div>
        //                                         )
        //                                     },
        //                                     {
        //                                         title: 'Application Status',
        //                                         element: (
        //                                             <div>
        //                                                 <h3 className="text-black text-lg font-semibold">
        //                                                     Application Status
        //                                                 </h3>
        //                                                 <p>test</p>
        //                                             </div>
        //                                         )
        //                                     },
        //                                     {
        //                                         title: 'Amount',
        //                                         element: (
        //                                             <div>
        //                                                 <h3 className="text-black text-lg font-semibold">
        //                                                     Amount
        //                                                 </h3>
        //                                                 <p>test</p>
        //                                             </div>
        //                                         )
        //                                     }
        //                                 ]}
        //                             />
        //                         </div>
        //                     </div>
        //                     <div className="flex flex-col gap-y-6 mb-20">
        //                         <h1 className="font-semibold text-lg md:text-xl text-textLightBlackColor">
        //                             Description
        //                         </h1>
        //                         <div
        //                             className="text-sm md:text-base"
        //                             dangerouslySetInnerHTML={{
        //                                 __html: scholarship?.description ?? ''
        //                             }}
        //                         />
        //                     </div>
        //                     <div className="py-6 border-t-2 border-borderColor flex items-center justify-between w-full mb-20">
        //                         <h1 className="text-lg md:text-xl font-semibold text-textLightBlackColor">
        //                             Get more details
        //                         </h1>
        //                         <Link
        //                             href={scholarship.institute.instituteURL}
        //                             target="_blank"
        //                             className="text-blueColor text-sm md:text-base"
        //                         >
        //                             Visit university website
        //                         </Link>
        //                     </div>
        //                     <div className="p-5 md:p-7 mb-5 w-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[10px] block lg:hidden">
        //                         <h1 className="text-mainTextColor text-xl font-bold mb-6">
        //                             Key information
        //                         </h1>
        //                         <div className="flex flex-col gap-y-5 mb-16">
        //                             <div className="flex items-center justify-between">
        //                                 <div className="flex items-center gap-x-2">
        //                                     <Image
        //                                         height={20}
        //                                         width={20}
        //                                         alt="duration-icon"
        //                                         src="/images/CourseDetail/Clock Circle.svg"
        //                                         priority
        //                                     />
        //                                     <p className="text-textLightBlackColor">
        //                                         Duration
        //                                     </p>
        //                                 </div>
        //                                 <p className="text-darkGrayColor">
        //                                     02 Years
        //                                 </p>
        //                             </div>
        //                             <div className="flex items-center justify-between">
        //                                 <div className="flex items-center gap-x-2">
        //                                     <Image
        //                                         height={20}
        //                                         width={20}
        //                                         alt="cup-icon"
        //                                         src="/images/CourseDetail/Cup.svg"
        //                                         priority
        //                                     />
        //                                     <p className="text-textLightBlackColor">
        //                                         Level
        //                                     </p>
        //                                 </div>
        //                                 <p className="text-darkGrayColor">
        //                                     Advanced Diploma
        //                                 </p>
        //                             </div>
        //                             <div className="flex items-center justify-between">
        //                                 <div className="flex items-center gap-x-2">
        //                                     <Image
        //                                         height={20}
        //                                         width={20}
        //                                         alt="subject-icon"
        //                                         src="/images/CourseDetail/subject.svg"
        //                                         priority
        //                                     />
        //                                     <p className="text-textLightBlackColor">
        //                                         Discipline
        //                                     </p>
        //                                 </div>
        //                                 <p className="text-darkGrayColor">
        //                                     Architecture
        //                                 </p>
        //                             </div>
        //                             <div className="flex items-center justify-between">
        //                                 <div className="flex items-center gap-x-2">
        //                                     <Image
        //                                         height={20}
        //                                         width={20}
        //                                         alt="language-icon"
        //                                         src="/images/CourseDetail/Language.svg"
        //                                         priority
        //                                     />
        //                                     <p className="text-textLightBlackColor">
        //                                         Language
        //                                     </p>
        //                                 </div>
        //                                 <p className="text-darkGrayColor">
        //                                     English
        //                                 </p>
        //                             </div>
        //                             <div className="flex items-center justify-between">
        //                                 <div className="flex items-center gap-x-2">
        //                                     <Image
        //                                         height={20}
        //                                         width={20}
        //                                         alt="target-icon"
        //                                         src="/images/CourseDetail/target-05.svg"
        //                                         priority
        //                                     />
        //                                     <p className="text-textLightBlackColor">
        //                                         Format
        //                                     </p>
        //                                 </div>
        //                                 <p className="text-darkGrayColor">
        //                                     Full time
        //                                 </p>
        //                             </div>
        //                             <div className="flex items-center justify-between">
        //                                 <div className="flex items-center gap-x-2">
        //                                     <Image
        //                                         height={20}
        //                                         width={20}
        //                                         alt="map-icon"
        //                                         src="/images/CourseDetail/Map Point.svg"
        //                                         priority
        //                                     />
        //                                     <p className="text-textLightBlackColor">
        //                                         Delivery
        //                                     </p>
        //                                 </div>
        //                                 <p className="text-darkGrayColor">
        //                                     On Campus
        //                                 </p>
        //                             </div>
        //                             <div className="flex items-center justify-between">
        //                                 <div className="flex items-center gap-x-2">
        //                                     <Image
        //                                         height={20}
        //                                         width={20}
        //                                         alt="plain-icon"
        //                                         src="/images/CourseDetail/Plain.svg"
        //                                         priority
        //                                     />
        //                                     <p className="text-textLightBlackColor">
        //                                         Apply date
        //                                     </p>
        //                                 </div>
        //                                 <p className="text-darkGrayColor">
        //                                     24 Oct, 2023
        //                                 </p>
        //                             </div>
        //                             <div className="flex items-center justify-between">
        //                                 <div className="flex items-center gap-x-2">
        //                                     <Image
        //                                         height={20}
        //                                         width={20}
        //                                         alt="calender-icon"
        //                                         src="/images/CourseDetail/Calendar.svg"
        //                                         priority
        //                                     />
        //                                     <p className="text-textLightBlackColor">
        //                                         Start date
        //                                     </p>
        //                                 </div>
        //                                 <p className="text-darkGrayColor">
        //                                     Jan 2024
        //                                 </p>
        //                             </div>
        //                         </div>
        //                         <Link href="/apply">
        //                             <button className="w-full pt-[19px] pb-[18px] rounded-[5px] text-white text-lg font-semibold bg-blueColor hover:bg-blue-600 mb-4">
        //                                 Apply
        //                             </button>
        //                         </Link>
        //                         <Link href="/compare">
        //                             <button className="w-full pt-[19px] pb-[18px] rounded-[5px] hover:text-white text-lg font-semibold bg-white hover:bg-blueColor border border-blueColor text-blueColor mb-2">
        //                                 Compare
        //                             </button>
        //                         </Link>
        //                     </div>
        //                 </div>
        //             </div>
        //         </>
        //     )}
        // </>
    );
};

export const getServerSideProps: GetServerSideProps<{
    data: { data: scholarshipType; status: number };
}> = async (context) => {
    let data = null;
    try {
        const id = `${API_ENDPOINTS.SCHOLARSHIP_BY_ID.replace(
            ':id',
            context.query?.id as string
        )}`;
        data = await getSsrRequest(id, context);
        return { props: { data } };
    } catch (error) {
        return {
            redirect: {
                permanent: false,
                destination: ROUTES.FILTER_SCHOLARSHIP
            }
        };
    }
};

export default CourseDetail;
