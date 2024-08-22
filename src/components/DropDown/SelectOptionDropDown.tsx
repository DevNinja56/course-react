// import Image from 'next/image'
import React from 'react'

const SelectOptionDropDown = () => {
    return (
        <>
            <div className="absolute top-12 left-0 w-full py-4 custom-shadow rounded-[10px] flex-col bg-white hidden group-hover:flex">
                <div className="flex items-center gap-x-1 hover:bg-profileBgColor p-3 text-grayColor hover:text-blueColor cursor-pointer">
                    <img height={20} width={20} alt='transfer-icon' src="/images/Scholarships/Transfer Vertical.svg" // priority
                    />
                    <p className="z-10">A-Z</p>
                </div>
                <div className="flex items-center gap-x-1 hover:bg-profileBgColor p-3 text-grayColor hover:text-blueColor cursor-pointer">
                    <img height={20} width={20} alt='transfer-icon' src="/images/Scholarships/Transfer Vertical.svg" // priority
                    />
                    <p className="z-10">Z-A</p>
                </div>
                <div className="flex items-center gap-x-1 hover:bg-profileBgColor p-3 text-grayColor hover:text-blueColor cursor-pointer group">
                    <img height={20} width={20} alt='sort-icon' src="/images/Scholarships/Sort From Bottom To Top.svg" // priority
                    />
                    <p className="z-10">Duration</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 20V4M12 4L18 10M12 4L6 10" className="stroke-mainTextColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="flex items-center gap-x-1 hover:bg-profileBgColor p-3 text-grayColor hover:text-blueColor cursor-pointer group">
                    <img height={20} width={20} alt='sort-icon' src="/images/Scholarships/Sort From Top To Bottom.svg" // priority
                    />
                    <p className="z-10">Duration</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4V20M12 20L18 14M12 20L6 14" className="stroke-mainTextColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>    
                </div>
            </div>
        </>
    )
}

export default SelectOptionDropDown