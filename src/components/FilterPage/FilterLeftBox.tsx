import Image from 'next/image';
import React from 'react';
import FilterCheckBOx from './FilterCheckBOx';
import {
    useGetCountriesQuery,
    useGetDisciplineQuery,
    useGetScholarshipQuery
} from '@/store/slices/allRequests';
import { scholarshipMonths, scholarshipYears } from './data';

const FilterLeftBox = () => {
    const { data: countryList } = useGetCountriesQuery();
    const { data: disciplineList } = useGetDisciplineQuery();
    const { data: scholarshipList } = useGetScholarshipQuery();
    return (
        <div
            style={{ border: '3px solid #eaf2ff' }}
            className="rounded-[15px] w-[24%] py-4 pb-5 h-fit"
        >
            <div className="flex justify-between items-center mb-8 px-4">
                <h1 className="text-[23px] text-mainTextColor font-bold">
                    Filters
                </h1>
                <p className="text-sm text-darkGrayColor">Reset All</p>
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
                    <div className="flex flex-col gap-y-1 max-h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                        {countryList?.map((country, i) => (
                            <FilterCheckBOx
                                key={'country--list--' + i}
                                id={country.id}
                                name={country.name}
                            />
                        ))}
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
                <div className="px-4">
                    <hr className="border border-borderColor" />
                </div>
                <div className="flex flex-col gap-y-3">
                    <div className="flex justify-between items-center px-4">
                        <h1 className="text-lg text-darkGrayColor font-medium">
                            Disciplines
                        </h1>
                        <Image
                            height={24}
                            width={24}
                            alt="search"
                            src="/images/Scholarships/Group 7678.svg"
                            priority
                        />
                    </div>
                    <div className="flex flex-col gap-y-1 max-h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                        {disciplineList?.map((discipline, i) => (
                            <FilterCheckBOx
                                key={'country--list--' + i}
                                id={discipline.id}
                                name={discipline.name}
                            />
                        ))}
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
                    </div>
                    <div className="flex flex-col gap-y-1 max-h-[360px]">
                        {scholarshipList?.map((scholarship, i) => (
                            <FilterCheckBOx
                                key={'country--list--' + i}
                                id={scholarship.id}
                                name={scholarship.name}
                            />
                        ))}
                    </div>
                </div>
                <div className="px-4">
                    <hr className="border border-borderColor" />
                </div>
                <div className="flex flex-col gap-y-3">
                    <div className="flex justify-between items-center px-4">
                        <h1 className="text-lg text-darkGrayColor font-medium">
                            Scholarship Months
                        </h1>
                    </div>
                    <div className="flex flex-col gap-y-1 max-h-[360px] overflow-y-auto">
                        {scholarshipMonths?.map((month, i) => (
                            <FilterCheckBOx
                                key={'country--list--' + i}
                                id={month.id}
                                name={month.name}
                            />
                        ))}
                    </div>
                </div>
                <div className="px-4">
                    <hr className="border border-borderColor" />
                </div>
                <div className="flex flex-col gap-y-3">
                    <div className="flex justify-between items-center px-4">
                        <h1 className="text-lg text-darkGrayColor font-medium">
                            Scholarship Years
                        </h1>
                    </div>
                    <div className="flex flex-col gap-y-1 max-h-[360px] overflow-y-auto">
                        {scholarshipYears?.map((year, i) => (
                            <FilterCheckBOx
                                key={'country--list--' + i}
                                id={year.id}
                                name={year.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterLeftBox;
