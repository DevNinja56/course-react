import { ROUTES } from '@/config/constant';
import { courseType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FavoriteButton from '../../Button/FavoriteButton';
import { useSearchedCourses } from '@/hooks/filterCourses';
import { setCurrencyValue } from '@/utils/currencyValue';

interface CardProps {
    course: courseType;
}

const CourseCard = ({ course }: CardProps) => {
    const { fetchSearchedCoursesRequest } = useSearchedCourses();
    const state = [
        { title: 'Institute', value: course?.institute?.name },
        { title: 'Level', value: course?.degree.type },
        {
            title: 'Tuition Fee',
            value: setCurrencyValue(course.tuitionFee)
        },
        { title: 'intakes', value: course.intakes.join() }
    ];

    return (
        <div
            className="border-2 border-scholarshipBorderColor rounded-[10px] p-3 flex flex-col gap-y-2 w-[100%] group cursor-pointer hover:border-blueColor custom-shadow relative capitalize"
            title={course.name}
        >
            <FavoriteButton
                isActive={!!course?.favoriteId?.[0]}
                body={{ course: course._id }}
                refetch={fetchSearchedCoursesRequest}
            />
            <Link href={ROUTES.COURSE.replace(':id', course._id)}>
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
                        className="font-bold text-base  text-textLightBlackColor mb-2 group-hover:text-blueColor line-clamp-1  "
                        title={course.name}
                    >
                        {course.name}
                    </h1>
                    <div className="flex flex-col gap-y-3 mb-2">
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
                </div>
            </Link>
            <Link
                href={ROUTES.COURSE.replace(':id', course._id)}
                className="w-full py-[9px] rounded-[5px] text-blueColor border border-blueColor hover:bg-blueColor hover:text-white text-center "
            >
                View Details
            </Link>
            <Link
                href={{
                    pathname: ROUTES.COMPARE,
                    query: { course_id: course._id }
                }}
                className="w-full py-[9px] rounded-[5px] text-white border border-blueColor bg-blueColor hover:bg-white hover:text-blueColor text-center"
            >
                Compare
            </Link>
        </div>
    );
};

export default CourseCard;
