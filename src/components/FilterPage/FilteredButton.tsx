import { IoClose } from 'react-icons/io5';
import { useFilterQuery } from '@/hooks/filterQuery';

interface Props {
    itemKey: string;
    itemValue: string;
    onClick?: () => void;
    icon?: boolean;
}

export const FilteredButton = ({
    itemKey,
    itemValue,
    onClick,
    icon = true
}: Props) => {
    const { removeQuery, addQuery, query } = useFilterQuery();

    const handleDeleteQuery = () => {
        const queryList = Array.isArray(query[itemKey])
            ? query[itemKey]
            : [query[itemKey]];
        if (queryList.length > 1) {
            const index = queryList.indexOf(itemValue);
            if (index > -1) (queryList as string[]).splice(index, 1);
            addQuery({ [itemKey]: queryList as string[] });
        } else {
            removeQuery(itemKey);
        }
    };

    return (
        <>
            {!!itemValue && (
                <div
                    className="group flex flex-shrink-0 m-1 items-center bg-[#2C79FF] rounded-full text-xs px-2.5 py-2 capitalize text-white cursor-pointer transition duration-200 ease-in-out hover:border-secondary"
                    onClick={onClick ? onClick : handleDeleteQuery}
                >
                    <span className="truncate max-w-[150px]">
                        {itemKey === 'tuitionFee'
                            ? `min:${JSON.parse(itemValue)['min']} & max:${
                                  JSON.parse(itemValue)['max']
                              }`
                            : itemValue}
                    </span>
                    {icon && (
                        <IoClose className="text-sm text-white hover:text-red-600 ms-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-secondary" />
                    )}
                </div>
            )}
        </>
    );
};
