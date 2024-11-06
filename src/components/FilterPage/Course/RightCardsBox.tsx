import React, { useEffect, useState } from 'react';
import { useSearchedCourses } from '@/hooks/filterCourses';
import CourseCard from './CourseCard';
import PaginationBox from '../../Pagination';
import LoaderSpinner from '../../LoaderSpinner';
import { useFilterQuery } from '@/hooks/filterQuery';
import SortBy from './SortBy';
import { SmartMatchToggle } from './SmartMatchToggle';
import { useRouter } from 'next/router';

const RightCardsBox = () => {
    const {
        data,
        fetchSearchedCoursesRequest: fetchCourses,
        isLoading,
        paginatorInfo: { count, totalPage, page }
    } = useSearchedCourses();
    const { query } = useFilterQuery();
    const router = useRouter();
    const [isSmartMatch, setIsSmartMatch] = useState(false);
    useEffect(() => {
        setIsSmartMatch(!!Object.keys(router.query).length);
    }, []);

    useEffect(() => {
        fetchCourses();
    }, [query]);
    return (
        <div className="flex flex-col gap-y-7 w-full lg:w-[73%]">
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
                    setSmartMatch={setIsSmartMatch}
                    smartMatch={isSmartMatch}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
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
