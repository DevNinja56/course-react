interface ScoreRange {
    min: number;
    max: number;
}

export interface TestScoreRanges {
    IELTS: ScoreRange;
    TOEFL: ScoreRange;
    PTE: ScoreRange;
    Duolingo: ScoreRange;
    CERT: ScoreRange;
}

export const EnglishTest = [
   'TOEFL',
    'PTE Academic',
    'IELTS',
    'Duolingo',
    'Language CERT' 
];

export const testScoreRanges: TestScoreRanges = {
    IELTS: { min: 1, max: 9 },
    TOEFL: { min: 0, max: 30 },
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
    "January – March",
    "April – June",
    "July – September",
    "October – December",
    "Help me decide"
];
