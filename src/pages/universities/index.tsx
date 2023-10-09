import CounselingWork from '@/components/CounselingWork/CounselingWork';
import Testimonial from '@/components/Testimonial/Testimonal';
import UniversitiesCards from '@/components/Universities/UniversitiesCard';
import Image from 'next/image';
import React from 'react';

const Universities = () => {
    return (
        <>
            <div className="w-full flex items-center justify-center h-[270px] mt-[100px] mb-4 relative">
                <Image
                    height={193}
                    width={193}
                    alt="uni-round"
                    className="top-[-50px] left-[-8px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[193px] lg:h-[193px] absolute"
                    src="/images/profileImages/Ellipse 418.svg"
                    priority
                />
                <div className="flex flex-col items-center z-10">
                    <p className="text-blueColor font-bold text-base md:text-[23px] text-center">
                        Your Quick Book To Explore
                    </p>
                    <h1 className="text-mainTextColor text-[32px] md:text-[48px] font-bold text-center">
                        LEADING WORLD UNIVERSITIES
                    </h1>
                </div>
                <Image
                    height={235}
                    width={100}
                    alt="uni-round-2"
                    className="top-24 md:top-20 h-[175px] w-[50px] md:h-[215px] md:w-[80px] lg:h-[235px] lg:w-[100px] absolute right-0"
                    src="/images/Fields/Frame 691.svg"
                    priority
                />
            </div>
            <div className="w-full pb-8 md:pb-20">
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-2 2xl:px-8 transition-all duration-300 flex justify-between">
                    <div className="flex flex-wrap gap-[30px] items-center justify-center w-full">
                        <UniversitiesCards
                            img="/images/Universities/Main 1.svg"
                            title="Rusell Group Universities"
                            insideImg="/images/Universities/institutionGroupLogo.svg"
                        />
                        <UniversitiesCards
                            img="/images/Universities/Main 2.svg"
                            title="IVY League Universities"
                            insideImg="/images/Universities/institutionGroupLogo2.svg"
                        />
                        <UniversitiesCards
                            img="/images/Universities/Main 3.svg"
                            title="TU9 Universities"
                            insideImg="/images/Universities/institutionGroupLogo3.svg"
                        />
                        <UniversitiesCards
                            img="/images/Universities/Main 4.svg"
                            title="GO8-Group of Eight Universities"
                            insideImg="/images/Universities/institutionGroupLogo4.svg"
                        />
                        <UniversitiesCards
                            img="/images/Universities/Main 5.svg"
                            title="U15-Group of Canadian Research Universities"
                            insideImg="/images/Universities/institutionGroupLogo5.svg"
                        />
                    </div>
                </div>
            </div>
            <CounselingWork />
            <Testimonial />
        </>
    );
};

export default Universities;
