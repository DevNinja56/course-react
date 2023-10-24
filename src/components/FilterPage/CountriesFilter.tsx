import React, { useState } from 'react';
import { useGetCountriesQuery } from '@/store/slices/allRequests';
import { FilterCheckBox } from './FilterCheckBOx';
import SearchBox from './SearchBox';

const CountriesFilter = () => {
    const { data: countryList } = useGetCountriesQuery();
    const [search, setSearch] = useState<string>('');

    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center px-4 relative">
                <h1 className="text-lg text-darkGrayColor font-medium">
                    Countries
                </h1>
                <SearchBox
                    searchVal={setSearch}
                    value={search}
                    className="absolute top-0 right-0 max-w-full "
                    placeholder="Search Countries"
                />
            </div>
            <div className="flex flex-col gap-y-1 max-h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                {countryList
                    ?.filter((country) =>
                        country.name
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    )
                    .map((country, i) => (
                        <FilterCheckBox
                            key={'country--list--' + i}
                            id={country.name}
                            text={country.name}
                            name={'countries'}
                            value={country.name}
                        />
                    ))}
            </div>
        </div>
    );
};

export default CountriesFilter;
