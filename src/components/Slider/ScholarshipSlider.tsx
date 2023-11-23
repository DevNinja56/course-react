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
import { useGetScholarshipQuery } from '@/store/slices/allRequests';
import { useFilterQuery } from '@/hooks/filterQuery';

function ScholarshipSlider() {
    const { data: scholarshipList } = useGetScholarshipQuery();
    const data = scholarshipList?.map((scholarship) => ({
        title: `${scholarship.name} `,
        logo: scholarship.image,
        name: scholarship.name
    }));
    const { addQuery } = useFilterQuery();

    return (
        <div className="w-full print:hidden">
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
                            className="relative border rounded-xl bg-white overflow-hidden"
                        >
                            <Link
                                href={ROUTES.FILTER_SCHOLARSHIP}
                                onClick={() => addQuery({ countries: [name] })}
                                className="max-w-[400px]"
                            >
                                <Image
                                    width={500}
                                    height={500}
                                    src={logo}
                                    alt="slide_image"
                                    className="object-contain p-3 w-auto max-w-full max-h-[calc(100%-50px)] "
                                />
                                <h3 className="bg-gradient-to-t from-blueColor absolute start-0 bottom-0 text-2xl font-bold text-center px-2 py-3 w-full ">
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
