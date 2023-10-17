import React, { useEffect } from 'react';
import SortBy from '../SortBy';
import Card from '../../Scholarship/Card';
import { useSearchedScholarship } from '@/hooks/filterScholarship';
import { useFilterQuery } from '@/hooks/filterQuery';
import LoaderSpinner from '../../LoaderSpinner';
import PaginationBox from '../../Pagination';

const RightScholarshipCardBox = () => {
    const {
        data,
        fetchSearchedScholarshipRequest: fetchScholarship,
        isLoading,
        paginatorInfo: { count, totalPage, page }
    } = useSearchedScholarship();
    const { query } = useFilterQuery();

    useEffect(() => {
        fetchScholarship();
    }, [query]);
    return (
        <div className="flex flex-col gap-y-7 w-full lg:w-[73%]">
            <div className="flex flex-col gap-y-4">
                <div className="w-full flex items-center justify-between">
                    <h1 className="font-bold text-xl md:text-[23px] text-mainTextColor">
                        {count ?? '0'} Results Found
                    </h1>
                    <SortBy />
                </div>
                <hr className="border border-scholarshipBorderColor" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-3 px-0 md:px-8 lg:px-0">
                {isLoading ? (
                    <LoaderSpinner color="text-black" />
                ) : (
                    data?.map((scholarship, i) => (
                        <Card
                            key={'scholarship__key__' + scholarship.id + i}
                            data={scholarship}
                        />
                    ))
                )}
            </div>
            <PaginationBox
                totalPage={totalPage}
                page={page}
                refetch={fetchScholarship}
            />
        </div>
    );
};

export default RightScholarshipCardBox;
