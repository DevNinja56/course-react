import React from 'react';
import { modalType } from '@/store/slices/ui.slice';
import { FiEdit } from 'react-icons/fi';
import { useUserAuth } from '@/hooks/auth';
import { useUi } from '@/hooks/user-interface';

const PersonalInfo = () => {
    const { user } = useUserAuth();
    const { updateModal } = useUi();
    return (
        <div className="lg:flex flex-col w-full lg:w-[67%]  ">
            <div className="rounded-[10px] border border-borderColor px-11 pt-11 pb-4 flex flex-col gap-y-6 relative ">
                <button
                    className="absolute top-2 right-3 p-5 "
                    onClick={() =>
                        updateModal({
                            type: modalType.update_user_info,
                            state: {}
                        })
                    }
                >
                    <FiEdit />
                </button>
                <div className="border-b border-personalInfoBorderColor pb-5 flex flex-col gap-y-2 text-mainTextColor">
                    <p>Name</p>
                    <h1 className="text-xl font-semibold">{user.name}</h1>
                </div>
                <div className="border-b border-personalInfoBorderColor pb-5 flex flex-col gap-y-2 text-mainTextColor">
                    <p>Email</p>
                    <h1 className="text-xl font-semibold">{user.email}</h1>
                </div>
                <div className="border-b border-personalInfoBorderColor pb-5 flex flex-col gap-y-2 text-mainTextColor">
                    <p>Phone</p>
                    <h1 className="text-xl font-semibold">
                        {user.phone_number}
                    </h1>
                </div>
                <div className="pb-5 flex flex-col gap-y-2 text-mainTextColor">
                    <p>Address</p>
                    <h1 className="text-xl font-semibold">
                        {user?.address ?? 'No Address'}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
