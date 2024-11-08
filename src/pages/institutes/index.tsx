import React from 'react';
import ScreenLoader from '@/components/Loader/ScreenLoader';
import UniversitiesCards from '@/components/Universities/UniversitiesCard';
import { useGetInstituteQuery } from '@/store/slices/allRequests';
import SearchQueryBox from '@/components/FilterPage/SearchQueryBox';

const Universities = () => {
    const { data } = useGetInstituteQuery();

    return (
        <>
            <div className="w-full flex items-center justify-center bg-profileBgColor py-24 md:py-20 relative ">
                <img
                    height={193}
                    width={191}
                    alt="blog-round"
                    className="absolute top-[-20px] left-[-20px] lg:top-0 lg:left-0 h-[84px] w-[86px] lg:h-[193px] lg:w-[191px]"
                    src="/images/Blogs/Frame 642.svg"
                    // priority
                />
                <div className="flex flex-col gap-y-5 md:gap-y-8 items-center z-10 px-5 md:px-[50px] lg:px-2 ">
                    <div className="flex flex-col justify-center items-center gap-y-1">
                        <p className="text-darkGrayColor text-xl font-bold">
                            Your Quick Book To Explore
                        </p>
                        <h1 className="text-mainTextColor text-2xl md:text-[26px] text-center font-extrabold">
                            LEADING UK UNIVERSITIES
                        </h1>
                    </div>
                    <SearchQueryBox isLocation/>
                </div>
                <img
                    height={193}
                    width={191}
                    alt="blog-round-2"
                    className="absolute bottom-0 right-0 h-[84px] w-[86px] lg:h-[193px] lg:w-[191px]"
                    src="/images/Blogs/Frame 643.svg"
                />
            </div>
            <div className="w-full pb-8 md:pb-20 mt-16">
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-2 2xl:px-8 transition-all duration-300 flex justify-between">
                    <div className="flex flex-wrap gap-[30px] items-center justify-center w-full">
                        {data && data.length > 0 ? (
                            data?.map((item) => (
                                <UniversitiesCards
                                    key={'institute_list__' + item.id}
                                    institute={item}
                                />
                            ))
                        ) : (
                            <ScreenLoader />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Universities;
