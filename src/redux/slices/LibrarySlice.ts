import { createSlice } from "@reduxjs/toolkit";
import { Library } from "../../types/PlaylistLibraryTypes";



const initialState: Library ={
    filterStatus: 'Recent',
    buttonsStatus: 'None'
}

export const librarySlice = createSlice({
    name: 'library',
    initialState,
    reducers:{
        changeFilterStatus: (state, action) =>{
            const { status } = action.payload;
            state.filterStatus = status;
        },
        changeButtonsStatus: (state, action) =>{
            const { status } = action.payload;
            state.buttonsStatus = status;
        }
    }
})

export const {changeFilterStatus, changeButtonsStatus} = librarySlice.actions;
export default librarySlice.reducer;