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
import { useGetCountriesQuery } from '@/store/slices/allRequests';
import { useFilterQuery } from '@/hooks/filterQuery';

function ScholarshipSlider() {
    const { data: countryList } = useGetCountriesQuery();
    const data = countryList
        ?.filter((country) => country.scholarship.length > 0)
        .map((item) => ({
            title: `${item.scholarship.length} Scholarships in ${item.name}`,
            logo: item.logo,
            name: item.name
        }));
    const { addQuery } = useFilterQuery();

    return (
        <div className="w-full">
            {data && data?.length > 0 && (
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    autoplay={true}
                    centeredSlides={true}
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
                    {data?.map(({ title, logo, name }) => (
                        <SwiperSlide
                            key={'scholarship-slider--' + title}
                            className="relative"
                        >
                            <Link
                                href={ROUTES.FILTER_SCHOLARSHIP}
                                onClick={() => addQuery({ countries: [name] })}
                            >
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
            )}
        </div>
    );
}

export default ScholarshipSlider;
