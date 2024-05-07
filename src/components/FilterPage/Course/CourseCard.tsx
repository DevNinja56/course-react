/* eslint-disable @next/next/no-img-element */
import { ROUTES } from '@/config/constant';
import { courseType } from '@/types';
import Link from 'next/link';
import React from 'react';
import FavoriteButton from '../../Button/FavoriteButton';
import { LuMapPin } from 'react-icons/lu';
import { CiCalendarDate } from 'react-icons/ci';
import { useCurrency } from '@/hooks/currency';

interface CardProps {
    course: courseType;
}

const CourseCard = ({ course }: CardProps) => {
    const {
        country,
        institute,
        degree,
        logo,
        _id,
        name,
        tuitionFee,
        intakes,
        // feeCurrency,
        specialization
    } = course;

    const { getCurrencySymbol, setCurrencyValue, getSingleRate } =
        useCurrency();
    const rate = getSingleRate();

    return (
        <div
            className="flex flex-col shadow-custom rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer relative bg-white"
            title={name}
        >
            <FavoriteButton
                isActive={!!course?.favoriteId?.[0]}
                body={{ course: _id }}
            />
            <Link href={ROUTES.COURSE.replace(':id', _id)}>
                <div className="relative">
                    <img
                        height={174}
                        width={200}
                        alt="card"
                        src={`${
                            logo ?? '/images/FilterPage/Rectangle 3634.svg'
                        }`}
                        className="h-[200px] w-full object-cover rounded-xl"
                    />
                </div>
                <div className="pt-3 pb-3 px-3 flex flex-col gap-7">
                    <div className="flex flex-col gap-2">
                        <h1
                            title={name}
                            className="font-bold text-mainTextColor text-xs xl:text-sm"
                        >
                            {name} <br /> at {institute.name} - (
                            {specialization?.name ?? 'No Specialization'})
                        </h1>
                        <p className="font-medium text-[0.670rem] xl:text-[0.700rem] text-gray-400 capitalize">
                            {degree.type}
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between gap-5 py-2 px-3 text-xs font-medium text-mainTextColor bg-profileBgColor rounded-md">
                            <div className="flex flex-col items-center gap-1">
                                <LuMapPin className="h-4 w-4 text-blueColor" />
                                <p className="text-[0.600rem] xl:text-[0.700rem]">
                                    {country.name.split(' ').length > 1
                                        ? country.name
                                              .split(' ')
                                              .map((i: string) => i[0])
                                        : country.name}
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="h-4 w-4 text-blueColor">
                                    {getCurrencySymbol()}
                                </span>
                                <p className="text-[0.600rem] xl:text-[0.700rem]">
                                    {setCurrencyValue(
                                        tuitionFee *
                                            (rate?.base_rate
                                                ? +rate?.base_rate
                                                : 1)
                                    )}
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <CiCalendarDate className="h-4 w-4 text-blueColor" />
                                <p className="text-[0.600rem] xl:text-[0.700rem] capitalize ">
                                    {intakes.join()}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <Link
                                href={ROUTES.COURSE.replace(':id', _id)}
                                className="py-2 px-4 w-full flex justify-center bg-blueColor border-white hover:bg-white border hover:border-blueColor hover:text-blueColor transition-all duration-500 text-white font-medium rounded-md text-[0.640rem] xl:text-[0.740rem]"
                            >
                                View Details
                            </Link>
                            <Link
                                href={{
                                    pathname: ROUTES.COMPARE,
                                    query: { course_id: _id }
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
    );
};

export default CourseCard;
