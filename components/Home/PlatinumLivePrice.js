// import React from "react";

// const PlatinumLivePrice = () => {
//   const dummyPlatinumPrice = [
//     {
//       last_price: "56.25",
//       price_change: "+0.15",
//       percentage_change: "+0.27%",
//     },
//   ];

//   return (
//     <div className="text-center">
//       <h2 className="flex text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
//         Live Platinum Price
//       </h2>

//       <div className="bg-accent/30 p-3 py-4 w-full border border-accent/30 rounded-md flex justify-between items-center">
//         <div className="h-8 md:h-10">
//           {" "}
//           {/* Adjust the container height */}
//           <img
//             className="w-16 h-16 md:w-28 md:h-12" // Adjust the width and height
//             src="/logo.jpg"
//             alt="Logo"
//           />
//         </div>

//         <div className="w-[60%] pr-1">
//           <ul className="flex items-center gap-x-5 text-xs md:text-sm">
//             <li className="w-[33%] text-black1/80 font-medium">Last</li>
//             <li className="w-[33%] text-black1/80 font-medium">Change</li>
//             <li className="w-[33%] text-black1/80 font-medium">% Change</li>
//           </ul>
//         </div>
//       </div>

//       <div className="mt-1 bg-accent/30 p-3 py-4 w-full border border-accent/30 rounded-md flex justify-between items-center">
//         <div>
//           <h3 className="text-xs md:text-sm font-bold text-green">
//             Platinum Spot Price
//           </h3>
//         </div>

//         <div className="w-[60%]">
//           <ul className="flex items-center gap-x-5 text-xs md:text-sm font-semibold text-green">
//             <li className="w-[33%]">
//               <p>${dummyPlatinumPrice[0].last_price}</p>
//             </li>
//             <li className="w-[33%]">
//               <p>{dummyPlatinumPrice[0].price_change}</p>
//             </li>
//             <li className="w-[33%]">
//               <p>{dummyPlatinumPrice[0].percentage_change}</p>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <p className="mt-2 text-start font-medium text-date text-sm">
//         source:{" "}
//         <a
//           target="_blank"
//           className="text-date hover:text-green transition-all duration-200"
//           href="https://markets.businessinsider.com/commodities/realtime-chart/uranium-price"
//         >
//           markets.businessinsider.com
//         </a>
//       </p>
//     </div>
//   );
// };

// export default PlatinumLivePrice;

import React, { useState, useEffect } from "react";

const PlatinumLivePrice = () => {
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

  // Extract and format the values with 2 decimal points
  const platinumSpotPrice = platinumData.price.toFixed(2);
  const change = platinumData.price_change.toFixed(2);
  const changePercentage = platinumData.price_change_percent.toFixed(2);

  return (
    <div className="text-center">
      <h2 className="flex text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
        Live Platinum Price
      </h2>

      <div className="bg-accent/30 p-3 py-4 w-full border border-accent/30 rounded-md flex justify-between items-center">
        <div className="h-8 md:h-10">
          {/* Adjust the container height */}
          <img
            className="w-16 h-16 md:w-28 md:h-12" // Adjust the width and height
            src="/logo.jpg"
            alt="Logo"
          />
        </div>

        <div className="w-[60%] pr-1">
          <ul className="flex items-center gap-x-5 text-xs md:text-sm">
            <li className="w-[33%] text-black1/80 font-medium">Price</li>
            <li className="w-[33%] text-black1/80 font-medium">Change</li>
            <li className="w-[33%] text-black1/80 font-medium">% Change</li>
          </ul>
        </div>
      </div>

      <div className="mt-1 bg-accent/30 p-3 py-4 w-full border border-accent/30 rounded-md flex justify-between items-center">
        <div>
          <h3 className="text-xs md:text-sm font-bold text-green">
            Platinum Spot Price
          </h3>
        </div>

        <div className="w-[60%]">
          <ul className="flex items-center gap-x-5 text-xs md:text-sm font-semibold text-green">
            <li className="w-[33%]">
              <p>${platinumSpotPrice}</p>
            </li>
            <li className="w-[33%]">
              <p
                className={`${change >= 0 ? "text-green-400" : "text-red-500"}`}
              >
                {change >= 0 ? `+$${change}` : `-$${Math.abs(change)}`}
              </p>
            </li>
            <li className="w-[33%]">
              <p
                className={`${
                  changePercentage >= 0 ? "text-green-400" : "text-red-500"
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

      <p className="mt-2 text-start font-medium text-date text-sm">
        source:{" "}
        <a
          target="_blank"
          className="text-date hover:text-green transition-all duration-200"
          href="https://markets.businessinsider.com/commodities/realtime-chart/uranium-price"
        >
          markets.businessinsider.com
        </a>
      </p>
    </div>
  );
};

export default PlatinumLivePrice;
