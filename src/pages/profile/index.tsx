import IntrestingForYou from '@/components/Profile/IntrestingForYou';
import ProfileComp from '@/components/Profile/ProfileComp';
import Image from 'next/image';
import React, { useState } from 'react';

const Profile = () => {
    const [activeComponent, setActiveComponent] = useState('profile');

    const onProfileLink = (link: string) => {
        setActiveComponent(link);
    };

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
                    Your Profile
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
            <div className="w-full pb-52 lg:pb-72">
                <div className="w-full lg:max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-0 lg:px-2 2xl:px-8 transition-all duration-300">
                    <div className="flex items-center lg:mb-16">
                        <div
                            onClick={() => onProfileLink('profile')}
                            className={`py-[15px] md:py-[18px] lg:py-[8px] w-[50%] pl-[30px] md:px-[50px] lg:w-auto lg:px-[37px] font-bold text-xl md:text-[26px] lg:text-2xl ${
                                activeComponent === 'profile'
                                    ? 'bg-blueColor text-white'
                                    : 'bg-white text-darkGrayColor'
                            }`}
                        >
                            Profile
                        </div>
                        <div
                            onClick={() => onProfileLink('intrestingForYou')}
                            className={`py-[15px] md:py-[18px] lg:py-[8px] w-[50%] pl-[16px] md:pl-[30px] md:px-[50px] lg:w-auto lg:px-[37px] font-bold text-xl md:text-[26px] lg:text-2xl ${
                                activeComponent === 'intrestingForYou'
                                    ? 'bg-blueColor text-white'
                                    : 'bg-white text-darkGrayColor'
                            }`}
                        >
                            Interesting for you
                        </div>
                    </div>
                    {activeComponent === 'profile' && <ProfileComp />}
                    {activeComponent === 'intrestingForYou' && (
                        <IntrestingForYou />
                    )}
                </div>
            </div>
        </>
    );
};

Profile.layout = { auth: true };

export default Profile;
