import React from "react";
import img1 from "../../assets/images/Home Page/Background.png";
import img2 from "../../assets/images/Home Page/Container.png";
import img3 from "../../assets/images/Home Page/Container (2).png";
import img4 from "../../assets/images/Home Page/Overlay+Shadow (1).png";
import img5 from "../../assets/images/Home Page/Overlay+Shadow.png";
import img6 from "../../assets/images/Home Page/Container (3).png";

// ✅ Shared image component with overlay
const ImageCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full h-[200px] sm:h-[240px] md:h-auto rounded-xl overflow-hidden group">
   <img
  src={src}
  alt={alt}
  className="w-full h-full object-cover transition duration-300 md:rounded-none group-hover:scale-105 group-hover:opacity-90"
/>

    {/* Overlay slightly bigger horizontally (left/right only) */}
    <div className="absolute top-0 bottom-0  bg-black bg-opacity-20 group-hover:bg-opacity-0 transition duration-300 rounded-xl pointer-events-none" />
  </div>
);

// ✅ Main component
const ExploreCommunities = () => {
  return (
    <div className="py-20 px-8 md:px-6 lg:px-10 max-w-screen-lg mx-auto">
      <h1 className="font-lato font-normal text-3xl md:text-4xl lg:text-5xl leading-snug tracking-normal text-center capitalize text-[#0F4C5C] mb-10">
        Explore Dubai's Most Desired Communities
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="flex flex-col justify-between h-full gap-6">
          <div>
            <h2 className="text-2xl font-bold text-[#5F0F40] mb-2">Residential</h2>
            <p className="text-black-600 text-sm mb-4">
              Buy residential property in Dubai, Villas, Apartments, Penthouses or Townhouses that suit your family or investment in Dubai Real Estate with high ROI.
            </p>
            <hr className="h-[1px] w-1/2 bg-gray-300 border-0" />
          </div>
          <ImageCard src={img1} alt="Residential" />
          <div>
            <h2 className="text-2xl font-bold text-[#5F0F40] mb-2">Commercial</h2>
            <p className="text-black-600 text-sm mb-4">
              Browse our commercial listings and discover luxury office spaces, shops, warehouses, and other commercial spaces for sale and rent.
            </p>
            <hr className="h-[1px] w-1/2 bg-gray-300 border-0" />
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col justify-between h-full gap-6 rounded md:rounded-none">
          <ImageCard src={img2} alt="Community 1" />
          <ImageCard src={img3} alt="Community 2" />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col justify-center h-full gap-6 rounded md:rounded-none">
          <ImageCard src={img4} alt="Community 3"  />
          <ImageCard src={img5} alt="Community 4" />
          <ImageCard src={img6} alt="Community 5" />
        </div>
      </div>
    </div>
  );
};

export default ExploreCommunities;
