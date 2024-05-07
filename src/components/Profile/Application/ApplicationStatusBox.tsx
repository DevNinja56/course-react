import StepsProgressBar from '@/components/StepsProgressBar';
import { applyTypes } from '@/types';
// import Image from 'next/image';
import React from 'react';

interface propTypes {
    selectedCourse: applyTypes;
}

const ApplicationStatusBox = ({ selectedCourse }: propTypes) => {
    return (
        <>
            {selectedCourse && (
                <div className="py-8 px-2 md:px-4 xl:p-8 rounded-[30px] shadow-progressBarShadow w-full h-auto bg-white">
                    <h1 className="text-sm md:text-2xl font-bold text-mainTextColor gap-6">
                        {selectedCourse?.course?.name}
                    </h1>
                    <div className="py-3 flex items-center text-lg font-medium text-darkGrayColor gap-10">
                        <p className="text-xs md:text-base">
                            {selectedCourse?.course?.degree?.type}
                        </p>

                        <p className=" text-xs md:text-base relative before:block before:content-[''] before:w-[6px] before:h-[6px] md:before:w-2 md:before:h-2 before:bg-black before:rounded-full before:absolute before:-left-6 before:top-[50%] before:-translate-y-1/2">
                            {selectedCourse?.course?.specialization
                                ?.map((s) => s.name)
                                ?.join(' , ') ?? 'No Specialization Found'}
                        </p>
                        <p className="text-xs md:text-base relative before:block before:content-[''] before:w-[6px] before:h-[6px] md:before:w-2 md:before:h-2 before:bg-black before:rounded-full before:absolute before:-left-6 before:top-[50%] before:-translate-y-1/2">
                            January 2025
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img
                            width={20}
                            height={20}
                            className="w-8 h-8 rounded-[5px]"
                            src={selectedCourse?.course?.institute?.logo ?? ''}
                            alt="selectedCourseLogo"
                        />
                        <div className="flex flex-col ">
                            <span className="text-xs md:text-base font-bold text-mainTextColor">
                                {selectedCourse?.course?.institute?.name}
                            </span>
                            <span className="text-darkGrayColor text-xs md:text-base">
                                {selectedCourse?.course?.availableCampuses}
                            </span>
                        </div>
                    </div>
                    <div className="w-full">
                        <StepsProgressBar status={selectedCourse.status} />
                    </div>
                </div>
            )}
        </>
    );
};

export default ApplicationStatusBox;
