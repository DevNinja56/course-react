import { useCurrency } from '@/hooks/currency';
import { useCalculate } from '@/hooks/initial-deposit-calculate';
import { useUi } from '@/hooks/user-interface';
import { singleCourseType } from '@/types';
import React from 'react';
import { IoMdClose } from 'react-icons/io';

const BankStatementCalculate = () => {
    const { modalState, hideModal } = useUi() as {
        modalState: singleCourseType;
        hideModal: () => void;
    };
    const { initialDeposit: calculateDeposit } = useCalculate();

    const {
        tuitionFee,
        monthDuration: [duration],
        institute,
        initialDeposit: listOfInitialDeposit,
        scholarship: [scholarship]
    } = modalState;
    const [{ amount: initialDeposit }] = listOfInitialDeposit;
    const { setCurrencyValue } = useCurrency();
    const isLiveAustralia = institute.country.name
        .toLowerCase()
        .includes('australia');
    const isLiveLondon = institute.location.toLowerCase().includes('london');
    const livingCost = isLiveAustralia ? 24505 : isLiveLondon ? 12006 : 9207;
    const travelingCost = 2000;
    const oshc = 700 * +duration;
    const total = tuitionFee + livingCost + travelingCost + oshc;

    let initialDepositValue = calculateDeposit(
        initialDeposit,
        tuitionFee,
        scholarship.amount,
        true
    );

    initialDepositValue =
        typeof initialDepositValue === 'number' ? initialDepositValue : 0;

    const visaFee = isLiveAustralia
        ? total - initialDepositValue - oshc
        : tuitionFee - initialDepositValue + livingCost;
    const currency = isLiveAustralia ? 'AUD' : 'GBP';

    const data = [
        {
            name: 'Annual Tuition Fee',
            value: setCurrencyValue(tuitionFee, currency)
        },
        {
            name: 'Initial Deposit',
            value: setCurrencyValue(initialDepositValue, currency)
        },
        {
            name: 'Living Cost',
            value: setCurrencyValue(livingCost, currency)
        },
        ...(isLiveAustralia
            ? [
                  {
                      name: 'Traveling Cost',
                      value: setCurrencyValue(travelingCost, currency)
                  },
                  {
                      name: 'OSHC',
                      value: setCurrencyValue(oshc, currency)
                  },
                  {
                      name: 'Statement Requirement by University',
                      value: setCurrencyValue(total, currency)
                  },
                  {
                      name: 'Statement Requirement for Visa',
                      value: setCurrencyValue(visaFee, currency)
                  }
              ]
            : [
                  {
                      name: 'Statement Requirement for Visa',
                      value: setCurrencyValue(visaFee, currency)
                  }
              ])
    ];

    return (
        <div className="bg-white px-[40px] py-[30px] w-[572px] rounded-md ">
            <button className="absolute top-10 right-10 bg-blueColor text-white rounded-full w-[30px] h-[30px] px-1 text-[22px]">
                <IoMdClose onClick={hideModal} />
            </button>
            <span className="font-bold text-[28px] block text-center">
                Bank Statement Calculator
            </span>
            <p className="font-medium text-lg text-darkGrayColor text-center">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.{' '}
            </p>
            <div className="mt-4 overflow-hidden rounded">
                <table className="border table w-full">
                    <tbody className="text-center">
                        {data.map(({ name, value }) => (
                            <tr
                                key={'statement--' + name}
                                className="odd:bg-blueColor odd:bg-opacity-10 even:bg-gray-50 border-b overflow-hidden rounded "
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
