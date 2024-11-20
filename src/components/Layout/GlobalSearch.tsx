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
            className="rounded-lg bg-blueColor bg-opacity-10 border border-blueColor h-8 xl:h-9 2xl:h-12 flex items-center justify-evenly gap-2 xl:gap-3 px-2 xl:px-4 py-1.5 w-52 xl:w-64 2xl:w-96"
        >
            <input
                id="course-search"
                type="search"
                onChange={(e) => setCourseValue(e.target.value)}
                className="h-full w-full text-[9px] xl:text-[10px] 2xl:text-sm outline-none bg-transparent text-gray-500 placeholder:text-[#010F2E] font-semibold"
                placeholder="Search Course"
            />
            <hr className="h-full border border-[#010F2E] border-1" />
            <input
                id="institute-search"
                type="search"
                onChange={(e) => setInstituteValue(e.target.value)}
                className="h-full w-full text-[9px] xl:text-[10px] 2xl:text-sm outline-none bg-transparent text-gray-500 placeholder:text-[#010F2E] font-semibold"
                placeholder="Search Institute"
            />
            <button type="submit">
                <HiSearch />
            </button>
        </form>
    );
};

export default GlobalSearch;
