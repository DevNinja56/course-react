import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import { ROUTES } from '@/config/constant';

function ScholarshipSlider() {
    const data = [
        {
            title: '918 Scholarships in Canada',
            logo: '/images/Scholarships/pic 1.svg'
        },
        {
            title: '918 Scholarships in Pakistan',
            logo: '/images/Scholarships/Pic 2.svg'
        },
        {
            title: '918 Scholarships in India',
            logo: '/images/Scholarships/Pic 3.svg'
        },
        {
            title: '918 Scholarships in US',
            logo: '/images/Scholarships/Pic 4.svg'
        },
        {
            title: '918 Scholarships in Australia',
            logo: '/images/Scholarships/Pic 2.svg'
        },
        {
            title: '918 Scholarships in UK',
            logo: '/images/Scholarships/Pic 5.svg'
        },
        {
            title: '918 Scholarships in Canada',
            logo: '/images/Scholarships/pic 1.svg'
        },
        {
            title: '918 Scholarships in Pakistan',
            logo: '/images/Scholarships/Pic 2.svg'
        },
        {
            title: '918 Scholarships in India',
            logo: '/images/Scholarships/Pic 3.svg'
        },
        {
            title: '918 Scholarships in US',
            logo: '/images/Scholarships/Pic 4.svg'
        },
        {
            title: '918 Scholarships in Australia',
            logo: '/images/Scholarships/Pic 2.svg'
        },
        {
            title: '918 Scholarships in UK',
            logo: '/images/Scholarships/Pic 5.svg'
        }
    ];
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                autoplay={true}
                centeredSlides={false}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: true
                }}
                pagination={false}
                navigation={false}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                {data.map(({ title, logo }) => (
                    <SwiperSlide
                        key={'scholarship-slider--' + title}
                        className="relative"
                    >
                        <Link href={ROUTES.FILTER_SCHOLARSHIP}>
                            <Image
                                width={200}
                                height={150}
                                src={logo}
                                alt="slide_image"
                            />
                            <h3 className=" absolute bottom-2 left-2 w-1/2 text-2xl font-bold text-white drop-shadow-md ">
                                {title}
                            </h3>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default ScholarshipSlider;
