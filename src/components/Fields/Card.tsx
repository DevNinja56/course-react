import { ROUTES } from '@/config/constant';
import { useFilterQuery } from '@/hooks/filterQuery';
import { disciplineType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import DegreeDropdowns from './DegreeDropdowns';

interface CardProps {
    discipline: disciplineType;
}

export type stateType = {
    undergraduate: boolean;
    postgraduate: boolean;
    research: boolean;
};

const Card = ({ discipline }: CardProps) => {
    const [isOpen, setOpen] = useState<stateType>({
        undergraduate: false,
        postgraduate: false,
        research: false
    });
    const { addQuery } = useFilterQuery();

    return (
        <div
            className="custom-shadow cursor-pointer min-w-[276px] md:min-w-full rounded-[10px] bg-white w-full z-10"
            onClick={() => addQuery({ discipline: [discipline.name] })}
        >
            <Link href={ROUTES.FILTER_COURSE} className="flex flex-col">
                <Image
                    height={165}
                    width={276}
                    alt="main-img"
                    className="rounded-[10px] rounded-b-none w-full h-40"
                    src={discipline.image}
                    priority
                />
                <div
                    className="w-full bg-blueColor text-white py-3 font-bold text-lg flex items-center justify-center "
                    title={discipline.name}
                >
                    <span className="max-w-1/5 whitespace-nowrap truncate px-4">
                        {discipline.name}
                    </span>
                </div>
            </Link>
            <div className="py-3">
                <div
                    className="py-3 px-[15px] flex items-center justify-between hover:justify-start cursor-pointer gap-x-1 transition-all duration-300 hover:bg-profileBgColor text-mainTextColor hover:text-blueColor relative"
                    onClick={() =>
                        setOpen((prev) => ({
                            ...prev,
                            undergraduate: true
                        }))
                    }
                >
                    <p>
                        <span>
                            Undergraduate ({discipline.undergraduate.length})
                        </span>
                        {discipline.undergraduate.length > 0 &&
                            isOpen.undergraduate && (
                                <DegreeDropdowns
                                    setOpen={setOpen}
                                    data={discipline.undergraduate}
                                    type="undergraduate"
                                />
                            )}
                    </p>
                    <BiChevronRight className="text-2xl" />
                </div>
                <div
                    className="py-3 px-[15px] flex items-center justify-between hover:justify-start cursor-pointer gap-x-1 transition-all duration-300 hover:bg-profileBgColor text-mainTextColor hover:text-blueColor relative"
                    onClick={() =>
                        setOpen((prev) => ({
                            ...prev,
                            postgraduate: true
                        }))
                    }
                >
                    <p>
                        <span>
                            Postgraduate ({discipline.postgraduate.length})
                        </span>
                        {discipline.postgraduate.length > 0 &&
                            isOpen.postgraduate && (
                                <DegreeDropdowns
                                    setOpen={setOpen}
                                    data={discipline.postgraduate}
                                    type="postgraduate"
                                />
                            )}
                    </p>
                    <BiChevronRight className="text-2xl" />
                </div>
                {/* <div
                    className="py-3 px-[15px] flex items-center justify-between hover:justify-start cursor-pointer gap-x-1 transition-all duration-300 hover:bg-profileBgColor text-mainTextColor hover:text-blueColor relative "
                    onClick={() =>
                        setOpen((prev) => ({
                            ...prev,
                            research: true
                        }))
                    }
                >
                    <p>
                        <span>
                            Postgraduate Research ({discipline.research.length})
                        </span>
                        {discipline.research.length > 0 && isOpen.research && (
                            <DegreeDropdowns
                                setOpen={setOpen}
                                data={discipline.research}
                                type="research"
                            />
                        )}
                    </p>
                    <BiChevronRight className="text-2xl" />
                </div> */}
            </div>
        </div>
    );
};

export default Card;
