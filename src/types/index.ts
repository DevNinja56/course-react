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
    image: string;
    description: string;
    type: string;
    intakeYear: number;
    applicable: string;
    startDate: string;
    endDate: string;
    course: scholarshipType[];
    institute: instituteType;
    country: countryType;
    undergraduate: degreeType[];
    postgraduate: degreeType[];
    research: degreeType[];
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
    institutes: instituteType[];
    scholarship: scholarshipType[];
    createdAt: string;
    updatedAt: string;
};

export type degreeType = {
    name: string;
    course: courseType[];
    createdAt: string;
    updatedAt: string;
    id: string;
};

export type disciplineType = {
    name: string;
    image: string;
    undergraduate: degreeType[];
    postgraduate: degreeType[];
    research: degreeType[];
    createdAt: string;
    updatedAt: string;
    id: string;
};

export type instituteType = {
    name: string;
    logo: string;
    description: string;
    sector: string;
    establishedYear: number;
    location: string;
    campus: string;
    country: countryType;
    scholarship: scholarshipType[];
    discipline: disciplineType[];
    course: courseType[];
    qsWorldRanking: number;
    usNewsRanking: number;
    timesHigherRanking: number;
    shanghaiRanking: number;
    tcfIndexRanking: number;
    favoriteId: [];
    createdAt: string;
    updatedAt: string;
    id: string;
};

export type courseType = {
    _id: string;
    name: string;
    degreeType: {
        _id: string;
        name: string;
    };
    degree: {
        _id: string;
        name: string;
    };
    studyModel: string;
    timeModel: string;
    applicationFee: number;
    specialization: string;
    duration: number;
    language: string[];
    startDate: string;
    endDate: string;
    imgUrl: string;
    instituteId: {
        _id: string;
        name: string;
        logo: string;
        description: string;
        sector: string;
        establishedYear: number;
        location: string;
        campus: string;
        qsWorldRanking: number;
        usNewsRanking: number;
        timesHigherRanking: number;
        shanghaiRanking: number;
        tcfIndexRanking: number;
    };
    scholarshipId: {
        _id: string;
        name: string;
        description: string;
        type: string;
        intakeYear: 0;
        applicable: string;
        startDate: string;
        endDate: string;
    };
    favoriteId: [string];
    country: {
        _id: string;
        name: string;
        code: string;
        logo: string;
    };
};

export type degreeLevelType = {
    name: string;
    degrees: degreeType[];
    id: string;
};
