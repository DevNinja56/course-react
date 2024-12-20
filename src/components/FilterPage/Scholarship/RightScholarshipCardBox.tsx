import React, { useEffect } from 'react';
import Card from '../../Scholarship/Card';
import { useSearchedScholarship } from '@/hooks/filterScholarship';
import { useFilterQuery } from '@/hooks/filterQuery';
import LoaderSpinner from '../../LoaderSpinner';
import PaginationBox from '../../Pagination';
import SortBy from './SortBy';

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
        <div className="flex flex-col gap-y-7 w-full lg:w-[74%] xl:w-[73%]">
            <div className="flex flex-col gap-y-4">
                <div className="w-full flex items-center justify-between">
                    <h1 className="font-bold text-xl md:text-[23px] text-mainTextColor">
                        {count ?? '0'} Results Found
                    </h1>
                    <SortBy />
                </div>

                <hr className="border border-scholarshipBorderColor" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-3 px-0 lg:px-0">
                {isLoading ? (
                    <LoaderSpinner color="text-black" />
                ) : (
                    data?.map((scholarship, i) => (
                        <Card
                            key={'scholarship__key__' + scholarship._id + i}
                            {...{
                                name: scholarship.name,
                                title_description:
                                    scholarship.title_description,
                                type: scholarship.type,
                                degree: scholarship.degree,
                                institute: scholarship.institute,
                                country: scholarship.country,
                                amount: scholarship.amount,
                                id: scholarship._id,
                                image: scholarship.image,
                                isActive: !!scholarship?.favoriteId?.[0]
                            }}
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
