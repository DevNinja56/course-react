import CounselingWork from '@/components/CounselingWork/CounselingWork';
import Card from '@/components/Countries/Card';
import Testimonial from '@/components/Testimonial/Testimonal';
import { useGetCountriesQuery } from '@/store/slices/allRequests';
import Image from 'next/image';
import React from 'react';
import 'flag-icons/css/flag-icons.min.css';
import LoaderSpinner from '@/components/LoaderSpinner';

const Countries = () => {
    const { data, isLoading } = useGetCountriesQuery();
    return (
        <>
            <div className="w-full flex items-center justify-center h-[270px] mt-[100px] mb-16 relative">
                <Image
                    height={193}
                    width={193}
                    alt="uni-round"
                    className="top-[-50px] left-[-8px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[193px] lg:h-[193px] absolute"
                    src="/images/profileImages/Ellipse 418.svg"
                    priority
                />
                <div className="flex flex-col items-center z-10">
                    <h1 className="text-mainTextColor text-[32px] md:text-[48px] font-bold">
                        All Countries
                    </h1>
                    <p className="text-blueColor font-bold text-lg md:text-[23px]">
                        Browse Study Abroad Countries
                    </p>
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
            <div className="w-full pb-4 lg:pb-20">
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-[50px] lg:px-2 2xl:px-8 transition-all duration-300 flex flex-col gap-y-10">
                    <div className="w-full flex items-center justify-between">
                        <h1 className="font-bold text-mainTextColor text-xl md:text-[29px]">
                            Click on one to get more information
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] px-0 md:px-7 lg:px-0">
                        {isLoading ? (
                            <LoaderSpinner />
                        ) : (
                            data?.map((country) => (
                                <Card
                                    key={country.id + '--CountryList'}
                                    country={country}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
            <CounselingWork />
            <Testimonial />
        </>
    );
};

export default Countries;
