// import AllProperties from "../AdminPanel/TabsPages/AllProperties/AllProperties";
import allapprovedSlice from "./PropertyOwnerSlices/allapprovedSlice";
import allcategoriesSlice from "./PropertyOwnerSlices/allcategoriesSlice";
import AllpendingSlice from "./PropertyOwnerSlices/AllpendingSlice";
import allRejectedSlice from "./PropertyOwnerSlices/allRejectedSlice";
import allvenuSlice from "./PropertyOwnerSlices/allvenuSlice";
import allVisitors from "./PropertyOwnerSlices/allVisitors";
import profileSlice from "./PropertyOwnerSlices/profileSlice";
import totalAmountSlice from "./PropertyOwnerSlices/totalAmountSlice";
import totalBookingslice from "./PropertyOwnerSlices/totalBookingslice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    Allvenue: allvenuSlice,
    POCategories: allcategoriesSlice,
    POPendingProperty: AllpendingSlice,
    POApprovedProperty: allapprovedSlice,
    PORejectedProperties: allRejectedSlice,
    // POBookings: totalBookingslice,
    // POAmount: totalAmountSlice,
    Profile: profileSlice,
    allvisitors: allVisitors,
  },
});

export default store;
