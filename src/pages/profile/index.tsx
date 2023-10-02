import IntrestingForYou from '@/components/Profile/IntrestingForYou'
import ProfileComp from '@/components/Profile/ProfileComp'
import Image from 'next/image'
import React, { useState } from 'react'

const Profile = () => {
    const [activeComponent, setActiveComponent] = useState('profile');

    const onProfileLink = (link : string) => {
        setActiveComponent(link);
    };

  return (
    <>
    <div className="w-full flex items-center justify-between h-[156px] mt-[100px] bg-profileBgColor">
        <Image height={193} width={193} alt='profile-round-img' className="mt-[-150px] ml-[-10px]" src="/images/profileImages/Ellipse 418.svg"/>
        <h1 className="text-mainTextColor text-[40px] font-extrabold">Your Profile</h1>
        <Image height={119} width={100} alt='profile-round-img' className="mt-8" src="/images/profileImages/Frame 691.svg"/>
    </div>
        <div className="w-full pb-72">
        <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-2 2xl:px-8 transition-all duration-300">
            <div className="flex items-center mb-16">
            <button onClick={() => onProfileLink('profile')} className={`py-[8px] px-[37px] font-bold text-[24px] ${activeComponent === 'profile' ? 'bg-blueColor text-white' : 'bg-white text-darkGrayColor'}`}>Profile</button>
            <button onClick={() => onProfileLink('intrestingForYou')} className={`py-[8px] px-[37px] font-bold text-[24px] ${activeComponent === 'intrestingForYou' ? 'bg-blueColor text-white' : 'bg-white text-darkGrayColor'}`}>Interesting for you</button>
            </div>
            {activeComponent === 'profile' && <ProfileComp />}
            {activeComponent === 'intrestingForYou' && <IntrestingForYou />}
        </div>
    </div>
    </>
    )
}

export default Profile