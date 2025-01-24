import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { GetUserData } from "@/src/utils/GetUserData";
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
  const userData = GetUserData();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Follow stock state
  const [isFollowed, setIsFollowed] = useState(false);
  const [followedStockId, setFollowedStockId] = useState(null);

  // API endpoints - adjust as needed
  const FOLLOWED_STOCKS_URL =
    "https://platinumdjango-production.up.railway.app/api/followed-stocks/";

  useEffect(() => {
    const fetchData = async () => {
      if (!ticker) return;

      try {
        setLoading(true);
        const response = await fetch(
          `https://platinumdjango-production.up.railway.app/api/pgm-stock-detail/?stock_ticker=${ticker}`
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

  // Check follow status
  // Check follow status
  useEffect(() => {
    const checkFollowStatus = async () => {
      try {
        const token = userData.access_token || localStorage.getItem("token");

        if (!token) {
          setIsFollowed(false);
          return;
        }

        const response = await axios.get(FOLLOWED_STOCKS_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const followedStock = response.data.find(
          (stock) => stock.stock_ticker === ticker
        );

        setIsFollowed(!!followedStock);
        if (followedStock) {
          setFollowedStockId(followedStock.id);
        }
      } catch (error) {
        console.error("Error checking follow status:", error);
        setIsFollowed(false);
        setFollowedStockId(null);
      }
    };

    if (ticker) {
      checkFollowStatus();
    }
  }, [ticker, userData]);

  // Handle follow/unfollow toggle
  // const handleFollowToggle = async () => {
  //   try {
  //     // Ensure user is authenticated
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       router.push("/auth/login");
  //       return;
  //     }

  //     if (isFollowed) {
  //       // Unfollow
  //       await axios.delete(`${FOLLOWED_STOCKS_URL}${followedStockId}/`, {
  //         headers: {
  //           Authorization: `Bearer ${userData.access_token}`,
  //         },
  //       });
  //       setIsFollowed(false);
  //       setFollowedStockId(null);
  //     } else {
  //       // Follow
  //       const response = await axios.post(
  //         FOLLOWED_STOCKS_URL,
  //         { stock_ticker: ticker },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${userData.access_token}`,
  //           },
  //         }
  //       );
  //       setIsFollowed(true);
  //       setFollowedStockId(response.data.id);
  //     }
  //   } catch (error) {
  //     if (error.response?.status === 401) {
  //       router.push("/auth/login");
  //     } else {
  //       console.error("Error toggling follow status:", error);
  //     }
  //   }
  // };

  const handleFollowToggle = async () => {
    try {
      // Use consistent token retrieval
      const token = userData.access_token || localStorage.getItem("token");

      if (!token) {
        router.push("/auth/login");
        return;
      }

      if (isFollowed) {
        // Unfollow
        await axios.delete(`${FOLLOWED_STOCKS_URL}${followedStockId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsFollowed(false);
        setFollowedStockId(null);
      } else {
        // Follow
        const response = await axios.post(
          FOLLOWED_STOCKS_URL,
          { stock_ticker: ticker },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsFollowed(true);
        setFollowedStockId(response.data.id);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        router.push("/auth/login");
      } else {
        console.error("Error toggling follow status:", error);
      }
    }
  };

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
            className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
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
              {data[0].stock_exchange} · {data[0].stock_country}
            </p>
            {/* <div className="flex items-center gap-x-4 border-b border-gray-200 pb-2">
              <h1 className="text-2xl font-semibold text-gray-800">
                {data[0].stock_name} ({data[0].stock_ticker})
              </h1>
            </div> */}
            <div className="flex items-center gap-x-4 border-b border-gray-200 pb-2">
              <h1 className="text-2xl font-semibold text-gray-800">
                {data[0].stock_name} ({data[0].stock_ticker})
              </h1>

              {/* Follow Button */}
              <button
                onClick={handleFollowToggle}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  isFollowed
                    ? "bg-accent hover:bg-accent/90 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >
                {isFollowed ? "Unfollow" : "Follow"}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center border-gray-200 pb-7 border-b">
            <TradingViewWidget
              ticker={`${data[0].tv_exchange}:${data[0].tv_ticker}`}
            />
          </div>

          <div className="-my-1">
            <StockDetailChart
              ticker={`${data[0].tv_exchange}:${data[0].tv_ticker}`}
            />
          </div>

          <div className="my-1">
            <StockDetailProfile
              ticker={`${data[0].tv_exchange}:${data[0].tv_ticker}`}
            />
          </div>

          <div className="my-1">
            <StockDetailFinancials
              ticker={`${data[0].tv_exchange}:${data[0].tv_ticker}`}
            />
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

          <StockDetailTechAnalysis
            ticker={`${data[0].tv_exchange}:${data[0].tv_ticker}`}
          />

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
