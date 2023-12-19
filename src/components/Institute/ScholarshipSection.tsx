import React from 'react';
import ScholarshipCard from './ScholarshipCard';
import ScholarshipCap from './icons/ScholarshipCap';
import { FaArrowRight } from 'react-icons/fa6';

const ScholarshipSection = () => {
    return (
        <div className="flex flex-col gap-16">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <ScholarshipCap />
                    <h1 className="text-2xl font-extrabold text-mainTextColor">
                        Scholarships
                    </h1>
                </div>
                <h1 className="text-blueColor text-xl font-semibold flex items-center gap-2 cursor-pointer">
                    Read More
                    <FaArrowRight className="h-4 w-4" />
                </h1>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <ScholarshipCard />
                <ScholarshipCard />
                <ScholarshipCard />
                <ScholarshipCard />
            </div>
        </div>
    );
};

export default ScholarshipSection;
