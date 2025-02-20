// import React from "react";
// import { FaSearch } from "react-icons/fa";
// import StockScreenerMain from "./DStockScreenerMain";

// const ScreenerContent = () => {
//   return (
//     <div className="p-4 lg:p-6">
//       <h2 className="text-xl font-bold mb-4 lg:mb-3 text-gray-800">
//         Stock Screener
//       </h2>
//       <div className="bg-white rounded-md shadow-lg p-4 pb-2 lg:pt-8 lg:pr-8 lg:pl-8">
//         <div className="mb-3">
//           <div className="relative">
//             <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
//             <input
//               type="text"
//               placeholder="Search stocks..."
//               className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-accent text-sm"
//             />
//           </div>
//           <div className="mt-8">
//             <StockScreenerMain />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScreenerContent;

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import StockScreener from "./DStockScreenerMain";

const ScreenerContent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="p-4 lg:p-6">
      <h2 className="text-xl font-bold mb-4 lg:mb-3 text-gray-800">
        Stock Screener
      </h2>
      <div className="bg-white rounded-md shadow-lg p-4 pb-2 lg:pt-8 lg:pr-8 lg:pl-8">
        <div className="mb-3">
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search stocks..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-accent text-sm"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className="mt-8">
            <StockScreener searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenerContent;
