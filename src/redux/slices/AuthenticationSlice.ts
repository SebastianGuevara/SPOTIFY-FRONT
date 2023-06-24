import { createSlice } from "@reduxjs/toolkit";
import { Authentication } from "../../types/LoginTypes";

const initialState: Authentication ={
    accessToken: null,
    refreshToken: null
}

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers:{
        setAccessAndRefreshTokens: (state, action) =>{
            const {accessToken, refreshToken} = action.payload;
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
        },
        setNewAccesToken: (state, action) =>{
            const {accessToken} = action.payload;
            state.accessToken = accessToken;
        }
    }
})

export const {setAccessAndRefreshTokens, setNewAccesToken} = authenticationSlice.actions;
export default authenticationSlice.reducer;