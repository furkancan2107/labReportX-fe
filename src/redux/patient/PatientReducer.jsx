import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { patientRegister } from "../../server/api";

const initialState = {
    status: null,
    errors: {
        identificationNumber: null,
        name: null,
        password: null,
        lastName : null
    }
    
}
// kayıt 
export const savePatient = createAsyncThunk(
    "auth/login",
    async (body) => {
        var response;
        await patientRegister(body).then((res) => {
            response = res.data;
        }).catch((err) => {
            response = err.response.data;
        })
        return response;
    }
)


export const patientReducer = createSlice({
    name: 'patient',
    initialState,
    reducers: {
        clearErrors: (state) => {
            state.errors = {
        identificationNumber: null,
        name: null,
        password: null,
        lastName : null
    };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(savePatient.fulfilled, (state, action) => {
            if (action.payload != null && action.payload?.errors != null) {
                state.status = action.payload.status;
                state.errors = action.payload.errors;
            }
            if (action.payload != null && action.payload?.status == 200) {
                state.status = 200;
            }
        })
    }
    
})
export const { clearErrors } = patientReducer.actions;
export default patientReducer.reducer;