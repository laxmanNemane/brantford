import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteForuser = () => {
  const PropertyOwner = JSON.parse(localStorage.getItem("user"));
  // console.log("users is ", userIs);
  // console.log("users is ", userIs.admin.profile);

  return PropertyOwner.admin.profile === "property-owner" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouteForuser;
