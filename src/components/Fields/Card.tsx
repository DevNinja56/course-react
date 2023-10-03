import Image from 'next/image'
import React from 'react'

interface CardProps {
    title: string,
    img: string,
}

const Card = ({title, img} : CardProps) => {
    return (
        <div className="custom-shadow w-[100%] rounded-[10px] bg-white">
            <div className="flex flex-col">
                <Image height={165} width={276} alt='main-img' className="rounded-[10px] rounded-b-none" src={`${img}`} priority/>
                <div className="w-full bg-blueColor text-white py-3 font-bold text-lg flex items-center justify-center">{title}</div>
            </div>
            <div className="py-3">
                <div className="py-3 px-[15px] flex items-center justify-between hover:justify-start cursor-pointer gap-x-1 transition-all duration-300 hover:bg-profileBgColor text-mainTextColor hover:text-blueColor">
                    <h1>Undergraduate</h1>
                    <Image height={20} width={20} alt='arrow-right' src="/images/Fields/chevron-right.svg" priority/>
                </div>
                <div className="py-3 px-[15px] flex items-center justify-between hover:justify-start cursor-pointer gap-x-1 transition-all duration-300 hover:bg-profileBgColor text-mainTextColor hover:text-blueColor">
                    <h1>Postgraduate</h1>
                    <Image height={20} width={20} alt='arrow-right' src="/images/Fields/chevron-right.svg" priority/>
                </div>
                <div className="py-3 px-[15px] flex items-center justify-between hover:justify-start cursor-pointer gap-x-1 transition-all duration-300 hover:bg-profileBgColor text-mainTextColor hover:text-blueColor">
                    <h1>Postgraduate By Research</h1>
                    <Image height={20} width={20} alt='arrow-right' src="/images/Fields/chevron-right.svg" priority/>
                </div>
            </div>
        </div>
    )
}

export default Card