import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

console.log("inside of profile slice");

export const getProfileUser = createAsyncThunk(
  "profile/getProfileUser",
  async () => {
    const response = await axios.get(
      "http://bantford.prometteur.in/admin/admin-profile",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    try {
      // console.log("profile response", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const allProfileUserSlice = createSlice({
  name: "user",
  initialState: {
    userProfile: [],
  },
  extraReducers: {
    [getProfileUser.pending]: (state, action) => {
      // console.log("pending");
    },
    [getProfileUser.fulfilled]: (state, action) => {
      // console.log("fillfilled");
      state.userProfile = action.payload;
    },
    [getProfileUser.rejected]: (state, action) => {
      // console.log("rejected error");
    },
  },
});

getProfileUser();

export default allProfileUserSlice.reducer;
