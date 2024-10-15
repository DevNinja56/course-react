import React, { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import Button from '@/components/Button';
import { useUi } from '@/hooks/user-interface';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdCancel } from 'react-icons/md';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa6';

interface OptionType {
    value: string;
    label: string;
}

const timeOptions: OptionType[] = [
    { value: '10:00 AM', label: '10:00 AM' },
    { value: '11:00 AM', label: '11:00 AM' },
    { value: '12:00 PM', label: '12:00 PM' },
    { value: '1:00 PM', label: '1:00 PM' },
    { value: '2:00 PM', label: '2:00 PM' },
    { value: '3:00 PM', label: '3:00 PM' },
    { value: '4:00 PM', label: '4:00 PM' },
    { value: '5:00 PM', label: '5:00 PM' },
    { value: '6:00 PM', label: '6:00 PM' },
    { value: '7:00 PM', label: '7:00 PM' },
    { value: '8:00 PM', label: '8:00 PM' },
    { value: '9:00 PM', label: '9:00 PM' },
    { value: '10:00 PM', label: '10:00 PM' }
];

const customStyles: StylesConfig<OptionType, false> = {
    control: (provided) => ({
        ...provided,
        padding: '6px',
        borderRadius: '0.5rem',
        borderColor: '#E2E8F0',
        boxShadow: 'none',
        '&:hover': {
            borderColor: '#A0AEC0'
        }
    }),
    indicatorSeparator: () => ({}),
    placeholder: (provided) => ({
        ...provided,
        fontWeight: 'bold',
        color: '#a0aec0'
    })
};

export const ScheduleMeeting = () => {
    const { hideModal } = useUi();
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<OptionType | null>(null);
    const [meetingScheduled, setMeetingScheduled] = useState(false);
    const [error, setError] = useState<string | null>(null); 
    const handleConfirm = () => {
            if (!startDate) {
            setError('Please select a date.');
            return;
        }
        if (!selectedTime) {
            setError('Please select a time.');
            return;
        }

        setError(null);
        setMeetingScheduled(true);
    };

    if (meetingScheduled) {
        return (
            <div className="flex flex-col w-[400px] bg-white rounded-xl p-6 shadow-lg">
                    <MdCancel
                        className="rounded-full text-blue-500 w-7 h-7 absolute right-10 cursor-pointer"
                        onClick={hideModal}
                    />
                <h1 className="text-2xl font-bold text-left">Meeting Details</h1>
                <p className="py-2">
                    Your meeting with <span className="font-bold">Counsellor</span>{' '}
                    has been successfully scheduled!
                </p>
                <div className="flex items-center gap-3 py-2">
                    <FaRegCalendarAlt className="text-[35px]" />
                    <div className="flex flex-col">
                        <p>Date</p>
                        <p className="font-bold">{startDate?.toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 py-2">
                    <FaRegClock className="text-[35px]" />
                    <div className="flex flex-col">
                        <p>Time</p>
                        <p className="font-bold">{selectedTime?.value}</p>
                    </div>
                </div>

                <Button
                    text="Confirm"
                    className="bg-[#2c79ff] text-white text-lg py-3 rounded-lg w-full font-semibold my-2"
                    onClick={() => {}}
                />
            </div>
        );
    }

    return (
        <div className="flex flex-col w-[400px] bg-white rounded-xl p-6 shadow-lg">
                <MdCancel
                    className="rounded-full text-blue-500 w-7 h-7 absolute cursor-pointer right-10"
                    onClick={hideModal}
                />
            <h1 className="text-2xl font-bold text-center mb-6">Schedule Meeting</h1>
            
            {error && <p className="text-red-500 mb-4">{error}</p>}

            <div className="mb-4">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                        setStartDate(date);
                        if (date) setError(null); 
                    }}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50
                    pl-4 placeholder:font-bold placeholder:text-[#a0aec0]"
                    placeholderText="Select Date"
                    popperPlacement="bottom"
                />
            </div>

            <div className="mb-6">
                <Select
                    placeholder="Select Time"
                    styles={customStyles}
                    options={timeOptions}
                    onChange={(option) => {
                        setSelectedTime(option);
                        if (option) setError(null); 
                    }}
                    isDisabled={!startDate}
                />
            </div>
            <Button
                text="Confirm"
                className="bg-[#2c79ff] text-white text-lg py-3 rounded-lg w-full font-semibold"
                onClick={handleConfirm}
            />
        </div>
    );
};

