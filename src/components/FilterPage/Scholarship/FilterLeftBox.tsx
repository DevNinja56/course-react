import React from 'react';
import DegreeLevelFilter from '../Course/DegreeLevelFilter';
import CountriesFilter from '../CountriesFilter';
import DisciplinesFilter from '../Course/DisciplinesFilter';
import ScholarshipTypeFilter from './ScholarshipTypeFilter';
// import ScholarshipMonthFilter from './ScholarshipMonthFilter';
// import ScholarshipYearFilter from './ScholarshipYearFilter';
import { useFilterQuery } from '@/hooks/filterQuery';
import { useSearchedCourses } from '@/hooks/filterCourses';
import { FilteredButton } from '../FilteredButton';
import InstituteFilter from '../Course/InstituteFilter';

export const FilterRow = () => (
    <div className="px-4">
        <hr className="border border-borderColor" />
    </div>
);

const ScholarshipFilter = () => {
    const { clearALlQuery, query } = useFilterQuery();
    const { fetchSearchedCoursesRequest: refetch } = useSearchedCourses();

    const handleClearQuery = () => {
        clearALlQuery();
        refetch();
    };

    return (
        <div className="rounded-[15px] w-[24%] py-4 pb-5 h-headerStickyHeight overflow-y-auto border-[3px] border-[#eaf2ff] hidden lg:block sticky top-[110px] no-scrollbar">
            <div>
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
                {Object.values(query).length > 0 && (
                    <div className="my-2  ">
                        <div className="flex gap-0.5 flex-wrap px-2">
                            {Object.entries(query).map(([key, item], idx) =>
                                item.map((val) => (
                                    <FilteredButton
                                        key={idx}
                                        itemKey={key}
                                        itemValue={val ?? 'button'}
                                    />
                                ))
                            )}
                        </div>
                        <div className="mt-2">
                            <FilterRow />
                        </div>
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-y-6">
                <CountriesFilter />
                <FilterRow />
                <InstituteFilter />
                <DisciplinesFilter />
                <FilterRow />
                <DegreeLevelFilter />
                <FilterRow />
                <ScholarshipTypeFilter />
            </div>
        </div>
    );
};

export default ScholarshipFilter;
