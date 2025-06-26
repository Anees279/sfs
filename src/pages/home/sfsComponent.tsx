import React from "react";
import Image from "../../assets/images/Home Page/2.png"; // Replace with actual path to image
import bgImage from "../../assets/images/Home Page/3.png"; // adjust the path based on your folder structure

const SfsComponent = () => {
  return (
    <div
      className="px-0 flex flex-col md:flex-row items-center justify-between mx-auto max-w-screen-2xl"
     
    >
      {/* Left Vertical Text with Simulated Border Using Text Shadow - Hidden on small devices */}
      <div className="hidden md:flex flex-col items-center justify-center text-white text-8xl font-bold text-[100px] md:mr-6">
        {"SFS".split("").map((char, index) => (
          <span
            key={index}
            className="mb-2 px-2"
            style={{
              textShadow: `
                -1px -1px 0 #5F0F40,
                 1px -1px 0 #5F0F40,
                -1px  1px 0 #5F0F40,
                 1px  1px 0 #5F0F40
              `,
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Text and Image Section with Flex Layout */}
<div className="flex flex-col md:flex-row items-center justify-between flex-1 text-white md:ml-6 mt-6 md:mt-0 bg-[#0F4C5C] px-4  pt-4 md:pl-6 md:pr-0 md:py-0 w-full border border-white md:border-none rounded-none md:rounded-[52px]  max-w-screen-2xl">


        {/* Paragraph and Button */}
        <div className="md:w-1/2 p-8">
          <p className="text-lg mb-4">
            Welcome to SFS Properties Dubai, the Award-Winning Real Estate
            Agency that stands as a beacon of excellence among Dubai’s real
            estate companies. Our comprehensive portfolio features a diverse
            range of properties for sale and rent, crafted to meet your unique
            requirements. Our dedicated team comprises seasoned professionals,
            each with a wealth of experience spanning over three decades in the
            ever-evolving Dubai real estate landscape. Join us to explore your
            dream property and unlock the exceptional service that defines
            SFS Properties.
          </p>
        <button className="bg-[#E36414] text-white-900 px-6 py-2  font-semibold hover:bg-gray-200 hover:text-black transition">
            OUR STORY
          </button>
        </div>

        {/* Image */}
        <div className="md:w-3/4 mt-6 md:mt-0 flex justify-end items-end px-0 md:px-0">
          <img
            src={Image}
            alt="Property"
            className="w-full h-auto object-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default SfsComponent;
