import Image from 'next/image';
import React from 'react';

const DegreeLevelFilter = () => {
    return (
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
                            Undergraduate (644)
                        </p>
                    </div>
                    <Image
                        height={20}
                        width={20}
                        alt="right-arrow"
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
    );
};

export default DegreeLevelFilter;
