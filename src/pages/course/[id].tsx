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
import { setCurrencyValue } from '@/utils/currencyValue';
import { getSsrRequest } from '@/utils/ssrRequest';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiCalculator2 } from 'react-icons/ci';
import { IoShareSocialSharp } from 'react-icons/io5';
import { IoDocumentText } from 'react-icons/io5';
import { GiOpenBook, GiTrophy } from 'react-icons/gi';
import { GoClockFill } from 'react-icons/go';
import { FaMoneyBillWave } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { FaCalendar } from 'react-icons/fa';
import { BiSolidCalendar } from 'react-icons/bi';
import CourseTag from '@/components/course/CourseTag';

const CourseDetail = ({ data: course }: { data: singleCourseType }) => {
    const { updateModal } = useUi();

    const openUserDetailModal = (courseId: string) => {
        updateModal({
            type: modalType.user_detail,
            state: { courseId }
        });
    };
    return (
        <>
            {!course ? (
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
                    <div className="flex items-center w-full xl:container px-4 md:px-[50px] lg:px-2 2xl:px-8 mx-auto transition-all duration-300 flex-col gap-6 mb-32">
                        <div className="w-full flex flex-wrap gap-2 gap-y-8 justify-between">
                            <h1 className="text-mainTextColor text-2xl md:text-3xl font-bold">
                                {course?.name}
                            </h1>
                            <div className="flex pr-0">
                                <div className="flex flex-wrap items-center gap-2 md:gap-5">
                                    <button className="rounded-[20px] pt-[9px] pb-2 px-4 border-2 border-white hover:border-purpleColor text-white hover:text-purpleColor bg-purpleColor hover:bg-white capitalize">
                                        {course?.degree.type}
                                    </button>
                                    <button
                                        className="rounded-[20px] py-2 px-4 border-2 border-white hover:border-blueColor text-white hover:text-blueColor bg-blueColor hover:bg-white flex gap-2 items-center"
                                        onClick={() =>
                                            updateModal({
                                                type: modalType.bank_statement_calculator,
                                                state: course
                                            })
                                        }
                                    >
                                        <span>Bank Statement</span>
                                        <CiCalculator2 />
                                    </button>
                                    <FavoriteButton
                                        isActive={!!course?.favoriteId?.[0]}
                                        body={{ course: course.id }}
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
                            <div className="bg-white w-full lg:w-[70%] xl:w-2/3 h-headerStickyHeight sticky top-[110px] no-scrollbar">
                                <div className=" transition-all duration-300">
                                    <div className="flex flex-col gap-y-6 mb-20">
                                        <div className="tabs-container capitalize">
                                            <Tabs
                                                data={[
                                                    {
                                                        title: 'Overview',
                                                        element: (
                                                            <div className="description w-full flex flex-col gap-4">
                                                                <h1 className="text-black text-2xl font-bold">
                                                                    Course
                                                                    Description
                                                                </h1>
                                                                <div
                                                                    className="text-base"
                                                                    dangerouslySetInnerHTML={{
                                                                        __html:
                                                                            course?.description ??
                                                                            ''
                                                                    }}
                                                                />
                                                            </div>
                                                        )
                                                    },
                                                    {
                                                        title: 'Entry Requirements',
                                                        element: (
                                                            <div className="flex flex-col gap-8">
                                                                <div className="flex flex-col gap-4">
                                                                    <h3 className="text-black text-2xl font-bold">
                                                                        Entry
                                                                        Requirements
                                                                    </h3>
                                                                    <div
                                                                        className="content text-base"
                                                                        dangerouslySetInnerHTML={{
                                                                            __html:
                                                                                course
                                                                                    .entryRequirements?.[0]
                                                                                    .requirement ??
                                                                                'No Entry Requirements'
                                                                        }}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        )
                                                    },
                                                    {
                                                        title: 'Language Requirements',
                                                        element: (
                                                            <div className="flex flex-col gap-8">
                                                                <div className="flex flex-col gap-4">
                                                                    <h3 className="text-black text-2xl font-bold">
                                                                        Language
                                                                        Requirements
                                                                    </h3>
                                                                    <p>
                                                                        {
                                                                            course
                                                                                .language?.[0]
                                                                                .language
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )
                                                    },
                                                    {
                                                        title: 'Tuitions Fee',
                                                        element: (
                                                            <div className="flex flex-col gap-4">
                                                                <h3 className="text-black text-2xl font-bold">
                                                                    Tuitions Fee
                                                                </h3>
                                                                <p>
                                                                    {setCurrencyValue(
                                                                        course.tuitionFee
                                                                    )}
                                                                </p>
                                                            </div>
                                                        )
                                                    },
                                                    {
                                                        title: 'Scholarship',
                                                        element: (
                                                            <div className="flex flex-col gap-4">
                                                                <h3 className="text-black text-2xl font-bold">
                                                                    All
                                                                    Scholarship
                                                                </h3>
                                                                <ul>
                                                                    {course.degree.scholarship.map(
                                                                        ({
                                                                            name
                                                                        }) => (
                                                                            <li
                                                                                key={
                                                                                    'scholarship-list--' +
                                                                                    name
                                                                                }
                                                                            >
                                                                                {
                                                                                    name
                                                                                }
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        )
                                                    },
                                                    {
                                                        title: 'Initial Deposit',
                                                        element: (
                                                            <div className="flex flex-col gap-4">
                                                                <h3 className="text-black text-2xl font-bold">
                                                                    Initial
                                                                    Deposit
                                                                </h3>
                                                                <p>
                                                                    {setCurrencyValue(
                                                                        course
                                                                            .initialDeposit?.[0]
                                                                            .amount
                                                                    )}
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
                                            href={course.institute.instituteURL}
                                            target="_blank"
                                            className="text-blueColor text-sm md:text-base"
                                        >
                                            Visit university website
                                        </Link>
                                    </div>
                                    {course.documentsRequirement && (
                                        <div className="flex flex-col gap-5 w-full">
                                            <div className="flex items-center gap-2">
                                                <IoDocumentText className="h-8 w-8" />
                                                <h1 className="font-bold text-2xl text-mainTextColor">
                                                    Requirements
                                                </h1>
                                            </div>
                                            <p className="text-xl font-medium text-lightGrayColor">
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
                                    )}
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
                                                course.institute?.image ??
                                                '/images/CourseDetail/Rectangle 1697.svg'
                                            }
                                            priority
                                        />
                                        <h1 className="text-center font-bold text-2xl text-white z-10">
                                            {course.institute.name}
                                        </h1>
                                    </div>
                                    <div className="pt-5 px-3">
                                        <h1 className="text-mainTextColor text-xl font-bold mb-2">
                                            About
                                        </h1>
                                        <p className="text-[13px] text-lightGrayColor mb-2">
                                            {course.institute.description.slice(
                                                0,
                                                200
                                            )}
                                            ...
                                        </p>
                                        <p className="text-xs text-lightGrayColor mb-8">
                                            Visit the{' '}
                                            <Link
                                                href={
                                                    course.institute
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
                                                className="py-5 rounded-md text-lg font-semibold"
                                                text="Start Application"
                                                // link={ROUTES.APPLY}
                                                // onClick={() => {
                                                //     addInstituteState({
                                                //         label: course.institute
                                                //             .name,
                                                //         value: course.institute
                                                //             .id
                                                //     });
                                                //     addDegreeState({
                                                //         label: course.degree
                                                //             .name,
                                                //         value: course.degree.id
                                                //     });
                                                //     addCourseState({
                                                //         label: course.name,
                                                //         value: course.id
                                                //     });
                                                // }}
                                                onClick={() =>
                                                    openUserDetailModal(
                                                        course.id
                                                    )
                                                }
                                            />

                                            <Button
                                                className="py-5 rounded-md text-lg font-semibold"
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
                                            <FaMoneyBillWave className="h-9 w-9 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-xl text-mainTextColor">
                                                    Tuition Fee
                                                </p>
                                                <p className="text-lightGrayColor text-xl">
                                                    {setCurrencyValue(
                                                        course.tuitionFee
                                                    )}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 pl-5 border-b-2 border-gray-200 border-opacity-50 py-4">
                                            <GiTrophy className="h-9 w-9 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-xl text-mainTextColor">
                                                    Level
                                                </p>
                                                <p className="text-lightGrayColor text-xl">
                                                    {course.degree.type}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 pl-5 border-b-2 border-gray-200 border-opacity-50 py-4">
                                            <GiOpenBook className="h-9 w-9 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-xl text-mainTextColor">
                                                    Discipline
                                                </p>
                                                <p className="text-lightGrayColor text-xl">
                                                    {course.specialization.name}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 pl-5 border-b-2 border-gray-200 border-opacity-50 py-4">
                                            <GoClockFill className="h-9 w-9 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-xl text-mainTextColor">
                                                    Duration
                                                </p>
                                                <p className="text-lightGrayColor text-xl">
                                                    {course.duration + ' Years'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 pl-5 border-b-2 border-gray-200 border-opacity-50 py-4">
                                            <IoLocation className="h-9 w-9 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-xl text-mainTextColor">
                                                    Campus
                                                </p>
                                                <p className="text-lightGrayColor text-xl">
                                                    {course.institute.campus}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 pl-5 border-opacity-50 py-4">
                                            <FaCalendar className="h-9 w-9 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-xl text-mainTextColor">
                                                    Available Intakes
                                                </p>
                                                <p className="text-lightGrayColor text-xl">
                                                    {course.intakes.join()}
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
    data: { data: singleCourseType; status: number };
}> = async (context) => {
    let data = null;
    try {
        const id = `${API_ENDPOINTS.COURSE_BY_ID.replace(
            ':id',
            context.query?.id as string
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
