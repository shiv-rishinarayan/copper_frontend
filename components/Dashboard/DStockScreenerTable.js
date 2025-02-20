import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowUp, ArrowDown } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FOLLOWED_STOCKS } from "@/src/api/platinumAPI";
import { PGM_STOCK_DETAIL } from "@/src/api/platinumAPI";

const StockScreenerTable = ({
  displayedData,
  onSort,
  sortColumn,
  sortDirection,
  userData,
}) => {
  const router = useRouter();
  const [followedStocks, setFollowedStocks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loadingStates, setLoadingStates] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCheckingStock, setIsCheckingStock] = useState(false);

  useEffect(() => {
    if (userData?.access_token) {
      fetchFollowedStocks();
    }
  }, [userData]);

  const fetchFollowedStocks = async () => {
    if (!userData?.access_token) return;

    try {
      const response = await axios.get(FOLLOWED_STOCKS, {
        headers: {
          Authorization: `Bearer ${userData.access_token}`,
        },
        withCredentials: true,
      });
      setFollowedStocks(
        response.data.map((stock) => ({
          ticker: stock.stock_ticker,
          id: stock.id,
        }))
      );
    } catch (error) {
      console.error("Error fetching followed stocks:", error);
    }
  };
  // const fetchFollowedStocks = async () => {
  //   if (!userData?.access_token) {
  //     // If no access token, simply return without doing anything
  //     return;
  //   }

  //   try {
  //     const response = await axios.get(FOLLOWED_STOCKS, {
  //       headers: {
  //         Authorization: `Bearer ${userData.access_token}`,
  //       },
  //       withCredentials: true,
  //     });
  //     setFollowedStocks(
  //       response.data.map((stock) => ({
  //         ticker: stock.stock_ticker,
  //         id: stock.id,
  //       }))
  //     );
  //   } catch (error) {
  //     console.error("Error fetching followed stocks:", error);
  //   }
  // };
  const checkSubpageExists = async (stockTicker) => {
    try {
      const response = await axios.get(
        `${PGM_STOCK_DETAIL}?stock_ticker=${stockTicker}`
      );
      return response.data && Object.keys(response.data).length > 0;
    } catch (error) {
      console.error("Error checking subpage existence:", error);
      if (error.response && error.response.status === 404) {
        return false;
      }
      throw error;
    }
  };

  const handleRowClick = async (stockTicker) => {
    try {
      if (isCheckingStock) return;

      setIsCheckingStock(true);
      const cleanTicker = stockTicker.split(".")[0];
      console.log("Checking ticker:", cleanTicker);

      const exists = await checkSubpageExists(cleanTicker);
      console.log("Stock details exist:", exists);

      if (exists) {
        router.push(`/stock-detail/${cleanTicker}`);
      } else {
        setErrorMessage(`Details for ${cleanTicker} are not available.`);
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Error handling row click:", error);
      setErrorMessage(
        "An error occurred while checking stock details. Please try again later."
      );
      setIsModalOpen(true);
    } finally {
      setIsCheckingStock(false);
    }
  };

  const handleFollowClick = async (e, ticker) => {
    e.stopPropagation();

    if (!userData?.access_token) {
      router.push("/auth/login");
      return;
    }

    setLoadingStates((prev) => ({ ...prev, [ticker]: true }));

    try {
      const isFollowed = followedStocks.some(
        (stock) => stock.ticker === ticker
      );

      if (isFollowed) {
        const stockToUnfollow = followedStocks.find(
          (stock) => stock.ticker === ticker
        );
        await axios.delete(`${FOLLOWED_STOCKS}${stockToUnfollow.id}/`, {
          headers: {
            Authorization: `Bearer ${userData.access_token}`,
          },
          withCredentials: true,
        });
        setFollowedStocks((prev) =>
          prev.filter((stock) => stock.ticker !== ticker)
        );
        toast.success(`Unfollowed ${ticker}`);
      } else {
        const response = await axios.post(
          FOLLOWED_STOCKS,
          { stock_ticker: ticker },
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${userData.access_token}`,
            },
            withCredentials: true,
          }
        );
        setFollowedStocks((prev) => [
          ...prev,
          { ticker: ticker, id: response.data.id },
        ]);
        toast.success(`Followed ${ticker}`);
      }
    } catch (error) {
      console.error("Error following/unfollowing stock:", error);
      if (userData?.access_token) {
        toast.error(
          `Failed to ${
            followedStocks.some((fs) => fs.ticker === ticker)
              ? "unfollow"
              : "follow"
          } ${ticker}`
        );
      }
    } finally {
      setLoadingStates((prev) => ({ ...prev, [ticker]: false }));
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage("");
  };

  const formatMarketCap = (value) => {
    if (!value || value === "") return "N/A";

    if (typeof value === "string" && /[KMB]$/i.test(value)) {
      return `${value}`;
    }

    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) return "N/A";

    let formattedValue;
    if (numericValue >= 1_000_000_000) {
      formattedValue = `$${(numericValue / 1_000_000_000).toFixed(2)}B`;
    } else if (numericValue >= 1_000_000) {
      formattedValue = `$${(numericValue / 1_000_000).toFixed(2)}M`;
    } else if (numericValue >= 1_000) {
      formattedValue = `$${(numericValue / 1_000).toFixed(2)}K`;
    } else {
      formattedValue = `$${numericValue.toFixed(2)}`;
    }

    return formattedValue;
  };

  const getColorClass = (value) => {
    const num = parseFloat(value);
    return isNaN(num) ? "" : num < 0 ? "text-red-500" : "text-green-500";
  };

  const formatVolume = (value) => {
    if (!value || value === "") return "N/A";

    const cleanedValue = value.replace(/,/g, "").trim();
    const numericValue = parseFloat(cleanedValue);

    if (isNaN(numericValue)) return "N/A";

    let formattedValue;
    if (numericValue >= 1_000_000_000) {
      formattedValue = `${(numericValue / 1_000_000_000).toFixed(2)}B`;
    } else if (numericValue >= 1_000_000) {
      formattedValue = `${(numericValue / 1_000_000).toFixed(2)}M`;
    } else if (numericValue >= 1_000) {
      formattedValue = `${(numericValue / 1_000).toFixed(2)}K`;
    } else {
      formattedValue = numericValue.toFixed(0);
    }

    return formattedValue;
  };

  const renderSortIcon = (column) => {
    const isActive = sortColumn === column;
    return (
      <span
        className={`ml-1 inline-block ${
          isActive ? "text-accent" : "text-gray-400"
        }`}
      >
        {sortDirection === "asc" ? (
          <ArrowUp className="w-4 h-4" />
        ) : (
          <ArrowDown className="w-4 h-4" />
        )}
      </span>
    );
  };

  const headers = [
    { key: "stock_type", label: "STOCK TYPE", sortable: false },
    { key: "company_name", label: "COMPANY NAME", sortable: false },
    { key: "ticker", label: "TICKER", sortable: false },
    { key: "exchange", label: "EXCHANGE", sortable: false },
    // { key: "domiciled", label: "DOMICILED", sortable: false },
    // { key: "mine_location", label: "MINE LOCATION", sortable: false },
    // { key: "primary_resource", label: "PRIMARY RESOURCE", sortable: false },
    { key: "market_cap", label: "MARKET CAP", sortable: true },
    { key: "last_price", label: "LAST PRICE", sortable: true },
    { key: "intraday_percentage", label: "INTRADAY %", sortable: true },
    { key: "volume", label: "VOLUME", sortable: true },
    { key: "ytd_percentage", label: "YTD %", sortable: true },
    // { key: "week_52_low", label: "WEEK 52 LOW", sortable: true },
    // { key: "week_52_high", label: "WEEK 52 HIGH", sortable: true },
    { key: "follow", label: "ACTIONS", sortable: false },
  ];

  return (
    <div className="overflow-x-auto custom-scrollbar-hidden relative">
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 transition-colors"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded shadow-md w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-2">Error</h2>
            <p className="text-sm mb-4">{errorMessage}</p>
            <button
              className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <table className="w-full min-w-[600px] bg-white border rounded-md">
        <thead className="font-bold border-b">
          <tr>
            {headers.map((header) => (
              <th
                key={header.key}
                className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider cursor-pointer"
                onClick={() => header.sortable && onSort(header.key)}
              >
                <div className="flex items-center justify-between">
                  <span>{header.label}</span>
                  {header.sortable && renderSortIcon(header.key)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-bg text-lightgray">
          {Array.isArray(displayedData) && displayedData.length > 0 ? (
            displayedData.map((stock, index) => (
              <tr
                key={index}
                onClick={() => !isCheckingStock && handleRowClick(stock.ticker)}
                className={`hover:bg-accent/10 border-b border-date/10 text-[13px] ${
                  isCheckingStock ? "cursor-wait" : "cursor-pointer"
                }`}
              >
                <td className="px-4 py-[12px]">{stock.stock_type}</td>
                <td className="px-4 py-[12px] whitespace-nowrap truncate">
                  {stock.company_name}
                </td>
                <td className="px-4 py-[12px]">{stock.ticker}</td>
                <td className="px-4 py-[12px]">{stock.exchange}</td>
                {/* <td className="px-4 py-[12px]">{stock.domiciled}</td> */}
                {/* <td className="px-4 py-[12px]">{stock.mine_location}</td> */}
                {/* <td className="px-4 py-[12px]">{stock.primary_resource}</td> */}
                <td className="px-4 py-[12px]">
                  {formatMarketCap(stock.market_cap)}
                </td>
                <td className="px-4 py-[12px]">{stock.last_price || "N/A"}</td>
                <td
                  className={`px-4 py-[12px] ${getColorClass(
                    stock.intraday_percentage ?? 0
                  )}`}
                >
                  {stock.intraday_percentage != null
                    ? `${stock.intraday_percentage}%`
                    : "0.00%"}
                </td>
                <td className="px-4 py-[12px]">{formatVolume(stock.volume)}</td>
                <td
                  className={`px-4 py-[12px] ${getColorClass(
                    stock.ytd_percentage ?? 0
                  )}`}
                >
                  {stock.ytd_percentage != null
                    ? `${stock.ytd_percentage}%`
                    : "0.00%"}
                </td>
                {/* <td className="px-4 py-[12px]">{stock.week_52_low || "N/A"}</td> */}
                {/* <td className="px-4 py-[12px]">
                  {stock.week_52_high || "N/A"}
                </td> */}
                <td className="px-4 py-[12px]">
                  <button
                    onClick={(e) => handleFollowClick(e, stock.ticker)}
                    className={`px-3 py-2 text-xs rounded ${
                      followedStocks.some((fs) => fs.ticker === stock.ticker)
                        ? "bg-accent text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    disabled={loadingStates[stock.ticker]}
                  >
                    {loadingStates[stock.ticker]
                      ? "Loading..."
                      : followedStocks.some((fs) => fs.ticker === stock.ticker)
                      ? "Unfollow"
                      : "Follow"}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="15" className="text-center text-gray-300 py-[12px]">
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StockScreenerTable;
