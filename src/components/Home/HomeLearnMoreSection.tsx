import Image from 'next/image';
import React from 'react';
import Button from '../Button';
import Link from 'next/link';

interface propTypes {
    image: string;
    heading: string;
    paragraph?: string;
    discoverParagraph?: boolean;
    title: string;
    leftSideContent?: boolean;
    circleStyling: string;
    noCircle?: boolean;
    backgroundColor?: string;
    imageSize?: string;
    link: string;
    circleSize?: string;
    paddingY?: string;
}

const HomeLearnMoreSection = ({
    image,
    heading,
    paragraph,
    discoverParagraph,
    title,
    leftSideContent,
    circleStyling,
    noCircle,
    backgroundColor,
    imageSize,
    link,
    circleSize,
    paddingY
}: propTypes) => {
    return (
        <div
            className={`${leftSideContent ? 'lg:flex-row-reverse' : 'lg:flex-row'} ${backgroundColor ? backgroundColor : 'bg-profileBgColor/50'} w-full flex flex-col-reverse items-center justify-between ${paddingY ? paddingY : 'pt-5 pb-10'}  relative px-2 md:px-8 lg:px-20 xl:px-36 gap-10 lg:gap-0`}
        >
            {!noCircle && (
                <img
                    height={104}
                    width={104}
                    alt="home-round"
                    className={`${circleStyling} ${circleSize ? circleSize : 'w-24 h-24 lg:h-28 lg:w-28'} absolute hidden md:block z-10`}
                    src="/images/Home/ourEventsRoundImgone.svg"
                />
            )}
            <div className={`relative ${imageSize}`}>
                <Image
                    height={2483}
                    width={2710}
                    alt="home-page-discover-section"
                    src={image}
                    className="h-full w-full"
                />
            </div>
            <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 w-full lg:w-5/12">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <h1 className="flex items-center font-extrabold text-lg md:text-3xl text-blueColor">
                        {heading}
                    </h1>
                    <p className="text-xs md:text-sm text-center md:text-start">
                        {discoverParagraph ? (
                            <>
                                Search from{' '}
                                <span className="font-bold">
                                    100+ UK universities
                                </span>{' '}
                                to find the course that fits your academic
                                background and career ambitions.
                            </>
                        ) : (
                            paragraph
                        )}
                    </p>
                    <hr className="w-full border border-blueColor/10" />
                    <h2 className="font-bold text-xs md:text-base text-center md:text-start">
                        {title}
                    </h2>
                </div>
                <Link href={link} className="w-fit">
                    <button className="py-2 md:py-3 px-4 md:px-14 rounded-lg text-sm md:text-base font-bold bg-blueColor text-white hover:bg-opacity-80 transition-all duration-300">
                        Learn More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HomeLearnMoreSection;
