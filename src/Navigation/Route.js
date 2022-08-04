import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import ForgetPassword from "../Pages/ForgetPassword";
import Login from "../Pages/Login";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={"This is Home Page"} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        {/* <Route path="*" element={<h1>Page is Not Found</h1>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
