import React from "react";

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "Why Can Investing in Real Estate in Dubai Be A Good Idea?",
      answer:
        "These are factors like Dubai’s no taxes, high rate of return, and connection to international markets. Hence, due to strong mechanical structures and a fast-growing economy, investing in real estate in Dubai is one of the most lucrative businesses.",
    },
    {
      question: "Can Foreigners Invest in Dubai Property?",
      answer:
        "Yes, foreigners can now buy freehold and leasehold properties in special zones of Dubai. The city’s regional laws do not challenge foreign investors to own property in Dubai with ease.",
    },
    {
      question:
        "Which Parts of Dubai Are Considered the Best For Property Investment?",
      answer:
        "Some of the best sites for investors to buy properties in Dubai are Palm Jumeirah, Downtown Dubai, Dubai Marina, and Dubai Creek Harbour. All these areas deliver good rental returns and better capital growth.",
    },
    {
      question: "Is Dubai A Safe Haven For Investments In Real Estate?",
      answer:
        "Yes, Dubai has a stable political climate and a strong legal regime that defends investors’ interests. The real estate investment industry in Dubai is relatively safe, and there is increased transparency in the market.",
    },
    {
      question:
        "Is It Possible To Find Funding For Property Investment Property In Dubai?",
      answer:
        "Indeed, mortgages are available in Dubai for residents and foreigners, and fair interest rates are spiked with numerous flexible provisions.",
    },
    {
      question:
        "What should be the average return on investment of property investment in Dubai?",
      answer:
        "Today, Dubai is among some of the world’s niches, with a quality rental yield that ranges from 5% to 8%. This ROI depends on the area, property type, and general economic situation.",
    },
    {
      question: "Why sfsReal Estate For Your Investment In Dubai?",
      answer:
        "Considering that sfsReal Estate’s investment solutions, analytical and performance data, and services are designed specifically for the Dubai property market, we are your perfect partner for investing in real estate.",
    },
  ];

  return (
    <section className=" py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto p-4">
        <h2
          className="text-[32px] leading-[32px] font-[400] text-center text-[#5F0F40] mb-8 capitalize"
          style={{ fontFamily: "Font 3", letterSpacing: "0%" }}
        >
          Frequently Asked Questions (FAQ's)
        </h2>

        <div className="space-y-6 justify-center">
          {faqs.map((faq, index) => (
            <div key={index} className="  p-6 ">
              <h3
                className="text-center font-[700] text-[15.13px] leading-[25px] text-[#9A031E] mb-2"
                style={{ fontFamily: "Font 1", letterSpacing: "0%" }}
              >
                {faq.question}
              </h3>

              <p
                className="text-center font-[500] text-[14.88px] leading-[25px] text-gray-700"
                style={{ fontFamily: "Font 1", letterSpacing: "0%" }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
