import { ROUTES } from '@/config/constant';
import { courseType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FavoriteButton from '../../Button/FavoriteButton';
import { useSearchedCourses } from '@/hooks/filterCourses';
import { setCurrencyValue } from '@/utils/currencyValue';
import { LuMapPin } from 'react-icons/lu';
import { FaRegClock } from 'react-icons/fa';
import { FaRegHourglass } from 'react-icons/fa';

interface CardProps {
    course: courseType;
}

const CourseCard = ({ course }: CardProps) => {
    const { fetchSearchedCoursesRequest } = useSearchedCourses();
    // const state = [
    //     { title: 'Institute', value: course?.institute?.name },
    //     { title: 'Level', value: course?.degree.type },
    //     {
    //         title: 'Tuition Fee',
    //         value: setCurrencyValue(course.tuitionFee)
    //     },
    //     { title: 'intakes', value: course.intakes.join() }
    // ];

    return (
        <div
            className="flex flex-col shadow-custom rounded-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            title={course.name}
        >
            <div className="relative">
                <FavoriteButton
                    isActive={!!course?.favoriteId?.[0]}
                    body={{ course: course._id }}
                    refetch={fetchSearchedCoursesRequest}
                />
                <Image
                    height={174}
                    width={282}
                    alt="card"
                    src={`${
                        course.logo ?? '/images/FilterPage/Rectangle 3634.svg'
                    }`}
                    className="h-[200px] w-full"
                    priority
                />
            </div>
            <Link href={ROUTES.COURSE.replace(':id', course._id)}>
                <div className="pt-3 pb-6 px-3 flex flex-col gap-7">
                    <div className="flex flex-col gap-2">
                        <h1
                            title={course.name}
                            className="font-bold text-mainTextColor text-xs xl:text-sm"
                        >
                            {course.name} <br /> at University of Oxford
                        </h1>
                        <p className="font-medium text-[0.670rem] xl:text-[0.700rem] text-gray-400">
                            {course?.degree.type}
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between gap-5 py-2 px-3 text-xs font-medium text-mainTextColor bg-profileBgColor rounded-md">
                            <div className="flex flex-col items-center gap-1">
                                <LuMapPin className="h-4 w-4 text-blueColor" />
                                <p className="text-[0.600rem] xl:text-[0.700rem]">
                                    UK
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <FaRegClock className="h-4 w-4 text-blueColor" />
                                <p className="text-[0.600rem] xl:text-[0.700rem]">
                                    {setCurrencyValue(course.tuitionFee)}
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <FaRegHourglass className="h-4 w-4 text-blueColor" />
                                <p className="text-[0.600rem] xl:text-[0.700rem]">
                                    {course.intakes.join()}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <Link
                                href={ROUTES.COURSE.replace(':id', course._id)}
                                className="py-2 px-4 w-full flex justify-center bg-blueColor border-white hover:bg-white border hover:border-blueColor hover:text-blueColor transition-all duration-500 text-white font-medium rounded-md text-[0.640rem] xl:text-[0.740rem]"
                            >
                                View Details
                            </Link>
                            <Link
                                href={{
                                    pathname: ROUTES.COMPARE,
                                    query: { course_id: course._id }
                                }}
                                className="py-2 px-4 w-full flex justify-center bg-profileBgColor hover:bg-blueColor hover:text-white transition-all duration-500 text-blueColor font-medium rounded-md text-[0.640rem] xl:text-[0.740rem]"
                            >
                                Compare
                            </Link>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

        // <div
        //     className="border-2 border-scholarshipBorderColor rounded-[10px] p-3 flex flex-col gap-y-2 w-[100%] group cursor-pointer hover:border-blueColor custom-shadow relative capitalize"
        //     title={course.name}
        // >
        //     <FavoriteButton
        //         isActive={!!course?.favoriteId?.[0]}
        //         body={{ course: course._id }}
        //         refetch={fetchSearchedCoursesRequest}
        //     />
        //     <Link href={ROUTES.COURSE.replace(':id', course._id)}>
        //         <div className="relative w-full">
        //             <Image
        //                 width={150}
        //                 height={150}
        //                 alt="mainImg"
        //                 className="w-full p-3 "
        //                 src={`${
        //                     course.logo ??
        //                     '/images/FilterPage/Rectangle 3634.svg'
        //                 }`}
        //                 priority
        //             />
        //         </div>
        //         <div>
        //             <h1
        //                 className="font-bold text-base  text-textLightBlackColor mb-2 group-hover:text-blueColor line-clamp-1  "
        //                 title={course.name}
        //             >
        //                 {course.name}
        //             </h1>
        //             <div className="flex flex-col gap-y-3 mb-2">
        //                 {state.map(({ title, value }) => (
        //                     <p
        //                         className="text-sm text-darkGrayColor line-clamp-1 flex gap-1.5 whitespace-nowrap "
        //                         title={value}
        //                         key={'course-card-details--' + value}
        //                     >
        //                         <span className="font-bold text-mainTextColor group-hover:text-blueColor ">
        //                             {title}:
        //                         </span>
        //                         {value ?? ''}
        //                     </p>
        //                 ))}
        //             </div>
        //         </div>
        //     </Link>
        //     <Link
        //         href={ROUTES.COURSE.replace(':id', course._id)}
        //         className="w-full py-[9px] rounded-[5px] text-blueColor border border-blueColor hover:bg-blueColor hover:text-white text-center "
        //     >
        //         View Details
        //     </Link>
        //     <Link
        //         href={{
        //             pathname: ROUTES.COMPARE,
        //             query: { course_id: course._id }
        //         }}
        //         className="w-full py-[9px] rounded-[5px] text-white border border-blueColor bg-blueColor hover:bg-white hover:text-blueColor text-center"
        //     >
        //         Compare
        //     </Link>
        // </div>
    );
};

export default CourseCard;
