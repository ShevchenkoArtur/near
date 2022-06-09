import {createAsyncThunk} from '@reduxjs/toolkit';
import {initContract} from '../../utils';

export const getContractData = createAsyncThunk(
    'near/getContractData',
    async (_, thunkAPI) => {
        try {
            return await initContract();
        } catch (err) {
            if (err instanceof Error) {
                return thunkAPI.rejectWithValue(err.message);
            }
            console.error(err);
            return thunkAPI.rejectWithValue('Something went wrong');
        }
    }
);

export const signIn = createAsyncThunk(
    'near/signIn',
    async (_, thunkAPI) => {
        try {
            const {walletConnection, nearConfig} = await initContract();
            await walletConnection.requestSignIn(nearConfig.contractName, 'near-app');
        } catch (err) {
            if (err instanceof Error) {
                return thunkAPI.rejectWithValue(err.message);
            }
            console.error(err);
            return thunkAPI.rejectWithValue('Something went wrong');
        }
    }
);

export const signOut = createAsyncThunk(
    'near/signOut',
    async (_, thunkAPI) => {
        try {
            const {walletConnection} = await initContract();
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