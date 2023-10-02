import CounselingWork from '@/components/CounselingWork/CounselingWork'
import Card from '@/components/Fields/Card'
import Testimonal from '@/components/Testimonal/Testimonal'
import Image from 'next/image'
import React from 'react'

const Fields = () => {
  return (
    <>
    <div className="w-full flex items-center justify-between h-[214px] mt-[100px] bg-profileBgColor mb-16">
    <Image height={193} width={193} alt='fields-round' className="mt-[-150px] ml-[-4px]" src="/images/profileImages/Ellipse 418.svg" priority/>
    <div className="flex flex-col items-center">
    <h1 className="text-mainTextColor text-[48px] font-bold">Fields</h1>
    <p className="text-blueColor font-bold text-[23px]">Top Programs all over the World</p>
</div>
    <Image height={235} width={100} alt='fields-round-2' className="mt-[207px]" src="/images/Fields/Frame 691.svg" priority/>
</div>
    <div className="w-full pb-20">
    <div className="max-w-[1150px] 2xl:max-w-[2350px] mx-auto px-2 2xl:px-8 transition-all duration-300 flex justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] w-full">
            <Card title='Architecture' img='/images/Fields/MainImg1.svg'/>
            <Card title='Arts & Humanities' img='/images/Fields/main 2.svg'/>
            <Card title='Business & Management' img='/images/Fields/main 3.svg'/>
            <Card title='Computer & IT' img='/images/Fields/main 4.svg'/>
            <Card title='Education' img='/images/Fields/main 5.svg'/>
            <Card title='Engineering & Technology' img='/images/Fields/main 6.svg'/>
            <Card title='Health & Medicine' img='/images/Fields/main 7.svg'/>
            <Card title='Law' img='/images/Fields/main 8.svg'/>
            <Card title='Architecture' img='/images/Fields/MainImg1.svg'/>
            <Card title='Arts & Humanities' img='/images/Fields/main 2.svg'/>
            <Card title='Business & Management' img='/images/Fields/main 3.svg'/>
            <Card title='Computer & IT' img='/images/Fields/main 4.svg'/>
       </div>
    </div>
</div>
<CounselingWork />
<Testimonal />
</>
  )
}

export default Fields