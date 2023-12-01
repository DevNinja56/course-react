import http from '@/utils/axios';
import { useAppDispatch, useAppSelector } from './store';
import {
    changeBaseCode,
    changeBaseRate,
    getLatestRates
} from '@/store/slices/currency.slice';

export const useCurrency = () => {
    const state = useAppSelector((state) => state.currency);
    const dispatch = useAppDispatch();
    const apiKey = 'a52202833727fb095d0858b7';

    const fetchLatestRates = async (code: string = 'PKR') => {
        const { conversion_rates }: { [key: string]: number } = await http.get(
            `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${code}`
        );
        dispatch(getLatestRates(conversion_rates));

        // saved to local storage
        localStorage.setItem(
            'currency_rates',
            JSON.stringify(conversion_rates)
        );

        localStorage.setItem('update_time', new Date().toLocaleString());
    };

    const updateOldRates = (rates: { [key: string]: number }) =>
        dispatch(getLatestRates(rates));

    const updateBaseRate = (value: number) => dispatch(changeBaseRate(value));
    const updateBaseCode = (code: string) => dispatch(changeBaseCode(code));

    return {
        ...state,
        fetchLatestRates,
        updateBaseRate,
        updateBaseCode,
        updateOldRates
    };
};
