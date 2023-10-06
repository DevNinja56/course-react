import Image from 'next/image';
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const Slider = () => {
    useEffect(() => {
        new Swiper('.swiper', {
            slidesPerView: 4,
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            slideActiveClass: 'active',
            navigation: {
                nextEl: '.next',
                prevEl: '.prev'
            },
            pagination: {
                el: '.pagination',
                clickable: true
            }
        });
    }, []);

    return (
        <div className="swiper">
            <div className="swiper-wrapper">
                <Image
                    height={349.34}
                    width={354.35}
                    alt="sliderImg"
                    className="swiper-slide h-[248.55px] w-[252.11px] lg:h-[349.34px] lg:w-[354.35]"
                    src="/images/Scholarships/pic 1.svg"
                    priority
                />
                <Image
                    height={349.34}
                    width={354.35}
                    alt="sliderImg"
                    className="swiper-slide h-[248.55px] w-[252.11px] lg:h-[349.34px] lg:w-[354.35]"
                    src="/images/Scholarships/Pic 2.svg"
                    priority
                />
                <Image
                    height={349.34}
                    width={354.35}
                    alt="sliderImg"
                    className="swiper-slide h-[248.55px] w-[252.11px] lg:h-[349.34px] lg:w-[354.35]"
                    src="/images/Scholarships/Pic 3.svg"
                    priority
                />
                <Image
                    height={349.34}
                    width={354.35}
                    alt="sliderImg"
                    className="swiper-slide h-[248.55px] w-[252.11px] lg:h-[349.34px] lg:w-[354.35]"
                    src="/images/Scholarships/Pic 4.svg"
                    priority
                />
                <Image
                    height={349.34}
                    width={354.35}
                    alt="sliderImg"
                    className="swiper-slide h-[248.55px] w-[252.11px] lg:h-[349.34px] lg:w-[354.35]"
                    src="/images/Scholarships/Pic 5.svg"
                    priority
                />
            </div>
        </div>
    );
};

export default Slider;
