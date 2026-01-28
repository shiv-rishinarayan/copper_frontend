import React, { useState, useEffect } from "react";
import { COPPER_PRICES } from "@/src/api/copperAPI";

const PlatinumLivePrice = () => {
  const [platinumData, setPlatinumData] = useState(null);

  useEffect(() => {
    fetch(COPPER_PRICES)
      .then((response) => response.json())
      .then((data) => {
        const platinumInfo = data.find((item) => item.pgm_name === "Palladium");
        setPlatinumData(platinumInfo);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!platinumData) {
    return <div>Loading...</div>;
  }

  const platinumSpotPrice = parseFloat(platinumData.price).toFixed(2);
  const change = parseFloat(platinumData.price_change).toFixed(2);
  const changePercentage = parseFloat(
    platinumData.price_change_percent
  ).toFixed(2);

  return (
    <div className="text-center">
      <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
        Live Palladium Price
      </h2>

      <div className="bg-accent/30 p-3 md:p-2 lg:p-3 py-4 w-full border border-accent/30 rounded-md flex justify-between items-center">
        <div className="h-8 md:h-6 lg:h-8">
          <img
            className="w-16  md:w-12 lg:w-28 h-16 md:h-6 lg:h-10 sm:h-10 sm:w-28"
            src="/logo.jpg"
            alt="Logo"
          />
        </div>

        <div className="w-[60%] md:w-[70%] pr-1">
          <ul className="flex items-center gap-x-5 md:gap-x-3 lg:gap-x-5 text-xs md:text-[10px] lg:text-sm">
            <li className="w-[33%] text-black1/80 font-medium">Price</li>
            <li className="w-[33%] text-black1/80 font-medium">Change</li>
            <li className="w-[33%] text-black1/80 font-medium">% Change</li>
          </ul>
        </div>
      </div>

      <div className="mt-1 bg-accent/30 p-3 md:p-2 lg:p-3 py-4 w-full border border-accent/30 rounded-md flex justify-between items-center">
        <div>
          <h3 className="text-xs md:text-[9px] lg:text-sm font-bold text-green">
            Palladium Spot Price
          </h3>
        </div>

        <div className="w-[60%] md:w-[70%]">
          <ul className="flex items-center gap-x-5 md:gap-x-3 lg:gap-x-5 text-xs md:text-[9px] lg:text-sm font-semibold text-green">
            <li className="w-[33%]">
              <p>${platinumSpotPrice}</p>
            </li>
            <li className="w-[33%]">
              <p
                className={`${change >= 0 ? "text-green-600" : "text-red-500"}`}
              >
                {change >= 0 ? `$+${change}` : `$-${Math.abs(change)}`}
              </p>
            </li>
            <li className="w-[33%]">
              <p
                className={`${
                  changePercentage >= 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {changePercentage >= 0
                  ? `+${changePercentage}%`
                  : `${changePercentage}%`}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-2 text-start font-medium text-date text-sm md:text-xs lg:text-sm">
        <a
          target="_blank"
          className="text-accent hover:text-accent/60 transition-all duration-200"
          href="https://markets.businessinsider.com/commodities/realtime-chart/uranium-price"
        >
          markets.businessinsider.com
        </a>
      </p>
    </div>
  );
};

export default PlatinumLivePrice;
