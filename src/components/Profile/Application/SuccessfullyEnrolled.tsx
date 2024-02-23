import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react';

const SuccessfullyEnrolled = () => {
    return (
        <div className="w-full rounded-3xl border border-green-400 shadow-progressBarShadow pt-5 lg:pt-10 flex flex-col items-center justify-center mt-10">
            <Image
                height={206}
                width={322}
                src="/images/Apply/f60c297c-1309-4224-a30c-36587d4c6179.gif"
                priority
                alt="enroled"
                className="mb-0 md:mb-10 h-32 w-48 md:h-auto md:w-auto"
            />
            <Button
                text="Successfully Enrolled"
                className="py-4 w-full rounded-2xl rounded-t-none bg-green-400 text-2xl font-semibold hover:bg-opacity-50 hover:text-white"
            />
        </div>
    );
};

export default SuccessfullyEnrolled;
