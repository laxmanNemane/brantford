import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchAllVisitors = createAsyncThunk(
  "visitors/FetchAllVisitors",
  async () => {
    const response = await axios.get(
      `bantford.prometteur.in/propertyOwner/all-visitors?visits=today`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
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
