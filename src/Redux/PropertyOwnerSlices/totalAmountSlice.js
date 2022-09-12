import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTotalAmount = createAsyncThunk(
  "property/fetchTotalAmount",
  async () => {
    const response = await axios.get(
      "http://bantford.prometteur.in/propertyOwner/total-amountPaid",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    return response.data;
  }
);

const totalAmountSlice = createSlice({
  name: "Amount",
  initialState: {
    totalAmount: [],
  },
  extraReducers: {
    [fetchTotalAmount.pending]: (state, action) => {
      // console.log("pending");
    },
    [fetchTotalAmount.fulfilled]: (state, action) => {
      // console.log("pending");
      state.totalAmount = action.payload;
    },
    [fetchTotalAmount.rejected]: (state, action) => {
      // console.log("rejected error");
    },
  },
});

export default totalAmountSlice.reducer;
