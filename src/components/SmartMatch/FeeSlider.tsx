import React, { useEffect, useState } from 'react';
import RangeSlider from '@/components/RangeSlider';
import { useFilterQuery } from '@/hooks/filterQuery';
import { useCurrency } from '@/hooks/currency';

interface FeeSliderProps {
    min?: number;
    max?: number;
    QueryAdd?: (query: { [key: string]: string[] }) => void;
}

const FeeSlider = ({ QueryAdd, min = 1000, max = 500000 }: FeeSliderProps) => {
    const [value, setValue] = useState({ min, max });
    const { addQuery } = useFilterQuery();
    const { getCurrencySymbol } = useCurrency();

    const handleChange = (updatedValue: { min: number; max: number }) => {
        setValue(updatedValue);
        const feeQuery = { tuitionFee: [JSON.stringify(updatedValue)] };
        if (QueryAdd) {
            QueryAdd(feeQuery);
        } else {
            addQuery(feeQuery);
        }
    };
    useEffect(() => {
        const initialQuery = { tuitionFee: [JSON.stringify({ min, max })] };
        if (QueryAdd) {
            QueryAdd(initialQuery);
        } else {
            addQuery(initialQuery);
        }
    }, []);

    return (
        <div className="flex justify-between flex-col px-4 relative w-full">
            <div className="rangeSliderWithMinMax flex flex-col gap-5 relative min-w-[55%] self-center">
                <div className="text-xs">
                    <div className="w-full flex justify-between mt-2">
                        <div className="flex items-center gap-1">
                            <span>{getCurrencySymbol()}</span>
                            <input
                                type="number"
                                value={value.min}
                                onChange={(e) =>
                                    handleChange({
                                        ...value,
                                        min: parseInt(e.target.value, 10)
                                    })
                                }
                                className="p-2 border rounded-md w-20"
                            />
                        </div>
                        <div className="flex items-center gap-1">
                            <span>{getCurrencySymbol()}</span>
                            <input
                                type="number"
                                value={value.max}
                                onChange={(e) =>
                                    handleChange({
                                        ...value,
                                        max: parseInt(e.target.value, 10)
                                    })
                                }
                                className="p-2 border rounded-md w-20"
                            />
                        </div>
                    </div>
                    <RangeSlider
                        min={min}
                        max={max}
                        value={value}
                        step={1000}
                        onChange={(updatedValue) => handleChange(updatedValue)}
                    />
                </div>
            </div>
        </div>
    );
};

export default FeeSlider;
