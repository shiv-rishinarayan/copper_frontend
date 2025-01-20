import React from "react";
import EuropeETFTickers from "./Tickers/EuropeTickers";
import EuropeChart from "./Charts/EuropeChart";

const EuropeETF = () => {
  return (
    <div>
      <div className="mb-20">
        <EuropeETFTickers />
        <div className="mt-14">
          <EuropeChart />
        </div>
      </div>
    </div>
  );
};

export default EuropeETF;
