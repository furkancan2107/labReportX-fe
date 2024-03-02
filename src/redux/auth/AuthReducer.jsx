import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, verifyUser } from "../../server/api";

const initialState = {
    id: null,
    token: null,
    identificationNumber: null,
    role: null,    
}
// login
export const signIn = createAsyncThunk(
    "auth/login",
    async (body) => {
        var response;
        await login(body).then((res) => {
            response = res.data;
        }).catch((err) => {
            response = err.response.data;
        })
        return response;
    }
)
// logout

// verify user
export const validate = createAsyncThunk(
    "auth/verify",
    async () => {
        var response;
        await verifyUser().then((res) => {
            response = res.data;
        }).catch((err) => {
            response = err.response.data;
        })
        return response;
    }
)
export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(signIn.fulfilled, (state, action) => {
            console.log(action.payload);
            if (action.payload != null && action.payload?.token != null) {
                state.role = action.payload.user.role;
                localStorage.setItem('role', state.role);
            }
        }).addCase(validate.fulfilled, (state, action) => {
            console.log(action.payload);
             if (action.payload != null && action.payload?.role != null) {
                state.role = action.payload.role;
                localStorage.setItem('role', state.role);
            }
        })
    }
    
}
);

export default authReducer.reducer;


