import React from 'react'

const ProfileComp = () => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col w-[26.5%]">
                <div className="py-[20px] pr-5 bg-profileBgColor text-blueColor border-r-4 border-blueColor flex justify-end">
                    <p className="text-xl font-semibold">Personal info</p>
                </div>
                <div className="py-[20px] pr-5 text-mainTextColor border-r-4 border-white flex justify-end w-full">
                    <p className="text-xl font-semibold">Study Interests</p>
                </div>
                <div className="py-[20px] pr-5 text-mainTextColor border-r-4 border-white flex justify-end w-full">
                    <p className="text-xl font-semibold">Budget preference</p>
                </div>
                <div className="py-[20px] pr-5 text-mainTextColor border-r-4 border-white flex justify-end w-full">
                    <p className="text-xl font-semibold">Academic background</p>
                </div>
                <div className="py-[20px] pr-5 text-mainTextColor border-r-4 border-white flex justify-end w-full">
                    <p className="text-xl font-semibold">English level</p>
                </div>
            </div>
            <div className="flex flex-col gap-y-3 w-[67%]">
                <p className="py-[14px] text-[32px] font-semibold">Personal Info</p>
                <div className="rounded-[10px] border border-borderColor px-11 pt-11 pb-4 flex flex-col gap-y-6">
                    <div className="border-b border-personalInfoBorderColor pb-5 flex flex-col gap-y-2 text-mainTextColor">
                        <p>Name</p>
                        <h1 className="text-xl font-semibold">Daniyal Samim</h1>
                    </div>
                    <div className="border-b border-personalInfoBorderColor pb-5 flex flex-col gap-y-2 text-mainTextColor">
                        <p>Email</p>
                        <h1 className="text-xl font-semibold">daniyalsamim@gmail.com</h1>
                    </div>
                    <div className="border-b border-personalInfoBorderColor pb-5 flex flex-col gap-y-2 text-mainTextColor">
                        <p>Phone</p>
                        <h1 className="text-xl font-semibold">+92 321 5251534</h1>
                    </div>
                    <div className="pb-5 flex flex-col gap-y-2 text-mainTextColor">
                        <p>Address</p>
                        <h1 className="text-xl font-semibold">Abingdon, Maryland(MD), 21009</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComp