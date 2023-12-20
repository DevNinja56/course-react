/* eslint-disable react-hooks/rules-of-hooks */
import { useCurrency } from '@/hooks/currency';

export const setCurrencyValue = (value: number, type?: string) => {
    const { base_code = 'PKR', base_rate = 1 } = useCurrency();
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: type ?? base_code
    }).format(value * base_rate ?? 0);
};

export function getCurrencySymbol(currency: string = 'PKR') {
    const { base_code } = useCurrency();
    return (0)
        .toLocaleString('en-US', {
            style: 'currency',
            currency: base_code ?? currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        })
        .replace(/\d/g, '')
        .trim();
}
