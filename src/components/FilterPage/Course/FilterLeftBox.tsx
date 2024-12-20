import React from 'react';
import DegreeLevelFilter from './DegreeLevelFilter';
import DisciplinesFilter from './DisciplinesFilter';
import { useFilterQuery } from '@/hooks/filterQuery';
import { useSearchedCourses } from '@/hooks/filterCourses';
import { FilteredButton } from '../FilteredButton';
import InstituteFilter from './InstituteFilter';
import FeeSlider from './FeeSlider';
import LocationsFilter from './Locations';
import IntakesFilter from './Intakes';
import FilterAccordion from '@/components/FilterAccordion';
import { LuGraduationCap } from 'react-icons/lu';

import {
    AiOutlineEnvironment,
    AiOutlineBank,
    AiOutlineAppstore,
    AiOutlineCalendar,
    AiOutlinePound
} from 'react-icons/ai';
import { useRouter } from 'next/router';
import { RiEnglishInput } from 'react-icons/ri';
import { IoFilterOutline } from 'react-icons/io5';
import EnglishTestFilter from './EnglishTestFilter';

export const FilterRow = () => (
    <div className="px-4">
        <hr className="border border-borderColor" />
    </div>
);

const CourseFilter = () => {
    const { push } = useRouter();
    const { clearAllQuery, query } = useFilterQuery();
    const {
        fetchSearchedCoursesRequest: refetch,
        filters,
        isLoading
    } = useSearchedCourses();

    const handleClearQuery = () => {
        push({ query: {} });
        clearAllQuery();
        refetch();
    };
    return (
        <div className="rounded-[15px] w-[24%] py-4 pb-5 overflow-y-auto border-[3px] border-[#eaf2ff] hidden lg:block max-h-headerStickyHeight sticky top-[110px] bg-white customScroll ">
            <div>
                <div className="flex justify-between items-center mb-4 px-4">
                    <h1 className="text-[23px] text-mainTextColor font-bold">
                        Filters
                    </h1>
                    <IoFilterOutline />
                </div>

                {Object.values(query).length > 0 && (
                    <div className="my-2">
                        <div className="flex justify-between items-center mb-4 px-4">
                            <h1 className="text-sm text-mainTextColor">
                                Applied Filter
                            </h1>
                            <p
                                className="text-sm hover:text-darkGrayColor text-blue-600 cursor-pointer "
                                onClick={handleClearQuery}
                            >
                                Reset All
                            </p>
                        </div>
                        <div className="flex gap-0.5 flex-wrap px-2">
                            {Object.entries(query).map(([key, item], idx) => {
                                if (Array.isArray(item)) {
                                    return item.map((val, i) => (
                                        <FilteredButton
                                            key={
                                                'query--key----' +
                                                idx +
                                                '---' +
                                                i
                                            }
                                            itemKey={key}
                                            itemValue={val ?? 'button'}
                                        />
                                    ));
                                } else if (typeof item === 'string') {
                                    return (
                                        <FilteredButton
                                            key={'query----key--' + idx}
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
                <FilterAccordion
                    title="Locations"
                    icon={<AiOutlineEnvironment />}
                    name="location"
                    firstOpen
                >
                    <LocationsFilter
                        data={filters.locations}
                        isLoading={isLoading}
                    />
                </FilterAccordion>
                <FilterAccordion
                    title="Institutes"
                    icon={<AiOutlineBank />}
                    name="institute"
                >
                    <InstituteFilter
                        data={filters.institutes}
                        isLoading={isLoading}
                    />
                </FilterAccordion>
                <FilterAccordion
                    title="Degree Levels"
                    icon={<LuGraduationCap />}
                    name="degrees"
                >
                    <DegreeLevelFilter
                        data={filters.degrees}
                        isLoading={isLoading}
                    />
                </FilterAccordion>
                <FilterAccordion
                    title="Disciplines"
                    icon={<AiOutlineAppstore />}
                    name="specialization"
                >
                    <DisciplinesFilter
                        data={filters.disciplines}
                        isLoading={isLoading}
                    />
                </FilterAccordion>
                <FilterAccordion
                    title="Intakes"
                    icon={<AiOutlineCalendar />}
                    name="intakes"
                >
                    <IntakesFilter
                        data={filters.intakes}
                        isLoading={isLoading}
                    />
                </FilterAccordion>
                <FilterAccordion
                    title="Language Test"
                    icon={<RiEnglishInput />}
                    name="LanguageTest"
                    svg
                >
                    <EnglishTestFilter isLoading={isLoading} />
                </FilterAccordion>
                <FilterAccordion
                    title="Tuition Fees"
                    icon={<AiOutlinePound />}
                    noBorder
                >
                    <FeeSlider />
                </FilterAccordion>
            </div>
        </div>
    );
};

export default CourseFilter;
