import React, { useState } from "react";

const PropertyFilter = () => {
  const [activeStatus, setActiveStatus] = useState("All Status");

  const statusOptions = ["All Status", "For Rent", "For Sale"];

  return (
    <div className=" p-0 lg:p-8 rounded-xl w-full max-w-screen-2xl mx-auto mt-10">
      {/* Top Button Row */}
     <div className="flex justify-center gap-[1px] px-4 sm:px-4 mb-0 overflow-x-auto">
  {statusOptions.map((status) => (
    <button
      key={status}
      onClick={() => setActiveStatus(status)}
      className={`whitespace-nowrap px-7 py-3 transition-colors duration-200 ${
        activeStatus === status
          ? "bg-white text-black border border-black"
          : "bg-[#004D42] text-white"
      }`}
    >
      {status}
    </button>
  ))}
</div>


      {/* Filter Row with Search in same row */}
      <form className="flex flex-wrap gap-[2px] items-end justify-center md:justify-between w-full bg-white shadow-md p-9  ">
        {/* Looking For (with Property Type options) */}
        <div className="flex flex-col w-50">
          <label className="block text-[#5F0F40] font-medium mb-2 ">Looking For</label>
          <select className="w-full border border-gray-300 rounded-md p-3">
            <option>Looking for</option>
            <option>Investment</option>
            <option>Family Home</option>
            <option>Apartment</option>
            <option>Commercial - Office - Shop</option>
            <option>Commercial Villa</option>
            <option>Duplex</option>
            <option>Full Floor</option>
            <option>Hotel Apartment</option>
            <option>Hotel Appartment</option>
            <option>Labour Camp</option>
            <option>Land Mixed Use</option>
            <option>Land Residential</option>
            <option>Office</option>
            <option>Penthouse</option>
            <option>Residential Building</option>
            <option>Retail</option>
            <option>Shop</option>
            <option>Show Room</option>
            <option>Staff Accommodation</option>
            <option>Townhouse</option>
            <option>Villa</option>
            <option>Warehouse</option>
          </select>
        </div>

        {/* Location */}
        <div className="flex flex-col w-60">
          <label className="block text-[#5F0F40] font-medium mb-2">Location</label>
          <select className="w-full border border-gray-300 rounded-md p-3">
            <option>All Locations</option>
            <option>Dubai Marina</option>
            <option>Downtown Dubai</option>
            <option>Palm Jumeirah</option>
          </select>
        </div>

        {/* Property Size */}
        <div className="flex flex-col w-60">
          <label className="block text-[#5F0F40] font-medium mb-2">Property Size</label>
          <select className="w-full border border-gray-300 rounded-md p-3">
            <option>Bedroom</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>any</option>

          </select>
        </div>

        {/* Budget */}
        <div className="flex flex-col w-60">
          <label className="block text-[#5F0F40] font-medium mb-2">Your Budget</label>
          <input
            type="number"
            placeholder="Max. Price"
            className="w-full border border-gray-300 rounded-md p-3"
          />
        </div>

        {/* Submit Button */}
        <div className="flex flex-col w-60 justify-end">
          <button
            type="submit"
           className="w-full px-6 py-3 bg-[#004D42] text-white border border-black hover:bg-black hover:text-white"

          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyFilter;
