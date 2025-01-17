// import React from "react";

// const WatchlistContent = () => {
//   return (
//     <div className="p-4 lg:p-6">
//       <h2 className="text-xl font-bold mb-4 lg:mb-6 text-gray-800">
//         Stock Watch List
//       </h2>
//       <div className="bg-white rounded-md shadow-lg p-4 lg:p-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
//           {["AAPL", "GOOGL", "TSLA"].map((stock) => (
//             <div
//               key={stock}
//               className="bg-gray-50 p-4 lg:p-6 rounded-md hover:shadow-md transition-shadow"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="font-bold text-medium">{stock}</h3>
//                 <span className="text-green-500 font-medium">+2.4%</span>
//               </div>
//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Price</span>
//                   <span className="font-medium">$156.78</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Volume</span>
//                   <span className="font-medium">1.2M</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WatchlistContent;

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { X } from "lucide-react";

// const WatchlistContent = ({ userData }) => {
//   const router = useRouter();
//   const [followedStocks, setFollowedStocks] = useState([]);
//   const [loadingStates, setLoadingStates] = useState({});

//   const BASE_API_URL =
//     "https://platinumdjango-production.up.railway.app/api/followed-stocks/";

//   useEffect(() => {
//     fetchFollowedStocks();
//   }, []);

//   const fetchFollowedStocks = async () => {
//     try {
//       const response = await axios.get(BASE_API_URL, {
//         headers: {
//           Authorization: `Bearer ${userData.access_token}`,
//         },
//         withCredentials: true,
//       });
//       setFollowedStocks(response.data);
//     } catch (error) {
//       console.error("Error fetching followed stocks:", error);
//     }
//   };

//   console.log(followedStocks);
//   const handleRemoveStock = async (stockId) => {
//     setLoadingStates((prev) => ({ ...prev, [stockId]: true }));
//     try {
//       await axios.delete(`${BASE_API_URL}${stockId}/`, {
//         headers: {
//           Authorization: `Bearer ${userData.access_token}`,
//         },
//         withCredentials: true,
//       });
//       setFollowedStocks((prev) => prev.filter((stock) => stock.id !== stockId));
//     } catch (error) {
//       console.error("Error removing stock:", error);
//     } finally {
//       setLoadingStates((prev) => ({ ...prev, [stockId]: false }));
//     }
//   };

//   const handleRowClick = (ticker) => {
//     router.push(`/stock-details/${ticker}`);
//   };

//   const getColorClass = (value) => {
//     if (!value || isNaN(value)) return "";
//     return parseFloat(value) >= 0 ? "text-green-500" : "text-red-500";
//   };

//   const formatMarketCap = (value) => {
//     if (!value || value === "") return "N/A";

//     if (typeof value === "string" && /[KMB]$/i.test(value)) {
//       return `${value}`;
//     }

//     const numericValue = parseFloat(value);
//     if (isNaN(numericValue)) return "N/A";

//     let formattedValue;
//     if (numericValue >= 1_000_000_000) {
//       formattedValue = `$${(numericValue / 1_000_000_000).toFixed(2)}B`;
//     } else if (numericValue >= 1_000_000) {
//       formattedValue = `$${(numericValue / 1_000_000).toFixed(2)}M`;
//     } else if (numericValue >= 1_000) {
//       formattedValue = `$${(numericValue / 1_000).toFixed(2)}K`;
//     } else {
//       formattedValue = `$${numericValue.toFixed(2)}`;
//     }

//     return formattedValue;
//   };

//   const formatVolume = (value) => {
//     if (!value || value === "") return "N/A";

//     const cleanedValue = value.replace(/,/g, "").trim();
//     const numericValue = parseFloat(cleanedValue);

//     if (isNaN(numericValue)) return "N/A";

//     let formattedValue;
//     if (numericValue >= 1_000_000_000) {
//       formattedValue = `${(numericValue / 1_000_000_000).toFixed(2)}B`;
//     } else if (numericValue >= 1_000_000) {
//       formattedValue = `${(numericValue / 1_000_000).toFixed(2)}M`;
//     } else if (numericValue >= 1_000) {
//       formattedValue = `${(numericValue / 1_000).toFixed(2)}K`;
//     } else {
//       formattedValue = numericValue.toFixed(0);
//     }

//     return formattedValue;
//   };

//   return (
//     <div className="p-4 lg:p-6">
//       <h2 className="text-xl font-bold mb-4 lg:mb-6 text-gray-800">
//         Stock Watch List
//       </h2>
//       <div className="overflow-x-auto custom-scrollbar-hidden">
//         <table className="w-full min-w-[600px] bg-white border rounded-md">
//           <thead className="font-bold border-b">
//             <tr>
//               <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
//                 STOCK TYPE
//               </th>
//               <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
//                 COMPANY NAME
//               </th>
//               <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
//                 TICKER
//               </th>
//               <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
//                 EXCHANGE
//               </th>
//               <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
//                 MARKET CAP
//               </th>
//               <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
//                 LAST PRICE
//               </th>
//               <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
//                 INTRADAY %
//               </th>
//               <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
//                 VOLUME
//               </th>
//               <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
//                 YTD %
//               </th>
//               <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
//                 ACTION
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-bg text-lightgray">
//             {followedStocks.length > 0 ? (
//               followedStocks.map((stock) => (
//                 <tr
//                   key={stock.id}
//                   onClick={() => handleRowClick(stock.stock_ticker)}
//                   className="hover:bg-accent/10 border-b border-date/10 text-[13px] cursor-pointer"
//                 >
//                   <td className="px-4 py-[12px]">
//                     {stock.stock_details.stock_type}
//                   </td>
//                   <td className="px-4 py-[12px] whitespace-nowrap truncate">
//                     {stock.stock_details.company_name}
//                   </td>
//                   <td className="px-4 py-[12px]">{stock.stock_ticker}</td>
//                   <td className="px-4 py-[12px]">
//                     {stock.stock_details.exchange}
//                   </td>
//                   <td className="px-4 py-[12px]">
//                     {formatMarketCap(stock.stock_details.market_cap)}
//                   </td>
//                   <td className="px-4 py-[12px]">
//                     {stock.stock_details.last_price || "N/A"}
//                   </td>
//                   <td
//                     className={`px-4 py-[12px] ${getColorClass(
//                       stock.stock_details.intraday_percentage
//                     )}`}
//                   >
//                     {stock.stock_details.intraday_percentage != null
//                       ? `${stock.stock_details.intraday_percentage}%`
//                       : "0.00%"}
//                   </td>
//                   <td className="px-4 py-[12px]">
//                     {formatVolume(stock.stock_details.volume)}
//                   </td>
//                   <td
//                     className={`px-4 py-[12px] ${getColorClass(
//                       stock.stock_details.ytd_percentage
//                     )}`}
//                   >
//                     {stock.stock_details.ytd_percentage != null
//                       ? `${stock.ytd_percentage}%`
//                       : "0.00%"}
//                   </td>
//                   <td className="px-4 py-[12px]">
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleRemoveStock(stock.id);
//                       }}
//                       className="px-3 py-2 text-xs rounded bg-red-500 text-white hover:bg-red-600 disabled:bg-gray-300"
//                       disabled={loadingStates[stock.id]}
//                     >
//                       {loadingStates[stock.id] ? "Removing..." : "Remove"}
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan="10"
//                   className="text-center py-[12px] text-gray-400"
//                 >
//                   No stocks in your watchlist. Add stocks from the screener to
//                   get started.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default WatchlistContent;

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const WatchlistContent = ({ userData }) => {
  const router = useRouter();
  const [followedStocks, setFollowedStocks] = useState([]);
  const [loadingStates, setLoadingStates] = useState({});

  const BASE_API_URL =
    "https://platinumdjango-production.up.railway.app/api/followed-stocks/";

  useEffect(() => {
    fetchFollowedStocks();
  }, []);

  const fetchFollowedStocks = async () => {
    try {
      const response = await axios.get(BASE_API_URL, {
        headers: {
          Authorization: `Bearer ${userData.access_token}`,
        },
        withCredentials: true,
      });
      setFollowedStocks(response.data);
      toast.success("Fetched followed stocks successfully!");
    } catch (error) {
      toast.error("Failed to fetch followed stocks.");
      console.error("Error fetching followed stocks:", error);
    }
  };

  const handleRemoveStock = async (stockId) => {
    setLoadingStates((prev) => ({ ...prev, [stockId]: true }));
    try {
      await axios.delete(`${BASE_API_URL}${stockId}/`, {
        headers: {
          Authorization: `Bearer ${userData.access_token}`,
        },
        withCredentials: true,
      });
      setFollowedStocks((prev) => prev.filter((stock) => stock.id !== stockId));
      toast.success("Stock removed from watchlist!");
    } catch (error) {
      toast.error("Failed to remove stock.");
      console.error("Error removing stock:", error);
    } finally {
      setLoadingStates((prev) => ({ ...prev, [stockId]: false }));
    }
  };

  const handleRowClick = (ticker) => {
    router.push(`/stock-details/${ticker}`);
  };

  const getColorClass = (value) => {
    if (!value || isNaN(value)) return "";
    return parseFloat(value) >= 0 ? "text-green-500" : "text-red-500";
  };

  const formatMarketCap = (value) => {
    if (!value || value === "") return "N/A";
    if (typeof value === "string" && /[KMB]$/i.test(value)) {
      return `${value}`;
    }
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) return "N/A";

    if (numericValue >= 1_000_000_000) {
      return `$${(numericValue / 1_000_000_000).toFixed(2)}B`;
    } else if (numericValue >= 1_000_000) {
      return `$${(numericValue / 1_000_000).toFixed(2)}M`;
    } else if (numericValue >= 1_000) {
      return `$${(numericValue / 1_000).toFixed(2)}K`;
    } else {
      return `$${numericValue.toFixed(2)}`;
    }
  };

  const formatVolume = (value) => {
    if (!value || value === "") return "N/A";
    const cleanedValue = value.replace(/,/g, "").trim();
    const numericValue = parseFloat(cleanedValue);
    if (isNaN(numericValue)) return "N/A";

    if (numericValue >= 1_000_000_000) {
      return `${(numericValue / 1_000_000_000).toFixed(2)}B`;
    } else if (numericValue >= 1_000_000) {
      return `${(numericValue / 1_000_000).toFixed(2)}M`;
    } else if (numericValue >= 1_000) {
      return `${(numericValue / 1_000).toFixed(2)}K`;
    } else {
      return numericValue.toFixed(0);
    }
  };

  return (
    <div className="p-4 lg:p-6">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-xl font-bold mb-4 lg:mb-6 text-gray-800">
        Stock Watch List
      </h2>
      <div className="overflow-x-auto custom-scrollbar-hidden">
        <table className="w-full min-w-[600px] bg-white border rounded-md">
          <thead className="font-bold border-b">
            <tr>
              <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
                STOCK TYPE
              </th>
              <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
                COMPANY NAME
              </th>
              <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
                TICKER
              </th>
              <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
                EXCHANGE
              </th>
              <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
                MARKET CAP
              </th>
              <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
                LAST PRICE
              </th>
              <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
                INTRADAY %
              </th>
              <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
                VOLUME
              </th>
              <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
                YTD %
              </th>
              <th className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody className="bg-bg text-lightgray">
            {followedStocks.length > 0 ? (
              followedStocks.map((stock) => (
                <tr
                  key={stock.id}
                  onClick={() => handleRowClick(stock.stock_ticker)}
                  className="hover:bg-accent/10 border-b border-date/10 text-[13px] cursor-pointer"
                >
                  <td className="px-4 py-[12px]">
                    {stock.stock_details.stock_type}
                  </td>
                  <td className="px-4 py-[12px] whitespace-nowrap truncate">
                    {stock.stock_details.company_name}
                  </td>
                  <td className="px-4 py-[12px]">{stock.stock_ticker}</td>
                  <td className="px-4 py-[12px]">
                    {stock.stock_details.exchange}
                  </td>
                  <td className="px-4 py-[12px]">
                    {formatMarketCap(stock.stock_details.market_cap)}
                  </td>
                  <td className="px-4 py-[12px]">
                    {stock.stock_details.last_price || "N/A"}
                  </td>
                  <td
                    className={`px-4 py-[12px] ${getColorClass(
                      stock.stock_details.intraday_percentage
                    )}`}
                  >
                    {stock.stock_details.intraday_percentage != null
                      ? `${stock.stock_details.intraday_percentage}%`
                      : "0.00%"}
                  </td>
                  <td className="px-4 py-[12px]">
                    {formatVolume(stock.stock_details.volume)}
                  </td>
                  <td
                    className={`px-4 py-[12px] ${getColorClass(
                      stock.stock_details.ytd_percentage
                    )}`}
                  >
                    {stock.stock_details.ytd_percentage != null
                      ? `${stock.ytd_percentage}%`
                      : "0.00%"}
                  </td>
                  <td className="px-4 py-[12px]">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveStock(stock.id);
                      }}
                      className="px-3 py-2 text-xs rounded bg-red-500 text-white hover:bg-red-600 disabled:bg-gray-300"
                      disabled={loadingStates[stock.id]}
                    >
                      {loadingStates[stock.id] ? "Removing..." : "Remove"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="10"
                  className="text-center py-[12px] text-gray-400"
                >
                  No stocks in your watchlist. Add stocks from the screener to
                  get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WatchlistContent;
