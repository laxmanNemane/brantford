import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const FetchAllPendingProperties = createAsyncThunk(
  "pendingProperty/FetchAllPendingProperties",
  async () => {
    const response = await axios.get(
      "bantford.prometteur.in/propertyOwner/all-pnedingProperties",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    return response.data;
  }
);

const AllPendingSlice = createSlice({
  name: "Pendingproperties",
  initialState: {
    PendingPropertiesOwner: [],
  },
  extraReducers: {
    [FetchAllPendingProperties.pending]: (state, action) => {
      console.log("pending");
    },
    [FetchAllPendingProperties.fulfilled]: (state, action) => {
      console.log("pending");
      state.PendingPropertiesOwner = action.payload;
    },
    [FetchAllPendingProperties.rejected]: (state, action) => {
      console.log("rejected error");
    },
  },
});

export default AllPendingSlice.reducer;
