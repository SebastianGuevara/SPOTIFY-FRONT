import { createSlice } from "@reduxjs/toolkit";
import { Library } from "../../types/PlaylistLibraryTypes";



const initialState: Library ={
    filterStatus: 'Recent'
}

export const librarySlice = createSlice({
    name: 'library',
    initialState,
    reducers:{
        changeFilterStatus: (state, action) =>{
            const { status } = action.payload;
            state.filterStatus = status;
        }
    }
})

export const {changeFilterStatus} = librarySlice.actions;
export default librarySlice.reducer;