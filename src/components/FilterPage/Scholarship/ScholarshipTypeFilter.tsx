import React from 'react';
import { FilterCheckBox } from '../FilterCheckBOx';
import { scholarshipTypesList } from './data';

const ScholarshipTypeFilter = () => {
    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center px-4">
                <h1 className="text-lg text-darkGrayColor font-medium">
                    Scholarship Type
                </h1>
            </div>
            <div className="flex flex-col gap-y-1 max-h-[360px]">
                {scholarshipTypesList?.map((scholarship, i) => (
                    <FilterCheckBox
                        key={'scholarship--list--' + i}
                        id={scholarship.name}
                        text={scholarship.name}
                        name={'scholarshipType'}
                        value={scholarship.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default ScholarshipTypeFilter;
