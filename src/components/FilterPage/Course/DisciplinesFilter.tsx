import React, { useState } from 'react';
import SubFilterAccordion from '@/components/FilterAccordion/SubFilterAccordion';
import { FilterCheckBox, FilterCheckBoxLoader } from '../FilterBoxCheck';
import SearchBox from '../SearchBox';
// import SearchBox from '../SearchBox';

interface SpecializationType {
    name: string;
    count?: number;
}

interface PropsType {
    data: {
        name: string;
        specializations: SpecializationType[];
        count?: number;
    }[];
    isLoading: boolean;
}

const DisciplinesFilter: React.FC<PropsType> = ({ data, isLoading }) => {
    const [search, setSearch] = useState<string>('');
    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center relative">
                <SearchBox
                    searchVal={setSearch}
                    value={search}
                    className="max-w-full"
                    placeholder="Search Disciplines"
                />
            </div>
            <div className="flex flex-col gap-y-1 max-h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                {isLoading ? (
                    <FilterCheckBoxLoader />
                ) : (
                    data
                        ?.filter(
                            ({ name }) =>
                                !!name[0] &&
                                name[0]
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                        )
                        .map(({ name, specializations, count }, i) => (
                            <SubFilterAccordion
                                key={'discipline--list--' + name + i}
                                title={name[0]}
                                noBorder
                                count={count}
                            >
                                {specializations.map(
                                    (
                                        { name: specializationName, count },
                                        j
                                    ) => (
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
                                            count={count}
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
