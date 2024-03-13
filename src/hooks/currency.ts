import { useAppDispatch, useAppSelector } from './store';
import {
    fetchAllLatestRate,
    fetchLatestRate
} from '@/store/actions/getCurrencyRate';
import { countryDataType } from '@/types';
import {
    changeBaseCode,
    changeBaseRate,
    changeCountry,
    getLatestRates
} from '@/store/slices/currency.slice';
import { fetchUserCountry } from '@/store/actions/getUserIp';

export const useCurrency = () => {
    const state = useAppSelector((state) => state.currency);
    const dispatch = useAppDispatch();

    // const { data } = useGetUserIpQuery();
    // const apiKey = 'a52202833727fb095d0858b7';
    // `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${code}`

    const fetchLatest = () => dispatch(fetchLatestRate());
    const fetchAllLatest = () => dispatch(fetchAllLatestRate());

    const updateOldRates = (rates: { [key: string]: number }) =>
        dispatch(getLatestRates(rates));

    const updateBaseRate = (value: number) => dispatch(changeBaseRate(value));
    const updateBaseCode = (code: string) => dispatch(changeBaseCode(code));
    const updateCountry = (val: countryDataType) => {
        dispatch(changeCountry(val));
    };
    const updateGeoIp = () => dispatch(fetchUserCountry());

    const setCurrencyValue = (value: number, type?: string, rate?: number) => {
        let base_code = 'PKR';
        let base_rate = 1;
        if (!type) {
            base_code = state.base_code;
            base_rate = state.base_rate;
        }
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: type ?? base_code
        }).format(value * (rate ?? base_rate));
    };

    function getCurrencySymbol(currency: string = 'PKR') {
        return (0)
            .toLocaleString('en-US', {
                style: 'currency',
                currency: state.base_code ?? currency,
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            })
            .replace(/\d/g, '')
            .trim();
    }

    return {
        ...state,
        fetchLatestRates: fetchLatest,
        fetchAllLatestRates: fetchAllLatest,
        updateBaseRate,
        updateBaseCode,
        updateOldRates,
        updateCountry,
        updateGeoIp,
        setCurrencyValue,
        getCurrencySymbol
    };
};
