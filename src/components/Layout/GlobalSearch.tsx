import { ROUTES } from '@/config/constant';
import { useFilterQuery } from '@/hooks/filterQuery';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const GlobalSearch = () => {
    const [value, setValue] = useState<string | null>(null);
    const { addQuery } = useFilterQuery();
    const { push } = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value) {
            addQuery({ searchFilter: [value] });
            push(ROUTES.FILTER_COURSE);
        }
    };

    return (
        <div className="relative">
            {value !== null && (
                <div
                    className="fixed top-0 right-0 w-screen h-screen bg-gray-400 bg-opacity-60   "
                    onClick={() => setValue(null)}
                />
            )}
            <button onClick={() => setValue('')}>
                <FiSearch className="text-3xl cursor-pointer h-5 w-5 md:h-[36px] md:w-[36px] mt-1" />
            </button>

            {value !== null && (
                <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  ">
                    <form
                        onSubmit={handleSubmit}
                        className="w-screen flex justify-center"
                    >
                        <div className="relative w-1/2 ">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FiSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-none focus:border-none "
                                placeholder="Search"
                                onChange={(e) => setValue(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="text-white absolute right-2.5 bottom-2.5 bg-blueColor    hover:bg-blue-800 focus:outline-none focus:ring-0  font-medium rounded-lg text-sm px-4 py-2 "
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default GlobalSearch;
