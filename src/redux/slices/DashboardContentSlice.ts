import { createSlice } from "@reduxjs/toolkit";
import { DashboardContentType } from "../../types/DashboardTypes";

const initialState:DashboardContentType = {
    backgroundColor: '#1A1A1A'
}

export const dashboardContent = createSlice({
    name:'dashboard',
    initialState,
    reducers:{
        setDashboardBackgroundColor: (state, action) => {
            const {color} = action.payload;
            state.backgroundColor = color;
        }
    }
})

export const {setDashboardBackgroundColor} = dashboardContent.actions;
export default dashboardContent.reducer;