import React from "react";
import bgImage from "../../assets/images/Home Page/pexels-huy-phan-316220-2826787.jpg"; // Replace with your own background image

const HassleFreeExperience = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-white py-8 mx-auto border-y-[50px] border-[#FB8B24]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#004d42] bg-opacity-70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row gap-[0px]">
          {/* Left Side Steps */}
          <div className="flex flex-col md:flex-row max-w-[600px] md:mt-40 mx-auto md:mx-0 md:space-x-6 space-y-6 md:space-y-0 md:space-x-0 md:items-start items-center">
            {/* Left Column (Heading + Step 1) */}
            <div className="flex-1 flex flex-col space-y-2 mt-20 max">
              <div>
                <h2 className="text-[27.3px] leading-[36px] font-medium text-center md:text-left max-w-[300px] align-middle font-[Font_1] mb-10">
                  The Binayah Hassle-Free Experience
                </h2>
              </div>
              <div className="p-4 max-w-[400px]">
                <h3 className="text-4xl font-semibold mb-2">01.</h3>
                <hr className="my-8 max-w-[30%]" />
                <p className="text-[22px] leading-[35px] font-medium align-middle font-[Font_1]">
                  Contact us to find a suitable property for sale or rent.
                </p>
                <hr className="my-8 max-w-[30%]" />
              </div>
            </div>

            {/* Right Column (Steps 2 and 3) */}
            <div className="flex-1 flex flex-col space-y-6">
              <div className="p-4 max-w-[350px]">
                <h3 className="text-4xl font-semibold mb-2">02.</h3>
                <p className="text-[22px] leading-[35px] font-medium align-middle font-[Font_1]">
                  Schedule property visits and viewings in person or virtually.
                </p>
                <hr className="my-8 max-w-[30%]" />
              </div>
              <div className="p-4 max-w-[340px]">
                <h3 className="text-4xl font-semibold mb-2">03.</h3>
                <p className="text-[22px] leading-[35px] font-medium align-middle font-[Font_1]">
                  Complete payment & transfer ownership within a week.
                </p>
                <hr className="my-8 max-w-[30%]" />
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form className="flex-1 bg-white p-8 grid gap-4 text-black shadow-lg max-w-[500px]">
            {/* Form Heading */}
            <div className="col-span-full mb-2">
              <h2 className="text-[25px] font-semibold text-[#5F0F40]">For quick assistance.</h2>
              <p className="text-gray-700 text-[17px]">Send us details to get quick assistance now!</p>
            </div>

            {/* Inquiry Type */}
            <div>
              <label className="block font-medium mb-1 text-[#5F0F40] text-[14px] max-w-[500px]">Inquiry Type</label>
              <select className="p-3 border border-black bg-white w-full">
                <option>Buy</option>
                <option>Rent</option>
                <option>Sell</option>
              </select>
            </div>

            {/* First Name and Last Name Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="p-3 border border-black bg-white" />
              <input type="text" placeholder="Last Name" className="p-3 border border-black bg-white" />
            </div>

            {/* Email */}
            <input type="email" placeholder="Email Address" className="p-3 border border-black bg-white" />

            {/* Mobile No */}
            <div className="flex gap-2">
              <span className="p-3 border border-black bg-white w-[70px] flex items-center justify-center">+971</span>
              <input type="tel" placeholder="Mobile no" className="flex-1 p-3 border border-black bg-white" />
            </div>

            {/* Property */}
            <label className="block font-medium mb-1 text-[#5F0F40] text-[14px]">Property</label>
            <select className="p-3 border border-black bg-white">
              <option>Select type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Penthouse</option>
              <option>Office</option>
            </select>

            {/* Max Price & Beds */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="number" placeholder="Max price" className="p-3 border border-black bg-white" />
              <select className="p-3 border border-black bg-white">
                <option>No of beds</option>
                <option>Studio</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>
            </div>

            {/* GDPR Agreement */}
            <h1 className="text-[16px] font-semibold text-[#5F0F40]">GDPR Agreement</h1>
            <label className="flex items-center gap-2 col-span-full mt-2 text-sm text-[#5F0F40]">
              <input type="checkbox" className="accent-[#5F0F40]" />
              <span>I consent to having this website store my submitted information</span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="col-span-full bg-[#9A031E] hover:bg-[#0F4C5C] text-white font-bold py-3 px-6 mt-2 border border-black"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HassleFreeExperience;
