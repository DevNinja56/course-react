/* eslint-disable react-hooks/rules-of-hooks */
import { useCurrency } from '@/hooks/currency';

export const setCurrencyValue = (value: number, type: string = 'USD') => {
    const { base_code, base_rate = 1 } = useCurrency();
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: base_code ?? type
    }).format(value * base_rate ?? 0);
};
