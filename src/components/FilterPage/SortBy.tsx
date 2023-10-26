import { useFilterQuery } from '@/hooks/filterQuery';
import React, { useState } from 'react';
import { LuArrowUpWideNarrow, LuArrowDownWideNarrow } from 'react-icons/lu';
import { FaArrowUpLong, FaArrowDownLong } from 'react-icons/fa6';
import { FiChevronDown } from 'react-icons/fi';
import FilterSideBar from '../FilterSideBar/FilterSideBar';
import Image from 'next/image';

export const sortState = {
    'A-Z': 1,
    'Z-A': -1,
    'Duration-Up': 1,
    'Duration-Down': -1
};

const SortBy = () => {
    const { query, addQuery } = useFilterQuery();
    const [showFilterSideBar, setShowFilterSideBar] = useState(false);

    const state = [
        { name: 'A - Z', value: 'A-Z' },
        { name: 'Z - A', value: 'Z-A' },
        {
            name: 'Duration',
            value: 'Duration-Up',
            Left: LuArrowUpWideNarrow,
            Right: FaArrowUpLong
        },
        {
            name: 'Duration',
            value: 'Duration-Down',
            Left: LuArrowDownWideNarrow,
            Right: FaArrowDownLong
        }
    ];

    return (
        <div className="flex items-center gap-x-3 md:gap-x-4">
            <p className="text-grayColor hidden md:block">Sort by:</p>
            <div className="relative group py-2 w-32 md:w-40">
                <button className="py-2 px-2 md:px-4 w-full rounded-[5px] border-2 border-scholarshipBorderColor flex items-center gap-x-1 md:gap-x-[6px] text-sm text-darkGrayColor">
                    {query?.['sortBy']?.[0] ?? 'Select Options'}
                    <FiChevronDown className="absolute text-lg right-2 md:right-3 top-[50%] translate-y-[-50%] " />
                </button>
                <div className="absolute top-12 left-0 w-full py-4 custom-shadow rounded-[10px] flex-col bg-white hidden group-hover:flex z-20">
                    {state.map(({ name, value, Left, Right }, index) => (
                        <div
                            key={name + '--sortBy--' + index}
                            className="flex items-center gap-x-1 hover:bg-profileBgColor p-3 text-grayColor hover:text-blueColor cursor-pointer"
                            onClick={() => {
                                addQuery({ sortBy: [value] });
                            }}
                        >
                            {Left && <Left />}
                            <p className="z-10">{name}</p>
                            {Right && <Right />}
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={() => setShowFilterSideBar(!showFilterSideBar)}
                className="text-sm bg-blueColor py-2 px-4 rounded-[5px] text-white hidden md:flex lg:hidden items-center gap-x-1"
            >
                <Image
                    height={20}
                    width={20}
                    alt="filter"
                    src="/images/Scholarships/Tuning 4.svg"
                    priority
                />{' '}
                Filters
            </button>
            <button
                onClick={() => setShowFilterSideBar(!showFilterSideBar)}
                className="text-sm bg-blueColor py-2 px-2 md:px-4 rounded-[5px] text-white block md:hidden items-center gap-x-1"
            >
                <Image
                    height={20}
                    width={20}
                    alt="filter"
                    src="/images/Scholarships/Tuning 4.svg"
                    priority
                />{' '}
            </button>
            {showFilterSideBar && (
                <FilterSideBar setFilterSideBar={setShowFilterSideBar} />
            )}
        </div>
    );
};

export default SortBy;
