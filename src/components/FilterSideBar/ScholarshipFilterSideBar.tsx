// import Image from 'next/image';
import React from 'react';
import { FilterRow } from '../FilterPage/Course/FilterLeftBox';
import DegreeLevelFilter from '../FilterPage/Course/DegreeLevelFilter';
import InstituteFilter from '../FilterPage/Course/InstituteFilter';
import { useFilterQuery } from '@/hooks/filterQuery';
import { FilteredButton } from '../FilterPage/FilteredButton';
import FilterAccordion from '../FilterAccordion';
import ScholarshipTypeFilter from '../FilterPage/Scholarship/ScholarshipTypeFilter';
import { AiOutlineBank, AiOutlineDollarCircle } from 'react-icons/ai';
import { LuGraduationCap } from 'react-icons/lu';
import { useSearchedScholarship } from '@/hooks/filterScholarship';

interface ModalProps {
    setFilterSideBar: (show: boolean) => void;
}

const FilterSideBar = ({ setFilterSideBar }: ModalProps) => {
    const onHideSideBar = () => {
        setFilterSideBar(false);
    };
    const { clearAllQuery, query } = useFilterQuery();
    const {
        fetchSearchedScholarshipRequest: refetch,
        filters,
        isLoading
    } = useSearchedScholarship();

    const handleClearQuery = () => {
        clearAllQuery();
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
                            <img
                                width={9.58}
                                height={9.58}
                                alt="Logo"
                                src="/images/cross.svg"
                                // priority
                            />
                        </div>
                    </div>
                    <div className=" overflow-scroll py-[29px] px-4 h-[85vh]">
                        <div className="w-full flex justify-between items-center mb-7 px-4 ">
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
                            <div className="my-2  ">
                                <div className="flex gap-0.5 flex-wrap px-2">
                                    {Object.entries(query).map(
                                        ([key, item], idx) => {
                                            if (Array.isArray(item)) {
                                                return item.map((val) => (
                                                    <FilteredButton
                                                        key={
                                                            'query--key--' + idx
                                                        }
                                                        itemKey={key}
                                                        itemValue={
                                                            val ?? 'button'
                                                        }
                                                    />
                                                ));
                                            } else if (
                                                typeof item === 'string'
                                            ) {
                                                return (
                                                    <FilteredButton
                                                        key={
                                                            'query--key--' + idx
                                                        }
                                                        itemKey={key}
                                                        itemValue={
                                                            item ?? 'button'
                                                        }
                                                    />
                                                );
                                            }
                                        }
                                    )}
                                </div>
                                <div className="mt-2">
                                    <FilterRow />
                                </div>
                            </div>
                        )}
                        <div className="flex flex-col">
                            <FilterAccordion
                                title="Institutes"
                                icon={<AiOutlineBank />}
                                firstOpen
                                name={'institute'}
                            >
                                <InstituteFilter
                                    data={filters.institutes}
                                    isLoading={isLoading}
                                />
                            </FilterAccordion>
                            <FilterAccordion
                                title="Degree Levels"
                                icon={<LuGraduationCap />}
                                name={'degrees'}
                            >
                                <DegreeLevelFilter
                                    data={filters.degrees}
                                    isLoading={isLoading}
                                />
                            </FilterAccordion>
                            <FilterAccordion
                                title="Scholarship Type"
                                icon={<AiOutlineDollarCircle />}
                                noBorder
                                name={'scholarshipType'}
                            >
                                <ScholarshipTypeFilter data={filters.types} />
                            </FilterAccordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSideBar;
