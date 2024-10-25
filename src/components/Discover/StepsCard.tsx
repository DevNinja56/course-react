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
}: CardProps) => {
    return (
        <>
            <div className="relative">
                {leftCircle && (
                    <img
                        alt="Ellipse"
                        className={`absolute lg:h-48 h-24 'block -left-20`}
                        src="/images/elipse.png"
                    />
                )}

                {rightCircle && (
                    <img
                        alt="Ellipse"
                        className={`absolute lg:h-24 h-12 'block -right-12 top-10`}
                        src="/images/elipse.png"
                    />
                )}

                {leftSmallLeftCircle && (
                    <img
                        alt="Ellipse"
                        className={`absolute lg:h-24 h-12 'block -left-12 top-12`}
                        src="/images/Ellipse 424.svg"
                    />
                )}
                  {leftSmallLeftBottomCircle && (
                    <img
                        alt="Ellipse"
                        className={`absolute lg:h-24 h-12 'block -left-12 top-48`}
                        src="/images/Ellipse 424.svg"
                    />
                )}
            </div>
            <div
                className={`${!colorChange ? 'bg-white' : 'bg-[#EAF2FF]'} px-5 md:px-10 !m-0 lg:flex justify-around`}
            >
                <img
                    src="/images/Discover/Circle.png"
                    alt="Circle"
                    className=" h-8 lg:h-14 max-[330px]:left-[-1.2rem] left-[0.28rem] md:-left-4 lg:-left-1 relative  top-52 lg:top-[7.5rem] xl:left-[5.8rem]"
                />
                <div
                    className={`flex flex-col 
                   lg:flex-row
                 items-center justify-center lg:justify-evenly px-5 lg:px-10`}
                >
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
                        className={`h-48 sm:h-56 lg:h-72 object-contain mt-6 lg:mt-0  drop-shadow-2xl `}
                    />
                </div>
            </div>
        </>
    );
};

export default StepsCard;
