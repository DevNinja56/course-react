import Image from 'next/image';
import { IoMdBook } from 'react-icons/io';
import { PiBuildings } from 'react-icons/pi';
import { SlGraduation } from 'react-icons/sl';
import HeroSectionCard from '@/components/Home/HeriSectionCard';
import SmartMatchButton from '@/components/Home/SmartMatchButton';
import HomeLearnMoreSection from '@/components/Home/HomeLearnMoreSection';
import SearchAnywhereContainer from '@/components/Home/SearchAnywhereContainer';
import DisciplineSection from '@/components/Home/DisciplineSection';
import { ROUTES } from '@/config/constant';

const Home = () => {
    return (
        <>
            <div className="w-full flex items-center bg-white relative overflow-visible 2xl:justify-center mx-auto">
                <img
                    height={104}
                    width={104}
                    alt="home-round"
                    className="absolute top-0 lg:top-12 right-0 hidden md:block w-24 h-24 lg:h-28 lg:w-28 z-10 rotate-180"
                    src="/images/Home/ourEventsRoundImgone.svg"
                />
                <img
                    height={70}
                    width={70}
                    alt="home-round-2"
                    className="absolute -top-5 md:top-auto md:bottom-2 lg:bottom-10 left-2 md:-left-7 z-10 h-8 w-8 md:h-auto md:w-auto"
                    src="/images/Home/homeRound2.svg"
                />
                <div className="w-full -mt-16 relative bg-custom-hero-section-gradient h-[65vh] md:h-screen flex items-center justify-center">
                    <Image
                        height={1400}
                        width={2100}
                        src="/images/Home/home-page-hero-section-bg.png"
                        alt="home-hero-section-image"
                        className="w-full h-full opacity-70 absolute left-0 top-0"
                    />
                    <div className="flex flex-col gap-8 md:gap-20 lg:gap-28 z-10 pt-14 w-full md:w-auto px-2 md:px-0">
                        <div className="flex flex-col gap-6 lg:gap-12 items-center">
                            <h1 className="font-bold text-white text-lg md:text-4xl lg:text-5xl">
                                <span className="border-b-4 md:border-b-8 border-blueColor">
                                    UK&apos;s Largest
                                </span>{' '}
                                Course Search Platform
                            </h1>
                            <SmartMatchButton text="Find Your Course With" />
                        </div>
                        <div className="py-3 md:py-4 px-2 md:px-14 flex items-center justify-between rounded-2xl bg-black/35 mx-auto w-full md:w-auto md:gap-6">
                            <HeroSectionCard
                                Icon={
                                    <IoMdBook className="text-xl md:text-[40px]" />
                                }
                                heading="16,000+"
                                title="Courses"
                            />
                            <hr className="h-12 md:h-16 border border-white hidden md:block" />
                            <HeroSectionCard
                                Icon={
                                    <PiBuildings className="text-xl md:text-[40px]" />
                                }
                                heading="100+"
                                title="Institutes"
                            />
                            <hr className="h-12 md:h-16 border border-white hidden md:block" />
                            <HeroSectionCard
                                Icon={
                                    <SlGraduation className="text-xl md:text-[40px]" />
                                }
                                heading="750+"
                                title="Scholarships"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center justify-between px-2 md:px-8 lg:px-20 xl:px-40 pt-10 pb-5 gap-10 lg:gap-0">
                <div className="flex flex-col items-center md:items-start gap-5 md:gap-10 w-full lg:w-6/12">
                    <div className="flex flex-col md:items-start items-center gap-3 md:gap-5">
                        <div className="flex items-center font-extrabold italic text-lg md:text-3xl text-blueColor">
                            <Image
                                height={2329}
                                width={2329}
                                alt="smart-match-icon-2"
                                src="/images/Home/smart-match-icon-2.svg"
                                className="h-5 w-5 md:h-10 md:w-10"
                            />
                            SmartMatch
                        </div>
                        <p className="text-xs md:text-base text-center md:text-start">
                            Our AI-powered SmartMatch tool recommends the best
                            courses for you by analyzing your qualifications,
                            preferences, and budget in seconds.
                        </p>
                    </div>
                    <div>
                        <SmartMatchButton
                            fontSize="text-xs md:text-base"
                            gap="gap-1.5"
                            text="Learn More About"
                        />
                    </div>
                </div>
                <div className="relative w-9/12 md:w-7/12 lg:w-5/12">
                    <Image
                        height={2483}
                        width={2710}
                        alt="mobile-home-smart-watch"
                        src="/images/Home/home-smart-match-mobile.png"
                        className="h-full w-full"
                    />
                    <div className="absolute bottom-5 md:bottom-16 xl:bottom-24 -left-7 md:-left-11 flex flex-col w-6/12">
                        <h1 className="text-xs md:text-base font-bold text-blueColor">
                            Tailored Suggestions
                        </h1>
                        <p className="text-[8px] md:text-xs">
                            Receive personalized results that fit your
                            qualifications and budget.
                        </p>
                    </div>
                </div>
            </div>
            <HomeLearnMoreSection
                image="/images/Home/home-page-discover-section.png"
                imageSize="w-full md:w-10/12 lg:w-[50%] lg:pt-5"
                heading="Discover the Right Course"
                discoverParagraph
                title="Fees, Requirements, Language, Scholarships"
                circleStyling="bottom-0 top-64 lg:-top-7 right-0 rotate-180"
                backgroundColor
                link=""
            />
            <div className="w-full relative bg-white py-20 lg:py-36">
                <img
                    height={450}
                    width={450}
                    alt="home-round-5"
                    className="absolute right-[-200px] lg:right-0 bottom-28 lg:top-24 h-[550px] w-[550px] lg:h-80 lg:w-80 hidden md:block"
                    src="/images/Home/topCategoryRound2.svg"
                />

                <DisciplineSection />
            </div>
            <HomeLearnMoreSection
                image="/images/Home/home-local-entry.png"
                imageSize="w-full md:w-8/12 lg:w-5/12 lg:pr-16 xl:pr-12"
                heading="Local Entry Requirements"
                paragraph="Our platform provides localized entry requirements based on your country of education, ensuring you see only relevant criteria for your application."
                title="Country-Specific, Relevant, Accurate, Easy to Understand"
                circleStyling="bottom-0 top-64 lg:top-44 right-0 rotate-180"
                leftSideContent
                backgroundColor
                link=""
            />
            <HomeLearnMoreSection
                image="/images/Home/home-bank-statement-mobile.png"
                imageSize="w-full md:w-8/12 lg:w-5/12"
                heading="Bank Statement Calculator"
                paragraph="Our Bank Statement Calculator provides accurate financial proof requirements for your visa with a simple click of a button on every course page."
                title="Accurate, Visa Ready, Convenient, Detailed Calculations"
                circleStyling="bottom-0 top-96 lg:top-12 -left-10"
                link=""
            />
            <HomeLearnMoreSection
                image="/images/Home/home-counsellor.png"
                imageSize="w-full md:w-8/12 lg:w-6/12 xl:w-5/12 lg:pl-28 xl:pl-20"
                heading="Expert Counselling at Every Step"
                paragraph="From application submission to visa processing, our expert counselors guide you every step of the way, ensuring your success."
                title="Application, Visa, Interviews, Documents"
                circleStyling="bottom-0 top-64 lg:-bottom-14 lg:top-auto -right-10 rotate-180"
                leftSideContent
                backgroundColor
                link=""
            />
            <HomeLearnMoreSection
                image="/images/Home/home-ucas-image.png"
                imageSize="w-10/12 md:w-6/12 lg:w-5/12 xl:w-[30%] lg:pl-12"
                heading="UCAS Application Support"
                paragraph="We offer full support for your UCAS applications, helping you apply for undergraduate courses in the UK efficiently and accurately."
                title="Guidance, Tracking, Preferences, Deadlines"
                circleStyling="bottom-0 top-64 lg:top-12 -left-10"
                noCircle
                link={ROUTES.UCAS_APPLICATION}
            />
            <div className="w-full bg-blueColor z-10 relative py-16">
                <div className="h-24 w-24 lg:h-32 lg:w-32 rounded-full border-[15px] border-[#10BDF3] absolute top-7 lg:bottom-0 -left-8 hidden md:block"></div>
                <div className="h-24 w-24 lg:h-32 lg:w-32 rounded-full border-[15px] border-[#10BDF3] absolute bottom-7 lg:bottom-28 -right-8 hidden md:block"></div>
                <div className="w-full lg:w-9/12 xl:w-8/12 mx-auto flex items-center flex-col-reverse md:flex-row gap-10 md:gap-28 px-2 md:px-8 lg:px-0">
                    <Image
                        height={2613}
                        width={2462}
                        alt="map"
                        src="/images/Home/home-map.png"
                        className="h-auto w-8/12 md:w-4/12"
                    />
                    <div className="flex flex-col gap-5 w-full md:w-auto">
                        <h1 className="text-white font-black text-xl md:text-3xl lg:text-4xl leading-tight w-full md:w-10/12">
                            Search Anywhere in the UK
                        </h1>
                        <hr className="border border-gray-400" />
                        <div className="flex items-center justify-between md:justify-start md:gap-14 py-2">
                            <SearchAnywhereContainer
                                number="16,000"
                                title="Courses"
                                headingCOlor="orange-outline-text"
                            />
                            <hr className="h-24 border border-gray-400" />
                            <SearchAnywhereContainer
                                number="100"
                                title="Institutes"
                                headingCOlor="white-outline-text"
                            />
                        </div>
                        <hr className="border border-gray-400" />
                        <SearchAnywhereContainer
                            number="750"
                            title="Scholarships"
                            headingCOlor="white-outline-text"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

Home.layout = { auth: false, ip: null };

export default Home;
