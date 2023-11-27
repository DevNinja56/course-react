import Button from '@/components/Button';
import FavoriteButton from '@/components/Button/FavoriteButton';
import CounselingWork from '@/components/CounselingWork/CounselingWork';
import ScreenLoader from '@/components/Loader/ScreenLoader';
import Testimonial from '@/components/Testimonial';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { ROUTES } from '@/config/constant';
import { useApply } from '@/hooks/apply';
import { scholarshipType } from '@/types';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const CourseDetail = ({ data: scholarship }: { data: scholarshipType }) => {
    const [isFavorite, setFavorite] = useState(!!scholarship?.favoriteId?.[0]);
    const { addScholarshipState } = useApply();
    return (
        <>
            {!scholarship ? (
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
                                    {scholarship?.name}
                                </h1>
                                <div className="w-full flex justify-start lg:justify-end pr-0 lg:pr-[92px]">
                                    <div className="flex items-center gap-5">
                                        <button className="rounded-[20px] pt-[9px] pb-2 px-4 border-2 border-white hover:border-purpleColor text-white hover:text-purpleColor bg-purpleColor hover:bg-white">
                                            {scholarship?.type}
                                        </button>
                                        <button className="rounded-[20px] pt-[9px] pb-2 px-4 border-2 border-white hover:border-blueColor text-white hover:text-blueColor bg-blueColor hover:bg-white">
                                            {' '}
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
                                        scholarship.institute?.image ??
                                        '/images/CourseDetail/Rectangle 1697.svg'
                                    }
                                    priority
                                />
                                <h1 className="text-center font-bold text-2xl text-white z-10">
                                    {scholarship.institute.name}
                                </h1>
                            </div>
                            <div className="pt-5">
                                <h1 className="text-mainTextColor text-xl font-bold mb-2">
                                    About
                                </h1>
                                <p className="text-[13px] text-grayColor mb-2">
                                    {scholarship.institute.description.slice(
                                        0,
                                        200
                                    )}
                                    ...
                                </p>
                                <p className="text-[11px] text-grayColor mb-8">
                                    Visit the{' '}
                                    <Link
                                        href={
                                            scholarship.institute.instituteURL
                                        }
                                        target="_blank"
                                        className="text-blueColor font-bold"
                                    >
                                        Visit university website
                                    </Link>{' '}
                                    for more information
                                </p>
                                <div
                                    className="flex flex-col gap-3"
                                    onClick={() =>
                                        addScholarshipState({
                                            value: scholarship.id,
                                            label: scholarship.name
                                        })
                                    }
                                >
                                    <Button text="Apply" link={ROUTES.APPLY} />
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
                                                alt="cup-icon"
                                                src="/images/CourseDetail/Cup.svg"
                                                priority
                                            />
                                            <p className="text-textLightBlackColor">
                                                Level
                                            </p>
                                        </div>
                                        <p className="text-darkGrayColor truncate px-5 max-w-[250px] text-right">
                                            {scholarship.degrees
                                                .map((degree) => degree.name)
                                                .join('-')}
                                        </p>
                                    </div>
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
                                                applicable
                                            </p>
                                        </div>
                                        <p className="text-darkGrayColor">
                                            {scholarship.applicable}
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
                                                Type
                                            </p>
                                        </div>
                                        <p className="text-darkGrayColor">
                                            {scholarship.type}
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
                                                scholarship.startDate
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
                                                scholarship.endDate
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
                    <div className="w-full bg-white h-auto lg:h-[140vh] xl:h-[120vh] pb-20 lg:pb-0 mb-10 lg:mb-0">
                        <div className="max-w-[1110px] 2xl:max-w-[2300px] mx-auto px-5 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300 pt-16 pr-auto lg:pr-[350px] 2xl:pr-[700px]">
                            <div className="flex flex-col gap-y-6 mb-20">
                                <h1 className="font-semibold text-lg md:text-xl text-textLightBlackColor">
                                    Description
                                </h1>
                                <div
                                    className="text-sm md:text-base"
                                    dangerouslySetInnerHTML={{
                                        __html: scholarship?.description ?? ''
                                    }}
                                />
                            </div>
                            <div className="py-6 border-t-2 border-borderColor flex items-center justify-between w-full mb-20">
                                <h1 className="text-lg md:text-xl font-semibold text-textLightBlackColor">
                                    Get more details
                                </h1>
                                <Link
                                    href={scholarship.institute.instituteURL}
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

export const getServerSideProps: GetServerSideProps<{
    data: { data: scholarshipType; status: number };
}> = async (context) => {
    const id = context.query?.id as string;
    const token = context.req.cookies['access_token'];
    let data = null;
    try {
        const res = await fetch(
            `${
                process.env.NEXT_PUBLIC_REST_API_ENDPOINT
            }${API_ENDPOINTS.SCHOLARSHIP_BY_ID.replace(':id', id)}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        );
        data = await res.json();
    } catch (error) {
        data = null;
        console.log(error);
    }
    return { props: { data: data?.data ?? data! ?? null } };
};

export default CourseDetail;
