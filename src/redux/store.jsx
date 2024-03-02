import React from 'react'
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './auth/AuthReducer';

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        
        
    }
})
export default store;
