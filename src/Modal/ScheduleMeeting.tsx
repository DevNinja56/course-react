import React, { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import Button from '@/components/Button';
import { useUi } from '@/hooks/user-interface';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdCancel, MdError } from 'react-icons/md';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa6';
import { useGetCounsellorScheduleQuery } from '@/store/slices/allRequests';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { fetchRequest } from '@/utils/axios/fetch';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { applyTypes } from '@/types';

interface OptionType {
    value: string;
    label: string;
}

interface requestProps {
    startTime: string;
    endTime: string;
    date: string;
    counsellorId?: string | undefined;
    applicationId: string;
}

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
    const { hideModal, modalState } = useUi();
    const { selectedCourse, applyData } = modalState as {
        selectedCourse: applyTypes;
        applyData: applyTypes;
    };

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<OptionType | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { id } = router.query;

    const scheduleMeeting = (
        startTime: string,
        endTime: string,
        date: string,
        counsellorId: string | undefined,
        applicationId: string
    ) => {
        const requestBody: requestProps = {
            startTime,
            endTime,
            date,
            applicationId
        };

        if (counsellorId) {
            requestBody.counsellorId = counsellorId;
        }

        setIsLoading(true);

        fetchRequest({
            url: API_ENDPOINTS.SCHEDULE,
            body: requestBody,
            type: 'post'
        })
            .then(() => {
                toast.success('Meeting scheduled successfully');
            })
            .catch((err) =>
                toast.error(
                    err.response?.data?.message ??
                        'An error occurred while scheduling the meeting'
                )
            )
            .finally(() => setIsLoading(false));
    };

    const { data, error: queryError } = useGetCounsellorScheduleQuery(
        {
            id: selectedCourse.counsellor?.id || '',
            date: startDate ? startDate.toISOString().split('T')[0] : ''
        },
        { skip: !startDate }
    );

    const timeOptions =
        (data as { startTime: string; endTime: string }[])?.map((slot) => ({
            value: slot.startTime,
            label: `${slot.startTime} - ${slot.endTime}`
        })) || [];

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
        const startTime = selectedTime.value;
        const endTime = selectedTime.label.split(' - ')[1];
        const date = startDate.toISOString().split('T')[0];

        if (typeof id === 'string') {
            scheduleMeeting(
                startTime,
                endTime,
                date,
                selectedCourse.counsellor?.id,
                id
            );
        } else {
            setError('Invalid application ID');
        }
        hideModal();
    };

    const meetingTime = new Date(
        `${applyData?.schedule?.date}T${applyData?.schedule?.startTime}`
    );
    const now = new Date();
    const timeDiff = meetingTime.getTime() - now.getTime();
    const fifteenMinutesInMs = 15 * 60 * 1000;

    const shouldShowMeetingURL = timeDiff <= fifteenMinutesInMs && timeDiff > 0;

    if (applyData?.schedule?.status === 'accepted') {
        return (
            <div className="flex flex-col w-[400px] bg-white rounded-xl p-6 shadow-lg relative">
                <MdCancel
                    className="rounded-full text-blue-500 w-7 h-7 absolute right-7 cursor-pointer"
                    onClick={hideModal}
                />
                <h1 className="text-2xl font-bold text-left">
                    Meeting Accepted
                </h1>
                <p className="py-2">Your meeting has been accepted.</p>
                <div className="flex items-center gap-3 py-2">
                    <FaRegCalendarAlt className="text-[35px]" />
                    <div className="flex flex-col">
                        <p>Date</p>
                        <p className="font-bold">{applyData?.schedule?.date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 py-2">
                    <FaRegClock className="text-[35px]" />
                    <div className="flex flex-col">
                        <p>Time</p>
                        <p className="font-bold">
                            {applyData?.schedule?.startTime} -{' '}
                            {applyData?.schedule?.endTime}
                        </p>
                    </div>
                </div>
                {shouldShowMeetingURL ? (
                    <div className="py-2 text-right">
                        <a
                            href={applyData?.schedule?.meetingUrl}
                            className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-200 hover:bg-blue-600"
                        >
                            Join Meeting
                        </a>
                    </div>
                ) : (
                    <p className="text-gray-500 py-2">
                        The meeting link will be available 15 minutes before the
                        start time.
                    </p>
                )}
            </div>
        );
    }

    if (applyData?.schedule?.status === 'pending') {
        return (
            <div className="flex flex-col w-[400px] bg-white rounded-xl p-6 shadow-lg">
                <MdCancel
                    className="rounded-full text-blue-500 w-7 h-7 absolute right-7 cursor-pointer"
                    onClick={hideModal}
                />
                <h1 className="text-2xl font-bold text-left">
                    Scheduling Meeting...
                </h1>
                <p className="py-2">
                    Your meeting is currently being scheduled.
                </p>
                <div className="flex items-center gap-3 py-2">
                    <FaRegCalendarAlt className="text-[35px]" />
                    <div className="flex flex-col">
                        <p>Date</p>
                        <p className="font-bold">{applyData?.schedule?.date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 py-2">
                    <FaRegClock className="text-[35px]" />
                    <div className="flex flex-col">
                        <p>Time</p>
                        <p className="font-bold">
                            {applyData?.schedule?.startTime} -{' '}
                            {applyData?.schedule?.endTime}
                        </p>
                    </div>
                </div>
                {shouldShowMeetingURL && (
                    <div className="py-2">
                        <a
                            href={applyData?.schedule?.meetingUrl}
                            className="text-blue-500 underline"
                        >
                            Join Meeting
                        </a>
                    </div>
                )}
            </div>
        );
    }

    if (applyData?.schedule?.status === 'rejected') {
        return (
            <div className="relative flex flex-col w-[400px] bg-white rounded-xl p-6 shadow-lg">
                <MdCancel
                    className="rounded-full text-blue-500 w-7 h-7 absolute right-7 cursor-pointer"
                    onClick={hideModal}
                />
                <div className="flex items-center space-x-3 mb-4">
                    <MdError className="text-red-500 w-8 h-8" />
                    <h1 className="text-2xl font-bold text-gray-800">
                        Meeting Rejected
                    </h1>
                </div>
                <p className="text-lg font-semibold text-red-500 mb-2">
                    Reason for rejection:
                </p>
                <p className="text-gray-700">{applyData?.schedule?.reason}</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col w-[400px] bg-white rounded-xl p-6 shadow-lg">
            <MdCancel
                className="rounded-full text-blue-500 w-7 h-7 absolute cursor-pointer right-7"
                onClick={hideModal}
            />
            <h1 className="text-2xl font-bold text-center mb-6">
                Schedule Meeting
            </h1>

            {error && <p className="text-red-500 mb-4">{error}</p>}
            {queryError && (
                <p className="text-red-500 mb-4">Error fetching schedule.</p>
            )}

            <div className="mb-4">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                        setStartDate(date);
                        if (date) setError(null);
                    }}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-4 placeholder:font-bold placeholder:text-[#a0aec0]"
                    placeholderText="Select Date"
                    popperPlacement="bottom"
                    minDate={new Date()}
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
                    isDisabled={!startDate || timeOptions.length === 0}
                />
            </div>

            <Button
                text={isLoading ? 'Scheduling...' : 'Confirm'}
                className="bg-[#2c79ff] text-white text-lg py-3 rounded-lg w-full font-semibold"
                onClick={handleConfirm}
                disabled={isLoading}
            />
        </div>
    );
};
