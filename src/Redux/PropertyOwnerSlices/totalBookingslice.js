import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTotalBooking = createAsyncThunk(
  "totolBooking/fetchTotalBooking",
  async () => {
    const response = await axios.get(
      "http://bantford.prometteur.in/propertyOwner/total-bookings",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    return response.data;
  }
);

const totalBookingSlice = createSlice({
  name: "totalbooking",
  initialState: {
    ApprovepropertiesPO: [],
  },
  extraReducers: {
    [fetchTotalBooking.pending]: (state, action) => {
      // console.log("pending");
    },
    [fetchTotalBooking.fulfilled]: (state, action) => {
      // console.log("pending");
      state.ApprovepropertiesPO = action.payload;
    },
    [fetchTotalBooking.rejected]: (state, action) => {
      // console.log("rejected error");
    },
  },
});

export default totalBookingSlice.reducer;
