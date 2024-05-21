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
        currency_code
    }: initialDepositType): string | number {
        const rate = getSingleRate(currency_code ?? base_code);
        if (!isNaN(+initialDeposit)) {
            return isNumber
                ? +initialDeposit * +(rate?.base_rate ?? 1)
                : setCurrencyValue(
                      +initialDeposit * +(rate?.base_rate ?? 1),
                      rate ? base_code : currency_code
                  );
        }

        const matches = initialDeposit.match(/^\{([1-9][0-9]?|100)%,(N|G)\}$/);
        if (matches) {
            const percentage = parseFloat(matches[1]);
            const option = matches[2];

            if (option === 'G') {
                return isNumber
                    ? (tuitionFee * (percentage / 100) ?? 0) *
                          +(rate?.base_rate ?? 1)
                    : setCurrencyValue(
                          (tuitionFee * (percentage / 100) ?? 0) *
                              +(rate?.base_rate ?? 1),
                          rate ? base_code : currency_code
                      );
            } else if (option === 'N') {
                return isNumber
                    ? Math.floor(
                          tuitionFee * (percentage / 100) -
                              tuitionFee *
                                  (parseInt(scholarship) / 100) *
                                  +(rate?.base_rate ?? 1)
                      ) ?? 0
                    : setCurrencyValue(
                          Math.floor(
                              (tuitionFee * (percentage / 100) -
                                  tuitionFee * (parseInt(scholarship) / 100)) *
                                  +(rate?.base_rate ?? 1)
                          ) ?? 0,
                          rate ? base_code : currency_code
                      );
            }
        }

        return isNumber ? 0 : initialDeposit;
    }

    return { initialDeposit };
};
