import React from 'react';

interface modalProps {
    setShowModal: (show: boolean) => void;
}

const CourseModal = ({ setShowModal }: modalProps) => {
    const hideModal = () => {
        setShowModal(false);
    };

    return (
        <div className="w-full">
            <div className="backgroundBlack fixed top-0 h-[100vh] w-full z-40 flex items-center justify-center">
                <div
                    style={{ border: '3px solid #CCCCCC' }}
                    className="w-[40%] rounded-[10px] flex flex-col items-center px-10 py-[20px] bg-white modal relative"
                >
                    <svg
                        onClick={hideModal}
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 384 512"
                        className="absolute top-3 right-3 cursor-pointer"
                    >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                    <h1 className="text-mainTextColor font-bold text-[36px] mb-5">
                        Select a Course
                    </h1>
                    <div className="flex flex-col gap-y-6 mb-7 w-full">
                        <input
                            className="py-[15px] pl-[25px] rounded-[10px] border border-grayColor outline-none font-semibold text-sm text-darkGrayColor"
                            placeholder="Select Country"
                        />
                        <input
                            className="py-[15px] pl-[25px] rounded-[10px] border border-grayColor outline-none font-semibold text-sm text-darkGrayColor"
                            placeholder="Select Institute"
                        />
                        <input
                            className="py-[15px] pl-[25px] rounded-[10px] border border-grayColor outline-none font-semibold text-sm text-darkGrayColor"
                            placeholder="Select Discipline"
                        />
                        <input
                            className="py-[15px] pl-[25px] rounded-[10px] border border-grayColor outline-none font-semibold text-sm text-darkGrayColor"
                            placeholder="Select Degree-Level"
                        />
                        <input
                            className="py-[15px] pl-[25px] rounded-[10px] border border-grayColor outline-none font-semibold text-sm text-darkGrayColor"
                            placeholder="Select Course"
                        />
                        <input
                            className="py-[15px] pl-[25px] rounded-[10px] border border-grayColor outline-none font-semibold text-sm text-darkGrayColor"
                            placeholder="Select Specialization"
                        />
                    </div>
                    <button className="w-full pt-4 pb-[15px] rounded-[10px] bg-blueColor text-white font-semibold">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseModal;
