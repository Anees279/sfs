import React from 'react';
import rent1 from '../../assets/images/Home Page/villas.png';
import rent2 from '../../assets/images/Home Page/villas1.png';
import rent3 from '../../assets/images/Home Page/villas2.png';
import sale1 from '../../assets/images/Home Page/villas3.png';
import sale2 from '../../assets/images/Home Page/villas4.png';


import bedIcon from '../../assets/icons/Margin.png';
import showerIcon from '../../assets/icons/shawar.png';
import areaIcon from '../../assets/icons/Component 1.png';

const VillasListings = () => {
  const listings = [
    {
      img: rent1,
      description: 'VILLA FOR RENT | 4BR + Maid | Landscape',
    },
    {
      img: rent2 ,
      description: 'Exclusive |Type G 4 Bed+M|Walk to pool & pa',
    },
    {
      img: rent3,
      description: '4 Bedroom +Maid | Single Row | Type B',
    },
    {
      img: sale1,
      description: 'VILLA FOR RENT | 4BR + Maid |Landscaped | ',
    },
   {
      img: sale2,
      description: 'Back to Back | 3 bed +maid| Prime Area|',
    },
  ];

  return (
    <div className="px-2 py-8 max-w-screen-xl mx-auto">
     

      {/* Villas Cards */}
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
                <p className="font-bold text-[#5F0F40] text-sm">Villas</p>
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

export default VillasListings;
