import { useCurrency } from '@/hooks/currency';
import { countriesData } from '@/utils/data/country';
import React from 'react';
import Select from 'react-select';

const CurrencyConverter = () => {
    const { isLoading, country: savedLocation, updateCountry } = useCurrency();

    const handleChange = ({
        name,
        currencies,
        code
    }: {
        name: string;
        currencies: string;
        code?: boolean;
    }) => {
        const filterObject = Object.values(countriesData).filter(
            (item) =>
                item.currencies === currencies &&
                item.name ===
                    (code ? name.split(currencies + ' - ')[1].trim() : name)
        )[0];
        const country = {
            ...filterObject,
            currencies: filterObject.currencies.split(',')[0]
        };
        updateCountry(country);
        localStorage.setItem('isChangedCurrency', JSON.stringify(country));
    };

    return (
        <div className="bg-white p-10 w-[400px] rounded-md">
            <h4 className="text-center text-xl">Nationality & Currency</h4>

            <div className="w-full my-5">
                <Select
                    options={Object.values(countriesData)?.map(
                        ({ name, currencies }) => ({
                            label: name,
                            value: currencies
                        })
                    )}
                    value={{
                        label: savedLocation?.name ?? '',
                        value: savedLocation?.currencies ?? ''
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

            <div className="w-full my-5">
                <Select
                    options={Object.values(countriesData)?.map(
                        ({ name, currencies }) => ({
                            label: `${currencies} - ${name}`,
                            value: currencies
                        })
                    )}
                    value={{
                        label:
                            `${savedLocation?.currencies} - ${savedLocation?.name}` ??
                            '',
                        value: savedLocation?.currencies ?? ''
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
