import React ,{lazy }from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ResponsiveRootsBar from "../components/navBar";
import { MainHome } from "../layouts/mainHome";
import Footer from "../components/Footer";
import FeaturedListings from "../pages/home/FeaturedListings";
import { useIsMainHome } from "../hooks/useIsMainHome";
import SearchBar from '../components/SearchBar'

const Apartments = lazy(() => import("../layouts/apartment"));
const Townhouses = lazy(() => import("../pages/for sale/townhouses"));
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
      {!isMainHome && <SearchBar />}
      {/* Lazy loading the Apartments component */}
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/for-sale/apartments" element={<Apartments />} />
         <Route path="/featured-listings" element={<FeaturedListings />} />
         <Route path="/for-sale/townhouses" element={<Townhouses />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
};
