import { ROUTES } from '@/config/constant';
import { courseType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FavoriteButton from '../../Button/FavoriteButton';

interface CardProps {
    course: courseType;
}

const CourseCard = ({ course }: CardProps) => {
    return (
        <div className="border-2 border-scholarshipBorderColor rounded-[10px] p-3 flex flex-col gap-y-5 w-[100%] group cursor-pointer hover:border-blueColor custom-shadow relative">
            <FavoriteButton
                isActive={!!course?.favoriteId?.[0]}
                courseId={course._id}
            />
            <Link href={ROUTES.COURSE + `/${course._id}`}>
                <div className="relative w-full">
                    <Image
                        width={150}
                        height={150}
                        alt="mainImg"
                        className="w-full p-3 "
                        src={`${
                            course.logo ??
                            '/images/FilterPage/Rectangle 3634.svg'
                        }`}
                        priority
                    />
                </div>
                <div>
                    <h1 className="font-bold text-[17px] text-textLightBlackColor mb-4 group-hover:text-blueColor h-[46px] line-clamp-2 ">
                        {course.name}
                    </h1>
                    <div className="flex flex-col gap-y-3 mb-5">
                        <p className="text-sm text-darkGrayColor">
                            {`${course.institute?.name} / ${course.degree?.name}`}
                        </p>
                        <p className="text-sm text-darkGrayColor">
                            <span className="font-bold text-mainTextColor group-hover:text-blueColor">
                                Study in:{' '}
                            </span>
                            {course?.country.name ?? ''}
                        </p>
                        <p className="text-sm text-darkGrayColor">
                            <span className="font-bold text-mainTextColor group-hover:text-blueColor">
                                Course starts:{' '}
                            </span>
                            {course.startDate}
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
            </Link>
        </div>
    );
};

export default CourseCard;
