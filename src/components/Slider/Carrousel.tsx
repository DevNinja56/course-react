'use client';
import { useState } from 'react';
import { config } from 'react-spring';
import Carousel from 'react-spring-3d-carousel';

interface propsTypes {
    cards: [];
    offset: number;
    showArrows?: boolean;
}

export default function Carrousel({
    offset,
    showArrows: arrow = false,
    cards: data
}: propsTypes) {
    const [goToSlide, setGoToSlide] = useState(0);
    const cards = data.map(
        (
            element: { key: string; content: React.ReactElement },
            index: number
        ) => ({
            ...element,
            onClick: () => setGoToSlide(index)
        })
    );

    return (
        <>
            <Carousel
                slides={cards}
                goToSlide={goToSlide}
                offsetRadius={offset}
                showNavigation={arrow}
                animationConfig={config.gentle}
            />
        </>
    );
}
