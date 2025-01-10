// ChatInterfaceLeftSidebar.jsx
import React from "react";
// import TradingViewWidget from "../components/TradingViewWidget";
// import StockDetailChart2 from "../components/StockDetailChart2";
// import StockDetailsTechAnalysis from "../components/StockDetailsTechAnalysis";
import CommunitySidebarLatestNews from "../Community/CommunitySidebarLatestNews";
import DailyNewsletterAd from "../Home/DailyNewsletterAd";

const CommunityLeftSide = ({ stockDetailsData }) => {
  return (
    <div className="lg:w-[450px] w-full h-full overflow-y-auto pr-1 lg:pr-2 order-2 lg:order-1 custom-scrollbar-hidden">
      {/* Display Ticker Above the News */}
      {stockDetailsData && stockDetailsData.stock_detail && (
        <div className="bg-gray-0 p-4 rounded-sm mb-4">
          <div className="flex items-center p-2 mb-5 bg- text-green">
            <h1 className="text-xl font-bold">
              {stockDetailsData?.stock_detail?.stock_name}
            </h1>
            <span className="text-lg ">
              ({stockDetailsData?.stock_detail?.stock_ticker})
            </span>
          </div>

          {/* <div className="pb-6">
            <TradingViewWidget
              ticker={`${stockDetailsData?.stock_detail?.tv_exchange}:${stockDetailsData?.stock_detail?.tv_ticker}`}
            />
          </div>

          <div className="pb-6">
            <StockDetailChart2
              ticker={`${stockDetailsData?.stock_detail?.tv_exchange}:${stockDetailsData?.stock_detail?.tv_ticker}`}
            />
          </div>
          <div className="">
            <StockDetailsTechAnalysis
              ticker={`${stockDetailsData?.stock_detail?.tv_exchange}:${stockDetailsData?.stock_detail?.tv_ticker}`}
            />
          </div> */}
        </div>
      )}

      <div className="bg-gray-0 p-4 mb-4">
        <CommunitySidebarLatestNews />
      </div>
      <div className="bg-gray-0 p-4 mb-4">
        <DailyNewsletterAd />
      </div>
    </div>
  );
};

export default CommunityLeftSide;
