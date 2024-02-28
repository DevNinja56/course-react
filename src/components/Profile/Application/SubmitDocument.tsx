import RequirementBox from '@/components/course/RequirementBox';
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ROUTES } from '@/config/constant';

const SubmitDocument = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div className="w-full">
            <div className="w-full md:w-1/2 py-5">
                <p className="text-2xl font-semibold uppercase text-darkGrayColor py-3">
                    Identity
                </p>
                <Link href={`${ROUTES.FILE_SUBMIT}?id=${id}`}>
                    <RequirementBox url="" text="Passport" />
                </Link>
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
                    <Link href={`${ROUTES.CONSOLID_MARKSHEET}?id=${id}`}>
                        {' '}
                        <RequirementBox text="Consolidated Marksheets" url="" />
                    </Link>
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
