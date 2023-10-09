export interface userType {
    name: string;
    email: string;
    dob: null;
    gender: null;
    avatar: string | null;
    documents: [];
    timezone: null;
    address: null;
    password: string;
    phone_number: string;
    createdAt: string;
    updatedAt: string;
    sms_otp: string;
    sms_otp_created_at: string;
    sms_otp_expires_at: string;
    id: string;
}

export type signInForm = {
    email: string;
    password: string;
    phone_number?: string;
};

export type signUpForm = {
    email: string;
    name: string;
    password: string;
    phone_number: string;
};

export type scholarshipType = {
    name: string;
    description: string;
    type: string;
    intakeYear: number;
    applicable: string;
    startDate: string;
    endDate: string;
    course: scholarshipType[];
    institute: '651cfcc5d1e3ed362bd4d153';
    country: countryType;
    undergraduate: [];
    postgraduate: [];
    research: [];
    favoriteId: [];
    createdAt: string;
    updatedAt: string;
    id: string;
};

export type countryType = {
    id: string;
    name: string;
    code: string;
    logo: string;
    institutes: [];
    scholarship: [];
    createdAt: string;
    updatedAt: string;
};

export type degreeType = {
    name: string;
    course: [];
    createdAt: string;
    updatedAt: string;
    id: string;
};

export type disciplineType = {
    name: string;
    undergraduate: [];
    postgraduate: [];
    research: [];
    createdAt: string;
    updatedAt: string;
    id: string;
};
