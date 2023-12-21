import Image from 'next/image';
import React from 'react';

interface RankingProps {
    img: string;
    text: string;
    className?: string;
}

const RankingCards = ({ img, text, className }: RankingProps) => {
    return (
        <div className="py-5 px-4 md:px-6 border-b border-gray-300 flex w-full items-center justify-between">
            <Image
                height={25}
                width={93}
                alt="Ranking"
                src={img}
                className={className}
                priority
            />
            <h1 className="font-bold text-mainTextColor text-xl">{text}</h1>
        </div>
    );
};

export default RankingCards;
