import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const admin = { id: "1", name: "lakahn" };

  return admin ? <Outlet /> : Navigate("/");
};

export default PrivateRoute;
