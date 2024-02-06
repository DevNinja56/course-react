import React, { useEffect } from 'react';
import { useCompare } from '@/hooks/compare';
import HeadBox from '@/components/compare/HeadBox';
import { InstituteLogoImage } from '@/components/compare/InstituteLogo';
import ScholarshipSlider from '@/components/Slider/ScholarshipSlider';
import { FiPrinter } from 'react-icons/fi';
import { GetServerSideProps } from 'next';
import { singleCourseType } from '@/types';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { getSsrRequest } from '@/utils/ssrRequest';

const Compare = ({ data }: { data?: singleCourseType }) => {
    const { first, second, third, compareFirst, compareSecond, compareThird } =
        useCompare();

    useEffect(() => {
        if (data) {
            const compareData = {
                country: data.institute.country,
                institute: {
                    ...data.institute,
                    country: data.institute.country
                },
                discipline: null,
                degreeLevel: data.degree,
                specialization: data.specialization,
                course: data
            };
            first === null
                ? compareFirst(compareData)
                : second === null
                  ? compareSecond(compareData)
                  : compareThird(compareData);
        }
    }, [data]);

    const state = [
        {
            heading: 'About University',
            data: [
                {
                    title: 'Institute Logo',
                    first: first?.institute?.logo ? (
                        <InstituteLogoImage
                            url={first?.institute?.logo}
                            index="first"
                        />
                    ) : null,
                    second: second?.institute.logo ? (
                        <InstituteLogoImage
                            url={second?.institute?.logo}
                            index="second"
                        />
                    ) : null,
                    third: third?.institute.logo ? (
                        <InstituteLogoImage
                            url={third?.institute?.logo}
                            index="third"
                        />
                    ) : null
                },
                {
                    title: 'Institute Name',
                    first: first?.institute?.name,
                    second: second?.institute?.name,
                    third: third?.institute?.name
                },
                {
                    title: 'Sector',
                    first: first?.institute?.sector,
                    second: second?.institute?.sector,
                    third: third?.institute?.sector
                },
                {
                    title: 'Established Year',
                    first: first?.institute?.establishedYear,
                    second: second?.institute?.establishedYear,
                    third: third?.institute?.establishedYear
                },
                {
                    title: 'Country',
                    first: first?.institute?.country.name,
                    second: second?.institute?.country.name,
                    third: third?.institute?.country.name
                },
                {
                    title: 'Location',
                    first: first?.institute?.location,
                    second: second?.institute?.location,
                    third: third?.institute?.location
                },
                {
                    title: 'Campus',
                    first: first?.institute?.campus,
                    second: second?.institute?.campus,
                    third: third?.institute?.campus
                }
            ]
        },
        {
            heading: 'Program Details',
            data: [
                {
                    title: 'Degree level',
                    first: first?.course?.degree?.type,
                    second: second?.course?.degree?.type,
                    third: third?.course?.degree?.type
                },
                {
                    title: 'Course Name',
                    first: first?.course?.name,
                    second: second?.course?.name,
                    third: third?.course?.name
                },
                {
                    title: 'Specialization',
                    first: first?.course?.specialization?.name,
                    second: second?.course?.specialization?.name,
                    third: third?.course?.specialization?.name
                },
                {
                    title: 'Duration',
                    first: first?.course?.duration,
                    second: second?.course?.duration,
                    third: third?.course?.duration
                },
                {
                    title: 'Initial Deposit',
                    first: first?.course.initialDeposit[0].amount,
                    second: second?.course.initialDeposit[0].amount,
                    third: third?.course.initialDeposit[0].amount
                },
                {
                    title: 'Yearly fee',
                    first: first?.course.tuitionFee,
                    second: second?.course.tuitionFee,
                    third: third?.course.tuitionFee
                },
                {
                    title: 'Intake',
                    first: first?.course.intakes.join(),
                    second: second?.course.intakes.join(),
                    third: third?.course.intakes.join()
                }
            ]
        },
        {
            heading: 'Ranking',
            data: [
                {
                    title: 'QS World University Ranking',
                    first: first?.institute?.qsWorldRanking,
                    second: second?.institute?.qsWorldRanking,
                    third: third?.institute?.qsWorldRanking
                },
                {
                    title: 'US News Global Universities Rankings',
                    first: first?.institute?.usNewsRanking,
                    second: second?.institute?.usNewsRanking,
                    third: third?.institute?.usNewsRanking
                },
                {
                    title: 'Times Higher Education Ranking.',
                    first: first?.institute?.timesHigherRanking,
                    second: second?.institute?.timesHigherRanking,
                    third: third?.institute?.timesHigherRanking
                }
            ]
        }
    ];

    return (
        <>
            <HeadBox />
            <div className="w-full pb-32 print:pb-0  ">
                <div className="max-w-[1120px] 2xl:max-w-[2400px] mx-auto px-2 2xl:px-8 transition-all duration-300 relative">
                    {state.map(({ heading, data }, i) => (
                        <div
                            className="w-full rounded-xl custom-shadow border-2 border-profileBgColor mt-10 "
                            key={'compare--' + heading}
                        >
                            <div className="w-full rounded-xl rounded-b-none bg-blueColor pl-3 md:pl-[35px] py-4 relative ">
                                <h1 className="text-white text-base md:text-xl font-bold leading-6">
                                    {heading}
                                </h1>
                                {i === 0 && (
                                    <button
                                        onClick={() => {
                                            window.print();
                                        }}
                                        className="absolute top-[50%] translate-y-[-50%] right-3 bg-white px-2 py-1 rounded-md print:hidden flex gap-1 justify-center items-center font-bold "
                                    >
                                        <FiPrinter /> Print
                                    </button>
                                )}
                            </div>
                            <div className="w-full">
                                {data.map(
                                    ({ title, first, second, third }, i) => (
                                        <div
                                            className="flex w-full justify-between gap-2 md:gap-4 capitalize"
                                            key={'rows-content--' + title}
                                        >
                                            <div
                                                className={`w-[50%] md:w-1/4 px-3 py-5 md:p-5 relative border-r border-profileBgColor flex items-center ${
                                                    i % 2 === 0
                                                        ? 'bg-lightBlue'
                                                        : 'bg-white'
                                                }  `}
                                            >
                                                <h1 className="font-bold text-sm md:text-base text-mainTextColor">
                                                    {title ?? '--'}
                                                </h1>
                                            </div>
                                            <div
                                                className={`w-[15%] md:w-1/4 px-3 py-5 md:p-5 relative border-x border-profileBgColor flex items-center ${
                                                    i % 2 === 0
                                                        ? 'bg-lightBlue'
                                                        : 'bg-white'
                                                }  `}
                                            >
                                                <h1 className="font-bold text-sm md:text-base text-grayColor">
                                                    {first ?? '--'}
                                                </h1>
                                            </div>
                                            <div
                                                className={`w-[15%] md:w-1/4 px-3 py-5 md:p-5 relative border-x border-profileBgColor flex items-center ${
                                                    i % 2 === 0
                                                        ? 'bg-lightBlue'
                                                        : 'bg-white'
                                                }  `}
                                            >
                                                <h1 className="font-bold text-sm md:text-base text-grayColor">
                                                    {second ?? '--'}
                                                </h1>
                                            </div>
                                            <div
                                                className={`w-[15%] md:w-1/4 px-3 py-5 md:p-5 relative border-x border-profileBgColor flex items-center ${
                                                    i % 2 === 0
                                                        ? 'bg-lightBlue'
                                                        : 'bg-white'
                                                }  `}
                                            >
                                                <h1 className="font-bold text-sm md:text-base text-grayColor">
                                                    {third ?? '--'}
                                                </h1>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full pb-20 2xl:pb-[700px] flex flex-col items-center overflow-hidden print:hidden">
                <p className="text-[23px] font-bold text-blueColor mb-1">
                    Scholarships
                </p>
                <h1 className="text-textLightBlackColor text-3xl md:text-[48px] font-extrabold mb-5 text-center">
                    Scholarships you may be interested in
                </h1>
                <ScholarshipSlider />
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<{
    data: { data: singleCourseType; status: number };
}> = async (context) => {
    let data = null;
    const course_id = context.query?.course_id as string;
    if (!course_id) return { props: { data } };

    try {
        const id = `${API_ENDPOINTS.COURSE_BY_ID.replace(':id', course_id)}`;
        data = await getSsrRequest(id, context);
        return { props: { data } };
    } catch (error) {
        return { props: { data } };
    }
};

export default Compare;
