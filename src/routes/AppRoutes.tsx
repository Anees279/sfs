import React ,{lazy }from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ResponsiveRootsBar from "../components/navBar";
import { MainHome } from "../layouts/mainHome";
import Footer from "../components/Footer";
import FeaturedListings from "../pages/home/FeaturedListings";
import { useIsMainHome } from "../hooks/useIsMainHome";
const Apartments = lazy(() => import("../layouts/apartment"));
export const Root = () => {
  return (
    <BrowserRouter>
      <AppRoutesContent />
    </BrowserRouter>
  );
};

const AppRoutesContent = () => {
  const isMainHome = useIsMainHome();

  return (
    <div>
      {!isMainHome && <ResponsiveRootsBar/>}
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/for-sale/apartments" element={<Apartments />} />
         <Route path="/featured-listings" element={<FeaturedListings />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
};
