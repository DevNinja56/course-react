import React, { useState } from 'react';
import SearchBox from './SearchBox';
import { FilterCheckBox } from './FilterCheckBOx';

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

const RegionsFilter = () => {
    const [search, setSearch] = useState<string>('');

    return (
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
                {regions
                    ?.filter((name) =>
                        name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((name, i) => (
                        <FilterCheckBox
                            key={'regions--list--' + i}
                            id={name}
                            text={name}
                            name={'region'}
                            value={name}
                        />
                    ))}
            </div>
        </div>
    );
};

export default RegionsFilter;
