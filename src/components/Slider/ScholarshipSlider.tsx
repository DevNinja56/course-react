import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
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
        <>
            {data && data.length > 0 && (
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={false}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2
                        },
                        768: {
                            slidesPerView: 2.5
                        },
                        1024: {
                            slidesPerView: 2.8
                        },
                        1280: {
                            slidesPerView: 3.2
                        }
                    }}
                    loop={true}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper w-full"
                >
                    {data.map(({ title, logo, id }) => (
                        <SwiperSlide
                            key={'scholarship' + id}
                            className="relative border rounded-xl bg-white overflow-hidden"
                        >
                            <Link
                                className="h-full w-full flex justify-center"
                                href={ROUTES.SCHOLARSHIP.replace(':id', id)}
                            >
                                <Image
                                    width={400}
                                    height={400}
                                    src={logo}
                                    alt="slide_image"
                                    className="object-contain w-9/12 h-3/4"
                                />
                                <h3 className="bg-gradient-to-t from-blueColor absolute start-0 bottom-0 text-2xl font-bold text-center px-2 py-3 w-full ">
                                    {title}
                                </h3>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </>
    );
}

export default ScholarshipSlider;
