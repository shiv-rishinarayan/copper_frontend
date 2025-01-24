import React from "react";
import { ETFdata } from "./ETFdata";

const ETFNavigationNav = ({ onRegionSelect, selectedRegion }) => {
  return (
    <div className="flex flex-wrap gap-5 sm:gap-4 mb-8 justify-center ">
      {ETFdata.regions.map((region) => {
        const isActive = region.name.toLowerCase() === selectedRegion;
        return (
          <button
            key={region.name}
            onClick={() => onRegionSelect(region.name)}
            className={`py-1 sm:px-4 px-3 rounded-full transition-colors text-sm sm:text-base ${
              isActive
                ? "bg-accent text-white"
                : " text-black hover:bg-accent/20"
            }`}
          >
            {region.name}
          </button>
        );
      })}
    </div>
  );
};

export default ETFNavigationNav;
