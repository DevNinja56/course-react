import Image from 'next/image';
import EventCard from '@/components/Home/EventCard';
import SearchBox from '@/components/Home/SearchBox';
import ScholarshipSlider from '@/components/Slider/ScholarshipSlider';
import CategoriesSection from '@/components/Home/CategoriesSection';

const Home = () => {
    return (
        <>
            <div className="w-full flex items-center mt-16 md:mt-[100px] bg-white pt-0 pb-0 lg:pt-20 lg:pb-40 relative overflow-hidden lg:overflow-visible xl:container 2xl:justify-center mx-auto">
                <div className="h-10 w-10 md:h-28 md:w-28 rounded-full border-[10px] md:border-[20px] border-blueColor absolute top-[360px] md:top-20 right-2 md:right-[-50px] block lg:hidden"></div>
                <Image
                    height={104}
                    width={104}
                    alt="home-round"
                    className="absolute bottom-0 lg:top-64 left-0 hidden md:block w-24 h-24 lg:h-[104px] lg:w-[104px]"
                    src="/images/Home/homeRound1.svg"
                    priority
                />
                <Image
                    height={60}
                    width={60}
                    alt="home-round-2"
                    className="absolute top-[425px] lg:top-9 right-[605px] lg:right-[542px]"
                    src="/images/Home/homeRound2.svg"
                    priority
                />
                <div className="flex flex-col lg:flex-row justify-between z-10 w-full">
                    <div className="flex flex-col px-6 md:px-12 lg:px-0 lg:pl-4 lg:pr-40 xl:pr-12 pt-16 lg:pt-32">
                        <div className="pr-0 lg:pr-60 mb-5">
                            <h1 className="text-mainTextColor text-[32px] md:text-[45px] font-black mb-2">
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
                        className="absolute bottom-8 lg:top-16 right-16 z-10 w-[577px] lg:w-[512px] md:block hidden"
                        src="/images/Home/Home Img.svg"
                        priority
                    />
                    <div className="h-auto md:h-[765px] lg:h-[597px] w-full lg:w-[512px] flex justify-end mt-[-40px] md:mt-0 md:py-0">
                        <div className="py-16 md:py-0 bg-profileBgColor rounded-[10px] relative mt-0 md:mt-60 lg:mt-16 h-full md:h-[80%] lg:h-full w-full md:w-[50%] lg:w-full flex items-center justify-center px-6 md:px-0">
                            <Image
                                height={597}
                                width={512}
                                alt="home-main"
                                className="w-full block md:hidden"
                                src="/images/Home/Home Img.svg"
                                priority
                            />
                        </div>
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
            <div className="w-full px-0 lg:px-0 pb-40 relative bg-white pt-4 md:pt-16 overflow-y-visible overflow-x-hidden md:overflow-hidden">
                <div className="h-[134px] w-[134px] border-[15px] border-blueColor rounded-full absolute right-[-40px] top-[-30px] z-10 block md:hidden"></div>
                <Image
                    height={74}
                    width={74}
                    alt="home-round-4"
                    className="absolute left-4 lg:left-6 top-[390px] lg:bottom-40 hidden md:block"
                    src="/images/Home/topCategoryRound1.svg"
                    priority
                />
                <Image
                    height={450}
                    width={450}
                    alt="home-round-5"
                    className="absolute right-[-200px] lg:right-0 bottom-28 lg:top-3 h-[550px] w-[550px] lg:h-[450px] lg:w-[450px] hidden md:block"
                    src="/images/Home/topCategoryRound2.svg"
                    priority
                />
                <CategoriesSection />
            </div>
            <div className="w-full py-8 md:py-12 lg:py-16">
                <div className="container mx-auto flex flex-col items-center overflow-hidden">
                    <h1 className="text-xl md:text-2xl font-bold text-blueColor mb-1">
                        Scholarships
                    </h1>
                    <h4 className="text-textLightBlackColor text-[32px] md:text-[48px] font-extrabold mb-5 text-center">
                        Scholarships you may be interested in
                    </h4>
                </div>
                <ScholarshipSlider />
            </div>
            <div className="w-full pb-32 relative bg-white">
                <Image
                    height={100}
                    width={100}
                    alt="card-round"
                    src="/images/Home/ourEventsRoundImgone.svg"
                    className="absolute left-0 bottom-40 lg:bottom-52 hidden md:block"
                    priority
                />
                <Image
                    height={74}
                    width={74}
                    alt="card-round"
                    src="/images/Home/ourEventsRoundImg2.svg"
                    className="absolute right-4 lg:right-0 xl:right-28 top-[285px] lg:top-[230px] hidden md:block"
                    priority
                />
                <div className="container mx-auto px-4 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300 flex flex-col items-center">
                    <p className="font-bold text-xl md:text-[23px] text-blueColor mb-3">
                        Our Events
                    </p>
                    <h1 className="font-extrabold text-[32px] md:text-[48px] text-mainTextColor mb-10 text-center md:text-start">
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
            <div className="bg-profileBgColor py-[35px] px-9  gap-10 md:gap-0 xl:gap-5 relative ">
                <Image
                    height={70}
                    width={70}
                    alt="round-img-chooses"
                    className="absolute right-0 top-[-60px] block md:hidden"
                    src="/images/Home/mobile responsive roundImg.svg"
                    priority
                />{' '}
                <Image
                    height={70}
                    width={70}
                    alt="round-img-chooses"
                    className="absolute right-4 lg:right-0 xl:right-6 top-10 lg:top-16 hidden md:block"
                    src="/images/Home/whychooseusroundimg2.svg"
                    priority
                />
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <Image
                        height={750.41}
                        width={600}
                        className="w-full lg:w-[600px] hidden md:block"
                        alt="main"
                        src="/images/Home/why choose us mainImg.svg"
                        priority
                    />
                    <Image
                        height={750.41}
                        width={600}
                        className="w-full lg:w-[600px] block md:hidden"
                        alt="main"
                        src="/images/Home/mobileWhyChooseUsImg.svg"
                        priority
                    />
                    <div className="flex flex-col px-0 md:px-20 lg:pr-0 xl:pr-16 z-10 ">
                        <h1 className="text-mainTextColor text-3xl md:text-[40px] font-extrabold mb-5">
                            Why Choose Us?
                        </h1>
                        <p className="text-darkGrayColor mb-10 text-[15px]">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form. There are many variations of passages
                            of Lorem Ipsum available.
                        </p>
                        <div className="flex flex-col gap-y-5 mb-12">
                            <div className="flex items-center gap-3">
                                <div className="bg-purpleColor flex items-center justify-center h-[32px] min-w-[32px] rounded-full">
                                    <Image
                                        height={18}
                                        width={18}
                                        alt="check"
                                        src="/images/Home/check.svg"
                                        priority
                                    />
                                </div>
                                <p className="font-medium text-darkGrayColor">
                                    There are many variations of passages of
                                    Lorem Ipsum.
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-pinkColor flex items-center justify-center h-[32px] min-w-[32px] rounded-full">
                                    <Image
                                        height={18}
                                        width={18}
                                        alt="check"
                                        src="/images/Home/check.svg"
                                        priority
                                    />
                                </div>
                                <p className="font-medium text-darkGrayColor">
                                    There are many variations of passages of
                                    Lorem Ipsum.
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-blueColor flex items-center justify-center h-[32px] min-w-[32px] rounded-full">
                                    <Image
                                        height={18}
                                        width={18}
                                        alt="check"
                                        src="/images/Home/check.svg"
                                        priority
                                    />
                                </div>
                                <p className="font-medium text-darkGrayColor">
                                    There are many variations of passages of
                                    Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                        <button className="py-[17px] px-[48px] rounded-[5px] bg-blueColor text-white font-semibold text-lg hover:bg-blue-600 w-fit">
                            More Details
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

Home.layout = { auth: false, ip: null };

export default Home;
