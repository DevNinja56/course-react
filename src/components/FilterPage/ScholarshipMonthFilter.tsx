import React from 'react';
import FilterCheckBOx from './FilterCheckBOx';
import { scholarshipMonths } from './data';

const ScholarshipMonthFilter = () => {
    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center px-4">
                <h1 className="text-lg text-darkGrayColor font-medium">
                    Scholarship Months
                </h1>
            </div>
            <div className="flex flex-col gap-y-1 max-h-[360px] overflow-y-auto">
                {scholarshipMonths?.map((month, i) => (
                    <FilterCheckBOx
                        key={'country--list--' + i}
                        id={month.id}
                        text={month.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default ScholarshipMonthFilter;
