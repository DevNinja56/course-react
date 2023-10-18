import React from 'react';
import Modal from '@/components/Modal';
import { useUi } from '@/hooks/user-interface';
import { modalType } from '@/store/slices/ui.slice';
import ResetPassword from './ResetPassword.modal';
import CompareUniversityModal from './CompareUniversity';

const ModalWraper = () => {
    const { modal } = useUi();

    const AllModal = {
        [modalType.none]: <></>,
        [modalType.reset_password]: <ResetPassword />,
        [modalType.compare_university]: <CompareUniversityModal />
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
