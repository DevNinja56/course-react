interface ScoreRange {
    min: number;
    max: number;
}

export interface TestScoreRanges {
    IELTS: ScoreRange;
    PTE: ScoreRange;
    Duolingo: ScoreRange;
    CERT: ScoreRange;
}

export const Countries = [
    'Pakistan',
    'India',
    'Bangladesh',
    'Sri Lanka',
    'Nepal',
    'Saudi Arabia',
    'UAE',
    'Kuwait',
    'Oman',
    'Nigeria'
];

export const educationalQualifications = [
    {
        country: 'Pakistan',
        qualification: 'Higher Secondary School Certificate',
        gradingScale: 'Percentage Marks'
    },
    {
        country: 'India',
        qualification: 'Higher Secondary School Certificate',
        gradingScale: 'Percentage Marks'
    },
    {
        country: 'Bangladesh',
        qualification: 'Higher School Certificate',
        gradingScale: 'CGPA'
    },
    {
        country: 'Sri Lanka',
        qualification: 'Sri Lankan A Level',
        gradingScale: 'Sri Lankan A level Grades'
    },
    {
        country: 'Nepal',
        qualification: 'Nepalese Higher Secondary School',
        gradingScale: 'Percentage Marks'
    },
    {
        country: 'Kuwait',
        qualification:
            "General Secondary School Certificate (Shahadat al-Thanawiya al-A'ama)",
        gradingScale: 'Percentage Marks'
    },
    {
        country: 'Saudi Arabia',
        qualification: 'Tawjihiyah (General Secondary Education Certificate)',
        gradingScale: 'Percentage Marks'
    },
    {
        country: 'UAE',
        qualification: 'Tawjihiyya (General Secondary Certificate)',
        gradingScale: 'Percentage Marks'
    },
    {
        country: 'Oman',
        qualification: 'Tawjihiyya (General Secondary Certificate)',
        gradingScale: 'Percentage Marks'
    },
    {
        country: 'Nigeria',
        qualification:
            'West African Senior School Certificate and National Examinations Senior School Certificate',
        gradingScale: 'West African Grades'
    }
];

export const otherQualification = [
    {
        qualification: 'A/AS Level',
        gradingScale: 'A/AS Level'
    },
    {
        qualification: 'International Baccalaureate (IB)',
        gradingScale: 'International Baccalaureate (IB)'
    }
];

export const gradingScalesPostGraduate = [
    {
        scale: 'From4',
        description: 'CGPA from 4.0',
        min: 0,
        max: 4
    },
    {
        scale: 'From5',
        description: 'CGPA from 5.0',
        min: 0,
        max: 5
    },
    {
        scale: 'From7',
        description: 'CGPA from 7.0',
        min: 0,
        max: 7
    },
    {
        scale: 'From10',
        description: 'CGPA from 10.0',
        min: 0,
        max: 10
    },
    {
        scale: 'Percentage',
        description: 'Percentage from 0 to 100',
        min: 0,
        max: 100
    }
];

export const gradingScaleFormats = {
    'Percentage Marks': {
        description: 'A percentage from 0 to 100',
        type: 'number',
        min: 0,
        max: 100
    },
    CGPA: {
        description: 'Range of numbers from 0.00 to 5.00',
        type: 'number',
        min: 0,
        max: 5
    },
    'West African Grades': {
        description: 'Grades from A1, B2, B3, C4, C5, C6, D7, E8, F9',
        type: 'text',
        options: ['A1', 'B2', 'B3', 'C4', 'C5', 'C6', 'D7', 'E8', 'F9']
    },
    'Sri Lankan A level Grades': {
        description: 'Grades are: A, B, C, S, F',
        type: 'text',
        options: ['A', 'B', 'C', 'S', 'F']
    },
    'A/AS Level': {
        description:
            'Grades from A* to U (UCAS points will be calculated by entering the grades)',
        type: 'text',
        options: ['A*', 'A', 'B', 'C', 'D', 'E', 'U']
    },
    'International Baccalaureate (IB)': {
        description: 'Points (1 to 45)',
        type: 'number',
        min: 1,
        max: 45
    }
};
export const EnglishTest = [
    'IELTS',
    'PTE Academic',
    'Language Cert',
    'Oxford ELLT',
    'Duolingo',
    'I havent taken any test'
];

export const testScoreRanges: TestScoreRanges = {
    IELTS: { min: 1, max: 9 },
    PTE: { min: 10, max: 90 },
    Duolingo: { min: 10, max: 160 },
    CERT: { min: 10, max: 100 }
};

export const months = [
    { label: 'January', value: 'Jan' },
    { label: 'February', value: 'Feb' },
    { label: 'March', value: 'Mar' },
    { label: 'April', value: 'Apr' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'Jun' },
    { label: 'July', value: 'Jul' },
    { label: 'August', value: 'Aug' },
    { label: 'September', value: 'Sep' },
    { label: 'October', value: 'Oct' },
    { label: 'November', value: 'Nov' },
    { label: 'December', value: 'Dec' }
];

export const GradingSystem = [
    { value: 'CGPA 4 (1-4)', label: 'CGPA 4 (1-4)' },
    { value: 'CGPA 5 (1-5)', label: 'CGPA 5 (1-5)' },
    { value: 'CGPA 7 (1-7)', label: 'CGPA 7 (1-7)' },
    { value: 'CGPA 10 (1-10)', label: 'CGPA 10 (1-10)' },
    { value: 'Percentage (1-100)', label: 'Percentage (1-100)' }
];

export const intakesFilterMonths = [
    { value: ['Jan, Feb, Mar'], label: ['Jan, Feb, Mar'] },
    { value: ['Apr, May, Jun'], label: ['Apr, May, Jun'] },
    { value: ['Jul, Aug, Sep'], label: ['Jul, Aug, Sep'] },
    { value: ['Oct, Nov, Dec'], label: ['Oct, Nov, Dec'] }
];

const currentYear = new Date().getFullYear();

export const yearOptions = [
    (currentYear + 1).toString(),
    (currentYear + 2).toString(),
    (currentYear + 3).toString(),
    (currentYear + 4).toString(),
    'Help me decide'
];

export const Months = [
    'January – March',
    'April – June',
    'July – September',
    'October – December',
    'Help me decide'
];
