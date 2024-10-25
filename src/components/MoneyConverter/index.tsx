import { useCurrency } from '@/hooks/currency';
import { useUi } from '@/hooks/user-interface';
import { modalType } from '@/store/slices/ui.slice';
import React, { memo, useEffect, useState } from 'react';

const CurrencyConverter = () => {
    const { updateModal } = useUi();
    const {
        currentCurrency: country,
        fetchLatestRates,
        updateGeoIp,
        geoIp,
        updateCountry,
        fetchAllLatestRates
    } = useCurrency();
    const [isChangedCurrency, setIsChangedCurrency] = useState(false);

    useEffect(() => {
        const isChanged = localStorage.getItem('isChangedCurrency');

        if (isChanged) {
            setIsChangedCurrency(false);
            updateCountry(JSON.parse(isChanged));
        } else {
            setIsChangedCurrency(true);
            !geoIp && updateGeoIp();
        }

        fetchLatestRates();
        fetchAllLatestRates();
    }, [country.code]);

    return (
        <div className="relative">
            <button
                className="border-2 border-gray-800 py-1 md:py-1.5 px-1 md:px-1 xl:px-1.5 flex gap-[2px] group hover:border-transparent hover:bg-blueColor hover:text-white transition-all duration-200 font-bold text-xs xl:text-sm uppercase "
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
                    {country.currency}
                </div>
            </button>

            {isChangedCurrency && (
                <div className="fixed top-[90px] right-2   bg-white rounded-md border-gray-300 border overflow-hidden">
                    <div className="border-l-[6px] border-l-blueColor w-[350px] p-5 capitalize ">
                        <div className="mb-5">
                            Please confirm these details. so you see the most
                            appropriate dates and tuition fees.
                        </div>
                        <div className="">
                            <div>
                                Nationality: <b>{country.name}</b>
                            </div>
                            <div>
                                Currency: <b>{country?.currency_name}</b>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    setIsChangedCurrency(false);
                                    localStorage.setItem(
                                        'isChangedCurrency',
                                        JSON.stringify(country)
                                    );
                                }}
                                className="bg-blueColor text-white px-5 py-2 rounded-md mt-5"
                            >
                                Confirm
                            </button>
                            <button
                                className="bg-transparent text-blueColor hover:underline px-5 py-2 rounded-md mt-5"
                                onClick={() =>
                                    updateModal({
                                        type: modalType.currency_converter,
                                        state: {}
                                    })
                                }
                            >
                                Change
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default memo(CurrencyConverter);
