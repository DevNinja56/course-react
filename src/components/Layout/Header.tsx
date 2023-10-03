import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ProfileDropDown from '../DropDown/ProfileDropDown';
import Link from 'next/link';

const Header = () => {
    const router = useRouter();
    const [showDropDown, setShowDropDown] = useState(false);
    const onShowDropDown = () => {
        setShowDropDown(!showDropDown);
    };
    return (
        <div className="w-full fixed top-0 bg-white z-40">
            <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto py-6 flex justify-between items-center px-2 2xl:px-8 transition-all duration-300">
                <Link href="/">
                    <Image
                        width={204}
                        height={50}
                        alt="Logo"
                        src="/images/courseoptionslogo 1.svg"
                        priority
                    />
                </Link>
                <div className="flex items-center gap-x-6">
                    <div className="flex items-center gap-x-6">
                        <div className="flex items-center px-[10px] gap-x-[10px]">
                            <Image
                                width={32}
                                height={32}
                                alt="discover-icon"
                                src="/images/discovery.svg"
                                priority
                            />
                            <p className="font-semibold text-textBlackColor">
                                Discover
                            </p>
                        </div>
                        <Link href="/compare">
                            <div className="flex items-center px-[10px] gap-x-[10px]">
                                <Image
                                    width={32}
                                    height={32}
                                    alt="compare-icon"
                                    src="/images/Decide.svg"
                                    priority
                                />
                                <p className="font-semibold text-textBlackColor">
                                    Compare
                                </p>
                            </div>
                        </Link>
                        <Link href="/apply">
                            <div className="flex items-center px-[10px] gap-x-[10px]">
                                <Image
                                    width={32}
                                    height={32}
                                    alt="apply-icon"
                                    src="/images/Apply.svg"
                                    priority
                                />
                                <p className="font-semibold text-textBlackColor">
                                    Apply
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center gap-x-6">
                        <Image
                            width={32}
                            height={32}
                            alt="search-icon"
                            src="/images/search.svg"
                            priority
                        />
                        {router.pathname === '/profile' ? (
                            <div className="flex items-center gap-x-3 relative">
                                <Image
                                    height={36}
                                    width={36}
                                    alt="profile-img"
                                    src="/images/Image-36.svg"
                                    priority
                                />
                                <p className="text-lightGrayColor flex gap-x-1 text-[13px]">
                                    Daniyal
                                    <Image
                                        onClick={onShowDropDown}
                                        height={12}
                                        width={12}
                                        alt="down-arrow"
                                        className="cursor-pointer"
                                        src="/images/chevron-down.svg"
                                        priority
                                    />
                                </p>
                                <ProfileDropDown showDropDown={showDropDown} />
                            </div>
                        ) : (
                            <button className="py-[13px] px-[34px] gap-x-[6px] flex items-center rounded-[5px] bg-blueColor hover:bg-blue-600 text-white text-base font-medium">
                                <Image
                                    width={20}
                                    height={20}
                                    alt="user-icon"
                                    src="/images/Profile.svg"
                                    priority
                                />
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
