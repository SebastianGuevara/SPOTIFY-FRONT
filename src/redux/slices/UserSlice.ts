import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/LoginTypes";

const initialState: User ={
    id: null,
    displayName: null,
    email: null,
    followers: null,
    image: null
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserData: (state, action) =>{
            const {id, name, email, followers, image } = action.payload;
            state.id = id;
            state.displayName = name;
            state.email = email;
            state.followers = followers;
            state.image = image;
        }
    }
})

export const {setUserData} = userSlice.actions;
export default userSlice.reducer;