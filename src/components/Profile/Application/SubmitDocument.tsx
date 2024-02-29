import RequirementBox from '@/components/course/RequirementBox';
import React from 'react';
import { useRouter } from 'next/router';
import { ROUTES } from '@/config/constant';
import { useDispatch } from 'react-redux';
import { addFiles } from '@/store/slices/apply.slice';


const SubmitDocument = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { id } = router.query;

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = event.target.files;
        const filesArray = uploadedFiles ? [...uploadedFiles] : [];
        dispatch(addFiles({ type: 'passport', filesArray }));
        router.push({
            pathname: `${ROUTES.FILE_SUBMIT}`,
            query: { id }
        });
    };

    const handleFileChangeConSolid = (event: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = event.target.files;
        const filesArray = uploadedFiles ? [...uploadedFiles] : [];
        console.log("filesArray",filesArray)
        dispatch(addFiles({ type: 'conSolid', filesArray }));
        router.push({
            pathname: `${ROUTES.CONSOLID_MARKSHEET}`,
            query: { id }
        });
    };

    return (
        <div className="w-full">
            <div className="w-full md:w-1/2 py-5">
                <p className="text-2xl font-semibold uppercase text-darkGrayColor py-3">
                    Identity
                </p>
                <label htmlFor="fileUpload">
                    <RequirementBox url="" text="Passport" />
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
                    <RequirementBox text="Semester Marksheets" url="" />
                    <label htmlFor="fileUploadConSolid">
                        <RequirementBox text="Consolidated Marksheets" url="" />
                    </label>
                    <input
                    type="file"
                    className="hidden"
                    multiple
                    id="fileUploadConSolid"
                    onChange={handleFileChangeConSolid}
                />
                    <RequirementBox text="Provisional Certificate" url="" />
                </div>
            </div>
            <div className="w-full">
                <p className="text-[26px] font-bold text-mainTextColor pt-12 pb-7">
                    Professional Records
                </p>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
                    <RequirementBox text="Experience Letter" url="" />
                    <RequirementBox text="CV/Resume" url="" />
                    <RequirementBox text="Personal Statement" url="" />
                    <RequirementBox text="Letter of Reference" url="" />
                </div>
            </div>
        </div>
    );
};

export default SubmitDocument;
