export interface ErrorMessages {
    nationality?: string;
    year?: string;
    month?: string;
    studyLevel?: string;
    discipline?: string;
    educationCountry?: string;
    qualification?: string;
    gradingSystem?: string;
    englishPercentage?: string;
    score?: string;
    percentage?: string;
    englishTest?: string;
    listening?: string;
    reading?: string;
    speaking?: string;
    writing?: string;
    overallscore?: string;
    feebudget?: string;
}

export interface FormData {
    nationality?: string;
    year?: string;
    month?: string;
    studyLevel?: string;
    discipline?: string;
    educationCountry?: string;
    qualification?: string;
    gradingSystem?: string;
    englishPercentage?: string;
    score?: string;
    percentage?: string;
    englishTest?: string;
    listening?: string;
    reading?: string;
    speaking?: string;
    writing?: string;
    overallscore?: string;
    feebudget?: string;
}

export const validateFields = (
    data: FormData,
    step: number
): { isValid: boolean; errors: ErrorMessages } => {
    let isValid = true;
    const errors: ErrorMessages = {};

    switch (step) {
        case 1:
            if (!data.nationality) {
                errors.nationality = 'Nationality is required';
                isValid = false;
            }
            break;
        case 2:
            if (!data.year) {
                errors.year = 'Year is required';
                isValid = false;
            }
            if (!data.month) {
                errors.month = 'Month is required';
                isValid = false;
            }
            break;
        case 3:
            if (!data.studyLevel) {
                errors.studyLevel = 'Study level is required';
                isValid = false;
            }
            if (data.discipline?.length === 0) {
                console.log(data.discipline);
                errors.discipline = 'Subjects is required';
                isValid = false;
            }
            break;
        case 4:
            if (!data.educationCountry) {
                errors.educationCountry = 'Education Country is required';
                isValid = false;
            }
            if (!data.qualification) {
                errors.qualification = 'Qualification is required';
                isValid = false;
            }
            if (!data.gradingSystem) {
                errors.gradingSystem = 'Grading System is required';
                isValid = false;
            }
            if (!data.score) {
                errors.score = 'Score is required';
                isValid = false;
            }
            if (!data.englishPercentage) {
                errors.englishPercentage = 'English Percentage is required';
                isValid = false;
            }
            break;
        case 5:
            if (!data.englishTest) {
                errors.englishTest = 'English test is required';
                isValid = false;
            }
            if (
                data.englishTest === 'IELTS' ||
                data.englishTest === 'PTE Academic'
            ) {
                if (!data.listening) {
                    errors.listening = 'Listening score is required';
                    isValid = false;
                }
                if (!data.reading) {
                    errors.reading = 'Reading score is required';
                    isValid = false;
                }
                if (!data.speaking) {
                    errors.speaking = 'Speaking score is required';
                    isValid = false;
                }
                if (!data.writing) {
                    errors.writing = 'Writing score is required';
                    isValid = false;
                }
                if (!data.overallscore) {
                    errors.overallscore = 'Overall score is required';
                    isValid = false;
                }
            }
            break;
        case 6:
            if (!data.feebudget) {
                errors.feebudget = 'Fee Budget is required';
                isValid = false;
            }
            break;
        default:
            break;
    }

    return { isValid, errors };
};

export const clearError = (
    errorMessages: ErrorMessages,
    setErrorMessages: React.Dispatch<React.SetStateAction<ErrorMessages>>,
    field: keyof ErrorMessages
) => {
    setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [field]: ''
    }));
};
