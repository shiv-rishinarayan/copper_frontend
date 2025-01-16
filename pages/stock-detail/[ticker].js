import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import StockDetailChart from "@/components/StockDetail/StockDetailChart";
import StockDetailFinancials from "@/components/StockDetail/StockDetailFinancials";
import StockDetailProfile from "@/components/StockDetail/StockDetailProfile";
import StockDetailTechAnalysis from "@/components/StockDetail/StockDetailTechAnalysis";
import StockDetailTopStories from "@/components/StockDetail/StockDetailTopStories";
import Navbar from "@/components/Navbar";
import DailyNewsletterAd from "@/components/Home/DailyNewsletterAd";
import StockDetailMostFollowed from "@/components/StockDetail/StockDetailMostFollowed";
import Loader from "@/components/Loader";
// TradingView Widget Component
const TradingViewWidget = ({ ticker }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
    script.innerHTML = JSON.stringify({
      symbol: ticker,
      width: "100%",
      height: 200,
      locale: "en",
      colorTheme: "light",
      isTransparent: false,
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [ticker]);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
};

const StockDetailPage = () => {
  const router = useRouter();
  const { ticker } = router.query;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!ticker) return;

      try {
        setLoading(true);
        const response = await fetch(
          `https://platinumdjango-production.up.railway.app/api/stock-metrics/${ticker}/`
        );
        if (!response.ok) {
          throw new Error("Stock data not found");
        }
        const result = await response.json();
        setData(result);
        setError(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [ticker]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div>
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Stock Not Found
            </h2>
            <p className="text-gray-600">
              We couldn't find any data for the stock ticker "{ticker}"
            </p>
          </div>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-between px-2 md:px-12 my-10 pb-20 mt-24">
        <div className="w-full md:w-[75%] flex flex-col gap-y-8 border border-gray-200 rounded-md p-6">
          <div className="flex flex-col gap-y-2">
            <p className="text-xs text-gray-500">
              {data.stock_type} · {data.domiciled}
            </p>
            <div className="flex items-center gap-x-4 border-b border-gray-200 pb-2">
              <h1 className="text-2xl font-semibold text-gray-800">
                {data.company_name} ({data.ticker})
              </h1>
            </div>
          </div>

          <div className="flex justify-between items-center border-gray-200 pb-7 border-b">
            <TradingViewWidget ticker={data.ticker} />
          </div>

          <div className="-my-1">
            <StockDetailChart ticker={data.ticker} />
          </div>

          <div className="my-1">
            <StockDetailProfile ticker={data.ticker} />
          </div>

          <div className="my-1">
            <StockDetailFinancials ticker={data.ticker} />
          </div>

          <div className="my-3">
            {/* {data.insider_transactions?.length > 0 && (
              <StockDetailInsiderTransaction data={data.insider_transactions} />
            )} */}
          </div>

          <div className="my-3">
            {/* <StockDetailNewsVideoSec data={data} /> */}
          </div>
        </div>

        <div className="w-full md:w-[23%] flex flex-col gap-y-8">
          <div className="-mt-4">{<DailyNewsletterAd />}</div>

          <StockDetailTechAnalysis ticker={`${data.exchange}:${data.ticker}`} />

          {/* <StockDetailSidebarVideo data={data} /> */}

          <div className="p-2 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-800 border-b pb-2 mb-6">
              Most Followed Stocks
            </h2>
            <StockDetailMostFollowed />
          </div>

          <StockDetailTopStories />
        </div>
      </div>
    </div>
  );
};

export default StockDetailPage;
