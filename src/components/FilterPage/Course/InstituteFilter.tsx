import { useGetInstituteQuery } from '@/store/slices/allRequests';
import React, { useState } from 'react';
import SearchBox from '../SearchBox';
import { FilterCheckBox } from '../FilterCheckBOx';

const InstituteFilter = () => {
    const { data: InstituteList } = useGetInstituteQuery();
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
                {InstituteList?.filter((Institute) =>
                    Institute.name.toLowerCase().includes(search.toLowerCase())
                ).map(({ name, id }) => (
                    <FilterCheckBox
                        key={'Institute--list--' + id}
                        id={name}
                        text={name}
                        name={'institute'}
                        value={name}
                    />
                ))}
            </div>
        </div>
    );
};

export default InstituteFilter;
