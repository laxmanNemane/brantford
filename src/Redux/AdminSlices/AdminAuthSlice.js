import { createSlice } from "@reduxjs/toolkit";


const AdminAuthSlice = createSlice({
    name:"admin",
    initialState:{
        admin:[],
        status:""

    },
    reducer:{
        login:(state ,action)=>{
            state.admin = action.payload
            state.status = "Admin is Logged In"
        },
        logOut:(state , action)=>{
            state.admin =""
        }

    }
})


export const {login , logout} = AdminAuthSlice.actions
export default AdminAuthSlice.reducer