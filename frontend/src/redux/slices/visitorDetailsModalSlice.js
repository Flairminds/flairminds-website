import { createSlice } from "@reduxjs/toolkit";
const initialState={
    open:false,
    interest:null,
    redirectUrl:null,
    feedBackOpen:false,
    demoModalOpen:false,
    demoLink:null,
    shareLink:null,
    shareName:null,
    shareId:null,
}
const visitorDetailsModalSlice=createSlice({
    name:"visitorDetailsModal",
    initialState:initialState,
    reducers:{
        toggleModal:(state,action)=>{
            state.open=!state.open
            state.interest=action.payload.interest
            state.redirectUrl=action.payload.redirectUrl
        },
        toggleFeedbackModal:(state,action)=>{
            state.feedBackOpen=!state.feedBackOpen;
        },
        toggleDemoModal:(state,action)=>{
            state.demoModalOpen=!state.demoModalOpen;
        },
        setDemoLink:(state,action)=>{
            state.demoLink=action.payload.demoLink;
        },
        setShareLink:(state,action)=>{
            state.shareName=action.payload.shareName;
        }
    }
})
export const {toggleModal,toggleFeedbackModal,toggleDemoModal,setDemoLink,setShareLink}=visitorDetailsModalSlice.actions
export default visitorDetailsModalSlice.reducer