export interface userType {
    id: string;
    name: string;
    email: string;
    gender: string;
    avatar: string;
    address: string;
    fbUserId: string;
    createdAt: string;
    updatedAt: string;
    instituteLink: string;
    phone_number: string;
    role: 'user';
    status: 'in-active' | 'active' | 'block';
    registerWith: 'google' | 'facebook' | 'email';
    documents: [];
    academicInformation: academicInformation | null;
}

export interface academicInformation {
    countryOfEducation: string;
    highestLevelOfEducation: string;
    languageTest: {
        name: string;
        score?: {
            listening: string;
            speaking: string;
            writing: string;
            reading: string;
        } | null;
    };
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

export type changePasswordForm = {
    password: string;
    new_password: string;
    confirm_password: string;
};

export type forgotForm = {
    email: string;
};

export type resetForm = {
    password: string;
    c_password: string;
    email?: string;
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
    _id: string;
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
    scholarship: scholarshipType[];
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
    name: string;
    logo: string;
    degree: degreeType;
    duration: number;
    language: string[];
    specialization: specializationType;
    institute: instituteType;
    intakes: string[];
    tuitionFee: number;
    country: countryType;
    discipline: disciplineType[];
    favoriteId?: string[];
};
export type singleCourseType = {
    delivery: string;
    intakes: string[];
    name: string;
    logo: string;
    degree: degreeType;
    duration: number;
    tuitionFee: number;
    initialDeposit: number;
    language: string[];
    specialization: specializationType;
    description: string;
    entryRequirements: string;
    institute: instituteType;
    favoriteId?: string[];
    id: string;
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

export type favoritesType = {
    scholarship: scholarshipType;
    institute: instituteType;
    course: singleCourseType;
    blog: blogsType;
    user: string;
    createdAt: string;
    updatedAt: string;
    id: string;
};

export type applyTypes = {
    degree: degreeType;
    course: singleCourseType;
    institute: instituteType;
    user: userType | null;
    message: string;
    userDetails: { name: string; phone_number: string; email: string } | null;
    createdAt: string;
    updatedAt: string;
    id: string;
};

export type geoIpType = {
    range: [number, number];
    country: string;
    region: string;
    eu: string;
    timezone: string;
    city: string;
    ll: [number, number];
    metro: number;
    area: number;
};

export type countryDataType = {
    name: string;
    currencies: string;
    languages: string;
    code: string;
};
