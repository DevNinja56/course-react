import { useUserAuth } from '@/hooks/auth';
import Image from 'next/image';
import React from 'react';

interface DropDownProps {
    showDropDown: boolean;
}

const ProfileDropDown: React.FC<DropDownProps> = ({ showDropDown }) => {
    const { logoutUser } = useUserAuth();
    return (
        <>
            {showDropDown ? (
                <div className="w-[220px] py-2 custom-shadow absolute top-[55px] right-[-8px] bg-white cursor-pointer showDropDown">
                    <div className="w-full py-[9px] pl-[15px] hover:bg-profileBgColor text-lightGrayColor hover:text-darkTextBlueColor">
                        <p className="flex items-center gap-x-2">
                            <Image
                                height={18}
                                width={18}
                                alt="user-icon"
                                src="/images/user-01 (1).svg"
                                priority
                            />{' '}
                            Profile
                        </p>
                    </div>
                    <div className="w-full py-[9px] pl-[15px] hover:bg-profileBgColor text-lightGrayColor hover:text-darkTextBlueColor">
                        <p className="flex items-center gap-x-2">
                            <Image
                                height={18}
                                width={18}
                                alt="course-icon"
                                src="/images/Courses (1).svg"
                                priority
                            />{' '}
                            My Courses
                        </p>
                    </div>
                    <div className="w-full py-[9px] pl-[15px] hover:bg-profileBgColor text-lightGrayColor hover:text-darkTextBlueColor">
                        <p className="flex items-center gap-x-2">
                            <Image
                                height={18}
                                width={18}
                                alt="cart-icon"
                                src="/images/shopping-cart-01.svg"
                                priority
                            />{' '}
                            My Subscriptions
                        </p>
                    </div>
                    <div className="w-full py-[9px] pl-[15px] hover:bg-profileBgColor text-lightGrayColor hover:text-darkTextBlueColor">
                        <p className="flex items-center gap-x-2">
                            <Image
                                height={18}
                                width={18}
                                alt="setting-icon"
                                src="/images/lock-unlocked-01.svg"
                                priority
                            />{' '}
                            Setting
                        </p>
                    </div>
                    <div className="w-full py-[9px] pl-[15px] hover:bg-profileBgColor text-lightGrayColor hover:text-darkTextBlueColor mb-2">
                        <p className="flex items-center gap-x-2">
                            <Image
                                height={18}
                                width={18}
                                alt="lock-icon"
                                src="/images/settings-01.svg"
                                priority
                            />{' '}
                            Change Password
                        </p>
                    </div>
                    <hr className="w-full mb-2 border border-borderColor" />
                    <div className="w-full py-[9px] pl-[15px] hover:bg-profileBgColor text-lightGrayColor hover:text-darkTextBlueColor">
                        <p
                            className="flex items-center gap-x-2"
                            onClick={logoutUser}
                        >
                            <Image
                                height={18}
                                width={18}
                                alt="logout-icon"
                                src="/images/log-out-04.svg"
                                priority
                            />{' '}
                            Logout
                        </p>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
};
export default ProfileDropDown;
