import Button from '@/components/Button';
import FavoriteButton from '@/components/Button/FavoriteButton';
import ScreenLoader from '@/components/Loader/ScreenLoader';
import Tabs from '@/components/Tabs';
import CourseTag from '@/components/course/CourseTag';
import RequirementBox from '@/components/course/RequirementBox';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { ROUTES } from '@/config/constant';
import { scholarshipType } from '@/types';
import { getSsrRequest } from '@/utils/ssrRequest';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiSolidCalendar } from 'react-icons/bi';
import { FaCalendar } from 'react-icons/fa6';
import { GiOpenBook, GiTrophy } from 'react-icons/gi';
import { GoClockFill } from 'react-icons/go';
import { IoIosBook } from 'react-icons/io';
import { IoDocumentText, IoShareSocialSharp } from 'react-icons/io5';

const CourseDetail = ({ data: scholarship }: { data: scholarshipType }) => {
    const [isFavorite, setFavorite] = useState(!!scholarship?.favoriteId?.[0]);
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
                            className="top-1/3 absolute -left-5 h-16 w-16 lg:h-24 lg:w-24 hidden md:block z-10"
                            src="/images/CourseDetail/Circle 3.svg"
                            priority
                        />
                        <div className="w-full py-10 xl:py-20 flex justify-center xl:container px-4 md:px-[50px] lg:px-2 2xl:px-8">
                            <Image
                                height={375}
                                width={1240}
                                alt="courseDetail"
                                src="/images/CourseDetail/courseDetailMain.png"
                                className="z-20 w-full"
                                priority
                            />
                        </div>
                        <Image
                            height={273}
                            width={274}
                            alt="courseDetail-round"
                            className="absolute right-[-40px] md:right-0 lg:-right-20 top-[-20px] md:top-auto md:translate-y-8 lg:translate-y-0 md:bottom-8 lg:-top-16 h-28 w-28 md:h-32 md:w-32 lg:h-80 lg:w-80"
                            src="/images/CourseDetail/Ciecle 4.svg"
                            priority
                        />
                    </div>
                    <div className="flex items-center w-full xl:container px-4 md:px-[50px] lg:px-2 2xl:px-8 mx-auto transition-all duration-300 flex-col gap-6 mb-40 lg:mb-80 xl:mb-40">
                        <div className="w-full flex flex-wrap gap-2 gap-y-8 justify-between">
                            <h1 className="text-mainTextColor text-2xl md:text-3xl font-bold">
                                {scholarship?.name}
                            </h1>
                            <div className="flex pr-0">
                                <div className="flex flex-wrap items-center gap-2 md:gap-5">
                                    <button className="rounded-[20px] pt-[9px] pb-2 px-4 border-2 border-white hover:border-purpleColor text-white hover:text-purpleColor bg-purpleColor hover:bg-white">
                                        {scholarship?.type}
                                    </button>
                                    <button className="rounded-[20px] pt-[9px] pb-2 px-4 border-2 border-white hover:border-blueColor text-white hover:text-blueColor bg-blueColor hover:bg-white">
                                        {scholarship?.institute.sector}
                                    </button>
                                    <FavoriteButton
                                        isActive={isFavorite}
                                        body={{
                                            scholarship: scholarship.id
                                        }}
                                        refetch={() =>
                                            setFavorite((prev) => !prev)
                                        }
                                        className="h-[46px] w-[46px] rounded-full flex items-center justify-center border-2 border-white bg-heartBgColor hover:bg-white group"
                                        iconClass={`text-3xl text-white group-hover:text-red-600`}
                                    />
                                    <div className="h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                                        <IoShareSocialSharp className="text-gray-400 h-6 w-6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-0 xl:gap-16 w-full justify-between">
                            <div className="w-full lg:w-[70%] xl:w-2/3 h-auto lg:h-headerStickyHeight static lg:sticky top-[110px] no-scrollbar">
                                <div className=" transition-all duration-300">
                                    <div className="flex flex-col gap-y-6 mb-20">
                                        <div className="tabs-container capitalize">
                                            <Tabs
                                                data={[
                                                    {
                                                        title: 'Overview',
                                                        element: (
                                                            <div className="description w-full flex flex-col gap-4">
                                                                <h3 className="text-black text-2xl font-bold">
                                                                    Description
                                                                </h3>
                                                                <div
                                                                    className="text-base"
                                                                    dangerouslySetInnerHTML={{
                                                                        __html:
                                                                            scholarship?.description ??
                                                                            ''
                                                                    }}
                                                                />
                                                            </div>
                                                        )
                                                    },
                                                    {
                                                        title: 'Eligibility Criteria',
                                                        element: (
                                                            <div className="description w-full flex flex-col gap-4">
                                                                <h3 className="text-black text-2xl font-bold">
                                                                    Eligibility
                                                                    Criteria
                                                                </h3>
                                                                <p className="text-base">
                                                                    test
                                                                </p>
                                                            </div>
                                                        )
                                                    },
                                                    {
                                                        title: 'Application Status',
                                                        element: (
                                                            <div className="description w-full flex flex-col gap-4">
                                                                <h3 className="text-black text-2xl font-bold">
                                                                    Application
                                                                    Status
                                                                </h3>
                                                                <p className="text-base">
                                                                    test
                                                                </p>
                                                            </div>
                                                        )
                                                    },
                                                    {
                                                        title: 'Amount',
                                                        element: (
                                                            <div className="description w-full flex flex-col gap-4">
                                                                <h3 className="text-black text-2xl font-bold">
                                                                    Amount
                                                                </h3>
                                                                <p className="text-base">
                                                                    test
                                                                </p>
                                                            </div>
                                                        )
                                                    }
                                                ]}
                                            />
                                        </div>
                                    </div>
                                    <div className="py-6 border-t-2 border-borderColor flex items-center justify-between w-full mb-20">
                                        <h1 className="text-lg md:text-xl font-semibold text-textLightBlackColor">
                                            Get more details
                                        </h1>
                                        <Link
                                            href={
                                                scholarship.institute
                                                    .instituteURL
                                            }
                                            target="_blank"
                                            className="text-blueColor text-sm md:text-base"
                                        >
                                            Visit university website
                                        </Link>
                                    </div>
                                    <div className="flex flex-col gap-5 w-full">
                                        <div className="flex items-center gap-2">
                                            <IoDocumentText className="h-8 w-8" />
                                            <h1 className="font-bold text-2xl text-mainTextColor">
                                                Requirements
                                            </h1>
                                        </div>
                                        <p className="text-xl font-medium text-lightGrayColor">
                                            Listed below are the documents
                                            required to apply for this course.
                                        </p>
                                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
                                            <RequirementBox text="Passport" />
                                            <RequirementBox text="Undergraduate Graduation Certificate" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-11 w-full lg:w-[28%] xl:w-[30%]">
                                <div className="bg-white rounded-[10px] px-4 py-6 w-full z-10 shadow-RequirementBox mt-4 hidden lg:block">
                                    <div className="relative flex justify-center items-end w-full h-[228px] pb-3">
                                        <Image
                                            height={228}
                                            width={353.5}
                                            alt="mainimg"
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
                                    <div className="pt-5 px-3">
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
                                                className="py-5"
                                                text="Apply"
                                                link={ROUTES.APPLY}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-[10px] w-full z-10 shadow-RequirementBox mt-4 py-3">
                                    <div className="flex flex-col capitalize">
                                        <div className="flex items-center gap-4 pl-5 border-b-2 border-gray-200 border-opacity-50 py-4">
                                            <GiTrophy className="h-9 w-9 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-xl text-mainTextColor">
                                                    Level
                                                </p>
                                                <p className="text-lightGrayColor text-xl">
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
                                            <GoClockFill className="h-9 w-9 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-xl text-mainTextColor">
                                                    applicable
                                                </p>
                                                <p className="text-lightGrayColor text-xl">
                                                    {scholarship.applicable}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 pl-5 border-b-2 border-gray-200 border-opacity-50 py-4">
                                            <IoIosBook className="h-9 w-9 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-xl text-mainTextColor">
                                                    Type
                                                </p>
                                                <p className="text-lightGrayColor text-xl">
                                                    {scholarship.type}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 pl-5 border-b-2 border-gray-200 border-opacity-50 py-4">
                                            <FaCalendar className="h-9 w-9 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-xl text-mainTextColor">
                                                    Start date
                                                </p>
                                                <p className="text-lightGrayColor text-xl">
                                                    {new Date(
                                                        scholarship.startDate
                                                    ).toDateString()}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 pl-5 border-opacity-50 py-4">
                                            <FaCalendar className="h-9 w-9 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-xl text-mainTextColor">
                                                    End date
                                                </p>
                                                <p className="text-lightGrayColor text-xl">
                                                    {new Date(
                                                        scholarship.endDate
                                                    ).toDateString()}
                                                </p>
                                            </div>
                                        </div>
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
