import React from 'react';
import DegreeLevelFilter from '../Course/DegreeLevelFilter';
import CountriesFilter from '../CountriesFilter';
import ScholarshipTypeFilter from './ScholarshipTypeFilter';
// import ScholarshipMonthFilter from './ScholarshipMonthFilter';
// import ScholarshipYearFilter from './ScholarshipYearFilter';
// import DisciplinesFilter from '../Course/DisciplinesFilter';
import { useFilterQuery } from '@/hooks/filterQuery';
import { FilteredButton } from '../FilteredButton';
import InstituteFilter from '../Course/InstituteFilter';
import RegionsFilter from '../RegionsFilter';
import { useSearchedScholarship } from '@/hooks/filterScholarship';

export const FilterRow = () => (
    <div className="px-4">
        <hr className="border border-borderColor" />
    </div>
);

const ScholarshipFilter = () => {
    const { clearALlQuery, query } = useFilterQuery();
    const {
        fetchSearchedScholarshipRequest: refetch,
        filters,
        isLoading
    } = useSearchedScholarship();

    const handleClearQuery = () => {
        clearALlQuery();
        refetch();
    };

    return (
        <div className="rounded-[15px] w-[24%] py-4 pb-5 max-h-headerStickyHeight overflow-y-auto border-[3px] border-[#eaf2ff] hidden lg:block sticky top-[110px] no-scrollbar">
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
                            {Object.entries(query).map(([key, item], idx) => {
                                if (Array.isArray(item)) {
                                    return item.map((val) => (
                                        <FilteredButton
                                            key={'query--key--' + idx}
                                            itemKey={key}
                                            itemValue={val ?? 'button'}
                                        />
                                    ));
                                } else if (typeof item === 'string') {
                                    return (
                                        <FilteredButton
                                            key={'query--key--' + idx}
                                            itemKey={key}
                                            itemValue={item ?? 'button'}
                                        />
                                    );
                                }
                            })}
                        </div>
                        <div className="mt-2">
                            <FilterRow />
                        </div>
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-y-6">
                <RegionsFilter data={filters.regions} isLoading={isLoading} />
                <FilterRow />
                <CountriesFilter
                    data={filters.countries}
                    isLoading={isLoading}
                />
                <FilterRow />
                <InstituteFilter
                    data={filters.institutes}
                    isLoading={isLoading}
                />
                {/* <DisciplinesFilter
                    data={filters.disciplines}
                    isLoading={isLoading}
                /> */}
                <FilterRow />
                <DegreeLevelFilter
                    data={filters.degrees}
                    isLoading={isLoading}
                />
                <FilterRow />
                <ScholarshipTypeFilter />
            </div>
        </div>
    );
};

export default ScholarshipFilter;
