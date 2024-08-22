export const getMonths = (val: string[]) => {
    return val
        .map((m) => {
            const year = Math.floor(+m / 12);
            const months = +m % 12;
            return `${year ? year + (year > 1 ? ' years' : ' year') : ''} ${months ? months + (months > 1 ? ' months' : ' month') : ''}`;
        })
        .join(' / ');
};
