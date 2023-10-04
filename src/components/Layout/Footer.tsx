import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className="bg-footerBgColor w-full flex justify-center flex-col">
            <div className="w-full">
                <div className="mt-[-110px] relative max-w-[1100px] 2xl:max-w-[2280px] flex items-center mb-36 lg:mb-60 2xl:mb-[200px] transition-all duration-300 mx-auto">
                    <Image
                        className="rounded-[10px] w-full absolute top-0 left-0"
                        height={256}
                        width={1160}
                        alt="footer img"
                        src="/images/Frame 608.svg"
                    />
                    <div className="z-10 w-full flex items-center font-black px-20 pt-16 justify-between h-auto 2xl:h-[420px]">
                        <h1 className="text-white text-4xl lg:text-5xl">
                            Want to study at Online
                            <br /> program ?
                        </h1>
                        <Link href="/apply">
                            <button className="bg-white py-4 lg:py-[21px] px-8 lg:px-[51px] rounded-[5px] text-mainTextColor">
                                Apply Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full pb-10">
                <div className="max-w-[1180px] 2xl:max-w-[2300px] mx-auto px-2 flex justify-between">
                    <div className="flex flex-col w-[420px]">
                        <Image
                            className="mb-7"
                            height={50}
                            width={220.01}
                            alt="footer logo"
                            src="/images/courseoptionslogo 1.svg"
                        />
                        <p className="px-[14px] text-lightGrayColor mb-12">
                            Great lesson ideas and lesson plans for ESL
                            teachers! Educators can customize lesson plans to
                            best.
                        </p>
                        <div className="flex gap-x-5 items-center px-[14px]">
                            <div className="h-10 w-10 rounded-[5px] bg-facebookBgColor flex items-center justify-center">
                                <Image
                                    height={19.83}
                                    width={10.97}
                                    alt="facebook logo"
                                    src="/images/Facebook.svg"
                                />
                            </div>
                            <div className="h-10 w-10 rounded-[5px] bg-twitterBgColor flex items-center justify-center">
                                <Image
                                    height={16.04}
                                    width={19.54}
                                    alt="twitter logo"
                                    src="/images/twitter.svg"
                                />
                            </div>
                            <div className="h-10 w-10 rounded-[5px] bg-telegramBgColor flex items-center justify-center">
                                <Image
                                    height={16}
                                    width={19}
                                    alt="telegram logo"
                                    src="/images/telegram.svg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="pt-[15px] pb-4 text-textLightBlackColor text-lg font-extrabold">
                            STUDY ABROAD
                        </h1>
                        <ul className="text-lightGrayColor">
                            <li className="pt-[9px] pb-[10px]">Australia</li>
                            <li className="pt-[9px] pb-[10px]">
                                United Kingdom
                            </li>
                            <li className="pt-[9px] pb-[10px]">USA</li>
                            <li className="pt-[9px] pb-[10px]">New Zealand</li>
                            <li className="pt-[9px] pb-[10px]">Ireland</li>
                            <li className="pt-[9px] pb-[10px]">Singapore</li>
                            <li className="pt-[9px] pb-[10px]">View all</li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="pt-[15px] pb-4 text-textLightBlackColor text-lg font-extrabold">
                            QUICK LINKS
                        </h1>
                        <ul className="text-lightGrayColor">
                            <li className="pt-[9px] pb-[10px]">
                                B2B - Promotional Campaign
                            </li>
                            <li className="pt-[9px] pb-[10px]">Agents CRM</li>
                            <li className="pt-[9px] pb-[10px]">
                                Find Consultants
                            </li>
                            <Link href="/universities">
                                <li className="pt-[9px] pb-[10px]">
                                    Find Institutions
                                </li>
                            </Link>
                            <Link href="/fields">
                                <li className="pt-[9px] pb-[10px]">
                                    Find Courses
                                </li>
                            </Link>
                            <Link href="/countries">
                                <li className="pt-[9px] pb-[10px]">
                                    Find Country
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="pt-[15px] pb-4 text-textLightBlackColor text-lg font-extrabold">
                            SUPPORT
                        </h1>
                        <ul className="text-lightGrayColor">
                            <Link href="/aboutUs">
                                <li className="pt-[9px] pb-[10px]">About Us</li>
                            </Link>
                            <Link href="/contactUs">
                                <li className="pt-[9px] pb-[10px]">
                                    Contact Us
                                </li>
                            </Link>
                            <Link href="/faq">
                                <li className="pt-[9px] pb-[10px]">
                                    FAQ&lsquo;s
                                </li>
                            </Link>
                            <Link href="/privacyPolicy">
                                <li className="pt-[9px] pb-[10px]">
                                    Privacy Policy
                                </li>
                            </Link>
                            <Link href="/t&c">
                                <li className="pt-[9px] pb-[10px]">
                                    Terms and Condition
                                </li>
                            </Link>
                            <Link href="/blog">
                                <li className="pt-[9px] pb-[10px]">Blogs</li>
                            </Link>
                            <li className="pt-[9px] pb-[10px]">Book a Demo</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border border-borderColor py-8 w-full flex justify-center items-center">
                <p className="text-lightGrayColor">
                    Copyright © 2023 Educo. All Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
