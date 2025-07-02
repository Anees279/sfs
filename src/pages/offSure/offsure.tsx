
import React from "react";
import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import OffSureListing from "./offsureListing";
import OffPlanProperties from "./offPlanProperties";

const OffSure = () => {
  return (
    <div className="w-full py-10 px-4 bg-white">
      <h2
  className="text-center text-[22px] leading-[26.4px] font-normal capitalize mb-6 text-[#5F0F40]"
  style={{ fontFamily: "'Font 3'", letterSpacing: "0%" }}
>
  Search Projects
</h2>

      <div className="max-w-xl mx-auto flex items-center border border-gray-300  px-4 py-0">
        <Input
          className="flex-1 text-sm md:text-base px-2"
          disableUnderline
          placeholder="Search here..."
          inputProps={{ className: "outline-none w-full" }}
        />
        <button className="text-white bg-[#CCCCCC] p-2 ">
          <SearchIcon />
        </button>
      </div>
      <OffSureListing />
      <OffPlanProperties />
    </div>
  );
};

export default OffSure;
