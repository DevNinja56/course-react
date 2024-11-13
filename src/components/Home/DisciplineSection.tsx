import Link from 'next/link';
import React, { useState } from 'react';
import { ROUTES } from '@/config/constant';
import { useGetPaginatedDisciplineQuery } from '@/store/slices/allRequests';
import Card from './Card';

const DisciplineSection = () => {
    const [page, setPage] = useState(1);

    const { data, isLoading } = useGetPaginatedDisciplineQuery({
        limit: 6,
        page
    });

    const totalPages = data?.totalPage || 1;
    const visiblePages = 3;

    const getPaginationBars = () => {
        let startPage = Math.max(1, page - Math.floor(visiblePages / 2));
        let endPage = startPage + visiblePages - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - visiblePages + 1);
        }

        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    const handlePageClick = (selectedPage: number) => {
        setPage(selectedPage);
    };

    return (
        <div className="w-full lg:w-10/12 xl:w-11/12 mx-auto px-2 md:px-8 lg:px-0 xl:px-20 2xl:px-8 transition-all duration-300 flex flex-col gap-y-10 md:gap-y-16 lg:flex-row gap-x-8 z-10 relative">
            <div className="w-full lg:w-[35%] z-10 flex flex-col items-center md:items-start justify-center">
                <p className="text-lg font-extrabold text-mainTextColor">
                    Top Discipline
                </p>
                <h1 className="text-blueColor font-extrabold text-xl md:text-2xl mb-2">
                    Explore our Popular Discipline
                </h1>
                <p className="text-darkGrayColor text-xs mb-7 text-center md:text-start">
                    Pellentesque fringilla, massa sit amet feugiat mollis, leo
                    turpis elementum justo, vel consequat ex urna ut massa
                    maecenas justo sapien.
                </p>
                <Link href={ROUTES.FIELDS}>
                    <button className="py-2.5 md:py-4 px-4 md:px-9 text-sm bg-blueColor rounded-[5px] font-semibold text-white z-10 sticky hover:bg-opacity-80 transition-all duration-300">
                        All Disciplines
                    </button>
                </Link>
            </div>

            <div className="w-full lg:w-[65%]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-3 min-h-96">
                    {isLoading
                        ? Array.from({ length: 6 }).map((_, index) => (
                              <Card
                                  key={'loading-card-' + index}
                                  title=""
                                  icon=""
                                  description={null}
                                  isLoading={true}
                              />
                          ))
                        : data?.data?.map((category, index) => (
                              <Card
                                  key={
                                      'category--list--' + category.name + index
                                  }
                                  title={category.name}
                                  icon={category.icon}
                                  description={category.description}
                              />
                          ))}
                </div>

                <div className="flex justify-center mt-8 space-x-4">
                    {getPaginationBars().map((pageNum) => (
                        <button
                            key={pageNum}
                            className={`w-8 h-1.5 ${pageNum === page ? 'bg-blue-600' : 'bg-gray-400'} rounded-full transition-all duration-300`}
                            onClick={() => handlePageClick(pageNum)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DisciplineSection;
