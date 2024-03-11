import ProfileComp from '@/components/Profile/ProfileComp';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Favorites from '@/components/Profile/Favorites/index';

export const profileTabs = {
    profile: 'Profile',
    favorites: 'Favourite'
};

const Profile = () => {
    const { query, isReady } = useRouter();
    const activeTab = query['tab'] as string;
    const [activeComponent, setActiveComponent] = useState(
        isReady && activeTab ? activeTab : profileTabs.profile
    );

    const tabs = [
        { title: profileTabs.profile, Component: ProfileComp },
        { title: profileTabs.favorites, Component: Favorites }
    ];

    return (
        <>
            <div className="w-full flex items-center justify-between h-[176px] mt-[100px] bg-profileBgColor overflow-hidden">
                <Image
                    height={106}
                    width={109}
                    alt="profile-round-img"
                    className="mt-[-140px] md:mt-[-100px] ml-[-20px] md:ml-[0px]"
                    src="/images/profileImages/Ellipse 418.svg"
                />
                <h1 className="text-mainTextColor text-[28px] md:text-[40px] font-extrabold">
                    Your {activeComponent}
                </h1>
                <Image
                    height={119}
                    width={100}
                    alt="profile-round-img"
                    className="mt-[100px] lg:mt-[56px] h-[93px] w-[95px] md:h-[119px] md:w-[100px] block md:hidden lg:block mr-[-7px] md:ml-0"
                    src="/images/profileImages/Frame 691.svg"
                />
                <Image
                    height={106}
                    width={109}
                    alt="profile-round-img"
                    className="mt-[69px] lg:mt-[56px] hidden md:block lg:hidden"
                    src="/images/profileImages/tabletRoundImg.svg"
                />
            </div>
            <div className="w-full pb-8 lg:pb-16">
                <div className="w-full lg:max-w-[1200px] 2xl:max-w-[2300px] mx-auto px-0 lg:px-2 2xl:px-8 transition-all duration-300">
                    <div className="flex items-center lg:mb-8">
                        {tabs.map(({ title }, i) => (
                            <div
                                key={'tabs-button-' + i + title}
                                onClick={() => setActiveComponent(title)}
                                className={`py-[15px] md:py-[18px] lg:py-[8px] w-[50%] pl-[30px] md:px-[50px] lg:w-auto lg:px-[37px] font-bold text-xl md:text-[26px] lg:text-2xl cursor-pointer ${
                                    activeComponent === title
                                        ? 'bg-blueColor text-white'
                                        : 'bg-white text-darkGrayColor'
                                }`}
                            >
                                {title}
                            </div>
                        ))}
                    </div>
                    {tabs.map(({ Component, title }, i) => (
                        <React.Fragment key={'profile-tabs-list-' + i}>
                            {activeComponent === title && <Component />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

Profile.layout = { auth: true };

export default Profile;
