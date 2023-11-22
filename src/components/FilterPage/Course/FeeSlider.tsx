import React, { useState } from 'react';
import RangeSlider from '@/components/RangeSlider';
import { useFilterQuery } from '@/hooks/filterQuery';
import { setCurrencyValue } from '@/utils/currencyValue';

interface sliderValue {
    min: number;
    max: number;
}

const FeeSlider = () => {
    const [value, setValue] = useState<sliderValue>({ min: 1000, max: 500000 });
    const { addQuery } = useFilterQuery();

    const handleChange = () => {
        addQuery({ tuitionFee: [JSON.stringify(value)] });
    };

    return (
        <div className="flex justify-between  flex-col px-4 relative ">
            <h5 className="text-lg text-darkGrayColor font-medium">
                Tuition Fee
            </h5>
            <div className="rangeSLiderWithMinMax flex flex-col gap-5 relative">
                <div className="absolute top-1 right-0 w-full flex justify-between text-xs">
                    <span className="min">{setCurrencyValue(value.min)}</span>
                    <span className="max">{setCurrencyValue(value.max)}</span>
                </div>
                <RangeSlider
                    min={100}
                    max={500000}
                    value={value}
                    step={1000}
                    onChange={setValue}
                />
                <button
                    onClick={handleChange}
                    className="bg-blueColor text-white text-sm py-2 px-3 rounded-md"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default FeeSlider;
