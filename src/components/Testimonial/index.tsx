// import Image from 'next/image';
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
            className={`bg-white print:hidden overflow-hidden  ${
                router.pathname === ROUTES.FAQ ||
                router.pathname?.includes(ROUTES.COURSE.replace(':title', ''))
                    ? ''
                    : 'pt-8'
            } `}
        >
            <div
                className={`relative pb-0  ${
                    router.pathname === ROUTES.FAQ
                        ? 'pt-10'
                        : router.pathname === ROUTES.HOMEPAGE ||
                            router.pathname === ROUTES.CONTACT_US
                          ? 'overflow-visible'
                          : 'overflow-hidden'
                }`}
            >
                <img
                    height={75}
                    width={75}
                    alt="testimonial-round"
                    className="absolute bottom-12 -left-6 hidden md:block"
                    src="/images/Blogs/Ellipse 426.svg"
                    // priority
                />
                <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-10/12 mx-auto lg:px-2 2xl:px-8 transition-all duration-300 py-5 md:py-28 lg:py-20 gap-x-16 gap-y-5 lg:gap-y-0 px-10">
                    <div className="flex flex-col gap-y-2 z-10 relative">
                        <p className="font-bold text-xl md:text-[23px] text-blueColor">
                            Testimonial
                        </p>
                        <h1 className="text-3xl font-extrabold text-mainTextColor mb-2 leading-snug">
                            See What <br /> OurClient Say&lsquo;s
                        </h1>
                        <p className="text-darkGrayColor text-sm w-auto">
                            Curabitur tristique, sem id sagittis varius, lacus
                            ligula mollis dui, ac condimentum felis metus ut
                            nulla. Aenean ut ultricies turpis, sed sollicitudin
                            eros. Aliquam quis dui ut diam lobortis dignissim ut
                            aliquet ex
                        </p>
                        <img
                            height={290}
                            width={290}
                            alt="message"
                            className="absolute bottom-[-150px] left-0 w-[218px] h-[218px] lg:h-[290px] lg:w-5/12 hidden md:block"
                            src="/images/Messages.svg"
                            // priority
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
                        <img
                            height={94}
                            width={94}
                            alt="testimonial-round-2"
                            className="absolute right-20 top-9 hidden md:block"
                            src="/images/Universities/Ellipse 422.svg"
                        />
                        <img
                            height={228}
                            width={228}
                            alt="testimonial-round-2"
                            className="absolute right-[-50px] md:right-0 top-0 h-[190px] w-[153px] lg:h-[228px] lg:w-[228px] md:hidden block"
                            src="/images/Blogs/Ellipse 427.svg"
                        />
                    </>
                ) : router.pathname === ROUTES.HOMEPAGE ||
                  router.pathname === ROUTES.CONTACT_US ? (
                    <img
                        height={280}
                        width={280}
                        alt="testimonial-round-2"
                        className="absolute right-0 top-[-70px] md:top-[-120px] w-20 md:w-64 lg:w-44"
                        src="/images/Home/testimoalRoundImg.svg"
                    />
                ) : router.pathname === ROUTES.FAQ ? (
                    <img
                        height={289}
                        width={245}
                        src="/images/Apply/testimonalCircle.svg"
                        alt="testimonial-round-2"
                        className="absolute right-0 top-0 h-24 w-20 md:h-[150px] md:w-[130px] lg:h-[289px] lg:w-[245px]"
                    />
                ) : router.pathname?.includes(
                      ROUTES.COURSE.replace(':title', '')
                  ) ||
                  router.pathname?.includes(
                      ROUTES.INSTITUTES.replace(':id', '')
                  ) ? (
                    <img
                        height={174}
                        width={175}
                        alt="testimonial-round-2"
                        className="absolute right-0 top-0 h-20 w-20 md:h-[174px] md:w-[174px]"
                        src="/images/CourseDetail/Circle 2.svg"
                    />
                ) : (
                    <img
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
