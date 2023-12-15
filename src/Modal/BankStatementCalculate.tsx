import { useUi } from '@/hooks/user-interface';
import { courseType } from '@/types';
import React from 'react';

const BankStatementCalculate = () => {
    const { modalState } = useUi();
    const course = modalState as courseType;
    console.log(course);
    return (
        <div className="bg-white p-5 w-[450px] rounded-md min-h-[45vh]">
            <h3 className="font-bold text-2xl text-center">
                Bank Statement Requirement
            </h3>
        </div>
    );
};

export default BankStatementCalculate;
