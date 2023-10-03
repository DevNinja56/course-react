import CounselingWork from '@/components/CounselingWork/CounselingWork';
import Testimonal from '@/components/Testimonal/Testimonal';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <>
            <div className="w-full flex items-center justify-between h-[200px] mt-[100px] bg-white mb-12">
                <Image
                    height={193}
                    width={193}
                    alt="aboutUs-round"
                    className="mt-[-200px] ml-[-8px]"
                    src="/images/profileImages/Ellipse 418.svg"
                    priority
                />
                <div className="flex flex-col items-center">
                    <h1 className="text-mainTextColor text-[48px] font-bold">
                        About Us
                    </h1>
                    <p className="text-aboutUsTextColor text-[23px]">
                        Check out the details below
                    </p>
                </div>
                <Image
                    height={235}
                    width={100}
                    alt="aboutUs-round-2"
                    className="mt-60"
                    src="/images/Fields/Frame 691.svg"
                    priority
                />
            </div>
            <div className="w-full pb-20">
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-2 2xl:px-8 transition-all duration-300">
                    <div className="flex items-center gap-[70px]">
                        <Image
                            height={406}
                            width={465}
                            alt="mainImg"
                            className="rounded-[10px] custom-shadow mb-24"
                            src="/images/About us/Main Img 1.png"
                            priority
                        />
                        <div className="flex flex-col gap-y-8">
                            <div className="flex flex-col gap-y-2">
                                <p className="text-blueColor text-xl font-bold">
                                    Our Company
                                </p>
                                <h1 className="font-bold text-[36px] leading-10">
                                    A dynamic Company with talented people
                                </h1>
                            </div>
                            <p className="text-darkGrayColor text-sm leading-6">
                                Times Course Finder (TCF) has been created as a
                                bridge between International Students and Global
                                Universities. The whole process of finding the
                                availability of your course, its complete
                                details including fee, deadlines, and
                                scholarships, can be quite cumbersome and
                                time-consuming.
                            </p>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[126px] mb-40">
                        <div className="flex flex-col items-center gap-[25px] w-full">
                            <Image
                                height={206.97}
                                width={303}
                                alt="plant"
                                src="/images/About us/mission.svg"
                                priority
                            />
                            <div className="flex flex-col items-center gap-y-2">
                                <h1 className="text-xl font-bold text-textLightBlackColor">
                                    Our Mission
                                </h1>
                                <p className="leading-6 text-grayColor text-center text-sm">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Qui-vere falsone quaerere
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-[25px] w-full">
                            <Image
                                height={206.97}
                                width={303}
                                alt="plant-2"
                                src="/images/About us/vision.svg"
                                priority
                            />
                            <div className="flex flex-col items-center gap-y-2">
                                <h1 className="text-xl font-bold text-textLightBlackColor">
                                    Our Vision
                                </h1>
                                <p className="leading-6 text-grayColor text-center text-sm">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Qui-vere falsone quaerere
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-[25px] w-full">
                            <Image
                                height={206.97}
                                width={303}
                                alt="plant-3"
                                src="/images/About us/values.svg"
                                priority
                            />
                            <div className="flex flex-col items-center gap-y-2">
                                <h1 className="text-xl font-bold text-textLightBlackColor">
                                    Our Values
                                </h1>
                                <p className="leading-6 text-grayColor text-center text-sm">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Qui-vere falsone quaerere
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-[2px]">
                        <Image
                            height={187}
                            width={290}
                            alt="main-team-img"
                            className="rounded-t-[1px]"
                            src="/images/About us/Rectangle 3648.svg"
                        />
                        <Image
                            height={187}
                            width={290}
                            alt="main-team-img-2"
                            className="rounded-t-[1px]"
                            src="/images/About us/Rectangle 3649.svg"
                        />
                        <Image
                            height={187}
                            width={500}
                            alt="main-team-img-3"
                            className="rounded-t-[1px] object-cover"
                            src="/images/About us/Rectangle 3650.svg"
                        />
                        <Image
                            height={187}
                            width={290}
                            alt="main-team-img-4"
                            className="rounded-t-[1px]"
                            src="/images/About us/Rectangle 3651.svg"
                        />
                        <Image
                            height={187}
                            width={500}
                            alt="main-team-img-5"
                            className="rounded-t-[1px] object-cover"
                            src="/images/About us/Rectangle 3653.svg"
                        />
                        <Image
                            height={187}
                            width={290}
                            alt="main-team-img-6"
                            className="rounded-t-[1px]"
                            src="/images/About us/Rectangle 3652.svg"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-talentedTeamBgColor w-full pt-16 pb-20 relative">
                <Image
                    height={170}
                    width={170}
                    alt="aboutUs-round-3"
                    className="absolute left-0 top-[-75px]"
                    src="/images/About us/TeamRoundImg.svg"
                    priority
                />
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-2 2xl:px-8 transition-all duration-300 flex flex-col gap-y-20 mb-8">
                    <div className="flex flex-col items-center gap-[35px]">
                        <div className="flex flex-col items-center">
                            <p className="text-blueColor text-[23px] font-bold">
                                A Talented Team
                            </p>
                            <h1 className="text-mainTextColor text-[40px] font-extrabold">
                                Meet our leadership team
                            </h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[29px] w-full">
                            <div className="flex flex-col gap-3">
                                <Image
                                    height={224.43}
                                    width={268}
                                    alt="userImg"
                                    src="/images/About us/1 (2).svg"
                                    priority
                                />
                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-y-1">
                                        <h1 className="text-xl font-bold text-mainTextColor">
                                            John Gordo
                                        </h1>
                                        <p className="text-grayColor">
                                            CEO & Founder
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="h-[32px] w-[32px] border border-talentedTeamBorderColor flex items-center justify-center rounded-full">
                                            <Image
                                                height={13.85}
                                                width={14.49}
                                                alt="linked-in"
                                                src="/images/About us/linkedInIcon.svg"
                                                priority
                                            />
                                        </div>
                                        <div className="h-[32px] w-[32px] border border-talentedTeamBorderColor flex items-center justify-center rounded-full">
                                            <Image
                                                height={15.33}
                                                width={16}
                                                alt="git-hub"
                                                src="/images/About us/gitHubIcon.svg"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Image
                                    height={224.1}
                                    width={268}
                                    alt="userImg-2"
                                    src="/images/About us/3 (2).svg"
                                    priority
                                />
                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-y-1">
                                        <h1 className="text-xl font-bold text-mainTextColor">
                                            Mike Myers
                                        </h1>
                                        <p className="text-grayColor">
                                            CTO & Founder
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="h-[32px] w-[32px] border border-talentedTeamBorderColor flex items-center justify-center rounded-full">
                                            <Image
                                                height={13.85}
                                                width={14.49}
                                                alt="linked-in"
                                                src="/images/About us/linkedInIcon.svg"
                                                priority
                                            />
                                        </div>
                                        <div className="h-[32px] w-[32px] border border-talentedTeamBorderColor flex items-center justify-center rounded-full">
                                            <Image
                                                height={15.33}
                                                width={16}
                                                alt="git-hub"
                                                src="/images/About us/gitHubIcon.svg"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Image
                                    height={224.1}
                                    width={268}
                                    alt="userImg-3"
                                    src="/images/About us/2 (2).svg"
                                    priority
                                />
                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-y-1">
                                        <h1 className="text-xl font-bold text-mainTextColor">
                                            Angela Birkin
                                        </h1>
                                        <p className="text-grayColor">
                                            Business Analyst
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="h-[32px] w-[32px] border border-talentedTeamBorderColor flex items-center justify-center rounded-full">
                                            <Image
                                                height={13.85}
                                                width={14.49}
                                                alt="linked-in"
                                                src="/images/About us/linkedInIcon.svg"
                                                priority
                                            />
                                        </div>
                                        <div className="h-[32px] w-[32px] border border-talentedTeamBorderColor flex items-center justify-center rounded-full">
                                            <Image
                                                height={15.33}
                                                width={16}
                                                alt="git-hub"
                                                src="/images/About us/gitHubIcon.svg"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Image
                                    height={224.1}
                                    width={268}
                                    alt="userImg-4"
                                    src="/images/About us/4 (1).svg"
                                    priority
                                />
                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-y-1">
                                        <h1 className="text-xl font-bold text-mainTextColor">
                                            Ron Lopez
                                        </h1>
                                        <p className="text-grayColor">
                                            Software Architect
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="h-[32px] w-[32px] border border-talentedTeamBorderColor flex items-center justify-center rounded-full">
                                            <Image
                                                height={13.85}
                                                width={14.49}
                                                alt="linked-in"
                                                src="/images/About us/linkedInIcon.svg"
                                                priority
                                            />
                                        </div>
                                        <div className="h-[32px] w-[32px] border border-talentedTeamBorderColor flex items-center justify-center rounded-full">
                                            <Image
                                                height={15.33}
                                                width={16}
                                                alt="git-hub"
                                                src="/images/About us/gitHubIcon.svg"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image
                        height={92}
                        width={92}
                        alt="aboutUs-round-4"
                        className="right-11 absolute top-[54%]"
                        src="/images/About us/Team RoundingImg 2.svg"
                        priority
                    />
                    <div className="flex flex-col gap-[50px] w-full">
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-1">
                                <p className="font-bold text-[23px] text-blueColor">
                                    Why choose Us
                                </p>
                                <h1 className="text-mainTextColor font-extrabold text-[40px]">
                                    Our data scale powers your success
                                </h1>
                            </div>
                            <p className="text-darkGrayColor w-[577px]">
                                Our immense data scale feeds our machine
                                learning and algorithms, so you can rest assured
                                that every decision our AI makes is a smart one.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[106px] w-full">
                            <div className="w-full">
                                <h1
                                    style={{ lineHeight: '76.8px' }}
                                    className="text-[64px] font-bold text-mainTextColor"
                                >
                                    40TB
                                </h1>
                                <p className="text-darkGrayColor text-sm">
                                    Of annual data processed
                                </p>
                            </div>
                            <div className="w-full">
                                <h1
                                    style={{ lineHeight: '76.8px' }}
                                    className="text-[64px] font-bold text-mainTextColor"
                                >
                                    $7B
                                </h1>
                                <p className="text-darkGrayColor text-sm">
                                    Amazon & Walmart.com sales optimized
                                    annually
                                </p>
                            </div>
                            <div className="w-full">
                                <h1
                                    style={{ lineHeight: '76.8px' }}
                                    className="text-[64px] font-bold text-mainTextColor"
                                >
                                    750M
                                </h1>
                                <p className="text-darkGrayColor text-sm">
                                    Monthly bid changes executed
                                </p>
                            </div>
                            <div className="w-full">
                                <h1
                                    style={{ lineHeight: '76.8px' }}
                                    className="text-[64px] font-bold text-mainTextColor"
                                >
                                    $450M
                                </h1>
                                <p className="text-darkGrayColor text-sm">
                                    Managed ad spend annually on automated
                                    campaigns
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    height={189}
                    width={1440}
                    alt="curved-div"
                    className="absolute mt-2"
                    src="/images/About us/CurvedDiv.svg"
                    priority
                />
            </div>
            <CounselingWork />
            <Testimonal />
        </>
    );
};

export default AboutUs;
