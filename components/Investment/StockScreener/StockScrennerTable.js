// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";

// const StockScreenerTable = ({ displayedData, getColorClass }) => {
//   const router = useRouter();

//   const formatVolume = (volume) => {
//     if (!volume || volume === "") return "N/A";

//     // Remove any commas and convert to number
//     const numericVolume = Number(volume.replace(/,/g, ""));
//     if (isNaN(numericVolume)) return "N/A";

//     if (numericVolume >= 1_000_000_000) {
//       return `${(numericVolume / 1_000_000_000).toFixed(1)}B`;
//     } else if (numericVolume >= 1_000_000) {
//       return `${(numericVolume / 1_000_000).toFixed(1)}M`;
//     } else if (numericVolume >= 1_000) {
//       return `${(numericVolume / 1_000).toFixed(1)}K`;
//     }
//     return numericVolume.toString();
//   };

//   const handleRowClick = (ticker) => {
//     router.push(`/stock-details/${ticker}`);
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="w-full min-w-[600px] bg-white border rounded-md">
//         <thead className="font-bold border-b">
//           <tr>
//             {[
//               "STOCK TYPE",
//               "COMPANY NAME",
//               "TICKER",
//               "EXCHANGE",
//               "DOMICILED",
//               "MINE LOCATION",
//               "PRIMARY RESOURCE",
//               "MARKET CAP",
//               "LAST PRICE",
//               "INTRADAY %",
//               "VOLUME",
//               "YTD %",
//               "WEEK 52 LOW",
//               "WEEK 52 HIGH",
//             ].map((header) => (
//               <th
//                 key={header}
//                 className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider"
//               >
//                 {header}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="bg-bg text-lightgray">
//           {Array.isArray(displayedData) && displayedData.length > 0 ? (
//             displayedData.map((stock, index) => (
//               <tr
//                 key={index}
//                 onClick={() => handleRowClick(stock.ticker)}
//                 className="hover:bg-accent/10 border-b border-date/10 text-[13px] cursor-pointer"
//               >
//                 <td className="px-4 py-[12px]">{stock.stock_type}</td>
//                 <td className="px-4 py-[12px] whitespace-nowrap truncate">
//                   {stock.company_name}
//                 </td>
//                 <td className="px-4 py-[12px]">{stock.ticker}</td>
//                 <td className="px-4 py-[12px]">{stock.exchange}</td>
//                 <td className="px-4 py-[12px]">{stock.domiciled}</td>
//                 <td className="px-4 py-[12px]">{stock.mine_location}</td>
//                 <td className="px-4 py-[12px]">{stock.primary_resource}</td>
//                 <td className="px-4 py-[12px]">{stock.market_cap || "N/A"}</td>
//                 <td className="px-4 py-[12px]">{stock.last_price || "N/A"}</td>
//                 <td
//                   className={`px-4 py-[12px] ${getColorClass(
//                     stock.intraday_percentage ?? 0
//                   )}`}
//                 >
//                   {stock.intraday_percentage != null
//                     ? `${stock.intraday_percentage}%`
//                     : "0.00%"}
//                 </td>
//                 <td className="px-4 py-[12px]">{formatVolume(stock.volume)}</td>
//                 <td
//                   className={`px-4 py-[12px] ${getColorClass(
//                     stock.ytd_percentage ?? 0
//                   )}`}
//                 >
//                   {stock.ytd_percentage != null
//                     ? `${stock.ytd_percentage}%`
//                     : "0.00%"}
//                 </td>
//                 <td className="px-4 py-[12px]">{stock.week_52_low || "N/A"}</td>
//                 <td className="px-4 py-[12px]">
//                   {stock.week_52_high || "N/A"}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="14" className="text-center text-black/80 py-[12px]">
//                 No stocks available.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StockScreenerTable;
// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import { ArrowUp, ArrowDown } from "lucide-react";

// const StockScreenerTable = ({
//   displayedData,
//   getColorClass,
//   onSort,
//   sortColumn,
//   sortDirection,
// }) => {
//   const router = useRouter();

//   const formatVolume = (volume) => {
//     if (!volume || volume === "") return "N/A";

//     const numericVolume = Number(volume.replace(/,/g, ""));
//     if (isNaN(numericVolume)) return "N/A";

//     if (numericVolume >= 1_000_000_000) {
//       return `${(numericVolume / 1_000_000_000).toFixed(1)}B`;
//     } else if (numericVolume >= 1_000_000) {
//       return `${(numericVolume / 1_000_000).toFixed(1)}M`;
//     } else if (numericVolume >= 1_000) {
//       return `${(numericVolume / 1_000).toFixed(1)}K`;
//     }
//     return numericVolume.toString();
//   };

//   const handleRowClick = (ticker) => {
//     router.push(`/stock-details/${ticker}`);
//   };

//   const renderSortIcon = (column) => {
//     const isActive = sortColumn === column;
//     return (
//       <span
//         className={`ml-1 inline-block ${
//           isActive ? "text-blue-500" : "text-gray-400"
//         }`}
//       >
//         {sortDirection === "asc" ? (
//           <ArrowUp className="w-4 h-4" />
//         ) : (
//           <ArrowDown className="w-4 h-4" />
//         )}
//       </span>
//     );
//   };

//   const headers = [
//     { key: "stock_type", label: "STOCK TYPE", sortable: false },
//     { key: "company_name", label: "COMPANY NAME", sortable: false },
//     { key: "ticker", label: "TICKER", sortable: false },
//     { key: "exchange", label: "EXCHANGE", sortable: false },
//     { key: "domiciled", label: "DOMICILED", sortable: false },
//     { key: "mine_location", label: "MINE LOCATION", sortable: false },
//     { key: "primary_resource", label: "PRIMARY RESOURCE", sortable: false },
//     { key: "market_cap", label: "MARKET CAP", sortable: true },
//     { key: "last_price", label: "LAST PRICE", sortable: true },
//     { key: "intraday_percentage", label: "INTRADAY %", sortable: true },
//     { key: "volume", label: "VOLUME", sortable: true },
//     { key: "ytd_percentage", label: "YTD %", sortable: true },
//     { key: "week_52_low", label: "WEEK 52 LOW", sortable: true },
//     { key: "week_52_high", label: "WEEK 52 HIGH", sortable: true },
//   ];

//   return (
//     <div className="overflow-x-auto">
//       <table className="w-full min-w-[600px] bg-white border rounded-md">
//         <thead className="font-bold border-b">
//           <tr>
//             {headers.map((header) => (
//               <th
//                 key={header.key}
//                 className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider cursor-pointer"
//                 onClick={() => header.sortable && onSort(header.key)}
//               >
//                 <div className="flex items-center justify-between">
//                   <span>{header.label}</span>
//                   {header.sortable && renderSortIcon(header.key)}
//                 </div>
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="bg-bg text-lightgray">
//           {Array.isArray(displayedData) && displayedData.length > 0 ? (
//             displayedData.map((stock, index) => (
//               <tr
//                 key={index}
//                 onClick={() => handleRowClick(stock.ticker)}
//                 className="hover:bg-accent/10 border-b border-date/10 text-[13px] cursor-pointer"
//               >
//                 <td className="px-4 py-[12px]">{stock.stock_type}</td>
//                 <td className="px-4 py-[12px] whitespace-nowrap truncate">
//                   {stock.company_name}
//                 </td>
//                 <td className="px-4 py-[12px]">{stock.ticker}</td>
//                 <td className="px-4 py-[12px]">{stock.exchange}</td>
//                 <td className="px-4 py-[12px]">{stock.domiciled}</td>
//                 <td className="px-4 py-[12px]">{stock.mine_location}</td>
//                 <td className="px-4 py-[12px]">{stock.primary_resource}</td>
//                 <td className="px-4 py-[12px]">{stock.market_cap || "N/A"}</td>
//                 <td className="px-4 py-[12px]">{stock.last_price || "N/A"}</td>
//                 <td
//                   className={`px-4 py-[12px] ${getColorClass(
//                     stock.intraday_percentage ?? 0
//                   )}`}
//                 >
//                   {stock.intraday_percentage != null
//                     ? `${stock.intraday_percentage}%`
//                     : "0.00%"}
//                 </td>
//                 <td className="px-4 py-[12px]">{formatVolume(stock.volume)}</td>
//                 <td
//                   className={`px-4 py-[12px] ${getColorClass(
//                     stock.ytd_percentage ?? 0
//                   )}`}
//                 >
//                   {stock.ytd_percentage != null
//                     ? `${stock.ytd_percentage}%`
//                     : "0.00%"}
//                 </td>
//                 <td className="px-4 py-[12px]">{stock.week_52_low || "N/A"}</td>
//                 <td className="px-4 py-[12px]">
//                   {stock.week_52_high || "N/A"}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="14" className="text-center text-gray-300 py-[12px]">
//                 No data available.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StockScreenerTable;
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowUp, ArrowDown } from "lucide-react";

const StockScreenerTable = ({
  displayedData,
  getColorClass,
  onSort,
  sortColumn,
  sortDirection,
}) => {
  const router = useRouter();

  const formatMarketCap = (value) => {
    if (!value || value === "") return "N/A";

    // If the value already contains K, M, or B, just add the $ sign
    if (typeof value === "string" && /[KMB]$/i.test(value)) {
      return `${value}`;
    }

    // Otherwise, format the number
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

  const formatVolume = (value) => {
    if (!value || value === "") return "N/A";

    // Remove any commas, then trim whitespace
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
  const handleRowClick = (ticker) => {
    router.push(`/stock-details/${ticker}`);
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
    { key: "domiciled", label: "DOMICILED", sortable: false },
    { key: "mine_location", label: "MINE LOCATION", sortable: false },
    { key: "primary_resource", label: "PRIMARY RESOURCE", sortable: false },
    { key: "market_cap", label: "MARKET CAP", sortable: true },
    { key: "last_price", label: "LAST PRICE", sortable: true },
    { key: "intraday_percentage", label: "INTRADAY %", sortable: true },
    { key: "volume", label: "VOLUME", sortable: true },
    { key: "ytd_percentage", label: "YTD %", sortable: true },
    { key: "week_52_low", label: "WEEK 52 LOW", sortable: true },
    { key: "week_52_high", label: "WEEK 52 HIGH", sortable: true },
  ];

  return (
    <div className="overflow-x-auto custom-scrollbar-hidden">
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
                onClick={() => handleRowClick(stock.ticker)}
                className="hover:bg-accent/10 border-b border-date/10 text-[13px] cursor-pointer"
              >
                <td className="px-4 py-[12px]">{stock.stock_type}</td>
                <td className="px-4 py-[12px] whitespace-nowrap truncate">
                  {stock.company_name}
                </td>
                <td className="px-4 py-[12px]">{stock.ticker}</td>
                <td className="px-4 py-[12px]">{stock.exchange}</td>
                <td className="px-4 py-[12px]">{stock.domiciled}</td>
                <td className="px-4 py-[12px]">{stock.mine_location}</td>
                <td className="px-4 py-[12px]">{stock.primary_resource}</td>
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
                <td className="px-4 py-[12px]">{stock.week_52_low || "N/A"}</td>
                <td className="px-4 py-[12px]">
                  {stock.week_52_high || "N/A"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="14" className="text-center text-gray-300 py-[12px]">
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
