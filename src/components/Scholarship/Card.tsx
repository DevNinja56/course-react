import { ROUTES } from '@/config/constant';
import { filterScholarShipType } from '@/types';
import Link from 'next/link';
import React from 'react';
import FavoriteButton from '../Button/FavoriteButton';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { RiGraduationCapFill } from 'react-icons/ri';
import School from '../Institute/icons/School';
import Tag from '../Institute/Tag';
import Image from 'next/image';
import { MdOutlinePriceChange } from 'react-icons/md';
// import Certificate from '../Institute/icons/Certificate';

interface propsType {
    scholarship: filterScholarShipType;
}

const Card: React.FC<propsType> = ({ scholarship }) => {
    const { name, type, degree, institute, country, amount } = scholarship;
    return (
        <div className="relative pt-7 shadow-md rounded-lg group hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col border border-gray-100 capitalize ">
            <FavoriteButton
                isActive={!!scholarship?.favoriteId?.[0]}
                body={{ scholarship: scholarship?._id }}
            />
            <Link href={ROUTES.SCHOLARSHIP.replace(':id', scholarship?._id)}>
                <div className="flex flex-col gap-5 w-full z-10">
                    <div className="w-full">
                        <Image
                            src="/images/Scholarships/scholarship (1) 1.png"
                            alt="image"
                            className="mx-auto"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="flex items-center w-full justify-between gap-2 pb-2 px-4 text-center">
                        <h1
                            title={name}
                            className="font-bold text-xl text-mainTextColor mx-auto"
                        >
                            {name} ({type})
                        </h1>
                    </div>
                    <div className="flex items-center flex-wrap w-full">
                        <Tag
                            className="border-r-2"
                            icon={
                                <FaMapMarkerAlt className="h-5 w-5 text-blueColor" />
                            }
                            text={country?.name ?? 'No Country'}
                        />
                        <Tag
                            icon={
                                <RiGraduationCapFill className="min-h-5 min-w-5 text-blueColor" />
                            }
                            text={
                                Array.isArray(degree)
                                    ? degree?.map((d) => d.name).join(', ')
                                    : degree?.name ?? 'No degree'
                            }
                        />
                        <Tag
                            className="border-r-2"
                            icon={
                                <MdOutlinePriceChange className="h-5 w-5 text-blueColor" />
                            }
                            text={amount}
                        />
                        <Tag
                            icon={
                                <School
                                    fill="fill-blueColor"
                                    className="5-4 w-5 text-blueColor"
                                />
                            }
                            text={institute.name ?? 'No institute'}
                        />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
