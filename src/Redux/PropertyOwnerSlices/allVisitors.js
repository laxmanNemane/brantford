import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchAllVisitors = createAsyncThunk(
  "visitors/FetchAllVisitors",
  async (data) => {
    console.log(data);
    console.log("data is not here");
    const response = await axios.get(
      `http://bantford.prometteur.in/propertyOwner/all-visitors?visits=${
        data ? data : "yesterday"
      }`,
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
