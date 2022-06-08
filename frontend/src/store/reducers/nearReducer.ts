import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initContractThunk} from '../action-creators/near';
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
            .addCase(initContractThunk.pending.type, (state) => {
                state.isLoading = true;
            })
            .addCase(initContractThunk.fulfilled.type, (state, action: PayloadAction<InitialContract>) => {
                state.contractData = action.payload;
                state.isLoading = false;
            })
            .addCase(initContractThunk.rejected.type, (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    }
});

export default nearReducer.reducer;