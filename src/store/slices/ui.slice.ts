import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum modalType {
    'none',
    'reset_password',
    'compare_university',
    'update_user_info',
    'update_academic_info',
    'upload_user_documents',
    'login_confirmation',
    'change_password',
    'currency_converter',
    'bank_statement_calculator',
    'start_application',
    'cancel_application',
    'share_modal'
}

interface UiState {
    modal: modalType | false;
    modalState: unknown;
}

const initialState: UiState = {
    modal: false,
    modalState: null
};

export const uiSlice = createSlice({
    name: 'userInterface',
    initialState,
    reducers: {
        closeModal: (state) => {
            state.modal = false;
            state.modalState = null;
        },
        updateModalAndState: (
            state,
            action: PayloadAction<{ type: modalType; state: unknown }>
        ) => {
            state.modal = action.payload.type;
            state.modalState = action.payload.state;
        }
    }
});

export const { closeModal, updateModalAndState } = uiSlice.actions;
export default uiSlice.reducer;
