import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { addFirst, addSecond, addThird } from '@/store/slices/compare.slice';

export const useCompare = () => {
    const state = useAppSelector((state) => state.compareInstitute);
    const dispatch = useAppDispatch();

    const compareFirst = (state: object) => dispatch(addFirst(state));
    const compareSecond = (state: object) => dispatch(addSecond(state));
    const compareThird = (state: object) => dispatch(addThird(state));

    return {
        ...state,
        compareFirst,
        compareSecond,
        compareThird
    };
};
