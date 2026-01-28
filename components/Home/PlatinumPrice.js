import React, { useState, useEffect } from "react";
import { COPPER_PRICES } from "@/src/api/copperAPI";

const PlatinumPrice = () => {
  const [platinumData, setPlatinumData] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch(COPPER_PRICES)
      .then((response) => response.json())
      .then((data) => {
        // Find the Platinum data from the response
        const platinumInfo = data.find(
          (metal) => metal.pgm_name === "Platinum"
        );
        setPlatinumData(platinumInfo);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // If platinumData is not yet available, render a loading state or a fallback
  if (!platinumData) {
    return <div>Loading...</div>;
  }

  // Extract and format the required values, with fallback to 0.00 if data is invalid
  const platinumSpotPrice = platinumData.price
    ? parseFloat(platinumData.price).toFixed(2)
    : "0.00";
  const changePercentage = platinumData.price_change_percent
    ? parseFloat(platinumData.price_change_percent).toFixed(2)
    : "0.00";
  const change = platinumData.price_change
    ? parseFloat(platinumData.price_change).toFixed(2)
    : "0.00";

  // Format the change to display the dollar sign before the negative sign if necessary
  const formattedChange = `$${parseFloat(change) > 0 ? "+" + change : change}`;

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 mt-4 rounded-lg max-w-3xl">
      {/* Large Screen Layout */}
      <div className="hidden lg:flex flex-row gap-10">
        {/* Platinum Spot Price */}
        <div className="text-center lg:text-left">
          <h2 className="text-base font-bold text-white">
            Platinum Spot Price
          </h2>
          <p className="text-base mt-1">${platinumSpotPrice}</p>
        </div>
        {/* Change in Dollars */}
        <div className="text-center lg:text-left">
          <h2 className="text-base font-bold text-white">Change</h2>
          <p
            className={`text-base mt-1 ${
              parseFloat(change) > 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {formattedChange}
          </p>
        </div>
        {/* Change Percentage */}
        <div className="text-center lg:text-left">
          <h2 className="text-base font-bold text-white">% Change</h2>
          <p
            className={`text-base mt-1 ${
              parseFloat(changePercentage) > 0
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {parseFloat(changePercentage) > 0
              ? `+${changePercentage}%`
              : `${changePercentage}%`}
          </p>
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="lg:hidden space-y-2">
        <p className="text-base font-bold text-white">
          Platinum Spot Price:{" "}
          <span className="font-normal">${platinumSpotPrice}</span>
        </p>

        <p className="text-base font-bold text-white">
          Change:{" "}
          <span
            className={`${
              parseFloat(change) > 0 ? "text-green-400" : "text-red-400"
            } font-normal`}
          >
            {formattedChange}
          </span>
        </p>
        <p className="text-base font-bold text-white">
          Change %:{" "}
          <span
            className={`${
              parseFloat(changePercentage) > 0
                ? "text-green-400"
                : "text-red-400"
            } font-normal`}
          >
            {parseFloat(changePercentage) > 0
              ? `+${changePercentage}%`
              : `${changePercentage}%`}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PlatinumPrice;
