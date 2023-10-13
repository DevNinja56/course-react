'use client';
import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const Carrousel = dynamic(() => import('./Carrousel'), { ssr: false });

function Slider() {
    const data = [
        '/images/Scholarships/pic 1.svg',
        '/images/Scholarships/Pic 2.svg',
        '/images/Scholarships/Pic 3.svg',
        '/images/Scholarships/Pic 4.svg',
        '/images/Scholarships/Pic 5.svg'
    ];
    let cards = data.map((item) => ({
        key: nanoid(),
        content: (
            <div className="w-full">
                <Image
                    height={200}
                    width={394}
                    alt="sliderImg"
                    className="swiper-slide object-cover rounded-xl "
                    style={{ objectFit: 'cover' }}
                    src={item}
                    priority
                />
            </div>
        )
    }));

    return (
        <div className="w-full my-7 h-[500px] ">
            <Carrousel cards={cards} offset={10} />
        </div>
    );
}

export default Slider;
