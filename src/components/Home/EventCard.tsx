// import Image from 'next/image';
import React from 'react';

interface EventCardProps {
    date: string;
}

const EventCard = ({ date }: EventCardProps) => {
    return (
        <div className="pl-1 hover:bg-blueColor transition-all duration-500 rounded-[10px] group">
            <div className="bg-white rounded-[10px] custom-shadow px-5 md:px-12 py-6 md:py-3">
                <div className="gap-6 md:gap-[10px] flex items-center flex-col lg:flex-row justify-between">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-5 w-full lg:w-auto">
                        <div>
                            <h1 className="font-bold text-[36px] text-mainTextColor">
                                {date}
                            </h1>
                            <p className="text-sm text-darkGrayColor">
                                October, 2023
                            </p>
                        </div>
                        <hr className="h-[90px] border border-borderColor hidden md:blcok" />
                        <div className="gap-3 flex flex-col">
                            <div className="gap-1 flex items-center">
                                <img
                                    height={18}
                                    width={18}
                                    alt="map-point"
                                    src="/images/Home/Map Point.svg"
                                    // priority
                                />
                                <p className="text-sm text-darkGrayColor">
                                    New York, US
                                </p>
                            </div>
                            <h1 className="font-bold text-lg text-mainTextColor group-hover:text-blueColor transition-all duration-500">
                                Global education fall meeting for everyone
                            </h1>
                            <div className="flex items-center gap-1">
                                <div className="flex">
                                    <img
                                        height={18}
                                        width={18}
                                        alt="user"
                                        src="/images/Home/Ellipse 418.svg"
                                        // priority
                                    />
                                    <img
                                        height={18}
                                        width={18}
                                        alt="user-2"
                                        src="/images/Home/Ellipse 419.svg"
                                        // priority
                                    />
                                </div>
                                <p className="text-sm font-semibold text-darkGrayColor">
                                    David Karry
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-end lg:justify-start gap-4 md:gap-[25px] w-full lg:w-auto">
                        <button className="rounded-[5px] py-[7px] px-[14px] gap-[6px] hover:gap-[10px] transition-all duration-500 bg-profileBgColor text-blueColor font-medium flex items-center">
                            <img
                                height={20}
                                width={20}
                                alt="time"
                                src="/images/Home/Clock Circle.svg"
                                // priority
                            />
                            10:30am - 12:30pm
                        </button>
                        <button className="rounded-[5px] border border-blueColor lg:border-mainTextColor text-white lg:text-mainTextColor font-medium py-[13px] px-[36px] hover:bg-blueColor hover:text-white hover:border-blueColor bg-blueColor lg:bg-white">
                            View Event
                        </button>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default EventCard;
