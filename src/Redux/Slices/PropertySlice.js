import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const fetchAllPropert = createAsyncThunk(
    'property/fetchAllPropert',
    async ( ) => {
      const response = await userAPI.fetchById(userId)
      return response.data
    }
  )


const propertySlice=createSlice({
    name:"property",
    initialState:{
        
    }
})
  

