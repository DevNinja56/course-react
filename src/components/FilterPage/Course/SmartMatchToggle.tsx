import { ROUTES } from '@/config/constant';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { SetStateAction } from 'react';
import { HiOutlineSparkles } from 'react-icons/hi2';

interface Props {
    smartMatch?: boolean;
    setSmartMatch: React.Dispatch<SetStateAction<boolean>>;
}

export const SmartMatchToggle = ({ smartMatch, setSmartMatch }: Props) => {
    const router = useRouter();
    const smartMatchData = !!Object.keys(router.query).length;
    return (
        <div
            className={`${smartMatchData ? 'bg-[#EAF2FF] border border-1 border-[#2C79FF]' : 'bg-[#2C79FF]'} w-full flex flex-col md:flex-row justify-between items-center p-4 md:px-10 md:py-5 rounded-xl`}
        >
            <div className="flex flex-col justify-start items-start gap-1 flex-[0.8] mb-4 md:mb-0">
                <div
                    className={`text-lg md:text-2xl flex items-center gap-1 ${smartMatchData ? 'text-[#2C79FF]' : 'text-white'}`}
                >
                    <HiOutlineSparkles className="text-2xl md:text-3xl" />
                    <h1 className={`font-extrabold italic`}>SmartMatch</h1>
                </div>
                <p
                    className={`text-xs md:text-sm ${smartMatchData ? 'text-black' : 'text-white'}`}
                >
                    {smartMatchData
                        ? 'Showing general results. Switch to SmartMatch.'
                        : 'Our AI-powered SmartMatch tool recommends the best courses for you by analyzing your qualifications and preferences.'}
                </p>
            </div>
            {smartMatchData ? (
                <div className="flex items-center gap-3">
                    <div
                        className={`w-12 h-4 flex items-center rounded-full p-0.5 cursor-pointer ${smartMatch ? 'bg-[#96bdff]' : 'bg-gray-400'}`}
                        onClick={() => setSmartMatch(!smartMatch)}
                    >
                        <div
                            className={`w-6 h-6 rounded-full shadow-md transform transition-transform ${smartMatch ? 'translate-x-6 bg-[#2C79FF]' : ' bg-white -translate-x-1'}`}
                        ></div>
                    </div>
                </div>
            ) : (
                <Link href={ROUTES.SMART_MATCH_TOOL}>
                    <button className="text-sm md:text-md text-[#2C79FF] flex items-center gap-1 bg-white px-4 md:px-7 py-2 md:py-3 rounded-full hover:shadow-xl transition-all">
                        <p className="font-extrabold">Try Now</p>
                        <HiOutlineSparkles className="text-lg md:text-2xl" />
                        <p className="hidden md:block font-extrabold italic">
                            SmartMatch
                        </p>
                    </button>
                </Link>
            )}
        </div>
    );
};
