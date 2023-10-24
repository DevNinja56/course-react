/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from 'react';
import { config } from 'react-spring';
import Carousel from 'react-spring-3d-carousel';

interface propsTypes {
    cards: any[];
    offset: number;
    showArrows?: boolean;
}

export default function Carrousel({
    offset,
    showArrows: arrow = false,
    cards: data
}: propsTypes) {
    const [goToSlide, setGoToSlide] = useState(0);

    return (
        <div className="flex flex-col justify-center items-center ">
            <Carousel
                slides={data}
                goToSlide={goToSlide}
                offsetRadius={offset}
                showNavigation={arrow}
                animationConfig={config.gentle}
            />
            <div className="flex items-center gap-x-3 mt-[150px] cursor-pointer ">
                {data.map((_, i) => (
                    <div
                        key={'slider-icon--' + i}
                        onClick={() => setGoToSlide(i)}
                        className={` rounded-[10px] border-4 cursor-pointer transition-all ${
                            i !== goToSlide
                                ? 'px-4 rotate-[-0deg]  border-grayBorderColor'
                                : 'px-6 rotate-0  border-blueColor '
                        } `}
                    ></div>
                ))}
            </div>
        </div>
    );
}
