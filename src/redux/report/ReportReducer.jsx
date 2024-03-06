import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteReport, reportListForPatient, reportListForWorker, saveReport } from "../../server/api";

const initialState = {
    reports: [],
    errors: {
        name: null,
        details :null,
    }
};

// rapor oluştur
export const reportCreate = createAsyncThunk(
    "report/save",
    async ({workerId,patientId,body}) => {
        var response;
        await saveReport(workerId,patientId,body).then((res) => {
            response = res.data;
        }).catch((err) => {
            response = err.response.data;
        })
        return response;
    }
)
// laborantın oluşturduğu rapor listesi
export const reportlistforworker = createAsyncThunk(
    "report/list-worker",
    async (workerId) => {
        var response;
        await reportListForWorker(workerId).then((res) => {
            response = res.data;
        }).catch((err) => {
            response = err.response.data;
        })
        return response;
    }
)
// hastaya ait raporlar
export const reportlistforpatient = createAsyncThunk(
    "report/list-patient",
    async (patientId) => {
        var response;
        await reportListForPatient(patientId).then((res) => {
            response = res.data;
        }).catch((err) => {
            response = err.response.data;
        })
        return response;
    }
)
// rapor sil
export const reportdelete = createAsyncThunk(
    "report/delete",
    async (id) => {
        var response;
        await deleteReport(id).then((res) => {
            response = res.data;
        }).catch((err) => {
            response = err.response.data;
        })
        return response;
    }
)
export const reportReducer = createSlice({
    name: 'report',
    initialState,
    reducers: {
        clearReportError: (state) => {
            state.errors = {
                   name: null,
        details :null,
            };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(reportCreate.fulfilled, (state, action) => {
            console.log(action.payload);
            if (action.payload != null && action.payload?.status == 400) {
                state.errors = action.payload.errors;
            }
            if (action.payload != null && action.payload?.status == 200) {
                alert("Rapor Oluşturuldu")
            }
        }).addCase(reportlistforworker.fulfilled, (state, action) => {
            console.log(action.payload);
            state.reports = action.payload.content;
        }).addCase(reportdelete.fulfilled, (state, action) => {
            console.log(action.payload);
        }).addCase(reportlistforpatient.fulfilled, (state, action) => {
            state.reports = action.payload.content;
            console.log(action.payload);
        })
    }
})
export const { clearReportError } = reportReducer.actions;
export default reportReducer.reducer;