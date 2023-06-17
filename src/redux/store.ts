import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from './slices/LibrarySlice';

export const store = configureStore({
    reducer:{
        library: libraryReducer
    }
})