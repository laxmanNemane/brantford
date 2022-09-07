import React from "react";
import { Navigate, Outlet } from "react-router-dom";

<<<<<<< HEAD
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
=======
const PrivateRoute = () => {
  const admin = { isLoggedIn: "false" };

  return admin && admin.isLoggedIn ? <Outlet /> : <Navigate to="/" />;
>>>>>>> d9163b9 (private route which is used to authorization)
};

export default PrivateRouteForAdmin;
