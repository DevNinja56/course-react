import React, { useEffect } from 'react';
import { format } from 'timeago.js';
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
            {isLoading ? (
                <LoaderIcon style={{ width: '20px', height: '20px' }} />
            ) : data && data?.length > 0 ? (
                <div className="border rounded-xl overflow-hidden w-full ">
                    <div className="flex bg-blueColor text-white">
                        <div className="px-3 py-2 w-[6%]">#</div>
                        <div className="px-3 py-2 w-[29%]">Course</div>
                        <div className="px-3 py-2 w-[19%]">Degree</div>
                        <div className="px-3 py-2 w-[29%]">Scholarship</div>
                        <div className="px-3 py-2 w-[17%]">Time</div>
                    </div>
                    {data?.map((apply, i) => (
                        <div key={apply.id} className="flex border-b">
                            <div className="px-3 py-2 w-[6%]">{i + 1}</div>
                            <div className="px-3 py-2 w-[29%] hover:text-blueColor hover:underline cursor-pointer ">
                                <Link
                                    href={ROUTES.COURSE.replace(
                                        ':id',
                                        apply.course.id
                                    )}
                                >
                                    {apply.course.name}
                                </Link>
                            </div>
                            <div className="px-3 py-2 w-[19%]">
                                {apply.degree.name}
                            </div>
                            <div className="px-3 py-2 w-[29%]">
                                {apply.scholarship.name}
                            </div>
                            <div className="px-3 py-2 w-[17%]">
                                {format(apply.createdAt, 'en_US')}
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
