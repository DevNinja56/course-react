import React, { useState } from 'react';
import SearchBox from '../SearchBox';
import { FilterCheckBox, FilterCheckBoxLoader } from '../FilterCheckBOx';

interface propsType {
    data: {
        specialization: string;
    }[];
    isLoading: boolean;
}

const SpecializationFilter: React.FC<propsType> = ({
    data: specializationList,
    isLoading
}) => {
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
                {isLoading ? (
                    <FilterCheckBoxLoader />
                ) : (
                    specializationList
                        ?.filter(({ specialization: name }) =>
                            name?.toLowerCase()?.includes(search.toLowerCase())
                        )
                        .map(({ specialization: name }, i) => (
                            <FilterCheckBox
                                key={'specialization--list--' + i + name}
                                id={name + '--' + i}
                                text={name}
                                name={'specialization'}
                                value={name}
                            />
                        ))
                )}
            </div>
        </div>
    );
};

export default SpecializationFilter;
