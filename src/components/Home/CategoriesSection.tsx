import Link from 'next/link';
import React from 'react';
import Card from './Card';
import { ROUTES } from '@/config/constant';
import { useGetPaginatedDisciplineQuery } from '@/store/slices/allRequests';

const CategoriesSection = () => {
    const { data } = useGetPaginatedDisciplineQuery({
        limit: 6,
        page: 1
    });

    return (
        <div className="container mx-auto px-4 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300 flex flex-col gap-y-16 lg:flex-row gap-x-8">
            <div className="pt-16 w-full lg:w-[35%] z-10">
                <p className="text-blueColor text-xl md:text-[23px] font-bold">
                    Top Categories
                </p>
                <h1 className="text-mainTextColor font-extrabold text-[35px] mb-2">
                    Explore our Popular Categories
                </h1>
                <p className="text-darkGrayColor text-base mb-7">
                    Pellentesque fringilla, massa sit amet feugiat mollis, leo
                    turpis elementum justo, vel consequat ex urna ut massa
                    maecenas justo sapien.
                </p>
                <Link href={ROUTES.FIELDS}>
                    <button className="pt-4 pb-[17px] px-[48px] bg-blueColor rounded-[5px] font-semibold text-white z-10 sticky hover:bg-blue-600">
                        All Categories
                    </button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 z-10 w-full lg:w-[65%]">
                {data?.data?.map((category) => (
                    <Card
                        key={'category--list--' + category.name}
                        img="/images/Home/download (35).svg"
                        title={category.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoriesSection;
