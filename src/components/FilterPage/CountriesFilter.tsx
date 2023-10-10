import React from 'react';
import Image from 'next/image';
import { useGetCountriesQuery } from '@/store/slices/allRequests';
import { FilterCheckBox } from './FilterCheckBOx';

const CountriesFilter = () => {
    const { data: countryList } = useGetCountriesQuery();

    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center px-4">
                <h1 className="text-lg text-darkGrayColor font-medium">
                    Countries
                </h1>
                <Image
                    height={24}
                    width={24}
                    alt="search"
                    src="/images/Scholarships/Group 7678.svg"
                    priority
                />
            </div>
            <div className="flex flex-col gap-y-1 max-h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                {countryList?.map((country, i) => (
                    <FilterCheckBox
                        key={'country--list--' + i}
                        id={country.id}
                        text={country.name}
                        name={'countries'}
                        value={country.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default CountriesFilter;
