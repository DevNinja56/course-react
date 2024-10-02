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
        <div className="relative group cursor-pointer flex flex-col border border-gray-300 capitalize overflow-auto rounded-xl ">
            {isActive !== null && (
                <FavoriteButton
                    isActive={isActive}
                    body={{ scholarship: id }}
                    extendClass="group-hover:translate-y-[20px] group-hover:translate-x-[-20px] duration-300 transition-all"
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
                        <div className="">
                            <img
                                // src="/images/Scholarships/scholarship (1) 1.png"
                                src={
                                    image ??
                                    '/images/Scholarships/scholarship (1) 1.png'
                                }
                                alt="image"
                                className="mx-auto aspect-[43.4/25.8] w-full object-cover rounded-md group-hover:w-[calc(100%-30px)] group-hover:mt-[15px] transition-all duration-300 "
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="px-3 mt-4  ">
                            <h3
                                title={name}
                                className={`font-bold mx-auto text-base ${headingClass}`}
                            >
                                {name} ({type})
                            </h3>
                            <p className="text-xs my-2">
                                The University of Portsmouth is the 25th largest
                                in the UK and dates back to the opening.
                            </p>
                        </div>
                    </div>
                    {tagBox && (
                        <div className="grid grid-cols-2 w-full px-3 py-2 mb-2">
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
                                        : (degree?.name ?? 'No degree')
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
