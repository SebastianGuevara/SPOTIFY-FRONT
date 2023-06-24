import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from './slices/LibrarySlice';
import authenticationReducer from './slices/AuthenticationSlice';
import userReducer from './slices/UserSlice';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistenceConfig = {
    key: "root",
    version: 1,
    storage
}

const authenticationPersistedReducer = persistReducer(persistenceConfig, authenticationReducer);
const userPersistedReducer = persistReducer(persistenceConfig, userReducer);

export const store = configureStore({
    reducer:{
        library: libraryReducer,
        authentication: authenticationPersistedReducer,
        user: userPersistedReducer
    }
})