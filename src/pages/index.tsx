import Card from '@/components/Home/Card';
import EventCard from '@/components/Home/EventCard';
import Slider from '@/components/Slider/Slider';
import Testimonal from '@/components/Testimonal/Testimonal';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
    return (
        <>
            <div className="w-full flex items-center mt-[100px] bg-white py-20 relative pb-12">
                <Image
                    height={104}
                    width={104}
                    alt="home-round"
                    className="absolute top-64 left-0"
                    src="/images/Home/homeRound1.svg"
                    priority
                />
                <Image
                    height={60}
                    width={60}
                    alt="home-round-2"
                    className="absolute top-9 right-[542px]"
                    src="/images/Home/homeRound2.svg"
                    priority
                />
                <div className="flex justify-between z-10 w-full">
                    <div className="flex flex-col pl-36 pr-12 pt-32">
                        <div className="pr-60 mb-5">
                            <h1 className="text-mainTextColor text-[45px] font-black mb-2">
                                World&lsquo;s Largest Course Search Platform
                            </h1>
                            <p className="text-aboutUsTextColor text-[15px] leading-6 aboutUsTextColor mb-5 font-normal">
                                Make your university application stress free and
                                discover in minutes if you&lsquo;d get into your
                                dream university. Enter your academic profile
                                and get a decision in real time.
                            </p>
                        </div>
                        <div className="rounded-[10px] bg-white custom-shadow p-2 pl-5 z-20">
                            <div className="bg-white flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <p className="p-[10px] pb-[9px] font-medium text-darkGrayColor text-base w-[130px]">
                                            What to Study?
                                        </p>
                                        <div className="w-[37px] rotate-[-90deg] border border-textLightBlackColor ml-28"></div>
                                    </div>
                                    <p className="p-[10px] pb-[9px] font-medium text-darkGrayColor text-base w-[130px] ml-5">
                                        What to Study?
                                    </p>
                                </div>
                                <button className="py-4 px-[67px] rounded-[5px] bg-blueColor text-white font-medium text-lg">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <Image
                        height={597}
                        width={512}
                        alt="home-main"
                        className="absolute top-16 right-16 z-10"
                        src="/images/Home/Home Img.svg"
                        priority
                    />
                    <div className="bg-profileBgColor rounded-[10px] relative h-[597px] w-[512px] mt-16"></div>
                </div>
                <Image
                    height={104}
                    width={104}
                    alt="hoem-round-3"
                    className="absolute bottom-24 right-[640px]"
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
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-2 2xl:px-8 transition-all duration-300 flex gap-x-8">
                    <div className="pt-16 w-[35%]">
                        <p className="text-blueColor text-[23px] font-bold">
                            Top Categories
                        </p>
                        <h1 className="text-mainTextColor font-extrabold text-[35px] mb-2">
                            Explore our Popular Categories
                        </h1>
                        <p className="text-darkGrayColor text-base mb-7">
                            Pellentesque fringilla, massa sit amet feugiat
                            mollis, leo turpis elementum justo, vel consequat ex
                            urna ut massa maecenas justo sapien.
                        </p>
                        <Link href="/fields">
                            <button className="pt-4 pb-[17px] px-[48px] bg-blueColor rounded-[5px] font-semibold text-white">
                                All Categories
                            </button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 z-10 w-[65%]">
                        <Card
                            img="/images/Home/download (35).svg"
                            title="Art & Design"
                        />
                        <Card
                            img="/images/Home/download (39).svg"
                            title="Marketing"
                        />
                        <Card
                            img="/images/Home/download (31).svg"
                            title="Business"
                        />
                        <Card
                            img="/images/Home/download (32).svg"
                            title="Devolopment"
                        />
                        <Card
                            img="/images/Home/download (36).svg"
                            title="Data Science"
                        />
                        <Card
                            img="/images/Home/Marketion.svg"
                            title="Marketing"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full pb-20 2xl:pb-[700px] flex flex-col items-center overflow-hidden bg-white">
                <p className="text-[23px] font-bold text-blueColor mb-1">
                    Scholarships
                </p>
                <h1 className="text-textLightBlackColor text-[48px] font-extrabold mb-5 text-center">
                    Scholarships you may be interested in
                </h1>
                <Slider />
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
            <Testimonal />
        </>
    );
};

Home.layout = { auth: true };

export default Home;
