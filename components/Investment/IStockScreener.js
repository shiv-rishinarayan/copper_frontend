import React from "react";
import StockScreener from "../Investment/StockScreener/StockScreener";

const IStockScreener = ({ stockData }) => {
  return (
    <div className="px-3 md:px-12 py-5 md:py-5">
      <h1 className="cambay text-[22px] sm:text-3xl  font-semibold">
        Stock Screener
      </h1>

      {/* content  */}
      <div className="mt-1 md:mt-5">
        <StockScreener stockData={stockData} />
      </div>
    </div>
  );
};

export default IStockScreener;
