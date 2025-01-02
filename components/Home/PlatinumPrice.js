// import React from "react";

// const PlatinumPrice = () => {
//   return (
//     <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 mt-4 rounded-lg max-w-3xl">
//       {/* Large Screen Layout */}
//       <div className="hidden lg:flex flex-row gap-10">
//         {/* Platinum Spot Price */}
//         <div className="text-center lg:text-left">
//           <h2 className="text-base font-bold text-white">
//             Platinum Spot Price
//           </h2>
//           <p className="text-base mt-1">$1234.56</p>
//         </div>
//         {/* Change Percentage */}
//         <div className="text-center lg:text-left">
//           <h2 className="text-base font-bold text-white">Change %</h2>
//           <p className="text-base text-green-400 mt-1">+1.23%</p>
//         </div>
//         {/* Change */}
//         <div className="text-center lg:text-left">
//           <h2 className="text-base font-bold text-white">Change</h2>
//           <p className="text-base text-green-400 mt-1">+$15.34</p>
//         </div>
//       </div>

//       {/* Small Screen Layout */}
//       <div className="lg:hidden  space-y-2">
//         <p className="text-base font-bold text-white">
//           Platinum Spot Price: <span className="font-normal">$1234.56</span>
//         </p>
//         <p className="text-base font-bold text-white">
//           Change %: <span className="text-green-400 font-normal">+1.23%</span>
//         </p>
//         <p className="text-base font-bold text-white">
//           Change: <span className="text-green-400 font-normal">+$15.34</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PlatinumPrice;

import React, { useState, useEffect } from "react";

const PlatinumPrice = () => {
  const [platinumData, setPlatinumData] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://platinumdjango-production.up.railway.app/api/pgm-prices/")
      .then((response) => response.json())
      .then((data) => {
        setPlatinumData(data.platinum_price);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // If platinumData is not yet available, render a loading state or a fallback
  if (!platinumData) {
    return <div>Loading...</div>;
  }

  // Extract and format the required values
  const platinumSpotPrice = platinumData.price.toFixed(2);
  const changePercentage = platinumData.price_change_percent.toFixed(2);
  const change = platinumData.price_change.toFixed(2);

  // Format the change to display the dollar sign before the negative sign if necessary
  const formattedChange = change >= 0 ? `+$${change}` : `$${change}`;

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
        {/* Change Percentage */}
        <div className="text-center lg:text-left">
          <h2 className="text-base font-bold text-white">Change %</h2>
          <p
            className={`text-base mt-1 ${
              changePercentage >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {changePercentage >= 0
              ? `+${changePercentage}%`
              : `${changePercentage}%`}
          </p>
        </div>
        {/* Change in Dollars */}
        <div className="text-center lg:text-left">
          <h2 className="text-base font-bold text-white">Change</h2>
          <p
            className={`text-base mt-1 ${
              change >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {formattedChange}
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
          Change %:{" "}
          <span
            className={`${
              changePercentage >= 0 ? "text-green-400" : "text-red-400"
            } font-normal`}
          >
            {changePercentage >= 0
              ? `+${changePercentage}%`
              : `${changePercentage}%`}
          </span>
        </p>
        <p className="text-base font-bold text-white">
          Change:{" "}
          <span
            className={`${
              change >= 0 ? "text-green-400" : "text-red-400"
            } font-normal`}
          >
            {formattedChange}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PlatinumPrice;
