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
import ShareModal from './ShareModal';
import StartApplication from './StartApplication';
import CancelApplication from './CancelApplication';
import UploadUserDocuments from './UploadUserDocuments';
import UcasPointCalculate from './UcasPointCalculate';
import { ScheduleMeeting } from './ScheduleMeeting';

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
        [modalType.start_application]: <StartApplication />,
        [modalType.cancel_application]: <CancelApplication />,
        [modalType.share_modal]: <ShareModal />,
        [modalType.upload_user_documents]: <UploadUserDocuments />,
        [modalType.schedule_meeting]: <ScheduleMeeting/>,
        [modalType.ucas_calculator]: <UcasPointCalculate />,
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
