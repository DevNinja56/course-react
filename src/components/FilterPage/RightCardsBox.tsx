import Image from 'next/image';
import React, { useEffect } from 'react';
import { useSearchedCourses } from '@/hooks/filterCourses';
import CourseCard from './CourseCard';
import PaginationBox from '../Pagination';
import LoaderSpinner from '../LoaderSpinner';
import { useFilterQuery } from '@/hooks/filterQuery';

const RightCardsBox = () => {
    const {
        data,
        fetchSearchedCoursesRequest: fetchCourses,
        isLoading,
        paginatorInfo: { count }
    } = useSearchedCourses();
    const { query } = useFilterQuery();

    useEffect(() => {
        fetchCourses();
    }, [query]);
    return (
        <div className="flex flex-col gap-y-7 w-[73%]">
            <div className="flex flex-col gap-y-4">
                <div className="w-full flex items-center justify-between">
                    <h1 className="font-bold text-[23px] text-mainTextColor">
                        {count} Results Found
                    </h1>
                    <div className="flex items-center gap-x-4">
                        <p className="text-grayColor">Sort by:</p>
                        <div className="relative group">
                            <button className="py-2 px-4 rounded-[5px] border-2 border-scholarshipBorderColor flex items-center gap-x-[6px] text-sm text-darkGrayColor">
                                Select Option{' '}
                                <Image
                                    height={20}
                                    width={20}
                                    alt="arrow-down"
                                    src="/images/Scholarships/chevron-down.svg"
                                    priority
                                />
                            </button>
                            <div className="absolute top-12 left-0 w-full py-4 custom-shadow rounded-[10px] flex-col bg-white hidden group-hover:flex z-20">
                                <div className="flex items-center gap-x-1 hover:bg-profileBgColor p-3 text-grayColor hover:text-blueColor cursor-pointer">
                                    <Image
                                        height={20}
                                        width={20}
                                        alt="dropDown-icon"
                                        src="/images/Scholarships/Transfer Vertical.svg"
                                        priority
                                    />
                                    <p className="z-10">A-Z</p>
                                </div>
                                <div className="flex items-center gap-x-1 hover:bg-profileBgColor p-3 text-grayColor hover:text-blueColor cursor-pointer">
                                    <Image
                                        height={20}
                                        width={20}
                                        alt="dropDown-icon"
                                        src="/images/Scholarships/Transfer Vertical.svg"
                                        priority
                                    />
                                    <p className="z-10">Z-A</p>
                                </div>
                                <div className="flex items-center gap-x-1 hover:bg-profileBgColor p-3 text-grayColor hover:text-blueColor cursor-pointer group">
                                    <Image
                                        height={20}
                                        width={20}
                                        alt="dropDown-icon"
                                        src="/images/Scholarships/Sort From Bottom To Top.svg"
                                        priority
                                    />
                                    <p className="z-10">Duration</p>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 20V4M12 4L18 10M12 4L6 10"
                                            className="stroke-mainTextColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-x-1 hover:bg-profileBgColor p-3 text-grayColor hover:text-blueColor cursor-pointer group">
                                    <Image
                                        height={20}
                                        width={20}
                                        alt="dropDown-icon"
                                        src="/images/Scholarships/Sort From Top To Bottom.svg"
                                        priority
                                    />
                                    <p className="z-10">Duration</p>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 4V20M12 20L18 14M12 20L6 14"
                                            className="stroke-mainTextColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border border-scholarshipBorderColor" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {isLoading ? (
                    <LoaderSpinner color="text-black" />
                ) : (
                    data?.map((course) => (
                        <CourseCard
                            key={'course__key__' + course._id}
                            course={course}
                        />
                    ))
                )}
            </div>
            <PaginationBox />
        </div>
    );
};

export default RightCardsBox;
