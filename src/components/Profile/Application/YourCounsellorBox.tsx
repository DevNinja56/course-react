import Button from '@/components/Button';
import { applyTypes } from '@/types';
import Image from 'next/image';
import React from 'react';
import { IoCallOutline, IoMailOutline } from 'react-icons/io5';

interface propTypes {
    selectedCourse: applyTypes;
}

const YourCounsellorBox = ({ selectedCourse }: propTypes) => {
    return (
        <div className="bg-white rounded-3xl w-full lg:w-2/5 xl:w-1/2 shadow-progressBarShadow flex flex-col md:flex-row justify-center md:justify-start lg:flex-col items-center gap-3 md:gap-10 lg:gap-3 py-7 md:py-7 px-8">
            <div className="flex flex-col gap-2 items-center w-full md:w-auto">
                <div className="flex flex-col gap-2 items-center">
                    <Image
                        height={122}
                        width={122}
                        alt="userImg"
                        src={selectedCourse?.councillor?.profile_image}
                        className="rounded-full h-16 w-16"
                        priority
                    />
                    <div className="flex flex-col gap-1 items-center">
                        <h1 className="text-xl font-semibold text-textBlackColor">
                            {selectedCourse?.councillor?.title}
                        </h1>
                    </div>
                </div>
            </div>
            <hr className="h-[175px] w-[1px] border border-blueColor opacity-25 hidden md:block lg:hidden" />
            <div className="flex flex-col items-center md:items-start lg:items-center gap-2">
                <p className="text-lightGrayColor text-sm text-center mb-3">
                    {selectedCourse?.councillor?.bio}
                </p>
                <div className="flex flex-col md:flex-row items-center lg:items-start lg:flex-col gap-2">
                    <Button
                        icon={
                            <IoMailOutline className="h-5 w-5 text-white group-hover:text-blueColor" />
                        }
                        text={selectedCourse?.councillor?.email}
                        className="py-2 px-5 rounded-xl text-sm md:text-base"
                    />
                    <Button
                        icon={
                            <IoCallOutline className="h-5 w-5 text-white group-hover:text-blueColor" />
                        }
                        text={selectedCourse?.councillor?.phone_number}
                        className="py-2 px-5 rounded-xl text-sm md:text-base"
                    />
                </div>
            </div>
        </div>
    );
};

export default YourCounsellorBox;
