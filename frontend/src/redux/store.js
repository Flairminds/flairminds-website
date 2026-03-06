import { configureStore } from "@reduxjs/toolkit";
import visitorDetailsModalReducer from './slices/visitorDetailsModalSlice'
import userReducer from './slices/userSlice'
export const store=configureStore({
    reducer:{
        visitorDetailsModal:visitorDetailsModalReducer,
        user:userReducer,
    }
})