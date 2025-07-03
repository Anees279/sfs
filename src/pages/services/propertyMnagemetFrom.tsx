import React from 'react';

const PropertyFrom = () => {
  return (
    <div className="min-h-auto flex items-center justify-center bg-[#0F4C5C]/70 p-2">
      <form
        className="bg-transparent rounded-lg shadow-lg md:w-[900.64px]  w-full p-[20px]"
        style={{ gap: '-20px' }}
      >
        <h2 className="text-2xl font-bold text-left text-white mb-2">Request A Call</h2>

        <div className="flex flex-col md:flex-row gap-4 mb-2">
          <input
            type="text"
            placeholder="First Name*"
            className="w-full p-3 border border-gray-300 rounded bg-transparent"
            required
          />
          <input
            type="text"
            placeholder="Last Name*"
            className="w-full p-3 border border-gray-300 rounded bg-transparent"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-2">
          <input
            type="email"
            placeholder="Email*"
            className="w-full p-3 border border-gray-300 rounded bg-transparent"
            required
          />
          <input
            type="tel"
            placeholder="050 123 4567"
            className="w-full p-3 border border-gray-300 rounded bg-transparent"
          />
        </div>

        <input
          type="text"
          placeholder="Information*"
          className="w-full p-3 mb-2 border border-gray-300 rounded bg-transparent"
          required
        />

        <select className="w-full p-3 mb-2 border border-gray-300 rounded bg-transparent text-gray-400" required>
          <option value="">I'm a</option>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
          <option value="tenant">Tenant</option>
          <option value="landlord">Landlord</option>
        </select>

        <textarea
          placeholder="Message"
          className="w-full p-3 mb-2 border border-gray-300 rounded bg-transparent"
          rows={4}
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#5F0F40FA] text-white font-semibold py-3 rounded hover:bg-black transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PropertyFrom;
