import React from "react";
import UserCheckIcon from "../../assets/icons/Prequalify-Tenants-3-qlrydeadbzsdsbpztxhu39qjqxg83ahtnrssvewhda.png.webp.png";
import UsersIcon from "../../assets/icons/Managing-Tenants-1-1-qlryd9l6i7hi9l4jvuqy6cfktnqx73i26a67s85xdo.png.webp.png";
import ClipboardCheckIcon from "../../assets/icons/Property-Snagging-qlryctlxa0vms7rrh5uahygqq3xok8qmg32ymitmbg.png.webp.png";
import ToolsIcon from "../../assets/icons/Maimtenance-qlrycvhlnoy7ffp166njmxznwvoezmy34cdxl2qtz0.png.webp.png";
import FileSignatureIcon from "../../assets/icons/Rent-Collection2.png.webp.png";
import BullhornIcon from "../../assets/icons/marketing-qlryd14msp5xd3gu993b1wkfh6wm9tkh54augqigxo.png.webp.png";
import ChartBarIcon from "../../assets/icons/Report-qlryd22gzj77opfh3rhxmebw2krzhio7h8yby0h2rg.png.webp.png";
import MoneyCheckAltIcon from "../../assets/icons/Rent-Collection2.png.webp.png";

const services = [
  {
    title: "Prequalifying Tenants",
    icon: UserCheckIcon,
  },
  {
    title: "Managing Tenants",
    icon: UsersIcon,
  },
  {
    title: "Property Snagging",
    icon: ClipboardCheckIcon,
  },
  {
    title: "Maintenance Repair",
    icon: ToolsIcon,
  },
  {
    title: "Property Handover",
    icon: FileSignatureIcon,
  },
  {
    title: "Property Marketing",
    icon: BullhornIcon,
  },
  {
    title: "Performance Report",
    icon: ChartBarIcon,
  },
  {
    title: "Rent Collection",
    icon: MoneyCheckAltIcon,
  },
];

const PropertyBenefits = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-4xl mx-auto text-center justify-content-center">
        <h2 className="font-['aven'] font-normal text-[32px] leading-[32px] tracking-[0%] text-center align-middle capitalize text-[#5F0F40] mb-4">
  Benefits of Having a Property Manager
</h2>

      <p className="font-['aven'] font-medium text-[16.59px] leading-[25px] tracking-[0%] text-center align-middle text-gray-700 max-w-3xl mx-auto mb-10 leading-[30px]">
  As one of the top property management companies in Dubai, Binayah does so much more than just tenant management. Binayah property management is equipped with the know-how to assist clients in selecting real estate that suits their investment needs and ROI goals.
</p>


       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {services.map(({ title, icon }, index) => (
    <div
      key={index}
      className="flex flex-col justify-between border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-[#FFD2DA] "
    >
      <div>
        <div className="mb-4 flex justify-center">
          <img src={icon} alt={title} className="w-16 h-16" />
        </div>
        <h3 className="text-lg font-semibold text-[#0F4C5C] mb-2 text-center">
          {title}
        </h3>
      </div>

      {/* Button at the bottom */}
      <button className="text-white text-sm w-full h-[38px] rounded-[6px] bg-[#5F0F40] hover:bg-black transition mt-4">
        READ MORE
      </button>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default PropertyBenefits;
