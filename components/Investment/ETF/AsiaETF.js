// import React from "react";
// import AsiaETFIntradayReturnTickers from "./Tickers/AsiaTickers";
// import AsiaChart from "./Charts/AsiaChart";

// const AsiaETF = () => {
//   return (
//     <div>
//       <div className="mb-20">
//         <AsiaETFIntradayReturnTickers />
//         <div className="mt-14 h-[500px]">
//           <AsiaChart />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AsiaETF;

//.................

import React from "react";
import AsiaETFIntradayReturnTickers from "./Tickers/AsiaTickers";
import AsiaChart from "./Charts/AsiaChart";
import Financial from "../ETF/Financials/Financial";
import { ETFdata } from "./ETFdata"; // Adjust path as needed

const AsiaETF = () => {
  const asiaFunds = ETFdata.regions.find(
    (region) => region.name === "Asia"
  ).funds;

  return (
    <div className="">
      <div className="mb-20">
        <AsiaETFIntradayReturnTickers />
        <div className="mt-10 h-[500px]">
          <AsiaChart />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {asiaFunds.map((fund) => (
            <div key={fund.symbol} className="h-[968px]">
              <Financial symbol={fund.symbol} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AsiaETF;
