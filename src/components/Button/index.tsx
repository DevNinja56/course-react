import Link, { LinkProps } from 'next/link';
import React from 'react';
import LoaderSpinner from '../LoaderSpinner';

interface propsTypes {
    disabled?: boolean;
    text: string;
    link?: string;
    to?: string;
    className?: string;
    color?: string;
    isLoader?: boolean;
}
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & propsTypes;
type PropsLink = LinkProps & propsTypes;

const Button: React.FC<Props> = ({
    disabled = false,
    link,
    text,
    className,
    isLoader,
    ...props
}) => {
    return (
        <>
            {link ? (
                <></>
            ) : (
                <button
                    type="submit"
                    disabled={disabled}
                    className={`bg-blueColor w-full pt-[14px] pb-[13px] rounded-[10px] text-white font-semibold mb-1 flex gap-2 justify-center items-center disabled:cursor-not-allowed   ${className}`}
                    {...props}
                >
                    <>{text}</>
                    {isLoader && <LoaderSpinner />}
                </button>
            )}
        </>
    );
};

export const LinkButton: React.FC<PropsLink> = ({
    text,
    to = '/',
    className,
    color = 'text-white',
    isLoader,
    ...props
}) => {
    return (
        <Link
            {...props}
            href={to}
            className={`flex max-w-full min-w-max justify-center rounded-[3.5px] ${color} text-sm mx-auto bg-mainColor px-5 py-2.5 disabled:bg-opacity-60 disabled:cursor-not-allowed ${className}`}
        >
            <>{text}</>
            {isLoader && <LoaderSpinner />}
        </Link>
    );
};

export default Button;
