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
    const state = [
        { title: 'Institute', value: course?.institute?.name },
        { title: 'Degree', value: course?.degree.name },
        { title: 'Study in', value: course?.country.name },
        { title: 'Course starts', value: course.startDate },
        { title: 'Deadline', value: course.endDate }
    ];

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
                    <h1
                        className="font-bold text-base  text-textLightBlackColor mb-4 group-hover:text-blueColor h-12 line-clamp-2 "
                        title={course.name}
                    >
                        {course.name}
                    </h1>
                    <div className="flex flex-col gap-y-3 mb-5">
                        {state.map(({ title, value }) => (
                            <p
                                className="text-sm text-darkGrayColor line-clamp-1 flex gap-1.5 whitespace-nowrap "
                                title={value}
                                key={'course-card-details--' + value}
                            >
                                <span className="font-bold text-mainTextColor group-hover:text-blueColor ">
                                    {title}:
                                </span>
                                {value ?? ''}
                            </p>
                        ))}
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
