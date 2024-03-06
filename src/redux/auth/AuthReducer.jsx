import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, logout, verifyUser } from "../../server/api";

const initialState = {
    id: null,
    token: null,
    identificationNumber: null,
    role: null,   
    message: null
    
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
export const logoutUser = createAsyncThunk(
    "auth/logout",
    async () => {
        var response;
        await logout().then((res) => {
            response = res.data;
        }).catch((err) => {
            response = err.response.data;
        })
        return response;
    }
)

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
        clearMessage: (state)=> {
            state.message = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signIn.fulfilled, (state, action) => {

            console.log(action.payload);
            if (action.payload != null && action.payload?.message != null) {
                state.message = action.payload.message;
            }

            if (action.payload != null && action.payload?.token != null) {
                state.role = action.payload.user.role;
                state.id = action.payload.user.id;
                localStorage.setItem('role', state.role);
                localStorage.setItem('userId',state.id);
            }
        }).addCase(validate.fulfilled, (state, action) => {
            
             if (action.payload != null && action.payload?.role != null) {
                state.role = action.payload.role;
                localStorage.setItem('role', state.role);
            }
        }).addCase(logoutUser.fulfilled, (state, action) => {
            console.log(action.payload)
           
                localStorage.setItem("role", null);
             
                
             
        })
    }
    
}
);
export const { clearMessage } = authReducer.actions;
export default authReducer.reducer;


