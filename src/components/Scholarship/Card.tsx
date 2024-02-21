import { ROUTES } from '@/config/constant';
import {
    countryType,
    degreeType,
    disciplineType,
    instituteType
} from '@/types';
import Link from 'next/link';
import React from 'react';
import FavoriteButton from '../Button/FavoriteButton';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Certificate from '../Institute/icons/Certificate';
import { RiGraduationCapFill } from 'react-icons/ri';
import School from '../Institute/icons/School';
import { FaArrowRight } from 'react-icons/fa6';
import Tag from '../Institute/Tag';

interface propsType {
    id: string;
    favoriteId?: string[];
    name: string;
    type: string;
    degrees: degreeType[];
    institute: instituteType;
    discipline: disciplineType[];
    country: countryType;
}

const Card: React.FC<propsType> = ({
    id,
    favoriteId,
    name,
    type,
    degrees,
    institute,
    discipline,
    country
}) => {
    return (
        <div className="relative pt-7 pb-8 shadow-md rounded-lg group hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col border border-gray-100 min-h-[203px]">
            <FavoriteButton
                isActive={!!favoriteId?.[0]}
                body={{ scholarship: id }}
            />
            <Link href={ROUTES.SCHOLARSHIP.replace(':id', id)}>
                <div className="flex flex-col gap-5 w-full px-3 z-10">
                    <div className="flex items-center w-full justify-between gap-2">
                        <h1
                            title={name}
                            className="font-bold text-base text-mainTextColor"
                        >
                            {name} ({type})
                        </h1>
                    </div>
                    <div className="flex items-center gap-2 gap-y-5 flex-wrap w-full">
                        <Tag
                            icon={
                                <FaMapMarkerAlt className="h-4 w-4 text-blueColor" />
                            }
                            text={country?.name ?? 'No Country'}
                        />
                        <Tag
                            icon={
                                <RiGraduationCapFill className="h-4 w-4 text-blueColor" />
                            }
                            text={degrees.map((item) => item.name).join()}
                        />
                        <Tag
                            icon={
                                <Certificate className="h-4 w-4 text-blueColor" />
                            }
                            text={discipline.map((item) => item.name).join()}
                        />
                        <Tag
                            icon={
                                <School
                                    fill="fill-blueColor"
                                    className="h-4 w-4 text-blueColor"
                                />
                            }
                            text={institute.name ?? 'No institute'}
                        />
                    </div>
                </div>
                <div className="border-black flex justify-end w-full absolute bottom-0 right-0">
                    <div className="flex items-center justify-center bg-gray-200 group-hover:bg-blue-600 transition-all duration-500 h-16 w-16 before:bg-white before:w-16 before:rounded-br-full before:h-full relative before:absolute before:top-0 before:left-0">
                        <FaArrowRight className="z-10 h-3 w-3 text-white absolute right-1 bottom-[6px]" />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
