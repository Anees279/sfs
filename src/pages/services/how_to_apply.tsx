import React from 'react';
import ContactIcon from '../../assets/icons/Phone.png';
import DocumentIcon from '../../assets/icons/Documents-.png';
import TimingIcon from '../../assets/icons/Clock-1-1-.png';
import CompleteIcon from '../../assets/icons/Certificate-.png';

const steps = [
  {
    icon: <img src={ContactIcon} alt="Contact Icon" className="w-16 h-16" />,
    title: 'CONTACT US',
    description: 'Our agents will guide you step by step',
  },
  {
    icon: <img src={DocumentIcon} alt="Document Icon" className="w-16 h-16" />,
    title: 'DOCUMENTS',
    description: 'Submit your documents and pay the application fee',
  },
  {
    icon: <img src={TimingIcon} alt="Timing Icon" className="w-16 h-16" />,
    title: 'TIMING',
    description: 'The entire process is between 5–7 working days',
  },
  {
    icon: <img src={CompleteIcon} alt="Complete Icon" className="w-16 h-16" />,
    title: 'COMPLETE',
    description: 'Your visa is stamped into your passport',
  },
];

const HowToApplyGoldenVisa: React.FC = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-white max-w-7xl mx-auto text-[#0F4C5C]">
      <h2 className="text-[33px] leading-[33px] font-normal text-center mb-12 font-[Font3] text-[#5F0F40]">
        How To Apply for UAE Golden Visa?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className=" p-8 text-center flex flex-col items-center">
            <div className="mb-4">{step.icon}</div>
            <p className="text-sm nt-semibold mb-2 font-[Font2] text-black">{step.title}</p>
            <p className="text-sm font-medium leading-5 font-[Font2] text-gray-700">{step.description}</p>
          </div>
        ))}

      </div>
      
    </section>
  );
};

export default HowToApplyGoldenVisa;
