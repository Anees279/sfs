import React, { useState } from "react";

const BinayahContactBar = () => {
  const [active, setActive] = useState("Properties for Sale");
  const buttons = [
    "Properties for Sale",
    "Properties for Rent",
    "Property Management Dubai",
    "Luxury Properties",
    "Real Estate Dubai",
    "Dubai Cconstruction update",
  ];

  return (
    <div className="bg-[#0F4C5C] text-black px-4 pt-8 text-center border-t border-gray-300">
      <div className="max-w-6xl mx-auto space-y-4">
        <h1 className="font-[Font 4] font-[400] text-[20px] leading-[24px] tracking-[0%] text-center align-middle capitalize">
  SFS Real Estate Mezzanine Floor Liberty Building - Al Quoz 3 Sheikh Zayed Rd - Dubai
</h1>

       <h1 className="font-[Font 4] font-[400] text-[20px] leading-[24px] tracking-[0%] text-center align-middle ">
  +971 504805436 | +971 504805436  | sfs@sfsintrealestate
</h1>
<p>
  SFS Real Estate is Registered Under the Real Estate Regulation Authority of Dubai - UAE, Registration No. 1162
</p>

        
        {/* Buttons Section */}
         {/* Buttons Section */}
        <div className="flex flex-wrap justify-center border border-white    gap-3 bg-[#5F0F40]">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => setActive(btn)}
              className={`px-4 py-4 text-[16.91px] font-[500] leading-[25px] text-center align-middle tracking-normal  transition  ${
                active === btn
                  ? "bg-white text-black "
                  : "bg-transparent text-white "
              }`} 
              style={{ fontFamily: "aven, sans-serif" }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BinayahContactBar;
