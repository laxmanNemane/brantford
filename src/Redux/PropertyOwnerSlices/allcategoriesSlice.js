import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const FetchAllCategories = createAsyncThunk(
  "categories/FetchAllCategories",
  async () => {
    const response = await axios.get(
      "bantford.prometteur.in/propertyOwner/all-categaries",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    return response.data;
  }
);

const AllPropertyOwnerCategoriesSlice = createSlice({
  name: "Categories",
  initialState: {
    AllPropertyOwnerCategories: [],
  },
  extraReducers: {
    [FetchAllCategories.pending]: (state, action) => {
      console.log("pending");
    },
    [FetchAllCategories.fulfilled]: (state, action) => {
      console.log("pending");
      state.AllPropertyOwnerCategories = action.payload;
    },
    [FetchAllCategories.rejected]: (state, action) => {
      console.log("rejected error");
    },
  },
});

export default AllPropertyOwnerCategoriesSlice.reducer;
