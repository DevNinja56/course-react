import CounselingWork from '@/components/CounselingWork/CounselingWork';
import Card from '@/components/Countries/Card';
import Testimonal from '@/components/Testimonal/Testimonal';
import Image from 'next/image';
import React from 'react';

const Countries = () => {
    return (
        <>
            <div className="w-full flex items-center justify-between h-[270px] mt-[100px] mb-16">
                <Image
                    height={193}
                    width={193}
                    alt="countries-round"
                    className="mt-[-260px] ml-[-8px]"
                    src="/images/profileImages/Ellipse 418.svg"
                    priority
                />
                <div className="flex flex-col items-center">
                    <h1 className="text-mainTextColor text-[48px] font-bold">
                        All Countries
                    </h1>
                    <p className="text-blueColor font-bold text-[23px]">
                        Browse Study Abroad Countries
                    </p>
                </div>
                <Image
                    height={235}
                    width={100}
                    alt="countries-round-2"
                    className="mt-20"
                    src="/images/Fields/Frame 691.svg"
                    priority
                />
            </div>
            <div className="w-full pb-20">
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-2 2xl:px-8 transition-all duration-300 flex flex-col gap-y-10">
                    <div className="w-full flex items-center justify-between">
                        <h1 className="font-bold text-mainTextColor text-[29px]">
                            Click on one to get more information
                        </h1>
                        <div className="flex items-center gap-x-3">
                            <p className="text-grayColor">Sort by:</p>
                            <button className="py-2 px-[44px] gap-x-[6px] rounded-[5px] border-2 border-scholarshipBorderColor text-darkGrayColor flex items-center">
                                A-Z{' '}
                                <Image
                                    height={20}
                                    width={20}
                                    alt="down-arrow"
                                    src="/images/Countries/chevron-down.svg"
                                    priority
                                />
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                        <Card
                            countryName="Australia"
                            img="/images/Countries/Country 1.svg"
                        />
                        <Card
                            countryName="Austria"
                            img="/images/Countries/Country 2.svg"
                        />
                        <Card
                            countryName="Azerbaijan"
                            img="/images/Countries/Country 3.svg"
                        />
                        <Card
                            countryName="Belgium"
                            img="/images/Countries/Country 4.svg"
                        />
                        <Card
                            countryName="France"
                            img="/images/Countries/Country 5.svg"
                        />
                        <Card
                            countryName="China"
                            img="/images/Countries/Country 6.svg"
                        />
                        <Card
                            countryName="Canada"
                            img="/images/Countries/Country 7.svg"
                        />
                        <Card
                            countryName="Brazil"
                            img="/images/Countries/Country 8.svg"
                        />
                        <Card
                            countryName="Australia"
                            img="/images/Countries/Country 1.svg"
                        />
                        <Card
                            countryName="Austria"
                            img="/images/Countries/Country 2.svg"
                        />
                        <Card
                            countryName="Azerbaijan"
                            img="/images/Countries/Country 3.svg"
                        />
                        <Card
                            countryName="Belgium"
                            img="/images/Countries/Country 4.svg"
                        />
                        <Card
                            countryName="France"
                            img="/images/Countries/Country 5.svg"
                        />
                        <Card
                            countryName="China"
                            img="/images/Countries/Country 6.svg"
                        />
                        <Card
                            countryName="Canada"
                            img="/images/Countries/Country 7.svg"
                        />
                        <Card
                            countryName="Brazil"
                            img="/images/Countries/Country 8.svg"
                        />
                        <Card
                            countryName="Australia"
                            img="/images/Countries/Country 1.svg"
                        />
                        <Card
                            countryName="Austria"
                            img="/images/Countries/Country 2.svg"
                        />
                        <Card
                            countryName="Azerbaijan"
                            img="/images/Countries/Country 3.svg"
                        />
                        <Card
                            countryName="Belgium"
                            img="/images/Countries/Country 4.svg"
                        />
                        <Card
                            countryName="France"
                            img="/images/Countries/Country 5.svg"
                        />
                        <Card
                            countryName="China"
                            img="/images/Countries/Country 6.svg"
                        />
                        <Card
                            countryName="Canada"
                            img="/images/Countries/Country 7.svg"
                        />
                        <Card
                            countryName="Brazil"
                            img="/images/Countries/Country 8.svg"
                        />
                        <Card
                            countryName="Australia"
                            img="/images/Countries/Country 1.svg"
                        />
                        <Card
                            countryName="Austria"
                            img="/images/Countries/Country 2.svg"
                        />
                        <Card
                            countryName="Azerbaijan"
                            img="/images/Countries/Country 3.svg"
                        />
                        <Card
                            countryName="Belgium"
                            img="/images/Countries/Country 4.svg"
                        />
                        <Card
                            countryName="France"
                            img="/images/Countries/Country 5.svg"
                        />
                        <Card
                            countryName="China"
                            img="/images/Countries/Country 6.svg"
                        />
                        <Card
                            countryName="Canada"
                            img="/images/Countries/Country 7.svg"
                        />
                        <Card
                            countryName="Brazil"
                            img="/images/Countries/Country 8.svg"
                        />
                        <Card
                            countryName="Australia"
                            img="/images/Countries/Country 1.svg"
                        />
                        <Card
                            countryName="Austria"
                            img="/images/Countries/Country 2.svg"
                        />
                        <Card
                            countryName="Azerbaijan"
                            img="/images/Countries/Country 3.svg"
                        />
                        <Card
                            countryName="Belgium"
                            img="/images/Countries/Country 4.svg"
                        />
                        <Card
                            countryName="France"
                            img="/images/Countries/Country 5.svg"
                        />
                        <Card
                            countryName="China"
                            img="/images/Countries/Country 6.svg"
                        />
                    </div>
                </div>
            </div>
            <CounselingWork />
            <Testimonal />
        </>
    );
};

export default Countries;
