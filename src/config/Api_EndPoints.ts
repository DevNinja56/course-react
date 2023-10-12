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
    DEGREE_TYPE: '/degree-type',
    FAVORITE: '/favorite',
    FAVORITE_DELETE: '/favorite/delete'
};
