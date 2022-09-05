import AdminAuthSlice from "./Slices/AdminAuthSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    admin: AdminAuthSlice,
  },
});

export default store;
