import React from 'react';
import Tag from './Tag';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Certificate from './icons/Certificate';
import { RiGraduationCapFill } from 'react-icons/ri';
import School from './icons/School';
import { FaArrowRight } from 'react-icons/fa6';

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
            <div className="shapedDiv absolute bottom-0 right-0 flex items-center justify-center bg-gray-200 group-hover:bg-blue-600 transition-all duration-500">
                <FaArrowRight className="z-10 absolute bottom-2 right-1 h-4 w-4 text-white" />
            </div>
        </div>
    );
};

export default ScholarshipCard;
