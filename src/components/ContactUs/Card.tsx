// import Image from 'next/image';
import React from 'react';

interface CardProps {
    img: string;
    title: string;
    detail: string;
}

const Card = ({ img, title, detail }: CardProps) => {
    return (
        <div className="flex flex-col gap-[15px] w-full z-10">
            <img
                height={40}
                width={40}
                alt="icons"
                className="h-10 w-10"
                src={`${img}`}
                // priority
            />
            <h1 className="font-bold text-lg text-mainTextColor">{title}</h1>
            <p className="font-semibold leading-5 text-blueColor text-sm">
                {detail}
            </p>
            <p className="text-[13px] text-grayColor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille
                pellit, qui permulcet sensum voluptate.
            </p>
        </div>
    );
};

export default Card;
