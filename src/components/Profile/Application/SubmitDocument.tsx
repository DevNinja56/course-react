import RequirementBox from '@/components/course/RequirementBox';
import React from 'react';
import { useRouter } from 'next/router';
import { ROUTES } from '@/config/constant';
import { useDispatch } from 'react-redux';
import { addFiles } from '@/store/slices/apply.slice';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import axios from 'axios';
import { BASE_URL } from '@/utils/axios';
import { getToken } from '@/utils/axios/token';
import toast from 'react-hot-toast';
import { fetchRequest } from '@/utils/axios/fetch';
import { useGetApplyByIdQuery } from '@/store/slices/allRequests';

const SubmitDocument = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const token = getToken();
    const { id } = router.query;
    const { data: GetApply, refetch: fetchApply } = useGetApplyByIdQuery(id);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = event.target.files;
        const filesArray = uploadedFiles ? [...uploadedFiles] : [];
        dispatch(addFiles({ type: 'passport', filesArray }));
        router.push({
            pathname: `${ROUTES.FILE_SUBMIT}`,
            query: { id }
        });
    };

    const handleFileChangeConSolid = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const uploadedFiles = event.target.files;
        const filesArray = uploadedFiles ? [...uploadedFiles] : [];
        dispatch(addFiles({ type: 'conSolid', filesArray }));
        router.push({
            pathname: `${ROUTES.CONSOLID_MARKSHEET}`,
            query: { id }
        });
    };

    const handleFileUpload = async (data: FileList | null) => {
        try {
            if (data) {
                const uploadResponses = [];

                for (const file of [...data]) {
                    const formData = new FormData();
                    formData.append('file', file);
                    const response = await axios.post(
                        BASE_URL + API_ENDPOINTS.FILE_S3_UPLOAD,
                        formData,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }
                    );
                    uploadResponses.push(response.data.data.Location);
                }
                return uploadResponses;
            }
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    const handleMarkSheetUpload = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const fileList = event.target.files;
        const response = await handleFileUpload(
            fileList ? (fileList as FileList) : null
        );
        toast.promise(
            fetchRequest({
                url: `${BASE_URL}${API_ENDPOINTS.APPLY_DOCUMENTS}/${id}`,
                type: 'patch',
                body: {
                    ...GetApply,
                    course: GetApply?.course.id,
                    user: GetApply?.user.id,
                    documents: {
                        ...GetApply?.documents,
                        academic_certificates: {
                            ...GetApply?.documents?.academic_certificates,
                            semester_mark_sheets: { url: response?.[0] }
                        }
                    }
                }
            }),
            {
                loading: 'Please wait...',
                success: () => {
                    fetchApply();
                    return 'Form submitted successfully';
                },
                error: 'An error occurred'
            }
        );
    };

    const handleFileProvisionalCertificateChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const fileList = event.target.files;
        const response = await handleFileUpload(
            fileList ? (fileList as FileList) : null
        );
        toast.promise(
            fetchRequest({
                url: `${BASE_URL}${API_ENDPOINTS.APPLY_DOCUMENTS}/${id}`,
                type: 'patch',
                body: {
                    ...GetApply,
                    course: GetApply?.course.id,
                    user: GetApply?.user.id,
                    documents: {
                        ...GetApply?.documents,
                        academic_certificates: {
                            ...GetApply?.documents?.academic_certificates,
                            provisional_certificate: { url: response?.[0] }
                        }
                    }
                }
            }),
            {
                loading: 'Please wait...',
                success: () => {
                    fetchApply();
                    return 'Form submitted successfully';
                },
                error: 'An error occurred'
            }
        );
    };

    const handleFileExperienceLetterChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const fileList = event.target.files;
        const response = await handleFileUpload(
            fileList ? (fileList as FileList) : null
        );
        toast.promise(
            fetchRequest({
                url: `${BASE_URL}${API_ENDPOINTS.APPLY_DOCUMENTS}/${id}`,
                type: 'patch',
                body: {
                    ...GetApply,
                    course: GetApply?.course.id,
                    user: GetApply?.user.id,
                    documents: {
                        ...GetApply?.documents,
                        professional_records: {
                            ...GetApply?.documents?.professional_records,
                            experience_letter: { url: response?.[0] }
                        }
                    }
                }
            }),
            {
                loading: 'Please wait...',
                success: () => {
                    fetchApply();
                    return 'Form submitted successfully';
                },
                error: 'An error occurred'
            }
        );
    };

    const handleFileLetterOfReferenceChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const fileList = event.target.files;
        const response = await handleFileUpload(
            fileList ? (fileList as FileList) : null
        );
        toast.promise(
            fetchRequest({
                url: `${BASE_URL}${API_ENDPOINTS.APPLY_DOCUMENTS}/${id}`,
                type: 'patch',
                body: {
                    ...GetApply,
                    course: GetApply?.course.id,
                    user: GetApply?.user.id,
                    documents: {
                        ...GetApply?.documents,
                        professional_records: {
                            ...GetApply?.documents?.professional_records,
                            letter_of_reference: { url: response?.[0] }
                        }
                    }
                }
            }),
            {
                loading: 'Please wait...',
                success: () => {
                    fetchApply();
                    return 'Form submitted successfully';
                },
                error: 'An error occurred'
            }
        );
    };

    const handleFilePersonalStatementChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const fileList = event.target.files;
        const response = await handleFileUpload(
            fileList ? (fileList as FileList) : null
        );
        toast.promise(
            fetchRequest({
                url: `${BASE_URL}${API_ENDPOINTS.APPLY_DOCUMENTS}/${id}`,
                type: 'patch',
                body: {
                    ...GetApply,
                    course: GetApply?.course.id,
                    user: GetApply?.user.id,
                    documents: {
                        ...GetApply?.documents,
                        professional_records: {
                            ...GetApply?.documents?.professional_records,
                            personal_statement: { url: response?.[0] }
                        }
                    }
                }
            }),
            {
                loading: 'Please wait...',
                success: () => {
                    fetchApply();
                    return 'Form submitted successfully';
                },
                error: 'An error occurred'
            }
        );
    };

    const handleFileResumeChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const fileList = event.target.files;
        const response = await handleFileUpload(
            fileList ? (fileList as FileList) : null
        );
        toast.promise(
            fetchRequest({
                url: `${BASE_URL}${API_ENDPOINTS.APPLY_DOCUMENTS}/${id}`,
                type: 'patch',
                body: {
                    ...GetApply,
                    course: GetApply?.course.id,
                    user: GetApply?.user.id,
                    documents: {
                        ...GetApply?.documents,
                        professional_records: {
                            ...GetApply?.documents?.professional_records,
                            resume: { url: response?.[0] }
                        }
                    }
                }
            }),
            {
                loading: 'Please wait...',
                success: () => {
                    fetchApply();
                    return 'Form submitted successfully';
                },
                error: 'An error occurred'
            }
        );
    };

    return (
        <div className="w-full">
            <div className="w-full md:w-1/2 py-5">
                <p className="text-2xl font-semibold uppercase text-darkGrayColor py-3">
                    Identity
                </p>
                <label htmlFor="fileUpload">
                    <RequirementBox
                        url={GetApply?.documents?.identity?.passport?.url[0]}
                        text="Passport"
                    />
                </label>
                <input
                    type="file"
                    className="hidden"
                    multiple
                    id="fileUpload"
                    onChange={handleFileChange}
                />
            </div>
            <div className="w-full">
                <p className="text-[26px] font-bold text-mainTextColor pt-12 pb-3">
                    Academic Certificates
                </p>
                <p className="text-2xl font-semibold uppercase text-darkGrayColor py-3">
                    UNDERGRADUATE
                </p>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
                    <label htmlFor="semesterMarkSheets">
                        <RequirementBox
                            text="Semester Marksheets"
                            url={
                                GetApply?.documents?.academic_certificates
                                    ?.semester_mark_sheets?.url[0]
                            }
                        />
                    </label>
                    <input
                        type="file"
                        className="hidden"
                        id="semesterMarkSheets"
                        onChange={handleMarkSheetUpload}
                    />
                    <label htmlFor="fileUploadConSolid">
                        <RequirementBox
                            text="Consolidated Marksheets"
                            url={
                                GetApply?.documents?.academic_certificates
                                    ?.consolidated_mark_sheets?.url[0]
                            }
                        />
                    </label>
                    <input
                        type="file"
                        className="hidden"
                        multiple
                        id="fileUploadConSolid"
                        onChange={handleFileChangeConSolid}
                    />
                    <label htmlFor="provisionalCertificate">
                        <RequirementBox
                            text="Provisional Certificate"
                            url={
                                GetApply?.documents?.academic_certificates
                                    ?.provisional_certificate?.url
                            }
                        />
                    </label>
                    <input
                        type="file"
                        className="hidden"
                        id="provisionalCertificate"
                        onChange={handleFileProvisionalCertificateChange}
                    />
                </div>
            </div>
            <div className="w-full">
                <p className="text-[26px] font-bold text-mainTextColor pt-12 pb-7">
                    Professional Records
                </p>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
                    <label htmlFor="experienceLetter">
                        <RequirementBox
                            text="Experience Letter"
                            url={
                                GetApply?.documents?.professional_records
                                    ?.experience_letter?.url
                            }
                        />
                    </label>
                    <input
                        type="file"
                        className="hidden"
                        id="experienceLetter"
                        onChange={handleFileExperienceLetterChange}
                    />
                    <label htmlFor="CV/Resume">
                        <RequirementBox
                            text="CV/Resume"
                            url={
                                GetApply?.documents?.professional_records
                                    ?.resume?.url
                            }
                        />
                    </label>
                    <input
                        type="file"
                        className="hidden"
                        id="CV/Resume"
                        onChange={(e) => handleFileResumeChange(e)}
                    />
                    <label htmlFor="PersonalStatement">
                        <RequirementBox
                            text="Personal Statement"
                            url={
                                GetApply?.documents?.professional_records
                                    ?.personal_statement?.url
                            }
                        />
                    </label>
                    <input
                        type="file"
                        className="hidden"
                        id="PersonalStatement"
                        onChange={handleFilePersonalStatementChange}
                    />
                    <label htmlFor="LetterOfReference">
                        <RequirementBox
                            text="Letter of Reference"
                            url={
                                GetApply?.documents?.professional_records
                                    ?.letter_of_reference?.url
                            }
                        />
                    </label>
                    <input
                        type="file"
                        className="hidden"
                        id="LetterOfReference"
                        onChange={handleFileLetterOfReferenceChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default SubmitDocument;
