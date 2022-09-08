import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteForAdmin = () => {
  // const admin = { isLoggedIn: "false", profile: "admin" };

  const userIs = JSON.parse(localStorage.getItem("user"));
  // console.log("users is ", userIs);
  // console.log("users is ", userIs.admin.profile);

  return userIs.admin.profile === "admin" ? (
    <Outlet />
  ) : (
    <>
      <Navigate to="/" />
      {alert("Sorry! You can't access, you have to login")}
    </>
  );
};

export default PrivateRouteForAdmin;
