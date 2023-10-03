import Image from 'next/image'
import React from 'react'

interface cardProps {
    cardTitle : string,
    title: string,
    hearts: string,
    cardTitleTwo: string,
    cardTitleThree: string,
    image: string,
}

const Card = ({cardTitle, cardTitleTwo, cardTitleThree, title, hearts, image} : cardProps) => {
    return (
        <div className="custom-shadow w-[100%]">
            <Image height={203.29} width={366} alt='cardimg' className="rounded-[10px] rounded-b-none mb-4 w-full" src={`${image}`} priority/>
            <div className="px-[25px] flex flex-col gap-y-6">
                <div className="flex items-center gap-x-3">
                    <button className="py-1 px-[10px] rounded-[5px] bg-profileBgColor text-xs text-mainTextColor">{cardTitle}</button>
                    <button className="py-1 px-[10px] rounded-[5px] bg-profileBgColor text-xs text-mainTextColor">{cardTitleTwo}</button>
                    <button className="py-1 px-[10px] rounded-[5px] bg-profileBgColor text-xs text-mainTextColor">{cardTitleThree}</button>
                </div>
                <h1 className="font-bold text-lg text-mainTextColor">{title}</h1>
                <div className="w-full flex items-center justify-between">
                    <div className="py-[7px] gap-[6px] group flex items-center">
                        <h1 className="text-sm text-blueColor group-hover:text-mainTextColor transition-all duration-500 group-hover:opacity-[0.9]">Read More</h1>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.3335 10H16.6668M16.6668 10L11.6668 5M16.6668 10L11.6668 15" className="group-hover:translate-x-1 transition-all duration-500" stroke="#2C79FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>  
                    </div>
                    <div className="py-[7px] gap-x-[6px] flex items-center mb-3">
                        <Image height={20} width={20} alt='heart' src="/images/BlogsDetail/Heart.svg" priority/>
                        <h1 className="font-medium text-base text-darkGrayColor">{hearts}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card