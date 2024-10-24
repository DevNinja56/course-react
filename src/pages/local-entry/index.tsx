// import { ROUTES } from '@/config/constant';
import PageCard from '@/components/LocalEntry/PageCard';
import Link from 'next/link';
import React from 'react';

const LocalEntry = () => {
    return (
        <div className="2xl:container 2xl:mx-auto overflow-hidden">
            <div className="bg-gradient-to-b from-blue-600  to-white w-full h-screens flex flex-col pb-5">
                <div className="flex flex-col justify-center items-center self-center text-center w-11/12 md:w-1/2 z-10 mt-14">
                    <div className="flex flex-col items-center">
                        <h1 className="text-[1.5rem] md:text-[2rem] text-white font-bold mb-1">
                            Local Entry Requirements
                        </h1>
                        <p className="text-white w-full text-xs md:text-sm">
                            Our platform provides localized entry requirements
                            tailored to your nationality, ensuring you get
                            accurate and relevant information for your chosen
                            course.
                        </p>

                        <Link href={''} className="mt-5">
                            <button className="text-md text-[#2C79FF] flex items-center gap-1 bg-white px-6 md:px-8 py-2 rounded-full hover:shadow-xl transition-all font-extrabold">
                                Try Now
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center p-6 pb-20">
                        <img
                            src="/images/LocalEntry/Mockup.png"
                            alt="Mockup"
                            className="h-72"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row justify-around mx-4 items-center lg:items-start bg-white">
                <img
                    src="/images/LocalEntry/WorldMap.png"
                    alt="WorldMap"
                    className="h-72 drop-shadow-2xl object-contain lg:h-auto lg:max-h-64"
                />
                <div className="px-5 flex flex-col gap-3 justify-center lg:mb-0 mb-8 w-fit">
                    <h1 className="text-2xl max-[400px]:text-[1.1rem] sm:text-3xl text-[#2563eb] font-extrabold text-center lg:text-left">
                        Nationalities We Cover
                    </h1>

                    <hr className="h-px bg-[#2563eb] border-none" />

                    <div className="flex lg:justify-start justify-between gap-10">
                        <div className=" mb-4 lg:mb-0">
                            <h1 className="pr-0 text-md  sm:text-xl text-[#2563eb] font-extrabold mb-1">
                                South Asia:
                            </h1>
                            <ul className="text-left">
                                <li>Pakistan</li>
                                <li>India</li>
                                <li>Bangladesh</li>
                                <li>Sri Lanka</li>
                                <li>Nepal</li>
                            </ul>
                        </div>
                        <div className=" mb-4 lg:mb-0">
                            <h1 className=" text-md   sm:text-xl text-[#2563eb] font-extrabold mb-1">
                                Middle East:
                            </h1>
                            <ul className="text-left">
                                <li>Kuwait</li>
                                <li>Saudi Arabia</li>
                                <li>UAE</li>
                                <li>Oman</li>
                            </ul>
                        </div>
                        <div className="pr-0 xl:pr-14 lg:pr-4">
                            <h1 className="text-md   sm:text-xl text-[#2563eb] font-extrabold mb-1">
                                Africa:
                            </h1>
                            <ul className="text-left">
                                <li>Nigeria</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <PageCard
                heading="For Undergraduate Applicants"
                description="Discover the required percentage from your local
                            high school qualification for undergraduate courses,
                            ensuring you meet the necessary criteria before
                            applying."
                imageUrl="/images/LocalEntry/Undergraduate.png"
            />

            <PageCard
                heading="For Postgraduate Applicants"
                description="Find out the specific percentage or CGPA required from your local bachelor's degree
to qualify for postgraduate programs, giving you accurate insights into the entry criteria."
                imageUrl="/images/LocalEntry/Postgraduate.png"
                reverse
            />

            <PageCard
                heading="For A Level Students"
                description="Understand the required grades or UCAS points from your A Level qualifications 
for entry into undergraduate courses, ensuring your subjects and grades meet the 
necessary standards."
                imageUrl="/images/LocalEntry/Alevels.png"
            />

            <PageCard
                heading="For A Level Students"
                description="Find the specific International Baccalaureate (IB) points and subject requirements 
needed to apply for undergraduate programs at UK universities."
                imageUrl="/images/LocalEntry/International.png"
                reverse
            />
        </div>
    );
};

export default LocalEntry;
