// import { ROUTES } from '@/config/constant';
import PageCard from '@/components/LocalEntry/PageCard';
import React from 'react';

const LocalEntry = () => {
    return (
        <div className="2xl:container 2xl:mx-auto overflow-hidden">
            <div className="bg-[#2C79FF] relative w-full h-auto md:h-[520px] flex flex-col items-center">
                <div className="flex justify-between absolute w-full">
                    <img
                        src="/images/SmartMatch/Pattern.png"
                        className="hidden lg:block h-80 md:h-[520px] scale-x-[-1] opacity-50"
                        alt="Pattern"
                    />
                    <img
                        src="/images/SmartMatch/Pattern.png"
                        className="hidden lg:block h-80 md:h-[520px] opacity-50"
                        alt="Pattern"
                    />
                </div>
                <div className="flex flex-col justify-center items-center text-center w-11/12 lg:w-2/3 z-10 mt-8 md:mt-12">
                    <h1 className="text-2xl md:text-3xl text-white font-bold mt-4 mb-2">
                        Local Entry Requirements
                    </h1>
                    <p className="text-white w-full md:w-3/4 text-sm md:text-base font-light">
                       We aim to connect UK universities directly with international students worldwide, providing streamlined access to educational opportunities across borders.
                    </p>
                    <div className="mt-6 md:mt-10">
                        <img
                            src="/images/LocalEntry/Mockup.png"
                            alt="Mockup"
                            className="  md:h-[300px] lg:h-[400px] object-contain max-md:py-10"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center relative bg-[#fbfcff] mt-8 md:mt-20 py-10">
                <img
                    alt="Elipse"
                    className="absolute lg:h-60 h-24 -right-32 top-10"
                    src="/images/elipse.png"
                />
                <div className="flex flex-col text-center items-center relative w-full px-5">
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-[#2563eb] font-extrabold mb-6">
                        Nationalities We Cover
                    </h1>
                    <img
                        src="/images/LocalEntry/WorldMap.png"
                        alt="WorldMap"
                        className="h-auto md:h-96 p-5 drop-shadow-2xl object-contain"
                    />
                    <div className="mt-6 w-full lg:w-3/5">
                        <div className="flex flex-col gap-6">
                            <hr className="h-0.5 bg-[#2563eb] border-none mb-6" />
                            <div className="flex flex-col md:flex-row justify-between gap-8">
                                <div>
                                    <h1 className="text-lg sm:text-xl text-[#2563eb] font-extrabold mb-1">
                                        South Asia:
                                    </h1>
                                    <ul className="text-center text-sm md:text-base">
                                        <li>Pakistan</li>
                                        <li>India</li>
                                        <li>Bangladesh</li>
                                        <li>Sri Lanka</li>
                                        <li>Nepal</li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="text-lg sm:text-xl text-[#2563eb] font-extrabold mb-1">
                                        Middle East:
                                    </h1>
                                    <ul className="text-center text-sm md:text-base">
                                        <li>Kuwait</li>
                                        <li>Saudi Arabia</li>
                                        <li>UAE</li>
                                        <li>Oman</li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="text-lg sm:text-xl text-[#2563eb] font-extrabold mb-1">
                                        Africa:
                                    </h1>
                                    <ul className="text-center text-sm md:text-base">
                                        <li>Nigeria</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative mt-10">
                <img
                    alt="FAQ-Round"
                    className="absolute lg:h-32 h-12 -left-10 top-10"
                    src="/images/elipse.png"
                />
                <PageCard
                    heading="For Undergraduate Applicants"
                    description="Discover the required percentage from your local
                    high school qualification for undergraduate courses,
                    ensuring you meet the necessary criteria before
                    applying."
                    imageUrl="/images/LocalEntry/Undergraduate.png"
                />
            </div>
            <div className="mt-10">
                <PageCard
                    heading="For Postgraduate Applicants"
                    description="Find out the specific percentage or CGPA required from your local bachelor's degree
                    to qualify for postgraduate programs, giving you accurate insights into the entry criteria."
                    imageUrl="/images/LocalEntry/Postgraduate.png"
                    reverse
                />
            </div>
            <div className="relative mt-10">
                <img
                    alt="FAQ-Round"
                    className="absolute h-14 md:h-20 right-2 -top-10"
                    src="/images/Ellipse 424.svg"
                />
                <PageCard
                    heading="For A Level Students"
                    description="Understand the required grades or UCAS points from your A Level qualifications 
                    for entry into undergraduate courses, ensuring your subjects and grades meet the 
                    necessary standards."
                    imageUrl="/images/LocalEntry/Alevels.png"
                />
            </div>
            <div className="relative mt-10 mb-10">
                <img
                    alt="FAQ-Round"
                    className="absolute h-14 md:h-20 left-2 -top-10"
                    src="/images/Ellipse 424.svg"
                />
                <PageCard
                    heading="For International Baccalaureate Students"
                    description="Find the specific International Baccalaureate (IB) points and subject requirements 
                    needed to apply for undergraduate programs at UK universities."
                    imageUrl="/images/LocalEntry/International.png"
                    reverse
                />
                <img
                    alt="FAQ-Round"
                    className="absolute h-14 md:h-20 -right-10 bottom-10"
                    src="/images/Ellipse 424.svg"
                />
            </div>
        </div>
    );
};

export default LocalEntry;
