import { useCurrency } from '@/hooks/currency';
import { useCalculate } from '@/hooks/initial-deposit-calculate';
import { useUi } from '@/hooks/user-interface';
import { scholarshipType, singleCourseType } from '@/types';
import React from 'react';
import { IoMdClose } from 'react-icons/io';

const BankStatementCalculate = () => {
    const { modalState, hideModal } = useUi() as {
        modalState: singleCourseType;
        hideModal: () => void;
    };
    const { initialDeposit: calculateDeposit } = useCalculate();
    const { getSingleRate, setCurrencyValue, currentCurrency } = useCurrency();

    const scholarship: scholarshipType | undefined =
        modalState?.scholarship?.find(
            (scholarship) => scholarship.type === 'guaranteed'
        );

    const scholarshipGuaranteedAmount = scholarship?.isAmount
        ? parseInt(scholarship.amount)
        : scholarship
          ? parseInt(scholarship.percentage)
          : 0;

    const {
        tuitionFee,
        monthDuration: [duration],
        institute,
        initialDeposit: listOfInitialDeposit
    } = modalState;
    const [{ amount: initialDeposit }] = listOfInitialDeposit;

    const isLiveAustralia = institute.country.name
        .toLowerCase()
        ?.includes('australia');
    const isLiveLondon = institute.location.toLowerCase()?.includes('london');

    const livingCost = isLiveAustralia ? 29710 : isLiveLondon ? 12006 : 9207; // Update living costs based on provided formulas
    const travelingCost = isLiveAustralia ? 2000 : 0; // Traveling cost is only applicable for Australia
    const oshc = isLiveAustralia ? 750 * Math.ceil(+duration / 12) : 0; // OSHC is only applicable for Australia
    const scholarshipAmount = tuitionFee * (scholarshipGuaranteedAmount / 100);

    const total = isLiveAustralia
        ? tuitionFee + livingCost + travelingCost + oshc - scholarshipAmount
        : livingCost + tuitionFee - scholarshipAmount;

    let initialDepositValue = calculateDeposit({
        initialDeposit: scholarshipAmount
            ? initialDeposit.replace('G', 'N')
            : initialDeposit,
        tuitionFee,
        scholarship: scholarshipGuaranteedAmount.toString(),
        isNumber: true
    });

    initialDepositValue =
        typeof initialDepositValue === 'number' ? initialDepositValue : 0;

    const visaFee = total - initialDepositValue;

    const currency = isLiveAustralia ? 'AUD' : 'GBP';
    const { base_rate } = getSingleRate(currency) ?? { base_rate: 1 };

    const data = [
        {
            name: 'Annual Tuition Fee',
            value: setCurrencyValue(
                tuitionFee * +base_rate,
                currentCurrency?.currency ?? currency
            )
        },
        ...(scholarshipAmount
            ? [
                  {
                      name: `Scholarship Amount - ${scholarship?.type ?? 'None'}`,
                      value: `(${setCurrencyValue(
                          scholarshipAmount * +base_rate,
                          currentCurrency?.currency ?? currency
                      )})`
                  }
              ]
            : []),
        {
            name: 'Living Cost',
            value: setCurrencyValue(
                livingCost * +base_rate,
                currentCurrency?.currency ?? currency
            )
        },

        ...(isLiveAustralia
            ? [
                  {
                      name: 'Traveling Cost',
                      value: setCurrencyValue(
                          travelingCost * +base_rate,
                          currentCurrency?.currency ?? currency
                      )
                  },
                  {
                      name: 'OSHC',
                      value: setCurrencyValue(
                          oshc * +base_rate,
                          currentCurrency?.currency ?? currency
                      )
                  },
                  {
                      name: 'Statement Requirement by University',
                      value: setCurrencyValue(
                          total * +base_rate,
                          currentCurrency?.currency ?? currency
                      )
                  },
                  {
                      name: 'Initial Deposit',
                      value: `(${setCurrencyValue(initialDepositValue * +base_rate, currentCurrency?.currency ?? currency)})`
                  },
                  {
                      name: 'Statement Requirement for Visa',
                      value: setCurrencyValue(
                          visaFee * +base_rate,
                          currentCurrency?.currency ?? currency
                      )
                  }
              ]
            : [
                  {
                      name: 'Statement Requirement by University',
                      value: setCurrencyValue(
                          total * +base_rate,
                          currentCurrency?.currency ?? currency
                      )
                  },
                  {
                      name: 'Initial Deposit',
                      value: `(${setCurrencyValue(initialDepositValue * +base_rate, currentCurrency?.currency ?? currency)})`
                  },
                  {
                      name: 'Statement Requirement for Visa',
                      value: setCurrencyValue(
                          visaFee * +base_rate,
                          currentCurrency?.currency ?? currency
                      )
                  }
              ])
    ];

    return (
        <div className="bg-white px-[40px] py-[30px] w-[572px] rounded-md capitalize">
            <button
                onClick={hideModal}
                className="absolute top-10 right-10 bg-blueColor text-white rounded-full w-[30px] h-[30px] px-1 text-[22px]"
            >
                <IoMdClose />
            </button>
            <span className="font-bold text-[28px] block text-center">
                Bank Statement Calculator
            </span>
            <p className="font-medium text-lg text-darkGrayColor text-center">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
            </p>
            <div className="mt-4 overflow-hidden rounded">
                <table className="border table w-full">
                    <tbody className="text-center">
                        {data.map(({ name, value }) => (
                            <tr
                                key={'statement--' + name}
                                className="odd:bg-blueColor odd:bg-opacity-10 even:bg-gray-50 border-b overflow-hidden rounded"
                            >
                                <th className="w-3/4 py-3 pl-5 text-left text-lg font-bold text-mainTextColor">
                                    {name}
                                </th>
                                <td className="w-1/4 pr-5 font-medium text-lg text-lightGrayColor">
                                    {value}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BankStatementCalculate;

// import { useCurrency } from '@/hooks/currency';
// import { useCalculate } from '@/hooks/initial-deposit-calculate';
// import { useUi } from '@/hooks/user-interface';
// import { scholarshipType, singleCourseType } from '@/types';
// import React from 'react';
// import { IoMdClose } from 'react-icons/io';

// const BankStatementCalculate = () => {
//     const { modalState, hideModal } = useUi() as {
//         modalState: singleCourseType;
//         hideModal: () => void;
//     };
//     const { initialDeposit: calculateDeposit } = useCalculate();
//     const { getSingleRate } = useCurrency();

//     const scholarship: scholarshipType | undefined =
//         modalState?.scholarship?.find(
//             (scholarship) => scholarship.type === 'guaranteed'
//         );
//     const scholarshipGuaranteedAmount = scholarship?.amount
//         ? parseInt(scholarship?.amount)
//         : 0;

//     const {
//         tuitionFee,
//         monthDuration: [duration],
//         institute,
//         initialDeposit: listOfInitialDeposit
//     } = modalState;
//     const [{ amount: initialDeposit }] = listOfInitialDeposit;
//     const { setCurrencyValue } = useCurrency();
//     const isLiveAustralia = institute.country.name
//         .toLowerCase()
//         ?.includes('australia');
//     const isLiveLondon = institute.location.toLowerCase()?.includes('london');
//     const livingCost = isLiveAustralia ? 24505 : isLiveLondon ? 12006 : 9207;
//     const travelingCost = 2000;
//     const oshc = 700 * (+duration / 12);
//     const total = tuitionFee + livingCost + travelingCost + oshc;

//     let initialDepositValue = calculateDeposit({
//         initialDeposit,
//         tuitionFee,
//         scholarship: scholarshipGuaranteedAmount + '',
//         isNumber: true
//     });

//     initialDepositValue =
//         typeof initialDepositValue === 'number' ? initialDepositValue : 0;

//     const visaFee = isLiveAustralia
//         ? total - initialDepositValue - oshc
//         : tuitionFee - initialDepositValue + livingCost;
//     const currency = isLiveAustralia ? 'AUD' : 'GBP';
//     const { base_rate } = getSingleRate(currency) ?? { base_rate: 1 };
//     const scholarshipAmount = tuitionFee * (scholarshipGuaranteedAmount / 100);

//     const data = [
//         {
//             name: 'Annual Tuition Fee',
//             value: setCurrencyValue(tuitionFee * ++base_rate)
//         },
//         {
//             name: `Scholarship Amount - ${scholarship?.type ?? 'None'}`,
//             value: setCurrencyValue(scholarshipAmount * ++base_rate)
//         },
//         {
//             name: 'Initial Deposit',
//             value: setCurrencyValue(initialDepositValue * ++base_rate)
//         },
//         {
//             name: 'Living Cost',
//             value: setCurrencyValue(livingCost * ++base_rate)
//         },
//         ...(isLiveAustralia
//             ? [
//                   {
//                       name: 'Traveling Cost',
//                       value: setCurrencyValue(travelingCost * ++base_rate)
//                   },
//                   {
//                       name: 'OSHC',
//                       value: setCurrencyValue(oshc * ++base_rate)
//                   },
//                   {
//                       name: 'Statement Requirement by University',
//                       value: setCurrencyValue(total * ++base_rate)
//                   },
//                   {
//                       name: 'Statement Requirement for Visa',
//                       value: setCurrencyValue(visaFee * ++base_rate)
//                   }
//               ]
//             : [
//                   {
//                       name: 'Statement Requirement for Visa',
//                       value: setCurrencyValue(visaFee * ++base_rate)
//                   }
//               ])
//     ];

//     return (
//         <div className="bg-white px-[40px] py-[30px] w-[572px] rounded-md capitalize ">
//             <button className="absolute top-10 right-10 bg-blueColor text-white rounded-full w-[30px] h-[30px] px-1 text-[22px]">
//                 <IoMdClose onClick={hideModal} />
//             </button>
//             <span className="font-bold text-[28px] block text-center">
//                 Bank Statement Calculator
//             </span>
//             <p className="font-medium text-lg text-darkGrayColor text-center">
//                 Lorem Ipsum is simply dummy text of the printing and type
//                 setting industry.{' '}
//             </p>
//             <div className="mt-4 overflow-hidden rounded">
//                 <table className="border table w-full">
//                     <tbody className="text-center">
//                         {data.map(({ name, value }) => (
//                             <tr
//                                 key={'statement--' + name}
//                                 className="odd:bg-blueColor odd:bg-opacity-10 even:bg-gray-50 border-b overflow-hidden rounded "
//                             >
//                                 <th className="w-3/4 py-3 pl-5 text-left text-lg font-bold text-mainTextColor">
//                                     {name}
//                                 </th>
//                                 <td className="w-1/4 pr-5 font-medium text-lg text-lightGrayColor">
//                                     {value}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default BankStatementCalculate;
// FORMULAS FOR COURSE OPTIONS

// Bank Statement Calculation for Australia:

// 1st Year Course Fee (Gross) (Gross Fee means without deducting any scholarship)
// Minus
// Scholarship Amount (Scholarship amount only be deducted if the type of scholarship is “Guaranteed”)
// Plus
// One Year Living Expenses = (AUD 29,710)
// Plus
// Travelling Cost = (AUD 2000)
// Plus
// Overseas Student Health Cover (OSHC) = (AUD 1500 for 2 Years Postgraduate Programs, AUD 2250 for 3 Years Bachelors and AUD 3000 for 4 Years Bachelors Programs) (It is actually AUD 750 per year)
// Equals To:
// Bank Statement required by the University
// Minus
// Initial Deposit
// Equals To:
// Bank Statement required for Visa

// Bank Statement Calculation for UK:

// 1st Year Course Fee (Gross) (Gross Fee means without deducting any scholarship)
// Minus
// Scholarship Amount (Scholarship amount only be deducted if the type of scholarship is “Guaranteed”)
// Plus
// One Year Living Expenses (Living expenses are GBP 12006 if the course is offered in London and GBP 9207 if the course is offered outside of London. This will be linked to the campus location of the course. If it is London, add GBP 12006 in the Bank Statement Calculation, if it is other than London, add GBP 9207 in the Bank Statement Calculation.
// Minus
// Initial Deposit
// Equals To:
// Bank Statement Required for Visa
