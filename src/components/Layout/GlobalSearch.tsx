import { ROUTES } from '@/config/constant';
import { useFilterQuery } from '@/hooks/filterQuery';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { HiSearch } from 'react-icons/hi';

const GlobalSearch = () => {
    const [courseValue, setCourseValue] = useState<string | null>(null);
    const [instituteValue, setInstituteValue] = useState<string | null>(null);

    const { addQuery } = useFilterQuery();
    const { push } = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (courseValue) {
            addQuery({ searchFilter: [courseValue] });
            push(ROUTES.FILTER_COURSE);
        } else if (instituteValue) {
            addQuery({ searchFilter: [instituteValue] });
            push(ROUTES.FILTER_COURSE);
        }
    };

    
    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-[95px] bg-blueColor bg-opacity-10 border border-blueColor h-9 flex items-center justify-evenly gap-3 px-4 py-1.5 w-56 xl:w-64"
        >
            <input
                id="course-search"
                type="search"
                onChange={(e) => setCourseValue(e.target.value)}
                className="h-full w-full text-[10px] outline-none bg-transparent text-gray-500 placeholder:text-[#010F2E] font-semibold"
                placeholder="Search Course"
            />
            <hr className="h-full border border-[#010F2E] border-1" />
            <input
                id="institute-search"
                type="search"
                onChange={(e) => setInstituteValue(e.target.value)}
                className="h-full w-full text-[10px] outline-none bg-transparent text-gray-500 placeholder:text-[#010F2E] font-semibold"
                placeholder="Search Institute"
            />
            <button type="submit">
                <HiSearch />
            </button>
        </form>
        // <div className="relative">
        //     {value !== null && (
        //         <div
        //             className="fixed top-0 right-0 w-screen h-screen bg-gray-400 bg-opacity-60   "
        //             onClick={() => setValue(null)}
        //         />
        //     )}
        //     <button onClick={() => setValue('')}>
        //         <FiSearch className="text-3xl cursor-pointer h-5 w-5 md:h-[36px] md:w-[36px] mt-1" />
        //     </button>

        //     {value !== null && (
        //         <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  ">
        //             <form
        //                 onSubmit={handleSubmit}
        //                 className="w-screen flex justify-center"
        //             >
        //                 <div className="relative w-1/2 ">
        //                     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        //                         <FiSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        //                     </div>
        //                     <input
        //                         type="search"
        //                         id="default-search"
        //                         className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-none focus:border-none "
        //                         placeholder="Search"
        //                         onChange={(e) => setValue(e.target.value)}
        //                         required
        //                     />
        //                     <button
        //                         type="submit"
        //                         className="text-white absolute right-2.5 bottom-2.5 bg-blueColor    hover:bg-blue-800 focus:outline-none focus:ring-0  font-medium rounded-lg text-sm px-4 py-2 "
        //                     >
        //                         Search
        //                     </button>
        //                 </div>
        //             </form>
        //         </div>
        //     )}
        // </div>
    );
};

export default GlobalSearch;
