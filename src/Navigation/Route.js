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

const Routing = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<p className="container mt-5">Home Page</p>} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        {/* admin panel */}
        <Route path="/" element={<Navbar />} />
        <Route path="/dashbord" element={<DasbordPage />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/revenu" element={<RevenuAdmin />} />
        <Route path="/tenants" element={<AdminTenants />} />
        <Route path="/profile" element={<AdminProfilePage />} />
        <Route path="/detail" element={<PropertyDetailPage />} />
        <Route path="/privacy-policy" element={<AdminPrivacyPolicy />} />

        {/* <Route path="*" element={<h1>Page is Not Found</h1>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
