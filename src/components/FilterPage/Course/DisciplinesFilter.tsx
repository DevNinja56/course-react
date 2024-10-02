import React, { useState } from 'react';
import { FilterCheckBox, FilterCheckBoxLoader } from '../FilterCheckBOx';
// import SearchBox from '../SearchBox';

interface PropsType {
    data: {
        discipline: string;
    }[];
    isLoading: boolean;
}

const DisciplinesFilter: React.FC<PropsType> = ({ data, isLoading }) => {
    const [search] = useState<string>('');

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
            <div className="flex flex-col gap-y-1 max-h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                {isLoading ? (
                    <FilterCheckBoxLoader />
                ) : (
                    data
                        ?.filter(
                            ({ discipline: name }) =>
                                !!name &&
                                name.toLowerCase().includes(search.toLowerCase())
                        )
                        .map(({ discipline: name }, i) => (
                            <FilterCheckBox
                                key={'discipline--list--' + name + i}
                                id={name + '--' + i}
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
