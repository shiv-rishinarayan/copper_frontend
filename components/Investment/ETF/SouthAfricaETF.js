import React from "react";
import SouthAfricaETFTickers from "./Tickers/SouthAfricaTickers";
import SouthAfricaChart from "./Charts/SouthAfricaChart";

const SouthAfricaETF = () => {
  return (
    <div>
      <div className="mb-20">
        <SouthAfricaETFTickers />
        <div className="mt-14">
          <SouthAfricaChart />
        </div>
      </div>
    </div>
  );
};

export default SouthAfricaETF;
