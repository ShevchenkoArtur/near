import {combineReducers, configureStore} from '@reduxjs/toolkit';
import nearReducer from './reducers/nearReducer';

const rootReducer = combineReducers({
    near: nearReducer
});

export const setupStore = () => configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];