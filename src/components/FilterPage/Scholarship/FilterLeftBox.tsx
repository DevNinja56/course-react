import React from 'react';
import DegreeLevelFilter from '../Course/DegreeLevelFilter';
import ScholarshipTypeFilter from './ScholarshipTypeFilter';
import { useFilterQuery } from '@/hooks/filterQuery';
import { FilteredButton } from '../FilteredButton';
import InstituteFilter from '../Course/InstituteFilter';
import { useSearchedScholarship } from '@/hooks/filterScholarship';
import FilterAccordion from '@/components/FilterAccordion';

import { AiOutlineBank, AiOutlineDollarCircle } from 'react-icons/ai';
import { LuGraduationCap } from "react-icons/lu";


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
        <div className="rounded-[15px] w-[24%] py-4 pb-5 max-h-headerStickyHeight overflow-y-auto border-[3px] border-[#eaf2ff] hidden lg:block sticky top-[110px] no-scrollbar bg-white">
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
            <div className="flex flex-col">

                <FilterAccordion title="Institutes" icon={<AiOutlineBank />} firstOpen>
                    <InstituteFilter data={filters.institutes} isLoading={isLoading} />
                </FilterAccordion>
                <FilterAccordion title="Degree Levels" icon={<LuGraduationCap />}>
                    <DegreeLevelFilter data={filters.degrees} isLoading={isLoading} />
                </FilterAccordion>
                <FilterAccordion title="Scholarship Type" icon={<AiOutlineDollarCircle />} noBorder>
                    <ScholarshipTypeFilter />
                </FilterAccordion>
            </div>
        </div>
    );
};

export default ScholarshipFilter;
