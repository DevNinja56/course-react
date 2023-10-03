import Image from 'next/image'
import React from 'react'

const IntrestingForYou = () => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col w-[26.5%]">
                <div className="py-[20px] pr-5 bg-profileBgColor text-blueColor border-r-4 border-blueColor flex justify-end">
                    <p className="text-xl font-semibold">Study programmes</p>
                </div>
                <div className="py-[20px] pr-5 text-mainTextColor border-r-4 border-white flex justify-end w-full">
                    <p className="text-xl font-semibold">Scholarships</p>
                </div>
                <div className="py-[20px] pr-5 text-mainTextColor border-r-4 border-white flex justify-end w-full">
                    <p className="text-xl font-semibold">Articles</p>
                </div>
            </div>
            <div className="flex flex-col gap-y-3 w-[67%]">
                <p className="py-[14px] text-[32px] font-semibold">Study Programmes</p>
                <div className="pb-4 grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Image height={374.28} width={245} alt='study-program-img' className="rounded-[10px] w-full" src="/images/profileImages/Coursecard 1 (1).svg"/>
                    <Image height={374.28} width={245} alt='study-program-img' className="rounded-[10px] w-full" src="/images/profileImages/Coursecard 1 (1).svg"/>
                    <Image height={374.28} width={245} alt='study-program-img' className="rounded-[10px] w-full" src="/images/profileImages/Coursecard 1 (1).svg"/>
                    <Image height={374.28} width={245} alt='study-program-img' className="rounded-[10px] w-full" src="/images/profileImages/Coursecard 1 (1).svg"/>
                    <Image height={374.28} width={245} alt='study-program-img' className="rounded-[10px] w-full" src="/images/profileImages/Coursecard 1 (1).svg"/>
                    <Image height={374.28} width={245} alt='study-program-img' className="rounded-[10px] w-full" src="/images/profileImages/Coursecard 1 (1).svg"/>
                </div>
            </div>
        </div>  )
}

export default IntrestingForYou