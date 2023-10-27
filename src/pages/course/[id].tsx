import Button from '@/components/Button';
import FavoriteButton from '@/components/Button/FavoriteButton';
import CounselingWork from '@/components/CounselingWork/CounselingWork';
import ScreenLoader from '@/components/Loader/ScreenLoader';
import Testimonial from '@/components/Testimonial';
import { ROUTES } from '@/config/constant';
import { useGetCourseByIdQuery } from '@/store/slices/allRequests';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const CourseDetail = () => {
    const { query, isReady } = useRouter();
    const {
        data: course,
        isLoading,
        refetch
    } = useGetCourseByIdQuery(query.id as string);

    if (isLoading || !isReady) {
        return <ScreenLoader />;
    }
    return (
        <>
            {!course ? (
                <ScreenLoader />
            ) : (
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
                                    {course?.name}
                                </h1>
                                <div className="w-full flex justify-start lg:justify-end pr-0 lg:pr-[92px]">
                                    <div className="flex items-center gap-5">
                                        <button className="rounded-[20px] pt-[9px] pb-2 px-4 border-2 border-white hover:border-purpleColor text-white hover:text-purpleColor bg-purpleColor hover:bg-white">
                                            {course?.degree.name}
                                        </button>
                                        <button className="rounded-[20px] pt-[9px] pb-2 px-4 border-2 border-white hover:border-blueColor text-white hover:text-blueColor bg-blueColor hover:bg-white">
                                            {course?.institute.sector}
                                        </button>
                                        <FavoriteButton
                                            isActive={!!course?.favoriteId?.[0]}
                                            body={{ course: course.id }}
                                            refetch={refetch}
                                            className="h-[46px] w-[46px] rounded-full flex items-center justify-center border-2 border-white bg-heartBgColor hover:bg-white group"
                                            iconClass={`text-3xl text-white group-hover:text-red-600`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white absolute right-8 xl:right-24 top-20 rounded-[10px] p-3 w-[28%] xl:w-[25%] z-10 custom-shadow hidden lg:block">
                            <div className="relative flex justify-center items-end w-full h-[228px] pb-3">
                                <Image
                                    height={228}
                                    width={353.5}
                                    alt="mainimg"
                                    className="absolute top-0 left-0 w-full h-[228px] object-cover"
                                    src={
                                        course.institute?.image ??
                                        '/images/CourseDetail/Rectangle 1697.svg'
                                    }
                                    priority
                                />
                                <h1 className="text-center font-bold text-2xl text-white z-10">
                                    {course.institute.name}
                                </h1>
                            </div>
                            <div className="pt-5">
                                <h1 className="text-mainTextColor text-xl font-bold mb-2">
                                    About
                                </h1>
                                <p className="text-[13px] text-grayColor mb-2">
                                    {course.institute.description}
                                </p>
                                <p className="text-[11px] text-grayColor mb-8">
                                    Visit the{' '}
                                    <Link
                                        href={course.institute.instituteURL}
                                        target="_blank"
                                        className="text-blueColor font-bold"
                                    >
                                        Visit university website
                                    </Link>{' '}
                                    for more information
                                </p>
                                <div className="flex flex-col gap-3">
                                    <Button text="Apply" link={ROUTES.APPLY} />

                                    <Button
                                        text="Compare"
                                        link={ROUTES.COMPARE}
                                        variant="outline"
                                    />
                                </div>
                            </div>
                            <div className="px-3 pt-5 mb-5">
                                <h1 className="text-mainTextColor text-xl font-bold mb-6">
                                    Key information
                                </h1>
                                <div className="flex flex-col gap-y-5 capitalize ">
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
                                            {course.duration}
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
                                            {course.degree.name}
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
                                            {course.degree.type}
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
                                            {course.language.join()}
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
                                            {course.format}
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
                                            {course.delivery}
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
                                            {course.applyDate}
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
                                            {new Date(
                                                course.startDate
                                            ).toDateString()}
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
                                                End date
                                            </p>
                                        </div>
                                        <p className="text-darkGrayColor">
                                            {new Date(
                                                course.endDate
                                            ).toDateString()}
                                        </p>
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
                    <div className="w-full bg-white h-auto lg:h-[140vh] xl:h-[160vh] pb-20 lg:pb-0 mb-10 lg:mb-0">
                        <div className="max-w-[1110px] 2xl:max-w-[2300px] mx-auto px-5 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300 pt-16 pr-auto lg:pr-[350px] 2xl:pr-[700px]">
                            <div className="flex flex-col gap-y-6 mb-20">
                                <h1 className="font-semibold text-lg md:text-xl text-textLightBlackColor">
                                    Description
                                </h1>
                                <div
                                    className="text-sm md:text-base"
                                    dangerouslySetInnerHTML={{
                                        __html: course?.description ?? ''
                                    }}
                                />
                            </div>
                            <div className="py-6 border-t-2 border-borderColor flex items-center justify-between w-full mb-20">
                                <h1 className="text-lg md:text-xl font-semibold text-textLightBlackColor">
                                    Get more details
                                </h1>
                                <Link
                                    href={course.institute.instituteURL}
                                    target="_blank"
                                    className="text-blueColor text-sm md:text-base"
                                >
                                    Visit university website
                                </Link>
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
                    <CounselingWork />
                    <Testimonial />
                </>
            )}
        </>
    );
};

export default CourseDetail;
