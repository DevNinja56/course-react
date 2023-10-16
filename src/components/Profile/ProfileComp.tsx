import { useUserAuth } from '@/hooks/auth';
import Image from 'next/image';
import React, { useState } from 'react';

const ProfileComp = () => {
    const { user } = useUserAuth();
    const [showProfileInfo, setShowProfileInfo] = useState<boolean>(true);
    const [showStudyIntrest, setShowStudyIntrest] = useState<boolean>(false);
    const [showBudgetPreference, setShowBudgetPreference] =
        useState<boolean>(false);
    const [showAcademicBackground, setShowAcademicBackground] =
        useState<boolean>(false);
    const [showEnglishLevel, setshowEnglishLevel] = useState<boolean>(false);

    const onShowProfileInfo = () => {
        setShowProfileInfo(!showProfileInfo);
    };

    const onShowStudyIntrest = () => {
        setShowStudyIntrest(!showStudyIntrest);
    };

    const onShowBudgetPreference = () => {
        setShowBudgetPreference(!showBudgetPreference);
    };

    const onShowAcademicBackground = () => {
        setShowAcademicBackground(!showAcademicBackground);
    };

    const onShowEnglishLevel = () => {
        setshowEnglishLevel(!showEnglishLevel);
    };

    return (
        <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="flex flex-col w-full lg:w-[26.5%]">
                <div className="flex flex-col gap-y-0 md:gap-y-6">
                    <div className="py-[14px] md:py-[17px] lg:py-[20px] px-[30px] md:px-[50px] lg:pl-0 lg:pr-5 lg:bg-profileBgColor text-blueColor lg:border-t-white lg:border-b-white lg:border-l-white lg:border-r-4 lg:border-blueColor flex justify-between items-center lg:justify-end border md:border-personalInfoBorderColor">
                        <p className="text-base md:text-xl font-semibold">
                            Personal info
                        </p>
                        <Image
                            onClick={onShowProfileInfo}
                            height={20}
                            width={20}
                            alt="img-aroow-down"
                            src="/images/chevron-down.svg"
                            className={`lg:hidden ${
                                showProfileInfo ? 'rotate-[-180deg]' : ''
                            }`}
                            priority
                        />
                    </div>
                    {showProfileInfo && (
                        <div
                            className={`flex flex-col gap-y-3 w-full lg:w-[67%] mb-6 transition-all duration-300 lg:hidden`}
                        >
                            <p className="py-[14px] text-[32px] font-semibold hidden">
                                Personal Info
                            </p>
                            <div className="rounded-[10px] px-[30px] md:px-[50px] pt-8 md:pt-11 pb-0 md:pb-4 flex flex-col gap-y-6">
                                <div className="border-b border-personalInfoBorderColor pb-5 flex flex-col gap-y-2 text-mainTextColor">
                                    <p>Name</p>
                                    <h1 className="text-xl font-semibold">
                                        Daniyal Samim
                                    </h1>
                                </div>
                                <div className="border-b border-personalInfoBorderColor pb-5 flex flex-col gap-y-2 text-mainTextColor">
                                    <p>Email</p>
                                    <h1 className="text-xl font-semibold">
                                        daniyalsamim@gmail.com
                                    </h1>
                                </div>
                                <div className="border-b border-personalInfoBorderColor pb-5 flex flex-col gap-y-2 text-mainTextColor">
                                    <p>Phone</p>
                                    <h1 className="text-xl font-semibold">
                                        +92 321 5251534
                                    </h1>
                                </div>
                                <div className="pb-5 flex flex-col gap-y-2 text-mainTextColor">
                                    <p>Address</p>
                                    <h1 className="text-xl font-semibold">
                                        Abingdon, Maryland(MD), 21009
                                    </h1>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-y-6">
                    <div className="py-[14px] md:py-[17px] lg:py-[20px] px-[30px] md:px-[50px] lg:pl-0 lg:pr-5 lg:text-mainTextColor text-blueColor lg:border-r-4 lg:border-white flex justify-between items-center lg:justify-end w-full border md:border-personalInfoBorderColor">
                        <p className="text-base md:text-xl font-semibold">
                            Study Interests
                        </p>
                        <Image
                            onClick={onShowStudyIntrest}
                            height={20}
                            width={20}
                            alt="img-aroow-down"
                            src="/images/chevron-down.svg"
                            className={`lg:hidden ${
                                showStudyIntrest ? 'rotate-[-180deg]' : ''
                            }`}
                            priority
                        />
                    </div>
                    {showStudyIntrest && ''}
                </div>
                <div className="flex flex-col gap-y-6">
                    <div className="py-[14px] md:py-[17px] lg:py-[20px] px-[30px] md:px-[50px] lg:pl-0 lg:pr-5 lg:text-mainTextColor text-blueColor lg:border-r-4 lg:border-white flex justify-between items-center lg:justify-end w-full border md:border-personalInfoBorderColor">
                        <p className="text-base md:text-xl font-semibold">
                            Budget preference
                        </p>
                        <Image
                            onClick={onShowBudgetPreference}
                            height={20}
                            width={20}
                            alt="img-aroow-down"
                            src="/images/chevron-down.svg"
                            className={`lg:hidden ${
                                showBudgetPreference ? 'rotate-[-180deg]' : ''
                            }`}
                            priority
                        />
                    </div>
                    {showBudgetPreference && ''}
                </div>
                <div className="flex flex-col gap-y-6">
                    <div className="py-[14px] md:py-[17px] lg:py-[20px] px-[30px] md:px-[50px] lg:pl-0 lg:pr-5 lg:text-mainTextColor text-blueColor lg:border-r-4 lg:border-white flex justify-between items-center lg:justify-end w-full border md:border-personalInfoBorderColor">
                        <p className="text-base md:text-xl font-semibold">
                            Academic background
                        </p>
                        <Image
                            onClick={onShowAcademicBackground}
                            height={20}
                            width={20}
                            alt="img-arrow-down"
                            src="/images/chevron-down.svg"
                            className={`lg:hidden ${
                                showAcademicBackground ? 'rotate-[-180deg]' : ''
                            }`}
                            priority
                        />
                    </div>
                    {showAcademicBackground && ''}
                </div>
                <div className="flex flex-col gap-y-6">
                    <div className="py-[14px] md:py-[17px] lg:py-[20px] px-[30px] md:px-[50px] lg:pl-0 lg:pr-5 lg:text-mainTextColor text-blueColor lg:border-r-4 lg:border-white flex justify-between items-center lg:justify-end w-full border md:border-personalInfoBorderColor">
                        <p className="text-base md:text-xl font-semibold">
                            English level
                        </p>
                        <Image
                            onClick={onShowEnglishLevel}
                            height={20}
                            width={20}
                            alt="img-aroow-down"
                            src="/images/chevron-down.svg"
                            className={`lg:hidden ${
                                showEnglishLevel ? 'rotate-[-180deg]' : ''
                            }`}
                            priority
                        />
                    </div>
                    {showEnglishLevel && ''}
                </div>
            </div>
            <div className="hidden lg:flex flex-col gap-y-3 w-full lg:w-[67%]">
                <p className="py-[14px] text-[32px] font-semibold">
                    Personal Info
                </p>
                <div className="rounded-[10px] border border-borderColor px-11 pt-11 pb-4 flex flex-col gap-y-6">
                    <div className="border-b border-personalInfoBorderColor pb-5 flex flex-col gap-y-2 text-mainTextColor">
                        <p>Name</p>
                        <h1 className="text-xl font-semibold">{user.name}</h1>
                    </div>
                    <div className="border-b border-personalInfoBorderColor pb-5 flex flex-col gap-y-2 text-mainTextColor">
                        <p>Email</p>
                        <h1 className="text-xl font-semibold">{user.email}</h1>
                    </div>
                    <div className="border-b border-personalInfoBorderColor pb-5 flex flex-col gap-y-2 text-mainTextColor">
                        <p>Phone</p>
                        <h1 className="text-xl font-semibold">
                            {user.phone_number}
                        </h1>
                    </div>
                    <div className="pb-5 flex flex-col gap-y-2 text-mainTextColor">
                        <p>Address</p>
                        <h1 className="text-xl font-semibold">
                            Abingdon, Maryland(MD), 21009
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileComp;
