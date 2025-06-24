import React from 'react';
import backgroundImage from '../assets/images/Home Page/1.jpg'; // adjust the path
import ResponsiveRootsBar from '../components/navBar'; // adjust the path if needed
import PropertyFilter from '../pages/home/propertyfilter'; // adjust the path if needed
import SfsComponent from '../pages/home/sfsComponent'; // adjust the path if needed
import RealEstateComponent from '../pages/home/RealEstateComponent'; // adjust the path if needed
import FeaturedListings from '../pages/home/FeaturedListings'; // adjust the path if needed
import ImageComponent from '../pages/home/ImageComponen'; // adjust the path if needed
import ExploreCommunities from '../pages/home/exploreCommunities'; // adjust the path if needed
import HassleFreeExperience from '../pages/home/hasselFreeExperience'; // adjust the path if needed
import TopTrendingDevelopments from '../pages/home/TopTrendingDevelopments'; // adjust the path if needed
import PropertyManagementServices from '../pages/home/PropertyManagementServices'; // adjust the path if needed
import ClientTestimonials from '../pages/home/ClientTestimonials'; // adjust the path if needed
export const MainHome = () => {
  return (
    <>
      {/* Background section with navbar and text */}
      <div className="main-home">
        <div
          className="background-image relative"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '66.67vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
          }}
        >
          {/* Navbar */}
          <ResponsiveRootsBar />

          {/* Centered hero content */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
           <div className="flex-1 flex flex-col justify-center items-center text-white mb-40 text-center sm:text-left">
  <p className="m-3 leading-tight mb-2 text-white text-[22px]">
    Real Estate Dubai
  </p>
  <h1 className="text-[42px] font-normal m-0 leading-tight">
    Properties for Sale & Rent
  </h1>
</div>

          </div>
        </div>
      </div>

      {/* Overlapping PropertyFilter (now scroll-friendly) */}
      <div className="relative z-10 -mt-[200px] px-4 max-w-8xl mx-auto">
        <PropertyFilter />
      </div>
      <SfsComponent />
      <RealEstateComponent />
      <FeaturedListings />
      <ImageComponent />
      <ExploreCommunities />
      <HassleFreeExperience />
      <TopTrendingDevelopments />
      <PropertyManagementServices />
      <ClientTestimonials />
      {/* Add more components as needed */}
    </>
  );
};
