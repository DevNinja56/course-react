import { ROUTES } from '@/config/constant';
import { useUserAuth } from '@/hooks/auth';
import Link from 'next/link';
import React from 'react';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUnlock } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { IoMdBook, IoMdLogOut } from 'react-icons/io';
import { LiaShoppingCartSolid } from 'react-icons/lia';

interface DropDownProps {
    showDropDown: boolean;
}

const allDropDowns = [
    { name: 'Profile', Icon: BiUser, to: ROUTES.PROFILE },
    { name: 'My Courses', Icon: IoMdBook, to: ROUTES.PROFILE },
    {
        name: 'My Subscriptions',
        Icon: LiaShoppingCartSolid,
        to: ROUTES.PROFILE
    },
    { name: 'Setting', Icon: FiSettings, to: ROUTES.PROFILE },
    { name: 'Change Password', Icon: AiOutlineUnlock, to: ROUTES.PROFILE }
];

const ProfileDropDown: React.FC<DropDownProps> = ({ showDropDown }) => {
    const { logoutUser } = useUserAuth();
    return (
        <>
            {showDropDown ? (
                <div className="w-[220px] py-2 custom-shadow absolute top-[55px] right-[-8px] bg-white cursor-pointer showDropDown">
                    {allDropDowns.map(({ name, Icon, to }) => (
                        <Link
                            key={'dropDown--' + name}
                            href={to}
                            className="w-full block py-[9px] pl-[15px] hover:bg-profileBgColor text-lightGrayColor hover:text-darkTextBlueColor"
                        >
                            <p className="flex items-center gap-x-2">
                                <Icon className="text-xl mr-1" /> {name}
                            </p>
                        </Link>
                    ))}

                    <hr className="w-full mb-2 border border-borderColor" />
                    <div className="w-full py-[9px] pl-[15px] hover:bg-profileBgColor text-lightGrayColor hover:text-darkTextBlueColor">
                        <p
                            className="flex items-center gap-x-2"
                            onClick={logoutUser}
                        >
                            <IoMdLogOut className="text-xl mr-1 text-red-600" />{' '}
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
