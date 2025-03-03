import React from "react";
import TradingViewWidget from "./CommunityleftSideTradingVeiwWidget";
import CommunitySidebarLatestNews from "../Community/CommunitySidebarLatestNews";
import DailyNewsletterAd from "../Home/DailyNewsletterAd";
import StockDetailChart2 from "../StockDetail/StockDetailChart";
import StockDetailsTechAnalysis from "../StockDetail/StockDetailTechAnalysis";
import StockDetailMostFollowed from "../StockDetail/StockDetailMostFollowed";
import CommunityLeftSideMostFollowed from "./CommunityLeftSideMostFollowed";
import { useForumPosts } from "../../context/ForumPostsContext";

const CommunityLeftSide = ({
  stockDetailsData,
  setSearchQuery,
}) => {
  // First check if stockDetailsData exists and is an array
  const stockData =
    Array.isArray(stockDetailsData) && stockDetailsData.length > 0
      ? stockDetailsData[0]
      : null;

  // Validate the required data is present
  const hasStockData =
    stockData && stockData.tv_exchange && stockData.tv_ticker;

  return (
    <div className="lg:w-[450px] w-full h-full overflow-y-auto pr-1 lg:pr-2 order-2 lg:order-1 custom-scrollbar-hidden">
      {/* Only render stock section if we have data */}
      {stockData && (
        <div className="bg-gray-0 p-4 rounded-sm mb-4">
          <div className="flex items-center gap-2 p-2 mb-5">
            <h1 className="text-xl font-bold">
              {stockData.stock_name || "Stock Name Not Available"}
            </h1>
            {stockData.stock_ticker && (
              <span className="text-lg">({stockData.stock_ticker})</span>
            )}
          </div>

          {/* Only render TradingViewWidget if we have required props */}
          {hasStockData && (
            <div className="">
              <div className="pb-6">
                <TradingViewWidget
                  ticker={`${stockData.tv_exchange}:${stockData.tv_ticker}`}
                />
              </div>
              <div className="pb-6">
                {" "}
                <StockDetailChart2
                  ticker={`${stockData.tv_exchange}:${stockData.tv_ticker}`}
                />
              </div>
              <div className="pb-6">
                <StockDetailsTechAnalysis
                  ticker={`${stockData.tv_exchange}:${stockData.tv_ticker}`}
                />
              </div>
            </div>
          )}
        </div>
      )}

      <div className="bg-gray-0 p-4 mb-4">
        {/* <CommunitySidebarLatestNews /> */}
        {/* <StockDetailMostFollowed /> */}
        <CommunityLeftSideMostFollowed
          setSearchQuery={setSearchQuery}
        />
      </div>

      <div className="bg-gray-0 p-4 mb-4">
        <DailyNewsletterAd />
      </div>
    </div>
  );
};

export default CommunityLeftSide;
