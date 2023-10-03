import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface cardProps {
    img: string;
    title: string;
}

const Card = ({ img, title }: cardProps) => {
    return (
        <Link href="/fields">
            <div className="bg-white rounded-[10px] custom-shadow p-4 pb-7 cursor-pointer border-2 border-white hover:border-blueColor group">
                <div className="h-[60px] w-[60px] flex items-center justify-center border-2 border-blueColor rounded-full mb-4">
                    <Image
                        height={24}
                        width={24}
                        alt="icon"
                        src={`${img}`}
                        priority
                    />
                </div>
                <h1 className="text-mainTextColor font-bold text-xl mb-6 group-hover:text-blueColor">
                    {title}
                </h1>
                <p className="text-mainTextColor font-medium text-sm leading-5">
                    Cras ornare sagittis tortor a facilisis nteger augue quam,
                    placerat.
                </p>
            </div>
        </Link>
    );
};

export default Card;
