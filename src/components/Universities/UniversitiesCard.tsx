import { ROUTES } from '@/config/constant';
import Link from 'next/link';
import React from 'react';
import FavoriteButton from '../Button/FavoriteButton';
import { instituteType } from '@/types';

interface propsType {
    institute: instituteType;
}

const UniversitiesCards = ({ institute }: propsType) => {

    return (
        <div className="custom-shadow w-[80%] md:w-[35%] lg:w-[31%] rounded-[10px] bg-white relative overflow-hidden group z-0 ">
            <FavoriteButton
                isActive={!!institute?.favoriteId?.[0]}
                body={{ institute: institute.id }}
            />
            <Link
                href={{
                    pathname: ROUTES.INSTITUTES_DETAIL.replace(
                        ':title',
                        institute.name.replaceAll(' ', '-')
                    ),
                    query: { institute_id: institute.id }
                }}
            >
                <img
                    height={245.62}
                    width={367}
                    alt="uni-img"
                    className="h-[240px] w-auto p-5 block mx-auto"
                    src={institute.logo} 
                />
                <div className="transition-all duration-500 absolute bg-blueColor left-0 h-[100%] w-[100%] bottom-[-245.62px] 2xl:bottom-[-491.24px] group-hover:bottom-0 flex flex-col gap-y-5 items-center justify-center">
                    <img
                        height={74}
                        width={148}
                        alt="uni-img"
                        src={institute.logo}
                    />
                    <p className="text-white text-lg font-light text-center">
                        {institute.name}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default UniversitiesCards;
