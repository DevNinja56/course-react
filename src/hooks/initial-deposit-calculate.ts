import { useCurrency } from '@/hooks/currency';

interface InitialDepositType {
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
    }: InitialDepositType): string | number {
        const rate = getSingleRate(currency_code ?? base_code) ?? {
            base_rate: 1
        };

        if (!isNaN(+initialDeposit)) {
            const amount = +initialDeposit * +rate.base_rate;
            return isNumber
                ? amount
                : setCurrencyValue(amount, currency_code ?? base_code);
        }

        const matches = initialDeposit.match(/^\{([1-9][0-9]?|100)%,(N|G)\}$/);
        if (matches) {
            const percentage = parseFloat(matches[1]);
            const option = matches[2];
            const baseRate = +rate.base_rate;
            let calculatedAmount = 0;

            if (option === 'G') {
                calculatedAmount = tuitionFee * (percentage / 100) * baseRate;
            } else if (option === 'N') {
                const scholarshipAmount = parseFloat(scholarship);
                if (!isNaN(scholarshipAmount)) {
                    calculatedAmount = Math.floor(
                        (tuitionFee * (percentage / 100) -
                            tuitionFee * (scholarshipAmount / 100)) *
                            baseRate
                    );
                }
            }

            return isNumber
                ? calculatedAmount
                : setCurrencyValue(
                      calculatedAmount,
                      rate ? base_code : currency_code
                  );
        }

        return isNumber ? 0 : initialDeposit;
    }

    return { initialDeposit };
};

// interface initialDepositType {
//     initialDeposit: string;
//     tuitionFee: number;
//     scholarship: string;
//     isNumber?: boolean;
//     currency_code?: string;
// }

// export const useCalculate = () => {
//     const { setCurrencyValue, getSingleRate } = useCurrency();
//     const { base_code } = useCurrency();

//     function initialDeposit({
//         initialDeposit,
//         tuitionFee,
//         scholarship,
//         isNumber = false,
//         currency_code
//     }: initialDepositType): string | number {
//         const rate = getSingleRate(currency_code ?? base_code);
//         if (!isNaN(+initialDeposit)) {
//             return isNumber
//                 ? +initialDeposit * +(rate?.base_rate ?? 1)
//                 : setCurrencyValue(
//                       +initialDeposit * +(rate?.base_rate ?? 1),
//                       rate ? base_code : currency_code
//                   );
//         }

//         const matches = initialDeposit.match(/^\{([1-9][0-9]?|100)%,(N|G)\}$/);
//         if (matches) {
//             const percentage = parseFloat(matches[1]);
//             const option = matches[2];

//             if (option === 'G') {
//                 return isNumber
//                     ? (tuitionFee * (percentage / 100) ?? 0) *
//                           +(rate?.base_rate ?? 1)
//                     : setCurrencyValue(
//                           (tuitionFee * (percentage / 100) ?? 0) *
//                               +(rate?.base_rate ?? 1),
//                           rate ? base_code : currency_code
//                       );
//             } else if (option === 'N') {
//                 return isNumber
//                     ? Math.floor(
//                           tuitionFee * (percentage / 100) -
//                               tuitionFee *
//                                   (parseInt(scholarship) / 100) *
//                                   +(rate?.base_rate ?? 1)
//                       ) ?? 0
//                     : setCurrencyValue(
//                           Math.floor(
//                               (tuitionFee * (percentage / 100) -
//                                   tuitionFee * (parseInt(scholarship) / 100)) *
//                                   +(rate?.base_rate ?? 1)
//                           ) ?? 0,
//                           rate ? base_code : currency_code
//                       );
//             }
//         }

//         return isNumber ? 0 : initialDeposit;
//     }

//     return { initialDeposit };
// };

// FORMULAS FOR COURSE OPTIONS

// Initial Deposit Calculation Methods & Formulas

// Important Terms:
// Gross Tuition Fee: Tuition Fee without deducting any scholarship.
// Net Tuition Fee: Tuition Fee after deducting scholarship.

// Calculation Methods:
// Fixed Figure: The Initial Deposit can be fixed. For example, Staffordshire University in the UK has a fixed deposit amount of GBP 6500/-.
// So, in this case, we can simply put a fixed figure of GBP 6500 as an initial deposit.

// Percentage of Gross Tuition Fee: The initial deposit can be a percentage of the gross tuition fee. For example, Macquarie University in Australia charges 50% of the Gross Tuition Fee as an initial deposit. In this university, the gross tuition fee for a Master of Information Technology is AUD 40,000/- and they take AUD 20,000 as an initial deposit.
// So, in this case, what we discussed is that we will add a formula in the initial deposit column of the bulk upload sheet. The formula can be like:
// 50%,G (Here, 50% represents the percentage of tuition fees, and “G” represents the “Gross Tuition Fee.”

// Percentage of Net Tuition Fee: The initial deposit can also be a percentage of the net tuition fee. For example, Murdoch University in Australia charges 50% of the Net Tuition Fee as an initial deposit. In this university, the Gross tuition fee for a Master of Information Technology is AUD 33,000/-. They offer their students a “Guaranteed” scholarship of 20%. So, the Net Tuition Fee for this course becomes AUD 26,400/-.
// So, in this case, what we discussed is that we will add a formula in the initial deposit column of the bulk upload sheet. The formula can be like:
// 50%,N (Here, 50% represents the percentage of tuition fees, and “N” represents the “Net Tuition Fee.”
// Note: In case of calculating initial deposit as a percentage of Net Tuition Fee, the system should first check if there is any guaranteed scholarship applicable to the course, if Yes, then the system should calculate the amount of Net Tuition Fee and then the mentions percentage should be applied to calculate the initial deposit of that course.
