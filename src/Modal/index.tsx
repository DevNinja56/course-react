import React from 'react';
import Modal from '@/components/Modal';
import { useUi } from '@/hooks/user-interface';
import { modalType } from '@/store/slices/ui.slice';
import ResetPassword from './ResetPassword.modal';

const ModalWraper = () => {
    const { modal } = useUi();

    const AllModal = {
        [modalType.none]: <></>,
        [modalType.reset_password]: <ResetPassword />
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
