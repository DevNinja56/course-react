import Image from 'next/image';
import React from 'react';

interface propTypes {
    heading: string;
    buttonText: string;
    title?: string;
}

const LetUsHelpContainer = ({ heading, buttonText, title }: propTypes) => {
    return (
        <div className="w-full py-8 md:py-10 bg-[#2B79FF] flex flex-col gap-4 md:gap-8 items-center relative px-2 md:px- overflow-hidden">
            <Image
                height={2202}
                width={2347}
                alt="pattern"
                src="/images/SmartMatch/Pattern.png"
                className="absolute left-0 -top-10  scale-x-[-1] w-4/12 lg:w-3/12 xl:w-1/5 md:block hidden"
            />
            <div className="flex flex-col gap-2">
                <h1 className="font-black text-white text-xl md:text-2xl text-center">
                    {heading}
                </h1>
                {title && (
                    <p className="text-white text-sm md:text-base">{title}</p>
                )}
            </div>
            <div>
                <button className="py-2.5 px-6 md:px-14 rounded-lg text-sm md:text-base text-textBlackColor font-bold bg-white">
                    {buttonText}
                </button>
            </div>
            <Image
                height={2202}
                width={2347}
                alt="pattern"
                src="/images/SmartMatch/Pattern.png"
                className="absolute right-0 -top-10 w-4/12 lg:w-3/12 xl:w-1/5 md:block hidden"
            />
        </div>
    );
};

export default LetUsHelpContainer;
