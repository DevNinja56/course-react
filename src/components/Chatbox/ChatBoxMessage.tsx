import { MessageInterface } from '@/types';
import Image from 'next/image';
import React from 'react';
import { RxAvatar } from 'react-icons/rx';

interface propTypes {
    item: MessageInterface;
    counsellor: boolean;
}

const formatDate = (createdAt: string): string => {
    const now = new Date();
    const messageDate = new Date(createdAt);

    const timeDiff = now.getTime() - messageDate.getTime();

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    const formattedTime = messageDate.toLocaleTimeString('en-US', options);

    if (seconds < 60) {
        return `${formattedTime} - Just now`;
    }

    if (hours < 24) {
        if (minutes < 60) {
            return `${formattedTime} - ${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
        }
        return `${formattedTime} - ${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }

    const formattedDate = messageDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year:
            now.getFullYear() === messageDate.getFullYear()
                ? undefined
                : 'numeric'
    });

    return `${formattedTime} - ${formattedDate}`;
};

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
                    {/* {
message.pdf ? (
<div className="w-[95%] flex flex-col md:hidden lg:block sm:hidden">
<div className="w-full bg-BgColorPassport bg-opacity-5">
    <div className="w-full">
        <div className=" relative overflow-hidden pointer-events-none">
            <embed
                src={`${message.pdf}#toolbar=0&view=Fit&page=1#fullscreen`}
                type="application/pdf"
                width="290"
                height="380"
            />
        </div>
    </div>
</div>
</div>
) : message.image ? (
<img
src={message.image}
alt="uploaded"
className="py-1 text-sm text-center max-w-[200px]"
/>
) : message.audio ? (
<audio
controls
className="py-2 max-sm:w-56"
>
<source
    src={message.audio}
    type="audio/webm"
/>
Your browser does not support the audio
tag.
</audio>
) : ( */}
                    <h1 className="bg-[#2c79ff] px-3 py-1 text-white rounded-lg text-sm text-left max-w-[300px] w-fit flex flex-col gap-2">
                        {item?.message}
                        {item?.attachment && (
                            <>
                                <audio controls className="py-2 w-full">
                                    <source
                                        src={item?.attachment}
                                        type="audio/mpeg"
                                    />
                                    Your browser does not support the audio tag.
                                </audio>
                                <div className="w-[95%] flex flex-col md:hidden lg:block sm:hidden">
                                    <div className="w-full bg-BgColorPassport bg-opacity-5">
                                        <div className="w-full">
                                            <div className=" relative overflow-hidden pointer-events-none">
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
                            </>
                        )}
                    </h1>
                    {/* )} */}
                </div>
                <h1
                    className={`text-[10px] 
`}
                >
                    {formatDate(item.createdAt)}
                </h1>
            </div>
        </div>
    );
};

export default ChatBoxMessage;
