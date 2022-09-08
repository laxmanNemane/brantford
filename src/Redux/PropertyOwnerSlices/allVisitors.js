import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchAllVisitors = createAsyncThunk(
  "visitors/FetchAllVisitors",
  async () => {
    const response = await axios.get(
      "bantford.prometteur.in/propertyOwner/all-visitors",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      },
      { params: "visits=7 days" }
    );
    return response.data;
  }
);

const AllVisitorsSlice = createSlice({
  name: "AllVisitors",
  initialState: {
    AllVisitors: [],
  },
  extraReducers: {
    [FetchAllVisitors.pending]: (state, action) => {
      // console.log("pending");
    },
    [FetchAllVisitors.fulfilled]: (state, action) => {
      // console.log("pending");
      state.AllVisitors = action.payload;
    },
    [FetchAllVisitors.rejected]: (state, action) => {
      // console.log("rejected error");
    },
  },
});

export default AllVisitorsSlice.reducer;
