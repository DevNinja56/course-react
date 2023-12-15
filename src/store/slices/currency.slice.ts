import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchLatestRate } from '../actions/getCurrencyRate';
import { countryDataType } from '@/types';

interface ratesType {
    base_currency: string;
    quote_currency: string;
    close_time: string;
    average_bid: string;
    average_ask: string;
    high_bid: string;
    high_ask: string;
    low_bid: string;
    low_ask: string;
}

interface dataTypes {
    country: countryDataType;
    base_code: string;
    base_rate: number;
    rates: ratesType | unknown;
    isLoading: boolean;
    error: string | null;
}

const initialState: dataTypes = {
    country: {
        name: 'Pakistan',
        currencies: 'PKR',
        languages: 'urd,eng',
        code: 'PAK'
    },
    base_code: 'PKR',
    base_rate: 1,
    rates: {},
    isLoading: false,
    error: null
};

const currency = createSlice({
    name: 'currencyStore',
    initialState,
    reducers: {
        getLatestRates: (state, action) => {
            state.rates = action.payload;
        },
        changeBaseRate: (state, action) => {
            state.base_rate = action.payload;
        },
        changeBaseCode: (state, action) => {
            state.base_code = action.payload;
        },
        changeCountry: (state, action: PayloadAction<countryDataType>) => {
            state.country = action.payload;
            state.base_code = action.payload.currencies;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLatestRate.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                fetchLatestRate.fulfilled,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (state, action: PayloadAction<any>) => {
                    const rate = action.payload?.response?.[0] as ratesType;
                    state.rates = rate;
                    state.base_rate = +rate.average_ask;
                    state.base_code = rate.quote_currency;
                    state.isLoading = false;
                }
            )
            .addCase(fetchLatestRate.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action?.error?.message ?? 'Something went wrong';
            });
    }
});

export const { getLatestRates, changeBaseCode, changeBaseRate, changeCountry } =
    currency.actions;

export default currency.reducer;
