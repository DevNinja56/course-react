// import Image from 'next/image';
import { eventType } from '@/types';
import Link from 'next/link';
import React from 'react';

interface EventCardProps {
    event: eventType;
}

const EventCard = ({ event }: EventCardProps) => {
    const date = new Date(event.date);
    const day = date.getDate();
    const monthAndYear = date.toLocaleString('default', {
        month: 'short',
        year: 'numeric'
    });
    return (
        <div className="pl-1 hover:bg-blueColor transition-all duration-500 rounded-[10px] group">
            <div className="bg-white rounded-[10px] custom-shadow px-5 md:px-12 py-6 md:py-3">
                <div className="gap-6 md:gap-[10px] flex items-center flex-col lg:flex-row justify-between">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-5 w-full lg:w-auto">
                        <div className="text-center">
                            <h1 className="font-bold text-[36px] text-mainTextColor">
                                {isNaN(day) ? '00' : day}
                            </h1>
                            <p className="text-sm text-darkGrayColor">
                                {isNaN(day) ? 'Month Year' : monthAndYear}
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
                                    {event.location}
                                </p>
                            </div>
                            <h1 className="font-bold text-lg text-mainTextColor group-hover:text-blueColor transition-all duration-500">
                                {event.title}
                            </h1>
                            <div className="flex items-center gap-1">
                                <div className="flex">
                                    <img
                                        height={18}
                                        width={18}
                                        alt="user-2"
                                        src={
                                            event.user?.avatar ??
                                            '/images/Home/Ellipse 419.svg'
                                        }
                                    />
                                </div>
                                <p className="text-sm font-semibold text-darkGrayColor">
                                    {event.user.name}
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
                            <p className="text-sm"> {event.time} </p>
                        </button>
                        <Link
                            href={event.link}
                            target="_blank"
                            className="rounded-[5px] border border-blueColor lg:border-mainTextColor text-white lg:text-mainTextColor font-medium py-[13px] px-[36px] hover:bg-blueColor hover:text-white hover:border-blueColor bg-blueColor lg:bg-white"
                        >
                            View Event
                        </Link>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default EventCard;
