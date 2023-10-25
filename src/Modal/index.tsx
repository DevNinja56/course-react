import React from 'react';
import Modal from '@/components/Modal';
import { useUi } from '@/hooks/user-interface';
import { modalType } from '@/store/slices/ui.slice';
import ResetPassword from './ResetPassword.modal';
import CompareUniversityModal from './CompareUniversity';
import UpdateUserInfo from './UpdateUser';
import LoginConfirmation from './LoginConfirmation';

const ModalWraper = () => {
    const { modal } = useUi();

    const AllModal = {
        [modalType.none]: <></>,
        [modalType.reset_password]: <ResetPassword />,
        [modalType.compare_university]: <CompareUniversityModal />,
        [modalType.update_user_info]: <UpdateUserInfo />,
        [modalType.login_confirmation]: <LoginConfirmation />
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
