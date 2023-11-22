export const setCurrencyValue = (value: number, type: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: type
    }).format(value ?? 0);
};
