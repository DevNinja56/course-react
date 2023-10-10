import React from 'react';
import DegreeLevelFilter from './DegreeLevelFilter';
import CountriesFilter from './CountriesFilter';
import DisciplinesFilter from './DisciplinesFilter';
import ScholarshipTypeFilter from './ScholarshipTypeFilter';
import ScholarshipMonthFilter from './ScholarshipMonthFilter';
import ScholarshipYearFilter from './ScholarshipYearFilter';
import { useFilterQuery } from '@/hooks/filterQuery';
import { useSearchedCourses } from '@/hooks/filterCourses';

export const FilterRow = () => (
    <div className="px-4">
        <hr className="border border-borderColor" />
    </div>
);

const FilterLeftBox = () => {
    const { clearALlQuery } = useFilterQuery();
    const { fetchSearchedCoursesRequest: refetch } = useSearchedCourses();

    const handleClearQuery = () => {
        clearALlQuery();
        refetch();
    };

    return (
        <div className="rounded-[15px] w-[24%] py-4 pb-5 h-fit border-[3px] border-[#eaf2ff]  ">
            <div className="flex justify-between items-center mb-8 px-4">
                <h1 className="text-[23px] text-mainTextColor font-bold">
                    Filters
                </h1>
                <p
                    className="text-sm text-darkGrayColor hover:text-blue-600 cursor-pointer "
                    onClick={handleClearQuery}
                >
                    Reset All
                </p>
            </div>
            <div className="flex flex-col gap-y-6">
                <CountriesFilter />
                <FilterRow />
                <DegreeLevelFilter />
                <FilterRow />
                <DisciplinesFilter />
                <FilterRow />
                <ScholarshipTypeFilter />
                <FilterRow />
                <ScholarshipMonthFilter />
                <FilterRow />
                <ScholarshipYearFilter />
            </div>
        </div>
    );
};

export default FilterLeftBox;
