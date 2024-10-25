import { ROUTES } from '@/config/constant';
import Link from 'next/link';
import React from 'react';
import Logo from '../Logo';
import { useUi } from '@/hooks/user-interface';
import { modalType } from '@/store/slices/ui.slice';

const Footer = () => {
    const { updateModal } = useUi();
    return (
        <footer className=" w-full flex justify-center flex-col print:hidden">
            <div className="translate-y-20 transition-all duration-300 object-cover px-5 md:px-[50px] lg:px-0 relative container mx-auto ">
                <div className="z-10 w-full flex flex-col md:flex-row items-center font-black justify-between relative p-8 md:p-12 lg:p-24 ">
                    <img
                        height={256}
                        width={1160}
                        alt="footer img"
                        className="rounded-lg object-cover  w-full h-full absolute top-0 left-0 z-[-1]"
                        src="/images/Frame 608.svg"
                    />
                    <h1 className="text-white text-[28px] md:text-[32px] lg:text-5xl leading-10 md:text-start text-center w-[300px] md:w-[313px] lg:w-[531px] mb-6 lg:mb-0">
                        Want to study at Online program ?
                    </h1>
                    <button
                        onClick={() =>
                            updateModal({
                                type: modalType.start_application,
                                state: {}
                            })
                        }
                        className="bg-white py-[13px] md:py-4 lg:py-[21px] px-[84px] md:px-8 lg:px-[51px] rounded-[5px] text-mainTextColor "
                    >
                        Apply Now
                    </button>
                </div>
            </div>

            <div className={`bg-footerBgColor ${'pt-32'}`}>
                <div className="w-full pb-10">
                    <div className="container mx-auto px-5 md:px-[50px] lg:px-2 flex justify-between lg:items-start flex-wrap">
                        <div className="flex flex-col md:flex-row lg:flex-col items-start md:items-center lg:items-start md:justify-between w-full lg:w-[420px] mb-8">
                            <div className="px-2 lg:px-3">
                                <div className="mb-5">
                                    <Logo />
                                </div>
                                <p className="text-lightGrayColor mb-6 md:mb-0 lg:mb-12 md:w-[500px] lg:w-auto">
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

                        <div className="flex flex-col w-full md:w-auto mb-8">
                            <h1 className="pt-[15px] pb-4 text-textLightBlackColor text-lg font-extrabold">
                                QUICK LINKS
                            </h1>
                            <ul className="text-lightGrayColor">
                                <Link href={ROUTES.FIELDS}>
                                    <li className="pt-[9px] pb-[10px]">
                                        Find Courses
                                    </li>
                                </Link>
                                <Link href={ROUTES.INSTITUTES}>
                                    <li className="pt-[9px] pb-[10px]">
                                        Find Institutions
                                    </li>
                                </Link>
                                <Link href={ROUTES.FILTER_SCHOLARSHIP}>
                                    <li className="pt-[9px] pb-[10px]">
                                        All Scholarships
                                    </li>
                                </Link>
                                <Link href={ROUTES.UCAS}>
                                    <li className="pt-[9px] pb-[10px]">
                                        UCAS Calculator
                                    </li>
                                </Link>
                                <Link href={ROUTES.BLOGS}>
                                    <li className="pt-[9px] pb-[10px]">
                                        Blogs
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div className="flex flex-col w-full md:w-auto mb-8">
                            <h1 className="pt-[15px] pb-4 text-textLightBlackColor text-lg font-extrabold">
                                Learn More
                            </h1>
                            <ul className="text-lightGrayColor">
                                <Link href={ROUTES.SMART_MATCH}>
                                    <li className="pt-[9px] pb-[10px]">
                                        How To Use SmartMatch
                                    </li>
                                </Link>
                                <Link href={ROUTES.FIELDS}>
                                    <li className="pt-[9px] pb-[10px]">
                                        How To Search a Course
                                    </li>
                                </Link>
                                <Link href={ROUTES.INSTITUTES}>
                                    <li className="pt-[9px] pb-[10px]">
                                        Local Entry Requirements
                                    </li>
                                </Link>
                                <Link href={ROUTES.FILTER_SCHOLARSHIP}>
                                    <li className="pt-[9px] pb-[10px]">
                                        Expert Counselling Advise
                                    </li>
                                </Link>
                                <Link href={ROUTES.BLOGS}>
                                    <li className="pt-[9px] pb-[10px]">
                                        Bank Statement Calculator
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div className="flex flex-col w-full md:w-auto mb-8">
                            <h1 className="pt-[15px] pb-4 text-textLightBlackColor text-lg font-extrabold">
                                SUPPORT
                            </h1>
                            <ul className="text-lightGrayColor">
                                <Link href={ROUTES.FAQ}>
                                    <li className="pt-[9px] pb-[10px]">
                                        FAQ&lsquo;s
                                    </li>
                                </Link>
                                <Link href={ROUTES.ABOUT_US}>
                                    <li className="pt-[9px] pb-[10px]">
                                        About Us
                                    </li>
                                </Link>
                                <Link href={ROUTES.CONTACT_US}>
                                    <li className="pt-[9px] pb-[10px]">
                                        Contact Us
                                    </li>
                                </Link>

                                <Link href={ROUTES.PRIVACY_POLICY}>
                                    <li className="pt-[9px] pb-[10px]">
                                        Privacy Policy
                                    </li>
                                </Link>
                                <Link href={ROUTES.TERMS_CONDITION}>
                                    <li className="pt-[9px] pb-[10px]">
                                        Terms and Condition
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border border-borderColor py-8 w-full flex justify-center items-center">
                    <p className="text-lightGrayColor">
                        Copyright ©{new Date().getFullYear()} Course Options
                        All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
