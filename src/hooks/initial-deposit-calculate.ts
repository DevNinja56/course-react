import { useCurrency } from '@/hooks/currency';

export const useCalculate = () => {
    const { setCurrencyValue } = useCurrency();

    function initialDeposit(
        initialDeposit: string,
        tuitionFee: number,
        scholarship: string = '0%',
        isNumber = false
    ): string | number {
        if (!isNaN(+initialDeposit)) {
            return isNumber
                ? +initialDeposit
                : setCurrencyValue(+initialDeposit);
        }

        const matches = initialDeposit.match(/^\{([1-9][0-9]?|100)%,(N|G)\}$/);
        if (matches) {
            const percentage = parseFloat(matches[1]);
            const option = matches[2];

            if (option === 'G') {
                return isNumber
                    ? tuitionFee * (percentage / 100) ?? 0
                    : setCurrencyValue(tuitionFee * (percentage / 100) ?? 0);
            } else if (option === 'N') {
                return isNumber
                    ? Math.floor(
                          tuitionFee * (percentage / 100) -
                              tuitionFee * (parseInt(scholarship) / 100)
                      ) ?? 0
                    : setCurrencyValue(
                          Math.floor(
                              tuitionFee * (percentage / 100) -
                                  tuitionFee * (parseInt(scholarship) / 100)
                          ) ?? 0
                      );
            }
        }

        return isNumber ? 0 : initialDeposit;
    }

    return { initialDeposit };
};
