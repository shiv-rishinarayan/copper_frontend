import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MOST_FOLLOWED, COPPER_STOCK_DETAIL } from "@/src/api/copperAPI";
import axios from "axios";

const MostFollowedStocksTable = () => {
  const [stocksData, setStocksData] = useState({
    most_watched: [],
    north_american_leaders: [],
    global_market_leaders: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchMostFollowedStocks = async () => {
      try {
        setLoading(true);
        console.log("Fetching most followed stocks from:", MOST_FOLLOWED);

        const response = await fetch(MOST_FOLLOWED);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Most followed stocks data:", result);

        if (result.success && result.data) {
          setStocksData(result.data);
        } else {
          // Use fallback data if database is empty
          setStocksData(getFallbackData());
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching most followed stocks:", err);
        setError(err.message);
        // Use fallback data on error
        setStocksData(getFallbackData());
        setLoading(false);
      }
    };

    fetchMostFollowedStocks();

    // Refresh every 5 minutes
    const interval = setInterval(fetchMostFollowedStocks, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getFallbackData = () => ({
    most_watched: [
      {
        id: "1",
        ticker: "FCX",
        name: "Freeport-McMoRan",
        current_price: 45.67,
        intraday_percentage: 2.34,
      },
      {
        id: "2",
        ticker: "SCCO",
        name: "Southern Copper Corporation",
        current_price: 89.12,
        intraday_percentage: -1.23,
      },
      {
        id: "3",
        ticker: "BHP",
        name: "BHP Group",
        current_price: 67.89,
        intraday_percentage: 0.87,
      },
      {
        id: "4",
        ticker: "RIO",
        name: "Rio Tinto",
        current_price: 78.45,
        intraday_percentage: 1.56,
      },
      {
        id: "5",
        ticker: "ANTO",
        name: "Antofagasta",
        current_price: 23.67,
        intraday_percentage: -0.45,
      },
      {
        id: "6",
        ticker: "TECK",
        name: "Teck Resources",
        current_price: 56.78,
        intraday_percentage: 3.21,
      },
      {
        id: "7",
        ticker: "IVN",
        name: "Ivanhoe Mines",
        current_price: 12.34,
        intraday_percentage: 4.56,
      },
      {
        id: "8",
        ticker: "LUN",
        name: "Lundin Mining",
        current_price: 8.9,
        intraday_percentage: -2.1,
      },
      {
        id: "9",
        ticker: "FM",
        name: "First Quantum Minerals",
        current_price: 34.56,
        intraday_percentage: 1.78,
      },
      {
        id: "10",
        ticker: "COPX",
        name: "Global X Copper Miners ETF",
        current_price: 45.23,
        intraday_percentage: 0.98,
      },
    ],
    north_american_leaders: [
      {
        id: "11",
        ticker: "CS",
        name: "Capstone Copper",
        current_price: 7.89,
        intraday_percentage: 2.45,
      },
      {
        id: "12",
        ticker: "ERO",
        name: "Ero Copper",
        current_price: 23.45,
        intraday_percentage: -1.67,
      },
      {
        id: "13",
        ticker: "HBM",
        name: "Hudbay Minerals",
        current_price: 9.87,
        intraday_percentage: 3.21,
      },
      {
        id: "14",
        ticker: "TKO",
        name: "Taseko Mines",
        current_price: 2.34,
        intraday_percentage: -0.89,
      },
      {
        id: "15",
        ticker: "ASCU",
        name: "Arizona Sonoran Copper",
        current_price: 1.56,
        intraday_percentage: 5.67,
      },
      {
        id: "16",
        ticker: "WRN",
        name: "Western Copper and Gold",
        current_price: 3.45,
        intraday_percentage: 1.23,
      },
      {
        id: "17",
        ticker: "IE",
        name: "Ivanhoe Electric",
        current_price: 8.76,
        intraday_percentage: -2.34,
      },
      {
        id: "18",
        ticker: "SLS",
        name: "Solaris Resources",
        current_price: 4.32,
        intraday_percentage: 2.78,
      },
      {
        id: "19",
        ticker: "NGEX",
        name: "NGEx Minerals",
        current_price: 6.54,
        intraday_percentage: 0.45,
      },
      {
        id: "20",
        ticker: "FOM",
        name: "Foran Mining",
        current_price: 2.87,
        intraday_percentage: 1.89,
      },
    ],
    global_market_leaders: [
      {
        id: "21",
        ticker: "ZIJMF",
        name: "Zijin Mining Group",
        current_price: 12.45,
        intraday_percentage: 1.67,
      },
      {
        id: "22",
        ticker: "JIXAY",
        name: "Jiangxi Copper",
        current_price: 34.56,
        intraday_percentage: -0.78,
      },
      {
        id: "23",
        ticker: "MMG",
        name: "MMG Limited",
        current_price: 5.67,
        intraday_percentage: 2.34,
      },
      {
        id: "24",
        ticker: "CMCL",
        name: "CMOC Group",
        current_price: 8.9,
        intraday_percentage: -1.45,
      },
      {
        id: "25",
        ticker: "MARI",
        name: "Marimaca Copper",
        current_price: 3.21,
        intraday_percentage: 3.67,
      },
      {
        id: "26",
        ticker: "NCX",
        name: "NorthIsle Copper and Gold",
        current_price: 1.23,
        intraday_percentage: 0.89,
      },
      {
        id: "27",
        ticker: "PERU",
        name: "Chakana Copper",
        current_price: 0.87,
        intraday_percentage: -2.1,
      },
      {
        id: "28",
        ticker: "WCU",
        name: "World Copper",
        current_price: 0.45,
        intraday_percentage: 4.56,
      },
      {
        id: "29",
        ticker: "INFI",
        name: "Infinitum Copper",
        current_price: 0.23,
        intraday_percentage: 1.78,
      },
      {
        id: "30",
        ticker: "COPP",
        name: "Horizons Copper Producers Index ETF",
        current_price: 23.45,
        intraday_percentage: 0.67,
      },
    ],
  });

  const checkSubpageExists = async (stockTicker) => {
    try {
      const response = await axios.get(
        `${COPPER_STOCK_DETAIL}?stock_ticker=${stockTicker}`,
      );
      return response.data.exists ?? true;
    } catch (error) {
      console.error("Error checking subpage existence:", error);
      return false;
    }
  };

  const handleStockClick = async (stockTicker) => {
    setErrorMessage("");
    const exists = await checkSubpageExists(stockTicker);

    if (exists) {
      router.push(`/stock-detail/${stockTicker}`);
    } else {
      setErrorMessage(`Details for ${stockTicker} are not available.`);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage("");
  };

  const formatPrice = (price) => {
    if (price === null || price === undefined || isNaN(price)) {
      return "0.00";
    }
    return `$${parseFloat(price).toFixed(2)}`;
  };

  const formatPercentage = (percentage) => {
    if (percentage === null || percentage === undefined || isNaN(percentage)) {
      return "0.00%";
    }
    const value = parseFloat(percentage);
    return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
  };

  const getPercentageColor = (percentage) => {
    const value = parseFloat(percentage);
    if (value > 0) return "text-green-600";
    if (value < 0) return "text-red-600";
    return "text-gray-600";
  };

  const renderStockRow = (stock, index) => (
    <div
      key={stock.id || `${stock.ticker}-${index}`}
      className="flex justify-between items-center py-2 px-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b border-gray-100 last:border-b-0"
      onClick={() => handleStockClick(stock.ticker?.split(".")[0])}
    >
      <div className="flex-1">
        <div className="font-semibold text-sm text-accent">{stock.ticker}</div>
        <div className="text-xs text-gray-600 mt-0.5">{stock.name}</div>
      </div>
      <div className="text-right">
        <div className="text-sm font-medium text-gray-900">
          {formatPrice(stock.current_price)}
        </div>
        <div
          className={`text-xs ${getPercentageColor(stock.intraday_percentage)}`}
        >
          {formatPercentage(stock.intraday_percentage)}
        </div>
      </div>
    </div>
  );

  const renderColumn = (stocks, title, subtitle) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Column Header */}
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <h3 className="text-sm font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-xs text-gray-600">{subtitle}</p>
        <div className="w-8 h-0.5 bg-accent mt-2"></div>
      </div>

      {/* Table Headers */}
      <div className="px-4 py-2 bg-gray-25 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            COMPANY
          </span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            PRICE
          </span>
        </div>
      </div>

      {/* Stock Rows */}
      <div className="bg-white max-h-96 overflow-y-auto">
        {stocks.length > 0 ? (
          stocks.map((stock, index) => renderStockRow(stock, index))
        ) : (
          <div className="px-4 py-8 text-center text-gray-500 text-sm">
            No stocks available
          </div>
        )}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="w-full px-3 md:px-10 lg:px-12 py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
            <span className="ml-3 text-gray-600">Loading stock data...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-3 md:px-10 lg:px-12 py-6 bg-gray-50">
      {/* Modal for error messages */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 transition-colors"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-xl w-96 max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-4 text-gray-800">
              Stock Not Available
            </h2>
            <p className="text-sm mb-6 text-gray-600">{errorMessage}</p>
            <button
              className="w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-accent/90 transition-colors"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="w-full mx-auto">
        {/* Three Column Layout - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {renderColumn(
            stocksData.most_watched,
            "Most Watched Copper Stocks - Live Performance",
            "Live Performance",
          )}
          {renderColumn(
            stocksData.north_american_leaders,
            "North American Copper Leaders - Market Performance",
            "Market Performance",
          )}
          {renderColumn(
            stocksData.global_market_leaders,
            "Global Copper Market Leaders - Live Tracking",
            "Live Tracking",
          )}
        </div>
      </div>
    </div>
  );
};

export default MostFollowedStocksTable;
