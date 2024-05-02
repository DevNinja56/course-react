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
// import Image from 'next/image';
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
import { getMonths } from '@/utils/get-months';
import { useCurrency } from '@/hooks/currency';
import { useCalculate } from '@/hooks/initial-deposit-calculate';
import LanguageRequirements from '@/components/course/LanguageRequirements';
import { generateIntakes } from '@/utils/generateIntakes';
import Card from '@/components/Scholarship/Card';

const CourseDetail = ({ data: course }: { data: singleCourseType }) => {
    const { updateModal } = useUi();
    const { setCurrencyValue, getSingleRate } = useCurrency();
    const { initialDeposit } = useCalculate();
    const rate = getSingleRate(course.feeCurrency);

    return (
        <>
            {!course ? (
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
                            // priority
                        />
                        <div className="w-full py-5 pb-10 md:py-10 xl:py-20 flex justify-center xl:container px-4 md:px-[50px] lg:px-2 2xl:px-8">
                            <img
                                height={400}
                                width={1200}
                                alt="courseDetail"
                                src={
                                    course?.image ??
                                    '/images/CourseDetail/courseDetailMain.png'
                                }
                                className="z-20 h-full w-full lg:block hidden max-h-[375px] object-cover rounded-lg  "
                                // priority
                            />
                            <img
                                height={375}
                                width={1240}
                                alt="courseDetail"
                                src="/images/CourseDetail/courseDetailMainTablet.png"
                                className="z-20 h-full w-full lg:hidden block"
                                // priority
                            />
                        </div>
                        <img
                            height={273}
                            width={274}
                            alt="courseDetail-round"
                            className="absolute right-[-40px] lg:-right-20 -top-7 md:-top-16 md:-right-8 md:translate-y-8 lg:translate-y-0 md:bottom-8 lg:-top-16 h-20 w-20 md:h-32 md:w-32 lg:h-80 lg:w-80"
                            src="/images/CourseDetail/Ciecle 4.svg"
                            // priority
                        />
                    </div>
                    <div className="flex items-center w-full xl:container px-4 md:px-[50px] lg:px-2 2xl:px-8 mx-auto transition-all duration-300 flex-col gap-6 mb-32">
                        <div className="w-full flex flex-wrap gap-2 gap-y-4 md:gap-y-8 justify-between">
                            <h1 className="text-mainTextColor text-xl md:text-3xl font-bold">
                                {course?.name}
                            </h1>
                            <div className="flex pr-0">
                                <div className="flex flex-wrap items-center gap-1 md:gap-2 lg:gap-3">
                                    <button className="rounded-[20px] py-2 px-3 md:px-4 text-xs md:text-sm border-2 border-white hover:border-purpleColor text-white hover:text-purpleColor bg-purpleColor hover:bg-white capitalize">
                                        {course?.degree.type}
                                    </button>
                                    <button
                                        className="rounded-[20px] py-2 px-3 md:px-4 text-xs md:text-sm border-2 border-white hover:border-blueColor text-white hover:text-blueColor bg-blueColor hover:bg-white flex gap-2 items-center"
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
                                        className="h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center border-2 border-white bg-heartBgColor hover:bg-white group"
                                        iconClass={`text-3xl text-white group-hover:text-red-600`}
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
                        <div className="flex flex-col lg:flex-row gap-0 xl:gap-16 w-full justify-between mb-0 lg:mb-28">
                            <div className="flex flex-col w-full lg:w-[70%] xl:w-2/3">
                                <div className="w-full h-courseStickyHeight static lg:sticky top-[110px] no-scrollbar mb-5 lg:mb-[450px] xl:mb-96 overflow-y-scroll">
                                    <div className="transition-all duration-300">
                                        <div className="flex flex-col gap-y-6 mb-16 md:mb-20">
                                            <div className="tabs-container capitalize">
                                                <Tabs
                                                    data={[
                                                        {
                                                            title: 'Overview',
                                                            element: (
                                                                <div className="description w-full flex flex-col gap-3 md:gap-4 items-start">
                                                                    <h1 className="text-black text-lg md:text-2xl font-bold">
                                                                        Course
                                                                        Description
                                                                    </h1>
                                                                    <div
                                                                        className="text-sm md:text-base"
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
                                                                    <div className="flex flex-col gap-4 items-start">
                                                                        <h3 className="text-black text-lg md:text-2xl font-bold">
                                                                            Entry
                                                                            Requirements
                                                                        </h3>
                                                                        <div
                                                                            className="content text-sm md:text-base"
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
                                                                    <div className="flex flex-col gap-4  items-start">
                                                                        <h3 className="text-black text-lg md:text-2xl font-bold">
                                                                            Language
                                                                            Requirements
                                                                        </h3>
                                                                        <div className="flex gap-4">
                                                                            <LanguageRequirements
                                                                                language={
                                                                                    course
                                                                                        .language[0]
                                                                                        .language
                                                                                }
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        },
                                                        {
                                                            title: 'Tuitions Fee',
                                                            element: (
                                                                <div className="flex flex-col gap-4 items-start">
                                                                    <h3 className="text-black text-lg md:text-2xl font-bold">
                                                                        Tuitions
                                                                        Fee
                                                                    </h3>
                                                                    <p className="text-sm md:text-base">
                                                                        {setCurrencyValue(
                                                                            course.tuitionFee *
                                                                                (rate?.base_rate
                                                                                    ? +rate?.base_rate
                                                                                    : 1)
                                                                        )}
                                                                    </p>
                                                                </div>
                                                            )
                                                        },
                                                        {
                                                            title: 'Scholarship',
                                                            element: (
                                                                <div className="flex flex-col gap-4 items-start">
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
                                                                                                course.institute,
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
                                                                    <h3 className="text-black text-lg md:text-2xl font-bold">
                                                                        Initial
                                                                        Deposit
                                                                    </h3>

                                                                    <p className="text-sm md:text-base">
                                                                        {initialDeposit(
                                                                            {
                                                                                initialDeposit:
                                                                                    course
                                                                                        .initialDeposit?.[0]
                                                                                        .amount,
                                                                                tuitionFee:
                                                                                    course.tuitionFee,
                                                                                scholarship:
                                                                                    course
                                                                                        ?.scholarship[0]
                                                                                        ?.amount,
                                                                                currency_code:
                                                                                    course.feeCurrency
                                                                            }
                                                                        )}
                                                                    </p>
                                                                </div>
                                                            )
                                                        }
                                                    ]}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-6 border-t-2 border-borderColor flex items-center justify-between w-full mb-8 md:mb-20">
                                    <h1 className="text-base md:text-xl font-semibold text-textLightBlackColor">
                                        Get more details
                                    </h1>
                                    <Link
                                        href={course.institute.instituteURL}
                                        target="_blank"
                                        className="text-blueColor text-xs md:text-base"
                                    >
                                        Visit university website
                                    </Link>
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
                                            required to apply for this course.
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
                                            // priority
                                        />
                                        <h1 className="absolute w-full bottom-0 left-0 py-2 px-5 bg-gradient-to-t from-blueColor text-center font-bold text-2xl text-white z-10  ">
                                            {course.institute.name}
                                        </h1>
                                    </div>
                                    <div className="pt-5 px-1 xl:px-3">
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
                                            <FaMoneyBillWave className="h-8 w-8 text-blueColor" />
                                            <div className="flex flex-col gap-1">
                                                <p className="font-bold text-base text-mainTextColor">
                                                    Tuition Fee
                                                </p>
                                                <p className="text-lightGrayColor text-base">
                                                    {setCurrencyValue(
                                                        course.tuitionFee *
                                                            (rate?.base_rate
                                                                ? +rate?.base_rate
                                                                : 1)
                                                    )}
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
                                                    {course.degree.type}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 pl-5 border-b-2 border-gray-200 border-opacity-50 py-4">
                                            <GiOpenBook className="h-8 w-8 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-base text-mainTextColor">
                                                    Discipline
                                                </p>
                                                <p className="text-lightGrayColor text-base">
                                                    {course?.discipline?.name}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 pl-5 border-b-2 border-gray-200 border-opacity-50 py-4">
                                            <GoClockFill className="h-8 w-8 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-base text-mainTextColor">
                                                    Duration
                                                </p>
                                                <ul className="text-lightGrayColor text-base">
                                                    {getMonths(
                                                        course.monthDuration
                                                    )
                                                        .split(' / ')
                                                        .map((month) => (
                                                            <li key={month}>
                                                                {month}
                                                            </li>
                                                        ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 pl-5 border-b-2 border-gray-200 border-opacity-50 py-4">
                                            <IoLocation className="h-8 w-8 text-blueColor" />
                                            <div className="flex flex-col gap-[6px]">
                                                <p className="font-bold text-base text-mainTextColor">
                                                    Campus
                                                </p>
                                                <p className="text-lightGrayColor text-base">
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
                                                <p className="font-bold text-base text-mainTextColor">
                                                    Available Intakes
                                                </p>
                                                <ul className="text-lightGrayColor text-base">
                                                    {generateIntakes(
                                                        course.intakes,
                                                        1
                                                    ).map((intake) => (
                                                        <li key={intake}>
                                                            {intake}
                                                        </li>
                                                    ))}
                                                </ul>
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
                                            // onClick={() => {
                                            //     addInstituteState({
                                            //         label: course.institute
                                            //             .name,
                                            //         value: course.institute.id
                                            //     });
                                            //     addDegreeState({
                                            //         label: course.degree.name,
                                            //         value: course.degree.id
                                            //     });
                                            //     addCourseState({
                                            //         label: course.name,
                                            //         value: course.id
                                            //     });
                                            // }}
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
