import React, { useState } from 'react';
// import SearchBox from '../SearchBox';
import { FilterCheckBox, FilterCheckBoxLoader } from '../FilterBoxCheck';
import SearchBox from '../SearchBox';

interface PropsType {
    data: {
        institute: string;
        count: number;
    }[];
    isLoading: boolean;
}

const InstituteFilter: React.FC<PropsType> = ({ data, isLoading }) => {
    const [search, setSearch] = useState<string>('');

    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center relative">
                <SearchBox
                    searchVal={setSearch}
                    value={search}
                    className="max-w-full"
                    placeholder="Search Institute"
                />
            </div>
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
                        .map(({ institute: name, count }, i) => (
                            <FilterCheckBox
                                key={'Institute--list--' + name + i}
                                id={name + '--' + i}
                                text={name}
                                name={'institute'}
                                value={name}
                                count={count}
                            />
                        ))
                )}
            </div>
        </div>
    );
};

export default InstituteFilter;
