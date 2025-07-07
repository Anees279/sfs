import React from "react";

export const PropertyInvestorVisa: React.FC = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto text-center p-8">
        <h3 className="text-[45px]  mb-6 text-[#5F0F40] font-[Font3] max-w-2xl mx-auto">
          Looking for other available long term visas?
        </h3>
        <h4 className="text-[28px]  mb-4 text-[#9A031E] font-[Font2]">
          3-5 Year Property Investor Visa
        </h4>
        <p className="text-[16px] leading-[25px] font-medium text-[#1F2937] text-left space-y-3 font-[Font2] max-w-7xl mx-auto py-8">
          You must comply with the following requirements to be qualified for a
          property investment visa in Dubai:
        </p>

        <ul className="list-disc pl-5 text-[16px] leading-[25px] font-medium text-[#1F2937] text-left space-y-3 font-[Font2] max-w-7xl mx-auto marker:text-red-500 marker:text-base">
          <li>
            The minimum property worth for a three-year visa is{" "}
            <strong>750,000 AED</strong>, and for a five-year visa, it is{" "}
            <strong>2,000,000 AED</strong>
          </li>
          <li>
            Mortgaged properties may be eligible for a 3-year visa if 50% of the
            property value, or at least <strong>AED 750,000</strong>, is paid
            off
          </li>
          <li>
            Mortgaged properties may be eligible for a 5-year visa if at least{" "}
            <strong>AED 2,000,000</strong> is paid off
          </li>
          <li>A valid title deed must be available for the property</li>
          <li>
            With a legal marriage certificate, the property can be shared
            between spouses, as long as the property has a minimum worth of{" "}
            <strong>1,000,000 AED</strong>
          </li>
          <li>It must be a home property, not a business one</li>
        </ul>
      </div>
      <div className="max-w-7xl mx-auto text-center p-8">
        <h4 className="text-[28px]  mb-4 text-[#9A031E] font-[Font2]">
          3 year Company investor visa
        </h4>
        <p className="text-[16px] leading-[25px] font-medium text-[#1F2937] text-left space-y-3 font-[Font2] max-w-7xl mx-auto py-8">
          To qualify for a  Dubai Company Investor visa , an investor must buy
          shares in an existing company or establish a new one and meet the
          following requirements:
        </p>

        <ul className="list-disc pl-5 text-[16px] leading-[25px] font-medium text-[#1F2937] text-left space-y-3 font-[Font2] max-w-7xl mx-auto marker:text-red-500 marker:text-base">
          <li>
                  If you own a mainland, firm in Dubai and are a shareholder, partner, or sole owner

          </li>
          <li>
           If the company is an LLC, the applicant’s shares must be worth at least AED 72,000

          </li>
          <li>
           Some free zones, although not all, provide investor visas to firm shareholders

          </li>
          <li>Owners of free zone businesses can apply for a Managing Director visa, which has the same privileges as an Investor or Partnership visa
            </li>
          
        </ul>
      </div>
    </>
  );
};

export default PropertyInvestorVisa;
