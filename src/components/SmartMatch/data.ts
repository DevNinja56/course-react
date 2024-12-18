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

type GradingScaleFormat = {
    description: string;
    type: string;
    min?: number;
    max?: number;
    options?: string[];
};

type GradingScaleFormats = {
    [key: string]: GradingScaleFormat;
};

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

export const ukCities = [
    "London",
    "Manchester",
    "Birmingham",
    "Liverpool",
    "Edinburgh",
    "Glasgow",
    "Bristol",
    "Cardiff",
    "Leeds",
    "Sheffield",
    "Nottingham",
    "Newcastle",
    "Leicester",
    "Brighton",
    "Oxford",
    "Cambridge",
    "Belfast",
    "Coventry",
    "Hull",
    "Swansea",
    "York",
    "Bath",
    "Aberdeen",
    "Dundee",
    "Norwich",
    "Plymouth",
    "Southampton",
    "Portsmouth",
    "Exeter",
    "Stoke-on-Trent",
    "Wolverhampton",
    "Reading",
    "Luton",
    "Milton Keynes",
    "Derby",
    "Sunderland",
    "Preston",
    "Peterborough",
    "Blackpool",
    "Middlesbrough",
    "Ipswich",
    "Huddersfield",
    "Slough",
    "Chelmsford",
    "Colchester",
    "Gloucester",
    "Chester",
    "Derry",
    "Inverness"
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

export const gradingScaleFormats: GradingScaleFormats = {
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
        description: 'Grades from A* to U',
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
// export const EnglishTest = [
//     'IELTS',
//     'PTE Academic',
//     'Language Cert',
//     'Oxford ELLT',
//     'Duolingo',
//     'MOI',
//     'I haven’t taken any test'
// ];

export const EnglishTest: { [key: string]: string } = {
    IELTS: 'ielts',
    PTE: 'pte',
    'Oxford ELLT': 'oxford',
    'Language Cert': 'language',
    Duolingo: 'duolingo',
    MOI: 'moi',
    'I haven’t taken any test': ''
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
    { label: 'January – March', value: ['Jan', 'Feb', 'Mar'] },
    { label: 'April – June', value: ['Apr', 'May', 'Jun'] },
    { label: 'July – September', value: ['Jul', 'Aug', 'Sep'] },
    { label: 'October – December', value: ['Oct', 'Nov', 'Dec'] }
];

const currentYear = new Date().getFullYear();

export const yearOptions = [
    (currentYear + 1).toString(),
    (currentYear + 2).toString(),
    (currentYear + 3).toString(),
    (currentYear + 4).toString()
];

export const Months = [
    'January – March',
    'April – June',
    'July – September',
    'October – December'
];

export const feeBudgetOptions = [
    { label: '100 - 500', value: '100-500' },
    { label: '500 - 1,000', value: '500-1000' },
    { label: '1,000 - 5,000', value: '1000-5000' },
    { label: '5,000 - 10,000', value: '5000-10000' },
    { label: '10,000 - 25,000', value: '10000-25000' },
    { label: '25,000 - 50,000', value: '25000-50000' },
    { label: '50,000 - 100,000', value: '50000-100000' },
    { label: '100,000 - 250,000', value: '100000-250000' },
    { label: '250,000 - 500,000', value: '250000-500000' }
];
