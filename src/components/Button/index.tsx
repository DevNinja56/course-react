import Link, { LinkProps } from 'next/link';
import React from 'react';
import LoaderSpinner from '../LoaderSpinner';

interface propsTypes {
    disabled?: boolean;
    text: string;
    link?: string | { pathname: string; query: { [key: string]: string } };
    to?: string;
    className?: string;
    color?: string;
    isLoader?: boolean;
    variant?: 'filled' | 'outline';
    icon?: React.ReactElement;
    linkClass?: string;
    iconPlace?: boolean;
}
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & propsTypes;
type PropsLink = LinkProps & propsTypes;

const Button: React.FC<Props> = ({
    disabled = false,
    link,
    text,
    className,
    isLoader,
    variant,
    icon,
    linkClass,
    iconPlace,
    ...props
}) => {
    const Button = () => (
        <button
            type="submit"
            disabled={disabled}
            className={`w-full rounded-[10px] disabled:cursor-not-allowed flex gap-2 justify-center items-center font-semibold mb-1 border group ${
                variant === 'outline'
                    ? 'bg-white border-blueColor text-blueColor hover:bg-blueColor hover:text-white  '
                    : 'bg-blueColor border-transparent text-white hover:bg-white hover:border-blueColor hover:text-blueColor    '
            }   ${className}`}
            {...props}
        >
            {iconPlace ? (
                <>
                    {text}
                    {icon}
                </>
            ) : (
                <>
                    {icon}
                    {text}
                </>
            )}
            {isLoader && (
                <LoaderSpinner className="group-hover:text-blueColor" />
            )}
        </button>
    );
    return (
        <>
            {link ? (
                <Link href={link} className={linkClass}>
                    <Button />
                </Link>
            ) : (
                <Button />
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
