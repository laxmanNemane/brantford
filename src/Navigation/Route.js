import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "../Layout/Navbar";
import ForgetPassword from "../Components/ForgetPassword";
import Login from "../Pages/Login";
// import Sidebar from "../Layout/Sidebar";
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

import OfficesDetailPage from "../EndUserPanel/OfficesDetailPage";
// import Footer from "../Layout/Footer";
import TermsCondition from "../EndUserPanel/TermsCondition";
import UserDashbord from "../UserPanel/DashbordUser/UserDashbord";
import Spaces from "../UserPanel/DashbordUser/Spaces";
import Visitors from "../UserPanel/DashbordUser/Visitors";
import AddAmenity from "../UserPanel/DashbordUser/ModelPropertyOwner/AddAmenity";
import AddImages from "../UserPanel/DashbordUser/ModelPropertyOwner/AddImages";
import AddLocation from "../UserPanel/DashbordUser/ModelPropertyOwner/AddLocation";
import PropertyOwnerPropertyDetail from "../UserPanel/DashbordUser/PropertyOwnerPropertyDetail";
import PrivateRoute from "./PrivateRoute";
import AllProperties from "../AdminPanel/TabsPages/AllProperties/AllProperties";

import ContactForm from "../Components/BrantFordLandingPages/ContactForm";
import EndUserProfilePage from "../AdminPanel/EndUserProfilePage";
import AdminRequirements from "../AdminPanel/AdminRequirements";
import AdminUserDetails from "../AdminPanel/AdminUserDetails";

import PrivateRouteForAdmin from "./PrivateRoute";
import PrivateRouteForuser from "./PrivteRouteForOwner";
import UpdateProperty from "../UserPanel/DashbordUser/ModelPropertyOwner/UpdateProperty";
import BookedSpaces from "../UserPanel/DashbordUser/BookedSpaces";

import AdminChat from "../AdminPanel/AdminChat";
import AdminMail from "../AdminPanel/AdminMail";
import AdminMarket from "../AdminPanel/AdminMarket";
import AdminCalendar from "../AdminPanel/AdminCalendar";

import CitiWiseProperty from "../Components/BrantFordLandingPages/CitiWiseProperty";
import CompareSidebar from "../Components/BrantFordLandingPages/CompareSidebar";
import FilterdPage from "../Components/BrantFordLandingPages/FilterdPage";
import ViewAllRentedPage from "../Components/BrantFordLandingPages/allfilteredPages/ViewAllRentedPage";
import ForSale from "../Components/BrantFordLandingPages/allfilteredPages/ForSale";
import SerchProperty from "../Components/BrantFordLandingPages/allfilteredPages/SerchProperty";
import ComparisonProperty from "../Components/BrantFordLandingPages/ComparisonProperty";

import PropertyCalc from "../Redux/PropertyOwnerSlices/PropertyCalc";
import Appointments from "../Redux/PropertyOwnerSlices/Appointments";
import AdminAppointments from "../AdminPanel/AdminAppointments";
import SpaceBookings from "../Redux/PropertyOwnerSlices/SpaceBookings";
import ChatBot from "../Components/ChatBot";

// import AdminRequirements from "../AdminPanel/AdminRequirements";

// import PrivateRouteForAdmin from "./PrivateRoute";
// import PrivateRouteForuser from "./PrivteRouteForOwner";
// import UpdateProperty from "../UserPanel/DashbordUser/ModelPropertyOwner/UpdateProperty";
// import AdminRequirements from "../AdminPanel/AdminRequirements";

const Routing = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<BrantfordPage />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          exact
          path="/office-detail/:name"
          element={<OfficesDetailPage />}
        />
        <Route path="/city/:name" element={<CitiWiseProperty />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/contactUs" element={<ContactForm />} />
        <Route path="" element={<ChatBot/>} />

        <Route path="/allSpaces" element={<FilterdPage />} />
        <Route path="/allrentedspaces" element={<ViewAllRentedPage />} />
        <Route path="/salingproperties" element={<ForSale />} />
        <Route path="/searchproperties" element={<SerchProperty />} />
        <Route path="/copareproperty" element={<ComparisonProperty />} />
        <Route path="/enduserprofile" element={<EndUserProfilePage />} />

        {/* =================property owner=================== */}
        <Route element={<PrivateRouteForuser />}>
          <Route path="/userDashbord" element={<UserDashbord />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/visitors" element={<Visitors />} />
          <Route path="/amenity" element={<AddAmenity />} />
          <Route path="/image" element={<AddImages />} />
          <Route path="/map" element={<AddLocation />} />
          <Route path="/property" element={<PropertyOwnerPropertyDetail />} />
          <Route path="/updatePage" element={<UpdateProperty />} />
          <Route path="/profile" element={<AdminProfilePage />} />
          <Route path="/pendingSpaces" element={<BookedSpaces />} />
          <Route path="/propertycalc" element={<PropertyCalc />} />
          <Route path="/propertymarket" element={<AdminMarket />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/spacebookings" element={<SpaceBookings />} />

        </Route>

        {/* </Route> */}
        <Route element={<PrivateRouteForAdmin />}>
          <Route path="/dashboard" element={<DasbordPage />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/revenu" element={<RevenuAdmin />} />
          <Route path="/tenants" element={<AdminTenants />} />
          <Route path="/detail" element={<PropertyDetailPage />} />
          <Route path="/privacy-policy" element={<AdminPrivacyPolicy />} />
          <Route path="/categories" element={<AdminCategories />} />
          <Route path="/all-properties" element={<AllProperties />} />
          <Route path="/detail" element={<PropertyDetailPage />} />
          <Route path="/profile" element={<AdminProfilePage />} />
          <Route path="/requirements" element={<AdminRequirements />} />
          <Route path="/chat" element={<AdminChat />} />
          <Route path="/mail" element={<AdminMail />} />
          <Route path="/market" element={<AdminMarket />} />
          <Route path="/calendar" element={<AdminCalendar />} />
          <Route path="/adminappointments" element={<AdminAppointments />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Routing;
