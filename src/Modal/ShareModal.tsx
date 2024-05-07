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
        <div className="bg-white h-52 w-80 rounded-xl relative grid px-4 py-3 border-2 border-blueColor shadow-xl hover:scale-110 duration-500">
            <div className="flex items-center justify-between h-8 border-b-2 py-6">
                <h1 className="text-xl font-bold text-mainTextColor">
                    Share Your Course
                </h1>
                <GrFormClose
                    onClick={hideModal}
                    className="cursor-pointer text-3xl bg-redColor rounded-full text-white"
                />
            </div>
            <h1 className="text-grayColor font-medium">
                Share this link via
            </h1>
            <div className="flex items-center bg-white w-full justify-between">
                <FacebookShareButton
                    className="hover:scale-125 duration-500"
                    url={`${window.location.origin}/${typedModalState.name}/${typedModalState.id}`}
                >
                    <FacebookIcon size={50} round />
                </FacebookShareButton>
                <WhatsappShareButton
                    className="hover:scale-125 duration-500"
                    url={`${window.location.origin}/${typedModalState.name}/${typedModalState.id}`}
                >
                    <WhatsappIcon size={50} round />
                </WhatsappShareButton>
                <LinkedinShareButton
                    className="hover:scale-125 duration-500"
                    url={`${window.location.origin}/${typedModalState.name}/${typedModalState.id}`}
                >
                    <LinkedinIcon size={50} round />
                </LinkedinShareButton>
                <TwitterShareButton
                    className="hover:scale-125 duration-500"
                    url={`${window.location.origin}/${typedModalState.name}/${typedModalState.id}`}
                >
                    <TwitterIcon size={50} round />
                </TwitterShareButton>
            </div>
        </div>
    );
};

export default ShareModal;
