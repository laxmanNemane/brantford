import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchAllRejectedProperties = createAsyncThunk(
  "RejectedProperty/FetchAllRejectedProperties",
  async () => {
    const response = await axios.get(
      "http://bantford.prometteur.in/propertyOwner/all-rejectedPrpoerties",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    return response.data;
  }
);

const AllRejectedPropertyOwnerSlice = createSlice({
  name: "RejectedProperties",
  initialState: {
    RejectedpropertiesPO: [],
  },
  extraReducers: {
    [FetchAllRejectedProperties.pending]: (state, action) => {
      // console.log("pending");
    },
    [FetchAllRejectedProperties.fulfilled]: (state, action) => {
      // console.log("pending");
      state.RejectedpropertiesPO = action.payload;
    },
    [FetchAllRejectedProperties.rejected]: (state, action) => {
      // console.log("rejected error");
    },
  },
});

export default AllRejectedPropertyOwnerSlice.reducer;
