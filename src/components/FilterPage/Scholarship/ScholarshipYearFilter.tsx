import React from 'react';
import { FilterCheckBox } from '../FilterCheckBOx';
import { scholarshipYears } from './data';

const ScholarshipYearFilter = () => {
    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center px-4">
                <h1 className="text-lg text-darkGrayColor font-medium">
                    Scholarship Years
                </h1>
            </div>
            <div className="flex flex-col gap-y-1 max-h-[360px] overflow-y-auto">
                {scholarshipYears?.map((year, i) => (
                    <FilterCheckBox
                        key={'country--list--' + i}
                        id={year.id}
                        text={year.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default ScholarshipYearFilter;
