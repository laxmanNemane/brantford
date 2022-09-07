import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteForuser = () => {
  const PropertyOwner = { isLoggedIn: "false", profile: "owner" };

  return !PropertyOwner &&
    PropertyOwner.isLoggedIn &&
    PropertyOwner.profile === "owner" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouteForuser;
