import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteHospital, hospitalList, hospitalSave } from "../../server/api";


const initialState = {
    status : null,
    errors: {
        name: null
    },
    hospitals : [],
    
}


// kayıt
export const registerHospital = createAsyncThunk(
    "hospital/save",
    async (body) => {
        var response;
        await hospitalSave(body).then((res) => {
            response = res.data;
        }).catch((err) => {
            response = err.response.data;
        })
        return response;
    }
)

// hastanelerin listesini getir
export const getHospitalList = createAsyncThunk(
    "hospital/list",
    async () => {
        var response;
        await hospitalList().then((res) => {
            response = res.data;
        }).catch((err) => {
            response = err.response.data;
        })
        return response;
    }
)
// sil
export const hospitalDelete = createAsyncThunk(
    "hospital/delete",
    async (id) => {
        var response;
        await deleteHospital(id).then((res) => {
            response = res.data;
        }).catch((err) => {
            response = err.response.data;
        })
        return response;
    }
)

export const hospitalReducer = createSlice({
    name: 'hospital',
    initialState,
    reducers: {
        clearNameError: (state) => {
              state.errors= {
        name: null
   }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerHospital.fulfilled, (state, action) => {
            console.log(action.payload);
            if (action.payload != null && action.payload?.status == 400) {
                state.errors = action.payload.errors;
            }
            if (action.payload != null && action.payload?.id != null) {
                state.status = 200;
                 if (state.status == 200) {
      alert("Kayıt Başarılı...");
      
    }
            }
        }).addCase(getHospitalList.fulfilled, (state, action) => {
            state.hospitals = action.payload;
            console.log(action.payload);
        }).addCase(hospitalDelete.fulfilled, (state, action) => {
            console.log(action.payload);
            if (action.payload != null && action.payload?.status == 200) {
                alert("Hastane Silindi")
            }
        })
    }
})
export const { clearNameError } = hospitalReducer.actions;
export default hospitalReducer.reducer;

