export const getMonths = (val: string[]) => {
    return val
        .map((m) => {
            const year = Math.floor(+m / 12);
            const months = +m % 12;
            return `${year ? year + ' year' : ''} ${months ? months + ' months' : ''}`;
        })
        .join(' / ');
};
