import Image from 'next/image';
import React from 'react';
import SortBy from './SortBy';
import Card from '../Scholarship/Card';

const RightScholarshipCardBox = () => {
    return (
        <div className="flex flex-col gap-y-7 w-full lg:w-[73%]">
            <div className="flex flex-col gap-y-4">
                <div className="w-full flex items-center justify-between">
                    <h1 className="font-bold text-xl md:text-[23px] text-mainTextColor">
                        918 Results Found
                    </h1>
                    <SortBy />
                </div>
                <hr className="border border-scholarshipBorderColor" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-3 px-0 md:px-8 lg:px-0">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="w-full flex justify-center">
                <div className="flex items-center gap-x-6">
                    <button className="h-[39px] w-[39px] rounded-full bg-profileBgColor flex items-center justify-center">
                        <Image
                            height={5.56}
                            width={5.56}
                            alt="arrow-left"
                            src="/images/Scholarships/Vector2.svg"
                            priority
                        />
                    </button>
                    <p className="font-medium text-darkGrayColor">1</p>
                    <p className="font-medium border-b border-blueColor text-blueColor">
                        2
                    </p>
                    <p className="font-medium text-darkGrayColor">3</p>
                    <p className="font-medium text-darkGrayColor">---</p>
                    <p className="font-medium text-darkGrayColor">67</p>
                    <button className="h-[39px] w-[39px] rounded-full bg-profileBgColor flex items-center justify-center">
                        <Image
                            height={5.56}
                            width={5.56}
                            alt="arrow-right"
                            src="/images/Scholarships/Vector.svg"
                            priority
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RightScholarshipCardBox;
