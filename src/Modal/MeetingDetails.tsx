import Button from '@/components/Button';
import { useUi } from '@/hooks/user-interface';
import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa6';
import { MdCancel } from 'react-icons/md';

export const MeetingDetails = () => {
    const { hideModal } = useUi();
    return (
        <div className="flex flex-col w-[400px] bg-white rounded-xl p-6 shadow-lg">
            <div className="flex justify-end">
                <MdCancel
                    className="rounded-full text-blue-500 w-7 h-7 flex items-center justify-center cursor-pointer"
                    onClick={hideModal}
                />
            </div>
            <h1 className="text-2xl font-bold text-left">Meeting Details</h1>
            <p className="py-2">
                Your meeting with <span className="font-bold">Saqib Shah</span>{' '}
                has been successfully scheduled!
            </p>
            <div className="flex items-center gap-3 py-2">
                <FaRegCalendarAlt className="text-[35px]" />
                <div className="flex flex-col">
                    <p>Date</p>
                    <p className="font-bold">October 5,2024</p>
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex items-center gap-3 py-2">
                    <FaRegClock className="text-[35px]" />
                    <div className="flex flex-col">
                        <p>Time</p>
                        <p className="font-bold">01:30 PM</p>
                    </div>
                </div>
            </div>

            <Button
                text="Confirm"
                className="bg-[#2c79ff] text-white text-lg py-3 rounded-lg w-full font-semibold my-2"
                onClick={() => {}}
            />
        </div>
    );
};
