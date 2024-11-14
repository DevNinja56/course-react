import React, { useState } from 'react';
// import SearchBox from '../SearchBox';
import { FilterCheckBox, FilterCheckBoxLoader } from '../FilterBoxCheck';
import SearchBox from '../SearchBox';

interface PropsType {
    data: {
        location: string;
        count: number;
    }[];
    isLoading: boolean;
}

const LocationsFilter: React.FC<PropsType> = ({ data, isLoading }) => {
    const [search,setSearch] = useState<string>('');

    return (
        <div className="flex flex-col gap-y-3">
                <div className="flex justify-between items-center relative">
                    <SearchBox
                        searchVal={setSearch}
                        value={search}
                        className="max-w-full"
                        placeholder="Search Locations"
                    />
                </div>
            <div className="flex flex-col gap-y-1 max-h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                {isLoading ? (
                    <FilterCheckBoxLoader />
                ) : (
                    data
                        ?.filter(
                            ({ location }) =>
                                !!location &&
                                location
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                        )
                        .map(({ location: name, count }) => (
                            <FilterCheckBox
                                key={'locations--list--' + name}
                                id={'location-' + name}
                                text={name}
                                name={'location'}
                                value={name}
                                count={count}
                                
                            />
                        ))
                )}
            </div>
        </div>
    );
};

export default LocationsFilter;
