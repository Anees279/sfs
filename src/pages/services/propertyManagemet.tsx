import React from "react";
import backgroundImage from "../../assets/images/Home Page/propertymanagemet.png";
import ResponsiveRootsBar from "../../components/navBar";
import callIcon from "../../assets/icons/phone-call.png.webp.png";
import emailIcon from "../../assets/icons/icons8-email-64.png.webp.png";
import whatsappIcon from "../../assets/icons/whatsapp-2.png.webp.png";
import PropertyFrom from "./propertyMnagemetFrom";
import PropertyBenefits from "./managementService";

const PropertyManagement = () => {
  return (
    <>
      <div className="main-home">
        <div
          className="background-image relative h-auto "
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            color: "white",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none"></div>

          {/* Navbar */}
          <div className="relative z-10">
            <ResponsiveRootsBar />

            {/* Container only handles layout, not spacing */}
            <div className="container mx-auto flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
              {/* Content with top margin */}
              <div className="text-white mb-10 mb:sm-0 mt-20 text-center relative z-10">
                <h1 className="font-['Lato'] font-normal text-[40px] leading-[40px] tracking-[0%] text-center align-middle capitalize">
                  Property Management Dubai
                </h1>

                <p className="font-['Lato'] font-medium text-[19.52px] leading-[25px] tracking-[0%] text-center align-middle text-white m-3 mb-2">
                  No Matter Where You Are! Your Property is in Safe Hands.
                </p>

                <hr className="border-white my-6 w-[40%] justify-self-center" />

                <p className="font-['Lato'] font-medium text-[17.52px] leading-[25px] tracking-[0%] text-center align-middle text-white m-3 mb-2">
                  Let the Professionals Manage Your Property
                </p>

                <div className="flex flex-row justify-center items-center gap-x-3 px-4 my-12 flex-wrap">
                  <a
                    href="mailto:info@sfsintrealestate"
                    className="flex items-center justify-center gap-1 border border-[rgba(255,255,255,0.66)] px-3 py-1 rounded text-sm hover:bg-black hover:text-white transition w-full max-w-[140px] h-[45px]"
                  >
                    <img src={emailIcon} alt="Email" className="w-4 h-4" /> Email
                  </a>
                  <a
                    href="tel:+971504805436"
                    className="flex items-center justify-center gap-1 border border-[rgba(255,255,255,0.66)] px-3 py-1 rounded text-sm hover:bg-black hover:text-white transition w-full max-w-[140px] h-[45px]"
                  >
                    <img src={callIcon} alt="Call" className="w-4 h-4" /> Call
                  </a>
                  <a
                    href="https://wa.me/971504805436"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 border border-[rgba(255,255,255,0.66)] px-3 py-1 rounded text-sm hover:bg-black hover:text-white transition w-full max-w-[140px] h-[45px]"
                  >
                    <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4" /> WhatsApp
                  </a>
                </div>

                <PropertyFrom />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PropertyBenefits />
    </>
  );
};

export default PropertyManagement;
