import React from 'react';
import Tag from './Tag';
import Image from 'next/image';

const ScholarshipCard = () => {
    return (
        <div className="relative px-2 pt-7 pb-12 shadow-md rounded-lg group hover:-translate-y-2 transition-all duration-500 cursor-pointer">
            <div className="flex flex-col gap-5 w-full">
                <div className="flex items-center w-full justify-between gap-2">
                    <h1 className="font-bold text-base text-mainTextColor">
                        20% Off On First 100 Student <br />
                        (Entrance)
                    </h1>
                </div>
                <div className="flex items-center gap-2 flex-wrap w-full">
                    <Tag img="/images/institute/location.svg" text="UK" />
                    <Tag
                        img="/images/institute/Certificate.svg"
                        text="Computer & IT"
                    />
                    <Tag
                        img="/images/institute/Graduation.svg"
                        text="Bachelors , Masters"
                    />
                    <Tag
                        img="/images/institute/school.svg"
                        text="University of sydney"
                    />
                </div>
            </div>
            <div className="shapedDiv absolute bottom-0 right-0 flex items-center justify-center bg-gray-200 group-hover:bg-blue-600 transition-all duration-500">
                <Image
                    height={19}
                    width={19}
                    alt="arrow"
                    src="/images/institute/Arrow Right White.svg"
                    className="z-10 absolute bottom-1 right-1"
                    priority
                />
            </div>
        </div>
    );
};

export default ScholarshipCard;
