import React, { useEffect } from 'react';
import { useGetUserAppliesQuery } from '@/store/slices/allRequests';
import Link from 'next/link';
import { ROUTES } from '@/config/constant';
import { LoaderIcon } from 'react-hot-toast';

const MyApplies = () => {
    const { data, isLoading, refetch } = useGetUserAppliesQuery();

    useEffect(() => {
        refetch();
    }, []);

    return (
        <div className="lg:flex flex-col w-full ">
            <h2 className="text-[32px] font-semibold leading-10 text-mainTextColor py-5">
                My Applications
            </h2>
            {isLoading ? (
                <LoaderIcon style={{ width: '20px', height: '20px' }} />
            ) : data && data?.length > 0 ? (
                <div className=" rounded-xl overflow-hidden w-full grid grid-cols-2 gap-5">
                    {data?.map((apply) => (
                        <div
                            key={apply.id}
                            className="flex flex-wrap border-b flex-col w-full border p-5 rounded-[10px] gap-3"
                        >
                            <p className=" text-sm font-semibold text-mainTextColor hover:text-blueColor hover:underline cursor-pointer line-clamp-2 h-4">
                                <Link
                                    href={ROUTES.COURSE.replace(
                                        ':id',
                                        apply.id
                                    )}
                                >
                                    {apply.course.name}
                                </Link>
                            </p>

                            <div className="flex items-center gap-6">
                                <p className=" text-[13px] font-medium text-darkGrayColor ">
                                    {apply.course.degree.type}
                                </p>
                                <p className="relative text-[13px] font-medium text-darkGrayColor before:block before:content-['•'] before:absolute before:-left-6 before:top-[50%] before:-translate-y-1/2">
                                    {apply.course.delivery}
                                </p>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                    <img
                                        alt=""
                                        className="w-8 h-8 rounded-[5px]"
                                        src={apply.course.institute.logo}
                                    />
                                    <div className="flex flex-col">
                                        <p className=" text-xs font-semibold ">
                                            {apply?.course?.institute?.name}
                                        </p>
                                        <p className="text-sm font-normal text-darkGrayColor ">
                                            campus:{' '}
                                            {apply.course.institute.campus}
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    className=" py-2 px-2 text-[10px] font-semibold text-blueColor bg-blueColor bg-opacity-10 rounded-[5px]"
                                    href={ROUTES.APPLIES_DETAIL.replace(
                                        ':id',
                                        apply.id
                                    )}
                                >
                                    {' '}
                                    Submit Documents
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No record found..</p>
            )}
        </div>
    );
};

export default MyApplies;
