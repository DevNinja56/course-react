import Image from 'next/image'
import React from 'react'

interface CountryProps {
    img: string,
    countryName: string,
}

const Card = ({img, countryName} : CountryProps) => {
  return (
    <div className="border-2 border-countryBorderColor py-3 px-5 flex items-center gap-x-[35px] rounded-[5px] cursor-pointer hover:border-blueColor">
    <Image height={54} width={54} alt='country-img' src={`${img}`} priority/>
    <p className="font-medium text-[23px] text-mainTextColor">{countryName}</p>
    </div>
  )
}

export default Card