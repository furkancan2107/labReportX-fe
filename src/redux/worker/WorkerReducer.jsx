import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteWorker, workerList, workerSave } from "../../server/api";

const initialState = {
    workers: [],
    errors: {
        identificationNumber: null,
        name: null,
        password: null,
        lastName : null
    },
    status : null,
    message : null,
    
}
// kayıt
export const workerRegister = createAsyncThunk(
    "worker/save",
    async ({id,body}) => {
        var response;
        await workerSave(id,body).then((res) => {
            response = res.data;
        }).catch((err) => {
            response = err.response.data;
        })
        return response;
    }
)
// çalışanların listesi
export const getWorkerList = createAsyncThunk(
    "worker/list",
    async () => {
        var response;
        await workerList().then((res) => {
            response = res.data;
        }).catch((err) => {
            response = err.response.data;
        })
        return response;
    }
)
// sil
export const workerDelete = createAsyncThunk(
    "worker/delete",
    async (id) => {
        var response;
        await deleteWorker(id).then((res) => {
            response = res.data;
        }).catch((err) => {
            response = err.response.data;
        })
        return response;
    }
)
export const workerReducer = createSlice({
    name: 'worker',
    initialState,
    reducers: {
        clearWorkerErrors: (state) => {
            state.errors = {
                identificationNumber: null,
        name: null,
        password: null,
        lastName : null
            }
            state.message = null;
        }
       
    },
    extraReducers : (builder) => {
        builder.addCase(workerRegister.fulfilled, (state, action) => {
            console.log(action.payload);
            if (action.payload != null && action.payload?.status == 400) {
                state.errors = action.payload.errors; 
                state.message = action.payload.message;
            }
            if (action.payload != null && action.payload?.status == 200) {
                alert("Çalışan Eklendi");
            }
        }).addCase(getWorkerList.fulfilled, (state, action) => {
            state.workers = action.payload;
            console.log(action.payload);
        }).addCase(workerDelete.fulfilled, (state, action) => {
            console.log(action.payload);
            if (action.payload != null && action.payload?.status == 200) {
                alert("Çalışan Silindi")
            }
    })
    }
})
export const { clearWorkerErrors } = workerReducer.actions;
export default workerReducer.reducer;