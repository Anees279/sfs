import React from 'react';
import offsure1 from '../../assets/images/offsure/offsure1.webp';
import offsure2 from '../../assets/images/offsure/offsure2.jpg';
import offsure3 from '../../assets/images/offsure/offsure3.webp';
import offsure4 from '../../assets/images/offsure/offsure4.webp';
import offsure5 from '../../assets/images/offsure/offsure5.webp';
import offsure6 from '../../assets/images/offsure/offsure6.webp';
import offsure7 from '../../assets/images/offsure/offsure7.webp';
import offsure8 from '../../assets/images/offsure/offsure8.webp';
import offsure9 from '../../assets/images/offsure/offsure9.jpg';
import offsure10 from '../../assets/images/offsure/offsure10.webp';
import offsure11 from '../../assets/images/offsure/offsure11.webp';
import offsure12 from '../../assets/images/offsure/offsure12.webp';
import offsure13 from '../../assets/images/offsure/offsure13.webp';
import offsure14 from '../../assets/images/offsure/offsure14.jpg';
import offsure15 from '../../assets/images/offsure/offsure15.webp';
import offsure16 from '../../assets/images/offsure/offsure16.webp';
import offsure17 from '../../assets/images/offsure/offsure17.webp';
import offsure18 from '../../assets/images/offsure/offsure18.webp';
import offsure19 from '../../assets/images/offsure/offsure19.webp';
import offsure20 from '../../assets/images/offsure/offsure20.webp';
import offsure21 from '../../assets/images/offsure/offsure21.png';

const OffSureListing = () => {
  const listings = [
    {
      img: offsure1,
    
    },
    {
      img: offsure2,
     
    },
    {
      img: offsure3,
      
    },
    {
      img: offsure4,
     
    },
    {
      img: offsure5,
     
    },
    {
      img: offsure6,
      
    },
    {
      img: offsure7,
     
    },
    {
      img: offsure8,
     
    },
    {
      img: offsure9,
      
    },
      {
      img: offsure10,

    },
    {
      img: offsure11,

    },
    {
      img: offsure12,

    },
    {
      img: offsure13,
      
    },
    {
      img: offsure14,

    },
    {
      img: offsure15,

    },
    {
      img: offsure16,

    },
    {
      img: offsure17,

    },
    {
      img: offsure18,
     
    },
    {
      img: offsure19,
     
    },
    {
      img: offsure20,

    },
     {
      img: offsure21,

    },
   
  ];

  return (
    <div className="px-2 py-8 max-w-screen-lg mx-auto">
      {/* Top Headings */}
      

      {/* Apartment Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing, idx) => (
          <div key={idx} className="bg-white shadow  overflow-hidden">
            <img src={listing.img} alt="" className="w-full h-48 object-cover" />
           
          </div>
        ))}
      </div>
      <span className='text-red text-sm text-center'>other pages will be added later</span>
    </div>
  );
};

export default OffSureListing;
