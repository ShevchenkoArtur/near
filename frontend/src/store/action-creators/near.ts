import {createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from '../index';

export const signIn = createAsyncThunk<void, void, { state: RootState }>(
    'near/signIn',
    async (_, thunkAPI) => {
        try {
            const {contractData} = thunkAPI.getState().near;
            const {walletConnection, nearConfig} = contractData!;
            await walletConnection
                .requestSignIn(nearConfig.contractName, 'near-app', 'http://localhost:3000/');
        } catch (err) {
            if (err instanceof Error) {
                return thunkAPI.rejectWithValue(err.message);
            }
            console.error(err);
            return thunkAPI.rejectWithValue('Something went wrong');
        }
    }
);

export const signOut = createAsyncThunk<void, void, {state: RootState}>(
    'near/signOut',
    async (_, thunkAPI) => {
        try {
            const {contractData} = thunkAPI.getState().near;
            const {walletConnection} = contractData!;
            walletConnection.signOut();
            window.location.replace(window.location.origin + window.location.pathname);
        } catch (err) {
            if (err instanceof Error) {
                return thunkAPI.rejectWithValue(err.message);
            }
            console.error(err);
            return thunkAPI.rejectWithValue('Something went wrong');
        }
    }
);