import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const CounselingWork = () => {
    const router = useRouter();
    return (
        <div
            className={`w-full relative pb-0 ${
                router.pathname === '/apply'
                    ? 'bg-profileBgColor'
                    : router.pathname === '/courseDetail'
                    ? 'bg-lightColor'
                    : ''
            }`}
        >
            {router.pathname === '/courseDetail' ? (
                <Image
                    height={217}
                    width={175}
                    alt="circle"
                    className="absolute left-0 top-0"
                    src="/images/CourseDetail/circle 1.svg"
                    priority
                />
            ) : router.pathname === '/faq' ? (
                ''
            ) : (
                <Image
                    height={314}
                    width={237}
                    alt="circle"
                    className={`absolute right-0 ${
                        router.pathname === '/aboutUs' ||
                        router.pathname === '/apply'
                            ? 'top-[-100px]'
                            : ''
                    }`}
                    src="/images/Fields/Applicatio circle img.svg"
                    priority
                />
            )}
            <div className="w-full py-28">
                <div className="max-w-[1200px] 2xl:max-w-[2400px] mx-auto px-2 2xl:px-8 transition-all duration-300 flex flex-col items-center gap-y-24">
                    <div className="flex flex-col items-center gap-y-16">
                        <h1 className="font-bold text-[36px] text-mainTextColor">
                            Learn More About Application Process
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full gap-[30px] z-10">
                            <div className="custom-shadow rounded-[10px] py-7 flex flex-col gap-y-5 items-center bg-white px-1">
                                <Image
                                    height={64}
                                    width={64}
                                    alt="statements"
                                    src="/images/Fields/Documents.svg"
                                    priority
                                />
                                <h1 className="text-xl font-medium text-mainTextColor text-center px-5">
                                    Statement of purpose
                                </h1>
                            </div>
                            <div className="custom-shadow rounded-[10px] py-7 flex flex-col gap-y-5 items-center bg-white px-1">
                                <Image
                                    height={64}
                                    width={64}
                                    alt="statements"
                                    src="/images/Fields/Letter Opened.svg"
                                    priority
                                />
                                <h1 className="text-xl font-medium text-mainTextColor text-center px-5">
                                    Letter of Recommendation
                                </h1>
                            </div>
                            <div className="custom-shadow rounded-[10px] py-7 flex flex-col gap-y-5 items-center bg-white px-1">
                                <Image
                                    height={64}
                                    width={64}
                                    alt="statements"
                                    src="/images/Fields/Documents Minimalistic.svg"
                                    priority
                                />
                                <h1 className="text-xl font-medium text-mainTextColor text-center px-5">
                                    Student Visa Application
                                </h1>
                            </div>
                            <div className="custom-shadow rounded-[10px] py-7 flex flex-col gap-y-5 items-center bg-white px-1">
                                <Image
                                    height={64}
                                    width={64}
                                    alt="statements"
                                    src="/images/Fields/Document Add.svg"
                                    priority
                                />
                                <h1 className="text-xl font-medium text-mainTextColor text-center px-5">
                                    Admission Essay Writing
                                </h1>
                            </div>
                            <div className="custom-shadow rounded-[10px] py-7 flex flex-col gap-y-5 items-center bg-white px-1">
                                <Image
                                    height={64}
                                    width={64}
                                    alt="statements"
                                    src="/images/Fields/User Id.svg"
                                    priority
                                />
                                <h1 className="text-xl font-medium text-mainTextColor text-center px-5">
                                    Student Curriculum Vitae
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-y-16">
                        <div className="flex flex-col gap-y-2 items-center">
                            <h1 className="font-bold text-[36px] text-mainTextColor">
                                How does Counselling Work?
                            </h1>
                            <p className="text-darkGrayColor">
                                Every student is guided from initial college
                                selection all the way up to a successful student
                                visa.
                            </p>
                        </div>
                        <div className="grid grid-cols-6 justify-between relative z-10">
                            <hr className="absolute top-[30%] left-[92px] border-2 border-grayColor w-[80%] 2xl:w-[1400px]" />
                            <div className="flex flex-col gap-[28px] items-center">
                                <div
                                    style={{ border: '3px dotted #717070' }}
                                    className="h-[160px] w-[160px] rounded-full flex items-center justify-center bg-white z-10"
                                >
                                    <Image
                                        height={85.06}
                                        width={77.66}
                                        alt="counselling-work"
                                        src="/images/Fields/Counselling Img 1.svg"
                                        priority
                                    />
                                </div>
                                <h1 className="font-bold text-xl text-darkGrayColor text-center">
                                    Send Academic Documents
                                </h1>
                            </div>
                            <div className="flex flex-col gap-[28px] items-center">
                                <div
                                    style={{ border: '3px dotted #717070' }}
                                    className="h-[160px] w-[160px] rounded-full flex items-center justify-center bg-white z-10"
                                >
                                    <Image
                                        height={91.91}
                                        width={92.91}
                                        alt="counselling-work"
                                        src="/images/Fields/Counselling Img 2.svg"
                                        priority
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
                                    className="h-[160px] w-[160px] rounded-full flex items-center justify-center bg-white z-10"
                                >
                                    <Image
                                        height={89.94}
                                        width={88.52}
                                        alt="counselling-work"
                                        src="/images/Fields/Counselling Img 3.svg"
                                        priority
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
                                    className="h-[160px] w-[160px] rounded-full flex items-center justify-center bg-white z-10"
                                >
                                    <Image
                                        height={90.03}
                                        width={67.52}
                                        alt="counselling-work"
                                        src="/images/Fields/Counselling Img 4.svg"
                                        priority
                                    />
                                </div>
                                <h1 className="font-bold text-xl text-darkGrayColor text-center">
                                    Document Preparation
                                </h1>
                            </div>
                            <div className="flex flex-col gap-[28px] items-center">
                                <div
                                    style={{ border: '3px dotted #717070' }}
                                    className="h-[160px] w-[160px] rounded-full flex items-center justify-center bg-white z-10"
                                >
                                    <Image
                                        height={90.6}
                                        width={89.95}
                                        alt="counselling-work"
                                        src="/images/Fields/Counselling Img 5.svg"
                                        priority
                                    />
                                </div>
                                <h1 className="font-bold text-xl text-darkGrayColor text-center">
                                    Application Submission
                                </h1>
                            </div>
                            <div className="flex flex-col gap-[28px] items-center">
                                <div
                                    style={{ border: '3px dotted #717070' }}
                                    className="h-[160px] w-[160px] rounded-full flex items-center justify-center bg-white z-10"
                                >
                                    <Image
                                        height={90.18}
                                        width={84.67}
                                        alt="counselling-work"
                                        src="/images/Fields/Counselling Img 6.svg"
                                        priority
                                    />
                                </div>
                                <h1 className="font-bold text-xl text-darkGrayColor text-center">
                                    Visa Counselling
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {router.pathname === '/courseDetail' ? (
                ''
            ) : (
                <Image
                    height={314}
                    width={192}
                    alt="counselling-work"
                    className={`absolute left-0 ${
                        router.pathname === '/apply' || router.pathname === '/faq' ? 'top-56' : 'bottom-44'
                    }`}
                    src="/images/Fields/Ellipse 427.svg"
                    priority
                />
            )}
        </div>
    );
};

export default CounselingWork;
