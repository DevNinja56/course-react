import { MessageInterface } from '@/types';
import { formatMessageDate } from '@/utils/formateMessageDate';
import Image from 'next/image';
import React from 'react';
import { RxAvatar } from 'react-icons/rx';

interface propTypes {
    item: MessageInterface;
    counsellor: boolean;
}

const ChatBoxMessage = ({ item, counsellor }: propTypes) => {
    return (
        <div
            className={`flex justify-end items-center gap-1 w-full ${counsellor && 'flex-row-reverse'}`}
        >
            <div className="flex flex-col gap-1 mb-5">
                <div
                    className={`flex justify-end gap-1 items-center ${counsellor && 'flex-row-reverse'}`}
                >
                    <div className="text-sm font-bold">
                        {counsellor ? 'Counsellor' : item?.from?.name}
                    </div>
                    <div>
                        {item?.from?.avatar ? (
                            <Image
                                width={1224}
                                height={1224}
                                alt="message-avatar"
                                src={item?.from?.avatar}
                                className="h-7 w-7 rounded-full"
                            />
                        ) : (
                            <RxAvatar className="text-2xl" />
                        )}
                    </div>
                </div>
                <div
                    className={`flex justify-end items-center gap-1 ${counsellor && 'flex-row-reverse'}`}
                >
                    <h1 className="bg-[#2c79ff] px-3 py-1 text-white rounded-lg text-sm text-left max-w-[300px] w-fit flex flex-col gap-2">
                        {item?.message}
                        {item?.attachment && (
                            <>
                                {item.attachment.endsWith('.mp3') ||
                                item.attachment.endsWith('.webm') ? (
                                    <div className="w-52">
                                        <audio controls className="py-2 w-full">
                                            <source
                                                src={item.attachment}
                                                type={
                                                    item.attachment.endsWith(
                                                        '.mp3'
                                                    )
                                                        ? 'audio/mpeg'
                                                        : 'audio/webm'
                                                }
                                            />
                                            Your browser does not support the
                                            audio tag.
                                        </audio>
                                    </div>
                                ) : item.attachment.endsWith('.pdf') ? (
                                    <a
                                        href={item.attachment}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="w-[95%] flex flex-col md:hidden lg:block sm:hidden">
                                            <div className="w-full bg-BgColorPassport bg-opacity-5">
                                                <div className="w-full">
                                                    <div className="relative overflow-hidden pointer-events-none">
                                                        <embed
                                                            src={`${item.attachment}#toolbar=0&view=Fit&page=1#fullscreen`}
                                                            type="application/pdf"
                                                            width="290"
                                                            height="380"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ) : (
                                    <a
                                        href={item.attachment}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={item.attachment}
                                            alt="uploaded"
                                            className="py-1 text-sm text-center max-w-[200px]"
                                        />
                                    </a>
                                )}
                            </>
                        )}
                    </h1>
                </div>
                <h1 className={`text-[10px]`}>
                    {formatMessageDate(item.createdAt)}
                </h1>
            </div>
        </div>
    );
};

export default ChatBoxMessage;
