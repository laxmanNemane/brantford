import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllSpaces = createAsyncThunk(
  "spaces/fetchAllSpaces",
  async () => {
    const response = await axios.get(
      `http://bantford.prometteur.in/endUser/get-all-spces-wr`
    );

    return response.data;
  }
);

export const fetchAllCategory = createAsyncThunk(
  "spaces/fetchAllCategory",
  async () => {
    const response = await axios.get(
      `http://bantford.prometteur.in/endUser/all-categaries`
    );

    return response.data;
  }
);

const endUserSliices = createSlice({
  name: "spaces",
  initialState: {
    AllSpacesEndUser: [],
    categoryEndUser: [],
  },
  extraReducers: {
    [fetchAllSpaces.pending]: (state, action) => {
      // console.log("pending");
    },
    [fetchAllSpaces.fulfilled]: (state, action) => {
      // console.log("pending");
      state.AllSpacesEndUser = action.payload;
    },
    [fetchAllSpaces.rejected]: (state, action) => {
      // console.log("rejected error");
    },
    [fetchAllCategory.pending]: (state, action) => {
      // console.log("pending");
    },
    [fetchAllCategory.fulfilled]: (state, action) => {
      // console.log("pending");
      state.categoryEndUser = action.payload;
    },
    [fetchAllCategory.rejected]: (state, action) => {
      // console.log("rejected error");
    },
  },
});

export default endUserSliices.reducer;
