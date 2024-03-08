import Button from '@/components/Button';
import FavoriteButton from '@/components/Button/FavoriteButton';
import ScreenLoader from '@/components/Loader/ScreenLoader';
import Tabs from '@/components/Tabs';
import CourseTag from '@/components/course/CourseTag';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { ROUTES } from '@/config/constant';
import { useUi } from '@/hooks/user-interface';
import { modalType } from '@/store/slices/ui.slice';
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
    const { updateModal } = useUi();
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
                                    <div
                                        onClick={() =>
                                            updateModal({
                                                type: modalType.share_modal,
                                                state: {
                                                    name: 'scholarship',
                                                    id: scholarship.id
                                                }
                                            })
                                        }
                                        className="h-8 w-8 rounded-full bg-white shadow-lg lg:flex items-center justify-center hidden cursor-pointer"
                                    >
                                        <IoShareSocialSharp className="text-gray-400 h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-0 xl:gap-16 w-full justify-between">
                            <div className="bg-white w-full lg:w-[70%] xl:w-2/3 h-courseStickyHeight static lg:sticky top-[110px] no-scrollbar mb-0 md:mb-0 lg:mb-96">
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
