import { useUi } from '@/hooks/user-interface';
import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from 'react-share';

interface ModalState {
    name: string;
    id: string;
}

const ShareModal = () => {
    const { hideModal, modalState } = useUi();

    const typedModalState = modalState as ModalState;

    return (
        <div className="bg-white p-10 border-4 border-[#CCCCCC] rounded-lg relative ">
            <GrFormClose
                onClick={hideModal}
                className="absolute top-3 right-3 cursor-pointer text-xl"
            />
            <div className="flex items-center gap-3">
                <FacebookShareButton
                    url={`https://course-react-three.vercel.app/${typedModalState.name}/${typedModalState.id}`}
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <WhatsappShareButton
                    url={`https://course-react-three.vercel.app/${typedModalState.name}/${typedModalState.id}`}
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <LinkedinShareButton
                    url={`https://course-react-three.vercel.app/${typedModalState.name}/${typedModalState.id}`}
                >
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <TwitterShareButton
                    url={`https://course-react-three.vercel.app/${typedModalState.name}/${typedModalState.id}`}
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
            </div>
        </div>
    );
};

export default ShareModal;
