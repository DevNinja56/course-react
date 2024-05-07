import { useCurrency } from '@/hooks/currency';

interface initialDepositType {
    initialDeposit: string;
    tuitionFee: number;
    scholarship: string;
    isNumber?: boolean;
    currency_code?: string;
}

export const useCalculate = () => {
    const { setCurrencyValue, getSingleRate } = useCurrency();
    const { base_code } = useCurrency();

    function initialDeposit({
        initialDeposit,
        tuitionFee,
        scholarship,
        isNumber = false,
        currency_code = 'pkr'
    }: initialDepositType): string | number {
        const { base_rate } = getSingleRate(currency_code ?? base_code) ?? {
            base_rate: 1
        };
        if (!isNaN(+initialDeposit)) {
            return isNumber
                ? +initialDeposit * +base_rate
                : setCurrencyValue(+initialDeposit * +base_rate);
        }

        const matches = initialDeposit.match(/^\{([1-9][0-9]?|100)%,(N|G)\}$/);
        if (matches) {
            const percentage = parseFloat(matches[1]);
            const option = matches[2];

            if (option === 'G') {
                return isNumber
                    ? (tuitionFee * (percentage / 100) ?? 0) * +base_rate
                    : setCurrencyValue(
                          (tuitionFee * (percentage / 100) ?? 0) * +base_rate
                      );
            } else if (option === 'N') {
                return isNumber
                    ? Math.floor(
                          tuitionFee * (percentage / 100) -
                              tuitionFee *
                                  (parseInt(scholarship) / 100) *
                                  +base_rate
                      ) ?? 0
                    : setCurrencyValue(
                          Math.floor(
                              (tuitionFee * (percentage / 100) -
                                  tuitionFee * (parseInt(scholarship) / 100)) *
                                  +base_rate
                          ) ?? 0
                      );
            }
        }

        return isNumber ? 0 : initialDeposit;
    }

    return { initialDeposit };
};
