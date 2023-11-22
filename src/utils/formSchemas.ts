import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const signUpFormSchema = yupResolver(
    Yup.object().shape({
        name: Yup.string()
            .required('Name is Required *')
            .min(3, 'Min 3 Characters'),
        email: Yup.string()
            .required('Email is Required *')
            .matches(
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                'Invalid Email'
            ),
        password: Yup.string()
            .required('Password is Required *')
            .min(7, 'Min 7 Characters !'),
        // c_password: Yup.string()
        //     .required('Password is Required')
        //     .oneOf([Yup.ref('password')], 'Password does not match'),
        phone_number: Yup.string()
            .required('phone number is Required *')
            .matches(/^(\+92|0092|92|0)?(3[0-9]{9})$/, 'Invalid Phone Number')
    })
);

export const signInFormSchema = yupResolver(
    Yup.object().shape({
        email: Yup.string().required('Email is Required *'),
        password: Yup.string()
            .required('Password is Required *')
            .min(7, 'Min 7 Characters !')
    })
);

export const forgotFormSchema = yupResolver(
    Yup.object().shape({
        email: Yup.string().required('Email is Required *')
    })
);

export const resetFormSchema = yupResolver(
    Yup.object().shape({
        password: Yup.string()
            .required('Password is Required')
            .min(7, 'Min 7 Characters'),
        c_password: Yup.string()
            .required('Password is Required')
            .oneOf([Yup.ref('password')], 'Passwords does not match')
    })
);
export const changePasswordFormSchema = yupResolver(
    Yup.object().shape({
        password: Yup.string()
            .required('Password is Required')
            .min(7, 'Min 7 Characters'),
        new_password: Yup.string()
            .required('Password is Required')
            .min(7, 'Min 7 Characters'),
        confirm_password: Yup.string()
            .required('Confirm Password is Required')
            .oneOf(
                [Yup.ref('new_password')],
                'Old & New Passwords does not match'
            )
    })
);

export const contactUsFormSchema = yupResolver(
    Yup.object().shape({
        name: Yup.string()
            .required('Name is Required *')
            .min(3, 'Min 3 Characters !'),
        email: Yup.string()
            .required('Email is Required *')
            .matches(
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                'Invalid Email'
            ),
        subject: Yup.string()
            .required('Subject is Required *')
            .min(3, 'Min 3 Characters !'),
        message: Yup.string()
            .required('Message is Required *')
            .min(20, 'Min 20 Characters !')
    })
);
