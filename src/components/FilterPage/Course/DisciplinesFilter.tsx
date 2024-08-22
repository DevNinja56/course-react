import React, { useState } from 'react';
import { FilterCheckBox, FilterCheckBoxLoader } from '../FilterCheckBOx';
import SearchBox from '../SearchBox';

interface propsType {
    data: {
        discipline: string;
    }[];
    isLoading: boolean;
}

const DisciplinesFilter: React.FC<propsType> = ({ data, isLoading }) => {
    const [search, setSearch] = useState<string>('');

    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center px-4 relative ">
                <h1 className="text-lg text-darkGrayColor font-medium">
                    Disciplines
                </h1>
                <SearchBox
                    searchVal={setSearch}
                    value={search}
                    className="absolute top-0 right-0 max-w-full "
                    placeholder="Search Disciplines"
                />
            </div>
            <div className="flex flex-col gap-y-1 max-h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                {isLoading ? (
                    <FilterCheckBoxLoader />
                ) : (
                    data
                        ?.filter(
                            ({ discipline: name }) =>
                                !!name &&
                                name
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                        )
                        .map(({ discipline: name }, i) => (
                            <FilterCheckBox
                                key={'discipline--list--' + name + i}
                                id={name+ '--' + i}
                                text={name}
                                name={'discipline'}
                                value={name}
                            />
                        ))
                )}
            </div>
        </div>
    );
};

export default DisciplinesFilter;
