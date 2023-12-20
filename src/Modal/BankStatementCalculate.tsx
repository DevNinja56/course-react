import { useUi } from '@/hooks/user-interface';
import { singleCourseType } from '@/types';
import { setCurrencyValue } from '@/utils/currencyValue';
import React from 'react';
import { IoMdClose } from 'react-icons/io';

const BankStatementCalculate = () => {
    const { modalState: course, hideModal } = useUi() as {
        modalState: singleCourseType;
        hideModal: () => void;
    };
    const { initialDeposit, tuitionFee, duration, institute } = course;
    const isLiveAustralia = institute.country.name
        .toLowerCase()
        .includes('australia');
    const isLiveLondon = institute.location.toLowerCase().includes('london');
    const livingCost = isLiveAustralia ? 24505 : isLiveLondon ? 12006 : 9207;
    const travelingCost = 2000;
    const oshc = 700 * duration;
    const total = tuitionFee + livingCost + travelingCost + oshc;
    const visaFee = isLiveAustralia
        ? total - initialDeposit - oshc
        : tuitionFee - initialDeposit + livingCost;
    const currency = isLiveAustralia ? 'AED' : 'GBP';

    const data = [
        {
            name: 'Annual Tuition Fee',
            value: setCurrencyValue(tuitionFee, currency)
        },
        {
            name: 'Initial Deposit',
            value: setCurrencyValue(initialDeposit, currency)
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
        <div className="bg-white p-5 w-[450px] rounded-md ">
            <button className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-0.5">
                <IoMdClose onClick={hideModal} />
            </button>
            <h3 className="font-bold text-2xl text-center">
                Bank Statement Calculator
            </h3>
            <div className="my-8">
                <table className="border table w-full ">
                    <tbody className="text-center">
                        {data.map(({ name, value }) => (
                            <tr
                                key={'statement--' + name}
                                className="odd:bg-white even:bg-gray-50 border-b "
                            >
                                <th className="w-3/4 p-2">{name}</th>
                                <td className="w-1/4">{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BankStatementCalculate;
