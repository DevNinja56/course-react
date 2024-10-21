import { useEffect, useRef, useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { IoDocumentText } from 'react-icons/io5';
import { usePusher } from '@/hooks/usePusher';
import { useParams } from 'next/navigation';
import { useGetMessagesQuery } from '@/store/slices/allRequests';
import { MessageInterface } from '@/types';
import toast from 'react-hot-toast';
import LoaderSpinner from '../LoaderSpinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useUserAuth } from '@/hooks/auth';
import ChatBoxMessage from './ChatBoxMessage';
import ChatBoxInput from './ChatBoxInput';
import { formatMessageDate } from '@/utils/formateMessageDate';

const ChatBox = () => {
    const { chatChannel } = usePusher();
    const { id: applicationId } = useParams();
    const [page, setPage] = useState(1);
    const [itemsByPage, setItemsByPage] = useState<{
        [key: number]: MessageInterface[];
    }>({});
    const [hasMore, setHasMore] = useState(true);
    const { user } = useUserAuth();
    const [counselorLastSeen, setCounselorLastSeen] = useState<string>();
    const [hasRunOnce, setHasRunOnce] = useState(false);

    const {
        data: response,
        isLoading: messageLoading,
        refetch: messagesRefetch
    } = useGetMessagesQuery(
        {
            page: page,
            limit: 10,
            applicationId: applicationId as string
        },
        {
            skip: !applicationId ? true : false
        }
    );

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setPage(1);
        setItemsByPage({});
        setHasMore(true);

        if (applicationId) {
            messagesRefetch();
        }

        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = 0;
        }
    }, [applicationId]);

    useEffect(() => {
        if (response?.data) {
            setItemsByPage((prevValue) => ({
                ...prevValue,
                [page]: response.data
            }));
            if (!response.nextPage || response.data.length < 10) {
                setHasMore(false);
            }
        }
    }, [response]);

    useEffect(() => {
        chatChannel.bind(
            `get-${applicationId}`,
            (message: MessageInterface) => {
                setItemsByPage((prevValue) => {
                    const currentPageMessages = prevValue[page] || [];

                    const isMessageAlreadyPresent = currentPageMessages.some(
                        (msg) => msg._id === message._id
                    );

                    if (!isMessageAlreadyPresent) {
                        return {
                            ...prevValue,
                            [page]: [message, ...currentPageMessages]
                        };
                    }

                    return prevValue;
                });
            }
        );


        return () => {
            chatChannel.unbind(`get-${applicationId}`);
        };
    }, [applicationId, page]);

    const fetchMoreData = async () => {
        try {
            if (response?.nextPage) {
                setPage((prev) => prev + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            toast.error('Failed to load more notifications');
            setHasMore(false);
        }
    };

    useEffect(() => {
        if (!hasRunOnce && Object.keys(itemsByPage).length > 0) {
            let lastSeen = '';

            Object.entries(itemsByPage).forEach(([, values]) => {
                if (values.length > 0) {
                    const filterCounsellor = values.filter(
                        (item) => item?.from?.id !== user.id
                    );
                    const lastOnlineCounsellor = filterCounsellor[0];

                    if (lastOnlineCounsellor) {
                        lastSeen = lastOnlineCounsellor?.createdAt;
                    }
                }
            });

            setCounselorLastSeen(lastSeen);

            setHasRunOnce(true);
        }
    }, [itemsByPage, user]);

    if (messageLoading) return <LoaderSpinner />;
    return (
        <div className="h-[496px] rounded-2xl overflow-hidden relative shadow-lg flex flex-col">
            <div className="bg-[#2c79ff] h-14 flex items-center px-6 justify-between">
                <div className="flex gap-1 justify-start items-center">
                    <RxAvatar className="text-[35px] text-white" />
                    <div>
                        <h1 className="text-white text-md font-bold">
                            Counsellor
                        </h1>
                        <p className="text-white text-xs">
                            Last seen{' '}
                            {formatMessageDate(counselorLastSeen ?? '')}
                        </p>
                    </div>
                </div>
                <IoDocumentText className="text-[20px] text-white" />
            </div>
            <div className="flex-1 overflow-y-auto no-scrollbar bg-[url('/images/ChatBox/BackgroundPattern.png')] bg-cover bg-center bg-repeat bg-opacity-5 relative pt-2">

                <div className="text-center my-5 relative z-10">
                    <h1 className="text-black font-bold">
                        Counsellor accepted your message request.
                    </h1>
                    <p className="text-black">Share your documents here.</p>
                </div>
                {/* <div className="flex justify-start items-center">
                    <div className="flex flex-col gap-1">
                        <img
                            src="/images/logo-icon.png"
                            className="w-5 h-5 rounded-full"
                            alt="profile-pic"
                        />
                        <div>
                            <h1 className="bg-[#2c79ff] px-3 py-1 text-white rounded-lg text-sm text-left">
                                <b>Documents Required</b>:
                                <br />
                                Passport (Mandatory)
                                <br />
                                Matriculation / O Level (Mandatory)
                                <br />
                                Intermediate / A Level (Mandatory)
                                <br />
                                Experience Letters
                                <br />
                                CV / Resume
                                <br />
                                Reference Letters
                                <br />
                                Statement of Purpose
                            </h1>
                        </div>
                        <h1 className="text-[10px] text-start">
                            {new Date().toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit'
                            })}{' '}
                            - Just now
                        </h1>
                    </div>
                </div> */}
                <div
                    id="scrollContainer"
                    ref={scrollContainerRef}
                    className="flex flex-col-reverse gap-7 items-center px-5 h-72 max-h-72 overflow-y-scroll no-scrollbar pt-7 w-full"
                >
                    <InfiniteScroll
                        dataLength={Object.values(itemsByPage).flat().length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={
                            <div className="w-full flex justify-center items-center mt-5">
                                <LoaderSpinner color="text-blue-500" />
                            </div>
                        }
                        inverse={true}
                        className="flex flex-col-reverse w-full"
                        scrollableTarget="scrollContainer"
                    >
                        <div className="flex flex-col-reverse gap-4 w-full">
                            {Object.entries(itemsByPage).map(([, values]) =>
                                values.map((item) => {
                                    const counsellor =
                                        item?.from?.id !== user?.id;

                                    return (
                                        <ChatBoxMessage
                                            key={'chat-messages--' + item?._id}
                                            item={item}
                                            counsellor={counsellor}
                                        />
                                    );
                                })
                            )}
                        </div>
                    </InfiniteScroll>
                </div>

                <ChatBoxInput
                    applicationId={applicationId as string}
                    setMessage={setItemsByPage}
                    page={page}
                />
            </div>
        </div>
    );
};

export default ChatBox;
