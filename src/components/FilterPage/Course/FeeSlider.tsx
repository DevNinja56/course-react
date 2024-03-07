import React, { useState } from 'react';
import RangeSlider from '@/components/RangeSlider';
import { useFilterQuery } from '@/hooks/filterQuery';
import { getCurrencySymbol } from '@/utils/currencyValue';

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
                <div className="w-full  text-xs">
                    <div className="w-full flex justify-between mt-2">
                        <div className="flex items-center gap-1">
                            <span>{getCurrencySymbol()}</span>
                            <input
                                value={value.min}
                                className="min p-2 border rounded-md w-14"
                                onChange={(e) =>
                                    setValue({
                                        ...value,
                                        min: parseInt(e.target.value)
                                    })
                                }
                            />
                        </div>
                        <div className="flex items-center gap-1">
                            <span>{getCurrencySymbol()}</span>
                            <input
                                value={value.max}
                                className="min p-2 border rounded-md w-14"
                                onChange={(e) =>
                                    setValue({
                                        ...value,
                                        max: parseInt(e.target.value)
                                    })
                                }
                            />
                        </div>
                    </div>
                    <RangeSlider
                        min={100}
                        max={500000}
                        value={value}
                        step={1000}
                        onChange={setValue}
                    />
                </div>
                <button
                    onClick={handleChange}
                    className="bg-blueColor text-white text-sm py-2 px-3 rounded-md hover:bg-opacity-50"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default FeeSlider;
