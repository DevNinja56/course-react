import { gradingScaleFormats, gradingScalesPostGraduate } from './data';

export interface ErrorMessages {
    [key: string]: string | undefined; 
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
    tuitionFee?: string;
    specialization?: string[]; 
}

const setError = (errors: ErrorMessages, key: keyof FormData, message: string) => {
    errors[key] = message;
};

export const validateFields = (
    data: FormData,
    step: number
): { isValid: boolean; errors: ErrorMessages } => {
    let isValid = true;
    const errors: ErrorMessages = {};

    switch (step) {
        case 1:
            if (!data.nationality) {
                setError(errors, 'nationality', 'Nationality is required');
                isValid = false;
            }
            break;

        case 2:
            if (!data.year) {
                setError(errors, 'year', 'Year is required');
                isValid = false;
            }
            if (!data.month) {
                setError(errors, 'month', 'Month is required');
                isValid = false;
            }
            break;

        case 3:
            if (!data.studyLevel) {
                setError(errors, 'studyLevel', 'Study level is required');
                isValid = false;
            }
            if (data.specialization?.length === 0 || !data.specialization) {
                setError(errors, 'specialization', 'Specializations are required');
                isValid = false;
            }
            break;

        case 4:
            if (!data.educationCountry) {
                setError(errors, 'educationCountry', 'Education Country is required');
                isValid = false;
            }
            if (!data.qualification && data.studyLevel === 'Undergraduate') {
                setError(errors, 'qualification', 'Qualification is required');
                isValid = false;
            }
            if (!data.gradingSystem) {
                setError(errors, 'gradingSystem', 'Grading System is required');
                isValid = false;
            }

            if (data.studyLevel === 'Postgraduate') {
                const selectedScale = gradingScalesPostGraduate.find(
                    (scale) => scale.description === data.gradingSystem
                );

                if (!selectedScale) {
                    setError(errors, 'gradingSystem', 'Invalid grading system selected for postgraduate.');
                    isValid = false;
                } else {
                    const score = Number(data.score);
                    if (score < selectedScale.min || score > selectedScale.max) {
                        setError(errors, 'score', `Score must be between ${selectedScale.min} and ${selectedScale.max}.`);
                        isValid = false;
                    }
                }
            }

            if (!data.score) {
                setError(errors, 'score', 'Score is required');
                isValid = false;
            } else {
                const gradingSystem = gradingScaleFormats[data.gradingSystem as string];
                if (gradingSystem) {
                    const { min, max, options, type } = gradingSystem;
                    const scoreValue = Number(data.score);
                    if (type === 'number' && (scoreValue < (min ?? 0) || scoreValue > (max ?? 100))) {
                        setError(errors, 'score', `Score must be between ${min} and ${max}`);
                        isValid = false;
                    } else if (type === 'text' && options && !options.includes(data.score)) {
                        setError(errors, 'score', `Score must be one of the following: ${options.join(', ')}`);
                        isValid = false;
                    }
                }
            }

            if (!data.englishPercentage && data.studyLevel === 'Undergraduate') {
                setError(errors, 'englishPercentage', 'English Percentage is required');
                isValid = false;
            } else if (data.studyLevel === 'Undergraduate') {
                const englishPercentageValue = Number(data.englishPercentage);
                if (englishPercentageValue < 1 || englishPercentageValue > 100) {
                    setError(errors, 'englishPercentage', 'Percentage should be between 1 and 100');
                    isValid = false;
                }
            }
            break;

        case 5:
            if (!data.englishTest) {
                setError(errors, 'englishTest', 'English test is required');
                isValid = false;
            } else if (['IELTS', 'PTE Academic'].includes(data.englishTest)) {
                const tests = {
                    listening: { min: data.englishTest === 'IELTS' ? 1 : 10, max: data.englishTest === 'IELTS' ? 9 : 90 },
                    reading: { min: data.englishTest === 'IELTS' ? 1 : 10, max: data.englishTest === 'IELTS' ? 9 : 90 },
                    speaking: { min: data.englishTest === 'IELTS' ? 1 : 10, max: data.englishTest === 'IELTS' ? 9 : 90 },
                    writing: { min: data.englishTest === 'IELTS' ? 1 : 10, max: data.englishTest === 'IELTS' ? 9 : 90 },
                    overallscore: { min: data.englishTest === 'IELTS' ? 1 : 10, max: data.englishTest === 'IELTS' ? 9 : 90 }
                };

                Object.entries(tests).forEach(([key, { min, max }]) => {
                    if (!data[key as keyof FormData]) {
                        setError(errors, key as keyof FormData, `${key.charAt(0).toUpperCase() + key.slice(1)} score is required`);
                        isValid = false;
                    } else if (Number(data[key as keyof FormData]) < min || Number(data[key as keyof FormData]) > max) {
                        setError(errors, key as keyof FormData, `${key.charAt(0).toUpperCase() + key.slice(1)} score must be between ${min} and ${max}`);
                        isValid = false;
                    }
                });
            }
            break;

        case 6:
            if (!data.tuitionFee) {
                setError(errors, 'tuitionFee', 'Tuition Fee is required');
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
        [field]: undefined 
    }));
};
