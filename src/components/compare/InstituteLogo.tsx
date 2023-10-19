import { useCompare } from '@/hooks/compare';
import Image from 'next/image';
import { IoCloseSharp } from 'react-icons/io5';

export const InstituteLogoImage = ({
    url,
    index
}: {
    url: string;
    index: 'first' | 'second' | 'third';
}) => {
    const { compareFirst, compareSecond, compareThird } = useCompare();

    const handleClick = () => {
        index === 'first'
            ? compareFirst(null)
            : index === 'second'
            ? compareSecond(null)
            : index === 'third'
            ? compareThird(null)
            : null;
    };
    return (
        <>
            <Image src={url} alt="institute logo" width={80} height={80} />
            <IoCloseSharp
                className="absolute top-2 right-2 cursor-pointer hover:text-black "
                onClick={handleClick}
            />
        </>
    );
};
