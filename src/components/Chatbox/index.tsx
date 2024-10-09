import { useEffect, useRef, useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { IoDocumentText } from 'react-icons/io5';
import { FaPlus, FaMicrophone } from 'react-icons/fa';
import { MdEmojiEmotions } from 'react-icons/md';
import { BsFillSendFill } from 'react-icons/bs';
import EmojiPicker from 'emoji-picker-react';
import { FaFilePdf } from 'react-icons/fa6';

const ChatBox = () => {
    type Message = {
        name: string;
        image: string;
        message: string;
        time: string;
        type: string;
        pdf?: string;
        audio?: string;
    };

    const [messages, setMessages] = useState<Message[]>([
        {
            name: 'You',
            image: '',
            message: "Hey, how's it going?",
            time: '10:15 AM',
            type: 'sent'
        },
        {
            name: 'Counsellor',
            image: '',
            message: "I'm good, thanks! How about you?",
            time: '10:16 AM',
            type: 'received'
        },
        {
            name: 'You',
            image: '',
            message: 'Just working on a project.',
            time: '10:17 AM',
            type: 'sent'
        },
        {
            name: 'Counsellor',
            image: '',
            message: 'Are you coming to the meeting?',
            time: '10:18 AM',
            type: 'received'
        },
        {
            name: 'You',
            image: '',
            message: "Yes, I'll be there shortly.",
            time: '10:19 AM',
            type: 'sent'
        },
        {
            name: 'Counsellor',
            image: '',
            message: 'Great! See you soon.',
            time: '10:20 AM',
            type: 'received'
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [uploadedFile, setUploadedFile] = useState<{
        type: 'image' | 'pdf';
        url: string;
    } | null>(null);
    const endOfMessagesRef = useRef<HTMLDivElement>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const [isRecording, setIsRecording] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }
        setRecordingTime(0);
    };

    const addAudioMessage = (audioURL: string) => {
        const newMessage = {
            name: 'You',
            image: '',
            message: 'Audio message:',
            time: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            }),
            type: 'sent',
            audio: audioURL
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
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

        mediaRecorderRef.current.onstop = () => {
            const audioBlob = new Blob(audioChunksRef.current, {
                type: 'audio/webm'
            });
            const audioURL = URL.createObjectURL(audioBlob);
            addAudioMessage(audioURL);
            setIsRecording(false);
        };

        mediaRecorderRef.current.start();

        const timer = setInterval(() => {
            setRecordingTime((prev) => prev + 1);
        }, 1000);

        mediaRecorderRef.current.onstop = () => {
            clearInterval(timer);
            const audioBlob = new Blob(audioChunksRef.current, {
                type: 'audio/webm'
            });
            const audioURL = URL.createObjectURL(audioBlob);
            addAudioMessage(audioURL);
            setIsRecording(false);
        };
    };

    const onEmojiClick = (emojiObject: { emoji: string }) => {
        setInputMessage((prev) => prev + emojiObject.emoji);
    };

    const handleSendMessage = () => {
        if (inputMessage.trim() || uploadedFile) {
            const newMessage = {
                name: 'You',
                image: uploadedFile?.type === 'image' ? uploadedFile.url : '',
                pdf: uploadedFile?.type === 'pdf' ? uploadedFile.url : '',
                message: inputMessage || (uploadedFile ? 'File uploaded:' : ''),
                time: new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                }),
                type: 'sent'
            };

            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setInputMessage('');
            setUploadedFile(null);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            Array.from(files).forEach((file) => {
                const fileURL = URL.createObjectURL(file);
                const fileType = file.type.startsWith('image/')
                    ? 'image'
                    : 'pdf';
                setUploadedFile({ type: fileType, url: fileURL });
            });
        }
    };

    useEffect(() => {
        if (endOfMessagesRef.current) {
            endOfMessagesRef.current.scrollTop =
                endOfMessagesRef.current.scrollHeight;
        }
    }, [messages, uploadedFile]);

    return (
        <div className="h-[500px] rounded-2xl overflow-hidden relative shadow-lg flex flex-col">
            <div className="bg-[#2c79ff] h-14 flex items-center px-6 justify-between">
                <div className="flex gap-1 justify-start items-center">
                    <RxAvatar className="text-[35px] text-white" />
                    <div>
                        <h1 className="text-white text-md font-bold">
                            Counsellor
                        </h1>
                        <p className="text-white text-xs">Last seen 3h ago</p>
                    </div>
                </div>
                <IoDocumentText className="text-[20px] text-white" />
            </div>

            <div
                className="flex-1 overflow-y-auto no-scrollbar bg-[url('/images/ChatBox/BackgroundPattern.png')] bg-cover bg-center bg-repeat bg-opacity-5 relative px-6 py-2 "
                ref={endOfMessagesRef}
            >
                <div className="text-center my-5 relative z-10">
                    <h1 className="text-black font-bold">
                        Counsellor accepted your message request.
                    </h1>
                    <p className="text-black">Share your documents here.</p>
                </div>
                <div className="flex justify-start items-center">
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
                </div>
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex justify-end items-center gap-1 ${message.type === 'sent' ? '' : 'flex-row-reverse'}`}
                    >
                        <div className="flex flex-col gap-1 mb-5">
                            <div
                                className={`flex justify-end gap-1 items-center ${message.type === 'sent' ? '' : 'flex-row-reverse'}`}
                            >
                                <div className="text-sm font-bold">
                                    {message.name}
                                </div>
                                <div>
                                    <RxAvatar className="text-2xl" />
                                </div>
                            </div>
                            <div
                                className={`flex justify-end items-center gap-1 ${message.type === 'sent' ? '' : 'flex-row-reverse'}`}
                            >
                                {message.pdf ? (
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
                                    <audio controls className="py-2 max-sm:w-56">
                                        <source
                                            src={message.audio}
                                            type="audio/webm"
                                        />
                                        Your browser does not support the audio
                                        tag.
                                    </audio>
                                ) : (
                                    <h1 className="bg-[#2c79ff] px-3 py-1 text-white rounded-lg text-sm text-left max-w-[300px] w-fit">
                                        {message.message}
                                    </h1>
                                )}
                            </div>
                            <h1
                                className={`text-[10px] ${message.type === 'sent' ? 'text-end' : 'text-start'}`}
                            >
                                {message.time} - 5hrs Ago
                            </h1>
                        </div>
                    </div>
                ))}
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
            </div>

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
                                <EmojiPicker onEmojiClick={onEmojiClick} />
                            </div>
                        </div>
                    )}
                </div>
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Message..."
                        className="w-full px-4 py-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 bg-[#478aff] placeholder:text-white placeholder:opacity-70 text-white placeholder:text-xs"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyUp={handleKeyPress}
                    />
                    <BsFillSendFill
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
                        onClick={handleSendMessage}
                    />
                </div>

                <div className="flex gap-2 items-center">
                    <FaMicrophone
                        className={`text-[20px] cursor-pointer transition duration-200 ${isRecording ? 'text-red-300' : 'text-white'}`}
                        onClick={isRecording ? stopRecording : startRecording}
                    />

                    <span
                        className={`flex items-center ${!isRecording &&  'hidden'}`}
                    >
                        <div className="audioRecorder text-red-300"></div>
                        <p className=" ml-2 w-5 text-white">{recordingTime}s</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
