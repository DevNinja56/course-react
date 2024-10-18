import React from 'react';
import { FilterCheckBox } from '../FilterBoxCheck';

interface propsType {
    data: {
        type: string;
        count: number;
    }[];
}

const ScholarshipTypeFilter = ({ data }: propsType) => {
    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-1 max-h-[360px]">
                {data?.map(({ type, count }, i) => (
                    <FilterCheckBox
                        key={'scholarship--list--' + i}
                        id={type}
                        text={type}
                        name={'scholarshipType'}
                        value={type}
                        count={count}
                    />
                ))}
            </div>
        </div>
    );
};

export default ScholarshipTypeFilter;
