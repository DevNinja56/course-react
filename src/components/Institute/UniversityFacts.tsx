import React from 'react';
import UniversityFactsCard from './UniversityFactsCard';
import School from './icons/School';
import { FaFlagCheckered } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaSchool } from 'react-icons/fa';
import { instituteType } from '@/types';

const UniversityFacts = ({ data }: { data: instituteType }) => {
    return (
        <div className="border border-gray-300 flex flex-col gap-3 px-3 py-4 rounded-lg">
            <h1 className="text-xl font-bold text-mainTextColor">
                University Facts
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3">
                <UniversityFactsCard
                    icon={
                        <School
                            fill="fill-black"
                            className="h-9 w-9 md:h-10 md:w-10"
                        />
                    }
                    types="Type"
                    text={data.sector}
                />
                <UniversityFactsCard
                    icon={<FaFlagCheckered className="h-7 w-7 md:h-9 md:w-9" />}
                    types="Established Year"
                    text={data.establishedYear + ''}
                />
                <UniversityFactsCard
                    icon={<FaMapMarkerAlt className="h-7 w-7 md:h-9 md:w-9" />}
                    types="Location"
                    text={data.location}
                />
                <UniversityFactsCard
                    icon={<FaSchool className="h-7 w-7 md:h-9 md:w-9" />}
                    types="Campus"
                    text={data.campus}
                />
            </div>
        </div>
    );
};

export default UniversityFacts;
