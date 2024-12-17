import React, { ReactNode } from 'react';
interface PropTypes{
    date:string;
    label:string;
    icon:ReactNode;
}

export default function StatsCards({date,label,icon}:PropTypes) {
    return (
        <div className=" h-fit capitalize  flex flex-col gap-y-4">
            <div className="w-full h-fit  flex flex-col gap-4">
                <div className="w-fit h-fit flex items-center gap-2 capitalize">
                    {icon}
                    <h1 className="text-xl font-bold">{label}</h1>
                </div>
                <div className="w-fit h-10 py-4 px-10 shadow-md bg-white rounded-lg capitalize flex justify-center items-center">
                    <h1 className="text-lg  text-[#495057]">
                        {date}
                    </h1>
                </div>
            </div>
        </div>
    );
}
