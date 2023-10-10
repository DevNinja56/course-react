import { useSearchedCourses } from '@/hooks/filterCourses';
import React from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const PaginationBox = () => {
    const {
        paginatorInfo: { totalPage, page },
        fetchSearchedCoursesRequest: refetch
    } = useSearchedCourses();

    return (
        <>
            {totalPage > 1 && (
                <div className="w-full flex justify-center">
                    <div className="flex items-center gap-x-3">
                        <button
                            className="h-[39px] w-[39px] rounded-full hover:bg-blue-600 hover:text-white bg-profileBgColor flex items-center justify-center disabled:cursor-not-allowed "
                            disabled={page === 1}
                            onClick={() => refetch(page - 1)}
                        >
                            <BiChevronLeft />
                        </button>
                        {Array.from({ length: totalPage })
                            .map((_, index) => index + 1)
                            .map((i) => (
                                <button
                                    onClick={() => refetch(i)}
                                    className={`font-medium cursor-pointer h-[39px] w-[39px] rounded-full  hover:bg-blue-600 hover:text-white flex items-center justify-center ${
                                        page === i
                                            ? 'bg-blue-600 text-white  '
                                            : 'text-darkGrayColor'
                                    }`}
                                    key={'pagination__button__' + i}
                                >
                                    {i}
                                </button>
                            ))}
                        <button
                            className="h-[39px] w-[39px] rounded-full hover:bg-blue-600 hover:text-white bg-profileBgColor flex items-center justify-center disabled:cursor-not-allowed    "
                            disabled={page === totalPage}
                            onClick={() => refetch(page + 1)}
                        >
                            <BiChevronRight />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PaginationBox;
