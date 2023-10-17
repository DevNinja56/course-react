import React from 'react';
import { scholarshipMonths } from './data';
import { FilterCheckBox } from '../FilterCheckBOx';

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
                    <FilterCheckBox
                        key={'scholarship--month--list--' + i}
                        id={month.name}
                        text={month.name}
                        name={'scholarshipMonth'}
                        value={month.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default ScholarshipMonthFilter;
