import React ,{lazy }from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ResponsiveRootsBar from "../components/navBar";
import { MainHome } from "../layouts/mainHome";
import Footer from "../components/Footer";
import FeaturedListings from "../pages/home/FeaturedListings";
import  useHideOnRoutes  from "../hooks/useHideOnRoutes";
import SearchBar from '../components/SearchBar'

const Apartments = lazy(() => import("../layouts/apartment"));
const Townhouses = lazy(() => import("../pages/for sale/townhouses"));
const Penthouses = lazy(() => import("../pages/for sale/penthouse"));
const OfficeForSale = lazy(() => import("../pages/for sale/OfficeForSale"));
const Duplexes = lazy(() => import("../pages/for sale/duplexForSale"));
const WarehouseForSale = lazy(() => import("../pages/for sale/wherehouseForSale"));
const StaffAccommodationForSale = lazy(() => import("../pages/for sale/StaffAccommodationForSale"));
const LandForSale = lazy(() => import("../pages/for sale/landForSale"));
const LuxuryProperties = lazy(() => import("../pages/for sale/LuxuryPropertie"));
const Villas =lazy(()=> import("../pages/For rent/villasForRent"))
const AparmentForRent =lazy(()=> import("../pages/For rent/appartmentForRent"))
const OffSure = lazy(() => import("../pages/offSure/offsure"));
const PropertyManagement = lazy(() => import("../pages/services/propertyManagemet"));

export const Root = () => {
  return (
    <BrowserRouter>
      <AppRoutesContent />
    </BrowserRouter>
  );
};

const AppRoutesContent = () => {
  const showComponents = useHideOnRoutes(["/property-management-dubai", "/"]);
  const isMainHome = useHideOnRoutes(["/"]);

  return (
    <div>
      {showComponents && <ResponsiveRootsBar />}
      {showComponents && <SearchBar />}
   
      {/* Lazy loading the Apartments component */}
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/for-sale/apartments" element={<Apartments />} />
         <Route path="/featured-listings" element={<FeaturedListings />} />
         <Route path="/for-sale/townhouses" element={<Townhouses />} />
         <Route path="/for-sale/penthouses" element={<Penthouses />} />
         <Route path="/for-sale/offices" element={<OfficeForSale />} />
         <Route path="/for-sale/duplexes" element={<Duplexes />} />
          <Route path="/for-sale/warehouse" element={<WarehouseForSale />} />
          <Route path="/for-sale/staff-accommodation" element={<StaffAccommodationForSale />} />
          <Route path="/for-sale/land" element={<LandForSale />} />
          <Route path="/for-sale/luxury-properties" element={<LuxuryProperties />} />
          <Route path="/for-rent/Villas-for-rent" element={<Villas/>}></Route>
          <Route path="/for-rent/apartments" element={<AparmentForRent/>}></Route>
          <Route path="/off-plan-properties-dubai" element={<OffSure />} />
          <Route path="/property-management-dubai" element={<PropertyManagement />} />

          {/* Add more routes as needed */}
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
};
