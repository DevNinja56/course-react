import React, { useState } from 'react';
import SearchBox from './SearchBox';
import { FilterCheckBox, FilterCheckBoxLoader } from './FilterCheckBOx';

export const regions = [
    'North America',
    'South America',
    'Central America',
    'Caribbean',
    'Central & South Asia',
    'Northeastern Asia',
    'Southeastern Asia',
    'Australia and Oceania',
    'Northern Europe',
    'Southern Europe',
    'Eastern Europe',
    'Western Europe',
    'Middle East',
    'Northern Africa',
    'Southern Africa'
];

interface propsType {
    data: {
        region: string;
    }[];
    isLoading: boolean;
}

const RegionsFilter: React.FC<propsType> = ({ data, isLoading }) => {
    const [search, setSearch] = useState<string>('');

    return (
        <>
            <div className="flex flex-col gap-y-3 max-h-[220px]">
                <div className="flex justify-between items-center px-4 relative">
                    <h1 className="text-lg text-darkGrayColor font-medium">
                        Regions
                    </h1>
                    <SearchBox
                        searchVal={setSearch}
                        value={search}
                        className="absolute top-0 right-0 max-w-full "
                        placeholder="Search Countries"
                    />
                </div>
                <div className="flex flex-col gap-y-1 max-h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                    {isLoading ? (
                        <FilterCheckBoxLoader />
                    ) : (
                        data
                            ?.filter(
                                ({ region: name }) =>
                                    !!name &&
                                    name
                                        .toLowerCase()
                                        ?.includes(search.toLowerCase())
                            )
                            .map(({ region: name }, i) => (
                                <FilterCheckBox
                                    key={'regions--list--' + i}
                                    id={name+ '--' + i}
                                    text={name}
                                    name={'region'}
                                    value={name}
                                />
                            ))
                    )}
                </div>
            </div>
        </>
    );
};

export default RegionsFilter;
