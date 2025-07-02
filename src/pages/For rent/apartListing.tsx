import React from 'react';
import rent1 from '../../assets/images/Home Page/rent.png';
import rent2 from '../../assets/images/Home Page/rent2.png';
import rent3 from '../../assets/images/Home Page/rent3.png';
import sale1 from '../../assets/images/Home Page/sale.png';
import sale2 from '../../assets/images/Home Page/sale2.png';
import rent4 from '../../assets/images/Home Page/rent2.png';
import rent5 from '../../assets/images/Home Page/rent3.png';
import sale3 from '../../assets/images/Home Page/sale.png';
import sale4 from '../../assets/images/Home Page/sale2.png';

import bedIcon from '../../assets/icons/Margin.png';
import showerIcon from '../../assets/icons/shawar.png';
import areaIcon from '../../assets/icons/Component 1.png';

const AparmentListings = () => {
  const listings = [
    {
      img: rent1,
      description: 'Brand New | Chiller Free | Multiple Units',
    },
    {
      img: rent2 ,
      description: 'Multiple Units | Chiller Free | Ready to Move',
    },
    {
      img: rent3,
      description: 'DIFC and Zabeel View | Furnished | Brand n',
    },
    {
      img: sale1,
      description: 'Full Canal View | Brand New | High Floor | Vac ',
    },
   {
      img: sale2,
      description: 'PRIME LOCATION | CANAL VIEW | VACANT',
    },
     {
      img: rent4 ,
      description: 'Brand New| Ready to move| High Floor',
    },
    {
      img: rent5,
      description: 'Fully Furnished | Burj Khalifa | Vacant',
    },
    {
      img: sale4,
      description: 'CANAL VIEW | VACANT | LUXURIOUS APART ',
    },
   {
      img: sale3,
      description: 'Fully Furnished | Boulevard View | High Floor',
    },
  ];

  return (
    <div className="px-2 py-8 max-w-screen-xl mx-auto">
     

      {/* Aparment Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={listing.img} alt={"image not avaibale"} className="w-full h-48 object-cover" />
            <div className="p-4">
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
                <p className="font-bold text-[#5F0F40] text-sm">Aparment</p>
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

export default AparmentListings;
