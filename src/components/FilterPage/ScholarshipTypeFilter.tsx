import React from 'react';
import FilterCheckBOx from './FilterCheckBOx';
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
                    <FilterCheckBOx
                        key={'country--list--' + i}
                        id={scholarship.id}
                        text={scholarship.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default ScholarshipTypeFilter;
