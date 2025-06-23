import React from "react";
import Img1 from "../../assets/images/Home Page/top8.png";
import Img2 from "../../assets/images/Home Page/top2.png";
import Img3 from "../../assets/images/Home Page/top3.png";
import Img4 from "../../assets/images/Home Page/top4.png";
import Img5 from "../../assets/images/Home Page/top3.png";
import Img6 from "../../assets/images/Home Page/top6.png";
import Img7 from "../../assets/images/Home Page/top7.png";
import Img8 from "../../assets/images/Home Page/top8.png";

const TopTrendingDevelopments = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      {/* Top Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-snug tracking-normal text-center capitalize text-[#0F4C5C] mb-8 font-[Font_4]">
        Dubai's Top Trending Developments
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[10px]">
        {/* Left Info Column */}
        <div className="flex flex-col justify-center px-2 sm:px-4">
          <h3 className="text-lg sm:text-xl md:text-2xl leading-snug font-medium tracking-normal capitalize text-[#5F0F40] mb-4 font-[Font_1] max-w-[250px]">
            Explore Top Projects in Dubai
          </h3>

          <p className="text-sm sm:text-base text-gray-700 leading-6 sm:leading-7">
            Presenting the top,<br />
            <strong className="text-[#5F0F40]">Real Estate Investment</strong> projects in Dubai. <br />
            Buy <strong className="text-[#5F0F40]">Luxury Villas</strong>, <br />
            <strong className="text-[#5F0F40]">Apartments</strong> and <br />
            <strong className="text-[#5F0F40]">Penthouses</strong> in Dubai.
          </p>
        </div>

        {/* Middle Column - 4 Images */}
        <div className="grid grid-cols-2 gap-[10px] justify-items-center">
          <img src={Img1} alt="Project 1" className="rounded-xl object-cover" style={{ width: 220, height: 470 }} />
          <img src={Img2} alt="Project 2" className="rounded-xl object-cover" style={{ width: 220, height: 470 }} />
          <img src={Img3} alt="Project 3" className="rounded-xl object-cover" style={{ width: 220, height: 470 }} />
          <img src={Img4} alt="Project 4" className="rounded-xl object-cover" style={{ width: 220, height: 470 }} />
        </div>

        {/* Right Column - 4 Images */}
        <div className="grid grid-cols-2 gap-[10px] justify-items-center">
          <img src={Img5} alt="Project 5" className="rounded-xl object-cover" style={{ width: 220, height: 470 }} />
          <img src={Img6} alt="Project 6" className="rounded-xl object-cover" style={{ width: 220, height: 470 }} />
          <img src={Img7} alt="Project 7" className="rounded-xl object-cover" style={{ width: 220, height: 470 }} />
          <img src={Img8} alt="Project 8" className="rounded-xl object-cover" style={{ width: 220, height: 470 }} />
        </div>
      </div>
    </div>
  );
};

export default TopTrendingDevelopments;
