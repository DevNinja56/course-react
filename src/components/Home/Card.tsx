import { ROUTES } from '@/config/constant';
import { useFilterQuery } from '@/hooks/filterQuery';
// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CustomIcon } from '@/utils/Icons';

interface cardProps {
    title: string;
    icon: string;
    description: string | null;
}

const Card = ({ title, icon, description }: cardProps) => {
    const { addQuery } = useFilterQuery();
    return (
        <Link
            href={ROUTES.FILTER_COURSE}
            onClick={() => addQuery({ discipline: [title] })}
            title={title}
        >
            <div className="bg-white rounded-[10px] custom-shadow p-3  cursor-pointer border-2 md:border-white hover:border-blueColor group transition-all duration-300">
                <div className="h-12 w-12 flex items-center justify-center border-2 border-blueColor rounded-full mb-3">
                    {/* <img
                        height={24}
                        width={24}
                        alt="icon"
                        src={`${img}`}
                        // priority
                    /> */}
                    <CustomIcon
                        name={icon}
                        className="text-[28px] text-blueColor"
                    />
                </div>
                <h4 className="text-mainTextColor font-bold text-base mb-1 line-clamp-1  group-hover:text-blueColor">
                    {title}
                </h4>
                <p className="text-mainTextColor font-medium text-xs leading-4 custom-truncate">
                    {description ??
                        ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, tempore!'}
                </p>
            </div>
        </Link>
    );
};

export default Card;
