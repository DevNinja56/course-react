import { useUi } from '@/hooks/user-interface';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Modal: React.FC<{
    children: React.ReactElement;
    onClose?: () => void;
}> = ({ children, onClose }) => {
    const { hideModal } = useUi();
    const router = useRouter();

    useEffect(() => {
        const handleCloseModal = () => {
            onClose ? onClose() : hideModal();
        };

        router.events.on('routeChangeStart', handleCloseModal);

        return () => {
            router.events.off('routeChangeStart', handleCloseModal);
        };
    }, [router, onClose, hideModal]);

    return (
        <motion.div
            className="fixed top-0 left-0 bg-black bg-opacity-25 w-screen h-screen z-[999] grid place-items-center overflow-auto"
            onClick={onClose ?? hideModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-5 relative "
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default Modal;
