import { createSlice } from '@reduxjs/toolkit';

interface dataTypes {
    base_code: string;
    base_rate: number;
    rates: { [key: string]: number };
}

const initialState: dataTypes = {
    base_code: 'PKR',
    base_rate: 1,
    rates: {}
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
        }
    }
});

export const { getLatestRates, changeBaseCode, changeBaseRate } =
    currency.actions;

export default currency.reducer;
