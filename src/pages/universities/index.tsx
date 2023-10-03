import CounselingWork from '@/components/CounselingWork/CounselingWork';
import Testimonal from '@/components/Testimonal/Testimonal';
import UniversitiesCards from '@/components/Universities/UniversitiesCard';
import Image from 'next/image';
import React from 'react';

const Universities = () => {
    return (
        <>
            <div className="w-full flex items-center justify-between h-[270px] mt-[100px] bg-white mb-16">
                <Image
                    height={193}
                    width={193}
                    alt="uni-round"
                    className="mt-[-260px] ml-[-8px]"
                    src="/images/profileImages/Ellipse 418.svg"
                    priority
                />
                <div className="flex flex-col items-center">
                    <p className="text-blueColor font-bold text-[23px]">
                        Your Quick Book To Explore
                    </p>
                    <h1 className="text-mainTextColor text-[48px] font-bold">
                        LEADING WORLD UNIVERSITIES
                    </h1>
                </div>
                <Image
                    height={235}
                    width={100}
                    alt="uni-round-2"
                    className="mt-20"
                    src="/images/Fields/Frame 691.svg"
                    priority
                />
            </div>
            <div className="w-full pb-20">
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-2 2xl:px-8 transition-all duration-300 flex justify-between">
                    <div className="flex flex-wrap gap-[30px] items-center justify-center w-full">
                        <UniversitiesCards
                            img="/images/Universities/Main 1.svg"
                            title="Rusell Group Universities"
                            insideImg="/images/Universities/Institution+Group+logo_russell+group.svg"
                        />
                        <UniversitiesCards
                            img="/images/Universities/Main 2.svg"
                            title="IVY League Universities"
                            insideImg="/images/Universities/Institution+Group+logo_russell+group.svg"
                        />
                        <UniversitiesCards
                            img="/images/Universities/Main 3.svg"
                            title="TU9 Universities"
                            insideImg="/images/Universities/Institution+Group+logo_russell+group.svg"
                        />
                        <UniversitiesCards
                            img="/images/Universities/Main 4.svg"
                            title="GO8-Group of Eight Universities"
                            insideImg="/images/Universities/Institution+Group+logo_russell+group.svg"
                        />
                        <UniversitiesCards
                            img="/images/Universities/Main 5.svg"
                            title="U15-Group of Canadian Research Universities"
                            insideImg="/images/Universities/Institution+Group+logo_russell+group.svg"
                        />
                    </div>
                </div>
            </div>
            <CounselingWork />
            <Testimonal />
        </>
    );
};

export default Universities;
