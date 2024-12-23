import React from "react";

const PlatinumPrice = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 mt-4 rounded-lg max-w-3xl">
      {/* Large Screen Layout */}
      <div className="hidden lg:flex flex-row gap-10">
        {/* Platinum Spot Price */}
        <div className="text-center lg:text-left">
          <h2 className="text-base font-bold text-white">
            Platinum Spot Price
          </h2>
          <p className="text-base mt-1">$1234.56</p>
        </div>
        {/* Change Percentage */}
        <div className="text-center lg:text-left">
          <h2 className="text-base font-bold text-white">Change %</h2>
          <p className="text-base text-green-400 mt-1">+1.23%</p>
        </div>
        {/* Change */}
        <div className="text-center lg:text-left">
          <h2 className="text-base font-bold text-white">Change</h2>
          <p className="text-base text-green-400 mt-1">+$15.34</p>
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="lg:hidden  space-y-2">
        <p className="text-base font-bold text-white">
          Platinum Spot Price: <span className="font-normal">$1234.56</span>
        </p>
        <p className="text-base font-bold text-white">
          Change %: <span className="text-green-400 font-normal">+1.23%</span>
        </p>
        <p className="text-base font-bold text-white">
          Change: <span className="text-green-400 font-normal">+$15.34</span>
        </p>
      </div>
    </div>
  );
};

export default PlatinumPrice;
