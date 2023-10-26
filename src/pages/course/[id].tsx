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
                                    {course?.name}
                                </h1>
                                <div className="w-full flex justify-end pr-[92px]">
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
                        <div className="bg-white absolute right-24 top-20 rounded-[10px] p-3 w-[25%] z-10 custom-shadow">
                            <div className="relative flex justify-center w-full h-[228px]">
                                <Image
                                    height={228}
                                    width={353.5}
                                    alt="mainImg"
                                    className="absolute top-0 left-0 w-full h-[228px]"
                                    src={
                                        course.institute?.image ??
                                        '/images/CourseDetail/Rectangle 1697.svg'
                                    }
                                    priority
                                />
                                <h1 className="text-center font-bold text-2xl text-white z-10 pt-32">
                                    {course.institute.name}
                                </h1>
                            </div>
                            <div className="px-3 pt-5">
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
                            className="absolute right-5 top-5"
                            src="/images/CourseDetail/Ciecle 4.svg"
                            priority
                        />
                    </div>
                    <div className="w-full pb-28 bg-white">
                        <div className="max-w-[1110px] 2xl:max-w-[2300px] mx-auto px-2 2xl:px-8 transition-all duration-300 pt-16 pr-[360px] 2xl:pr-[700px]">
                            <div className="flex flex-col gap-y-6 mb-20">
                                <h1 className="font-semibold text-xl text-textLightBlackColor">
                                    Description
                                </h1>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: course?.description ?? ''
                                    }}
                                />
                            </div>
                            <div className="py-6 border-t-2 border-borderColor flex items-center justify-between w-full mb-20">
                                <h1 className="text-xl font-semibold text-textLightBlackColor">
                                    Get more details
                                </h1>
                                <Link
                                    href={course.institute.instituteURL}
                                    target="_blank"
                                    className="text-blueColor"
                                >
                                    Visit university website
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
