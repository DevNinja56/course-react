'use client';
import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useGetScholarshipQuery } from '@/store/slices/allRequests';
const Carrousel = dynamic(() => import('./Carrousel'), { ssr: false });

function Slider() {
    const { isLoading } = useGetScholarshipQuery();
    const data = [
        '/images/Scholarships/pic 1.svg',
        '/images/Scholarships/Pic 2.svg',
        '/images/Scholarships/Pic 3.svg',
        '/images/Scholarships/Pic 4.svg',
        '/images/Scholarships/Pic 2.svg',
        '/images/Scholarships/Pic 5.svg'
    ];

    const cards = data?.map((item) => ({
        key: nanoid(),
        content: (
            <div className="w-full cursor-pointer ">
                <Image
                    height={20}
                    width={39}
                    alt="sliderImg"
                    className="swiper-slide object-cover rounded-xl "
                    style={{ objectFit: 'cover' }}
                    src={item}
                    priority
                />
                {item.name}
            </div>
        )
    }));

    return (
        <div className="w-full my-7 h-[500px] ">
            {isLoading ? (
                'Loading!....'
            ) : data ? (
                <Carrousel cards={cards} offset={10} />
            ) : (
                <p className="text-red-600">No Scholarship Found!....</p>
            )}
        </div>
    );
}

export default Slider;
