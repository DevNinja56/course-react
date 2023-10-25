export interface userType {
    name: string;
    email: string;
    dob: null;
    gender: null;
    avatar: string | null;
    documents: [];
    timezone: null;
    address: string;
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
    intakeYear: string;
    applicable: string;
    startDate: string;
    endDate: string;
    degrees: degreeType[];
    institute: instituteType;
    country: countryType;
    favoriteId: [string];
    createdAt: string;
    updatedAt: string;
    id: string;
};

export type filterScholarShipType = {
    _id: string;
    name: string;
    image: string;
    type: string;
    intakeYear: string;
    applicable: string;
    startDate: string;
    endDate: string;
    degrees: degreeType[];
    institute: instituteType;
    country: countryType;
    discipline: disciplineType[];
    favoriteId?: string[];
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
    type: string;
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
    image: string;
    description: string;
    instituteURL: string;
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
    favoriteId: [string];
    id: string;
};

export type specializationType = {
    name: string;
    id: string;
    course: [];
};

export type courseType = {
    _id: string;
    id: string;
    name: string;
    logo: string;
    degree: degreeType;
    studyModel: string;
    timeModel: string;
    applicationFee: string;
    specialization: specializationType;
    duration: string;
    language: string[];
    startDate: string;
    endDate: string;
    applyDate: string;
    delivery: string;
    description: string;
    format: string;
    institute: instituteType;
    discipline: disciplineType[];
    country: countryType;
    favoriteId?: string[];
};

export type contactUsForm = {
    name: string;
    subject: string;
    email: string;
    message: string;
};

export type blogsType = {
    title: string;
    image: string;
    description: string;
    tags: string[];
    favoriteId: [];
    id: string;
    createdAt: string;
};
