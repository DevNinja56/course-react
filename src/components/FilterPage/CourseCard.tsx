import { ROUTES } from '@/config/constant';
import { courseType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardProps {
    course: courseType;
}

const CourseCard = ({ course }: CardProps) => {
    return (
        <Link href={ROUTES.COURSE_DETAILS + `/${course.id}`}>
            <div className="border-2 border-scholarshipBorderColor rounded-[10px] p-3 flex flex-col gap-y-5 w-[100%] group cursor-pointer hover:border-blueColor custom-shadow">
                <div className="relative w-full">
                    <Image
                        height={150}
                        width={246}
                        alt="mainImg"
                        className="w-full"
                        src={`${
                            course.imgUrl ??
                            '/images/FilterPage/Rectangle 3634.svg'
                        }`}
                        priority
                    />
                    <button className="h-[36px] w-[36px] rounded-full flex items-center justify-center group absolute top-4 right-3 z-10 bg-black opacity-[0.4]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.76953 9.3571C2.76953 13.8459 6.47978 16.238 9.19575 18.3791C10.1541 19.1346 11.0772 19.8459 12.0003 19.8459C12.9234 19.8459 13.8465 19.1346 14.8049 18.3791C17.5209 16.238 21.2311 13.8459 21.2311 9.3571C21.2311 4.86823 16.154 1.68482 12.0003 6.00036C7.8466 1.68482 2.76953 4.86823 2.76953 9.3571Z"
                                className="fill-white"
                            />
                        </svg>
                    </button>
                </div>
                <div>
                    <h1 className="font-bold text-[17px] text-textLightBlackColor mb-4 group-hover:text-blueColor h-[46px]">
                        {course.name}
                    </h1>
                    <div className="flex flex-col gap-y-3 mb-5">
                        <p className="text-sm text-darkGrayColor">
                            {course.instituteId?.name}
                        </p>
                        <p className="text-sm text-darkGrayColor">
                            Study in: {course?.instituteId?.country?.name ?? ''}
                        </p>
                        <p className="text-sm text-darkGrayColor">
                            Course starts {course.startDate}
                        </p>
                        <p className="font-medium text-sm text-darkGrayColor">
                            <span className="font-bold text-mainTextColor group-hover:text-blueColor">
                                Deadline:
                            </span>{' '}
                            {course.endDate}
                        </p>
                    </div>
                    <button className="w-full py-[9px] rounded-[5px] text-blueColor border border-blueColor mb-3 group-hover:bg-blueColor group-hover:text-white">
                        View Details
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default CourseCard;
