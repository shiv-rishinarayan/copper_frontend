import React from "react";
import NorthAmericaETFTickers from "./Tickers/NorthAmericaTickers";
import NorthAmericaChart from "./Charts/NorthAmericaChart";

const NorthAmericaETF = () => {
  return (
    <div>
      <div className="mb-20">
        <NorthAmericaETFTickers />
        <div className="mt-14">
          <NorthAmericaChart />
        </div>
      </div>
    </div>
  );
};

export default NorthAmericaETF;
