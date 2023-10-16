import React, { useState } from 'react';
import { FilterCheckBox } from './FilterCheckBOx';
import { useGetDisciplineQuery } from '@/store/slices/allRequests';
import SearchBox from './SearchBox';

const DisciplinesFilter = () => {
    const { data: disciplineList } = useGetDisciplineQuery();
    const [search, setSearch] = useState<string>('');

    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center px-4 relative ">
                <h1 className="text-lg text-darkGrayColor font-medium">
                    Disciplines
                </h1>
                <SearchBox
                    searchVal={setSearch}
                    value={search}
                    className="absolute top-0 right-0 max-w-full "
                    placeholder="Search Disciplines"
                />
            </div>
            <div className="flex flex-col gap-y-1 max-h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                {disciplineList
                    ?.filter((discipline) =>
                        discipline.name
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    )
                    .map(({ name, id }) => (
                        <FilterCheckBox
                            key={'discipline--list--' + id}
                            id={name}
                            text={name}
                            name={'discipline'}
                            value={name}
                        />
                    ))}
            </div>
        </div>
    );
};

export default DisciplinesFilter;
