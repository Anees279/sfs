import React from 'react';

import sale1 from '../../assets/images/Home Page/township1.png';
import sale2 from '../../assets/images/Home Page/township2.png';


import bedIcon from '../../assets/icons/Margin.png';
import showerIcon from '../../assets/icons/shawar.png';
import areaIcon from '../../assets/icons/Component 1.png';

const TownshipListing = () => {
  const listings = [
    {
      img: sale1,
      title: 'Palm Island Villa',
      description: 'Sea view | Private Pool | Ready to Move-in',
    },
    {
      img: sale2,
      title: 'Downtown Executive Suite',
      description: 'Burj View | High Floor | Prime Location',
    },
   
  ];

  return (
    <div className="px-2 py-8 max-w-screen-lg mx-auto">
      {/* Top Headings */}
      

      {/* Apartment Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={listing.img} alt={listing.title} className="w-full h-68 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold text-lg text-[#0F4C5C]">{listing.title}</h4>
              <p className="text-sm text-gray-600">{listing.description}</p>

              <div className="flex items-center gap-2 text-gray-600 text-sm mb-2 mt-1">
                <span className="flex items-center gap-1">
                  <img src={bedIcon} alt="Bed" className="w-4 h-4" /> 4
                </span>
                <span className="flex items-center gap-1">
                  <img src={showerIcon} alt="Shower" className="w-4 h-4" /> 5
                </span>
                <span className="flex items-center gap-1">
                  <img src={areaIcon} alt="Area" className="w-4 h-4" /> 2000 sqft
                </span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <p className="font-bold text-[#5F0F40] text-sm">Townhouse</p>
                <button className="w-[76.98px] h-[32px] pt-[1px] pr-[11px] pb-[1px] pl-[11px] border border-[#5F0F40] bg-[#5F0F40] text-white text-xs rounded hover:bg-[#093944]">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TownshipListing;
