import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getContractData, signIn, signOut} from '../action-creators/near';
import {InitialContract} from '../../types/initialContract';

interface nearState {
    isLoading: boolean;
    error: string | null;
    contractData: InitialContract | null
}

const initialState: nearState = {
    isLoading: false,
    error: null,
    contractData: null
};

const nearReducer = createSlice({
    name: 'near',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getContractData.pending.type, (state) => {
                state.isLoading = true;
            })
            .addCase(getContractData.fulfilled.type, (state, action: PayloadAction<InitialContract>) => {
                state.contractData = action.payload;
                state.isLoading = false;
            })
            .addCase(getContractData.rejected.type, (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(signIn.pending.type, (state) => {
                state.isLoading = true;
            })
            .addCase(signIn.fulfilled.type, (state) => {
                state.isLoading = false;
            })
            .addCase(signIn.rejected.type, (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(signOut.pending.type, (state) => {
                state.isLoading = true;
            })
            .addCase(signOut.fulfilled.type, (state) => {
                state.isLoading = false;
            })
            .addCase(signOut.rejected.type, (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    }
});

export default nearReducer.reducer;