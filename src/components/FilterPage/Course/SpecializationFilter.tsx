import { useGetSpecializationQuery } from '@/store/slices/allRequests';
import React, { useState } from 'react';
import SearchBox from '../SearchBox';
import { FilterCheckBox } from '../FilterCheckBOx';

const SpecializationFilter = () => {
    const { data: specializationList } = useGetSpecializationQuery();
    const [search, setSearch] = useState<string>('');

    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center px-4 relative ">
                <h1 className="text-lg text-darkGrayColor font-medium">
                    Specialization
                </h1>
                <SearchBox
                    searchVal={setSearch}
                    value={search}
                    className="absolute top-0 right-0 max-w-full "
                    placeholder="Search Specialization"
                />
            </div>
            <div className="flex flex-col gap-y-1 max-h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                {specializationList
                    ?.filter((specialization) =>
                        specialization.name
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    )
                    .map(({ name, id }) => (
                        <FilterCheckBox
                            key={'specialization--list--' + id}
                            id={name}
                            text={name}
                            name={'specialization'}
                            value={name}
                        />
                    ))}
            </div>
        </div>
    );
};

export default SpecializationFilter;
