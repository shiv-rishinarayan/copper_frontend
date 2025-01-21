// import React from "react";
// import EuropeETFTickers from "./Tickers/EuropeTickers";
// import EuropeChart from "./Charts/EuropeChart";

// const EuropeETF = () => {
//   return (
//     <div>
//       <div className="mb-20">
//         <EuropeETFTickers />
//         <div className="mt-14 h-[500px]">
//           <EuropeChart />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EuropeETF;

//......................

import React from "react";
import EuropeETFTickers from "./Tickers/EuropeTickers";
import EuropeChart from "./Charts/EuropeChart";
import Financial from "../ETF/Financials/Financial";
import { ETFdata } from "./ETFdata"; // Adjust path as needed

const EuropeETF = () => {
  const europeFunds = ETFdata.regions.find(
    (region) => region.name === "Europe"
  ).funds;

  return (
    <div>
      <div className="mb-20">
        <EuropeETFTickers />
        <div className="mt-10 h-[500px]">
          <EuropeChart />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {europeFunds.map((fund) => (
            <div key={fund.symbol} className="h-[800px]">
              <Financial symbol={fund.symbol} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EuropeETF;
