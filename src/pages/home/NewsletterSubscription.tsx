import React from "react";
import { Email } from '@mui/icons-material';

const NewsletterSubscription = () => {
  return (
    <div className="bg-[#FFFFFF] text-black  w-full px-8 py-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-4">
        {/* Gmail Icon */}
        <Email className="text-black w-9 h-9" />

        {/* Main Heading */}
       <h2 className="text-[20.45px] leading-[26.4px] font-medium text-center capitalize font-['Font_1']">
  Subscribe To Our Newsletter!
</h2>


        {/* Paragraph */}
       <p className="text-[14.88px] leading-[25px] font-medium text-center font-['Font_1'] max-w-xl">
  Stay Informed! Subscribe to our email newsletter for the latest UAE real estate updates.
</p>


        {/* Subscription Form */}
       <form className="flex flex-col sm:flex-row items-center w-full sm:w-auto mt-4 md:mt-6 gap-4 sm:gap-0">

            <label htmlFor="email" className="sr-only text-black">Email Address</label>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="px-4 py-2 w-full sm:w-72 text-black focus:outline none border border-black"
          />
          <button
            type="submit"
            className="bg-[#5F0F40] text-white font-semibold px-6 py-2 hover:bg-black transition border border-black w-full sm:w-auto"

          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
