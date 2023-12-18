import Image from 'next/image';
import React from 'react';

const Card = () => {
    return (
        <div className="flex flex-col shadow-sm rounded-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
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
            <div className="py-4 px-2 flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-mainTextColor text-xs xl:text-sm">
                        Clarendon Fund Scholarships at University of Oxford
                    </h1>
                    <p className="font-medium text-[0.670rem] xl:text-[0.700rem] text-gray-400">
                        Oxford University Press Masters/PhD Degrees
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-5 py-2 px-2 text-xs font-medium text-mainTextColor bg-profileBgColor">
                        <div className="flex flex-col items-center gap-1">
                            <Image
                                height={18}
                                width={18}
                                src="/images/institute/Map Point.svg"
                                alt="map"
                                priority
                            />
                            <p className="text-[0.600rem] xl:text-[0.700rem]">
                                UK
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <Image
                                height={18}
                                width={18}
                                src="/images/institute/Clock Circle.svg"
                                alt="map"
                                priority
                            />
                            <p className="text-[0.600rem] xl:text-[0.700rem]">
                                3 Jan 2024
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <Image
                                height={18}
                                width={18}
                                src="/images/institute/hourglass.png"
                                alt="map"
                                priority
                                className="min-w-fit"
                            />
                            <p className="text-[0.600rem] xl:text-[0.700rem]">
                                25 Mar 2024
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 justify-between">
                        <button className="py-2 px-4 bg-blueColor border-white hover:bg-white border hover:border-blueColor hover:text-blueColor transition-all duration-500 text-white font-medium rounded-md text-[0.640rem] xl:text-[0.740rem]">
                            View Details
                        </button>
                        <button className="py-2 px-4 bg-profileBgColor hover:bg-blueColor hover:text-white transition-all duration-500 text-blueColor font-medium rounded-md text-[0.640rem] xl:text-[0.740rem]">
                            Compare
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
