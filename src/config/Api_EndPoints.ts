export const API_ENDPOINTS = {
    AUTH: {
        SIGNUP: '/auth/signup',
        SIGNIN: '/auth/signin',
        GET_USER: '/auth/get-user',
        VERIFY_OTP: '/auth/otp-verify',
        LOG_OUT: '/auth/logout',
        FORGOT_PASSWORD: '/auth/forgotPassword',
        RESET_PASSWORD: '/auth/reset-password'
    },
    USER: {
        PROFILE_IMAGE: '/user/upload-avatar/:id',
        UPDATE_PROFILE: '/user/:id',
        CHANGE_PASSWORD: '/user/change-password'
    },
    COUNTRY: '/country',
    DEGREE: '/degree',
    DISCIPLINE: '/discipline',
    SCHOLARSHIP: '/scholarship',
    COURSE_SEARCH: '/course/filter',
    SCHOLARSHIP_SEARCH: '/scholarship/filter',
    FAVORITE: '/favorite',
    FAVORITE_DELETE: '/favorite/delete',
    SPECIALIZATION: '/specialization',
    INSTITUTE: '/institute',
    INSTITUTE_WITH_COUNTRY_ID: '/institute/country/:id',
    DISCIPLINES_WITH_INSTITUTE_ID: '/institute/disciplines/:id',
    DEGREE_LEVELS_WITH_DISCIPLINE_ID: '/discipline/degree-levels/:id',
    COURSES_WITH_DEGREE: '/course/compare/:degreeId/:instituteId',
    CONTACT: '/contact',
    BLOGS: '/blogs',
    SINGLE_BLOG: '/blogs/:id'
};
