// import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import ProfileDropDown from '../DropDown/ProfileDropDown';
import Link from 'next/link';
import Sidebar from '../Sidebar/Sidebar';
import { useUserAuth } from '@/hooks/auth';
import { ROUTES } from '@/config/constant';
import GlobalSearch from './GlobalSearch';
import Logo from '../Logo';
import { CiUser } from 'react-icons/ci';
import UnVerifiedUser from '../Banner/UnVerifiedUser';
import UnActiveUser from '../Banner/UnActiveUser';
import CurrencyConverter from '../MoneyConverter';
import { SiSemanticscholar } from 'react-icons/si';
import { modalType } from '@/store/slices/ui.slice';
import { useUi } from '@/hooks/user-interface';

const Header = ({ onlyLogo }: { onlyLogo?: boolean }) => {
    const router = useRouter();
    const [showDropDown, setShowDropDown] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);

    const { isAuthenticated, user } = useUserAuth();
    const { updateModal } = useUi();

    const onShowSideBar = () => {
        setShowSideBar(!showSideBar);
    };

    const onShowDropDown = () => {
        setShowDropDown(!showDropDown);
    };

    const dropDownRef = useRef<HTMLDivElement>(null);

    return (
        <header
            className={`w-[calc(100vw-18px)] fixed top-0 left-0 z-40 print:static`}
        >
            {user.status == 'block' && <UnActiveUser />}
            {!onlyLogo ? (
                <div className="bg-white">
                    <UnVerifiedUser />
                    <div className="w-full xl:container mx-auto py-6 flex justify-between items-center px-4 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300">
                        <Logo />
                        <div className="flex items-center gap-2 md:gap-x-6 print:hidden">
                            <nav className="hidden lg:flex items-center gap-x-6 lg:gap-x-2 xl:gap-x-6">
                                <Link href={ROUTES.FILTER_COURSE}>
                                    <div className="flex items-center px-[10px] gap-x-[10px]">
                                        <svg
                                            width="32"
                                            height="33"
                                            viewBox="0 0 32 33"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.0269 20.4347L13.1509 13.6494L19.9362 11.5254L17.8122 18.3107L11.0269 20.4347Z"
                                                className={`font-semibold ${
                                                    router.pathname ===
                                                    ROUTES.FILTER_COURSE
                                                        ? 'stroke-blueColor'
                                                        : 'stroke-textBlackColor'
                                                }`}
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M15.4814 28.7953C22.5588 28.7953 28.2961 23.058 28.2961 15.9807C28.2961 8.90334 22.5588 3.16602 15.4814 3.16602C8.40407 3.16602 2.66675 8.90334 2.66675 15.9807C2.66675 23.058 8.40407 28.7953 15.4814 28.7953Z"
                                                className={`font-semibold ${
                                                    router.pathname ===
                                                    ROUTES.FILTER_COURSE
                                                        ? 'stroke-blueColor'
                                                        : 'stroke-textBlackColor'
                                                }`}
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <p
                                            className={`font-semibold ${
                                                router.pathname ===
                                                ROUTES.FILTER_COURSE
                                                    ? 'text-blueColor'
                                                    : 'text-textBlackColor'
                                            }`}
                                        >
                                            Discover
                                        </p>
                                    </div>
                                </Link>
                                <Link href={ROUTES.FILTER_SCHOLARSHIP}>
                                    <div className="flex items-center px-[10px] gap-x-[10px]">
                                        <SiSemanticscholar
                                            className={`font-semibold text-3xl ${
                                                router.pathname ===
                                                ROUTES.FILTER_SCHOLARSHIP
                                                    ? 'text-blueColor'
                                                    : 'text-textBlackColor'
                                            }`}
                                        />
                                        <p
                                            className={`font-semibold ${
                                                router.pathname ===
                                                ROUTES.FILTER_SCHOLARSHIP
                                                    ? 'text-blueColor'
                                                    : 'text-textBlackColor'
                                            }`}
                                        >
                                            Scholarship
                                        </p>
                                    </div>
                                </Link>
                                <Link href={ROUTES.COMPARE}>
                                    <div className="flex items-center px-[10px] gap-x-[10px]">
                                        <svg
                                            width="32"
                                            height="33"
                                            viewBox="0 0 32 33"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M23.5103 14.0843C24.2367 15.5732 24.612 17.2088 24.6074 18.8654C24.6074 21.0351 23.964 23.1561 22.7585 24.9601C21.5531 26.7642 19.8398 28.1703 17.8352 29.0006C15.8307 29.8309 13.6249 30.0482 11.4969 29.6249C9.36883 29.2016 7.41411 28.1568 5.87988 26.6225C4.34566 25.0883 3.30084 23.1336 2.87754 21.0056C2.45425 18.8775 2.6715 16.6718 3.50182 14.6672C4.33213 12.6626 5.73823 10.9493 7.54228 9.74388C9.34634 8.53845 11.4673 7.89505 13.6371 7.89505C15.1476 7.89237 16.642 8.20451 18.0252 8.81157C18.1492 8.86123 18.2619 8.93528 18.3567 9.02933C18.4515 9.12338 18.5265 9.23552 18.5771 9.35909C18.6278 9.48265 18.6531 9.61514 18.6516 9.74867C18.6501 9.88221 18.6217 10.0141 18.5683 10.1365C18.5149 10.2589 18.4374 10.3693 18.3405 10.4611C18.2435 10.553 18.1292 10.6245 18.0041 10.6713C17.879 10.7182 17.7458 10.7394 17.6124 10.7338C17.479 10.7282 17.348 10.6958 17.2273 10.6386C16.0957 10.1419 14.8729 9.88685 13.6371 9.88966C11.8618 9.88966 10.1265 10.4161 8.65043 11.4023C7.17438 12.3886 6.02394 13.7904 5.34459 15.4305C4.66524 17.0706 4.48749 18.8753 4.83382 20.6164C5.18015 22.3576 6.035 23.9569 7.29028 25.2121C8.54555 26.4674 10.1449 27.3223 11.886 27.6686C13.6271 28.0149 15.4318 27.8372 17.0719 27.1578C18.712 26.4785 20.1138 25.328 21.1001 23.852C22.0864 22.376 22.6128 20.6406 22.6128 18.8654C22.6157 17.5111 22.3086 16.1742 21.7152 14.9569C21.5995 14.7189 21.5831 14.4446 21.6696 14.1945C21.7561 13.9443 21.9384 13.7388 22.1765 13.6231C22.4145 13.5073 22.6888 13.4909 22.9389 13.5774C23.1891 13.6639 23.3946 13.8463 23.5103 14.0843ZM13.6371 15.8735C13.9016 15.8735 14.1552 15.7684 14.3423 15.5814C14.5293 15.3943 14.6344 15.1407 14.6344 14.8762C14.6344 14.6117 14.5293 14.358 14.3423 14.171C14.1552 13.9839 13.9016 13.8789 13.6371 13.8789C12.6508 13.8789 11.6867 14.1713 10.8667 14.7192C10.0467 15.2672 9.40755 16.0459 9.03013 16.9571C8.65272 17.8683 8.55397 18.8709 8.74637 19.8382C8.93878 20.8055 9.4137 21.694 10.1111 22.3914C10.8084 23.0887 11.697 23.5636 12.6642 23.7561C13.6315 23.9485 14.6342 23.8497 15.5453 23.4723C16.4565 23.0949 17.2353 22.4557 17.7832 21.6357C18.3311 20.8157 18.6236 19.8516 18.6236 18.8654C18.6236 18.6009 18.5185 18.3472 18.3315 18.1602C18.1444 17.9731 17.8908 17.8681 17.6263 17.8681C17.3618 17.8681 17.1081 17.9731 16.9211 18.1602C16.734 18.3472 16.629 18.6009 16.629 18.8654C16.629 19.4571 16.4535 20.0356 16.1247 20.5276C15.796 21.0196 15.3287 21.4031 14.782 21.6295C14.2353 21.856 13.6337 21.9152 13.0534 21.7998C12.473 21.6843 11.9399 21.3994 11.5215 20.981C11.103 20.5625 10.8181 20.0294 10.7026 19.4491C10.5872 18.8687 10.6465 18.2671 10.8729 17.7204C11.0994 17.1737 11.4828 16.7064 11.9748 16.3777C12.4669 16.0489 13.0453 15.8735 13.6371 15.8735ZM29.0444 9.0988L26.224 11.9202C26.1085 12.0361 25.9661 12.1217 25.8094 12.1692C25.6528 12.2167 25.4869 12.2247 25.3264 12.1924L22.3236 11.594L14.3451 19.5724C14.1571 19.7541 13.9051 19.8546 13.6436 19.8524C13.3822 19.8501 13.132 19.7452 12.9471 19.5603C12.7622 19.3754 12.6573 19.1253 12.655 18.8638C12.6528 18.6023 12.7533 18.3504 12.935 18.1623L20.9134 10.1839L20.315 7.18198C20.2834 7.02144 20.2918 6.85559 20.3395 6.69906C20.3871 6.54253 20.4726 6.40013 20.5882 6.28441L23.4036 3.45706C23.5154 3.34564 23.652 3.26233 23.8022 3.21398C23.9524 3.16563 24.112 3.15362 24.2677 3.17893C24.4235 3.20424 24.571 3.26615 24.6982 3.35958C24.8254 3.45301 24.9286 3.57529 24.9993 3.71636L26.2599 6.24053L28.7831 7.50112C28.9241 7.57184 29.0464 7.67504 29.1398 7.80222C29.2333 7.92939 29.2952 8.07693 29.3205 8.23269C29.3458 8.38846 29.3338 8.54801 29.2854 8.69823C29.2371 8.84845 29.1538 8.98505 29.0424 9.0968L29.0444 9.0988ZM26.6508 8.66696L25.0731 7.87511C24.8797 7.7794 24.723 7.62277 24.6273 7.42931L23.8355 5.8466L22.3714 7.31163L22.8412 9.66127L25.1908 10.132L26.6508 8.66696Z"
                                                className={`font-semibold ${
                                                    router.pathname ===
                                                    ROUTES.COMPARE
                                                        ? 'fill-blueColor'
                                                        : 'fill-textBlackColor'
                                                }`}
                                            />
                                        </svg>
                                        <p
                                            className={`font-semibold ${
                                                router.pathname ===
                                                ROUTES.COMPARE
                                                    ? 'text-blueColor'
                                                    : 'text-textBlackColor'
                                            }`}
                                        >
                                            Compare
                                        </p>
                                    </div>
                                </Link>
                                <div
                                    onClick={() =>
                                        updateModal({
                                            type: modalType.start_application,
                                            state: ''
                                        })
                                    }
                                    className="flex items-center px-[10px] gap-x-[10px] cursor-pointer"
                                >
                                    <svg
                                        width="32"
                                        height="33"
                                        viewBox="0 0 32 33"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M25.2836 17.2285H24.666C24.3052 14.796 22.2857 12.8755 19.7569 12.5806C20.829 11.5847 21.4977 10.1839 21.4977 8.63477C21.4977 5.61929 18.9649 3.16602 15.8518 3.16602C12.7388 3.16602 10.2061 5.61929 10.2061 8.63477C10.2061 10.184 10.8747 11.5847 11.9469 12.5806C9.41807 12.8755 7.39859 14.796 7.03774 17.2285H6.42014C4.94648 17.2285 3.81705 18.4948 4.02466 19.9026L5.3747 29.1607C5.4309 29.5461 5.77147 29.8327 6.17335 29.8327H25.5304C25.9323 29.8327 26.2729 29.5461 26.3291 29.1607L27.679 19.9037C27.8872 18.4918 26.7545 17.2285 25.2836 17.2285ZM11.8191 8.63477C11.8191 6.48086 13.6282 4.72852 15.8518 4.72852C18.0755 4.72852 19.8845 6.48086 19.8845 8.63477C19.8845 10.7887 18.0755 12.541 15.8518 12.541C13.6282 12.541 11.8191 10.7887 11.8191 8.63477ZM12.6257 14.1035H19.078C21.0255 14.1035 22.655 15.4477 23.0297 17.2285H8.674C9.04873 15.4477 10.6782 14.1035 12.6257 14.1035ZM26.0819 19.684L24.8297 28.2702H6.87396L5.62173 19.6827C5.55214 19.2116 5.92788 18.791 6.42014 18.791C6.64308 18.791 25.1903 18.791 25.2836 18.791C25.7753 18.791 26.1517 19.2105 26.0819 19.684Z"
                                            className={`font-semibold ${
                                                router.pathname === ROUTES.APPLY
                                                    ? 'fill-blueColor'
                                                    : 'fill-textBlackColor'
                                            }`}
                                        />
                                        <path
                                            d="M15.852 22.4258C14.2182 22.4258 12.8889 23.4226 12.8889 24.648C12.8889 25.8734 14.2182 26.8702 15.852 26.8702C17.4857 26.8702 18.8148 25.8734 18.8148 24.648C18.8148 23.4226 17.4857 22.4258 15.852 22.4258ZM15.852 25.3888C15.3074 25.3888 14.8642 25.0565 14.8642 24.648C14.8642 24.2395 15.3074 23.9072 15.852 23.9072C16.3966 23.9072 16.8396 24.2395 16.8396 24.648C16.8396 25.0565 16.3966 25.3888 15.852 25.3888Z"
                                            className={`font-semibold ${
                                                router.pathname === ROUTES.APPLY
                                                    ? 'fill-blueColor'
                                                    : 'fill-textBlackColor'
                                            }`}
                                        />
                                    </svg>
                                    <p
                                        className={`font-semibold ${
                                            router.pathname === ROUTES.APPLY
                                                ? 'text-blueColor'
                                                : 'text-textBlackColor'
                                        }`}
                                    >
                                        Apply
                                    </p>
                                </div>
                            </nav>
                            {showSideBar && (
                                <Sidebar setShowSideBar={setShowSideBar} />
                            )}
                            <div className="flex items-center gap-x-2 md:gap-x-6">
                                {isAuthenticated ? (
                                    <div
                                        ref={dropDownRef}
                                        className="flex items-center gap-x-3 relative select-none cursor-pointer "
                                        onClick={onShowDropDown}
                                    >
                                        {user.avatar ? (
                                            <img
                                                src={user.avatar}
                                                className="border rounded-full p-0.5 -mr-1"
                                                alt="Profile Photo"
                                                width={40}
                                                height={40}
                                            />
                                        ) : (
                                            <span className="border rounded-full p-0.5 -mr-1">
                                                <CiUser className="text-md md:text-3xl" />
                                            </span>
                                        )}
                                        <p className="text-textBlackColor capitalize font-semibold hidden lg:flex gap-x-1 ">
                                            {user.name?.toLocaleLowerCase()}
                                            <img
                                                height={16}
                                                width={16}
                                                alt="down-arrow"
                                                className="cursor-pointer"
                                                src="/images/chevron-down.svg"
                                                // priority
                                            />
                                        </p>
                                        <ProfileDropDown
                                            showDropDown={showDropDown}
                                            setShowDropDown={setShowDropDown}
                                            dropDownRef={dropDownRef}
                                        />
                                    </div>
                                ) : (
                                    <Link href={ROUTES.SIGN_IN}>
                                        <button className="py-2 lg:py-[13px] px-5 lg:px-[34px] gap-x-[6px] md:flex justify-center items-center rounded-[5px] bg-blueColor hover:bg-blue-600 text-white text-base font-medium hidden">
                                            <img
                                                width={20}
                                                height={20}
                                                alt="user-icon"
                                                src="/images/Profile.svg"
                                                // priority
                                            />
                                            Login
                                        </button>
                                        <img
                                            height={36}
                                            width={36}
                                            alt=""
                                            src="/images/User Circle.svg"
                                            className="block md:hidden h-5 w-5 md:h-9 md:w-9"
                                            // priority
                                        />
                                    </Link>
                                )}
                                <img
                                    width={46}
                                    height={46}
                                    alt="menu-icon"
                                    onClick={onShowSideBar}
                                    className="block lg:hidden h-5 w-5 md:h-11 md:w-11"
                                    src="/images/Menu.svg"
                                    // priority
                                />
                                <div className="hidden lg:block">
                                    <GlobalSearch />
                                </div>
                            </div>
                            <div>
                                <CurrencyConverter />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto py-6 flex justify-between items-center px-4 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300">
                    <Logo />
                </div>
            )}
        </header>
    );
};

export default Header;
