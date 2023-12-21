import Image from 'next/image';
import React from 'react';
import { LuMapPin } from 'react-icons/lu';
import { FaRegClock } from 'react-icons/fa';
import { FaRegHourglass } from 'react-icons/fa';

const Card = () => {
    return (
        <div className="flex flex-col shadow-bottom-shadow rounded-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div className="relative">
                <Image
                    height={143}
                    width={232}
                    alt="card"
                    src="/images/institute/Card.png"
                    className="w-full"
                    priority
                />
            </div>
            <div className="py-3 px-2 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-mainTextColor text-xs xl:text-sm">
                        Clarendon Fund Scholarships at University of Oxford
                    </h1>
                    <p className="font-medium text-[0.75rem] md:text-[0.670rem] xl:text-[0.700rem] text-gray-400">
                        Oxford University Press Masters/PhD Degrees
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center flex-wrap gap-3 justify-between md:gap-5 py-2 px-2 text-xs font-medium text-mainTextColor bg-profileBgColor rounded-md">
                        <div className="flex flex-col items-center gap-1">
                            <LuMapPin className="h-3 w-3 md:h-4 md:w-4 text-blueColor" />
                            <p className="text-[0.625rem] md:text-[0.600rem] xl:text-[0.700rem]">
                                UK
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <FaRegClock className="h-3 w-3 md:h-4 md:w-4 text-blueColor" />
                            <p className="text-[0.625rem] md:text-[0.600rem] xl:text-[0.700rem]">
                                3 Jan 2024
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <FaRegHourglass className="h-3 w-3 md:h-4 md:w-4 text-blueColor" />
                            <p className="text-[0.625rem] md:text-[0.600rem] xl:text-[0.700rem]">
                                25 Mar 2024
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-2 justify-between">
                        <button className="py-2 px-3 xl:px-4 bg-blueColor border-white hover:bg-white border hover:border-blueColor hover:text-blueColor transition-all duration-500 text-white font-medium rounded-md text-[0.640rem] xl:text-[0.740rem] w-full">
                            View Details
                        </button>
                        <button className="py-2 px-3 xl:px-4 bg-profileBgColor hover:bg-blueColor hover:text-white transition-all duration-500 text-blueColor font-medium rounded-md text-[0.640rem] xl:text-[0.740rem] w-full">
                            Compare
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
