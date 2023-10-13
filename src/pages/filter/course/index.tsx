import FilterLeftBox from '@/components/FilterPage/FilterLeftBox';
import RightCardsBox from '@/components/FilterPage/RightCardsBox';
import SearchQueryBox from '@/components/FilterPage/SearchQueryBox';
import Slider from '@/components/Slider';
import Testimonial from '@/components/Testimonial/Testimonal';
import Image from 'next/image';

const FilterPage = () => {
    return (
        <>
            <div className="w-full flex items-center justify-center mt-[100px] bg-profileBgColor py-20 relative mb-10">
                <Image
                    height={193}
                    width={191}
                    alt="filterPage-round"
                    className="absolute top-0 left-0"
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
                    alt="filterPage-round-2"
                    className="absolute bottom-0 right-0"
                    src="/images/Blogs/Frame 643.svg"
                    priority
                />
            </div>
            <div className="w-full pb-28">
                <div className="max-w-[1200px] 2xl:max-w-[2400px] mx-auto px-2 2xl:px-8 transition-all duration-300 flex justify-between">
                    <FilterLeftBox />
                    <RightCardsBox />
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

FilterPage.layout = { auth: true };

export default FilterPage;
