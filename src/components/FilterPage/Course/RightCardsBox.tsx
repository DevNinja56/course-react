import React, { useEffect, useState } from 'react';
import { useSearchedCourses } from '@/hooks/filterCourses';
import CourseCard from './CourseCard';
import PaginationBox from '../../Pagination';
import LoaderSpinner from '../../LoaderSpinner';
import { useFilterQuery } from '@/hooks/filterQuery';
import SortBy from './SortBy';
import { SmartMatchToggle } from './SmartMatchToggle';
import { useSmartMatchTool } from '@/hooks/smartMatch';

const RightCardsBox = () => {
    const {
        data,
        fetchSearchedCoursesRequest: fetchCourses,
        isLoading,
        paginatorInfo: { count, totalPage, page }
    } = useSearchedCourses();
    const { query } = useFilterQuery();
    const { isActive } = useSmartMatchTool();
    const [isSmartMatch, setIsSmartMatch] = useState(!isActive);
    useEffect(() => {
        fetchCourses();
    }, [query, isSmartMatch]);
    return (
        <div className="flex flex-col gap-y-7 w-full lg:w-[74%] xl:w-[73%]">
            <div className="flex flex-col gap-y-4">
                <div className="w-full flex items-center justify-between">
                    <h1 className="font-bold text-lg md:text-[23px] text-mainTextColor">
                        {count} Results Found
                    </h1>
                    <SortBy />
                </div>
                <hr className="border border-scholarshipBorderColor" />
                <SmartMatchToggle
                    // smartMatch={!!Object.keys(router.query).length}
                    smartMatch={isSmartMatch}
                    setSmartMatch={setIsSmartMatch}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 mb-10">
                {isLoading ? (
                    <LoaderSpinner color="text-black" />
                ) : (
                    data?.map((course) => (
                        <CourseCard
                            key={'course__key__' + course._id}
                            course={course}
                            topFit={isSmartMatch}
                        />
                    ))
                )}
            </div>
            <PaginationBox
                totalPage={totalPage}
                page={page}
                refetch={fetchCourses}
            />
        </div>
    );
};

export default RightCardsBox;
