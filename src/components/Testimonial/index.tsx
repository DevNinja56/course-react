import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Card from './Card';
import { nanoid } from '@reduxjs/toolkit';
import dynamic from 'next/dynamic';
import { ROUTES } from '@/config/constant';
const Carrousel = dynamic(() => import('../Slider/Carrousel'), { ssr: false });

const Testimonial = () => {
    const router = useRouter();

    const cards = [
        {
            key: nanoid(),
            content: <Card />
        },
        {
            key: nanoid(),
            content: <Card />
        },
        {
            key: nanoid(),
            content: <Card />
        }
    ];

    return (
        <div
            className={`bg-white print:hidden ${
                router.pathname === (ROUTES.APPLY || ROUTES.FAQ) ||
                router.pathname.includes(ROUTES.COURSE.replace(':id', ''))
                    ? ''
                    : 'pt-8'
            } `}
        >
            <div
                className={`relative pb-0  ${
                    router.pathname === ROUTES.FAQ
                        ? 'pt-10'
                        : '' ||
                          router.pathname === ROUTES.HOMEPAGE ||
                          router.pathname === ROUTES.CONTACT_US
                        ? 'overflow-visible'
                        : 'overflow-hidden'
                }`}
            >
                <Image
                    height={96}
                    width={96}
                    alt="testimonial-round"
                    className="absolute bottom-12 left-8 hidden md:block"
                    src="/images/Blogs/Ellipse 426.svg"
                    priority
                />
                <div className="flex flex-col lg:flex-row justify-between items-start max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-5 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300 py-5 md:py-12 lg:py-20 gap-x-16 gap-y-5 lg:gap-y-0">
                    <div className="flex flex-col gap-y-2 z-10 relative">
                        <p className="font-bold text-xl md:text-[23px] text-blueColor">
                            Testimonial
                        </p>
                        <h1
                            style={{ lineHeight: '57.6px' }}
                            className="text-[32px] md:text-[40px] font-extrabold text-mainTextColor w-auto md:w-[340px] mb-2"
                        >
                            See What OurClient Say’s
                        </h1>
                        <p className="text-darkGrayColor text-sm w-auto md:w-[559px]">
                            Curabitur tristique, sem id sagittis varius, lacus
                            ligula mollis dui, ac condimentum felis metus ut
                            nulla. Aenean ut ultricies turpis, sed sollicitudin
                            eros. Aliquam quis dui ut diam lobortis dignissim ut
                            aliquet ex
                        </p>
                        <Image
                            height={290}
                            width={290}
                            alt="message"
                            className="absolute bottom-[-150px] left-0 w-[218px] h-[218px] lg:h-[290px] lg:w-[290px] hidden md:block"
                            src="/images/Messages.svg"
                            priority
                        />
                    </div>
                    <div className="w-full mt-[150px] relative">
                        <Carrousel cards={cards} offset={1} />
                    </div>
                </div>
                {router.pathname === ROUTES.FIELDS ||
                router.pathname === ROUTES.COUNTRY ||
                router.pathname === ROUTES.ABOUT_US ? (
                    <>
                        <Image
                            height={94}
                            width={94}
                            alt="testimonial-round-2"
                            className="absolute right-20 top-9 hidden md:block"
                            src="/images/Universities/Ellipse 422.svg"
                        />
                        <Image
                            height={228}
                            width={228}
                            alt="testimonial-round-2"
                            className="absolute right-[-50px] md:right-0 top-0 h-[190px] w-[153px] lg:h-[228px] lg:w-[228px] md:hidden block"
                            src="/images/Blogs/Ellipse 427.svg"
                        />
                    </>
                ) : router.pathname === ROUTES.HOMEPAGE ||
                  router.pathname === ROUTES.CONTACT_US ? (
                    <Image
                        height={280}
                        width={280}
                        alt="testimonial-round-2"
                        className="absolute right-0 top-[-70px] md:top-[-120px] h-20 w-20 md:h-64 md:w-64 lg:h-[280px] lg:w-[280px]"
                        src="/images/Home/testimoalRoundImg.svg"
                    />
                ) : router.pathname === ROUTES.APPLY ||
                  router.pathname === ROUTES.FAQ ? (
                    <Image
                        height={289}
                        width={245}
                        src="/images/Apply/testimonalCircle.svg"
                        alt="testimonial-round-2"
                        className="absolute right-0 top-0 h-24 w-20 md:h-[150px] md:w-[130px] lg:h-[289px] lg:w-[245px]"
                    />
                ) : router.pathname.includes(
                      ROUTES.COURSE.replace(':id', '')
                  ) ? (
                    <Image
                        height={174}
                        width={175}
                        alt="testimonial-round-2"
                        className="absolute right-0 top-0 h-20 w-20 md:h-[174px] md:w-[174px]"
                        src="/images/CourseDetail/Circle 2.svg"
                    />
                ) : (
                    <Image
                        height={228}
                        width={228}
                        alt="testimonial-round-2"
                        className="absolute right-[-50px] md:right-0 top-0 h-40 w-40 md:h-[190px] md:w-[153px] lg:h-[228px] lg:w-[228px]"
                        src="/images/Blogs/Ellipse 427.svg"
                    />
                )}
            </div>
        </div>
    );
};

export default Testimonial;
