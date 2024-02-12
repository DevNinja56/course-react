import React, { useState } from 'react';
import SearchBox from '../SearchBox';
import { FilterCheckBox, FilterCheckBoxLoader } from '../FilterCheckBOx';

interface propsType {
    data: {
        institute: string;
    }[];
    isLoading: boolean;
}

const InstituteFilter: React.FC<propsType> = ({ data, isLoading }) => {
    const [search, setSearch] = useState<string>('');

    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center px-4 relative ">
                <h5 className="text-lg text-darkGrayColor font-medium">
                    Institute
                </h5>
                <SearchBox
                    searchVal={setSearch}
                    value={search}
                    className="absolute top-0 right-0 max-w-full "
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
                        .map(({ institute: name }, i) => (
                            <FilterCheckBox
                                key={'Institute--list--' + name + i}
                                id={name}
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
