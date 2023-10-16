import { ROUTES } from '@/config/constant';
import { useFilterQuery } from '@/hooks/filterQuery';
import { disciplineType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardProps {
    discipline: disciplineType;
}

const Card = ({ discipline }: CardProps) => {
    const { addQuery } = useFilterQuery();

    return (
        <Link
            href={ROUTES.FILTER_COURSE}
            className="custom-shadow cursor-pointer min-w-[276px] md:min-w-full rounded-[10px] bg-white w-[100%] z-10"
        >
            <div
                className="flex flex-col"
                onClick={() => addQuery({ discipline: [discipline.name] })}
            >
                <Image
                    height={165}
                    width={276}
                    alt="main-img"
                    className="rounded-[10px] rounded-b-none w-full"
                    src={discipline.image ?? `/images/Fields/MainImg1.svg`}
                    priority
                />
                <div className="w-full bg-blueColor text-white py-3 font-bold text-lg flex items-center justify-center">
                    {discipline.name}
                </div>
            </div>
            <div className="py-3">
                <div
                    className="py-3 px-[15px] flex items-center justify-between hover:justify-start cursor-pointer gap-x-1 transition-all duration-300 hover:bg-profileBgColor text-mainTextColor hover:text-blueColor"
                    onClick={() =>
                        addQuery({
                            discipline: [discipline.name],
                            degreeType: ['Undergraduate']
                        })
                    }
                >
                    <h1>Undergraduate</h1>
                    <Image
                        height={20}
                        width={20}
                        alt="arrow-right"
                        src="/images/Fields/chevron-right.svg"
                        priority
                    />
                </div>
                <div
                    className="py-3 px-[15px] flex items-center justify-between hover:justify-start cursor-pointer gap-x-1 transition-all duration-300 hover:bg-profileBgColor text-mainTextColor hover:text-blueColor"
                    onClick={() =>
                        addQuery({
                            discipline: [discipline.name],
                            degreeType: ['Postgraduate']
                        })
                    }
                >
                    <h1>Postgraduate</h1>
                    <Image
                        height={20}
                        width={20}
                        alt="arrow-right"
                        src="/images/Fields/chevron-right.svg"
                        priority
                    />
                </div>
                <div
                    className="py-3 px-[15px] flex items-center justify-between hover:justify-start cursor-pointer gap-x-1 transition-all duration-300 hover:bg-profileBgColor text-mainTextColor hover:text-blueColor"
                    onClick={() =>
                        addQuery({
                            discipline: [discipline.name],
                            degreeType: ['Postgraduate By Research']
                        })
                    }
                >
                    <h1>Postgraduate By Research</h1>
                    <Image
                        height={20}
                        width={20}
                        alt="arrow-right"
                        src="/images/Fields/chevron-right.svg"
                        priority
                    />
                </div>
            </div>
        </Link>
    );
};

export default Card;
