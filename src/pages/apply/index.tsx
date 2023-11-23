import ApplyOnline from '@/components/Apply';
import CounselingWork from '@/components/CounselingWork/CounselingWork';
import Testimonial from '@/components/Testimonial';
import Image from 'next/image';
import React from 'react';

const Apply = () => {
    return (
        <>
            <div className="w-full flex items-center justify-between h-[170px] mt-[100px] bg-profileBgColor overflow-hidden">
                <Image
                    height={180}
                    width={180}
                    alt="privacy-round"
                    className="mt-[-90px] ml-0 hidden lg:block"
                    src="/images/PrivacyPolicy/Ellipse 418.svg"
                    priority
                />
                <div className="mt-[-180px] md:mt-[-120px] ml-[-60px] md:ml-[-40px] block lg:hidden h-32 w-32 rounded-full border-[10px] border-blueColor"></div>
                <div className="flex flex-col items-center">
                    <h1 className="text-mainTextColor text-2xl md:text-[32px] font-extrabold">
                        Apply Now{' '}
                    </h1>
                    <p className="text-base md:text-lg text-aboutUsTextColor">
                        Check out the details below
                    </p>
                </div>
                <Image
                    height={119}
                    width={100}
                    alt="privacy-round-2"
                    className="mt-12 hidden lg:block"
                    src="/images/profileImages/Frame 691.svg"
                    priority
                />
                <div className="mt-44 md:mt-32 mr-[-70px] md:mr-[-40px] block lg:hidden h-32 w-32 rounded-full border-[10px] border-blueColor"></div>
            </div>
            <div className="w-full pb-28">
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-5 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300 pt-16">
                    <div className="flex flex-col gap-y-8 mb-9">
                        <p className="text-darkGrayColor leading-6">
                            Course Options (CP) has been created as a bridge
                            between International Students and Global
                            Universities. The whole process of finding the
                            availability of your course, its complete details
                            including fee, deadlines, and scholarships, can be
                            quite cumbersome and time-consuming.
                        </p>
                        <div className="gap-5 flex flex-col">
                            <div className="flex gap-3 items-center">
                                <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                                <p className="text-darkGrayColor leading-6">
                                    You may avail our service of a free
                                    assessment where we analyze your profile and
                                    assist you in choosing and finalizing your
                                    course.
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                                <p className="text-darkGrayColor leading-6">
                                    To begin with, you need to create and sign
                                    in to your account. After discovering the
                                    courses you are interested in, you can
                                    compare them in order to help you shortlist
                                    your final options.
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                                <p className="text-darkGrayColor leading-6">
                                    You may avail our service of a free
                                    assessment where we analyze your profile and
                                    assist you in choosing and finalizing your
                                    course.
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="font-black text-textLightBlackColor mb-8">
                        Premium Service
                    </p>
                    <p className="text-darkGrayColor leading-6 mb-8">
                        To get personalized and detailed guidance, you can also
                        avail our premium service where our experts will guide
                        you through the whole process of course selection,
                        admission application, visa filing & interview prep,
                        accommodation arrangement, and booking flights.
                    </p>
                    <div className="gap-5 flex flex-col mb-8">
                        <div className="flex gap-3 items-center">
                            <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                            <p className="text-darkGrayColor leading-6">
                                This will enable you to sit back and relax while
                                we make sure that your admission and visa
                                application is complete, errorless, and
                                submitted timely.
                            </p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                            <p className="text-darkGrayColor leading-6">
                                Within 24 hours of applying, a dedicated expert
                                counselor will be assigned to you.
                            </p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                            <p className="text-darkGrayColor leading-6">
                                In case of any issue, you may claim a refund.
                                Please read our Refund and Cancellation policy
                                here.
                            </p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                            <p className="text-darkGrayColor leading-6">
                                Please bear in mind that some universities do
                                charge a mandatory admission application fee,
                                whereas other don’t.
                            </p>
                        </div>
                    </div>
                    <div className="w-full rounded-[10px] border-2 border-termsanduseBorderColor p-4 md:p-6 lg:py-10 lg:px-20 flex flex-col gap-y-4 bg-profileBgColor items-center mb-12 text-center">
                        <p className="text-darkGrayColor text-center text-[15px]">
                            Students residing in Pakistan may avail our special
                            offer of getting their admission application fee
                            waived off*, by just paying us a visit at any of our
                            student support{' '}
                            <span className="font-bold">offices.</span>
                        </p>
                    </div>
                    <p className="text-darkGrayColor leading-6">
                        Once you are ready to apply, you will be taken to a
                        secured payment gateway where you can pay via
                        Debit/Credit card. Please note that we do not store your
                        card information in any way. Contact us to find out more
                        about the pricing plans of our premium service.
                    </p>
                </div>
            </div>
            <div className="w-full mb-40 2xl:mb-[600px]">
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-5 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300">
                    <div className="w-full flex flex-col items-center mb-12">
                        <p className="text-blueColor font-bold text-xl md:text-[23px]">
                            Fill the form
                        </p>
                        <h1 className="text-mainTextColor text-[32px] md:text-[48px] font-extrabold">
                            Apply Online
                        </h1>
                    </div>
                    <ApplyOnline />
                </div>
            </div>
            <CounselingWork />
            <Testimonial />
        </>
    );
};

export default Apply;
