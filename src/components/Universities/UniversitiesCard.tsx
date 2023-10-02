import Image from 'next/image'
import React from 'react'

interface UniProps {
    img: string,
    title: string,
}

const UniversitiesCards = ({img, title} : UniProps) => {
  return (
    <div className="custom-shadow w-[31%] rounded-[10px] bg-white relative overflow-hidden group">
                    <Image height={245.62} width={367} alt='uni-img' className="h-full w-full" src={`${img}`} priority/>
                    <a href="../FilterPage">
                    <div className="trasition-all duration-500 absolute bg-blueColor left-0 h-[100%] w-[100%] bottom-[-245.62px] 2xl:bottom-[-491.24px] group-hover:bottom-0 flex flex-col gap-y-5 items-center justify-center">
                        <Image height={74} width={148} alt='uni-img' src="/images/Universities/Institution+Group+logo_russell+group.svg" priority/>
                        <p className="text-white text-lg font-light text-center">{title}</p>
                    </div>
                    </a>
                    </div>
  )
}

export default UniversitiesCards