import { createSlice } from "@reduxjs/toolkit";
const initialState={
    user:null,
    rolename:null,
    superAdmin:false,
}
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        auth:(state,action)=>{
             state.rolename=action.payload.rolename
             state.superAdmin=action.payload.superAdmin
        }
    }
})
export const {auth}=userSlice.actions;
export default userSlice.reducer;