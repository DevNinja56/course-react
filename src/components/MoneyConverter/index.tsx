import { useCurrency } from '@/hooks/currency';
import React, { useEffect, useState } from 'react';
import { LoaderIcon } from 'react-hot-toast';

interface codeAndRateType {
    code: string;
    rate: number;
}

const CurrencyConverter = () => {
    const [updateTime, setUpdateTime] = useState<string>('Not Updated');
    const [fetchLoading, setFetchLoading] = useState(false);
    const {
        fetchLatestRates,
        base_code,
        rates,
        updateBaseCode,
        updateBaseRate,
        updateOldRates
    } = useCurrency();

    useEffect(() => {
        const savedRates = localStorage?.getItem('currency_rates') ?? null;
        setUpdateTime(localStorage?.getItem('update_time') ?? 'Not Updated');
        const { code, rate }: codeAndRateType = JSON.parse(
            localStorage?.getItem('code_with_rate') ?? '{"code":"PKR","rate":1}'
        );

        updateBaseCode(code);
        updateBaseRate(rate);

        savedRates
            ? updateOldRates(JSON.parse(savedRates))
            : fetchLatestRates('PKR');
    }, []);

    const handleCurrencyChange = (code: string) => {
        window.scrollTo(0, 0);
        updateBaseCode(code);
        updateBaseRate(rates[code]);
        localStorage.setItem(
            'code_with_rate',
            JSON.stringify({ code, rate: rates[code] })
        );
    };

    return (
        <>
            <div className="flex flex-col">
                <h3 className="whitespace-nowrap my-2">Change Currency</h3>
                <select
                    name="currency"
                    value={base_code}
                    onChange={(e) => handleCurrencyChange(e.target.value)}
                >
                    {Object.entries(rates).map(([code, value]) => (
                        <option value={code} key={'currency-select--' + code}>
                            {`${code}: ${value}`}
                        </option>
                    ))}
                </select>
                <div className="text-sm whitespace-nowrap my-1">
                    Last Update {updateTime}
                </div>
                <button
                    className="text-sm bg-blueColor text-white p-1 rounded-md disabled:bg-gray-500 flex gap-2 justify-center items-center "
                    onClick={() => {
                        setFetchLoading(true);
                        fetchLatestRates(base_code)
                            .then(() =>
                                setUpdateTime(new Date().toLocaleString())
                            )
                            .finally(() => setFetchLoading(false));
                    }}
                    disabled={fetchLoading}
                >
                    Fetch Latest Rates {fetchLoading && <LoaderIcon />}
                </button>
            </div>
        </>
    );
};

export default CurrencyConverter;
