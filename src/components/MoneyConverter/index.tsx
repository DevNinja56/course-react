import { useCurrency } from '@/hooks/currency';
import { useUi } from '@/hooks/user-interface';
import { modalType } from '@/store/slices/ui.slice';
import { countriesData } from '@/utils/data/country';
import React, { memo, useEffect } from 'react';

const CurrencyConverter = () => {
    const { updateModal } = useUi();
    const { country, fetchLatestRates, ipCountry, updateCountry } =
        useCurrency();

    useEffect(() => {
        ipCountry && updateCountry(countriesData[ipCountry]);
    }, [ipCountry]);

    useEffect(() => {
        fetchLatestRates();
    }, [country.code]);

    return (
        <>
            <button
                className="border-2 border-gray-800 py-2 px-3 flex group hover:border-transparent hover:bg-blueColor hover:text-white transition-all duration-200 font-bold "
                onClick={() =>
                    updateModal({
                        type: modalType.currency_converter,
                        state: {}
                    })
                }
            >
                <div className="border-r border-gray-800 pr-2 mr-2 group-hover:border-white">
                    {country?.code}
                </div>
                <div>{country?.currencies}</div>
            </button>
        </>
    );
};

export default memo(CurrencyConverter);
