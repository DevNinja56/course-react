import Image from 'next/image';
import React from 'react';

interface modalProps {
    setFilterSideBar: (show: boolean) => void;
}

const FilterSideBar = ({ setFilterSideBar }: modalProps) => {
    const onHideSideBar = () => {
        setFilterSideBar(false);
    };
    return (
        <div className="w-full flex lg:hidden">
            <div className="backgroundBlack fixed top-0 left-0 h-[100vh] w-full z-40 flex items-center justify-end">
                <div className="bg-white h-[100%] w-[480px] border-2 border-filterBorderColor">
                    <div className="flex items-center w-full justify-between py-5 custom-shadow px-[35px]">
                        <h1 className="text-[29px] font-bold text-mainTextColor">
                            Filters
                        </h1>
                        <div
                            onClick={onHideSideBar}
                            className="h-[38.33px] w-[38.33px] bg-blueColor flex items-center justify-center rounded-full"
                        >
                            <Image
                                width={9.58}
                                height={9.58}
                                alt="Logo"
                                src="/images/cross.svg"
                                priority
                            />
                        </div>
                    </div>
                    <div className="h-[483px] overflow-y-auto py-[29px] px-[35px]">
                        <div className="w-full flex justify-between items-center mb-7">
                            <h1 className="font-bold text-[23px] text-mainTextColor">
                                Filters
                            </h1>
                            <p className="text-sm text-darkGrayColor">
                                Reset All
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-6">
                            <div className="flex flex-col gap-y-3">
                                <div className="flex justify-between items-center">
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
                </div>
            </div>
        </div>
    );
};

export default FilterSideBar;
