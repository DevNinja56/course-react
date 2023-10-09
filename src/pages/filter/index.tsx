import Card from '@/components/FilterPage/Card';
import FilterLeftBox from '@/components/FilterPage/FilterLeftBox';
import Slider from '@/components/Slider/Slider';
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
                    <div className="relative">
                        <div className="relative">
                            <input
                                className="custom-shadow rounded-[10px] py-5 pl-[52px] outline-none text-base text-mainTextColor pr-[520px]"
                                placeholder="Type here"
                            />
                            <Image
                                height={20}
                                width={20}
                                alt="search"
                                className="absolute top-[21px] left-6"
                                src="/images/Scholarships/search.svg"
                                priority
                            />
                        </div>
                        <button className="py-[11px] px-[39px] absolute right-3 top-[11px] bg-blueColor rounded-[5px] text-white text-sm">
                            Search
                        </button>
                    </div>
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
                    <div className="flex flex-col gap-y-7 w-[73%]">
                        <div className="flex flex-col gap-y-4">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="font-bold text-[23px] text-mainTextColor">
                                    2521 Results Found
                                </h1>
                                <div className="flex items-center gap-x-4">
                                    <p className="text-grayColor">Sort by:</p>
                                    <div className="relative group">
                                        <button className="py-2 px-4 rounded-[5px] border-2 border-scholarshipBorderColor flex items-center gap-x-[6px] text-sm text-darkGrayColor">
                                            Select Option{' '}
                                            <Image
                                                height={20}
                                                width={20}
                                                alt="arrow-down"
                                                src="/images/Scholarships/chevron-down.svg"
                                                priority
                                            />
                                        </button>
                                        <div className="absolute top-12 left-0 w-full py-4 custom-shadow rounded-[10px] flex-col bg-white hidden group-hover:flex z-20">
                                            <div className="flex items-center gap-x-1 hover:bg-profileBgColor p-3 text-grayColor hover:text-blueColor cursor-pointer">
                                                <Image
                                                    height={20}
                                                    width={20}
                                                    alt="dropDown-icon"
                                                    src="/images/Scholarships/Transfer Vertical.svg"
                                                    priority
                                                />
                                                <p className="z-10">A-Z</p>
                                            </div>
                                            <div className="flex items-center gap-x-1 hover:bg-profileBgColor p-3 text-grayColor hover:text-blueColor cursor-pointer">
                                                <Image
                                                    height={20}
                                                    width={20}
                                                    alt="dropDown-icon"
                                                    src="/images/Scholarships/Transfer Vertical.svg"
                                                    priority
                                                />
                                                <p className="z-10">Z-A</p>
                                            </div>
                                            <div className="flex items-center gap-x-1 hover:bg-profileBgColor p-3 text-grayColor hover:text-blueColor cursor-pointer group">
                                                <Image
                                                    height={20}
                                                    width={20}
                                                    alt="dropDown-icon"
                                                    src="/images/Scholarships/Sort From Bottom To Top.svg"
                                                    priority
                                                />
                                                <p className="z-10">Duration</p>
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M12 20V4M12 4L18 10M12 4L6 10"
                                                        className="stroke-mainTextColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="flex items-center gap-x-1 hover:bg-profileBgColor p-3 text-grayColor hover:text-blueColor cursor-pointer group">
                                                <Image
                                                    height={20}
                                                    width={20}
                                                    alt="dropDown-icon"
                                                    src="/images/Scholarships/Sort From Top To Bottom.svg"
                                                    priority
                                                />
                                                <p className="z-10">Duration</p>
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M12 4V20M12 20L18 14M12 20L6 14"
                                                        className="stroke-mainTextColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="border border-scholarshipBorderColor" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                            <Card
                                img="/images/FilterPage/Rectangle 3634.svg"
                                title="Clarendon Fund Scholarships
                                at University of Oxford"
                            />
                            <Card
                                img="/images/FilterPage/Rectangle 3634 2.svg"
                                title="Fully-Funded Rotary Peace 
                                Fellowships"
                            />
                            <Card
                                img="/images/FilterPage/Rectangle 3634 3.svg"
                                title="Sport Liverpool Scholarships"
                            />
                            <Card
                                img="/images/FilterPage/Rectangle 3634.svg"
                                title="Clarendon Fund Scholarships
                                at University of Oxford"
                            />
                            <Card
                                img="/images/FilterPage/Rectangle 3634 2.svg"
                                title="Fully-Funded Rotary Peace 
                                Fellowships"
                            />
                            <Card
                                img="/images/FilterPage/Rectangle 3634 3.svg"
                                title="Sport Liverpool Scholarships"
                            />
                            <Card
                                img="/images/FilterPage/Rectangle 3634.svg"
                                title="Clarendon Fund Scholarships
                                at University of Oxford"
                            />
                            <Card
                                img="/images/FilterPage/Rectangle 3634 2.svg"
                                title="Fully-Funded Rotary Peace 
                                Fellowships"
                            />
                            <Card
                                img="/images/FilterPage/Rectangle 3634 3.svg"
                                title="Sport Liverpool Scholarships"
                            />
                            <Card
                                img="/images/FilterPage/Rectangle 3634.svg"
                                title="Clarendon Fund Scholarships
                                at University of Oxford"
                            />
                            <Card
                                img="/images/FilterPage/Rectangle 3634 2.svg"
                                title="Fully-Funded Rotary Peace 
                                Fellowships"
                            />
                            <Card
                                img="/images/FilterPage/Rectangle 3634 3.svg"
                                title="Sport Liverpool Scholarships"
                            />
                        </div>
                        <div className="w-full flex justify-center">
                            <div className="flex items-center gap-x-6">
                                <button className="h-[39px] w-[39px] rounded-full bg-profileBgColor flex items-center justify-center">
                                    <Image
                                        height={11.11}
                                        width={5.56}
                                        alt="arrow-left"
                                        src="/images/Scholarships/Vector2.svg"
                                        priority
                                    />
                                </button>
                                <p className="font-medium text-darkGrayColor">
                                    1
                                </p>
                                <p className="font-medium border-b border-blueColor text-blueColor">
                                    2
                                </p>
                                <p className="font-medium text-darkGrayColor">
                                    3
                                </p>
                                <p className="font-medium text-darkGrayColor">
                                    ---
                                </p>
                                <p className="font-medium text-darkGrayColor">
                                    67
                                </p>
                                <button className="h-[39px] w-[39px] rounded-full bg-profileBgColor flex items-center justify-center">
                                    <Image
                                        height={11.11}
                                        width={5.56}
                                        alt="arrow-right"
                                        src="/images/Scholarships/Vector.svg"
                                        priority
                                    />
                                </button>
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

export default FilterPage;
