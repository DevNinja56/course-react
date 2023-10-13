import CourseModal from '@/components/Modal/CourseModal';
import Slider from '@/components/Slider';
import Testimonial from '@/components/Testimonial/Testimonal';
import Image from 'next/image';
import React, { useState } from 'react';

const Compare = () => {
    const [showModal, setShowModal] = useState(false);

    const onShow = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <div className="w-full flex items-center justify-center mt-[100px] bg-profileBgColor py-20 relative mb-16">
                <Image
                    height={193}
                    width={191}
                    alt="compareRound"
                    className="absolute top-0 left-0"
                    src="/images/Blogs/Frame 642.svg"
                    priority
                />
                <div className="flex flex-col gap-y-12 items-center z-10">
                    <div className="flex flex-col justify-center items-center gap-y-1">
                        <p className="text-blueColor text-xl font-bold">
                            Compare Courses
                        </p>
                        <h1 className="text-mainTextColor text-[32px] font-extrabold">
                            Compare Your Study Options
                        </h1>
                        <p className="text-lg text-aboutUsTextColor">
                            You can compare upto 3 Univeristies
                        </p>
                    </div>
                    <div className="py-4 px-8 bg-white custom-shadow rounded-[10px]">
                        <div className="flex items-center gap-x-5">
                            <button
                                onClick={onShow}
                                className="py-[14px] px-[73px] rounded-[5px] bg-blueColor text-white font-semibold showModalBtn"
                            >
                                Select Course1
                            </button>
                            <button
                                onClick={onShow}
                                className="py-[14px] px-[73px] rounded-[5px] bg-blueColor text-white font-semibold showModalBtn"
                            >
                                Select Course2
                            </button>
                            <button
                                onClick={onShow}
                                className="py-[14px] px-[73px] rounded-[5px] bg-blueColor text-white font-semibold showModalBtn"
                            >
                                Select Course3
                            </button>
                        </div>
                    </div>
                </div>
                <Image
                    height={193}
                    width={191}
                    alt="compaere-round-2"
                    className="absolute bottom-0 right-0"
                    src="/images/Blogs/Frame 643.svg"
                    priority
                />
            </div>
            {showModal && <CourseModal setShowModal={setShowModal} />}
            <div className="w-full pb-32">
                <div className="max-w-[1120px] 2xl:max-w-[2400px] mx-auto px-2 2xl:px-8 transition-all duration-300">
                    <div className="rounded-[10px] w-full custom-shadow border-2 border-profileBgColor">
                        <div className="w-full rounded-[10px] rounded-b-none bg-blueColor pl-[35px] py-4">
                            <h1 className="text-white text-xl font-bold leading-6">
                                About University
                            </h1>
                        </div>
                        <div className="w-full grid grid-cols-4 gap-5">
                            <div className="flex flex-col">
                                <div className="py-5 pl-[35px] bg-lightBlue border-r border-profileBgColor">
                                    <h1 className="font-bold text-mainTextColor">
                                        Institute logo
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-white border-r border-profileBgColor">
                                    <h1 className="font-bold text-mainTextColor">
                                        Institute Name
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-lightBlue border-r border-profileBgColor">
                                    <h1 className="font-bold text-mainTextColor">
                                        Sector
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-white border-r border-profileBgColor">
                                    <h1 className="font-bold text-mainTextColor">
                                        Established Year
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-lightBlue border-r border-profileBgColor">
                                    <h1 className="font-bold text-mainTextColor">
                                        Country
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-white border-r border-profileBgColor">
                                    <h1 className="font-bold text-mainTextColor">
                                        Location
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-lightBlue border-r border-profileBgColor">
                                    <h1 className="font-bold text-mainTextColor">
                                        Campus
                                    </h1>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="py-5 pl-[35px] border-x border-profileBgColor bg-lightBlue">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-white border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-lightBlue border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-white border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-lightBlue border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-white border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-lightBlue border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="py-5 pl-[35px] bg-lightBlue border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-white border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-lightBlue border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-white border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-lightBlue border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-white border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-lightBlue border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="py-5 pl-[35px] bg-lightBlue border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-white border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-lightBlue border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-white border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-lightBlue border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-white border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                                <div className="py-5 pl-[35px] bg-lightBlue border-x border-profileBgColor">
                                    <h1 className="font-bold text-grayColor">
                                        --
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full pb-20 2xl:pb-[700px] flex flex-col items-center overflow-hidden">
                <p className="text-[23px] font-bold text-blueColor mb-1">
                    Scholarships
                </p>
                <h1 className="text-textLightBlackColor text-[48px] font-extrabold mb-5 text-center">
                    Scholarships you may be interested in
                </h1>
                <Slider />
            </div>
            <Testimonial />
        </>
    );
};

export default Compare;
