import FavoriteButton from '@/components/Button/FavoriteButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface propsType {
    id: string;
    image: string;
    title: string;
    link: string;
    onClick?: () => void;
    type: 'course' | 'institute' | 'scholarship' | 'blog';
}

const FavCard: React.FC<propsType> = ({
    id,
    image,
    title,
    link,
    onClick,
    type
}) => {
    return (
        <div className="border-2 p-3 rounded-lg group hover:border-blueColor relative ">
            <FavoriteButton
                isActive={true}
                body={{
                    [type]: id
                }}
            />
            <Link href={link} onClick={onClick}>
                <div className="img">
                    <Image src={image} width={300} height={300} alt={title} />
                </div>
                <div className="group-hover:text-blueColor capitalize mt-5">
                    {title}
                </div>
            </Link>
        </div>
    );
};

export default FavCard;
