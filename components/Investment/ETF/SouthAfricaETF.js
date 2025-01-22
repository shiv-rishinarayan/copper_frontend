import React from "react";
import SouthAfricaETFTickers from "./Tickers/SouthAfricaTickers";
import SouthAfricaChart from "./Charts/SouthAfricaChart";
import Financial from "../ETF/Financials/Financial";
import { ETFdata } from "./ETFdata";

const SouthAfricaETF = () => {
  const southAfricaFunds = ETFdata.regions.find(
    (region) => region.name === "South Africa"
  ).funds;

  return (
    <div>
      <div className="mb-20">
        <SouthAfricaETFTickers />
        <div className="mt-10 h-[500px]">
          <SouthAfricaChart />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {southAfricaFunds.map((fund) => (
            <div key={fund.symbol} className="h-[968px]">
              <Financial symbol={fund.symbol} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SouthAfricaETF;
