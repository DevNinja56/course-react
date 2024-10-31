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
    specialization?: string;
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
    specialization?: [];
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
                errors.discipline = 'Subjects are required';
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
            if (
                !(
                    Number(data?.englishPercentage) >= 0 &&
                    Number(data?.englishPercentage) <= 100
                )
            ) {
                errors.englishPercentage =
                    'Percentage should be between 0 to 100';
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
                
                const tests = {
                    listening: {
                        min: data.englishTest === 'IELTS' ? 1 : 10,
                        max: data.englishTest === 'IELTS' ? 9 : 90
                    },
                    reading: {
                        min: data.englishTest === 'IELTS' ? 1 : 10,
                        max: data.englishTest === 'IELTS' ? 9 : 90
                    },
                    speaking: {
                        min: data.englishTest === 'IELTS' ? 1 : 10,
                        max: data.englishTest === 'IELTS' ? 9 : 90
                    },
                    writing: {
                        min: data.englishTest === 'IELTS' ? 1 : 10,
                        max: data.englishTest === 'IELTS' ? 9 : 90
                    },
                    overallscore: {
                        min: data.englishTest === 'IELTS' ? 1 : 10,
                        max: data.englishTest === 'IELTS' ? 9 : 90
                    }
                };

                Object.entries(tests).forEach(([key, { min, max }]) => {
                    
                    if (!data[key as keyof FormData]) {
                        errors[key as keyof ErrorMessages] =
                            `${key.charAt(0).toUpperCase() + key.slice(1)} score is required`;
                        isValid = false;
                    } else if (
                        Number(data[key as keyof FormData]) < min ||
                        Number(data[key as keyof FormData]) > max
                    ) {
                        errors[key as keyof ErrorMessages] =
                            `${key.charAt(0).toUpperCase() + key.slice(1)} score must be between ${min} and ${max}`;
                        isValid = false;
                    }
                });
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
    field: keyof ErrorMessages | string
) => {
    setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [field]: ''
    }));
};
