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
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);
