import React from "react";

const SnaggingOverview = () => {
  const items = [
    {
      number: 1,
      text: "Engineers, Architects, and Technical Inspectors from our highly trained team will research, evaluate, and report on the physical condition of your property.",
    },
    {
      number: 2,
      text: "They will make expert recommendations for repairs, replacements, upgrades, and predicted concerns that may expose you to financial risk or responsibility.",
    },
    {
      number: 3,
      text: "Defects with accompanying images and explanations, as well as the most recent state of each flaw before and after its correction.",
    },
    {
      number: 4,
      text: "Inspections are carried out utilizing our Oracle-based Inspection App, which was built in-house to offer a platform for precise real-time reporting.",
    },
    {
      number: 5,
      text: "Authorized Developer team members will have access to a complete database of images and descriptions of faults.",
    },
    {
      number: 6,
      text: "After our inspection, we will provide a comprehensive thorough condition report for your records.",
    },
  ];

  return (
    <>
   <h2 className="font-normal text-[28px] leading-[28px] tracking-[0%] text-center align-middle text-[#5F0F40] mb-4 max-w-7xl mx-auto font-['Lato']">
  SFS Real Estate Property Snagging & Handover
</h2>

    <section className="bg-[#0F4C5C] py-12 px-4 md:px-10 text-white">
         
      <div className="max-w-7xl mx-auto text-center bg-">                                                                                                                                                              
       
        <p className=" max-w-4xl mx-auto mb-6 text-center p-4"> 
          SFS Real estate property management has been striving to be the best in the business since its establishment in 2007. Our property snagging service extends beyond home buyers to developers. The successful delivery of a new development relies on thorough appraisal and inspection. At the point of substantial completion, a SFS Real estate Property Snagging & Handover Inspection can guarantee that you receive your development in the best possible condition from the contractor.
        </p>
        <p className=" max-w-4xl mx-auto mb-10 text-center p-4">
          Whether you have a vast asset portfolio or own a single property, you always want to maximize your ROI (Return on Investment). But, if your property is not being appropriately managed, you must end up out of pocket. We at SFS Real estate have a strong team for property management in Dubai, who are your eyes and ears on the ground. With an established track record from our previous and present customers, we proved that we are the best real estate agency in Dubai. So, if you want property management services or want to invest in Dubai, SFS Real estate is always here to ensure that your tenants and investments are in safe hands.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center max-w-4xl mx-auto p-4">
          {items.map(({ number, text }) => (
            <div
              key={number}
              className="border border-gray-200 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center bg-[#FFD2DA] text-black  "
            >
              <div className="w-10 h-10 rounded-full bg-[#0F4C5C] text-white flex items-center justify-center text-lg font-semibold mb-4 bg-[#5F0F40] h-[60px] w-[60px] rounded-full">
                {number}
              </div>
              <p className=" text-center">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default SnaggingOverview;
