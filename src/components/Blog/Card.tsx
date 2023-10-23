import { ROUTES } from '@/config/constant';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import FavoriteButton from '../Button/FavoriteButton';
import { usePaginatedBlogs } from '@/hooks/blogsPaginated';
import { nanoid } from '@reduxjs/toolkit';

interface cardProps {
    title: string;
    tags: string[];
    image: string;
    favorite: string[];
    id: string;
}

const Card = ({ title, favorite, tags, image, id }: cardProps) => {
    const router = useRouter();
    const { fetchBlogs } = usePaginatedBlogs();
    return (
        <div
            className={`custom-shadow relative ${
                router.pathname === ROUTES.BLOGS_DETAIL
                    ? 'min-w-[340px] 2xl:min-w-0 2xl:w-[27vw]'
                    : ''
            }`}
        >
            <FavoriteButton
                isActive={!!favorite?.[0]}
                body={{ blog: id }}
                refetch={fetchBlogs}
            />
            <Link href={ROUTES.BLOGS_DETAIL.replace(':id', id)}>
                <Image
                    height={203.29}
                    width={366}
                    alt="carding"
                    className="rounded-[10px] rounded-b-none mb-4 w-full"
                    src={`${image}`}
                    priority
                />
                <div className="px-[25px] flex flex-col gap-y-6">
                    <div className="flex items-center gap-x-3">
                        {tags?.map((tag) => (
                            <p
                                key={'tags--' + tags + nanoid()}
                                className="py-1 px-[10px] rounded-[5px] bg-profileBgColor text-xs text-mainTextColor"
                            >
                                {tag}
                            </p>
                        ))}
                    </div>
                    <h1 className="font-bold text-lg text-mainTextColor">
                        {title}
                    </h1>
                    <div className="w-full flex items-center justify-between">
                        <div className="py-[7px] gap-[6px] group flex items-center">
                            <h1 className="text-sm text-blueColor group-hover:text-mainTextColor transition-all duration-500 group-hover:opacity-[0.9]">
                                Read More
                            </h1>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.3335 10H16.6668M16.6668 10L11.6668 5M16.6668 10L11.6668 15"
                                    className="group-hover:translate-x-1 transition-all duration-500"
                                    stroke="#2C79FF"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
