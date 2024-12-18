import React, { useMemo } from 'react';
import Button from '@/components/Button';
import FavoriteButton from '@/components/Button/FavoriteButton';
import ScreenLoader from '@/components/Loader/ScreenLoader';
import Tabs from '@/components/Tabs';
import RequirementBox from '@/components/course/RequirementBox';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { ROUTES } from '@/config/constant';
import { useUi } from '@/hooks/user-interface';
import { modalType } from '@/store/slices/ui.slice';
import { singleCourseType } from '@/types';
import { getSsrRequest } from '@/utils/ssrRequest';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { IoBookSharp, IoShareSocialSharp } from 'react-icons/io5';
import { IoDocumentText } from 'react-icons/io5';
import { GiOpenBook, GiTrophy } from 'react-icons/gi';
import { GoClockFill } from 'react-icons/go';
import { FaCalendarAlt, FaMoneyBillWave } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { FaCalendar } from 'react-icons/fa';
import { getMonths } from '@/utils/get-months';
import { useCurrency } from '@/hooks/currency';
import { useCalculate } from '@/hooks/initial-deposit-calculate';
import LanguageRequirements from '@/components/course/LanguageRequirements';
import { generateIntakes } from '@/utils/generateIntakes';
import Card from '@/components/Scholarship/Card';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import EntryRequirements from '@/components/course/EntryRequirements';
import { useGetCourseByIdQuery } from '@/store/slices/allRequests';
import { useRouter } from 'next/router';
import { skipToken } from '@reduxjs/toolkit/query';
import { SlCalculator } from 'react-icons/sl';
import StatsCards from '@/components/course/StatsCards';
const InnerHtml = dynamic(() => import('@/components/InnerHtml'), {
    ssr: false
});

// const CourseDetail = ({ data: course }: { data: singleCourseType }) => {
const CourseDetail = () => {
    const { updateModal } = useUi();
    const { query, isReady } = useRouter();
    const { data: course, isLoading } = useGetCourseByIdQuery(
        isReady ? (query.course_id as string) : skipToken
    );
    const { setCurrencyValue, getSingleRate, base_code } = useCurrency();
    const { initialDeposit } = useCalculate();

    const isSameCurrency = base_code === course?.feeCurrency;
    const rate = isSameCurrency ? null : getSingleRate(course?.feeCurrency);
    const isUkCourse =
        course?.institute?.country?.name
            ?.toLowerCase()
            ?.includes('united kingdom') ||
        course?.institute?.country?.name?.toLowerCase()?.includes('uk');
    const isMasterDegree = course?.degree?.name
        ?.toLowerCase()
        ?.includes('master');
    const scholarshipAmount = useMemo(() => {
        let amount = '0';
        const scholarship = course?.scholarship?.filter(
            (s) => s.type === 'guaranteed'
        )?.[0];
        scholarship?.isAmount
            ? (amount = String(scholarship?.amount ?? 0))
            : (amount = String(
                  scholarship?.amount
                      ? +scholarship?.amount * Number(course?.tuitionFee)
                      : 0
              ));
        return amount;
    }, [course]);

    return (
        <>
            {!course || isLoading ? (
                <ScreenLoader />
            ) : (
                <>
                    <div className="w-full flex justify-center overflow-hidden relative">
                        <img
                            height={60}
                            width={60}
                            alt="course-round"
                            className="top-1/3 absolute -left-3 md:-left-5 h-8 w-8 md:h-16 md:w-16 lg:h-24 lg:w-24 z-10"
                            src="/images/CourseDetail/Circle 3.svg"
                        />

                        <div className="w-full pb-10 pt-3 flex justify-center xl:container px-4 md:px-[50px] lg:px-2 2xl:px-8">
                            <img
                                height={400}
                                width={1200}
                                alt="courseDetail"
                                src={
                                    course?.image ??
                                    '/images/CourseDetail/courseDetailMain.png'
                                }
                                className="z-20 h-full w-full lg:block hidden max-h-[375px] object-cover rounded-lg  "
                            />
                            <img
                                height={375}
                                width={1240}
                                alt="courseDetail"
                                src={
                                    course?.image ??
                                    '/images/CourseDetail/courseDetailMain.png'
                                }
                                className="z-20 h-full w-full lg:hidden block"
                            />
                        </div>
                        <img
                            height={273}
                            width={274}
                            alt="courseDetail-round"
                            className="absolute right-[-40px] lg:-right-20 -top-7 md:-top-16 md:-right-8 md:translate-y-8 lg:translate-y-0 md:bottom-8 lg:-top-16 h-20 w-20 md:h-32 md:w-32 lg:h-80 lg:w-80"
                            src="/images/CourseDetail/Ciecle 4.svg"
                        />
                    </div>
                    <div className="xl:container mx-auto relative bottom-20 z-[35]">
                        <div className="h-auto w-[70%] md:w-[85%] mx-auto grid max-[475px]:grid-cols-1 grid-cols-2 xl:grid-cols-4 md:gap-5 justify-around rounded-xl bg-white shadow-md">
                            <div className="flex items-center gap-4 border-b-2 lg:border-none border-gray-200 border-opacity-50 w-full md:w-auto px-4 py-2 sm:p-4 justify-start lg:justify-center">
                                <div className="md:min-w-52 h-auto flex items-center gap-4">
                                    <GoClockFill className="h-6 w-6 sm:h-12 sm:w-12 text-blueColor" />
                                    <div className="flex flex-col md:gap-[6px] text-left">
                                        <p className="font-bold text-xs sm:text-sm md:text-lg text-mainTextColor">
                                            {isUkCourse && isMasterDegree
                                                ? 'Intake | Duration'
                                                : 'Duration'}
                                        </p>
                                        <ul className="text-[10px] sm:text-sm flex  lg:text-base text-lightGrayColor">
                                            {isUkCourse && isMasterDegree ? (
                                                <>
                                                    {generateIntakes(
                                                        [course.intakes[0]],
                                                        1
                                                    )}{' '}
                                                    |{' '}
                                                    {getMonths([
                                                        course.monthDuration[0]
                                                    ])}
                                                </>
                                            ) : (
                                                course.monthDuration.map(
                                                    (month, index) => (
                                                        <li key={month}>
                                                            {month}
                                                            {course
                                                                .monthDuration
                                                                .length -
                                                                1 !==
                                                                index && '/'}
                                                        </li>
                                                    )
                                                )
                                            )}
                                            <p className="ml-1">Months</p>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 border-b-2 lg:border-none border-gray-200 border-opacity-50 justify-start lg:justify-center w-full md:w-auto px-4 py-2 sm:p-4">
                                <div className="md:min-w-52 h-auto flex items-center gap-4">
                                    <FaMoneyBillWave className="h-6 w-6 sm:h-12 sm:w-12 text-blueColor" />
                                    <div className="flex flex-col gap-1 text-left">
                                        <p className="font-bold text-xs sm:text-sm md:text-lg text-mainTextColor">
                                            Tuition Fee
                                        </p>
                                        <p className="text-[10px] sm:text-sm  lg:text-base text-lightGrayColor">
                                            {setCurrencyValue(
                                                isSameCurrency && !rate
                                                    ? course.tuitionFee
                                                    : course.tuitionFee *
                                                          (rate?.base_rate
                                                              ? +rate?.base_rate
                                                              : 1),
                                                rate
                                                    ? base_code
                                                    : course.feeCurrency
                                            )}
                                            /year
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 border-b-2 lg:border-none border-gray-200 border-opacity-50 px-4 py-2 sm:p-4 w-full md:w-auto justify-start lg:justify-center">
                                <div className="md:min-w-52 h-auto flex items-center gap-4">
                                    <GiTrophy className="h-6 w-6 sm:h-12 sm:w-12 text-blueColor" />
                                    <div className="flex flex-col md:gap-[6px] text-left">
                                        <p className="font-bold text-xs sm:text-sm md:text-lg text-mainTextColor">
                                            Level
                                        </p>
                                        <p className="text-[10px] sm:text-sm  lg:text-base text-lightGrayColor">
                                            {course?.degree?.type}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 border-b-2 lg:border-none border-gray-200 border-opacity-50 px-4 py-2 sm:p-4 w-full md:w-auto justify-start lg:justify-center">
                                <div className="md:min-w-52 h-auto flex items-center gap-4">
                                    <GiOpenBook className="h-6 w-6 sm:h-12 sm:w-12 text-blueColor" />
                                    <div className="flex flex-col md:gap-[6px] text-left">
                                        <p className="font-bold text-xs sm:text-sm md:text-lg text-mainTextColor">
                                            Discipline
                                        </p>
                                        <p className="text-[10px] sm:text-sm  lg:text-base text-lightGrayColor">
                                            {course?.discipline?.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full xl:container px-4 md:px-[50px] lg:px-2 2xl:px-8 mx-auto transition-all duration-300 flex-col gap-6 mb-5 -my-10">
                        <div className="w-full flex flex-wrap gap-2 gap-y-4 md:gap-y-8 justify-between">
                            <h1 className="text-mainTextColor text-xl md:text-3xl font-bold">
                                {course?.name}
                            </h1>
                            <div className="flex pr-0">
                                <div className="flex flex-wrap items-center gap-1 md:gap-2 lg:gap-3">
                                    <button className="rounded-full py-1 px-3 md:px-4 text-xs md:text-lg pointer-events-none border-4 shadow   text-white bg-blueColor  flex gap-2 items-center transition-all border-white">
                                        <span>{course.name.split(' ')[0]}</span>
                                    </button>
                                    <button
                                        className="rounded-full py-1 px-3 md:px-4 text-xs md:text-lg hover:border-blueColor border-4 shadow   text-white border-[#fbfcff] hover:text-blueColor bg-blueColor hover:bg-white flex gap-2 items-center transition-all"
                                        onClick={() =>
                                            updateModal({
                                                type: modalType.bank_statement_calculator,
                                                state: course
                                            })
                                        }
                                    >
                                        <SlCalculator />{' '}
                                        <span>Bank Statement Calculator</span>
                                    </button>
                                    <FavoriteButton
                                        isActive={!!course?.favoriteId?.[0]}
                                        body={{ course: course.id }}
                                        position="static"
                                    />
                                    <div
                                        onClick={() =>
                                            updateModal({
                                                type: modalType.share_modal,
                                                state: {
                                                    name: 'course',
                                                    id: course.id
                                                }
                                            })
                                        }
                                        className="h-8 w-8 rounded-full bg-white shadow-lg lg:flex items-center justify-center hidden cursor-pointer group hover:bg-blue-500"
                                    >
                                        <IoShareSocialSharp className="text-gray-400 group-hover:text-white h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-0 xl:gap-16 w-full justify-between">
                            <div className="flex flex-col w-full lg:w-[70%] xl:w-2/3">
                                <div className="w-full lg:sticky top-[110px] no-scrollbar">
                                    <div className="transition-all duration-300">
                                        <div className="flex flex-col gap-y-6">
                                            <div className="tabs-container">
                                                <Tabs
                                                    data={[
                                                        {
                                                            title: 'Overview',
                                                            element: (
                                                                <div className="description w-full flex flex-col gap-3 md:gap-4 items-start">
                                                                    <h1 className="text-black text-lg md:text-2xl font-bold">
                                                                        Description
                                                                    </h1>
                                                                    <div className="text-sm md:text-base text-left">
                                                                        <InnerHtml
                                                                            html={
                                                                                course?.description ??
                                                                                ''
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            )
                                                        },
                                                        {
                                                            title: 'Entry Requirements',
                                                            element: (
                                                                <div className="flex flex-col gap-8 max-h-[70vh] overflow-auto customScroll px-2">
                                                                    <div className="flex flex-col gap-4 items-start">
                                                                        <h3 className="text-black text-lg md:text-2xl font-bold">
                                                                            Entry
                                                                            Requirements
                                                                        </h3>
                                                                        <div className="content text-sm md:text-base">
                                                                            <EntryRequirements
                                                                                entryRequirements={
                                                                                    course.entryRequirements
                                                                                }
                                                                                isUnderGraduate={
                                                                                    course
                                                                                        .degree
                                                                                        .type ===
                                                                                    'undergraduate'
                                                                                }
                                                                            />
                                                                        </div>
                                                                        {course?.textEligibility && (
                                                                            <div className="text-sm md:text-base">
                                                                                <InnerHtml
                                                                                    html={
                                                                                        course.textEligibility
                                                                                    }
                                                                                />
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            )
                                                        },
                                                        {
                                                            title: 'Language Requirements',
                                                            element: (
                                                                <div className="flex flex-col gap-8 max-h-[70vh] overflow-auto customScroll px-2">
                                                                    <div className="flex flex-col gap-4  items-start">
                                                                        <h3 className="text-black text-lg md:text-2xl font-bold">
                                                                            Language
                                                                            Requirements
                                                                        </h3>
                                                                        {course
                                                                            ?.language?.[0]
                                                                            ?.language &&
                                                                        Object?.keys(
                                                                            course
                                                                                .language[0]
                                                                                .language
                                                                        )
                                                                            .length ? (
                                                                            <div className="flex gap-4 w-full">
                                                                                <LanguageRequirements
                                                                                    language={
                                                                                        course
                                                                                            .language[0]
                                                                                            .language
                                                                                    }
                                                                                />
                                                                            </div>
                                                                        ) : (
                                                                            <div className="text-sm md:text-base">
                                                                                No
                                                                                Language
                                                                                Requirements
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            )
                                                        },
                                                        {
                                                            title: 'Tuitions Fee',
                                                            element: (
                                                                <div className="flex flex-col gap-4 items-start max-h-[70vh] overflow-auto customScroll px-2">
                                                                    <div className="border py-2 px-4 flex gap-4 rounded-md items-center">
                                                                        <span>
                                                                            <Image
                                                                                src="/images/price-icon.png"
                                                                                alt="uk"
                                                                                height={
                                                                                    40
                                                                                }
                                                                                width={
                                                                                    40
                                                                                }
                                                                            />
                                                                        </span>
                                                                        <span className="flex flex-col">
                                                                            <span className="text-xl font-bold">
                                                                                {setCurrencyValue(
                                                                                    isSameCurrency &&
                                                                                        !rate
                                                                                        ? course.tuitionFee
                                                                                        : course.tuitionFee *
                                                                                              (rate?.base_rate
                                                                                                  ? +rate?.base_rate
                                                                                                  : 1),
                                                                                    rate
                                                                                        ? base_code
                                                                                        : course.feeCurrency
                                                                                )}{' '}
                                                                                <span className="text-sm font-normal">
                                                                                    /Year
                                                                                </span>
                                                                            </span>
                                                                            <span className="text-sm">
                                                                                Tuition
                                                                                Fee
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                    {course?.textAmount && (
                                                                        <div className="text-sm md:text-base">
                                                                            <InnerHtml
                                                                                html={
                                                                                    course.textAmount
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            )
                                                        },
                                                        {
                                                            title: 'Scholarship',
                                                            element: (
                                                                <div className="flex flex-col gap-4 items-start max-h-[70vh] overflow-auto customScroll px-2">
                                                                    <h3 className="text-black text-lg md:text-2xl font-bold">
                                                                        Course
                                                                        Scholarship
                                                                    </h3>
                                                                    <ul className="w-full grid grid-cols-4 gap-3 flex-wrap items-start">
                                                                        {course
                                                                            .scholarship
                                                                            .length >
                                                                        0 ? (
                                                                            course.scholarship.map(
                                                                                (
                                                                                    scholarship,
                                                                                    i
                                                                                ) => (
                                                                                    <Card
                                                                                        key={
                                                                                            'course-scholarship card--' +
                                                                                            i
                                                                                        }
                                                                                        {...{
                                                                                            name: scholarship.name,
                                                                                            type: scholarship.type,
                                                                                            degree: course.degree,
                                                                                            institute:
                                                                                                course?.institute,
                                                                                            country:
                                                                                                course
                                                                                                    .institute
                                                                                                    .country,
                                                                                            amount: scholarship.amount,
                                                                                            id: scholarship.id,
                                                                                            image: scholarship.image,
                                                                                            isActive:
                                                                                                null,
                                                                                            headingClass:
                                                                                                'text-sm'
                                                                                        }}
                                                                                    />
                                                                                )
                                                                            )
                                                                        ) : (
                                                                            <li className="text-sm md:text-base">
                                                                                No
                                                                                scholarships
                                                                                available
                                                                            </li>
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            )
                                                        },
                                                        {
                                                            title: 'Initial Deposit',
                                                            element: (
                                                                <div className="flex flex-col gap-4 items-start">
                                                                    <div className="border py-2 px-4 flex gap-4 rounded-md items-center">
                                                                        <span>
                                                                            <Image
                                                                                src="/images/price-icon.png"
                                                                                alt="uk"
                                                                                height={
                                                                                    40
                                                                                }
                                                                                width={
                                                                                    40
                                                                                }
                                                                            />
                                                                        </span>
                                                                        <span className="flex flex-col">
                                                                            <span className="text-xl font-bold">
                                                                                {initialDeposit(
                                                                                    {
                                                                                        initialDeposit:
                                                                                            course
                                                                                                .initialDeposit?.[0]
                                                                                                .amount,
                                                                                        tuitionFee:
                                                                                            rate
                                                                                                ? +rate.base_rate *
                                                                                                  +course.tuitionFee
                                                                                                : course.tuitionFee,
                                                                                        scholarship:
                                                                                            scholarshipAmount ??
                                                                                            '0',
                                                                                        currency_code:
                                                                                            course.feeCurrency
                                                                                    }
                                                                                )}{' '}
                                                                                <span className="text-sm font-normal">
                                                                                    /One
                                                                                    Time
                                                                                </span>
                                                                            </span>
                                                                            <span className="text-sm">
                                                                                Initial
                                                                                Deposit
                                                                            </span>
                                                                        </span>
                                                                    </div>

                                                                    {course?.textInitialDeposit && (
                                                                        <div className="text-sm md:text-base">
                                                                            <InnerHtml
                                                                                html={
                                                                                    course.textInitialDeposit
                                                                                }
                                                                            />
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            )
                                                        }
                                                    ]}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-6 border-t-2 border-borderColor flex items-center justify-between w-full mb-14 ">
                                        <h1 className="text-base md:text-xl font-semibold text-textLightBlackColor">
                                            Get more details
                                        </h1>
                                        {course?.institute?.instituteURL && (
                                            <Link
                                                href={
                                                    course.institute
                                                        .instituteURL
                                                }
                                                target="_blank"
                                                className="text-blueColor text-xs md:text-base"
                                            >
                                                Visit university website
                                            </Link>
                                        )}
                                    </div>
                                    {course.documentsRequirement && (
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
                                            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7 justify-start">
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
                                                            isDownload={true}
                                                        />
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col gap-11 w-full lg:w-[28%] xl:w-[30%]">
                                <div className="bg-white rounded-[10px] px-4 py-6 w-full z-10 shadow-RequirementBox mt-4 hidden lg:block">
                                    <div className="relative flex justify-center items-end w-full h-[228px] pb-3">
                                        <img
                                            height={228}
                                            width={353.5}
                                            alt="minim"
                                            className="absolute top-0 left-0 w-full h-[228px] object-cover"
                                            src={
                                                course.institute?.image ??
                                                '/images/CourseDetail/Rectangle 1697.svg'
                                            }
                                        />
                                        <h1 className="absolute w-full bottom-0 left-0 py-2 px-5 bg-gradient-to-t from-blueColor text-center font-bold text-2xl text-white z-10  ">
                                            {course?.institute?.name ??
                                                'No Institute Found'}
                                        </h1>
                                    </div>
                                    <div className="pt-5 px-1 xl:px-3">
                                        <h1 className="text-mainTextColor text-xl font-bold mb-2">
                                            About
                                        </h1>
                                        <div className="text-[13px] text-lightGrayColor mb-2">
                                            <InnerHtml
                                                html={
                                                    course?.institute?.description?.slice(
                                                        0,
                                                        200
                                                    ) ?? ''
                                                }
                                            />
                                        </div>
                                        <p className="text-xs text-lightGrayColor mb-8">
                                            Visit the{' '}
                                            {course?.institute?.instituteURL ? (
                                                <Link
                                                    href={
                                                        course?.institute
                                                            ?.instituteURL
                                                    }
                                                    target="_blank"
                                                    className="text-blueColor font-bold"
                                                >
                                                    university website{' '}
                                                </Link>
                                            ) : (
                                                ' university website'
                                            )}
                                            for more information
                                        </p>
                                        <div className="flex flex-col gap-3">
                                            <Button
                                                className="py-3 rounded-md text-sm font-semibold"
                                                text="Start Application"
                                                onClick={() =>
                                                    updateModal({
                                                        type: modalType.start_application,
                                                        state: { course }
                                                    })
                                                }
                                            />

                                            <Button
                                                className="py-3 rounded-md text-sm font-semibold"
                                                text="Compare"
                                                link={{
                                                    pathname: ROUTES.COMPARE,
                                                    query: {
                                                        course_id: course.id
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
                                            <IoLocation className="h-8 w-8 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-sm md:text-base text-mainTextColor">
                                                    Campus
                                                </p>
                                                <p className="text-lightGrayColor text-sm md:text-base">
                                                    {course.availableCampuses
                                                        .length
                                                        ? course.availableCampuses?.join(
                                                              ' / '
                                                          )
                                                        : 'No Campus / Online'}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 pl-5 border-opacity-50 py-4">
                                            <FaCalendar className="h-8 w-8 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-sm md:text-base text-mainTextColor">
                                                    Available Intakes
                                                </p>
                                                <ul className="text-lightGrayColor text-sm md:text-base flex">
                                                    {/* {generateIntakes(
                                                        course.intakes,
                                                        1
                                                    ).map((intake, index) => (
                                                        <li key={intake}>
                                                            {intake}
                                                            {course.intakes
                                                                .length -
                                                                1 !==
                                                                index && ','}
                                                        </li>
                                                    ))} */}
                                                    {(() => {
                                                        const currentMonth =
                                                            new Date().getMonth() +
                                                            1;
                                                        const currentYear =
                                                            new Date().getFullYear();
                                                        const lastIntakeMonth =
                                                            parseInt(
                                                                course.intakes[
                                                                    course
                                                                        .intakes
                                                                        .length -
                                                                        1
                                                                ]
                                                            );
                                                        const year =
                                                            lastIntakeMonth >=
                                                            currentMonth
                                                                ? currentYear
                                                                : currentYear +
                                                                  1;

                                                        return (
                                                            <>
                                                                {course.intakes.map(
                                                                    (
                                                                        intake,
                                                                        index
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                intake
                                                                            }
                                                                        >
                                                                            {
                                                                                intake
                                                                            }
                                                                            {index <
                                                                                course
                                                                                    .intakes
                                                                                    .length -
                                                                                    1 &&
                                                                                ', '}
                                                                        </li>
                                                                    )
                                                                )}{' '}
                                                                <p className="mx-1">
                                                                    {year}
                                                                </p>
                                                            </>
                                                        );
                                                    })()}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <StatsCards
                                    date="September 2024"
                                    label="Upcoming Intakes"
                                    icon={
                                        <FaCalendarAlt className="text-[#010f2e] text-2xl" />
                                    }
                                />
                                <StatsCards
                                    date="Full Time"
                                    label="Mode of Study"
                                    icon={
                                        <IoBookSharp className="text-[#010f2e] text-2xl" />
                                    }
                                />

                                <div className="flex flex-col md:flex-row items-center w-full gap-3 md:gap-5 lg:hidden">
                                    <div className="w-full">
                                        <Button
                                            className="py-4 rounded-md text-sm md:text-base font-semibold w-full"
                                            text="Start Application"
                                            onClick={() =>
                                                updateModal({
                                                    type: modalType.start_application,
                                                    state: { course }
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="w-full">
                                        <Button
                                            className="py-4 rounded-md text-base font-semibold w-full"
                                            text="Compare"
                                            link={{
                                                pathname: ROUTES.COMPARE,
                                                query: {
                                                    course_id: course.id
                                                }
                                            }}
                                            variant="outline"
                                        />
                                    </div>
                                </div>
                                {/* <CourseTag
                                    icon={
                                        <BiSolidCalendar className="h-7 w-7" />
                                    }
                                    text="Upcoming Intakes"
                                    tagName={course.intakes.join(' , ')}
                                />
                                <CourseTag
                                    icon={<GiOpenBook className="h-7 w-7" />}
                                    text="Mode of Study"
                                    tagName="Full Time"
                                /> */}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export const getServerSideProps: GetServerSideProps<{
    data: { data: singleCourseType; status: number };
}> = async (context) => {
    let data = null;
    try {
        const id = `${API_ENDPOINTS.COURSE_BY_ID.replace(
            ':id',
            (context.query?.course_id as string) ??
                (context.query?.id as string)
        )}`;
        data = await getSsrRequest(id, context);
        return { props: { data } };
    } catch (error) {
        return {
            redirect: {
                permanent: false,
                destination: ROUTES.FILTER_COURSE
            }
        };
    }
};

export default CourseDetail;
