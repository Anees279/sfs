import React from "react";
import PropertyImage from "../../assets/images/Home Page/property-services.png"; // Replace with actual image path
import Icon2 from "../../assets/images/logos/Meraas Dubai.png";
import Icon1 from "../../assets/images/logos/Emaar Dubai.png";
import Icon3 from "../../assets/images/logos/Dubai Properties.png";
import Icon4 from "../../assets/images/logos/Danube Properties.png";
import Icon5 from "../../assets/images/logos/Container.png";

const PropertyManagementServices = () => {
  return (
    <div className="w-full">
      {/* Text Section */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center gap-8 mb-8">

         <div className="px-[16px]"> <h2 className="text-[22px]  font-normal capitalize text-[#5F0F40] mb-4 font-[Font4]">
    Our Property Managment Services Program Offers
  </h2>
          <ul className="list-disc pl-5 text-base  space-y-2 text-justify text-[#5F0F40] mx-8 items-center sm:mx-0">
            <li>Online Access to Your Property</li>
            <li>Property Handover and Snagging</li>
            <li>Monitor if your property is rented or vacant</li>
            <li>Marketing</li>
            <li>Find out if cheques are deposited on time</li>
            <li>Money Management</li>

          </ul>
        </div>
        

       <div>
          <h3 className="text-[22px] leading-[22px] font-normal capitalize text-[#0F4C5C] mb-4 font-[Font4]">Our Services Program Offers</h3>

          <ul className="list-disc pl-5 text-base text-black space-y-2 text-justify mx-10 sm:mx-0">
  <li>Have access to documents online</li>
  <li>Service Charge Payments Follow-up</li>
  <li>Check status for maintenance</li>
  <li>Maintenance and Other Services</li>
  <li>Check service charge payment receipt</li>
  <li>Dispute Resolution</li>
</ul>

       </div>
      </div>

      {/* Image Section */}
      <div className="w-screen mb-[-9px]">
        <img
          src={PropertyImage}
          alt="Property Management"
          className="w-full h-auto"
        />
      </div>

      {/* Logos Section */}
      <div className="hidden md:flex w-full flex justify-center items-center gap-6 flex-wrap bg-[#9A031E] py-2">
        <img src={Icon1} alt="Icon 1" className="w-200 h-30 " />
        <img src={Icon2} alt="Icon 2" className="w-200 h-30 " />
        <img src={Icon3} alt="Icon 3" className="w-200 h-30 " />
        <img src={Icon4} alt="Icon 4" className="w-200 h-30 " />
        <img src={Icon5} alt="Icon 5" className="w-200 h-30 " />
      </div>
    </div>
  );
};

export default PropertyManagementServices;