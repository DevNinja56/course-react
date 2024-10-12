// import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Institutes from './Institutes';
import Scholarships from './Scholarships';
import Courses from './Courses';
import Blogs from './Blogs';
import { useRouter } from 'next/router';
import { ROUTES } from '@/config/constant';

export const favoritesTabs: string[] = [
    'Institutes',
    'Scholarships',
    'Courses',
    'Blogs'
];

const Favorites = () => {
    const { query, isReady, push } = useRouter();
    const tab2 = query['tab2'] as string;
    const activeTab = favoritesTabs.indexOf(tab2);
    const [active, setActive] = useState(
        isReady && tab2 && activeTab > 0
            ? favoritesTabs[activeTab]
            : favoritesTabs[0]
    );

    useEffect(() => {
        if (isReady && activeTab) {
            setActive(
                tab2 && activeTab > 0
                    ? favoritesTabs[activeTab]
                    : favoritesTabs[0]
            );
        }
    }, [activeTab, isReady, tab2]);

    const tabs = [
        { title: favoritesTabs[0], Component: Institutes },
        { title: favoritesTabs[1], Component: Scholarships },
        { title: favoritesTabs[2], Component: Courses },
        { title: favoritesTabs[3], Component: Blogs }
    ];

    const isActiveComponentRendered = false;

    return (
        <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="flex flex-col w-full lg:w-[26.5%]">
                {tabs.map(({ title }, i) => (
                    <div
                        key={'favourites--tabs' + i}
                        className="flex flex-col gap-y-6"
                        onClick={() =>
                            push({
                                pathname: ROUTES.PROFILE,
                                query: { ...query, tab2: title }
                            })
                        }
                    >
                        <div
                            className={`py-[14px] md:py-[17px] lg:py-[20px] px-[30px] md:px-[50px] lg:pl-0 lg:pr-5   lg:border-t-white lg:border-b-white lg:border-l-white lg:border-r-4  flex justify-between items-center lg:justify-end border md:border-personalInfoBorderColor cursor-pointer ${
                                active === title
                                    ? 'text-blueColor lg:border-blueColor lg:bg-profileBgColor'
                                    : 'text-mainTextColor lg:border-transparent'
                            } `}
                        >
                            <p className="text-base md:text-xl font-semibold">
                                {title}
                            </p>
                            <img
                                height={20}
                                width={20}
                                alt="img-arrow-down"
                                src="/images/chevron-down.svg"
                                className={`lg:hidden ${
                                    title === active ? 'rotate-[-180deg]' : ''
                                }`}
                                // priority
                            />
                        </div>
                        {!isActiveComponentRendered && active === title && (
                            <div className="lg:hidden flex-col gap-y-3 flex">
                                {tabs.map(({ Component, title }, i) => (
                                    <React.Fragment
                                        key={'favourites-tabs-list-' + i}
                                    >
                                        {active === title && <Component />}
                                    </React.Fragment>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="lg:flex flex-col gap-y-3 w-[67%] hidden">
                {tabs.map(({ Component, title }, i) => (
                    <React.Fragment key={'favourites-tabs-list-' + i}>
                        {active === title && <Component />}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
