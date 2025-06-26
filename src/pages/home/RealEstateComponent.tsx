import React from "react";
import Image from "../../assets/images/Home Page/4.png"; // Replace with actual path to image

const RealEstateComponent = () => {
  return (
    <div className="p-0 flex flex-col md:flex-row items-center justify-between mt-0 md:mt-6 mx-auto max-w-screen-2xl">
      {/* Right Vertical Text with Simulated Border Using Text Shadow - Hidden on small devices */}
      <div className="hidden md:flex flex-col items-center justify-center text-white text-2xl font-bold text-[50px] md:ml-6 order-2 w-40 transform scale-x-[2]">
        {"REAL ESTATE".split("").map((char, index) => (
          <span
            key={index}
            className="mb-1 px-1"
            style={{
              textShadow: `
                -1px -1px 0 #0F4C5C,
                 1px -1px 0 #0F4C5C,
                -1px  1px 0 #0F4C5C,
                 1px  1px 0 #0F4C5C
              `,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      {/* Text and Image Section with Flex Layout (Reversed on large screens, row-reverse on small screens) */}
     <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between flex-1 text-white md:ml-6 bg-[#D9D9D9] px-4 pt-4 md:pr-6 md:py-4 w-full border border-white md:border-none rounded-none md:rounded-[52px]">

        {/* Paragraph and Button */}
       <div className="md:w-1/3 pr-4 mt-4 md:mt-0 flex flex-col justify-center">
  <p
   className="font-[500] text-[16.73px] leading-[25px] tracking-[0px] text-left md:text-right align-middle font-inter mb-4 p-2"

  >
    With over two decades in the market, Binayah Properties has grown from a Dubai-born real estate
    brand into an internationally recognized name. Deeply rooted in Dubai’s dynamic property
    landscape, we have expanded our expertise to serve clients worldwide, connecting them with
    premium investment opportunities and landmark developments. Specializing in off-plan projects and
    large-scale ventures, we provide strategic solutions that maximize growth and long-term value. Our
    extensive experience across residential, commercial, and development sectors ensures a tailored
    approach to meet diverse client needs. Binayah’s legacy reflects over 20 years of dedication to
    creating opportunities that deliver lasting results.
  </p>
</div>


        {/* Image */}
        <div className="md:w-1/2 mt-4 md:mt-0 flex justify-start items-end">
          <img
            src={Image}
            alt="Property"
            className="w-full max-w-[710px] h-auto md:w-[710px] md:h-[335px] md:max-w-[1250px] object-bottom relative"
          />
        </div>
      </div>
    </div>
  );
};

export default RealEstateComponent;
