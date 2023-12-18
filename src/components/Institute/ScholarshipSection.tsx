import React from 'react';
import ScholarshipCard from './ScholarshipCard';
import Image from 'next/image';

const ScholarshipSection = () => {
    return (
        <div className="flex flex-col gap-16">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Image
                        height={42}
                        width={42}
                        alt="graduation"
                        src="/images/institute/Scholarship.svg"
                        priority
                    />
                    <h1 className="text-2xl font-extrabold text-mainTextColor">
                        Scholarships
                    </h1>
                </div>
                <h1 className="text-blueColor text-xl font-semibold flex items-center gap-1 cursor-pointer">
                    Read More
                    <Image
                        height={24}
                        width={24}
                        alt=""
                        src="/images/institute/Arrow Right.svg"
                        priority
                    />
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
