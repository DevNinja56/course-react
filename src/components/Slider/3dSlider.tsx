import React, { useEffect, useState } from 'react';
import { ScholarshipCardPropsType } from '../Scholarship/Card';

interface Slider3DProps {
    totalItems: 3 | 5 | 7 | 9;
    data: Array<{
        component: React.FC<ScholarshipCardPropsType>;
        props: ScholarshipCardPropsType;
    }>;
}

const Slider3D: React.FC<Slider3DProps> = (props) => {
    const [items, setItems] = useState(props.data);
    const [activeSlide, setActiveSlide] = useState<number>(
        Math.floor(props.totalItems / 2)
    );

    const next = () => {
        if (activeSlide === items.length - 1) {
            setActiveSlide(0);
            return;
        }

        setActiveSlide(activeSlide + 1);
    };

    const prev = () => {
        if (activeSlide === 0) {
            setActiveSlide(items.length - 1);
            return;
        }
        setActiveSlide(activeSlide - 1);
    };

    useEffect(() => {
        if (items.length < props.totalItems) {
            setItems([...props.data, ...props.data, ...props.data]);
        }
    }, [props.data]);

    // Calculate the width of each item dynamically
    const getItemWidth = (positionDifference: number) => {
        const screenWidth =
            typeof window !== 'undefined' ? window.innerWidth : 100;
        const cardWidth = screenWidth / +props.totalItems;

        if (positionDifference === 0) {
            return cardWidth + 200;
        } else if (Math.abs(positionDifference) === 1) {
            return cardWidth + 150;
        } else if (Math.abs(positionDifference) === 2) {
            return cardWidth + 250;
        } else if (Math.abs(positionDifference) === 3) {
            return cardWidth + 350;
        }

        return cardWidth;
    };

    const getStyles = (index: number) => {
        const positionDifference = index - activeSlide;
        const zIndex = 10 - Math.abs(positionDifference);
        const opacity =
            Math.abs(positionDifference) <= Math.floor(props.totalItems / 2)
                ? 1
                : 0;

        const translateX = positionDifference * 300;
        let rotateY = positionDifference * -35;

        let translateZ;
        if (positionDifference === 0) {
            translateZ = 0;
            rotateY = 0;
        } else if (Math.abs(positionDifference) === 1) {
            translateZ = -200;
            rotateY = positionDifference * -35;
        } else if (Math.abs(positionDifference) === 2) {
            translateZ = -300;
            rotateY = positionDifference * -25;
        } else if (Math.abs(positionDifference) === 3) {
            translateZ = -400;
            rotateY = positionDifference * -15;
        } else {
            translateZ = -500;
            rotateY = positionDifference * -10;
        }

        return {
            opacity,
            transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
            zIndex,
            width: getItemWidth(positionDifference) // Set the calculated width for each item
        };
    };

    return (
        <div className="slider-3d relative w-[100vw] overflow-hidden">
            {/* Slider3D */}
            <div className="slideC flex items-center justify-center min-h-[272px] relative ">
                {items.map((item, i) => (
                    <React.Fragment key={'slide' + i}>
                        <div
                            className="slide rounded-lg transition-transform duration-500 ease-in-out bg-white select-none"
                            style={{
                                ...getStyles(i)
                            }}
                            onClick={() => {
                                if (i === activeSlide) {
                                    console.log('clicked on active slide');
                                } else {
                                    setActiveSlide(i);
                                }
                            }}
                        >
                            <item.component
                                {...item.props}
                                isLink={i === activeSlide}
                            />
                        </div>
                        <div
                            className="reflection absolute bottom-[-60px] rounded-lg"
                            style={{
                                background: `linear-gradient(to bottom, #00040, transparent)`,
                                ...getStyles(i)
                            }}
                        />
                    </React.Fragment>
                ))}
            </div>
            {/* Slider3D */}

            <div className="flex justify-center my-5 gap-5 z-50 absolute bottom-0 left-[50%] translate-x-[-50%]">
                <button
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg"
                    onClick={prev}
                >
                    &#10094;
                </button>
                <button
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg"
                    onClick={next}
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Slider3D;
