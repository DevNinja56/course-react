import RequirementBox from '@/components/course/RequirementBox';
import React from 'react';
import { useRouter } from 'next/router';
import { ROUTES } from '@/config/constant';
import { useDispatch } from 'react-redux';
import { addFiles } from '@/store/slices/apply.slice';
import { API_ENDPOINTS, bucketNameS3 } from '@/config/Api_EndPoints';
import axios from 'axios';
import { BASE_URL } from '@/utils/axios';
import { getToken } from '@/utils/axios/token';
import toast from 'react-hot-toast';
import { fetchRequest } from '@/utils/axios/fetch';
import { useGetApplyByIdQuery } from '@/store/slices/allRequests';

const fileType = {
    experience_letter: 'experience_letter',
    resume: 'resume',
    personal_statement: 'personal_statement',
    letter_of_reference: 'letter_of_reference'
};

const SubmitDocument = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const token = getToken();
    const { id } = router.query;
    const { data: getApply, refetch: fetchApply } = useGetApplyByIdQuery(id);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = event.target.files;
        const filesArray = uploadedFiles ? [...uploadedFiles] : [];
        dispatch(addFiles({ type: 'passport', filesArray }));
        router.push({
            pathname: `${ROUTES.FILE_SUBMIT}`,
            query: { id }
        });
    };

    // const handleFileChangeConSolid = (
    //     event: React.ChangeEvent<HTMLInputElement>
    // ) => {
    //     const uploadedFiles = event.target.files;
    //     const filesArray = uploadedFiles ? [...uploadedFiles] : [];
    //     dispatch(addFiles({ type: 'conSolid', filesArray }));
    //     router.push({
    //         pathname: `${ROUTES.CONSOLID_MARKSHEET}`,
    //         query: { id }
    //     });
    // };

    const handleFileUpload = async (data: FileList | null) => {
        try {
            if (data) {
                const uploadResponses = [];

                for (const file of [...data]) {
                    const formData = new FormData();
                    formData.append('file', file);
                    formData.append('bucketName', bucketNameS3);
                    formData.append('folderName', 'uploads');
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

    const handleFileResumeChange = async (
        event: React.ChangeEvent<HTMLInputElement>,
        fileType: string
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
                    course: getApply?.course?.id,
                    intake: getApply?.intake,
                    status: getApply?.status,
                    id: getApply?.id,
                    user: getApply?.user?.id,
                    documents: {
                        identity:
                            (getApply?.documents?.identity?.passport?.url ?? [])
                                .length > 0
                                ? { ...getApply?.documents?.identity }
                                : {},
                        academic_certificates:
                            (
                                getApply?.documents?.academic_certificates
                                    ?.consolidated_mark_sheets?.url ?? []
                            ).length > 0
                                ? {
                                      ...getApply?.documents
                                          ?.academic_certificates,
                                      consolidated_mark_sheets: {
                                          ...getApply?.documents
                                              ?.academic_certificates
                                              ?.consolidated_mark_sheets
                                      }
                                  }
                                : {},
                        professional_records: {
                            ...getApply?.documents?.professional_records,
                            [fileType]: { url: response?.[0] }
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
                <p className="text-[26px] font-bold text-mainTextColor pb-3">
                    Identity
                </p>
                <label htmlFor="fileUpload">
                    <RequirementBox
                        url={getApply?.documents?.identity?.passport?.url[0]}
                        text="Passport"
                        description="Please upload first and second pages of your passport"
                        isActive={
                            !!getApply?.documents?.identity?.passport?.url[0]
                        }
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
            {/* <div className="w-full">
                <p className="text-[26px] font-bold text-mainTextColor pt-12 pb-3">
                    Undergraduate
                </p>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
                    <label htmlFor="fileUploadConSolid">
                        <RequirementBox
                            text="Consolidated Marksheets"
                            url={
                                getApply?.documents?.academic_certificates
                                    ?.consolidated_mark_sheets?.url[0]
                            }
                            description="Please upload consolidated marksheets file "
                            isActive={
                                !!getApply?.documents?.academic_certificates
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
                    <label htmlFor="semesterMarkSheets">
                        <RequirementBox
                            text="Semester Marksheets"
                            url={
                                getApply?.documents?.academic_certificates
                                    ?.semester_mark_sheets?.url[0]
                            }
                            description="Please upload Semester marksheet file"
                            isActive={
                                !!getApply?.documents?.academic_certificates
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
                    <label htmlFor="provisionalCertificate">
                        <RequirementBox
                            text="Provisional Certificate"
                            url={
                                getApply?.documents?.academic_certificates
                                    ?.provisional_certificate?.url
                            }
                            description="Please upload provisional certificate"
                            isActive={
                                !!getApply?.documents?.academic_certificates
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
                <p className="text-[26px] font-bold text-mainTextColor pt-12 pb-3">
                    Academic Certificates
                </p>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
                    <label htmlFor="secondarySchoolCertificate">
                        <RequirementBox
                            text="Secondary School / O Levels Certificate"
                            url={
                                getApply?.documents?.academic_certificates
                                    ?.secondary_school?.url
                            }
                            description="Please upload academic worksheet and certificates of year 10th "
                            isActive={
                                !!getApply?.documents?.academic_certificates
                                    ?.secondary_school?.url
                            }
                        />
                    </label>
                    <input
                        type="file"
                        className="hidden"
                        id="secondarySchoolCertificate"
                        onChange={handleFileSecondaryCertificateChange}
                    />
                    <label htmlFor="higherSecondarySchoolCertificate">
                        <RequirementBox
                            text="Higher Secondary / A Levels  Certificate"
                            url={
                                getApply?.documents?.academic_certificates
                                    ?.higher_secondary_school?.url
                            }
                            description="Please upload academic worksheet and certificates of year 12th "
                            isActive={
                                !!getApply?.documents?.academic_certificates
                                    ?.higher_secondary_school?.url
                            }
                        />
                    </label>
                    <input
                        type="file"
                        className="hidden"
                        id="higherSecondarySchoolCertificate"
                        onChange={handleFileHigherCertificateChange}
                    />

                    <label htmlFor="bachelorDegreeAndTranscripts">
                        <RequirementBox
                            text="Bachelor degree and transcripts"
                            url={
                                getApply?.documents?.academic_certificates
                                    ?.bachelor_degree?.url
                            }
                            description="Please upload your bachelor degree and transcripts here "
                            isActive={
                                !!getApply?.documents?.academic_certificates
                                    ?.bachelor_degree?.url
                            }
                        />
                    </label>
                    <input
                        type="file"
                        className="hidden"
                        id="bachelorDegreeAndTranscripts"
                        onChange={handleFileBachelorDegreeChange}
                    />
                    <label htmlFor="masterDegreeAndTranscripts">
                        <RequirementBox
                            text="Master degree and transcripts  "
                            url={
                                getApply?.documents?.academic_certificates
                                    ?.master_degree?.url
                            }
                            description="Please upload your master degree and transcripts here "
                            isActive={
                                !!getApply?.documents?.academic_certificates
                                    ?.master_degree?.url
                            }
                        />
                    </label>
                    <input
                        type="file"
                        className="hidden"
                        id="masterDegreeAndTranscripts"
                        onChange={handleFileMasterDegreeChange}
                    />
                </div>
            </div> */}
            <div className="w-full">
                <p className="text-[26px] font-bold text-mainTextColor pt-12 pb-7">
                    Professional Records
                </p>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
                    <label htmlFor="experienceLetter">
                        <RequirementBox
                            text="Experience Letter"
                            url={
                                getApply?.documents?.professional_records
                                    ?.experience_letter?.url
                            }
                            description="Please upload experience letter"
                            isActive={
                                !!getApply?.documents?.professional_records
                                    ?.experience_letter?.url
                            }
                        />
                    </label>
                    <input
                        type="file"
                        className="hidden"
                        id="experienceLetter"
                        onChange={(e) =>
                            handleFileResumeChange(
                                e,
                                fileType.experience_letter
                            )
                        }
                    />
                    <label htmlFor="CV/Resume">
                        <RequirementBox
                            text="CV/Resume"
                            url={
                                getApply?.documents?.professional_records
                                    ?.resume?.url
                            }
                            description="Please upload CV/Resume"
                            isActive={
                                !!getApply?.documents?.professional_records
                                    ?.resume?.url
                            }
                        />
                    </label>
                    <input
                        type="file"
                        className="hidden"
                        id="CV/Resume"
                        onChange={(e) =>
                            handleFileResumeChange(e, fileType.resume)
                        }
                    />
                    <label htmlFor="PersonalStatement">
                        <RequirementBox
                            text="Personal Statement"
                            url={
                                getApply?.documents?.professional_records
                                    ?.personal_statement?.url
                            }
                            description="Please upload personal statement"
                            isActive={
                                !!getApply?.documents?.professional_records
                                    ?.personal_statement?.url
                            }
                        />
                    </label>
                    <input
                        type="file"
                        className="hidden"
                        id="PersonalStatement"
                        onChange={(e) =>
                            handleFileResumeChange(
                                e,
                                fileType.personal_statement
                            )
                        }
                    />
                    <label htmlFor="LetterOfReference">
                        <RequirementBox
                            text="Letter of Reference"
                            url={
                                getApply?.documents?.professional_records
                                    ?.letter_of_reference?.url
                            }
                            description="Please upload letter of reference"
                            isActive={
                                !!getApply?.documents?.professional_records
                                    ?.letter_of_reference?.url
                            }
                        />
                    </label>
                    <input
                        type="file"
                        className="hidden"
                        id="LetterOfReference"
                        onChange={(e) =>
                            handleFileResumeChange(
                                e,
                                fileType.letter_of_reference
                            )
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default SubmitDocument;
