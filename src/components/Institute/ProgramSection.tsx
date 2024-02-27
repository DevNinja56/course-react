import React, { useState } from 'react';
import { RiGraduationCapFill } from 'react-icons/ri';
import { FaArrowRight } from 'react-icons/fa6';
import { useGetCourseByFilterQuery } from '@/store/slices/allRequests';
import CourseCard from '../FilterPage/Course/CourseCard';
import LoaderSpinner from '../LoaderSpinner';

const ProgramSection = () => {
    const [selectedProgram, setSelectedProgram] = useState('postgraduate');
    const { data, isLoading } = useGetCourseByFilterQuery({
        body: [
            {
                $match: {
                    'degree.type': selectedProgram
                }
            }
        ],
        page: 1,
        limit: 3
    });

    if (isLoading) return <LoaderSpinner />;

    return (
        <>
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-9">
                        <div className="flex items-center justify-between">
                            <h1 className="flex items-center gap-2 text-xl font-bold text-mainTextColor">
                                <RiGraduationCapFill className="h-10 w-10" />
                                Programs
                            </h1>
                            <h1 className="text-blueColor text-sm md:text-xl font-semibold flex items-center gap-3 cursor-pointer">
                                Read More
                                <FaArrowRight className="h-4 w-4" />
                            </h1>
                        </div>
                        <div className="flex items-center gap-5 w-auto">
                            <div>
                                <button
                                    onClick={() =>
                                        setSelectedProgram('postgraduate')
                                    }
                                    className={`py-3 px-5 md:px-7 text-sm md:text-base rounded-3xl font-medium hover:bg-black hover:bg-opacity-5 transition-all duration-500 ${
                                        selectedProgram === 'postgraduate'
                                            ? 'text-white bg-blueColor shadow-md'
                                            : 'text-black bg-white shadow-md hover:bg-black hover:bg-opacity-5'
                                    }`}
                                >
                                    Postgraduate
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={() =>
                                        setSelectedProgram('undergraduate')
                                    }
                                    className={`py-3 px-5 md:px-7 text-sm md:text-base rounded-3xl font-medium ${
                                        selectedProgram === 'undergraduate'
                                            ? 'text-white bg-blueColor shadow-md'
                                            : 'text-black bg-white shadow-md hover:bg-black hover:bg-opacity-5'
                                    }  transition-all duration-500`}
                                >
                                    Undergraduate
                                </button>
                            </div>
                        </div>
                        {data && (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 gap-y-4 md:gap-4">
                                {data?.data.map((item, i) => (
                                    <CourseCard
                                        key={'institute-course-card--' + i}
                                        course={item}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProgramSection;
