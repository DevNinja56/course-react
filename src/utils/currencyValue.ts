export const setCurrencyValue = (value: number, type: string = 'PKR') => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: type
    }).format(value ?? 0);
};
