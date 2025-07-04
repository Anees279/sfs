import React, { useState } from "react";

import BackgroundImage from "../../assets/images/Home Page/Portfolio.jpg"; // adjust path as needed
import DubaiOpportunity from "./DubaiOpportunity"
const InvestInDubai = () => {
  return (
    <>
    <section
      className="w-full bg-cover bg-center relative py-24 px-4"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="relative z-10 flex items-center justify-center">
       <h2 className="font-normal text-[35px] leading-[35px] tracking-[0%] text-center align-middle capitalize text-white font-['Lato']">
  Invest in Dubai: A Gateway to Global Success
</h2>

      </div>
    </section>
    <DubaiOpportunity />
    </>
  );
};

export default InvestInDubai;

