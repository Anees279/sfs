import React from "react";
import facebookIcon from '../assets/icons/facebook.png';
import twitterIcon from '../assets/icons/twitter.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import instagramIcon from '../assets/icons/insta.png';
import youtubeIcon from '../assets/icons/youtube.png';
import footerImage from '../assets/images/fouter/7.png'; // your custom footer image
import NewsletterSubscription from '../pages/home/NewsletterSubscription'; // adjust the path if needed
import BinayahContactBar from '../pages/home/BinayahContactBar'; // adjust the path if needed
const Footer = () => {
  return (
    <>
      <NewsletterSubscription />
      <BinayahContactBar />
    
    <footer className="bg-[#5F0F40] text-white px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto">

        {/* Top Row with Image and Buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6">
          <img src={footerImage} alt="Footer Visual" className="w-[400px] h-auto rounded-md" />
          <div className="flex gap-1 flex-wrap justify-center">
          <div className=" py-4">
            <button className="px-2 py-2  text-white  hover:text-black transition">  About</button>
            <button className="px-2 py-2  text-white  hover:text-black transition">Real Estate Developers</button>
            <button className="px-2 py-2  text-white  hover:text-black transition">Projects Videos</button>
            <button className="px-2 py-2  text-white  hover:text-black transition">Careers</button>
            <button className="px-2 py-2  text-white  hover:text-black transition">Blog</button>
            <button className="px-2 py-2  text-white  hover:text-black transition">Contact</button>
            <button className="px-2 py-2  text-white  hover:text-black transition">Privacy Policy</button>
            <button className="px-2 py-2  text-white  hover:text-black transition">Terms and Conditions</button>
            <button className="px-2 py-2  text-white  hover:text-black transition">Team</button>
            </div>
            <div className="flex justify-center gap-4 mb-8">
              <a href=""><img src={facebookIcon} alt="Facebook" className="w-[50px] h-[50px]" /></a>
              <a href=""><img src={twitterIcon} alt="Twitter" className="w-[50px] h-[50px]" /></a>
              <a href=""><img src={linkedinIcon} alt="LinkedIn" className="w-[50px] h-[50px]" /></a>
              <a href=""><img src={instagramIcon} alt="Instagram" className="w-[50px] h-[50px]" /></a>
              <a href=""><img src={youtubeIcon} alt="YouTube" className="w-[50px] h-[50px]" /></a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-white" />

        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Links Column */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Dubai Properties for Sale</h4>
              <ul className="space-y-1 pl-4 font-semibold">
                <li><span className="mr-2">&gt;</span><a href="#">Real Estate Developers</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Apartments for Sale in Dubai</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Townhouse for Sale in Dubai</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Offices for Sale in Dubai</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Duplex for Sale in Dubai</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Penthouse for Sale in Dubai</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Off Plan Properties Dubai</h4>
              <ul className="space-y-1 pl-4">
                <li><span className="mr-2">&gt;</span><a href="#">Off Plan Properties in Dubai</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Penthouse for Sale in Dubai</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Off plan Apartments in Dubai</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Off plan Townhouses in Dubai</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Property Management Services</h4>
              <ul className="space-y-1 pl-4">
                <li><span className="mr-2">&gt;</span><a href="#">Property Management in Dubai</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Real Estate Marketing</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Property Listing in Dubai</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Property Investment advisory</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Buyers Guide</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Sellers Guide</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">What is Ejari?</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Buy Real Estate with Bitcoin</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Property Services</h4>
              <ul className="space-y-1 pl-4">
                <li><span className="mr-2">&gt;</span><a href="#">Property Snagging</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Real Estate Marketing</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Tenant Management</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Property Handover</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Submit Testimonial</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 w-full" />
        <h1 className="font-[Font_4] font-[400] text-[20px] leading-[24px] tracking-[0%] align-middle capitalize py-4">
          Browse Properties by Dubai Areas
        </h1>

        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-4 gap-6">
            <div>
              <ul className="space-y-1 pl-4">
                <li><span className="mr-2">&gt;</span><a href="#">Downtown Dubai</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Palm Jumeirah</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Dubai Marina</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Arabian Ranches</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Emirates Hills</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Springs</a></li>
              </ul>
            </div>

            <div>
              <ul className="space-y-1 pl-4">
                <li><span className="mr-2">&gt;</span><a href="#">Dubai Hills Estate</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Jumeirah Golf Estates</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Pearl Jumeirah Island</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Jumeirah Lake Towers (JLT)</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Jumeirah Village Triangle (JVT)</a></li>
              </ul>
            </div>

            <div>
              <ul className="space-y-1 pl-4">
                <li><span className="mr-2">&gt;</span><a href="#">Jumeirah Village Circle (JVC)</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Jumeirah Beach Residence (JBR)</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Business Bay Dubai</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Barsha Heights (Tecom)</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Dubai South</a></li>
              </ul>
            </div>

            <div>
              <ul className="space-y-1 pl-4">
                <li><span className="mr-2">&gt;</span><a href="#">Dubai Creek Harbour</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Dubailand</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Akoya Damac Hills</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Silicon Oasis Dubai</a></li>
                <li><span className="mr-2">&gt;</span><a href="#">Arjan</a></li>
              </ul>
            </div>
          </div>
          <img src={footerImage} alt="Footer Visual" className="w-[239px] h-auto rounded-md" />
        </div>

        <p className="text-xs text-center mt-4">© sfs real estate Properties - All rights reserved</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
