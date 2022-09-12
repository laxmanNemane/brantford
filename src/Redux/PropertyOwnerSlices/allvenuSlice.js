import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchAllSpaces = createAsyncThunk(
  "space/FetchAllSpaces",
  async () => {
    const response = await axios.get(
      "http://bantford.prometteur.in/propertyOwner/all-venues",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    return response.data;
  }
);

const allSpcaesSlice = createSlice({
  name: "spaces",
  initialState: {
    AllSpaces: [],
  },
  extraReducers: {
    [FetchAllSpaces.pending]: (state, action) => {
      // console.log("pending");
    },
    [FetchAllSpaces.fulfilled]: (state, action) => {
      // console.log("pending");
      state.AllSpaces = action.payload;
    },
    [FetchAllSpaces.rejected]: (state, action) => {
      // console.log("rejected error");
    },
  },
});

export default allSpcaesSlice.reducer;
