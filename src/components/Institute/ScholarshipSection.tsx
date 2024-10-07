import React from 'react';
import ScholarshipCap from './icons/ScholarshipCap';
import { FaArrowRight } from 'react-icons/fa6';
import LoaderSpinner from '../LoaderSpinner';
import { useGetScholarshipFilterQuery } from '@/store/slices/allRequests';
import Card from '../Scholarship/Card';
import Link from 'next/link';
import { ROUTES } from '@/config/constant';

const ScholarshipSection = ({ name }: { name: string }) => {
    const { data, isLoading } = useGetScholarshipFilterQuery({
        body: [
            {
                $match: {
                    'institute.name': name
                }
            }
        ],
        page: 1,
        limit: 3
    });

    if (isLoading) return <LoaderSpinner />;
    return (
        <div className="flex flex-col gap-8 md:gap-16">
            <div className="flex items-center justify-between">
                <h1 className="flex items-center gap-2 text-xl font-bold text-mainTextColor">
                    <ScholarshipCap />
                    Scholarships
                </h1>
                <Link
                    href={{
                        pathname: ROUTES.FILTER_SCHOLARSHIP,
                        query: { scholarship: name }
                    }}
                >
                    <h1 className="text-blueColor text-sm md:text-xl font-semibold flex items-center gap-3 cursor-pointer group hover:text-opacity-50 transition-all duration-300">
                        Read More
                        <FaArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-all duration-300" />
                    </h1>
                </Link>
            </div>

            {data?.data.length ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 gap-y-4 md:gap-4">
                    {data?.data.map((scholarship, i) => (
                        <Card
                            key={'scholarship__key__' + scholarship._id + i}
                            {...{
                                name: scholarship.name,
                                type: scholarship.type,
                                degree: scholarship.degree,
                                institute: scholarship.institute,
                                country: scholarship.country,
                                amount: scholarship.amount,
                                id: scholarship._id,
                                image: scholarship.image,
                                isActive: !!scholarship?.favoriteId?.[0],
                                headingClass: 'text-sm'
                            }}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex items-center justify-center h-12 w-full">
                    <h1 className="text-lg font-bold text-lightGrayColor capitalize">
                        No Scholarship Founds
                    </h1>
                </div>
            )}
        </div>
    );
};

export default ScholarshipSection;
