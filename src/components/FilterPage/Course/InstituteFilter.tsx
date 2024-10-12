import React, { useState } from 'react';
// import SearchBox from '../SearchBox';
import { FilterCheckBox, FilterCheckBoxLoader } from '../FilterBoxCheck';

interface PropsType {
    data: {
        institute: string;
    }[];
    isLoading: boolean;
}


const InstituteFilter: React.FC<PropsType> = ({ data, isLoading }) => {
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
                            ({ institute: name }) =>
                                !!name &&
                                name
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                        )
                        .map(({ institute: name }, i) => (
                            <FilterCheckBox
                                key={'Institute--list--' + name + i}
                                id={name + '--' + i}
                                text={name}
                                name={'institute'}
                                value={name}
                            />
                        ))
                )}
            </div>
        </div>
    );
};

export default InstituteFilter;
