import React from 'react';
import Card from './Card';
import Image from 'next/image';
import Button from '../Button';

const ProgramSection = () => {
    return (
        <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-9">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Image
                                height={42}
                                width={42}
                                alt="graduation"
                                src="/images/institute/Graduation Cap.svg"
                                priority
                            />
                            <h1 className="text-2xl font-extrabold text-mainTextColor">
                                Programs
                            </h1>
                        </div>
                        <h1 className="text-blueColor text-xl font-semibold flex items-center gap-1 cursor-pointer">
                            Read More
                            <Image
                                height={24}
                                width={24}
                                alt=""
                                src="/images/institute/Arrow Right.svg"
                                priority
                            />
                        </h1>
                    </div>
                    <div className="flex items-center gap-5 w-auto">
                        <div>
                            <Button
                                className="py-3 px-7 rounded-3xl font-medium text-white bg-blueColor"
                                text="Undergraduate"
                            />
                        </div>
                        <div>
                            <button className="py-3 px-7 rounded-3xl font-medium text-black bg-white shadow-md hover:bg-black hover:bg-opacity-5">
                                Postgraduate
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramSection;
