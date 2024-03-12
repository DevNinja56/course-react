import React from 'react';
import Tag from './Tag';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Certificate from './icons/Certificate';
import { RiGraduationCapFill } from 'react-icons/ri';
import School from './icons/School';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';

const ScholarshipCard = () => {
    return (
        <div className="relative pt-7 shadow-md rounded-lg group hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col border border-gray-100">
            <div className="flex flex-col gap-5 w-full z-10">
                <div className="flex flex-col items-center w-full justify-center gap-2">
                    <Image
                        height={90}
                        width={90}
                        alt="scholarship"
                        src="/images/institute/scholarship (1) 1.svg"
                        priority
                    />
                    <h1 className="font-bold text-base text-mainTextColor flex flex-col items-center">
                        20% Off On First 100 Student <span>(Entrance)</span>
                    </h1>
                </div>
                <div className="grid grid-cols-2 w-full">
                    <Tag
                        icon={
                            <FaMapMarkerAlt className="h-4 w-4 text-blueColor" />
                        }
                        text="UK"
                    />
                    <Tag
                        icon={
                            <Certificate className="h-4 w-4 text-blueColor" />
                        }
                        text="Computer & IT"
                    />
                    <Tag
                        icon={
                            <RiGraduationCapFill className="h-4 w-4 text-blueColor" />
                        }
                        text="Bachelors , Masters"
                    />
                    <Tag
                        icon={
                            <School
                                fill="fill-blueColor"
                                className="h-4 w-4 text-blueColor"
                            />
                        }
                        text="University of sydney"
                    />
                </div>
            </div>
            <div className="border-black flex justify-end w-full absolute bottom-0 right-0">
                <div className="flex items-center justify-center bg-gray-200 group-hover:bg-blue-600 transition-all duration-500 h-16 w-16 before:bg-white before:w-16 before:rounded-br-full before:h-full relative before:absolute before:top-0 before:left-0">
                    <FaArrowRight className="z-10 h-3 w-3 text-white absolute right-1 bottom-[6px]" />
                </div>
            </div>
        </div>
    );
};

export default ScholarshipCard;
