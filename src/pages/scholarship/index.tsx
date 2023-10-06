import SelectOptionDropDown from '@/components/DropDown/SelectOptionDropDown';
import FilterSideBar from '@/components/FilterSideBar/FilterSideBar';
import Card from '@/components/Scholarship/Card';
import Slider from '@/components/Slider/Slider';
import Testimonal from '@/components/Testimonal/Testimonal';
import Image from 'next/image';
import React, { useState } from 'react';

const Scholarship = () => {
    const [filterSideBar, setFilterSideBar] = useState<boolean>();

    const onShowFilterSidebar = () => {
        setFilterSideBar(!filterSideBar);
    };

    return (
        <>
            <div className="w-full flex items-center justify-center mt-[100px] bg-profileBgColor py-20 relative mb-10">
                <Image
                    height={193}
                    width={191}
                    alt="blog-round"
                    className="absolute top-[-20px] left-[-20px] lg:top-0 lg:left-0 h-[84px] w-[86px] lg:h-[193px] lg:w-[191px]"
                    src="/images/Blogs/Frame 642.svg"
                    priority
                />
                <div className="flex flex-col gap-y-8 items-center z-10">
                    <div className="flex flex-col justify-center items-center gap-y-1">
                        <p className="text-darkGrayColor text-lg md:text-xl font-bold">
                            Scholarship
                        </p>
                        <h1 className="text-mainTextColor text-2xl md:text-[32px] font-extrabold w-auto md:w-[519px] text-center">
                            Explore thousands of scholarships across the world
                        </h1>
                    </div>
                    <div className="relative">
                        <div className="relative">
                            <input
                                className="custom-shadow rounded-[10px] py-[17px] md:py-5 pl-[50px] outline-none text-base text-mainTextColor w-[80vw] md:w-auto md:pr-[380px]"
                                placeholder="Type here"
                            />
                            <Image
                                height={20}
                                width={20}
                                alt="search"
                                className="absolute top-[21px] left-6"
                                src="/images/Scholarships/search.svg"
                                priority
                            />
                        </div>
                        <button className="py-[11px] px-[39px] absolute right-3 top-[11px] bg-blueColor rounded-[5px] text-white text-sm">
                            Search
                        </button>
                    </div>
                </div>
                <Image
                    height={193}
                    width={191}
                    alt="blog-round-2"
                    className="absolute bottom-0 right-0 h-[84px] w-[86px] lg:h-[193px] lg:w-[191px]"
                    src="/images/Blogs/Frame 643.svg"
                />
            </div>
            <div className="w-full pb-28">
                <div className="max-w-[1200px] 2xl:max-w-[2400px] mx-auto px-5 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300 flex justify-between">
                    <div
                        style={{ border: '3px solid #eaf2ff' }}
                        className="rounded-[15px] w-[24%] py-4 pb-5 h-fit hidden lg:block"
                    >
                        <div className="flex justify-between items-center mb-8 px-4">
                            <h1 className="text-[23px] text-mainTextColor font-bold">
                                Filters
                            </h1>
                            <p className="text-sm text-darkGrayColor">
                                Reset All
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-6">
                            <div className="flex flex-col gap-y-3">
                                <div className="flex justify-between items-center px-4">
                                    <h1 className="text-lg text-darkGrayColor font-medium">
                                        Countries
                                    </h1>
                                    <Image
                                        height={24}
                                        width={24}
                                        alt="search"
                                        src="/images/Scholarships/Group 7678.svg"
                                        priority
                                    />
                                </div>
                                <div className="flex flex-col gap-y-1 h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Australia (918)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Austria (18)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Azerbaijan (1)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Belgium (19)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            China (29)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Denmark (3)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Hungary (9)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Austria (18)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Azerbaijan (1)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Belgium (19)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Belgium (19)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4">
                                <hr className="border border-borderColor" />
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <h1 className="text-lg text-darkGrayColor font-medium px-4">
                                    Degree Level
                                </h1>
                                <div className="flex flex-col gap-y-1">
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 group flex justify-between items-center">
                                        <div className="flex gap-x-2">
                                            <label className="relative flex items-center">
                                                <input
                                                    name="input_box_1"
                                                    type="checkbox"
                                                    className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                                />
                                                <svg
                                                    className="absolute left-1 cursor-pointer"
                                                    width="13"
                                                    height="10"
                                                    viewBox="0 0 13 10"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1 4L4 8.5L12 1"
                                                        className="stroke-white cursor-pointer"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </label>
                                            <p className="text-sm text-grayColor group-hover:text-blueColor">
                                                Undergradute (644)
                                            </p>
                                        </div>
                                        <Image
                                            height={20}
                                            width={20}
                                            alt="arrow-right"
                                            src="/images/Scholarships/chevron-right.svg"
                                            priority
                                        />
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-9 group flex gap-x-2">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Bachelors (605)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-9 group flex gap-x-2">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Top Up Degree (0)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-9 group flex gap-x-2">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Associate Degree (1)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-9 group flex gap-x-2">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Advanced Diploma (0)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-9 group flex gap-x-2">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Higher National Diploma (0)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-9 group flex gap-x-2">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Diploma (30)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-9 group flex gap-x-2">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Certificate (2)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 group flex justify-between items-center">
                                        <div className="flex gap-x-2">
                                            <label className="relative flex items-center">
                                                <input
                                                    name="input_box_1"
                                                    type="checkbox"
                                                    className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                                />
                                                <svg
                                                    className="absolute left-1 cursor-pointer"
                                                    width="13"
                                                    height="10"
                                                    viewBox="0 0 13 10"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1 4L4 8.5L12 1"
                                                        className="stroke-white cursor-pointer"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </label>
                                            <p className="text-sm text-grayColor group-hover:text-blueColor">
                                                Postgradute (528)
                                            </p>
                                        </div>
                                        <Image
                                            height={20}
                                            width={20}
                                            alt="arrow-right"
                                            src="/images/Scholarships/chevron-right.svg"
                                            priority
                                        />
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 group flex justify-between items-center">
                                        <div className="flex gap-x-2">
                                            <label className="relative flex items-center">
                                                <input
                                                    name="input_box_1"
                                                    type="checkbox"
                                                    className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                                />
                                                <svg
                                                    className="absolute left-1 cursor-pointer"
                                                    width="13"
                                                    height="10"
                                                    viewBox="0 0 13 10"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1 4L4 8.5L12 1"
                                                        className="stroke-white cursor-pointer"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </label>
                                            <p className="text-sm text-grayColor group-hover:text-blueColor">
                                                Postgradute by Research (170)
                                            </p>
                                        </div>
                                        <Image
                                            height={20}
                                            width={20}
                                            alt="arrow-right"
                                            src="/images/Scholarships/chevron-right.svg"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="px-4">
                                <hr className="border border-borderColor" />
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <div className="flex justify-between items-center px-4">
                                    <h1 className="text-lg text-darkGrayColor font-medium">
                                        Disciplines
                                    </h1>
                                    <Image
                                        height={20}
                                        width={20}
                                        alt="arrow-right"
                                        src="/images/Scholarships/chevron-right.svg"
                                        priority
                                    />
                                </div>
                                <div className="flex flex-col gap-y-1 h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Tourism & Hospitality (418)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Architecture (406)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Social & Behavioural Science (440)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Law (448)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Health & Medicine (470)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Physical Science & Math (485)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Life Sciences (504)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Engineering & Technology (514)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Business & Management (519)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Belgium (19)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Belgium (19)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4">
                                <hr className="border border-borderColor" />
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <div className="flex justify-between items-center px-4">
                                    <h1 className="text-lg text-darkGrayColor font-medium">
                                        Scholarship Type
                                    </h1>
                                    <Image
                                        height={24}
                                        width={24}
                                        alt="search"
                                        src="/images/Scholarships/Group 7678.svg"
                                        priority
                                    />
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Sports (1)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Organisational (9)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Merit (81)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Entrance (32)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Need (19)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Government (47)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            Academic (729)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4">
                                <hr className="border border-borderColor" />
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <div className="flex justify-between items-center px-4">
                                    <h1 className="text-lg text-darkGrayColor font-medium">
                                        Scholarship Type
                                    </h1>
                                    <Image
                                        height={24}
                                        width={24}
                                        alt="search"
                                        src="/images/Scholarships/Group 7678.svg"
                                        priority
                                    />
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            January (24)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            February (11)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            March (44)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            April (33)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            May (56)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            June (42)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            July (54)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4">
                                <hr className="border border-borderColor" />
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <div className="flex justify-between items-center px-4">
                                    <h1 className="text-lg text-darkGrayColor font-medium">
                                        Scholarship Year
                                    </h1>
                                    <Image
                                        height={24}
                                        width={24}
                                        alt="search"
                                        src="/images/Scholarships/Group 7678.svg"
                                        priority
                                    />
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            2023 (206)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            2024 (9)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            2030 (2)
                                        </p>
                                    </div>
                                    <div className="w-full p-[6px] hover:bg-profileBgColor px-4 flex gap-x-2 group">
                                        <label className="relative flex items-center">
                                            <input
                                                name="input_box_1"
                                                type="checkbox"
                                                className="h-5 w-5 rounded-[2px] border border-borderColor cursor-pointer pb-0 group-hover:border-blueColor appearance-none checked:bg-blueColor"
                                            />
                                            <svg
                                                className="absolute left-1 cursor-pointer"
                                                width="13"
                                                height="10"
                                                viewBox="0 0 13 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4L4 8.5L12 1"
                                                    className="stroke-white cursor-pointer"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </label>
                                        <p className="text-sm text-grayColor group-hover:text-blueColor">
                                            2022 (44)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-7 w-full lg:w-[73%]">
                        <div className="flex flex-col gap-y-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="font-bold text-xl md:text-[23px] text-mainTextColor">
                                    918 Results Found
                                </h1>
                                <div className="flex items-center gap-x-4">
                                    <p className="text-grayColor hidden md:block">
                                        Sort by:
                                    </p>
                                    <div className="relative group">
                                        <button className="py-2 px-4 rounded-[5px] border-2 border-scholarshipBorderColor flex items-center gap-x-[6px] text-sm text-darkGrayColor min-w-[110px] md:min-w-fit">
                                            <p className="hidden md:block">
                                                Select Option
                                            </p>
                                            <p className="block md:hidden">
                                                Sort by:
                                            </p>{' '}
                                            <Image
                                                height={20}
                                                width={20}
                                                alt="chaveron-down"
                                                src="/images/Scholarships/chevron-down.svg"
                                                priority
                                            />
                                        </button>
                                        <SelectOptionDropDown />
                                    </div>
                                    <button
                                        onClick={onShowFilterSidebar}
                                        className="p-2 md:py-2 md:px-4 rounded-[5px] bg-blueColor text-white flex items-center gap-x-[6px] text-sm lg:hidden min-w-[36px]"
                                    >
                                        <Image
                                            height={20}
                                            width={20}
                                            alt="filter"
                                            src="/images/Scholarships/Tuning 4.svg"
                                            priority
                                        />
                                        <p className="hidden md:block">
                                            Filters
                                        </p>
                                    </button>
                                    {filterSideBar && (
                                        <FilterSideBar
                                            setFilterSideBar={setFilterSideBar}
                                        />
                                    )}
                                </div>
                            </div>
                            <hr className="border border-scholarshipBorderColor" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-3 px-0 md:px-8 lg:px-0">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                        <div className="w-full flex justify-center">
                            <div className="flex items-center gap-x-6">
                                <button className="h-[39px] w-[39px] rounded-full bg-profileBgColor flex items-center justify-center">
                                    <Image
                                        height={5.56}
                                        width={5.56}
                                        alt="arrow-left"
                                        src="/images/Scholarships/Vector2.svg"
                                        priority
                                    />
                                </button>
                                <p className="font-medium text-darkGrayColor">
                                    1
                                </p>
                                <p className="font-medium border-b border-blueColor text-blueColor">
                                    2
                                </p>
                                <p className="font-medium text-darkGrayColor">
                                    3
                                </p>
                                <p className="font-medium text-darkGrayColor">
                                    ---
                                </p>
                                <p className="font-medium text-darkGrayColor">
                                    67
                                </p>
                                <button className="h-[39px] w-[39px] rounded-full bg-profileBgColor flex items-center justify-center">
                                    <Image
                                        height={5.56}
                                        width={5.56}
                                        alt="arrow-right"
                                        src="/images/Scholarships/Vector.svg"
                                        priority
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full pb-20 2xl:pb-[700px] flex flex-col items-center overflow-hidden">
                <p className="text-[23px] font-bold text-blueColor mb-1">
                    Scholarships
                </p>
                <h1 className="text-textLightBlackColor text-[48px] font-extrabold mb-5 text-center hidden lg:block">
                    Scholarships you may be interested in
                </h1>
                <h1 className="text-mainTextColor text-[48px] font-extrabold mb-5 text-center lg:hidden block">
                    Discover Scholarships{' '}
                </h1>
                <Slider />
            </div>
            <Testimonal />
        </>
    );
};

export default Scholarship;
