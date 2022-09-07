import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const admin = { isLoggedIn: "false" };

  return admin && admin.isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
