import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchAllApproveProperties = createAsyncThunk(
  "ApproveProperty/FetchAllApproveProperties",
  async () => {
    const response = await axios.get(
      "http://bantford.prometteur.in/propertyOwner/all-approvedProperties",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    return response.data;
  }
);

const AllApprovePropertyOwnerSlice = createSlice({
  name: "ApproveProperties",
  initialState: {
    ApprovepropertiesPO: [],
  },
  extraReducers: {
    [FetchAllApproveProperties.pending]: (state, action) => {
      // console.log("pending");
    },
    [FetchAllApproveProperties.fulfilled]: (state, action) => {
      // console.log("pending");
      state.ApprovepropertiesPO = action.payload;
    },
    [FetchAllApproveProperties.rejected]: (state, action) => {
      // console.log("rejected error");
    },
  },
});

export default AllApprovePropertyOwnerSlice.reducer;
