import { ROUTES } from '@/config/constant';
import Link from 'next/link';
import React from 'react';
import Logo from '../Logo';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';

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
                            <div className="flex items-center px-2">
                                <div className="h-8 w-8 rounded-[5px] bg-facebookBgColor flex items-center justify-center">
                                    <FaFacebookF className="text-sm text-white/90" />
                                </div>
                                <div className="h-8 w-8 rounded-[5px] bg-black flex items-center justify-center ml-4">
                                    <FaXTwitter className="text-xl text-white/90" />
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width={42}
                                    height={42}
                                    viewBox="0 0 48 48"
                                    className="ml-3"
                                >
                                    <radialGradient
                                        id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                                        cx="19.38"
                                        cy="42.035"
                                        r="44.899"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset={0} stopColor="#fd5" />
                                        <stop
                                            offset=".328"
                                            stopColor="#ff543f"
                                        />
                                        <stop
                                            offset=".348"
                                            stopColor="#fc5245"
                                        />
                                        <stop
                                            offset=".504"
                                            stopColor="#e64771"
                                        />
                                        <stop
                                            offset=".643"
                                            stopColor="#d53e91"
                                        />
                                        <stop
                                            offset=".761"
                                            stopColor="#cc39a4"
                                        />
                                        <stop
                                            offset=".841"
                                            stopColor="#c837ab"
                                        />
                                    </radialGradient>
                                    <path
                                        fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                                        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                                    />
                                    <radialGradient
                                        id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                                        cx="11.786"
                                        cy="5.54"
                                        r="29.813"
                                        gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset={0} stopColor="#4168c9" />
                                        <stop
                                            offset=".999"
                                            stopColor="#4168c9"
                                            stopOpacity={0}
                                        />
                                    </radialGradient>
                                    <path
                                        fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                                        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                                    />
                                    <path
                                        fill="#fff"
                                        d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                                    />
                                    <circle
                                        cx="31.5"
                                        cy="16.5"
                                        r="1.5"
                                        fill="#fff"
                                    />
                                    <path
                                        fill="#fff"
                                        d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                                    />
                                </svg>
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
                                            Privacy Policy
                                        </li>
                                    </Link>
                                    <Link
                                        href={
                                            ROUTES.PRIVACY_POLICY_TERMS_AND_CONDITION
                                        }
                                    >
                                        <li className="pt-[9px] pb-[10px] text-xs">
                                            Terms & Conditions
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
