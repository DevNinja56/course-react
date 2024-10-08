import React, { useState } from 'react';
import SubFilterAccordion from '@/components/FilterAccordion/SubFilterAccordion';
import { FilterCheckBox, FilterCheckBoxLoader } from '../FilterBoxCheck';
// import SearchBox from '../SearchBox';

interface SpecializationType {
    name: string;
}

interface PropsType {
    data: {
        name: string;
        specialization: SpecializationType[];
    }[];
    isLoading: boolean;
}

const DisciplinesFilter: React.FC<PropsType> = ({ data, isLoading }) => {
    const [search] = useState<string>('');
    console.log(data);
    return (
        <div className="flex flex-col gap-y-3">
            {/* {data.length > 5 && (
                <div className="flex justify-between items-center px-4 relative">
                    <SearchBox
                        searchVal={setSearch}
                        value={search}
                        className="max-w-full"
                        placeholder="Search Disciplines"
                    />
                </div>
            )} */}
            {/* {data.length > 5 && (
                <div className="flex justify-between items-center px-4 relative">
                    <SearchBox
                        searchVal={setSearch}
                        value={search}
                        className="max-w-full"
                        placeholder="Search Disciplines"
                    />
                </div>
            )} */}
            <div className="flex flex-col gap-y-1 max-h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                {isLoading ? (
                    <FilterCheckBoxLoader />
                ) : (
                    data
                        ?.filter(
                            ({ name }) =>
                                !!name &&
                                name
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                        )
                        .map(({ name, specialization }, i) => (
                            <SubFilterAccordion
                                key={'discipline--list--' + name + i}
                                title={name}
                                noBorder
                            >
                                {specialization.map(
                                    ({ name: specializationName }, j) => (
                                        <FilterCheckBox
                                            key={
                                                'specialization--list--' +
                                                specializationName +
                                                j
                                            }
                                            id={specializationName + '--' + j}
                                            text={specializationName}
                                            name={'specialization'}
                                            value={specializationName}
                                        />
                                    )
                                )}
                            </SubFilterAccordion>
                        ))
                )}
            </div>
        </div>
    );
};

export default DisciplinesFilter;
