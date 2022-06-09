import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {signIn, signOut} from '../action-creators/near';
import {InitialContract} from '../../types/initialContract';

interface nearState {
    isLoading: boolean;
    error: string | null;
    contractData: InitialContract | null
}

const initialState: nearState = {
    isLoading: false,
    error: null,
    contractData: null,
};

const nearReducer = createSlice({
    name: 'near',
    initialState,
    reducers: {
        setContractData: (state, action: PayloadAction<InitialContract>) => {
          state.contractData = action.payload;
        },
    },
    extraReducers: builder => {
        builder
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

export const {setContractData} = nearReducer.actions;
export default nearReducer.reducer;