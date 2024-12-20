/* eslint-disable @next/next/no-img-element */
import { ROUTES } from '@/config/constant';
import { courseType } from '@/types';
import Link from 'next/link';
import React, { useMemo } from 'react';
import FavoriteButton from '../../Button/FavoriteButton';
import { LuMapPin } from 'react-icons/lu';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { useRouter } from 'next/router';
// import { FaRegClock } from 'react-icons/fa6';
import { TbHourglassEmpty } from 'react-icons/tb';
import { useCurrency } from '@/hooks/currency';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';

interface CardProps {
    course: courseType;
    topFit?: boolean;
}

const CourseCard = ({ course, topFit }: CardProps) => {
    const {
        institute,
        degree,
        _id,
        name,
        tuitionFee,
        feeCurrency = 'AUD'
    } = course;

    const { setCurrencyValue, getSingleRate, base_code } = useCurrency();
    const rate = useMemo(() => getSingleRate(feeCurrency), [feeCurrency]);
    const router = useRouter();

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
                className="h-full flex flex-col"
            >
                <div className="relative">
                    <img
                        height={174}
                        width={282}
                        alt="card"
                        src={
                            course.logo ||
                            'https://co-assets-bucket.s3-accelerate.amazonaws.com/uploads/1722329836213Staffordshire-University-Stoke-on-Trent.jpg'
                        }
                        className="h-[174px] w-full object-cover rounded-t-xl"
                    />
                    {topFit && router.query.SmartMatch ? (
                        <div className="bg-[#70FF95] w-fit flex items-center justify-center text-xs px-4 py-1 rounded-full gap-1 absolute -bottom-3 left-3">
                            <HiOutlineSparkles />
                            <p className="font-semibold">Top Fit</p>.
                        </div>
                    ) : null}
                </div>
                <div
                    className={`${topFit ? 'mt-3' : 'mt-6'} px-3 flex flex-col gap-1 h-36 justify-between`}
                >
                    <div className="flex flex-col ">
                        <h1
                            title={name}
                            className="font-bold text-mainTextColor text-xs xl:text-sm line-clamp-2 "
                        >
                            {name}
                        </h1>
                        <h1
                            title={name}
                            className="font-bold text-mainTextColor text-xs xl:text-sm line-clamp-2 "
                        >
                            at {institute?.name ?? 'No Institute Found'}
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
                                    {/* {institute?.location?.split(',')?.[0] ??
                                        'No Location'} */}
                                    UK
                                </p>
                            </div>
                            {/* <div className="flex flex-col items-center gap-1">
                                <FaRegClock  className="h-4 w-4 text-blueColor" />
                                <p className="text-[0.600rem] xl:text-[0.700rem]">
                                3 Jan 2024
                                </p>
                            </div> */}
                            <div className="flex flex-col items-center gap-1">
                                <p className="text-[17px] text-blueColor">
                                    <HiOutlineCurrencyDollar />
                                </p>
                                <p className="text-[0.600rem] xl:text-[0.700rem]">
                                    {setCurrencyValue(
                                        !rate
                                            ? tuitionFee
                                            : tuitionFee *
                                                  (rate?.base_rate
                                                      ? +rate?.base_rate
                                                      : 1),
                                        rate ? base_code : feeCurrency
                                    )}
                                    /Yr
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <TbHourglassEmpty className="h-4 w-4 text-blueColor" />
                                <p className="text-[0.600rem] xl:text-[0.700rem]">
                                    25 Mar 2024
                                </p>
                            </div>
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
