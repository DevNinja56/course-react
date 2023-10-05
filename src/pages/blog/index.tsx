import Card from '@/components/Blog/Card';
import Testimonal from '@/components/Testimonal/Testimonal';
import Image from 'next/image';
import React from 'react';

const Blog = () => {
    return (
        <>
            <div className="w-full flex items-center justify-center mt-[100px] bg-profileBgColor py-20 relative mb-24">
                <Image
                    height={193}
                    width={191}
                    alt="blog-round"
                    className="absolute top-[-20px] left-[-20px] lg:top-0 lg:left-0 h-[84px] w-[86px] lg:h-[193px] lg:w-[191px]"
                    src="/images/Blogs/Frame 642.svg"
                    priority
                />
                <div className="flex flex-col gap-y-5 items-center z-10">
                    <div className="flex flex-col justify-center items-center gap-y-3">
                        <p className="text-lg md:text-xl font-bold text-blueColor">
                            Tech Blog
                        </p>
                        <div className="mb-3 flex items-center flex-col">
                            <h1 className="text-mainTextColor text-2xl lg:text-[32px] font-extrabold">
                                Our Work Resources
                            </h1>
                            <p className="text-grayColor text-center">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc vides, quid faciat.
                                <br /> Mihi vero, inquit, placet agi subtilius
                                et, ut ipse.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <input
                            className="custom-shadow rounded-[10px] py-[17px] md:py-5 pl-5 md:pl-[25px] outline-none text-base text-mainTextColor w-[80vw] md:w-auto md:pr-[380px]"
                            placeholder="Enter Your Email"
                        />
                        <button className="px-5 py-[7px] md:py-[11px] md:px-[39px] absolute right-3 top-[11px] bg-blueColor rounded-[5px] text-white text-sm">
                            Subscribe
                        </button>
                    </div>
                </div>
                <Image
                    height={193}
                    width={191}
                    alt="blog-round-2"
                    className="absolute bottom-0 right-0 h-[84px] w-[86px] lg:h-[193px] lg:w-[191px]"
                    src="/images/Blogs/Frame 643.svg"
                />
            </div>
            <div className="w-full pb-12">
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-5 md:px-[90px] lg:px-2 2xl:px-8 transition-all duration-300 flex flex-col items-center gap-y-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-[31px] w-full">
                        <Card
                            cardTitle="Technique"
                            cardTitleTwo="Speech"
                            cardTitleThree="Work"
                            title="All you need to know about the One-on-One meeting"
                            hearts="99"
                            image="/images/BlogsDetail/relatedPost3.svg"
                        />
                        <Card
                            cardTitle="Partners"
                            cardTitleTwo="Team"
                            cardTitleThree="Business"
                            title="How networking will help boost your company growth"
                            hearts="54"
                            image="/images/BlogsDetail/Rectangle 3662.svg"
                        />
                        <Card
                            cardTitle="Job"
                            cardTitleTwo="Team"
                            cardTitleThree="Certifications"
                            title="Are certifications really worth it when seeking a new job?"
                            hearts="107"
                            image="/images/BlogsDetail/relatedPostImg.svg"
                        />
                        <Card
                            cardTitle="Job"
                            cardTitleTwo="Team"
                            cardTitleThree="Certifications"
                            title="Are certifications really worth it when seeking a new job?"
                            hearts="107"
                            image="/images/BlogsDetail/relatedPostImg.svg"
                        />
                        <Card
                            cardTitle="Technique"
                            cardTitleTwo="Speech"
                            cardTitleThree="Work"
                            title="All you need to know about the One-on-One meeting"
                            hearts="99"
                            image="/images/BlogsDetail/relatedPost3.svg"
                        />
                        <Card
                            cardTitle="Partners"
                            cardTitleTwo="Team"
                            cardTitleThree="Business"
                            title="How networking will help boost your company growth"
                            hearts="54"
                            image="/images/BlogsDetail/Rectangle 3662.svg"
                        />
                        <Card
                            cardTitle="Partners"
                            cardTitleTwo="Team"
                            cardTitleThree="Business"
                            title="How networking will help boost your company growth"
                            hearts="54"
                            image="/images/BlogsDetail/Rectangle 3662.svg"
                        />
                        <Card
                            cardTitle="Job"
                            cardTitleTwo="Team"
                            cardTitleThree="Certifications"
                            title="Are certifications really worth it when seeking a new job?"
                            hearts="107"
                            image="/images/BlogsDetail/relatedPostImg.svg"
                        />
                        <Card
                            cardTitle="Technique"
                            cardTitleTwo="Speech"
                            cardTitleThree="Work"
                            title="All you need to know about the One-on-One meeting"
                            hearts="99"
                            image="/images/BlogsDetail/relatedPost3.svg"
                        />
                        <Card
                            cardTitle="Technique"
                            cardTitleTwo="Speech"
                            cardTitleThree="Work"
                            title="All you need to know about the One-on-One meeting"
                            hearts="99"
                            image="/images/BlogsDetail/relatedPost3.svg"
                        />
                        <Card
                            cardTitle="Partners"
                            cardTitleTwo="Team"
                            cardTitleThree="Business"
                            title="How networking will help boost your company growth"
                            hearts="54"
                            image="/images/BlogsDetail/Rectangle 3662.svg"
                        />
                        <Card
                            cardTitle="Job"
                            cardTitleTwo="Team"
                            cardTitleThree="Certifications"
                            title="Are certifications really worth it when seeking a new job?"
                            hearts="107"
                            image="/images/BlogsDetail/relatedPostImg.svg"
                        />
                        <Card
                            cardTitle="Job"
                            cardTitleTwo="Team"
                            cardTitleThree="Certifications"
                            title="Are certifications really worth it when seeking a new job?"
                            hearts="107"
                            image="/images/BlogsDetail/relatedPostImg.svg"
                        />
                        <Card
                            cardTitle="Technique"
                            cardTitleTwo="Speech"
                            cardTitleThree="Work"
                            title="All you need to know about the One-on-One meeting"
                            hearts="99"
                            image="/images/BlogsDetail/relatedPost3.svg"
                        />
                        <Card
                            cardTitle="Partners"
                            cardTitleTwo="Team"
                            cardTitleThree="Business"
                            title="How networking will help boost your company growth"
                            hearts="54"
                            image="/images/BlogsDetail/Rectangle 3662.svg"
                        />
                        <Card
                            cardTitle="Partners"
                            cardTitleTwo="Team"
                            cardTitleThree="Business"
                            title="How networking will help boost your company growth"
                            hearts="54"
                            image="/images/BlogsDetail/Rectangle 3662.svg"
                        />
                        <Card
                            cardTitle="Job"
                            cardTitleTwo="Team"
                            cardTitleThree="Certifications"
                            title="Are certifications really worth it when seeking a new job?"
                            hearts="107"
                            image="/images/BlogsDetail/relatedPostImg.svg"
                        />
                        <Card
                            cardTitle="Technique"
                            cardTitleTwo="Speech"
                            cardTitleThree="Work"
                            title="All you need to know about the One-on-One meeting"
                            hearts="99"
                            image="/images/BlogsDetail/relatedPost3.svg"
                        />
                    </div>
                    <button className="py-[11px] px-[27px] md:py-[19px] md:px-[50px] rounded-[10px] bg-blueColor hover:bg-blue-600 text-base md:text-lg font-semibold text-white">
                        Load More
                    </button>
                </div>
            </div>
            <Testimonal />
        </>
    );
};

export default Blog;
