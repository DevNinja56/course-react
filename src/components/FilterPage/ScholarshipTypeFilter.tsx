import React from 'react';
import { FilterCheckBox } from './FilterCheckBOx';
import { useGetScholarshipQuery } from '@/store/slices/allRequests';

const ScholarshipTypeFilter = () => {
    const { data: scholarshipList } = useGetScholarshipQuery();

    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center px-4">
                <h1 className="text-lg text-darkGrayColor font-medium">
                    Scholarship Type
                </h1>
            </div>
            <div className="flex flex-col gap-y-1 max-h-[360px]">
                {scholarshipList?.map((scholarship, i) => (
                    <FilterCheckBox
                        key={'scholarship--list--' + i}
                        id={scholarship.name}
                        text={scholarship.name}
                        name={'scholarship'}
                        value={scholarship.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default ScholarshipTypeFilter;
