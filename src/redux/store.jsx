import React from 'react'
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './auth/AuthReducer';
import PatientReducer from './patient/PatientReducer';

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        patient : PatientReducer
        
        
    }
})
export default store;
