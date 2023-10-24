import Image from 'next/image';
import Testimonial from '@/components/Testimonial';
import EventCard from '@/components/Home/EventCard';
import SearchBox from '@/components/Home/SearchBox';
import ScholarshipSlider from '@/components/Slider/ScholarshipSlider';
import CategoriesSection from '@/components/Home/CategoriesSection';

const Home = () => {
    return (
        <>
            <div className="w-full flex items-center mt-[100px] bg-white py-0 lg:py-20 relative pb-12">
                <Image
                    height={104}
                    width={104}
                    alt="home-round"
                    className="absolute bottom-0 lg:top-64 left-0"
                    src="/images/Home/homeRound1.svg"
                    priority
                />
                <Image
                    height={60}
                    width={60}
                    alt="home-round-2"
                    className="absolute top-[330px] lg:top-9 right-[605px] lg:right-[542px]"
                    src="/images/Home/homeRound2.svg"
                    priority
                />
                <div className="flex flex-col lg:flex-row justify-between z-10 w-full lg:px-0">
                    <div className="flex flex-col px-12 lg:px-0 lg:pl-4 xl:pl-36 lg:pr-40 xl:pr-12 pt-16 lg:pt-32">
                        <div className="pr-0 lg:pr-60 mb-5">
                            <h1 className="text-mainTextColor text-[45px] font-black mb-2">
                                World&lsquo;s Largest Course Search Platform
                            </h1>
                            <p className="text-aboutUsTextColor text-base leading-6 aboutUsTextColor mb-5 font-normal">
                                Make your university application stress free and
                                discover in minutes if you&lsquo;d get into your
                                dream university. Enter your academic profile
                                and get a decision in real time.
                            </p>
                        </div>
                        <SearchBox />
                    </div>
                    <Image
                        height={597}
                        width={512}
                        alt="home-main"
                        className="absolute bottom-20 lg:top-16 right-16 z-10 w-[577px] lg:w-[512px]"
                        src="/images/Home/Home Img.svg"
                        priority
                    />
                    <div className="h-[765px] lg:h-[597px] w-full lg:w-[512px] flex justify-end">
                        <div className="bg-profileBgColor rounded-[10px] relative mt-40 lg:mt-16 h-[80%] lg:h-full w-[50%] lg:w-full"></div>
                    </div>
                </div>
                <Image
                    height={104}
                    width={104}
                    alt="home-round-3"
                    className="absolute bottom-0 xl:bottom-24 right-[640px] hidden lg:block"
                    src="/images/Home/homeRound3.svg"
                    priority
                />
            </div>
            <div className="w-full p-10 pb-40 relative bg-white pt-16">
                <Image
                    height={74}
                    width={74}
                    alt="home-round-4"
                    className="absolute left-6 bottom-40"
                    src="/images/Home/topCategoryRound1.svg"
                    priority
                />
                <Image
                    height={450}
                    width={450}
                    alt="home-round-5"
                    className="absolute right-0 top-3"
                    src="/images/Home/topCategoryRound2.svg"
                    priority
                />
                <CategoriesSection />
            </div>
            <div className="w-full pb-20 2xl:pb-[700px] flex flex-col items-center overflow-hidden bg-white">
                <p className="text-[23px] font-bold text-blueColor mb-1">
                    Scholarships
                </p>
                <h1 className="text-textLightBlackColor text-[48px] font-extrabold mb-5 text-center">
                    Scholarships you may be interested in
                </h1>
                <ScholarshipSlider />
            </div>
            <div className="w-full p-10 pb-32 relative bg-white">
                <Image
                    height={100}
                    width={100}
                    alt="card-round"
                    src="/images/Home/ourEventsRoundImgone.svg"
                    className="absolute left-0 bottom-52"
                    priority
                />
                <Image
                    height={74}
                    width={74}
                    alt="card-round"
                    src="/images/Home/ourEventsRoundImg2.svg"
                    className="absolute right-[70px] top-[275px]"
                    priority
                />
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-2 2xl:px-8 transition-all duration-300 flex flex-col items-center">
                    <p className="font-bold text-[23px] text-blueColor mb-3">
                        Our Events
                    </p>
                    <h1 className="font-extrabold text-[48px] text-mainTextColor mb-10">
                        Join our upcoming event
                    </h1>
                    <div className="flex flex-col gap-6 w-full z-10">
                        <EventCard date="02" />
                        <EventCard date="10" />
                        <EventCard date="20" />
                        <EventCard date="27" />
                    </div>
                </div>
            </div>
            <div className="bg-profileBgColor py-[35px] px-9 flex items-center justify-between gap-5 relative">
                <Image
                    height={70}
                    width={70}
                    alt="round-img-chooseus"
                    className="absolute right-6 top-16"
                    src="/images/Home/whychooseusroundimg2.svg"
                    priority
                />
                <Image
                    height={750.41}
                    width={600}
                    alt="main"
                    src="/images/Home/why choose us mainImg.svg"
                    priority
                />
                <div className="flex flex-col pr-16 z-10">
                    <h1 className="text-mainTextColor text-[40px] font-extrabold mb-5">
                        Why Choose Us?
                    </h1>
                    <p className="text-darkGrayColor mb-10 text-[15px]">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form. There are many variations of passages of
                        Lorem Ipsum available.
                    </p>
                    <div className="flex flex-col gap-y-5 mb-12">
                        <div className="flex items-center gap-3">
                            <div className="bg-purpleColor flex items-center justify-center h-[32px] w-[32px] rounded-full">
                                <Image
                                    height={18}
                                    width={18}
                                    alt="check"
                                    src="/images/Home/check.svg"
                                    priority
                                />
                            </div>
                            <p className="font-medium text-darkGrayColor">
                                There are many variations of passages of Lorem
                                Ipsum.
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-pinkColor flex items-center justify-center h-[32px] w-[32px] rounded-full">
                                <Image
                                    height={18}
                                    width={18}
                                    alt="check"
                                    src="/images/Home/check.svg"
                                    priority
                                />
                            </div>
                            <p className="font-medium text-darkGrayColor">
                                There are many variations of passages of Lorem
                                Ipsum.
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-blueColor flex items-center justify-center h-[32px] w-[32px] rounded-full">
                                <Image
                                    height={18}
                                    width={18}
                                    alt="check"
                                    src="/images/Home/check.svg"
                                    priority
                                />
                            </div>
                            <p className="font-medium text-darkGrayColor">
                                There are many variations of passages of Lorem
                                Ipsum.
                            </p>
                        </div>
                    </div>
                    <button className="py-[17px] px-[48px] rounded-[5px] bg-blueColor text-white font-semibold text-lg hover:bg-blue-600 w-fit">
                        More Details
                    </button>
                </div>
            </div>
            <Testimonial />
        </>
    );
};

Home.layout = { auth: false };

export default Home;
