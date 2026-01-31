import React, { useState, useEffect } from "react";
import { COPPER_PRICES } from "@/src/api/copperAPI";

const CopperLivePrice = () => {
  const [copperData, setCopperData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCopperPrice = async () => {
      try {
        const response = await fetch(COPPER_PRICES);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        
        // Find the Copper data from the response
        const copperInfo = data.find((item) => 
          item.metal_name === "Copper" || item.pgm_name === "Copper"
        );
        setCopperData(copperInfo);
      } catch (error) {
        console.error("Error fetching copper price:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCopperPrice();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
          Live Copper Price
        </h2>
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-800"></div>
          <span className="ml-3 text-gray-800 font-semibold">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
          Live Copper Price
        </h2>
        <div className="text-center py-8 text-red-500">
          Error loading copper price: {error}
        </div>
      </div>
    );
  }

  if (!copperData) {
    return (
      <div className="text-center">
        <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
          Live Copper Price
        </h2>
        <div className="text-center py-8 text-gray-500">
          No copper price data available
        </div>
      </div>
    );
  }

  const copperSpotPrice = parseFloat(copperData.price || 0).toFixed(2);
  const change = parseFloat(copperData.price_change || 0).toFixed(2);
  const changePercentage = parseFloat(copperData.price_change_percent || 0).toFixed(2);

  return (
    <div className="text-center">
      <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
        Live Copper Price
      </h2>

      <div className="bg-accent/30 p-3 md:p-2 lg:p-3 py-4 w-full border border-accent/30 rounded-md flex justify-between items-center">
        <div className="h-8 md:h-6 lg:h-8">
          <img
            className="w-16 md:w-12 lg:w-28 h-16 md:h-6 lg:h-10 sm:h-10 sm:w-28"
            src="/logo.jpg"
            alt="Copper Tracker Logo"
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
            Copper Spot Price
          </h3>
        </div>

        <div className="w-[60%] md:w-[70%]">
          <ul className="flex items-center gap-x-5 md:gap-x-3 lg:gap-x-5 text-xs md:text-[9px] lg:text-sm font-semibold text-green">
            <li className="w-[33%]">
              <p>${copperSpotPrice}</p>
            </li>
            <li className="w-[33%]">
              <p
                className={`${parseFloat(change) >= 0 ? "text-green-600" : "text-red-500"}`}
              >
                {parseFloat(change) >= 0 ? `$+${change}` : `$${change}`}
              </p>
            </li>
            <li className="w-[33%]">
              <p
                className={`${
                  parseFloat(changePercentage) >= 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {parseFloat(changePercentage) >= 0
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
          href="https://www.lme.com/en/metals/non-ferrous/copper"
          rel="noopener noreferrer"
        >
          lme.com/copper
        </a>
      </p>
    </div>
  );
};

export default CopperLivePrice;