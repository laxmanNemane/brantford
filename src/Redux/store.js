import allvenuSlice from "./PropertyOwnerSlices/allvenuSlice";
import AdminAuthSlice from "./Slices/AdminAuthSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    admin: AdminAuthSlice,
    Allvenue: allvenuSlice,
  },
});

export default store;
