import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteForAdmin = () => {
  const admin = { isLoggedIn: "false", profile: "admin" };

  return !admin && admin.isLoggedIn && admin.profile === "admin" ? (
    <Outlet />
  ) : (
    <>
      <Navigate to="/" />
      {alert("Sorry! You can't access, you have to login")}
    </>
  );
};

export default PrivateRouteForAdmin;
