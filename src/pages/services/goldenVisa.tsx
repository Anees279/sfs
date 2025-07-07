import React from "react";
import visaBg from "../../assets/images/Home Page/golden-visa-bg.jpg"; // adjust the path based on your file structure
import ResponsiveRootsBar from "../../components/navBar"; // adjust the path if needed
import HowToApplyGoldenVisa from "./how_to_apply";// adjust the path if needed
import PropertyInvestorVisa from "./PropertyInvestorVisa"; // adjust the path if needed
import GoldenVisaFAQs from "./faqGoldenVisa"; // adjust the path if needed
const GoldenVisa: React.FC = () => {
  return (
    <>
      {/* Background section with navbar and text */}
      <div className="main-home">
        <div
          className="background-image relative"
          style={{
            backgroundImage: `url(${visaBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "66.67vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            color: "white",
          }}
        >
          {/* Overlay that does not affect text */}
          <div
            className="absolute inset-0 bg-black/70 z-0 pointer-events-none"
            style={{ zIndex: 0 }}
          ></div>

          {/* Navbar */}
          <div style={{ zIndex: 10 }}>
            <ResponsiveRootsBar />
          </div>

          {/* Centered hero content */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
              zIndex: 10,
            }}
          >
            <div className="flex-1 flex flex-col justify-center items-center text-white mb-40 text-center sm:text-left">
              <h1 className="m-3 mb-2 text-white text-[55px] leading-[55px] font-normal text-center capitalize font-[Font3]">
                Golden Visa Dubai
              </h1>

              <p className="text-[22px] leading-[25px] font-medium text-center m-0 font-[Font2]">
                UAE Announces New 5 and 10 Year Residency Programs
              </p>
            </div>
          </div>
        </div>
        <section>
          <div className="container mx-auto py-16 max-w-7xl text-center px-4">
            {/* Add your section content here */}
            <h2 className="text-[33px] leading-[33px] font-normal text-center mb-8 font-[Font3] text-[#5F0F40]">
              What is a Silver or Golden Visa?
            </h2>

            <p className="mb-4 text-[16px] leading-[25px] font-medium text-center font-[Font2]">
              The UAE Golden Visa program is meant for entrepreneurs, real
              estate investors, and other professionals to work, live and
              conduct business or study in the UAE without requiring a local
              sponsor. The 5 year Silver Visa and the 10 year Golden Visa allows
              foreign business owners and investors to own 100% of their
              business within the UAE. Both visas can be automatically renewed
              after the 5 or 10 year term.
            </p>

            <p className="text-[16] leading-[25px] font-normal text-center font-[Font2]">
              Below you will find the details and benefits of the UAE Golden
              Visa program.
            </p>
          </div>
        </section>
        <h2 className="text-[33px] leading-[33px] font-normal text-center mb-8 font-[Font3] text-[#5F0F40]">
          10 Year Golden Visa
        </h2>
        <section className="bg-[#FB8B24] text-[#0F4C5C] py-12 px-6 md:px-16 max-w-7xl mx-auto  text-left">
          <h3 className="text-[20.45px] leading-[25px] font-medium  mb-6 font-[Font2]">
            Eligibility Requirements
          </h3>

          <div className="text-[14.88px] leading-[25px] font-medium  font-[Font2] space-y-4">
            <p>
              An individual may apply for the 10 Year Golden Visa if they make
              property investments of at least <strong>AED 10 million</strong>{" "}
              in the UAE, or if they make investments in the UAE that are at
              least <strong>AED 2 million</strong> and are in the form of one of
              the following:
            </p>
            <ul className="list-disc list-inside text-left max-w-7xl mx-auto">
              <li>Investment funds accredited in the UAE</li>
              <li>
                A commercial or industrial company license of an investor, where
                the memorandum of association of this legal entity mentions the
                paid-up capital of the company is at least AED 2 million
              </li>
              <li>
                The investor is the owner of a company in the UAE and pays tax
                of not less than AED 250,000 annually to the Federal Tax
                Authority
              </li>
            </ul>
            <p>
              The 10-year Golden Visa can be extended to include the holder’s{" "}
              <strong>spouse and children</strong>, as well as one{" "}
              <strong>executive director</strong> and one{" "}
              <strong>advisor</strong>.
            </p>
          </div>
        </section>
        <h2 className="text-[33px] leading-[33px] font-normal text-center mb-8 font-[Font3] text-[#5F0F40] pt-8">
          5 Year Silver Visa
        </h2>
        <section className="bg-[#FFDEC0] text-[#222222] py-12 px-6 md:px-16 max-w-7xl mx-auto  text-left">
          <h3 className="text-[20.45px] leading-[25px] font-medium  mb-6 font-[Font2]">
            Eligibility Requirements
          </h3>

          <div className="text-[14.88px] leading-[25px] font-medium  font-[Font2] space-y-4">
            <p>
              An individual may apply for the 5 Year Silver Visa if they own AED
              2 million worth of property in the UAE. The properties must not
              have any loan on them.
            </p>

            <p>
              The 5-year Silver Visa can be extended to include the holder’s
              spouse and children, as well as one executive director and one
              advisor.
            </p>
          </div>
        </section>
        <HowToApplyGoldenVisa />
        <PropertyInvestorVisa />
        <GoldenVisaFAQs />
      </div>
      {/* Add your section content here if needed */}
    </>
  );
};

export default GoldenVisa;
