/* eslint-disable @next/next/no-img-element */
import { ROUTES } from '@/config/constant';
import { courseType } from '@/types';
import Link from 'next/link';
import React, { useMemo } from 'react';
import FavoriteButton from '../../Button/FavoriteButton';
import { LuMapPin } from 'react-icons/lu';
import { CiCalendarDate } from 'react-icons/ci';
import { useCurrency } from '@/hooks/currency';
import { HiOutlineSparkles } from 'react-icons/hi2';

interface CardProps {
    course: courseType;
    topFit?: boolean;
}

const CourseCard = ({ course, topFit }: CardProps) => {
    const {
        institute,
        degree,
        // logo,
        _id,
        name,
        tuitionFee,
        intakes,
        feeCurrency = 'AUD'
        // specialization
    } = course;

    const { getCurrencySymbol, setCurrencyValue, getSingleRate, base_code } =
        useCurrency();
    const rate = useMemo(() => getSingleRate(feeCurrency), [feeCurrency]);

    return (
        <div
            className="flex flex-col shadow-custom rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer relative bg-white"
            title={name}
        >
            <FavoriteButton
                isActive={!!course?.favoriteId?.[0]}
                body={{ course: _id }}
            />
            <Link
                href={{
                    pathname: ROUTES.COURSE.replace(
                        ':title',
                        name.replaceAll(' ', '-')
                    ),
                    query: { course_id: _id }
                }}
                className="h-full flex flex-col justify-between"
            >
                <div className="relative">
                    <img
                        height={174}
                        width={200}
                        alt="card"
                        // src={`${
                        //     logo ?? '/images/FilterPage/Rectangle 3634.svg'
                        // }`}
                        src={`${'https://course-options-assets-ragzon.s3.ap-south-1.amazonaws.com/uploads/1722329836213Staffordshire-University-Stoke-on-Trent.jpg'}`}
                        className="h-[200px] w-full object-cover rounded-t-xl"
                    />
                    {topFit ? (
                        <div className="bg-[#70FF95] w-fit flex items-center justify-center text-xs px-4 py-1 rounded-full gap-1 absolute -bottom-3 left-3">
                            <HiOutlineSparkles />
                            <p className="font-semibold">Top Fit</p>.
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                <div className="pt-5 xl:pt-8 px-3 flex flex-col gap-1 relative">
                    <div className="flex flex-col gap-2">
                        <h1
                            title={name}
                            className="font-bold text-mainTextColor text-xs xl:text-sm"
                        >
                            {name} <br /> at{' '}
                            {institute?.name ?? 'No Institute Found'}
                            {/* - (
                            {specialization?.name ?? 'No Specialization'}) */}
                        </h1>
                        <p className="font-medium text-[0.670rem] xl:text-[0.700rem] text-gray-400 capitalize">
                            {degree?.type}
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-around xl:justify-between gap-5 py-2 px-3 text-xs font-medium text-mainTextColor bg-profileBgColor rounded-md">
                            <div className="flex flex-col items-center gap-1">
                                <LuMapPin className="h-4 w-4 text-blueColor" />
                                <p className="text-[0.600rem] xl:text-[0.700rem]">
                                    {institute?.location?.split(',')?.[0] ??
                                        'No Location'}
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="h-4 w-4 text-blueColor">
                                    {getCurrencySymbol(
                                        rate ? base_code : feeCurrency
                                    )}
                                </span>
                                <p className="text-[0.600rem] xl:text-[0.700rem]">
                                    {setCurrencyValue(
                                        !rate
                                            ? tuitionFee
                                            : tuitionFee *
                                                  (rate?.base_rate
                                                      ? +rate?.base_rate
                                                      : 1),
                                        rate ? base_code : feeCurrency
                                    )}{' '}
                                    /Year
                                </p>
                            </div>
                            {intakes && intakes.length > 0 && (
                                <div className="flex flex-col items-center gap-1">
                                    <CiCalendarDate className="h-4 w-4 text-blueColor" />
                                    <p className="text-[0.600rem] xl:text-[0.700rem] capitalize ">
                                        {intakes.join()}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
            <div className="flex items-center gap-2 justify-between m-3">
                <Link
                    href={{
                        pathname: ROUTES.COURSE.replace(
                            ':title',
                            name.replaceAll(' ', '-')
                        ),
                        query: { course_id: _id }
                    }}
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
    );
};

export default CourseCard;
