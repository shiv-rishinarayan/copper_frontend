// import React, { useState, useEffect } from "react";

// const HomePGMPrice = () => {
//   const [pgmPrices, setPgmPrices] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPrices = async () => {
//       try {
//         const response = await fetch(
//           "https://platinumdjango-production.up.railway.app/api/pgm-prices/"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setPgmPrices(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };
//     fetchPrices();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="">
//       <table className="table-auto w-full border-collapse border border-gray-800">
//         <thead>
//           <tr className="bg-gray-700 text-white">
//             <th className="border border-gray-800 px-4 py-2">Metal</th>
//             <th className="border border-gray-800 px-4 py-2">Price (USD)</th>
//             <th className="border border-gray-800 px-4 py-2">Change</th>
//             <th className="border border-gray-800 px-4 py-2">% Change</th>
//             <th className="border border-gray-800 px-4 py-2">24k (per gram)</th>
//             <th className="border border-gray-800 px-4 py-2">22k (per gram)</th>
//             <th className="border border-gray-800 px-4 py-2">21k (per gram)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* Platinum */}
//           {pgmPrices.platinum_price && (
//             <tr className="bg-gray-100">
//               <td className="border border-gray-800 px-4 py-2">Platinum</td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.platinum_price.price}
//               </td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.platinum_price.price_change}
//               </td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.platinum_price.price_change_percent.toFixed(2)}%
//               </td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.platinum_price.price_gram_24k}
//               </td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.platinum_price.price_gram_22k}
//               </td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.platinum_price.price_gram_21k}
//               </td>
//             </tr>
//           )}

//           {/* Palladium */}
//           {pgmPrices.palladium_price && (
//             <tr className="bg-gray-200">
//               <td className="border border-gray-800 px-4 py-2">Palladium</td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.palladium_price.price}
//               </td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.palladium_price.price_change}
//               </td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.palladium_price.price_change_percent.toFixed(2)}%
//               </td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.palladium_price.price_gram_24k}
//               </td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.palladium_price.price_gram_22k}
//               </td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.palladium_price.price_gram_21k}
//               </td>
//             </tr>
//           )}

//           {/* Ruthenium */}
//           {pgmPrices.ruthenium_price && (
//             <tr className="bg-gray-100">
//               <td className="border border-gray-800 px-4 py-2">Ruthenium</td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.ruthenium_price.price}
//               </td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.ruthenium_price.price_change}
//               </td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.ruthenium_price.price_change_percent}%
//               </td>
//               <td className="border border-gray-800 px-4 py-2" colSpan="3">
//                 N/A
//               </td>
//             </tr>
//           )}

//           {/* Iridium */}
//           {pgmPrices.iridium_price && (
//             <tr className="bg-gray-200">
//               <td className="border border-gray-800 px-4 py-2">Iridium</td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.iridium_price.price}
//               </td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.iridium_price.price_change}
//               </td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.iridium_price.price_change_percent}%
//               </td>
//               <td className="border border-gray-800 px-4 py-2" colSpan="3">
//                 N/A
//               </td>
//             </tr>
//           )}

//           {/* Rhodium */}
//           {pgmPrices.rhodium_price && (
//             <tr className="bg-gray-100">
//               <td className="border border-gray-800 px-4 py-2">Rhodium</td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.rhodium_price.price}
//               </td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.rhodium_price.price_change}
//               </td>
//               <td className="border border-gray-800 px-4 py-2">
//                 {pgmPrices.rhodium_price.price_change_percent}%
//               </td>
//               <td className="border border-gray-800 px-4 py-2" colSpan="3">
//                 N/A
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HomePGMPrice;
// import React, { useState, useEffect } from "react";

// const HomePGMPrice = () => {
//   const [pgmPrices, setPgmPrices] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPrices = async () => {
//       try {
//         const response = await fetch(
//           "https://platinumdjango-production.up.railway.app/api/pgm-prices/"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setPgmPrices(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPrices();
//   }, []);

//   if (loading) {
//     return <div className="text-center py-4">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-4 text-red-500">Error: {error}</div>;
//   }

//   const formatValue = (value) => {
//     if (typeof value === "string") {
//       value = parseFloat(value);
//     }
//     return typeof value === "number" ? value.toFixed(2) : "0.00";
//   };

//   const getChangeClass = (value) => {
//     if (value > 0) return "text-green-500"; // Green for positive values
//     if (value < 0) return "text-red-500"; // Red for negative values
//     return "text-black"; // Default color if 0
//   };

//   const renderRow = (metal, data) => (
//     <tr className="text-sm hover:bg-accent/10">
//       <td className="border-t px-4 py-2 font-sm">{metal}</td>

//       <td className="border-t px-4 py-3">{formatValue(data.price || 0)}</td>
//       <td className={`border-t px-4 py-3 ${getChangeClass(data.price_change)}`}>
//         {formatValue(data.price_change || 0)}
//       </td>
//       <td
//         className={`border-t px-4 py-3 ${getChangeClass(
//           data.price_change_percent
//         )}`}
//       >
//         {formatValue(data.price_change_percent || 0)}%
//       </td>
//       <td className="border-t px-4 py-3">
//         {formatValue(data.prev_close_price || 0)}
//       </td>
//       <td className="border-t px-4 py-3">
//         {formatValue(data.open_price || 0)}
//       </td>
//       <td className="border-t px-4 py-3">{formatValue(data.low_price || 0)}</td>
//       <td className="border-t px-4 py-3">
//         {formatValue(data.high_price || 0)}
//       </td>
//       <td className="border-t px-4 py-3">{formatValue(data.ask || 0)}</td>
//       <td className="border-t px-4 py-3">{formatValue(data.bid || 0)}</td>
//       <td className="border-t px-4 py-3">
//         {formatValue(data.price_gram_24k || 0)}
//       </td>
//       <td className="border-t px-4 py-3">
//         {formatValue(data.price_gram_22k || 0)}
//       </td>
//       <td className="border-t px-4 py-3">
//         {formatValue(data.price_gram_21k || 0)}
//       </td>
//       <td className="border-t px-4 py-3">
//         {formatValue(data.price_gram_20k || 0)}
//       </td>
//       <td className="border-t px-4 py-3">
//         {formatValue(data.price_gram_18k || 0)}
//       </td>
//       <td className="border-t px-4 py-3">
//         {formatValue(data.price_gram_16k || 0)}
//       </td>
//       <td className="border-t px-4 py-3">
//         {formatValue(data.price_gram_14k || 0)}
//       </td>
//       <td className="border-t px-4 py-3">
//         {formatValue(data.price_gram_10k || 0)}
//       </td>

//       <td className="border-t px-4 py-3">{data.metal || "-"}</td>
//       <td className="border-t px-4 py-3">{data.currency || "-"}</td>
//       <td className="border-t px-4 py-3">{data.exchange || "-"}</td>
//       <td className="border-t px-4 py-3">{data.symbol || "-"}</td>
//     </tr>
//   );

//   return (
//     <div className="overflow-x-auto custom-scrollbar-hidden">
//       <table className="table-auto w-full border-collapse text-sm">
//         <thead>
//           <tr className=" text-black/60">
//             <th className="border-t px-4 py-2">Metal</th>

//             <th className="border-t px-4 py-2">Price (USD)</th>
//             <th className="border-t px-4 py-2">Change</th>
//             <th className="border-t px-4 py-2">% Change</th>
//             <th className="border-t px-4 py-2">Prev Close</th>
//             <th className="border-t px-4 py-2">Open</th>
//             <th className="border-t px-4 py-2">Low</th>
//             <th className="border-t px-4 py-2">High</th>
//             <th className="border-t px-4 py-2">Ask</th>
//             <th className="border-t px-4 py-2">Bid</th>
//             <th className="border-t px-4 py-2">24k (g)</th>
//             <th className="border-t px-4 py-2">22k (g)</th>
//             <th className="border-t px-4 py-2">21k (g)</th>
//             <th className="border-t px-4 py-2">20k (g)</th>
//             <th className="border-t px-4 py-2">18k (g)</th>
//             <th className="border-t px-4 py-2">16k (g)</th>
//             <th className="border-t px-4 py-2">14k (g)</th>
//             <th className="border-t px-4 py-2">10k (g)</th>

//             <th className="border-t px-4 py-2">Metal Type</th>
//             <th className="border-t px-4 py-2">Currency</th>
//             <th className="border-t px-4 py-2">Exchange</th>
//             <th className="border-t px-4 py-2">Symbol</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pgmPrices?.platinum_price &&
//             renderRow("Platinum", pgmPrices.platinum_price)}
//           {pgmPrices?.palladium_price &&
//             renderRow("Palladium", pgmPrices.palladium_price)}
//           {pgmPrices?.ruthenium_price &&
//             renderRow("Ruthenium", pgmPrices.ruthenium_price)}
//           {pgmPrices?.iridium_price &&
//             renderRow("Iridium", pgmPrices.iridium_price)}
//           {pgmPrices?.rhodium_price &&
//             renderRow("Rhodium", pgmPrices.rhodium_price)}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HomePGMPrice;

// import React, { useState, useEffect } from "react";
// // import { FiExternalLink } from "react-icons/fi";
// import { FaLink } from "react-icons/fa6";

// const HomePGMPrice = () => {
//   const [pgmPrices, setPgmPrices] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPrices = async () => {
//       try {
//         const response = await fetch(
//           "https://platinumdjango-production.up.railway.app/api/pgm-prices/"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setPgmPrices(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPrices();
//   }, []);

//   if (loading) {
//     return <div className="text-center py-4">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-4 text-red-500">Error: {error}</div>;
//   }

//   const formatValue = (value) => {
//     if (typeof value === "string") {
//       value = parseFloat(value);
//     }
//     return typeof value === "number" ? value.toFixed(2) : "0.00";
//   };

//   const getChangeClass = (value) => {
//     if (value > 0) return "text-green-500"; // Green for positive values
//     if (value < 0) return "text-red-500"; // Red for negative values
//     return "text-black"; // Default color if 0
//   };

//   const renderRow = (metal, data, source) => (
//     <tr className="text-sm hover:bg-accent/10" key={metal}>
//       <td className="border-t px-4 py-2 font-sm">{metal}</td>
//       <td className="border-t px-4 py-3">{formatValue(data.price || 0)}</td>
//       <td className={`border-t px-4 py-3 ${getChangeClass(data.price_change)}`}>
//         {formatValue(data.price_change || 0)}
//       </td>
//       <td
//         className={`border-t px-4 py-3 ${getChangeClass(
//           data.price_change_percent
//         )}`}
//       >
//         {formatValue(data.price_change_percent || 0)}%
//       </td>
//       <td className="border-t px-4 py-3 text-center">
//         <a
//           href={source}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-black/70 hover:text-black/60"
//         >
//           <FaLink size={18} />
//         </a>
//       </td>
//     </tr>
//   );

//   return (
//     <div className="overflow-x-auto custom-scrollbar-hidden">
//       <table className="table-auto w-full border-collapse text-sm">
//         <thead className="text-left">
//           <tr className="text-black/60">
//             <th className="border-t px-4 py-2">Metal</th>
//             <th className="border-t px-4 py-2">Price (USD)</th>
//             <th className="border-t px-4 py-2">Change</th>
//             <th className="border-t px-4 py-2">% Change</th>
//             <th className="border-t px-4 py-2">Source</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pgmPrices?.platinum_price &&
//             renderRow(
//               "Platinum",
//               pgmPrices.platinum_price,
//               "https://www.goldapi.io/api/"
//             )}
//           {pgmPrices?.palladium_price &&
//             renderRow(
//               "Palladium",
//               pgmPrices.palladium_price,
//               "https://www.goldapi.io/api/"
//             )}
//           {pgmPrices?.ruthenium_price &&
//             renderRow(
//               "Ruthenium",
//               pgmPrices.ruthenium_price,
//               "https://www.heraeus-precious-metals.com/en/precious-metal-prices-reports/precious-metal-charts"
//             )}
//           {pgmPrices?.iridium_price &&
//             renderRow(
//               "Iridium",
//               pgmPrices.iridium_price,
//               "https://www.heraeus-precious-metals.com/en/precious-metal-prices-reports/precious-metal-charts"
//             )}
//           {pgmPrices?.rhodium_price &&
//             renderRow(
//               "Rhodium",
//               pgmPrices.rhodium_price,
//               "https://www.heraeus-precious-metals.com/en/precious-metal-prices-reports/precious-metal-charts"
//             )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HomePGMPrice;
import React, { useState, useEffect } from "react";
import { FaLink } from "react-icons/fa6";

const HomePGMPrice = () => {
  const [pgmPrices, setPgmPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          "https://platinumdjango-production.up.railway.app/api/pgm-prices/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        // Sort data to ensure Platinum and Palladium come first
        const sortedData = data.sort((a, b) => {
          if (a.pgm_name === "Platinum") return -1;
          if (b.pgm_name === "Platinum") return 1;
          if (a.pgm_name === "Palladium") return -1;
          if (b.pgm_name === "Palladium") return 1;
          return 0;
        });
        setPgmPrices(sortedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPrices();
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;
  }

  const formatValue = (value) => {
    // Handle null, undefined, or invalid values by returning "0.00"
    if (value === null || value === undefined || isNaN(value)) {
      return "0.00";
    }
    // Ensure the value is a number and format it to two decimal places
    return parseFloat(value).toFixed(2);
  };

  const getChangeClass = (value) => {
    if (value > 0) return "text-green-500"; // Green for positive values
    if (value < 0) return "text-red-500"; // Red for negative values
    return "text-black"; // Default color if 0
  };

  const renderRow = (metalData) => (
    <tr className="text-sm hover:bg-accent/10" key={metalData.pgm_name}>
      <td className="border-t px-4 py-2 font-sm">{metalData.pgm_name}</td>
      <td className="border-t px-4 py-3">${formatValue(metalData.price)}</td>
      <td
        className={`border-t px-4 py-3 ${getChangeClass(
          parseFloat(metalData.price_change)
        )}`}
      >
        {/* Display Change with proper sign */}
        {metalData.price_change > 0
          ? `$+${formatValue(metalData.price_change)}`
          : metalData.price_change < 0
          ? `$-${formatValue(Math.abs(metalData.price_change))}`
          : `$0.00`}
      </td>
      <td
        className={`border-t px-4 py-3 ${getChangeClass(
          parseFloat(metalData.price_change_percent)
        )}`}
      >
        {formatValue(metalData.price_change_percent)}%
      </td>
      <td className="border-t px-4 py-3 text-center">
        <a
          href={
            metalData.pgm_name === "Platinum" ||
            metalData.pgm_name === "Palladium"
              ? "https://www.goldapi.io/api/"
              : "https://www.heraeus-precious-metals.com/en/precious-metal-prices-reports/precious-metal-charts"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="text-black/70 hover:text-black/60"
        >
          <FaLink size={18} />
        </a>
      </td>
    </tr>
  );

  return (
    <div className="overflow-x-auto custom-scrollbar-hidden">
      <table className="table-auto w-full border-collapse text-sm">
        <thead className="text-left">
          <tr className="text-black/60">
            <th className="border-t px-4 py-2">Metal</th>
            <th className="border-t px-4 py-2">Price (USD)</th>
            <th className="border-t px-4 py-2">Change</th>
            <th className="border-t px-4 py-2">% Change</th>
            <th className="border-t px-4 py-2">Source</th>
          </tr>
        </thead>
        <tbody>{pgmPrices.map((metalData) => renderRow(metalData))}</tbody>
      </table>
    </div>
  );
};

export default HomePGMPrice;
