import React from 'react';
import ScholarshipFilter from '@/components/FilterPage/Scholarship/FilterLeftBox';
import RightScholarshipCardBox from '@/components/FilterPage/Scholarship/RightScholarshipCardBox';
import SearchQueryBox from '@/components/FilterPage/SearchQueryBox';
import Testimonial from '@/components/Testimonial';
import Image from 'next/image';

const Scholarship = () => {
    return (
        <>
            <div className="w-full flex items-center justify-center mt-[100px] bg-profileBgColor py-20 relative mb-10">
                <Image
                    height={193}
                    width={191}
                    alt="blog-round"
                    className="absolute top-[-20px] left-[-20px] lg:top-0 lg:left-0 h-[84px] w-[86px] lg:h-[193px] lg:w-[191px]"
                    src="/images/Blogs/Frame 642.svg"
                    priority
                />
                <div className="flex flex-col gap-y-8 items-center z-10">
                    <div className="flex flex-col justify-center items-center gap-y-1">
                        <p className="text-darkGrayColor text-xl font-bold">
                            Scholarship
                        </p>
                        <h1 className="text-mainTextColor text-[26px] font-extrabold">
                            Explore thousands of scholarships across the world
                        </h1>
                    </div>
                    <SearchQueryBox />
                </div>
                <Image
                    height={193}
                    width={191}
                    alt="blog-round-2"
                    className="absolute bottom-0 right-0 h-[84px] w-[86px] lg:h-[193px] lg:w-[191px]"
                    src="/images/Blogs/Frame 643.svg"
                />
            </div>
            <div className="w-full pb-28">
                <div className="max-w-[1200px] 2xl:max-w-[2400px] mx-auto px-5 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300 flex justify-between">
                    <ScholarshipFilter />
                    <RightScholarshipCardBox />
                </div>
            </div>
            <div className="w-full pb-20 2xl:pb-[700px] flex flex-col items-center overflow-hidden">
                <p className="text-[23px] font-bold text-blueColor mb-1">
                    Scholarships
                </p>
                <h1 className="text-textLightBlackColor text-[48px] font-extrabold mb-5 text-center hidden lg:block">
                    Scholarships you may be interested in
                </h1>
                <h1 className="text-mainTextColor text-[48px] font-extrabold mb-5 text-center lg:hidden block">
                    Discover Scholarships{' '}
                </h1>
            </div>
            <Testimonial />
        </>
    );
};

export default Scholarship;
