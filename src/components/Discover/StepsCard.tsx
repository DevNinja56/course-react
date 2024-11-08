import React from 'react';

interface CardProps {
    imageUrl: string;
    heading: string;
    description: string;
    colorChange?: boolean;
    leftCircle?: boolean;
    rightCircle?: boolean;
    leftSmallLeftCircle?: boolean;
    leftSmallLeftBottomCircle?: boolean;
    bottom?: boolean;
    top?: boolean;
    middle?: boolean;
}

const StepsCard = ({
    imageUrl,
    heading,
    description,
    colorChange = false,
    leftCircle,
    rightCircle,
    leftSmallLeftCircle,
    leftSmallLeftBottomCircle,
    bottom,
    top,
    middle
}: CardProps) => {
    return (
        <>
            <div className="relative h-0">
                {leftCircle && (
                    <img
                        alt="Ellipse"
                        className="absolute xl:h-48 h-24 xl:block hidden -left-20"
                        src="/images/elipse.png"
                    />
                )}

                {rightCircle && (
                    <img
                        alt="Ellipse"
                        className="absolute lg:h-24 h-12 block -right-12 top-10"
                        src="/images/elipse.png"
                    />
                )}

                {leftSmallLeftCircle && (
                    <img
                        alt="Ellipse"
                        className="absolute lg:h-24 h-12 block -left-12 top-12"
                        src="/images/Ellipse 424.svg"
                    />
                )}
                {leftSmallLeftBottomCircle && (
                    <img
                        alt="Ellipse"
                        className="absolute lg:h-24 h-12 block -left-12 top-48"
                        src="/images/Ellipse 424.svg"
                    />
                )}
            </div>
            <div
                className={`${
                    !colorChange ? 'bg-white' : 'bg-[#fbfcff]'
                } gap-10 md:px-10 m-0 lg:flex justify-end py-5 lg:p-0  xl:!pr-28 2xl:!pr-0 2xl:justify-center`}
            >
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between relative xl:gap-20 lg:gap-10">
                    {bottom && (
                        <div className="bg-[#2563eb] w-2 h-1/2 lg:flex flex-col items-center justify-end  self-start hidden">
                            <img
                                src="/images/Discover/Circle.png"
                                alt="Circle"
                                className="h-14 w-14 lg:absolute -left-6 top-32 "
                            />
                        </div>
                    )}
                    {top && (
                        <div className="bg-[#2563eb] w-2 h-1/2 lg:flex flex-col items-center  self-end hidden">
                            <img
                                src="/images/Discover/Circle.png"
                                alt="Circle"
                                className="h-14 w-14 absolute -left-6 top-32"
                            />
                        </div>
                    )}
                    {middle && (
                        <div className="bg-[#2563eb] w-2 h-full lg:flex flex-col items-center justify-center hidden">
                            <img
                                src="/images/Discover/Circle.png"
                                alt="Circle"
                                className="h-14 w-14 absolute -left-6"
                            />
                        </div>
                    )}
                    <div className="text-center lg:text-left">
                        <h1 className="text-xl max-[400px]:text-[1.1rem] sm:text-2xl lg:text-3xl text-[#2563eb] font-extrabold">
                            {heading}
                        </h1>
                        <p className="mt-1 text-sm sm:text-base lg:text-md lg:w-[450px] w-[250px]">
                            {description}
                        </p>
                    </div>

                    <img
                        src={imageUrl}
                        alt={heading}
                        className="h-48 sm:h-56 lg:h-80 object-contain mt-6 lg:mt-0 drop-shadow-2xl max-lg:scale-125 "
                    />
                </div>
            </div>
        </>
    );
};

export default StepsCard;
