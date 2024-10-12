import { ROUTES } from '@/config/constant';
import { countryType } from '@/types';
import Link from 'next/link';
import React from 'react';

interface CountryProps {
    country: countryType;
}

const Card = ({ country }: CountryProps) => {
    return (
        <Link
            href={{
                pathname: ROUTES.FILTER_COURSE,
                query: { countries: [country.name] }
            }}
            className="z-10 lg:w-1/4 md:w-[45%] w-full"
        >
            <div
                className="border-2 border-countryBorderColor py-3 px-3 flex flex-col items-center gap-x-[35px] rounded-lg cursor-pointer hover:border-blueColor bg-white"
                title={country?.name}
            >
                <span
                    className={`fi-${country?.code.toLowerCase()} h-[155px] min-w-[55px] w-full rounded-md object-contain bg-cover bg-center border  `}
                ></span>
                <p className="font-medium text-[23px] text-mainTextColor truncate mt-2 ">
                    {country?.name}
                </p>
            </div>
        </Link>
    );
};

export default Card;
