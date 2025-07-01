import React from 'react';
import bedIcon from '../../assets/icons/bed.png.webp.png';
import showerIcon from '../../assets/icons/building.png.webp.png';
import areaIcon from '../../assets/icons/united-arab-emirates.png.webp.png';
import floorsIcon from '../../assets/icons/handrail.png.webp.png';
import construction from '../../assets/icons/construction.png.webp.png';

import callIcon from '../../assets/icons/phone-call.png.webp.png';
import emailIcon from '../../assets/icons/icons8-email-64.png.webp.png';
import whatsappIcon from '../../assets/icons/whatsapp-2.png.webp.png';

import sale1 from '../../assets/images/Home Page/luxary1.png';
import sale2 from '../../assets/images/Home Page/luxary2.png';
import sale3 from '../../assets/images/Home Page/luxary3.png';
import sale4 from '../../assets/images/Home Page/luxary5.png';
import sale5 from '../../assets/images/Home Page/luxary6.png';
import sale6 from '../../assets/images/Home Page/luxary7.png';
import sale7 from '../../assets/images/Home Page/luxary8.png';
import sale8 from '../../assets/images/Home Page/luxary9.png';
import sale9 from '../../assets/images/Home Page/luxary10.png';
import sale10 from '../../assets/images/Home Page/luxary11.png';
import sale11 from '../../assets/images/Home Page/luxary12.png';
import sale12 from '../../assets/images/Home Page/luxary13.png';
import sale13 from '../../assets/images/Home Page/luxary14.png';
import sale14 from '../../assets/images/Home Page/luxary15.png';
import sale15 from '../../assets/images/Home Page/luxary16.png';
import sale16 from '../../assets/images/Home Page/luxary17.png';
import sale17 from '../../assets/images/Home Page/luxary18.png';
import sale18 from '../../assets/images/Home Page/luxary19.png';
import sale19 from '../../assets/images/Home Page/luxary20.png';
const LuxuryProperties = () => {
  const listings = [
    {
      img: sale1,
      title: 'Da Vinci Tower',
     
    },
    {
      img: sale2,
      title: 'Downtown Executive Suite',
      
    },
    {
      img: sale3,
      title: 'Jumeirah Beach Residence',
     
    },
      {
      img: sale4,
      title: 'Da Vinci Tower',
     
    },
    {
      img: sale5,
      title: 'Downtown Executive Suite',
      
    },
    {
      img: sale6,
      title: 'Jumeirah Beach Residence',
     
    },
    {
      img: sale7,
      title: 'Jumeirah Beach Residence',
     
    },
      {
      img: sale8,
      title: 'Da Vinci Tower',
     
    },
    {
      img: sale9,
      title: 'Downtown Executive Suite',
      
    },
    {
      img: sale10,
      title: 'Jumeirah Beach Residence',
     
    },
    {
      img: sale11,
      title: 'Da Vinci Tower',
     
    },
    {
      img: sale12,
      title: 'Downtown Executive Suite',
      
    },
    {
      img: sale13,
      title: 'Jumeirah Beach Residence',
     
    },
      {
      img: sale14,
      title: 'Da Vinci Tower',
     
    },
    {
      img: sale15,
      title: 'Downtown Executive Suite',
      
    },
    {
      img: sale16,
      title: 'Jumeirah Beach Residence',
     
    },
    {
      img: sale17,
      title: 'Jumeirah Beach Residence',
     
    },
      {
      img: sale18,
      title: 'Da Vinci Tower',
     
    },
    {
      img: sale19,
      title: 'Downtown Executive Suite',
      
    },
    {
      img: sale1,
      title: 'Jumeirah Beach Residence',
     
    },
  ];

  return (
    <div className="px-0 py-8 max-w-screen-2xl mx-auto text-[#9A031E]">
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg overflow-hidden p-4">
            <img src={listing.img} alt={listing.title} className="w-full h-48 object-cover rounded" />
            <div className="mt-4">
              <h4 className="font-semibold text-lg text-[#9A031E] text-justify mb-2">
                {listing.title}
              </h4>
              <div className="flex flex-wrap items-center gap-8 text-sm  mb-2 ">
                <span className="flex items-center gap-3 text-[#9A031E]">
                  <img src={bedIcon} alt="Bed" className="w-4 h-4"  /> 4 Beds
                </span>
                <span className="flex items-center gap-3 text-[#9A031E]">
                  <img src={showerIcon} alt="Shower" className="w-4 h-4" /> 5 Baths
                </span>
                <span className="flex items-center gap-3 text-[#9A031E]">
                  <img src={areaIcon} alt="Area" className="w-4 h-4" /> 2000 sqft
                </span>
              </div>
              <br />
              <hr />
              <br />
              <div className="flex justify-between items-center text-sm text-gray-700 mb-2">
                <span className="flex items-center gap-1 text-[#9A031E]">
                  <img src={floorsIcon} alt="Floors" className="w-4 h-4" /> Floors: Call us
                </span>
               <span className="flex items-center gap-0 text-[#9A031E]">
                  <img src={construction} alt="Construction" className="w-4 h-4" /> Area: 1,796 sq ft to 4,576 sq ft
                </span>
              </div>
            
 <br />
              <hr />
              <br />
           <div className="flex justify-between items-center gap-2 mb-3">
  <a
    href="mailto:info@sfsintrealestate"
    className="flex items-center gap-1 border border-gray-300 px-3 py-1 rounded text-sm hover:bg-black hover:text-white transition"
  >
    <img src={emailIcon} alt="Email" className="w-4 h-4" /> Email
  </a>
  <a
    href="tel:+971504805436"
    className="flex items-center gap-1 border border-gray-300 px-3 py-1 rounded text-sm hover:bg-black hover:text-white transition"
  >
    <img src={callIcon} alt="Call" className="w-4 h-4" /> Call
  </a>
  <a
    href="https://wa.me/971504805436"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 border border-gray-300 px-3 py-1 rounded text-sm hover:bg-black hover:text-white transition"
  >
    <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4" /> WhatsApp
  </a>
</div>


              <button className="w-full bg-[#5F0F40] hover:bg-[#093944] text-white text-sm py-2 ">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuxuryProperties;
