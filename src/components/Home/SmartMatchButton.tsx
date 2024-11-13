import { ROUTES } from '@/config/constant';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SmartMatchButton: React.FC<{
    fontSize?: string;
    gap?: string;
    text: string;
    link?: string;
    radius?: string;
}> = ({ fontSize, gap, text, link, radius }) => {
    return (
        <Link href={link ?? ROUTES.SMART_MATCH}>
            <button
                className={`${radius ? radius : 'rounded-[90px]'} border border-white flex items-center ${gap ? gap : 'gap-1.5 md:gap-[2px]'} py-2 lg:py-3 px-4 lg:px-6 font-bold ${!fontSize ? 'text-xs md:text-base lg:text-lg' : fontSize}  bg-blueColor text-white hover:bg-opacity-80 transition-all duration-300`}
            >
                {text}{' '}
                <span className="flex items-center gap-[2px] italic text-xs md:text-base lg:text-lg">
                    <Image
                        height={24}
                        width={24}
                        alt="smart-match-icon"
                        src="/images/Home/smart-match-icon.svg"
                        className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"
                    />{' '}
                    SmartMatch
                </span>
            </button>
        </Link>
    );
};

export default SmartMatchButton;
