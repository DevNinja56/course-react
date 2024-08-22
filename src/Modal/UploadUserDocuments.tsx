import InputFile from '@/components/Input/InputFile';
import InputWithBtn from '@/components/Input/InputWithBtn';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { useUserAuth } from '@/hooks/auth';
import { useUi } from '@/hooks/user-interface';
import { fetchRequest } from '@/utils/axios/fetch';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { IoMdClose } from 'react-icons/io';

const UploadUserDocuments = () => {
    const [inputLists, setInputLists] = useState([
        'Identity Documents',
        'Academic Documents',
        'English Language Test Documents',
        'Other Documents'
    ]);
    const { hideModal } = useUi();
    const { user, updateUserDetails } = useUserAuth();
    const [showInput, setShowInput] = useState(false);

    const handleUploadUserDocuments = async (
        e: React.ChangeEvent<HTMLInputElement>,
        name: string
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size > 5000000) {
            alert('File size should be less than 5MB');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            toast.loading('Uploading...');
            const uploadResponse = await fetchRequest({
                url: API_ENDPOINTS.FILE_UPLOAD,
                type: 'post',
                body: formData
            });

            const updatedUser = await fetchRequest({
                url: API_ENDPOINTS.USER.UPDATE_PROFILE.replace(':id', user.id),
                type: 'patch',
                body: {
                    documents: [
                        ...user.documents,
                        {
                            name,
                            url: uploadResponse.data.Location
                        }
                    ]
                }
            });

            updateUserDetails(updatedUser.data);

            toast.remove();
            hideModal();
            toast.success('File Uploaded');
        } catch (error) {
            toast.error('File Upload Failed');
        }
    };

    return (
        <div
            className="bg-white modal relative border-[3px] border-[#CCCCCC] p-10 rounded-xl "
            style={{ width: '450px' }}
        >
            <IoMdClose
                className="absolute top-3 right-3 cursor-pointer"
                onClick={hideModal}
            />

            <h1 className="text-mainTextColor text-center font-bold text-3xl mb-5">
                Upload Documents
            </h1>
            <div className="mt-4 max-h-[50vh] overflow-y-auto ">
                {inputLists.map((input) => (
                    <div key={'upload-user-doc-' + input}>
                        <p className="text-mainTextColor">{input}</p>
                        <InputFile
                            placeHolder={`Upload ${input}`}
                            onChange={(e) =>
                                handleUploadUserDocuments(e, input)
                            }
                        />
                    </div>
                ))}

                <div className="flex justify-end">
                    {showInput ? (
                        <InputWithBtn
                            btnText="Add"
                            label="Document Name"
                            placeHolder="Write your Document name"
                            onSubmit={(val) => {
                                setInputLists((prev) => [...prev, val]);
                                setShowInput(false);
                            }}
                        />
                    ) : (
                        <button
                            className="text-md font-bold hover:text-blueColor p-2 "
                            onClick={() => setShowInput(true)}
                        >
                            Add +
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UploadUserDocuments;
