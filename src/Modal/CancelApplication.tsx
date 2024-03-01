import React from 'react';
import { useForm } from 'react-hook-form';
interface formType {
    reason: string;
}
const CancelApplication = () => {
    const {
        register,
        formState: { errors }
    } = useForm<formType>();
    return (
        <div className="bg-white p-6 rounded-[10px] w-full md:w/12 flex flex-col  gap-4 ">
            <h2 className="text-[23px] font-bold text-mainTextColor">
                Are you sure?
            </h2>
            <p className="text-base font-normal text-darkGrayColor">
                If you cancel, you will lose all progress on this application.
                You will have to start over if you change your mind.
            </p>
            <textarea
                {...register('reason', {
                    required: true
                })}
                className={`block p-2.5 w-full text-sm md:text-xl bg-gray-50 rounded-lg  resize-none outline-none  ${
                    errors.reason
                        ? 'text-red-600 border border-red-600'
                        : 'text-grayColor border border-grayColor focus:ring-blue-500 focus:border-blue-500'
                }`}
                placeholder="Reason for cancellation"
                rows={5}
            />
            {errors.reason && (
                <span className="text-xs mt-1 text-red-600 ">
                    {/* {errors.reason} */}
                </span>
            )}
            <div className="flex justify-between items-center pt-3">
                <button className="flex items-center gap-2 px-7 py-3 rounded-md text-lg font-semibold bg-[#D5E4FF]  text-blueColor">
                    Back
                </button>
                <button className="flex items-center gap-2 px-9 py-3 rounded-md text-lg font-semibold bg-redColor  text-white">
                    Cancel Application
                </button>
            </div>
        </div>
    );
};

export default CancelApplication;
