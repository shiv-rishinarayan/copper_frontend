import React from "react";
import AsiaETFIntradayReturnTickers from "./Tickers/AsiaTickers";
import AsiaChart from "./Charts/AsiaChart";

const AsiaETF = () => {
  return (
    <div>
      <div className="mb-20">
        <AsiaETFIntradayReturnTickers />
        <div className="mt-14">
          <AsiaChart />
        </div>
      </div>
    </div>
  );
};

export default AsiaETF;
