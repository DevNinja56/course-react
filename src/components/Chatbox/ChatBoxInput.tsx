import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { MessageInterface } from '@/types';
import { BASE_URL } from '@/utils/axios';
import { fetchRequest } from '@/utils/axios/fetch';
import { getToken } from '@/utils/axios/token';
import axios from 'axios';
import EmojiPicker from 'emoji-picker-react';
import React, { SetStateAction, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { BsFillSendFill } from 'react-icons/bs';
import { FaFilePdf, FaMicrophone, FaPlus } from 'react-icons/fa6';
import { MdEmojiEmotions } from 'react-icons/md';

interface propTypes {
    applicationId: string;
    setMessage: React.Dispatch<
        SetStateAction<{ [key: number]: MessageInterface[] }>
    >;
    page: number;
}

const ChatBoxInput = ({ applicationId, setMessage, page }: propTypes) => {
    const [value, setValue] = useState<string>('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [uploadedFile, setUploadedFile] = useState<{
        type: 'image' | 'pdf';
        url: string;
    } | null>(null);
    const [isRecording, setIsRecording] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        fetchRequest({
            url: API_ENDPOINTS.MESSAGE,
            type: 'post',
            body: {
                application: applicationId,
                message: value,
                ...(uploadedFile?.url || audioUrl
                    ? { attachment: uploadedFile?.url || audioUrl }
                    : {})
            }
        })
            .then((message) => {
                setValue('');
                setUploadedFile(null);
                setAudioUrl(null);
                setMessage((prevValue) => {
                    const currentPageMessages = prevValue[page] || [];
                    const isMessageAlreadyPresent = currentPageMessages.some(
                        (msg) => msg._id === message?.data?._id
                    );

                    if (!isMessageAlreadyPresent) {
                        const updatedMessage: MessageInterface = {
                            message: message?.data?.message,
                            _id: message?.data?._id,
                            attachment: message?.data?.attachment,
                            createdAt: message?.data?.createdAt,
                            from: message?.data?.from
                        };

                        return {
                            ...prevValue,
                            [page]: [updatedMessage, ...currentPageMessages]
                        };
                    }

                    return prevValue;
                });
            })
            .catch((err) => {
                toast.error(err);
            });
    };

    const handleS3FileUpload = async (file: File) => {
        const token = getToken();
        try {
            const formData = new FormData();

            formData.append('file', file);
            formData.append('bucketName', 'course-options-assets-ragzon');
            formData.append('folderName', 'attachments');

            const response = await axios.post(
                BASE_URL + API_ENDPOINTS.FILE_S3_UPLOAD + '?isDownload=false',
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            return response.data.data.Location;
        } catch (error) {
            console.error('Error uploading file:', error);
            return null;
        }
    };

    const handleFileUpload = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const files = event.target.files;
        if (files) {
            const file = files[0];
            const fileType = file.type.startsWith('image/') ? 'image' : 'pdf';
            const fileUrl = await handleS3FileUpload(file);
            if (fileUrl) {
                setUploadedFile({ type: fileType, url: fileUrl });
            }
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }
        setRecordingTime(0);
    };

    const addAudioMessage = async (audioBlob: Blob) => {
        try {
            const file = new File([audioBlob], 'recording.webm', {
                type: 'audio/webm'
            });

            const url = await handleS3FileUpload(file);
            if (url) {
                fetchRequest({
                    url: API_ENDPOINTS.MESSAGE,
                    type: 'post',
                    body: {
                        application: applicationId,
                        ...(value === '' ? {} : { message: value }),
                        ...(uploadedFile?.url || url
                            ? { attachment: uploadedFile?.url || url }
                            : {})
                    }
                })
                    .then((message) => {
                        setValue('');
                        setUploadedFile(null);
                        setMessage((prevValue) => {
                            const currentPageMessages = prevValue[page] || [];
                            const isMessageAlreadyPresent =
                                currentPageMessages.some(
                                    (msg) => msg._id === message?.data?._id
                                );

                            if (!isMessageAlreadyPresent) {
                                const updatedMessage: MessageInterface = {
                                    message: message?.data?.message,
                                    _id: message?.data?._id,
                                    attachment: message?.data?.attachment,
                                    createdAt: message?.data?.createdAt,
                                    from: message?.data?.from
                                };

                                return {
                                    ...prevValue,
                                    [page]: [
                                        updatedMessage,
                                        ...currentPageMessages
                                    ]
                                };
                            }

                            return prevValue;
                        });
                    })
                    .catch((err) => {
                        toast.error(err);
                    });
            }
        } catch (error) {
            console.error('Error adding audio message:', error);
        }
    };

    const startRecording = async () => {
        setIsRecording(true);
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true
        });
        mediaRecorderRef.current = new MediaRecorder(stream);
        audioChunksRef.current = [];
        setRecordingTime(0);

        mediaRecorderRef.current.ondataavailable = (event) => {
            audioChunksRef.current.push(event.data);
        };

        const timer = setInterval(() => {
            setRecordingTime((prev) => prev + 1);
        }, 1000);

        mediaRecorderRef.current.onstop = () => {
            clearInterval(timer);
            const audioBlob = new Blob(audioChunksRef.current, {
                type: 'audio/webm'
            });
            addAudioMessage(audioBlob);
            setIsRecording(false);
        };

        mediaRecorderRef.current.start();
    };

    return (
        <>
            {uploadedFile && (
                <div className="flex items-center gap-2 mt-4">
                    {uploadedFile.type === 'image' ? (
                        <img
                            src={uploadedFile.url}
                            alt="uploaded"
                            className="w-10 h-10 rounded"
                        />
                    ) : (
                        <FaFilePdf className="text-red-500 w-10 h-10" />
                    )}
                    <span>
                        {uploadedFile.type === 'image'
                            ? 'Image uploaded'
                            : 'PDF uploaded'}
                    </span>
                </div>
            )}
            <div className="bg-[#2c79ff] h-14 w-full flex gap-4 px-6 items-center justify-between">
                <div className="flex gap-3 justify-center relative">
                    <input
                        type="file"
                        accept="image/*,application/pdf"
                        className="hidden"
                        onChange={handleFileUpload}
                        id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                        <FaPlus className="text-white text-[20px]" />
                    </label>
                    <MdEmojiEmotions
                        className="text-white text-[20px] cursor-pointer"
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    />
                    {showEmojiPicker && (
                        <div className="absolute bottom-10 left-0 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-sm:w-[200px] w-fit h-[300px] overflow-hidden">
                            <div className="h-full overflow-y-hidden">
                                <EmojiPicker
                                    onEmojiClick={(emojiObject) =>
                                        setValue(
                                            (prev) => prev + emojiObject.emoji
                                        )
                                    }
                                />
                            </div>
                        </div>
                    )}
                </div>
                <form onSubmit={handleSubmit} className="relative w-full">
                    <input
                        type="text"
                        placeholder="Message..."
                        className="w-full px-4 py-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 bg-[#478aff] placeholder:text-white placeholder:opacity-70 text-white placeholder:text-xs"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button type="submit" className="absolute right-3 top-1/2">
                        <BsFillSendFill className="transform -translate-y-1/2 text-white cursor-pointer" />
                    </button>
                </form>
                <div className="flex gap-2 items-center">
                    <FaMicrophone
                        className={`text-[20px] cursor-pointer transition duration-200 ${isRecording ? 'text-red-300' : 'text-white'}`}
                        onClick={isRecording ? stopRecording : startRecording}
                    />
                    <span
                        className={`flex items-center ${!isRecording && 'hidden'}`}
                    >
                        <div className="audioRecorder text-red-300"></div>
                        <p className="ml-2 w-5 text-white">{recordingTime}s</p>
                    </span>
                </div>
            </div>
        </>
    );
};

export default ChatBoxInput;
