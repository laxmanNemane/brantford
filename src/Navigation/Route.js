import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import ForgetPassword from "../Components/ForgetPassword";
import Login from "../Pages/Login";
import Sidebar from "../Layout/Sidebar";
import DasbordPage from "../Pages/DasbordPage";

const Routing = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<p className="container mt-5">Home Page</p>} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        {/* admin panel */}
        <Route path="/"  element={<DasbordPage />}/>

        {/* <Route path="*" element={<h1>Page is Not Found</h1>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
