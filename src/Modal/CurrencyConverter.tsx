import { useCurrency } from '@/hooks/currency';
import React from 'react';
import Select from 'react-select';

const CurrencyConverter = () => {
    const {
        isLoading,
        currentCurrency: savedLocation,
        rate_list,
        updateCountry
    } = useCurrency();

    const handleChange = ({
        currencies
    }: {
        name: string;
        currencies: string;
        code?: boolean;
    }) => {
        const filterObject = rate_list.filter(
            (item) => item.code === currencies
        )[0];
        // const country = {
        //     ...filterObject,
        //     // currencies: filterObject.currencies.split(',')[0]
        //     currencies: filterObject.code
        // };
        // debugger;
        updateCountry(filterObject);
        localStorage.setItem('isChangedCurrency', JSON.stringify(filterObject));
    };

    return (
        <div className="bg-white p-10 w-[400px] rounded-md capitalize">
            <h4 className="text-center text-xl">Nationality & Currency</h4>

            <div className="w-full my-5">
                <Select
                    options={rate_list.map(({ name, code }) => ({
                        label: name,
                        value: code
                    }))}
                    value={{
                        label: savedLocation?.name ?? '',
                        value: savedLocation?.code ?? ''
                    }}
                    placeholder="Select Country"
                    isDisabled={isLoading}
                    isLoading={isLoading}
                    onChange={(e) =>
                        handleChange({
                            name: e?.label ?? '',
                            currencies: e?.value ?? ''
                        })
                    }
                />
            </div>

            <div className="w-full my-5 uppercase">
                <Select
                    options={rate_list.map(
                        ({ currency, code, currency_name }) => ({
                            label: currency + ' - ' + currency_name,
                            value: code
                        })
                    )}
                    value={{
                        label:
                            `${savedLocation?.currency} - ${savedLocation?.currency_name}` ??
                            '',
                        value: savedLocation?.code ?? ''
                    }}
                    isDisabled={isLoading}
                    isLoading={isLoading}
                    onChange={(e) =>
                        handleChange({
                            name: e?.label ?? '',
                            currencies: e?.value ?? '',
                            code: true
                        })
                    }
                    placeholder="Select Currency"
                />
            </div>

            <div className="mt-10 mb-5">
                <h6 className="text-sm font-bold">Why do we ask this?</h6>
                <p className="text-sm">
                    By confirming your nationality, we can personalis the
                    content on our site for you. (i.e. we can show you the
                    scholarship, visa and tuition information that is most
                    relevant to you). Also, tell us which currency you&lsquo;d
                    like to have the fees displayed in.
                </p>
            </div>
        </div>
    );
};

export default CurrencyConverter;
