import { CgSearch } from 'react-icons/cg';
import React, { useState } from 'react';
import { useFilterQuery } from '@/hooks/filterQuery';

const SearchQueryBox = () => {
    const [value, setValue] = useState('');
    const { addQuery } = useFilterQuery();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value) {
            addQuery({ searchFilter: [value] });
            setValue('');
        }
    };
    return (
        <form onSubmit={handleSubmit} className="relative w-full">
            <div className="relative">
                <CgSearch
                    alt="search"
                    className="text-3xl absolute top-[50%] translate-y-[-50%] left-3 "
                />
                <input
                    className="custom-shadow rounded-[10px] py-5 pl-[52px] outline-none text-base text-mainTextColor w-full lg:pr-[520px]"
                    value={value}
                    onChange={({ target }) => setValue(target.value)}
                    placeholder="Type here"
                />
            </div>
            <button
                className="py-[11px] px-[39px] absolute right-3 top-[11px] bg-blueColor rounded-[5px] text-white text-sm hover:bg-opacity-50"
                type="submit"
            >
                Search
            </button>
        </form>
    );
};

export default SearchQueryBox;
