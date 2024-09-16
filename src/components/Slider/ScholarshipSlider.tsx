import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Link from 'next/link';
import { ROUTES } from '@/config/constant';
import { useGetScholarshipQuery } from '@/store/slices/allRequests';

function ScholarshipSlider() {
    const { data: scholarshipList } = useGetScholarshipQuery();
    const data = scholarshipList?.map((scholarship) => ({
        title: `${scholarship.name} `,
        logo: scholarship.image,
        id: scholarship.id
    }));

    return (
        <div className="h-[40vh] md:h-[50vh] lg:h-[65vh] py-5">
            {data && data?.length > 0 && (
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={data?.length > 4 ? true : false}
                    slidesPerView={data.length < 2 ? 1 : 3}
                    spaceBetween={-30}
                    loop={data?.length > 4 ? true : false}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 250,
                        modifier: 1.2,
                        slideShadows: false,
                        scale: 1
                    }}
                    pagination={false}
                    navigation={false}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className={`h-full ${data.length < 2 ? 'w-4/12' : 'w-full'}`}
                >
                    {data?.map(({ title, logo, id }) => (
                        <SwiperSlide key={'scholarship-slider--' + title}>
                            <Link
                                href={{
                                    pathname: ROUTES.SCHOLARSHIP.replace(
                                        ':title',
                                        title.replaceAll(' ', '-')
                                    ),
                                    query: {
                                        scholarship_id: id
                                    }
                                }}
                            >
                                <img
                                    src={
                                        logo ??
                                        '/images/Scholarships/scholarship (1) 1.png'
                                    }
                                    alt="slide_image"
                                    className="h-full relative flex items-end justify-center bg-cover bg-center rounded-[12px] w-full"
                                />
                                <h3 className="bg-gradient-to-t from-blueColor absolute start-0 bottom-0 text-base md:text-2xl font-bold text-center px-2 py-3 w-full ">
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
