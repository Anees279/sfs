
import React from "react";
import img1 from "../../assets/images/Home Page/Background.png";
import img2 from "../../assets/images/Home Page/Container.png";
import img3 from "../../assets/images/Home Page/Container (2).png";
import img4 from "../../assets/images/Home Page/Overlay+Shadow (1).png";
import img5 from "../../assets/images/Home Page/Overlay+Shadow.png";
import img6 from "../../assets/images/Home Page/Container (3).png";

const ExploreCommunities = () => {
  return (
    <div className="py-20 px-4 md:px-6 lg:px-10 max-w-screen-lg mx-auto">
      <h1 className="font-lato font-normal text-3xl md:text-4xl lg:text-5xl leading-snug tracking-normal text-center capitalize text-[#0F4C5C] mb-10">
        Explore Dubai's Most Desired Communities
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Column */}
        <div className="flex flex-col justify-between h-full gap-6">
          <div>
            <h2 className="text-2xl font-bold text-[#5F0F40] mb-2">Residential</h2>
            <p className="text-black-600 text-sm mb-4">
              Buy residential property in Dubai, Villas , Apartments , Penthouses or Townhouses that suits your family or Investment in Dubai Real Estate with high ROI.
            </p>
            <hr className="h-[1px] w-1/2 bg-gray-300 border-0" />
          </div>
          <div className="w-full rounded-xl overflow-hidden">
            <img
              src={img1}
              alt="Center"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#5F0F40] mb-2">Commercial</h2>
            <p className="text-black-600 text-sm mb-4">
              Browse our commercial listings and discover Luxury Office Spaces , Shops, Warehouses and Other Commercial Spaces for sale and rent.
            </p>
            <hr className="h-[1px] w-1/2 bg-gray-300 border-0" />
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col justify-between h-full gap-6">
          <div className="w-full rounded-xl overflow-hidden">
            <img
              src={img2}
              alt="Tall"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full rounded-xl overflow-hidden">
            <img
              src={img3}
              alt="Short"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Third Column */}
        <div className="flex flex-col justify-between h-full gap-6">
          <div className="w-full rounded-xl overflow-hidden">
            <img
              src={img4}
              alt="Image 1"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full rounded-xl overflow-hidden">
            <img
              src={img5}
              alt="Image 2"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full rounded-xl overflow-hidden">
            <img
              src={img6}
              alt="Image 3"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCommunities;
