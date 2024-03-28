// import Image from 'next/image';
import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import MyApplies from './MyApplies';
import { useRouter } from 'next/router';
import AcademicInformation from './AcademicInformation';

export const favoritesTabs: { [key: string]: string } = {
    personalInfo: 'Personal Information',
    myApplies: 'My Applications',
    academicInformation: 'Academic Information'
};

const ProfileComp = () => {
    const { query, isReady } = useRouter();
    const activeTab = query['tab2'] as string;
    const [active, setActive] = useState(
        isReady && activeTab
            ? favoritesTabs[activeTab]
            : favoritesTabs.personalInfo
    );
    const tabs = [
        { title: favoritesTabs.personalInfo, Component: PersonalInfo },
        { title: favoritesTabs.myApplies, Component: MyApplies },
        {
            title: favoritesTabs.academicInformation,
            Component: AcademicInformation
        }
    ];

    return (
        <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="flex flex-col w-full lg:w-[26.5%]">
                {tabs.map(({ title }, i) => (
                    <div
                        key={'favourites--tabs' + i}
                        className="flex flex-col gap-y-6"
                        onClick={() => setActive(title)}
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
                    </div>
                ))}
            </div>
            <div className="lg:flex flex-col gap-y-3 w-[67%] hidden">
                {tabs.map(({ Component, title }, i) => (
                    <React.Fragment key={'favorites-tabs-list-' + i}>
                        {active === title && <Component />}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default ProfileComp;
