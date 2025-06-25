import React from "react";
import { CalendarToday, Label } from '@mui/icons-material';
import newsImage1 from '../../assets/images/Home Page/news1.png';
import newsImage2 from '../../assets/images/Home Page/news2.png';
import newsImage3 from '../../assets/images/Home Page/news3.png';
import newsImage4 from '../../assets/images/Home Page/news4.png';

const newsData = [
  {
    image: newsImage1,
    category: "Property Investors",
    date: "26 May 2025",
    title: "The Future of Crypto Real Estate in Dubai",
    summary: "Dubai, a global hub for innovation and luxury, has become a frontrunner in integrating...",
  },
  {
    image: newsImage2,
    category: "Property Investors",
    date: "26 May 2025",
    title: "Exclusive Waterfront Villas for Investors: A Prime Opportunity in Dubai",
    summary: "Investing in exclusive waterfront villas for investors in Dubai presents a unique opportunity to...",
  },
  {
    image: newsImage3,
    category: "Property Investors",
    date: "26 May 2025",
    title: "Why Ultra-high-net-worth (UHNW) Property Dubai is the Ultimate Investment Choice in 2025",
    summary: "Dubai has always been a magnet for eliteinvestors from around the world. But now more than ever,...",
  },
  {
    image: newsImage4,
    category: "Property Investors",
    date: "26 May 2025",
    title: "Risk-Managed Real Estate in theUAE: A Smart Investor’s Guide",
    summary: "Regarding securing your financial future,risk-managed real estate in the UAE is becoming an...",
  },
  
];

const LatestNews = () => {
  return (
    <div className="w-full px-4 py-10 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
       <h2 className="font-font4 text-[35px] leading-[35px] font-normal text-center capitalize text-[#0F4C5C] mb-8">
 Latest Real Estate News
</h2>

        <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-2 lg:gap-4">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="bg-white shadow-md overflow-hidden w-full sm:w-[48%] lg:w-[23.5%] p-2"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 font-medium mb-1 flex items-center">
                  <CalendarToday fontSize="small" className="mr-1" /> {news.date}
                </p>
                <p className="text-sm text-[#5F0F40] font-medium mb-1 flex items-center">
                  <Label fontSize="small" className="mr-1" /> {news.category}
                </p>
                <h3 className="font-semibold text-lg text-black leading-snug mb-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {news.summary}
                </p>
                <button className="text-[#5F0F40]  font-medium text-sm hover:underline">
                  Continue reading
                </button>
                <hr className="my-3 py-0" />
                <p className="text-xs text-gray-500">News by Anees</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
