import React from 'react';
import rent1 from '../../assets/images/Home Page/rent.png';
import rent2 from '../../assets/images/Home Page/rent2.png';
import rent3 from '../../assets/images/Home Page/rent3.png';
import sale1 from '../../assets/images/Home Page/sale.png';
import sale2 from '../../assets/images/Home Page/sale2.png';
import sale3 from '../../assets/images/Home Page/sale3.png';
import offplan1 from '../../assets/images/Home Page/rent3.png';
import offplan2 from '../../assets/images/Home Page/rent2.png';
import offplan3 from '../../assets/images/Home Page/rent3.png';
import bedIcon from '../../assets/icons/Margin.png';
import showerIcon from '../../assets/icons/shawar.png';
import areaIcon from '../../assets/icons/Component 1.png';

const FeaturedListings = () => {
  const rentImages = [rent1, rent2, rent3];
  const saleImages = [sale1, sale2, sale3];
  const offplanImages = [offplan1, offplan2, offplan3];

  return (
    <div className="px-4 py-8  max-w-screen-lg mx-auto">
      {/* Top Headings */}
      <div className="text-center mb-8">
        <h2 className="text-md uppercase text-gray-600 tracking-widest">OUR FEATURED LISTINGS</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-[#0F4C5C] mt-2">Exclusive Properties</h1>
      </div>

      {/* Three Columns */}
      <div className="flex flex-col md:flex-row gap-6">
        {[{ title: 'Properties For Rent', images: rentImages }, { title: 'Properties For Sale', images: saleImages }, { title: 'Latest Off-Plan Property in Dubai', images: offplanImages }].map((section, index) => (
          <div key={index} className="flex-1    p-4">
            <h3 className="text-xl font-semibold text-white bg-[#5F0F40] px-4 py-2 rounded-md mb-4">{section.title}</h3>
            {section.images.map((imgSrc, idx) => (
              <div key={idx} className="bg-white shadow rounded-lg mb-4 overflow-hidden">
                <img src={imgSrc} alt={`${section.title} ${idx + 1}`} className="w-full object-contain" />
                <div className="p-4">
                  <h4 className="font-semibold text-lg text-[#0F4C5C]">Home Lux</h4>
                  <p className="text-sm text-gray-600">High Floor | 01 series | 3 year PP | Service charge</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="font-bold text-[#E36414] m-0">AED 35,000,000</p>
                    <div className="flex items-center space-x-4 text-gray-600 text-sm">
                      <span className="flex items-center gap-1">
                        <img src={bedIcon} alt="Bed" className="w-4 h-4" /> 4
                      </span>
                      <span className="flex items-center gap-1">
                        <img src={showerIcon} alt="Shower" className="w-4 h-4" /> 5
                      </span>
                      <span className="flex items-center gap-1">
                        <img src={areaIcon} alt="Area" className="w-4 h-4" /> null
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center">
              <button className="mt-4 bg-[#5F0F40] text-white py-2 px-6 rounded-md font-medium hover:bg-[#093944]">View All</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;
