import { ROUTES } from '@/config/constant';
import { useUserAuth } from '@/hooks/auth';
import Link from 'next/link';
import React from 'react';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUnlock, AiOutlineHeart } from 'react-icons/ai';
import { SiSemanticscholar } from 'react-icons/si';
import { IoMdLogOut } from 'react-icons/io';
import { useUi } from '@/hooks/user-interface';
import { modalType } from '@/store/slices/ui.slice';

interface DropDownProps {
    showDropDown: boolean;
    setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
    dropDownRef?: React.RefObject<HTMLDivElement>;
}

const ProfileDropDown: React.FC<DropDownProps> = ({
    showDropDown,
    setShowDropDown,
    dropDownRef
}) => {
    const { logoutUser } = useUserAuth();
    const { updateModal } = useUi();

    const handleClickOutsideDropDown = (event: MouseEvent) => {
        if (
            showDropDown &&
            dropDownRef?.current &&
            !dropDownRef.current.contains(event.target as Node)
        ) {
            setShowDropDown(false);
        }
    };

    window.addEventListener('click', handleClickOutsideDropDown);

    const allDropDowns = [
        { name: 'Profile', Icon: BiUser, to: ROUTES.PROFILE },
        { name: 'My Favourites', Icon: AiOutlineHeart, to: ROUTES.FAVORITES },
        {
            name: 'My Applies',
            Icon: SiSemanticscholar,
            to: ROUTES.APPLIES
        },
        {
            name: 'Change Password',
            Icon: AiOutlineUnlock,
            callFun: () =>
                updateModal({ type: modalType.change_password, state: {} })
        }
    ];
    return (
        <>
            {showDropDown ? (
                <div className="w-[220px] py-2 custom-shadow absolute top-[55px] right-[-8px] bg-white cursor-pointer showDropDown">
                    {allDropDowns.map(({ name, Icon, callFun, to = '' }) =>
                        callFun ? (
                            <button
                                key={'dropDown--' + name}
                                onClick={callFun}
                                className="w-full block py-[9px] pl-[15px] hover:bg-profileBgColor text-lightGrayColor hover:text-darkTextBlueColor"
                            >
                                <p className="flex items-center gap-x-2">
                                    <Icon className="text-xl mr-1" /> {name}
                                </p>
                            </button>
                        ) : (
                            <Link
                                key={'dropDown--' + name}
                                href={to}
                                className="w-full block py-[9px] pl-[15px] hover:bg-profileBgColor text-lightGrayColor hover:text-darkTextBlueColor"
                            >
                                <p className="flex items-center gap-x-2">
                                    <Icon className="text-xl mr-1" /> {name}
                                </p>
                            </Link>
                        )
                    )}

                    {/* <hr className="w-full mb-2 border border-borderColor" /> */}
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
