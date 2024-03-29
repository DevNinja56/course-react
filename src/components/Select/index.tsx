/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Select from 'react-select';
import { StateManagerProps } from '../../../node_modules/react-select/dist/declarations/src/stateManager';

export default function ReactSelectCustom({ ...props }: StateManagerProps) {
    return (
        <Select
            {...props}
            styles={{
                container: (base: any) => ({
                    ...base,
                    width: '100%'
                }),
                control: () => ({ display: 'flex' }),
                indicatorSeparator: () => ({})
            }}
        />
    );
}
