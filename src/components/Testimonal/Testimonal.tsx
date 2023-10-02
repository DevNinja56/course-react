import Image from 'next/image'
import React from 'react'

const Testimonal = () => {
  return (
    <div className="bg-testimonalBgColor pt-8 pb-60">
    <div className="relative pb-0">
    <Image height={96} width={96} alt='testimonal-round' className="absolute bottom-0 left-8" src="/images/Blogs/Ellipse 426.svg" priority/>
    <div className="flex justify-between items-start max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-2 2xl:px-8 transition-all duration-300 py-20 gap-x-16">
        <div className="flex flex-col gap-y-2 z-10 relative">
            <p className="font-bold text-[23px] text-blueColor">Testimonial</p>
            <h1 style={{lineHeight: "57.6px"}} className="text-[40px] font-extrabold text-mainTextColor w-[340px] mb-2">See What OurClient Say’s</h1>
            <p className="text-darkGrayColor text-sm w-[559px]">Curabitur tristique, sem id sagittis varius, lacus ligula mollis dui, ac condimentum felis metus ut nulla. Aenean ut ultricies turpis, sed sollicitudin eros. Aliquam quis dui ut diam lobortis dignissim ut aliquet ex</p>
            <Image height={290} width={290} alt='message' className="absolute top-7 right-6" src="/images/Messages.svg" priority/>
        </div>
        <div className="flex flex-col items-center gap-y-7">
        <div className="bg-white rounded-[10px] py-5 px-5 pr-6 flex flex-col gap-y-4 custom-shadow z-10">
            <div className="flex gap-x-5">
                <Image height={100} width={100} alt='testimonal-user' src="/images/Blogs/testimoanlals.svg" priority/>
                <div className="w-full flex items-center justify-between">
                    <div className="flex flex-col gap-y-3">
                        <h1 className="font-bold text-xl text-mainTextColor">David Karry</h1>
                        <p className="font-medium text-blueColor">Web Developer</p>
                    </div>
                    <Image height={38} width={50} alt='comment' src="/images/Blogs/“.svg" priority/>
                </div>
            </div>
            <p className="text-grayColor text-sm mb-1">Curabitur tristique, sem id sagittis varius, lacus ligula mollis dui, ac condimentum felis metus ut nulla. Aenean ut ultricies turpis, sed sollicitudin eros. Aliquam quis dui ut diam lobortis dignissim ut aliquet ex</p>
        </div>
        <div className="flex items-center gap-x-[10px]">
            <div className="px-4 rotate-[-0deg] rounded-[10px] border-4 border-grayBorderColor"></div>
            <div className="px-6 rotate-0 rounded-[10px] border-4 border-blueColor"></div>
            <div className="px-4 rotate-[-0deg] rounded-[10px] border-4 border-grayBorderColor"></div>
        </div>
    </div>
    </div>
    <Image height={228} width={228} alt='testimonal-round-2' className="absolute right-0 top-0" src="/images/Blogs/Ellipse 427.svg"/>
</div>
</div>
  )
}

export default Testimonal