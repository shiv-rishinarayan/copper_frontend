// import React from "react";
// import NorthAmericaETFTickers from "./Tickers/NorthAmericaTickers";
// import NorthAmericaChart from "./Charts/NorthAmericaChart";

// const NorthAmericaETF = () => {
//   return (
//     <div>
//       <div className="mb-20">
//         <NorthAmericaETFTickers />
//         <div className="mt-14 h-[500px]">
//           <NorthAmericaChart />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NorthAmericaETF;

//.........................

import React from "react";
import NorthAmericaETFTickers from "./Tickers/NorthAmericaTickers";
import NorthAmericaChart from "./Charts/NorthAmericaChart";
import Financial from "../ETF/Financials/Financial";
import { ETFdata } from "./ETFdata"; // Adjust path as needed

const NorthAmericaETF = () => {
  const northAmericaFunds = ETFdata.regions.find(
    (region) => region.name === "North America"
  ).funds;

  return (
    <div>
      <div className="mb-20">
        <NorthAmericaETFTickers />
        <div className="mt-10 h-[500px]">
          <NorthAmericaChart />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {northAmericaFunds.map((fund) => (
            <div key={fund.symbol} className="h-[800px]">
              <Financial symbol={fund.symbol} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NorthAmericaETF;
