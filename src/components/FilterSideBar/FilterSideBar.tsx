import Image from 'next/image';
import React from 'react';
import CountriesFilter from '../FilterPage/CountriesFilter';
import { FilterRow } from '../FilterPage/Course/FilterLeftBox';
import DegreeLevelFilter from '../FilterPage/Course/DegreeLevelFilter';
import DisciplinesFilter from '../FilterPage/Course/DisciplinesFilter';
import SpecializationFilter from '../FilterPage/Course/SpecializationFilter';
import InstituteFilter from '../FilterPage/Course/InstituteFilter';
import { useFilterQuery } from '@/hooks/filterQuery';
import { useSearchedCourses } from '@/hooks/filterCourses';
import { FilteredButton } from '../FilterPage/FilteredButton';

interface ModalProps {
    setFilterSideBar: (show: boolean) => void;
}

const FilterSideBar = ({ setFilterSideBar }: ModalProps) => {
    const onHideSideBar = () => {
        setFilterSideBar(false);
    };
    const { clearALlQuery, query } = useFilterQuery();
    const { fetchSearchedCoursesRequest: refetch } = useSearchedCourses();

    const handleClearQuery = () => {
        clearALlQuery();
        refetch();
    };
    return (
        <div className="w-full flex lg:hidden">
            <div className="backgroundBlack fixed top-0 left-0 h-[100vh] w-full z-40 flex items-center justify-end">
                <div className="bg-white h-[100%] w-[400px] md:w-[480px] border-2 border-filterBorderColor">
                    <div className="flex items-center w-full justify-between py-5 custom-shadow px-8">
                        <h1 className="text-[29px] font-bold text-mainTextColor">
                            Filters
                        </h1>
                        <div
                            onClick={onHideSideBar}
                            className="h-[38.33px] w-[38.33px] bg-blueColor flex items-center justify-center rounded-full"
                        >
                            <Image
                                width={9.58}
                                height={9.58}
                                alt="Logo"
                                src="/images/cross.svg"
                                priority
                            />
                        </div>
                    </div>
                    <div className="h-[483px] overflow-y-auto py-[29px] px-4">
                        <div className="w-full flex justify-between items-center mb-7 px-4">
                            <h1 className="font-bold text-[23px] text-mainTextColor">
                                Filters
                            </h1>
                            <p
                                onClick={handleClearQuery}
                                className="text-sm text-darkGrayColor"
                            >
                                Reset All
                            </p>
                        </div>
                        {Object.values(query).length > 0 && (
                            <div className="my-2">
                                <div className="flex gap-0.5 flex-wrap px-2">
                                    {Object.entries(query).map(
                                        ([key, item], idx) =>
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
                        <div className="flex flex-col gap-y-6">
                            <CountriesFilter />
                            <FilterRow />
                            <DegreeLevelFilter />
                            <FilterRow />
                            <DisciplinesFilter />
                            <FilterRow />
                            <SpecializationFilter />
                            <FilterRow />
                            <InstituteFilter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSideBar;
