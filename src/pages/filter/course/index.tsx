import CourseFilter from '@/components/FilterPage/Course/FilterLeftBox';
import RightCardsBox from '@/components/FilterPage/Course/RightCardsBox';
import SearchQueryBox from '@/components/FilterPage/SearchQueryBox';
import ScholarshipSlider from '@/components/Slider/ScholarshipSlider';
// import Image from 'next/image';

const FilterPage = () => {
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
                <div className="flex flex-col gap-y-5 md:gap-y-8 items-center z-10 px-5 md:px-[50px] lg:px-2">
                    <div className="flex flex-col justify-center items-center gap-y-1">
                        <p className="text-darkGrayColor text-xl font-bold">
                            Discover
                        </p>
                        <h1 className="text-mainTextColor text-2xl md:text-[26px] text-center font-extrabold">
                            Discover thousands of Institutes across the UK
                        </h1>
                    </div>
                    <SearchQueryBox />
                </div>
                <img
                    height={193}
                    width={191}
                    alt="blog-round-2"
                    className="absolute bottom-0 right-0 h-[84px] w-[86px] lg:h-[193px] lg:w-[191px]"
                    src="/images/Blogs/Frame 643.svg"
                />
            </div>
            <div className="w-full  pb-28 pt-10 bg-mainBackgroundColor bg-opacity-5">
                <div className="container mx-auto px-5 md:px-[50px] lg:px-10 transition-all duration-300 flex justify-between">
                    <CourseFilter />
                    <RightCardsBox />
                </div>
            </div>
            <div className="w-full pb-40 flex flex-col items-center overflow-hidden">
                <p className="text-xl md:text-[23px] font-bold text-blueColor mb-2">
                    Scholarships
                </p>
                <h1 className="text-textLightBlackColor text-3xl md:text-[48px] font-extrabold mb-10 text-center">
                    Scholarships you may be interested in
                </h1>
                <ScholarshipSlider />
            </div>
        </>
    );
};

FilterPage.layout = { auth: false };

export default FilterPage;
