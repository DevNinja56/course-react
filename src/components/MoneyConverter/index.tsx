import { useCurrency } from '@/hooks/currency';
import { useUi } from '@/hooks/user-interface';
import { modalType } from '@/store/slices/ui.slice';
import React, { memo, useEffect } from 'react';

const CurrencyConverter = () => {
    const { updateModal } = useUi();
    const { country, fetchLatestRates, updateGeoIp, geoIp } = useCurrency();

    useEffect(() => {
        !geoIp && updateGeoIp();
        fetchLatestRates();
    }, [country.code]);

    return (
        <>
            <button
                className="border-2 border-gray-800 py-1 md:py-2 px-1 md:px-3 flex gap-1 group hover:border-transparent hover:bg-blueColor hover:text-white transition-all duration-200 font-bold text-xs md:text-base"
                onClick={() =>
                    updateModal({
                        type: modalType.currency_converter,
                        state: {}
                    })
                }
            >
                <div className="w-8 flex justify-center">{country?.code}</div>
                <div className="font-light">|</div>
                <div className="w-8 flex justify-center">
                    {country?.currencies}
                </div>
            </button>
        </>
    );
};

export default memo(CurrencyConverter);
