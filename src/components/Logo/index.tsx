import { ROUTES } from '@/config/constant';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={ROUTES.HOMEPAGE}>
            <strong>
                <Image
                    height={50}
                    width={204}
                    alt="course options Logo"
                    src="/images/courseoptionslogo 1.svg"
                    className="w-[187.68px] h-[46px] md:h-[50px] md:w-[204px]"
                    priority
                />
            </strong>
        </Link>
    );
};

export default Logo;
