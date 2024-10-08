import Button from '@/components/Button';
import FavoriteButton from '@/components/Button/FavoriteButton';
import ScreenLoader from '@/components/Loader/ScreenLoader';
import Tabs from '@/components/Tabs';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { ROUTES } from '@/config/constant';
import { useUi } from '@/hooks/user-interface';
import { modalType } from '@/store/slices/ui.slice';
import { scholarshipType } from '@/types';
import { getSsrRequest } from '@/utils/ssrRequest';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaCalendar } from 'react-icons/fa6';
import { MdCategory } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';
import { IoShareSocialSharp } from 'react-icons/io5';
import { useCurrency } from '@/hooks/currency';
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { FaCheckCircle } from "react-icons/fa";
const InnerHtml = dynamic(() => import('@/components/InnerHtml'), {
    ssr: false
});

const ScholarshipDetail = ({
    data: scholarship
}: {
    data: scholarshipType;
}) => {
    const { setCurrencyValue } = useCurrency();

    const { updateModal } = useUi();
    const [isActive] = useState<boolean | null>(!!scholarship?.favoriteId?.[0]);
    return (
        <>
            {!scholarship ? (
                <ScreenLoader />
            ) : (
                <>
                    <div className="w-full flex justify-center overflow-hidden mt-[100px] relative">
                        <img
                            height={60}
                            width={60}
                            alt="course-round"
                            className="top-1/3 absolute -left-3 md:-left-5 h-8 w-8 md:h-16 md:w-16 lg:h-24 lg:w-24 z-10"
                            src="/images/CourseDetail/Circle 3.svg"
                        />
                        <div className="w-full p-5 flex justify-center xl:container px-4 md:px-[50px] lg:px-2 2xl:px-8">
                            <img
                                height={375}
                                width={1240}
                                alt="courseDetail"
                                src="/images/CourseDetail/courseDetailMain.png"
                                className="z-20 h-full w-full lg:block hidden"
                            />
                            <img
                                height={375}
                                width={1240}
                                alt="courseDetail"
                                src="/images/CourseDetail/courseDetailMainTablet.png"
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
                    <div className="xl:container mx-auto relative bottom-16 z-[35]">
                        <div className="h-auto w-[70%] md:w-[85%] mx-auto grid max-[475px]:grid-cols-1 grid-cols-2 xl:grid-cols-4 md:gap-5 justify-around rounded-xl bg-white shadow-md">
                            <div className="flex items-center gap-4 border-b-2 lg:border-none border-gray-200 border-opacity-50 w-full md:w-auto px-4 py-2 sm:p-4 justify-start lg:justify-center">
                                <div className="md:min-w-52 h-auto flex items-center gap-4">
                                    <HiMiniCurrencyDollar className="h-6 w-6 sm:h-12 sm:w-12 text-blueColor" />
                                    <div className="flex flex-col text-left">
                                        <p className="font-bold text-xs sm:text-sm md:text-lg text-mainTextColor">
                                            {scholarship.isAmount == true
                                                ? 'Amount'
                                                : 'Percentage'}
                                        </p>
                                        <p className="text-[10px] sm:text-sm lg:text-base text-lightGrayColor">
                                            {scholarship.isAmount
                                                ? setCurrencyValue(
                                                      +scholarship.amount,
                                                      'GBP'
                                                  )
                                                : `${scholarship.percentage}%`}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 border-b-2 lg:border-none border-gray-200 border-opacity-50 w-full md:w-auto px-4 py-2 sm:p-4 justify-start lg:justify-center">
                                <div className="md:min-w-52 h-auto flex items-center gap-4">
                                    <MdCategory className="h-6 w-6 sm:h-12 sm:w-12 text-blueColor" />
                                    <div className="flex flex-col text-left">
                                        <p className="font-bold text-xs sm:text-sm md:text-lg text-mainTextColor">
                                            Type
                                        </p>
                                        <p className="text-[10px] sm:text-sm lg:text-base text-lightGrayColor">
                                            {scholarship.type}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 border-b-2 lg:border-none border-gray-200 border-opacity-50 w-full md:w-auto px-4 py-2 sm:p-4 justify-start lg:justify-center">
                                <div className="md:min-w-52 h-auto flex items-center gap-4">
                                    <FaGraduationCap className="h-6 w-6 sm:h-12 sm:w-12 text-blueColor" />
                                    <div className="flex flex-col text-left">
                                        <p className="font-bold text-xs sm:text-sm md:text-lg text-mainTextColor">
                                            Level
                                        </p>
                                        <p className="text-[10px] sm:text-sm lg:text-base text-lightGrayColor">
                                            {scholarship?.degree
                                                ?.map((degree) => degree.type)
                                                .join('-') ?? 'No Level Found'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 border-b-2 lg:border-none border-gray-200 border-opacity-50 w-full md:w-auto px-4 py-2 sm:p-4 justify-start lg:justify-center">
                                <div className="md:min-w-52 h-auto flex items-center gap-4">
                                    <FaCheckCircle className="h-6 w-6 sm:h-12 sm:w-12 text-blueColor" />
                                    <div className="flex flex-col text-left">
                                        <p className="font-bold text-xs sm:text-sm md:text-lg text-mainTextColor">
                                            Applicable
                                        </p>
                                        <p className="text-[10px] sm:text-sm lg:text-base text-lightGrayColor">
                                            {scholarship.applicable}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full xl:container px-4 md:px-[50px] lg:px-2 2xl:px-8 mx-auto transition-all duration-300 flex-col gap-6">
                        <div className="w-full flex flex-wrap gap-2 gap-y-4 md:gap-y-8 justify-between">
                            <h1 className="text-mainTextColor text-xl md:text-3xl font-bold">
                                {`${scholarship?.name} - ${
                                    scholarship?.isAmount
                                        ? setCurrencyValue(
                                              +scholarship.amount,
                                              'GBP'
                                          )
                                        : `${scholarship.percentage}%`
                                }`}
                            </h1>
                            <div className="flex pr-0">
                                <div className="flex flex-wrap items-center gap-1 md:gap-2 lg:gap-3">
                                    {scholarship?.type && (
                                        <button className="rounded-[20px] py-2 px-3 md:px-4 text-xs md:text-sm border-2 border-white hover:border-purpleColor text-white hover:text-purpleColor bg-purpleColor hover:bg-white">
                                            {scholarship?.type}
                                        </button>
                                    )}
                                    {scholarship?.institute?.sector && (
                                        <button className="rounded-[20px] py-2 px-3 md:px-4 text-xs md:text-sm border-2 border-white hover:border-blueColor text-white hover:text-blueColor bg-blueColor hover:bg-white flex gap-2 items-center">
                                            {scholarship?.institute?.sector}
                                        </button>
                                    )}
                                    {isActive !== null && (
                                        <FavoriteButton
                                            isActive={isActive}
                                            body={{
                                                scholarship: scholarship._id
                                            }}
                                            position="static"
                                        />
                                    )}
                                    <div
                                        onClick={() =>
                                            updateModal({
                                                type: modalType.share_modal,
                                                state: {
                                                    name: 'scholarship',
                                                    id: scholarship._id
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
                            <div className="w-full lg:w-[70%] xl:w-2/3 lg:sticky top-[110px] no-scrollbar mb-0 ">
                                <div className=" transition-all duration-300">
                                    <div className="flex flex-col gap-y-6 mb-3">
                                        <div className="tabs-container capitalize">
                                            <Tabs
                                                data={[
                                                    {
                                                        title: 'Overview',
                                                        element: (
                                                            <div className="description w-full flex flex-col gap-3 md:gap-4 items-start">
                                                                <h1 className="text-black text-lg md:text-2xl font-bold">
                                                                    scholarship
                                                                    Description
                                                                </h1>
                                                                <div className="text-sm md:text-base">
                                                                    <InnerHtml
                                                                        html={
                                                                            scholarship?.description ??
                                                                            ''
                                                                        }
                                                                    />
                                                                </div>
                                                                {scholarship?.text_overview && (
                                                                    <div className="text-sm md:text-base">
                                                                        <InnerHtml
                                                                            html={
                                                                                scholarship?.text_overview ??
                                                                                ''
                                                                            }
                                                                        />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )
                                                    },
                                                    {
                                                        title: 'Eligible Degree',
                                                        element: (
                                                            <div className="flex flex-col gap-8">
                                                                <h3 className="text-black text-lg md:text-2xl font-bold">
                                                                    Eligible
                                                                    Degree List
                                                                </h3>
                                                                {scholarship?.degree?.map(
                                                                    (
                                                                        degree
                                                                    ) => (
                                                                        <p
                                                                            className="text-sm md:text-base"
                                                                            key={
                                                                                'scholarship-degree--' +
                                                                                degree.id
                                                                            }
                                                                        >
                                                                            {
                                                                                degree.name
                                                                            }
                                                                        </p>
                                                                    )
                                                                )}
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
                                                                    {scholarship.isAmount ==
                                                                    true
                                                                        ? setCurrencyValue(
                                                                              +scholarship.amount,
                                                                              'GBP'
                                                                          )
                                                                        : `${scholarship.percentage}%`}
                                                                </p>

                                                                {scholarship?.text_amount && (
                                                                    <div className="text-sm md:text-base">
                                                                        <InnerHtml
                                                                            html={
                                                                                scholarship?.text_amount ??
                                                                                ''
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
                                    <div className="py-6 border-t-2 border-borderColor flex items-center justify-between w-full">
                                        <h1 className="text-base md:text-xl font-semibold text-textLightBlackColor">
                                            Get more details
                                        </h1>
                                        {scholarship?.institute
                                            ?.instituteURL ? (
                                            <Link
                                                href={
                                                    scholarship?.institute
                                                        ?.instituteURL
                                                }
                                                target="_blank"
                                                className="text-blueColor text-xs md:text-base"
                                            >
                                                Visit university website
                                            </Link>
                                        ) : (
                                            'University website not available'
                                        )}
                                    </div>
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
                                                scholarship?.institute?.image ??
                                                '/images/CourseDetail/Rectangle 1697.svg'
                                            }
                                        />
                                        <h1 className="absolute w-full bottom-0 left-0 py-2 px-5 bg-gradient-to-t from-blueColor text-center font-bold text-2xl text-white z-10  ">
                                            {scholarship?.institute?.name ??
                                                'No Institute Found'}
                                        </h1>
                                    </div>
                                    <div className="pt-5 px-1 xl:px-3">
                                        <h1 className="text-mainTextColor text-xl font-bold mb-2">
                                            About
                                        </h1>
                                        <div className="text-[13px] text-lightGrayColor mb-2">
                                            <InnerHtml
                                                html={scholarship?.institute?.description.slice(
                                                    0,
                                                    200
                                                )}
                                            />
                                        </div>
                                        <p className="text-xs text-lightGrayColor mb-8">
                                            Visit the{' '}
                                            {scholarship.institute
                                                ?.instituteURL ? (
                                                <Link
                                                    href={
                                                        scholarship.institute
                                                            ?.instituteURL
                                                    }
                                                    target="_blank"
                                                    className="text-blueColor font-bold"
                                                >
                                                    university website{' '}
                                                </Link>
                                            ) : (
                                                'University website'
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
                                                        state: {
                                                            institute:
                                                                scholarship.institute
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-[10px] w-full z-10 shadow-RequirementBox mt-4 py-3">
                                    <div className="flex flex-col capitalize">
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
                                        <div className="flex items-center gap-4 pl-5 border-opacity-50 py-4">
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
                                            onClick={() =>
                                                updateModal({
                                                    type: modalType.start_application,
                                                    state: {
                                                        institute:
                                                            scholarship.institute
                                                    }
                                                })
                                            }
                                        />
                                    </div>
                                </div>
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
            (context.query?.scholarship_id as string) ??
                (context.query?.id as string)
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

export default ScholarshipDetail;