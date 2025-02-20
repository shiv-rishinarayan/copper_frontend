// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { FaSearch } from "react-icons/fa";
// import toast, { Toaster } from "react-hot-toast";

// const WatchlistContent = ({ userData }) => {
//   const router = useRouter();
//   const [followedStocks, setFollowedStocks] = useState([]);
//   const [loadingStates, setLoadingStates] = useState({});
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isCheckingStock, setIsCheckingStock] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

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
//       toast.success("Fetched followed stocks successfully!");
//     } catch (error) {
//       toast.error("Failed to fetch followed stocks.");
//       console.error("Error fetching followed stocks:", error);
//     }
//   };

//   const checkSubpageExists = async (stockTicker) => {
//     try {
//       const response = await axios.get(
//         `https://platinumdjango-production.up.railway.app/api/pgm-stock-detail/?stock_ticker=${stockTicker}`
//       );

//       if (response.data && Object.keys(response.data).length > 0) {
//         return true;
//       }
//       return false;
//     } catch (error) {
//       console.error("Error checking subpage existence:", error);
//       if (error.response && error.response.status === 404) {
//         return false;
//       }
//       throw error;
//     }
//   };

//   const handleRowClick = async (stockTicker) => {
//     try {
//       if (isCheckingStock) return;

//       setIsCheckingStock(true);
//       const cleanTicker = stockTicker.split(".")[0];
//       console.log("Checking ticker:", cleanTicker);

//       const exists = await checkSubpageExists(cleanTicker);
//       console.log("Stock details exist:", exists);

//       if (exists) {
//         router.push(`/stock-detail/${cleanTicker}`);
//       } else {
//         setErrorMessage(`Details for ${cleanTicker} are not available.`);
//         setIsModalOpen(true);
//       }
//     } catch (error) {
//       console.error("Error handling row click:", error);
//       setErrorMessage(
//         "An error occurred while checking stock details. Please try again later."
//       );
//       setIsModalOpen(true);
//     } finally {
//       setIsCheckingStock(false);
//     }
//   };

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
//       toast.success("Stock removed from watchlist!");
//     } catch (error) {
//       toast.error("Failed to remove stock.");
//       console.error("Error removing stock:", error);
//     } finally {
//       setLoadingStates((prev) => ({ ...prev, [stockId]: false }));
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setErrorMessage("");
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

//     if (numericValue >= 1_000_000_000) {
//       return `$${(numericValue / 1_000_000_000).toFixed(2)}B`;
//     } else if (numericValue >= 1_000_000) {
//       return `$${(numericValue / 1_000_000).toFixed(2)}M`;
//     } else if (numericValue >= 1_000) {
//       return `$${(numericValue / 1_000).toFixed(2)}K`;
//     } else {
//       return `$${numericValue.toFixed(2)}`;
//     }
//   };

//   const formatVolume = (value) => {
//     if (!value || value === "") return "N/A";
//     const cleanedValue = value.replace(/,/g, "").trim();
//     const numericValue = parseFloat(cleanedValue);
//     if (isNaN(numericValue)) return "N/A";

//     if (numericValue >= 1_000_000_000) {
//       return `${(numericValue / 1_000_000_000).toFixed(2)}B`;
//     } else if (numericValue >= 1_000_000) {
//       return `${(numericValue / 1_000_000).toFixed(2)}M`;
//     } else if (numericValue >= 1_000) {
//       return `${(numericValue / 1_000).toFixed(2)}K`;
//     } else {
//       return numericValue.toFixed(0);
//     }
//   };

//   // Filter stocks based on search query
//   const filteredStocks = followedStocks.filter((stock) => {
//     if (!searchQuery) return true;

//     const search = searchQuery.toLowerCase();
//     return (
//       stock.stock_details?.stock_type?.toLowerCase().includes(search) ||
//       stock.stock_details?.company_name?.toLowerCase().includes(search) ||
//       stock.stock_ticker?.toLowerCase().includes(search) ||
//       stock.stock_details?.exchange?.toLowerCase().includes(search)
//     );
//   });

//   return (
//     <div className="">
//       <Toaster position="top-right" reverseOrder={false} />
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 transition-colors"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white p-4 rounded shadow-md w-96"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2 className="text-lg font-bold mb-2">Error</h2>
//             <p className="text-sm mb-4">{errorMessage}</p>
//             <button
//               className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

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
//             {filteredStocks.length > 0 ? (
//               filteredStocks.map((stock) => (
//                 <tr
//                   key={stock.id}
//                   onClick={() =>
//                     !isCheckingStock && handleRowClick(stock.stock_ticker)
//                   }
//                   className={`hover:bg-accent/10 border-b border-date/10 text-[13px] ${
//                     isCheckingStock ? "cursor-wait" : "cursor-pointer"
//                   }`}
//                 >
//                   <td className="px-4 py-[12px]">
//                     {stock.stock_details?.stock_type || "N/A"}
//                   </td>
//                   <td className="px-4 py-[12px] whitespace-nowrap truncate">
//                     {stock.stock_details?.company_name || "N/A"}
//                   </td>
//                   <td className="px-4 py-[12px]">
//                     {stock.stock_ticker || "N/A"}
//                   </td>
//                   <td className="px-4 py-[12px]">
//                     {stock.stock_details?.exchange || "N/A"}
//                   </td>
//                   <td className="px-4 py-[12px]">
//                     {formatMarketCap(stock.stock_details?.market_cap) || "0.00"}
//                   </td>
//                   <td className="px-4 py-[12px]">
//                     {stock.stock_details?.last_price || "0.00"}
//                   </td>
//                   <td
//                     className={`px-4 py-[12px] ${getColorClass(
//                       stock.stock_details?.intraday_percentage
//                     )}`}
//                   >
//                     {stock.stock_details?.intraday_percentage != null
//                       ? `${stock.stock_details.intraday_percentage}%`
//                       : "0.00%"}
//                   </td>
//                   <td className="px-4 py-[12px]">
//                     {formatVolume(stock.stock_details?.volume) || "0"}
//                   </td>
//                   <td
//                     className={`px-4 py-[12px] ${getColorClass(
//                       stock.stock_details?.ytd_percentage
//                     )}`}
//                   >
//                     {stock.stock_details?.ytd_percentage != null
//                       ? `${stock.stock_details.ytd_percentage}%`
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
//                   {searchQuery
//                     ? "No matching stocks found in your watchlist."
//                     : "No stocks in your watchlist. Add stocks from the screener to get started."}
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
import toast, { Toaster } from "react-hot-toast";

const WatchlistContent = ({ userData, searchQuery }) => {
  const router = useRouter();
  const [followedStocks, setFollowedStocks] = useState([]);
  const [loadingStates, setLoadingStates] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isCheckingStock, setIsCheckingStock] = useState(false);

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

  const checkSubpageExists = async (stockTicker) => {
    try {
      const response = await axios.get(
        `https://platinumdjango-production.up.railway.app/api/pgm-stock-detail/?stock_ticker=${stockTicker}`
      );

      if (response.data && Object.keys(response.data).length > 0) {
        return true;
      }
      return false;
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

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage("");
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

  // Filter stocks based on search query
  const filteredStocks = followedStocks.filter((stock) => {
    if (!searchQuery) return true;

    const search = searchQuery.toLowerCase();
    return (
      stock.stock_details?.stock_type?.toLowerCase().includes(search) ||
      stock.stock_details?.company_name?.toLowerCase().includes(search) ||
      stock.stock_ticker?.toLowerCase().includes(search) ||
      stock.stock_details?.exchange?.toLowerCase().includes(search)
    );
  });

  return (
    <div className="">
      <Toaster position="top-right" reverseOrder={false} />
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
            {filteredStocks.length > 0 ? (
              filteredStocks.map((stock) => (
                <tr
                  key={stock.id}
                  onClick={() =>
                    !isCheckingStock && handleRowClick(stock.stock_ticker)
                  }
                  className={`hover:bg-accent/10 border-b border-date/10 text-[13px] ${
                    isCheckingStock ? "cursor-wait" : "cursor-pointer"
                  }`}
                >
                  <td className="px-4 py-[12px]">
                    {stock.stock_details?.stock_type || "N/A"}
                  </td>
                  <td className="px-4 py-[12px] whitespace-nowrap truncate">
                    {stock.stock_details?.company_name || "N/A"}
                  </td>
                  <td className="px-4 py-[12px]">
                    {stock.stock_ticker || "N/A"}
                  </td>
                  <td className="px-4 py-[12px]">
                    {stock.stock_details?.exchange || "N/A"}
                  </td>
                  <td className="px-4 py-[12px]">
                    {formatMarketCap(stock.stock_details?.market_cap) || "0.00"}
                  </td>
                  <td className="px-4 py-[12px]">
                    {stock.stock_details?.last_price || "0.00"}
                  </td>
                  <td
                    className={`px-4 py-[12px] ${getColorClass(
                      stock.stock_details?.intraday_percentage
                    )}`}
                  >
                    {stock.stock_details?.intraday_percentage != null
                      ? `${stock.stock_details.intraday_percentage}%`
                      : "0.00%"}
                  </td>
                  <td className="px-4 py-[12px]">
                    {formatVolume(stock.stock_details?.volume) || "0"}
                  </td>
                  <td
                    className={`px-4 py-[12px] ${getColorClass(
                      stock.stock_details?.ytd_percentage
                    )}`}
                  >
                    {stock.stock_details?.ytd_percentage != null
                      ? `${stock.stock_details.ytd_percentage}%`
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
                  {searchQuery
                    ? "No matching stocks found in your watchlist."
                    : "No stocks in your watchlist. Add stocks from the screener to get started."}
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
