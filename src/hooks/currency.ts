import { useAppDispatch, useAppSelector } from './store';
import { fetchLatestRate } from '@/store/actions/getCurrencyRate';
import { countryDataType } from '@/types';
import { useGetUserIpQuery } from '@/store/slices/allRequests';
import {
    changeBaseCode,
    changeBaseRate,
    changeCountry,
    getLatestRates
} from '@/store/slices/currency.slice';

export const useCurrency = () => {
    const state = useAppSelector((state) => state.currency);
    const dispatch = useAppDispatch();
    const { data } = useGetUserIpQuery();
    // const apiKey = 'a52202833727fb095d0858b7';
    // `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${code}`

    const fetchLatest = () => dispatch(fetchLatestRate());

    const updateOldRates = (rates: { [key: string]: number }) =>
        dispatch(getLatestRates(rates));

    const updateBaseRate = (value: number) => dispatch(changeBaseRate(value));
    const updateBaseCode = (code: string) => dispatch(changeBaseCode(code));
    const updateCountry = (val: countryDataType) => {
        dispatch(changeCountry(val));
    };

    return {
        ...state,
        fetchLatestRates: fetchLatest,
        updateBaseRate,
        updateBaseCode,
        updateOldRates,
        updateCountry,
        ipCountry: data?.country ?? null
    };
};
