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
    documents: { name: string; url: string }[];
    academicInformation: academicInformation | null;
}
export type LanguageTestScoreType =
    | 'speaking'
    | 'listening'
    | 'writing'
    | 'reading'
    | 'overAll';

export interface academicInformation {
    countryOfEducation: string;
    highestLevelOfEducation: string;
    languageTest: {
        name: string;
        score?:
            | {
                  [key in LanguageTestScoreType]: string;
              }
            | null;
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
    _id: string;
    id: string;
    name: string;
    title_description: string;
    image: string;
    amount: string;
    isAmount: boolean;
    percentage: string;
    description: string;
    type: string;
    intakeYear: string;
    applicable: string;
    startDate: string;
    endDate: string;
    institute: instituteType;
    degree: degreeType[];
    country: countryType;
    course: courseType | null;
    createdAt: string;
    updatedAt: string;
    favoriteId: userType[];
    text_overview: string;
    text_eligibility_criteria: string;
    text_amount: string;
};

export type filterScholarShipType = {
    _id: string;
    name: string;
    title_description: string;
    image: string;
    type: string;
    amount: string;
    intakeYear: string;
    applicable: string;
    startDate: string;
    endDate: string;
    institute: instituteType;
    degree: degreeType | degreeType[];
    region: string;
    country: countryType;
    favoriteId: userType[];
};

export type scholarshipFiltersType = {
    regions: {
        region: string;
        count: number;
    }[];
    countries: {
        country: string;
        count: number;
    }[];
    institutes: {
        institute: string;
        count: number;
    }[];
    degrees: {
        degree: degreeType;
        count: number;
    }[];

    types: {
        type: string;
        count: number;
    }[];
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
    createdAt: string;
    updatedAt: string;
    id: string;
    _id: string;
};

export type disciplineType = {
    name: string;
    icon: string;
    description: string | null;
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
    campus: string[];
    country: countryType;
    degrees: degreeType[];
    courses: courseType[];
    qsWorldRanking: string;
    timesHigherRanking: string;
    favoriteId: [string];
    id: string;
};

export type specializationType = {
    name: string;
    id: string;
    _id: string;
    course: [];
};

export interface specializationDataType {
    name: string;
    discipline: string;
    createdAt: string;
    updatedAt: string;
    id: string;
}

export interface Discipline {
    name: string;
    discipline: string;
    createdAt: string;
    updatedAt: string;
    id: string;
}

export type courseType = {
    _id: string;
    name: string;
    logo: string;
    degree: degreeType;
    duration: number;
    specializations: specializationType;
    institute: instituteType;
    intakes: string[];
    tuitionFee: number;
    feeCurrency: 'aud' | 'gbp';
    country: countryType;
    discipline: disciplineType[];
    countryDetails: {
        country: string;
        entryRequirement: string;
        languageRequirement: string;
        initialDeposit: number;
    };
    favoriteId?: string[];
};
export interface OptionType {
    value: string;
    label: string;
}

export interface SpecializationType {
    name: string;
    count: number;
    _id: string;
}
export type filterCourseType = {
    intakes: {
        intakes: string[];
        count: number;
    }[];
    regions: {
        region: string;
        count: number;
    }[];
    countries: {
        country: string;
        count: number;
    }[];
    locations: {
        location: string;
        count: number;
    }[];
    institutes: {
        institute: string;
        count: number;
    }[];
    degrees: {
        degree: degreeType;
        count: number;
    }[];
    disciplines: {
        name: string;
        specializations: SpecializationType[];
        count: number;
    }[];
};

export type courseLanguageRequirement = {
    ielts: { s: string; l: string; r: string; w: string; oa: string };
    pte: { s: string; l: string; r: string; w: string; oa: string };
    language?: { isAvailable: boolean };
    oxford?: { isAvailable: boolean };
    duolingo?: { isAvailable: boolean };
    moi?: { isAvailable: boolean };
};

export type entryRequirementItems = {
    local_year_12:
        | {
              country: string;
              qualification: string;
              grade: string;
              value: string;
          }[]
        | null;
    bachelor_degrees:
        | {
              country: string;
              qualification: string;
              grade: string;
              value: string;
          }[]
        | null;
    a_level: string | null;
    ib: string | null;
};

export type singleCourseType = {
    id: string;
    monthDuration: string[];
    delivery: string;
    availableCampuses: string[];
    feeCurrency: 'aud' | 'gbp';
    favoriteId: string[];
    name: string;
    logo: string;
    image: string;
    degree: degreeType;
    intakes: string[];
    tuitionFee: number;
    specialization: specializationType[];
    discipline: disciplineType;
    description: string;
    institute: instituteType;
    region: string;
    createdAt: string;
    updatedAt: string;
    scholarship: scholarshipType[];
    textInitialDeposit: string;
    textEligibility: string;
    textAmount: string;
    language: [
        {
            language: courseLanguageRequirement;
            country: string;
            default: boolean;
        }
    ];
    initialDeposit: [
        {
            amount: string;
            country: string;
            default: boolean;
        }
    ];
    entryRequirements: entryRequirementItems;
    documentsRequirement: {
        title: string;
        url: string;
    }[];
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

export type Grade = {
    grade: string;
    score: string;
};

export type QualificationData = {
    name: string;
    group: string;
    grades: Grade[];
};

export type Qualification = {
    id: number;
    selectedQualification?: QualificationData;
    selectedScore?: string;
    selectedGrade?: string;
};


export interface userDocuments {
    identity: {
        passport: {
            url: string[];
            given_name: string;
            sur_name: string;
            number: string;
            date_of_issue: string;
            date_of_expiry: string;
        };
    };
    academic_certificates: {
        semester_mark_sheets: {
            url: string;
        };
        consolidated_mark_sheets: {
            url: string[];
            given_name: string;
            sur_name: string;
            number: string;
            country: string;
            institute: string;
            date_of_start: string;
            date_of_completion: string;
        };
        provisional_certificate: {
            url: string;
        };
        secondary_school: {
            url: string;
        };
        higher_secondary_school: {
            url: string;
        };
        bachelor_degree: {
            url: string;
        };
        master_degree: {
            url: string;
        };
    };
    professional_records: {
        experience_letter: {
            url: string;
        };
        resume: {
            url: string;
        };
        personal_statement: {
            url: string;
        };
        letter_of_reference: {
            url: string;
        };
        provisional_certificate: {
            url: string;
        };
    };
}

interface applicationStatusSingle {
    create_at: Date;
    message: string;
    message_type: string;
    document: string;
}

export enum statusEnum {
    'initiated' = 'initiated',
    'submitDocuments' = 'submitDocuments',
    'apply' = 'apply',
    'offer' = 'offer',
    'visa' = 'visa',
    'enroll' = 'enroll'
}

export interface applicationStatus {
    active: statusEnum;
    initiated: applicationStatusSingle;
    submitDocuments: applicationStatusSingle | null;
    apply: applicationStatusSingle | null;
    offer: applicationStatusSingle | null;
    visa: applicationStatusSingle | null;
    enroll: applicationStatusSingle | null;
}

export interface applyTypes {
    id: string;
    intake: string;
    course: singleCourseType;
    user: userType;
    status: applicationStatus;
    documents: userDocuments;
    counsellor: counsellorType;
    createdAt: string;
    updatedAt: string;
    schedule?: scheduleTypes;
}

export interface scheduleTypes {
    startTime: string;
    endTime: string;
    date: string;
    counsellorId: string;
    userId: string;
    applicationId: string;
    status: string;
    reason: string;
    meetingUrl: string;
    meetingId: string;
    createdAt: string;
    updatedAt: string;
    id: string;
}
export interface counsellorType {
    profile_image: string;
    title: string;
    bio: string;
    phone_number: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    id: string;
}

export interface eventType {
    title: string;
    location: string;
    date: string;
    link: string;
    time: string;
    user: {
        name: string;
        avatar: string | null;
        id: string;
    };
    createdAt: string;
    updatedAt: string;
    id: string;
}

export interface DisciplineCountType {
    Undergraduate: number;
    Postgraduate: number;
    name: string;
    image: string;
}

export interface fromOrToInterface {
    name: string;
    email: string;
    avatar: string;
    role: string;
    instituteLink: string;
    id: string;
}

export interface MessageInterface {
    _id: string;
    from: fromOrToInterface;
    message: string;
    attachment: string;
    createdAt: string;
}
