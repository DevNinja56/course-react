import { ROUTES } from '@/config/constant';
import Link from 'next/link';
import React from 'react';
import Logo from '../Logo';

const Footer = () => {
    return (
        <footer className="w-full flex justify-center flex-col print:hidden">
            <div className="translate-y-20 transition-all duration-300 object-cover px-5 md:px-0 relative w-full md:w-10/12 mx-auto">
                <div className="z-10 w-full relative py-12 lg:py-16">
                    <img
                        height={256}
                        width={1160}
                        alt="footer img"
                        className="rounded-lg object-cover  w-full h-full absolute top-0 left-0 z-[-1]"
                        src="/images/Frame 608.svg"
                    />
                    <div className="w-[84%] mx-auto flex flex-col md:flex-row items-center font-black justify-between">
                        <h1 className="text-white text-[28px] md:text-[32px] lg:text-5xl leading-10 md:text-start text-center mb-6 lg:mb-0">
                            Want to study <br /> in the UK?
                        </h1>

                        <Link
                            href={ROUTES.FILTER_COURSE}
                            className="bg-white py-[13px] md:py-5 px-5 md:px-7 rounded-md text-mainTextColor text-xs"
                        >
                            Find Your Course
                        </Link>
                    </div>
                </div>
            </div>

            <div className={`bg-footerBgColor ${'pt-32'}`}>
                <div className="w-full md:w-10/12 mx-auto pb-10">
                    <div className="container mx-auto px-5 md:px-2 flex justify-between lg:items-start flex-wrap">
                        <div className="flex flex-col md:flex-row lg:flex-col items-start md:items-center lg:items-start md:justify-between w-full lg:w-[28%] mb-8">
                            <div className="px-2 lg:px-3">
                                <div className="mb-5">
                                    <Logo />
                                </div>
                                <p className="text-lightGrayColor mb-6 md:mb-0 lg:mb-10 text-xs">
                                    Great lesson ideas and lesson plans for ESL
                                    teachers! Educators can customize lesson
                                    plans to best.
                                </p>
                            </div>
                            <div className="flex gap-x-5 items-center px-2">
                                <div className="h-10 w-10 rounded-[5px] bg-facebookBgColor flex items-center justify-center">
                                    <img
                                        height={19.83}
                                        width={10.97}
                                        alt="facebook logo"
                                        src="/images/Facebook.svg"
                                    />
                                </div>
                                <div className="h-10 w-10 rounded-[5px] bg-twitterBgColor flex items-center justify-center">
                                    <img
                                        height={16.04}
                                        width={19.54}
                                        alt="twitter logo"
                                        src="/images/twitter.svg"
                                    />
                                </div>
                                <div className="h-10 w-10 rounded-[5px] bg-telegramBgColor flex items-center justify-center">
                                    <img
                                        height={16}
                                        width={19}
                                        alt="telegram logo"
                                        src="/images/telegram.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-8/12 xl:w-[45%] flex justify-between flex-wrap pl-2">
                            <div className="flex flex-col w-full md:w-auto mb-8">
                                <h1 className="pt-[15px] pb-4 text-textLightBlackColor text-sm font-extrabold">
                                    QUICK LINKS
                                </h1>
                                <ul className="text-lightGrayColor">
                                    <Link href={ROUTES.FILTER_COURSE}>
                                        <li className="pt-[9px] pb-[10px] text-xs">
                                            Find Courses
                                        </li>
                                    </Link>
                                    <Link href={ROUTES.INSTITUTES}>
                                        <li className="pt-[9px] pb-[10px] text-xs">
                                            Find Institutions
                                        </li>
                                    </Link>
                                    <Link href={ROUTES.FILTER_SCHOLARSHIP}>
                                        <li className="pt-[9px] pb-[10px] text-xs">
                                            All Scholarships
                                        </li>
                                    </Link>
                                    <Link href={ROUTES.UCAS}>
                                        <li className="pt-[9px] pb-[10px] text-xs">
                                            UCAS Calculator
                                        </li>
                                    </Link>
                                    <Link href={ROUTES.BLOGS}>
                                        <li className="pt-[9px] pb-[10px] text-xs">
                                            Blogs
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                            <div className="flex flex-col w-full md:w-auto mb-8">
                                <h1 className="pt-[15px] pb-4 text-textLightBlackColor text-sm font-extrabold">
                                    Learn More
                                </h1>
                                <ul className="text-lightGrayColor">
                                    <Link href={ROUTES.SMART_MATCH}>
                                        <li className="pt-[9px] pb-[10px] text-xs">
                                            How To Use SmartMatch
                                        </li>
                                    </Link>
                                    <Link href={ROUTES.DISCOVER}>
                                        <li className="pt-[9px] pb-[10px] text-xs">
                                            How To Search a Course
                                        </li>
                                    </Link>
                                    <Link href={ROUTES.LOCAL_ENTRY}>
                                        <li className="pt-[9px] pb-[10px] text-xs">
                                            Local Entry Requirements
                                        </li>
                                    </Link>
                                    <Link href={ROUTES.EXPERT_COUNSELLING}>
                                        <li className="pt-[9px] pb-[10px] text-xs">
                                            Expert Counselling Advise
                                        </li>
                                    </Link>
                                    <Link href={ROUTES.BANK_STATEMENT}>
                                        <li className="pt-[9px] pb-[10px] text-xs">
                                            Bank Statement Calculator
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                            <div className="flex flex-col w-full md:w-auto mb-8">
                                <h1 className="pt-[15px] pb-4 text-textLightBlackColor text-sm font-extrabold">
                                    SUPPORT
                                </h1>
                                <ul className="text-lightGrayColor">
                                    <Link href={ROUTES.FAQ}>
                                        <li className="pt-[9px] pb-[10px] text-xs">
                                            FAQ&lsquo;s
                                        </li>
                                    </Link>
                                    <Link href={ROUTES.ABOUT_US}>
                                        <li className="pt-[9px] pb-[10px] text-xs">
                                            About Us
                                        </li>
                                    </Link>
                                    <Link href={ROUTES.CONTACT_US}>
                                        <li className="pt-[9px] pb-[10px] text-xs">
                                            Contact Us
                                        </li>
                                    </Link>

                                    <Link
                                        href={
                                            ROUTES.PRIVACY_POLICY_TERMS_AND_CONDITION
                                        }
                                    >
                                        <li className="pt-[9px] pb-[10px] text-xs">
                                            Privacy Policy - Terms & Conditions
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-borderColor py-6 w-full flex justify-center items-center">
                    <p className="text-lightGrayColor text-xs">
                        Copyright ©{new Date().getFullYear()} Course Options
                        All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
