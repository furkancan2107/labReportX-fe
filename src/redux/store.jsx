import React from 'react'
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './auth/AuthReducer';
import PatientReducer from './patient/PatientReducer';
import HospitalReducer from './hospital/HospitalReducer';
import WorkerReducer from './worker/WorkerReducer';
import ReportReducer from './report/ReportReducer';

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        patient: PatientReducer,
        hospital: HospitalReducer,
        worker: WorkerReducer,
        report : ReportReducer
    }
})
export default store;
