import React, { useState } from 'react';
// import SearchBox from '../SearchBox';
import { FilterCheckBox, FilterCheckBoxLoader } from '../FilterCheckBox';

interface PropsType {
    data: {
        specialization: string;
    }[];
    isLoading: boolean;
}

const SpecializationFilter: React.FC<PropsType> = ({
    data: specializationList,
    isLoading
}) => {
    const [search] = useState<string>('');

    return (
        <div className="flex flex-col gap-y-3">
            {/* {specializationList.length > 5 && (
                <div className="flex justify-between items-center px-4 relative">
                    <SearchBox
                        searchVal={setSearch}
                        value={search}
                        className="max-w-full"
                        placeholder="Search Specialization"
                    />
                </div>
            )} */}
            <div className="flex flex-col gap-y-1 max-h-[360px] overflow-hidden overflow-y-auto setScrollBar">
                {isLoading ? (
                    <FilterCheckBoxLoader />
                ) : (
                    specializationList
                        ?.filter(({ specialization: name }) =>
                            name?.toLowerCase().includes(search.toLowerCase())
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
