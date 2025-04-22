import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
    session : '',
    id: ''
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers:{
        setUserData(state, action){
            state.data = action.payload;
        },
        setSession(state,action){
            state.session = action.payload.session;
        },
        setUserId(state,action){
            state.id = action.payload;
        },
        resetUserData(state){
            state.data = [];
            state.session = '';
            state.id = '';
        }
    }
});


export const {setUserData,setSession,setUserId, resetUserData} = userSlice.actions;
export default userSlice.reducer;