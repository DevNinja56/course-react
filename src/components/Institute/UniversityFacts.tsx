import React from 'react';
import UniversityFactsCard from './UniversityFactsCard';

const UniversityFacts = () => {
    return (
        <div className="border border-gray-300 flex flex-col gap-3 px-3 py-4 rounded-lg">
            <h1 className="text-xl font-bold text-mainTextColor">
                University Facts
            </h1>
            <div className="grid grid-cols-2 gap-3">
                <UniversityFactsCard
                    img="/images/institute/UniversityFactsSchool.svg"
                    types="Type"
                    text="PUBLIC"
                />
                <UniversityFactsCard
                    img="/images/institute/UniversityFactsFlag.svg"
                    types="Established Year"
                    text="1870"
                />
                <UniversityFactsCard
                    img="/images/institute/UniversityFactsLocation.svg"
                    types="Location"
                    text="UK"
                />
                <UniversityFactsCard
                    img="/images/institute/UniversityFactsSchool2.svg"
                    types="Campus"
                    text="Main"
                />
            </div>
        </div>
    );
};

export default UniversityFacts;
