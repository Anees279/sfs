import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const faqs = [
  {
    question: "Why shouldn’t I manage my property myself?",
    answer:
      "SFS Property Management team strives to alleviate the strain and makes it easier for owners by taking care of all aspects of running a successful property business. Whether it’s advertising your property, finding suitable tenants, taking care of the administrative burden, collecting payments, conducting leasing inspections, maintenance and repairs, we provide a full array of expert services.",
  },
  {
    question: "What can I do to get my home rented faster?",
    answer: "Ensure your home is clean, well-maintained, and competitively priced. SFS can also help market your home effectively to reach the right tenants quickly.",
  },
  {
    question: "How long will it take to rent my home?",
    answer: "This depends on the market, price, and condition of your home. However, our experienced team typically minimizes vacancy time.",
  },
  {
    question: "How much will my home rent for?",
    answer: "We conduct market analysis to determine the optimal rental value of your property.",
  },
  {
    question: "What are the procedures to start with?",
    answer: "Contact SFS, and we will guide you through an easy step-by-step process to onboard your property.",
  },
  {
    question: "How much will it cost to avail Binaya’s Property Management in Dubai?",
    answer: "The cost varies depending on services chosen. Contact us for a tailored quote.",
  },
  {
    question: "How to Interact With A Property Management Company In Dubai?",
    answer: "You can call, email, or visit our office. Our team is always ready to assist.",
  },
  {
    question: "How A Property Management Company In Dubai Is Can Take Care Of My Property?",
    answer: "We handle everything from tenant sourcing to maintenance, ensuring peace of mind.",
  },
  {
    question: "Can A Property Management Company Collect Rent From Or Provide Notice?",
    answer: "Yes, we collect rent, send notices, and manage tenancy agreements legally and professionally.",
  },
  {
    question: "What Are The Core Duties Of The Property Management Company For Buyers Or Renters?",
    answer: "These include tenant management, rent collection, maintenance, inspection, and legal compliance.",
  },
];

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-[1px] border-gray-300  p-4 ">
      <button
        onClick={onClick}
        className="w-full flex items-start text-left text-[#9A031E] font-semibold text-lg gap-2"
      >
        <span className="pt-1">{isOpen ? <RemoveIcon /> : <AddIcon />}</span>
        <span className="flex-1">{question}</span>
      </button>

      {isOpen && <p className="mt-2 text-gray-600 text-sm">{answer}</p>}
    </div>
  );
};

const GoldenVisaFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-normal text-[29px] leading-[29px] tracking-[0%] text-center align-middle capitalize text-[#5F0F40] mb-8 font-['Lato']">
          FAQ's About Golden Visa dubai
        </h2>

        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default GoldenVisaFAQs;
