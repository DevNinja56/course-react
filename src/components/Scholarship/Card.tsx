import { ROUTES } from '@/config/constant';
import { countryType, degreeType, instituteType } from '@/types';
import Link from 'next/link';
import React from 'react';
import FavoriteButton from '../Button/FavoriteButton';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { RiGraduationCapFill } from 'react-icons/ri';
import School from '../Institute/icons/School';
import Tag from '../Institute/Tag';
import { MdOutlinePriceChange } from 'react-icons/md';

interface propsType {
    name: string;
    type: string;
    degree: degreeType | degreeType[];
    institute: instituteType;
    country: countryType;
    amount: string;
    image: string;
    id: string;
    isActive: boolean | null;
    tagBox?: boolean;
    headingClass?: string;
}

const Card: React.FC<propsType> = ({
    name,
    type,
    degree,
    institute,
    country,
    amount,
    id,
    image,
    isActive,
    tagBox = true,
    headingClass = 'text-xl'
}) => {
    return (
        <div className="relative group hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col border border-gray-100 capitalize overflow-auto rounded-tr-md rounded-tl-md   ">
            {isActive !== null && (
                <FavoriteButton
                    isActive={isActive}
                    body={{ scholarship: id }}
                />
            )}
            <Link
                href={{
                    pathname: ROUTES.SCHOLARSHIP.replace(
                        ':title',
                        name.replaceAll(' ', '-')
                    ),
                    query: {
                        scholarship_id: id
                    }
                }}
            >
                <div className="flex flex-col w-full z-10 ">
                    <div className="w-full relative">
                        <img
                            // src="/images/Scholarships/scholarship (1) 1.png"
                            src={
                                image ??
                                '/images/Scholarships/scholarship (1) 1.png'
                            }
                            alt="image"
                            className="mx-auto aspect-[1/1] w-full object-cover"
                            width={100}
                            height={100}
                        />
                        <div className="flex items-center w-full justify-between gap-2 pb-2 px-4 text-center absolute bottom-0 bg-blueColor p-2 text-white ">
                            <h1
                                title={name}
                                className={`font-bold mx-auto ${headingClass}`}
                            >
                                {name}{' '}
                                {degree
                                    ? `for - ${!Array.isArray(degree) && degree.name}`
                                    : ''}{' '}
                                ({type})
                            </h1>
                        </div>
                    </div>
                    {tagBox && (
                        <div className="grid grid-cols-2 w-full">
                            <Tag
                                className=""
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
                                        ? degree.length
                                            ? degree
                                                  ?.map((d) => d.name)
                                                  .join(' / ')
                                            : 'No degree'
                                        : degree?.name ?? 'No degree'
                                }
                            />
                            <Tag
                                className=""
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
                                text={institute?.name ?? 'No institute'}
                            />
                        </div>
                    )}
                </div>
            </Link>
        </div>
    );
};

export default Card;
