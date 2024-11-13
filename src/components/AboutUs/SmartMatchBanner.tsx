import { HiOutlineSparkles } from 'react-icons/hi';
import Link from 'next/link';
import { ROUTES } from '@/config/constant';

const SmartMatchBanner = () => {
    return (
        <div className="overflow-hidden">
            <div className="bg-[#2B79FF] w-full relative h-fit flex flex-col  pt-6">
                <div className="flex flex-col justify-center items-center self-center text-center w-11/12 md:w-1/2 z-10 mt-6">
                    <div className="text-[1.8rem] flex items-center justify-center gap-1">
                        <HiOutlineSparkles className="text-4xl text-white" />
                        <h1 className="font-extrabold italic text-white m-0 p-0">
                            SmartMatch
                        </h1>
                    </div>

                    <div className="flex flex-col items-center">
                        <h1 className="text-[1.5rem] md:text-[2rem] text-white font-bold my-1">
                            Unlock Your Future with SmartMatch
                        </h1>
                        <p className="text-white w-full md:w-3/4 text-xs md:text-sm line">
                            Our platform provides localized entry requirements
                            based on your country of education, ensuring you see
                            only relevant criteria for your application.
                        </p>

                        <Link href={ROUTES.SMART_MATCH_TOOL} className="my-6">
                            <button className="text-md text-[#2C79FF] flex items-center gap-1 bg-white px-6 md:px-8 py-2 rounded-full hover:shadow-xl transition-all">
                                <p className="font-extrabold">Try Now</p>
                                <HiOutlineSparkles className="text-2xl" />
                                <p className="font-extrabold italic">
                                    SmartMatch
                                </p>
                            </button>
                        </Link>
                    </div>
                </div>
                <img
                    src="/images/About us/MacBook Pro 16.png"
                    alt="MacBook"
                    className="h-auto lg:h-72 drop-shadow-2xl object-contain mt-5"
                />
            </div>
        </div>
    );
};

export default SmartMatchBanner;
