import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from './slices/LibrarySlice';
import authenticationReducer from './slices/AuthenticationSlice';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistenceConfig = {
    key: "root",
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistenceConfig, authenticationReducer);

export const store = configureStore({
    reducer:{
        library: libraryReducer,
        authentication: persistedReducer
    }
})