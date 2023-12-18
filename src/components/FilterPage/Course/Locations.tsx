import { useGetInstituteQuery } from '@/store/slices/allRequests';
import React, { useState } from 'react';
import SearchBox from '../SearchBox';
import { FilterCheckBox } from '../FilterCheckBOx';
import _ from 'lodash';

const LocationsFilter = () => {
    const { data } = useGetInstituteQuery();
    const [search, setSearch] = useState<string>('');
    const locations = Object.keys(_.groupBy(data, 'location'));

    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center px-4 relative ">
                <h5 className="text-lg text-darkGrayColor font-medium">
                    Locations
                </h5>
                <SearchBox
                    searchVal={setSearch}
                    value={search}
                    className="absolute top-0 right-0 max-w-full "
                    placeholder="Search Institute"
                />
            </div>
            <div className="flex flex-col gap-y-1 max-h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                {locations
                    ?.filter((location) =>
                        location.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((name) => (
                        <FilterCheckBox
                            key={'locations--list--' + name}
                            id={'location-' + name}
                            text={name}
                            name={'location'}
                            value={name}
                        />
                    ))}
            </div>
        </div>
    );
};

export default LocationsFilter;
