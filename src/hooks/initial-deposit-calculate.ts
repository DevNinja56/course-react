import { useCurrency } from '@/hooks/currency';

export const useCalculate = () => {
    const { setCurrencyValue } = useCurrency();

    function initialDeposit(
        initialDeposit: string,
        tuitionFee: number,
        scholarship: string
    ): string | number {
        if (!isNaN(+initialDeposit)) {
            return setCurrencyValue(+initialDeposit);
        }

        const matches = initialDeposit.match(/^\{([1-9][0-9]?|100)%,(N|G)\}$/);
        if (matches) {
            const percentage = parseFloat(matches[1]);
            const option = matches[2];

            if (option === 'G') {
                return setCurrencyValue(tuitionFee * (percentage / 100) ?? 0);
            } else if (option === 'N') {
                return setCurrencyValue(
                    Math.floor(
                        tuitionFee * (percentage / 100) -
                            tuitionFee * (parseInt(scholarship) / 100)
                    ) ?? 0
                );
            }
        }

        return initialDeposit;
    }

    return { initialDeposit };
};
