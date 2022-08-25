import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import ForgetPassword from "../Components/ForgetPassword";
import Login from "../Pages/Login";
import Sidebar from "../Layout/Sidebar";
import DasbordPage from "../Pages/DasbordPage";
import Properties from "../AdminPanel/Properties";
import RevenuAdmin from "../AdminPanel/RevenuAdmin";
import AdminTenants from "../AdminPanel/AdminTenants";
import AdminProfilePage from "../AdminPanel/AdminProfilePage";
import PropertyDetailPage from "../AdminPanel/PropertyDetailPage";
import AdminPrivacyPolicy from "../AdminPanel/AdminPrivacyPolicy";
import AdminCategories from "../AdminPanel/AdminCategories";
import BrantfordPage from "../Pages/BrantfordPage";
import SignUp from "../Pages/SignUp";

const Routing = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<p className="container mt-5">Home Page</p>} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        {/* langding page  */}
        <Route path="/" element={<BrantfordPage />} />

        {/* admin panel */}
        <Route path="/dashbord" element={<DasbordPage />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/revenu" element={<RevenuAdmin />} />
        <Route path="/tenants" element={<AdminTenants />} />
        <Route path="/profile" element={<AdminProfilePage />} />
        <Route path="/detail" element={<PropertyDetailPage />} />
        <Route path="/privacy-policy" element={<AdminPrivacyPolicy />} />
        <Route path="/categories" element={<AdminCategories />} />

        {/* <Route path="*" element={<h1>Page is Not Found</h1>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
