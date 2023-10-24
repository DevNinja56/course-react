import { ROUTES } from '@/config/constant';
import { useFilterQuery } from '@/hooks/filterQuery';
import { countryType } from '@/types';
import Link from 'next/link';
import React from 'react';

interface CountryProps {
    country: countryType;
}

const Card = ({ country }: CountryProps) => {
    const { addQuery } = useFilterQuery();

    return (
        <Link
            href={ROUTES.FILTER_COURSE}
            className="z-10"
            onClick={() => addQuery({ countries: [country.name] })}
        >
            <div
                className="border-2 border-countryBorderColor py-3 px-5 flex items-center gap-x-[35px] rounded-[5px] cursor-pointer hover:border-blueColor bg-white"
                title={country?.name}
            >
                <span
                    className={`fi-${country?.code.toLowerCase()} h-[55px] min-w-[55px] rounded-full object-contain bg-cover bg-center border  `}
                ></span>
                <p className="font-medium text-[23px] text-mainTextColor truncate ">
                    {country?.name}
                </p>
            </div>
        </Link>
    );
};

export default Card;
