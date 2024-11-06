import { ROUTES } from '@/config/constant';
// import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const CounselingWork = () => {
    const router = useRouter();
    return (
        <div
            className={`w-full relative pb-0 overflow-hidden ${
                router.pathname === '/apply' ||
                router.pathname?.includes(
                    ROUTES.COURSE.replace(':title', '')
                ) ||
                router.pathname?.includes(
                    ROUTES.SCHOLARSHIP.replace(':title', '')
                )
                    ? router.pathname?.includes(
                          ROUTES.COURSE.replace(':title', '')
                      ) ||
                      router.pathname?.includes(
                          ROUTES.SCHOLARSHIP.replace(':title', '')
                      )
                        ? 'bg-profileBgColor md:bg-white'
                        : `bg-profileBgColor`
                    : router.pathname === '/courseDetail'
                      ? 'bg-lightColor'
                      : ''
            }`}
        >
            {router.pathname === '/courseDetail' ||
            router.pathname?.includes(ROUTES.INSTITUTES.replace(':id', '')) ? (
                <img
                    height={217}
                    width={175}
                    alt="circle"
                    className={`absolute left-0 top-0 h-28 w-28 md:h-40 md:w-40 -translate-x-4 ${
                        router.pathname?.includes(
                            ROUTES.INSTITUTES.replace(':id', '')
                        )
                            ? '-left-3 h-24 w-24 lg:h-auto lg:w-auto'
                            : ''
                    }`}
                    src="/images/CourseDetail/circle 1.svg"
                    // priority
                />
            ) : (
                <img
                    height={314}
                    width={237}
                    alt="circle"
                    className={`absolute right-0 h-[156px] w-[106px] md:h-[206px] md:w-[156px] lg:h-[314px] lg:w-[237px] top-[-100px] md:top-44 lg:top-0 ${
                        router.pathname === '/aboutUs' ||
                        router.pathname === '/apply' ||
                        router.pathname?.includes(
                            ROUTES.COURSE.replace(':title', '')
                        ) ||
                        router.pathname?.includes(
                            ROUTES.SCHOLARSHIP.replace(':title', '')
                        )
                            ? `${
                                  router.pathname?.includes(
                                      ROUTES.COURSE.replace(':title', '')
                                  )
                                      ? 'top-[-50px]'
                                      : 'top-[-120px]'
                              } md:top-[-100px] lg:top-[-100px]`
                            : ''
                    }`}
                    src="/images/Fields/Applicatio circle img.svg"
                    // priority
                />
            )}
            <div className={`w-full py-16`}>
                <div className="container mx-auto px-3 lg:px-2 2xl:px-6 transition-all duration-300 flex flex-col items-center gap-y-16">
                    <div className="flex flex-col items-center gap-y-12">
                        <h1 className="font-bold text-[32px] md:text-[36px] text-mainTextColor text-center">
                            Learn More About Application Process
                        </h1>
                        <div className="flex flex-wrap justify-center w-full gap-[20px] z-10">
                            <div className="custom-shadow rounded-[8px] py-5 flex flex-col gap-y-4 items-center bg-white px-1 w-[90%] md:w-[27%] lg:w-[15%]">
                                <img
                                    height={48}
                                    width={48}
                                    alt="statements"
                                    src="/images/Fields/Documents.svg"
                                />
                                <h1 className="text-[15px] w-[180px] md:w-[180px] lg:w-auto lg:text-sm xl:text-base font-medium text-mainTextColor text-center px-4">
                                    Statement of Purpose
                                </h1>
                            </div>
                            <div className="custom-shadow rounded-[8px] py-5 flex flex-col gap-y-4 items-center bg-white px-1 w-[90%] md:w-[27%] lg:w-[15%]">
                                <img
                                    height={48}
                                    width={48}
                                    alt="letter"
                                    src="/images/Fields/Letter Opened.svg"
                                />
                                <h1 className="text-[15px] w-[180px] md:w-[180px] lg:w-auto lg:text-sm xl:text-base font-medium text-mainTextColor text-center px-4">
                                    Letter of Recommendation
                                </h1>
                            </div>
                            <div className="custom-shadow rounded-[8px] py-5 flex flex-col gap-y-4 items-center bg-white px-1 w-[90%] md:w-[27%] lg:w-[15%]">
                                <img
                                    height={48}
                                    width={48}
                                    alt="visa"
                                    src="/images/Fields/Documents Minimalistic.svg"
                                />
                                <h1 className="text-[15px] w-[180px] md:w-[180px] lg:w-auto lg:text-sm xl:text-base font-medium text-mainTextColor text-center px-4">
                                    Student Visa Application
                                </h1>
                            </div>
                            <div className="custom-shadow rounded-[8px] py-5 flex flex-col gap-y-4 items-center bg-white px-1 w-[90%] md:w-[27%] lg:w-[15%]">
                                <img
                                    height={48}
                                    width={48}
                                    alt="essay"
                                    src="/images/Fields/Document Add.svg"
                                />
                                <h1 className="text-[15px] w-[180px] md:w-[180px] lg:w-auto lg:text-sm xl:text-base font-medium text-mainTextColor text-center px-4">
                                    Admission Essay Writing
                                </h1>
                            </div>
                            <div className="custom-shadow rounded-[8px] py-5 flex flex-col gap-y-4 items-center bg-white px-1 w-[90%] md:w-[27%] lg:w-[15%]">
                                <img
                                    height={48}
                                    width={48}
                                    alt="cv"
                                    src="/images/Fields/User Id.svg"
                                />
                                <h1 className="text-[15px] w-[180px] md:w-[180px] lg:w-auto lg:text-sm xl:text-base font-medium text-mainTextColor text-center px-4">
                                    Student Curriculum Vitae
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {router.pathname !== ROUTES.ABOUT_US && (
                <div className="flex flex-col items-center gap-y-16 w-full">
                    <div className="flex flex-col items-center gap-y-12">
                        <h1 className="font-bold text-[32px] md:text-[36px] text-mainTextColor text-center">
                            How does Counselling Work?
                        </h1>
                        <p className="text-darkGrayColor text-center">
                            Every student is guided from initial college
                            selection all the way up to a successful student
                            visa.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-between relative z-10 gap-[56px] lg:gap-0 w-full px-0 md:px-8 lg:px-0">
                        <hr className="absolute top-[30%] left-[92px] border-2 border-grayColor w-[80%] 2xl:w-[1400px] hidden lg:block" />
                        <div className="flex flex-col gap-[28px] items-center">
                            <div
                                style={{ border: '3px dotted #717070' }}
                                className="h-[120px] w-[120px] md:h-[140px] md:w-[140px] rounded-full flex items-center justify-center bg-white z-10"
                            >
                                <img
                                    height={85.06}
                                    width={77.66}
                                    alt="counselling-work"
                                    src="/images/Fields/Counselling Img 1.svg"
                                />
                            </div>
                            <h1 className="font-bold text-xl text-darkGrayColor text-center">
                                Send Academic <br />
                                Documents
                            </h1>
                        </div>
                        <div className="flex flex-col gap-[28px] items-center">
                            <div
                                style={{ border: '3px dotted #717070' }}
                                className="h-[120px] w-[120px] md:h-[140px] md:w-[140px] rounded-full flex items-center justify-center bg-white z-10"
                            >
                                <img
                                    height={91.91}
                                    width={92.91}
                                    alt="counselling-work"
                                    src="/images/Fields/Counselling Img 2.svg"
                                />
                            </div>
                            <h1 className="font-bold text-xl text-darkGrayColor text-center">
                                Profile
                                <br /> Evaluation Call
                            </h1>
                        </div>
                        <div className="flex flex-col gap-[28px] items-center">
                            <div
                                style={{ border: '3px dotted #717070' }}
                                className="h-[120px] w-[120px] md:h-[140px] md:w-[140px] rounded-full flex items-center justify-center bg-white z-10"
                            >
                                <img
                                    height={89.94}
                                    width={88.52}
                                    alt="counselling-work"
                                    src="/images/Fields/Counselling Img 3.svg"
                                />
                            </div>
                            <h1 className="font-bold text-xl text-darkGrayColor text-center">
                                University
                                <br /> Shortlist
                            </h1>
                        </div>
                        <div className="flex flex-col gap-[28px] items-center">
                            <div
                                style={{ border: '3px dotted #717070' }}
                                className="h-[120px] w-[120px] md:h-[140px] md:w-[140px] rounded-full flex items-center justify-center bg-white z-10"
                            >
                                <img
                                    height={90.03}
                                    width={67.52}
                                    alt="counselling-work"
                                    src="/images/Fields/Counselling Img 4.svg"
                                />
                            </div>
                            <h1 className="font-bold text-xl text-darkGrayColor text-center">
                                Document <br />
                                Preparation
                            </h1>
                        </div>
                        <div className="flex flex-col gap-[28px] items-center">
                            <div
                                style={{ border: '3px dotted #717070' }}
                                className="h-[120px] w-[120px] md:h-[140px] md:w-[140px] rounded-full flex items-center justify-center bg-white z-10"
                            >
                                <img
                                    height={90.6}
                                    width={89.95}
                                    alt="counselling-work"
                                    src="/images/Fields/Counselling Img 5.svg"
                                />
                            </div>
                            <h1 className="font-bold text-xl text-darkGrayColor text-center w-[114px] lg:w-auto">
                                Application Submission
                            </h1>
                        </div>
                        <div className="flex flex-col gap-[28px] items-center">
                            <div
                                style={{ border: '3px dotted #717070' }}
                                className="h-[120px] w-[120px] md:h-[140px] md:w-[140px] rounded-full flex items-center justify-center bg-white z-10"
                            >
                                <img
                                    height={90.18}
                                    width={84.67}
                                    alt="counselling-work"
                                    src="/images/Fields/Counselling Img 6.svg"
                                />
                            </div>
                            <h1 className="font-bold text-xl text-darkGrayColor text-center">
                                Visa Counselling
                            </h1>
                        </div>
                    </div>
                </div>
            )}
            {router.pathname === '/courseDetail' ||
            router.pathname?.includes(ROUTES.INSTITUTES.replace(':id', '')) ? (
                ''
            ) : (
                <></>
                // <img
                //     height={314}
                //     width={192}
                //     alt="counselling-work"
                //     className={`absolute left-0 h-[130px] bottom-[1190px] md:bottom-44 w-[130px] md:h-[206px] md:w-[206px] lg:h-[314px] lg:w-[192px] ${
                //         router.pathname?.includes(
                //             ROUTES.COURSE.replace(':title', '')
                //         ) ||
                //         router.pathname?.includes(
                //             ROUTES.SCHOLARSHIP.replace(':title', '')
                //         )
                //             ? 'block translate-y-10 md:hidden'
                //             : ''
                //     }`}
                //     src="/images/Fields/Ellipse 427.svg"
                //     // priority
                // />
            )}
        </div>
    );
};

export default CounselingWork;
