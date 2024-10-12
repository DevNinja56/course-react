import React, { useEffect } from 'react';
import { useGetUserAppliesQuery } from '@/store/slices/allRequests';
import Link from 'next/link';
import { ROUTES } from '@/config/constant';
import { LoaderIcon } from 'react-hot-toast';
// import Image from 'next/image';

const MyApplies = () => {
    const { data, isLoading, refetch } = useGetUserAppliesQuery();

    useEffect(() => {
        refetch();
    }, []);

    return (
        <div className="lg:flex flex-col w-full px-7 md:px-12 lg:px-0 pb-8 lg:pb-0">
            <h2 className="text-[32px] font-semibold leading-10 text-mainTextColor py-5 hidden lg:block">
                My Applications
            </h2>
            {isLoading ? (
                <LoaderIcon style={{ width: '20px', height: '20px' }} />
            ) : data && data?.length > 0 ? (
                <div className=" rounded-xl overflow-hidden w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5 ">
                    {data?.map((apply) => (
                        <div
                            key={apply.id}
                            className="flex flex-wrap border-b flex-col w-full border p-4 md:p-5 rounded-[10px] gap-3 relative"
                        >
                            {!apply.course && (
                                <p className="text-red-500 text-xs absolute top-2 right-2 font-bold">
                                    No course found or maybe deleted form DB!.
                                </p>
                            )}
                            <p className="text-xs md:text-sm font-semibold text-mainTextColor hover:text-blueColor hover:underline cursor-pointer line-clamp-2 h-4">
                                <Link
                                    href={{
                                        pathname: ROUTES.COURSE.replace(
                                            ':title',
                                            (
                                                apply?.course?.name ??
                                                'no-course'
                                            )?.replaceAll(' ', '-')
                                        ),
                                        query: {
                                            course_id:
                                                apply?.course?.id ?? 'no-course'
                                        }
                                    }}
                                >
                                    {apply?.course?.name}
                                </Link>
                            </p>

                            <div className="flex items-center gap-6">
                                <p className="text-[11px] md:text-[13px] font-medium text-darkGrayColor ">
                                    {apply?.course?.degree?.type}
                                </p>
                                <p className="relative text-[11px] md:text-[13px] font-medium text-darkGrayColor before:block before:content-['•'] before:absolute before:-left-6 before:top-[50%] before:-translate-y-1/2">
                                    {apply?.course?.specialization
                                        ?.map((s) => s.name)
                                        ?.join(' , ') ??
                                        'No Specialization Found'}
                                </p>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                    <img
                                        width={100}
                                        height={100}
                                        alt=""
                                        className="w-8 h-8 rounded-[5px]"
                                        src={
                                            apply?.course?.institute?.logo ?? ''
                                        }
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-[10px] md:text-xs font-semibold ">
                                            {apply?.course?.institute?.name}
                                        </p>
                                        <p className="text-[10px] md:text-sm capitalize text-black ">
                                            <span className="font-bold">
                                                campus:{' '}
                                            </span>
                                            <span>
                                                {apply?.course?.availableCampuses.join(
                                                    ' - '
                                                ) ?? 'No Campus Found'}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    className="py-2 px-1.5 md:px-2 text-[9px] md:text-[10px] font-semibold text-blueColor bg-blueColor bg-opacity-10 rounded-[5px] whitespace-nowrap"
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
