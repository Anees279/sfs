import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
// If FeaturedListings exports the array as a named export:
import { featuredListings } from "../pages/home/FeaturedListings";
// Make sure that '../home/FeaturedListings' exports an array named 'featuredListings', not a React component.
import { Settings } from "lucide-react";
const cities = ["All Cities", "Dubai", "Abu Dhabi", "Sharjah", "Ajman"];
const areas = [
  "All Areas",
  "Downtown Dubai",
  "Dubai Marina",
  "Business Bay",
  "Palm Jumeirah",
  "Jumeirah Village Circle",
  "Arabian Ranches",
  "Jumeirah Lake Towers",
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedArea, setSelectedArea] = useState("All Areas");
  const navigate = useNavigate();

  const filteredListings = featuredListings.filter((item: { city: string; area: string; }) => {
    const cityMatch = selectedCity === "All Cities" || item.city === selectedCity;
    const areaMatch = selectedArea === "All Areas" || item.area === selectedArea;
    return cityMatch && areaMatch;
  });

  const fuse = new Fuse(filteredListings, {
    keys: ["title", "description", "city", "area"],
    threshold: 0.3,
  });

  const results = query ? fuse.search(query) : filteredListings.map((item: { id: string; title: string; description: string; city: string; area: string; }) => ({ item }));
  const matches = results.map((res: { item: { id: string; title: string; description: string; city: string; area: string; } }) => res.item);

  const handleClick = () => {
    navigate("/featured-listings");
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="  p-4 flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="🔍Enter an address, town, street, zip "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full flex-1 p-3 text-sm border border-gray-300 rounded-md  md:w-[300px] lg:w-[200px] xl:w-[500px] 2xl:w-[600px]"
        />
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="p-3 border border-gray-300 rounded-md w-full md:w-48 text-sm text-gray-400">
          {cities.map((city) => <option key={city}>{city}</option>)}
        </select>
        <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)} className="p-3 border border-gray-300 rounded-md w-full md:w-48 text-sm text-gray-400">
          {areas.map((area) => <option key={area}>{area}</option>)}
        </select>
        <button className="w-full md:w-[130px] h-[42px] pt-[1px] pr-[16px] pb-[1px] pl-[16px] border border-solid border-[#0F4C5C] bg-[#5F0F40] text-white text-sm font-medium hover:bg-black flex items-center justify-center gap-2">
  <Settings className="w-4 h-4" />
  Advanced
</button>
        <button
  onClick={handleClick}
  className="w-full  md:w-[130px] h-[42px] pt-[1px] pr-[16px] pb-[1px] pl-[16px] border border-solid border-[#0F4C5C] bg-[#5F0F40] text-white text-sm font-medium  hover:bg-black"
>
  Search
</button>

      </div>

      {query && (
        <ul className="mt-4 bg-white rounded-md shadow-md border border-gray-200">
          {matches.length > 0 ? (
            matches.map((item: { id: string; title: string; description: string; }) => (
              <li
                key={item.id}
                className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                onClick={handleClick}
              >
                <h3 className="font-semibold text-[#0F4C5C] text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </li>
            ))
          ) : (
            <li className="p-4 text-sm text-gray-500">No matches found</li>
          )}
        </ul>
      )}
    </div>
  );
}
