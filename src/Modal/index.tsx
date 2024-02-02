import React from 'react';
import Modal from '@/components/Modal';
import { useUi } from '@/hooks/user-interface';
import { modalType } from '@/store/slices/ui.slice';
import dynamic from 'next/dynamic';
const ResetPassword = dynamic(() => import('./ResetPassword.modal'));
const CompareUniversityModal = dynamic(() => import('./CompareUniversity'));
const UpdateUserInfo = dynamic(() => import('./UpdateUser'));
const LoginConfirmation = dynamic(() => import('./LoginConfirmation'));
const ChangePassword = dynamic(() => import('./ChangePassword'));
const UpdateUserAcademicInfo = dynamic(
    () => import('./UpdateUserAcademicInfo')
);
import CurrencyConverter from './CurrencyConverter';
import BankStatementCalculate from './BankStatementCalculate';
import UserDetail from './UserDetail';
import CancelApplication from './CancelApplication';

const ModalWraper = () => {
    const { modal } = useUi();

    const AllModal = {
        [modalType.none]: <></>,
        [modalType.reset_password]: <ResetPassword />,
        [modalType.compare_university]: <CompareUniversityModal />,
        [modalType.update_user_info]: <UpdateUserInfo />,
        [modalType.update_academic_info]: <UpdateUserAcademicInfo />,
        [modalType.login_confirmation]: <LoginConfirmation />,
        [modalType.change_password]: <ChangePassword />,
        [modalType.currency_converter]: <CurrencyConverter />,
        [modalType.bank_statement_calculator]: <BankStatementCalculate />,
        [modalType.user_detail]: <UserDetail />,
        [modalType.cancel_application]: <CancelApplication />
    };

    return (
        <>
            {modal && (
                <Modal>
                    <>{AllModal[modal]}</>
                </Modal>
            )}
        </>
    );
};

export default ModalWraper;
