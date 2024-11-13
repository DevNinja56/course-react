import React from 'react';
import FeeSlider from '@/components/SmartMatch/FeeSlider';

interface FeeBudgetProps {
    addQuery: (query: { [key: string]: string[] }) => void;
}

const FeeBudget = ({ addQuery }: FeeBudgetProps) => {
    return (
        <>
            <div className="flex gap-1 text-center max-sm:flex-col justify-center items-center">
                <h1 className=" lg:text-xl my-2 font-semibold">
                    Tell us about your tuition fee budget?
                </h1>
                <img
                    src="/images/SmartMatch/Tool/Wallet.png"
                    alt="Wallet"
                    className="h-6"
                />
            </div>
            <hr className="border h-0.5 bg-blueColor" />
            <div className="flex justify-center mb-4">
                <FeeSlider QueryAdd={addQuery} />
            </div>
        </>
    );
};

export default FeeBudget;
