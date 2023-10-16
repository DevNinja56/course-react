/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { ROUTES } from '@/config/constant';
import { useRouter } from 'next/router';
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
    const { push } = useRouter();
    const cards = data.map(
        (
            element: { key: string; content: React.ReactElement },
            index: number
        ) => ({
            ...element,
            onClick: () =>
                index === goToSlide
                    ? push(ROUTES.FILTER_SCHOLARSHIP)
                    : setGoToSlide(index)
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
