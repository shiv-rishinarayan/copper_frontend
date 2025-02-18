// const MostFollowed = () => {
//   const stockData = [
//     {
//       ticker: "GVXXF",
//       name: "GoviEx Uranium Inc",
//       current_price: 0.04,
//       intraday_percentage: 15.15,
//     },
//     {
//       ticker: "GLATF",
//       name: "Global Atomic Corporation",
//       current_price: 0.6,
//       intraday_percentage: 11.52,
//     },
//     {
//       ticker: "BOE.AX",
//       name: "Boss Energy Limited",
//       current_price: 2.36,
//       intraday_percentage: 3.51,
//     },
//     {
//       ticker: "URG",
//       name: "Ur-Energy Incorporated",
//       current_price: 1.15,
//       intraday_percentage: 1.77,
//     },
//     {
//       ticker: "CCJ",
//       name: "Cameco Corporation",
//       current_price: 52.77,
//       intraday_percentage: 0.63,
//     },
//     {
//       ticker: "UUUU",
//       name: "Energy Fuels Incorporated",
//       current_price: 5.38,
//       intraday_percentage: 0.56,
//     },
//     {
//       ticker: "YCA.L",
//       name: "Yellow Cake plc",
//       current_price: 488.8,
//       intraday_percentage: 0.08,
//     },
//     {
//       ticker: "PALAF",
//       name: "Paladin Energy Limited",
//       current_price: 5.0,
//       intraday_percentage: 0.0,
//     },
//     {
//       ticker: "EU",
//       name: "enCore Energy Corporation",
//       current_price: 3.32,
//       intraday_percentage: -0.15,
//     },
//     {
//       ticker: "NXE",
//       name: "NexGen Energy Limited",
//       current_price: 6.96,
//       intraday_percentage: -0.29,
//     },
//   ];

//   return (
//     <div className="w-full">
//       <table className="w-full text-left text-sm font-sans">
//         <thead>
//           <tr>
//             <th className="pb-2 text-xs font-medium text-black1/60">COMPANY</th>
//             <th className="pb-2 text-xs font-medium text-black1/60 text-right">
//               PRICE
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {stockData
//             .sort((a, b) => b.intraday_percentage - a.intraday_percentage) // Sort by intraday percentage
//             .map((stock) => (
//               <tr
//                 key={stock.ticker}
//                 className="border-b border-gray-200 cursor-pointer hover:bg-gray-100"
//               >
//                 <td className="py-2">
//                   <div>
//                     <strong className="text-accent">{stock.ticker}</strong>
//                   </div>
//                   <div className="text-gray-500">{stock.name || "N/A"}</div>
//                 </td>
//                 <td className="py-2 text-right">
//                   <div>${stock.current_price.toFixed(2)}</div>
//                   <div
//                     className={`${
//                       stock.intraday_percentage < 0
//                         ? "text-red-600"
//                         : "text-green-500"
//                     }`}
//                   >
//                     {stock.intraday_percentage.toFixed(2)}%
//                   </div>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//       {/* View More Link */}
//       <div className="mt-4 text-left">
//         <a
//           href="/investments"
//           className="inline-flex items-center text-sm font-bold text-accent hover:underline"
//         >
//           View More
//           <span className="ml-1">&gt;</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default MostFollowed;

// import { useEffect, useState } from "react";
// import { MOST_FOLLOWED } from "@/src/api/platinumAPI";

// const MostFollowed = () => {
//   const [stockData, setStockData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(MOST_FOLLOWED);
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setStockData(data.slice(0, 12)); // Limit to 10-12 stocks
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="w-full">
//       {loading && <p className="text-center text-gray-500">Loading...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}
//       {!loading && !error && (
//         <table className="w-full text-left text-sm font-sans">
//           <thead>
//             <tr>
//               <th className="pb-2 text-xs font-medium text-black1/60">
//                 COMPANY
//               </th>
//               <th className="pb-2 text-xs font-medium text-black1/60 text-right">
//                 PRICE
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {stockData
//               .sort(
//                 (a, b) =>
//                   (b.intraday_percentage || 0) - (a.intraday_percentage || 0)
//               ) // Sort by intraday percentage
//               .map((stock) => (
//                 <tr
//                   key={stock.id || stock.ticker || Math.random()}
//                   className="border-b border-gray-200 cursor-pointer hover:bg-gray-100"
//                 >
//                   <td className="py-2">
//                     <div>
//                       <strong className="text-accent">
//                         {stock.ticker || "N/A"}
//                       </strong>
//                     </div>
//                     <div className="text-gray-500">{stock.name || "N/A"}</div>
//                   </td>
//                   <td className="py-2 text-right">
//                     <div>${(stock.current_price ?? 0).toFixed(2)}</div>
//                     <div
//                       className={`${
//                         (stock.intraday_percentage ?? 0) < 0
//                           ? "text-red-600"
//                           : "text-green-500"
//                       }`}
//                     >
//                       {(stock.intraday_percentage ?? 0).toFixed(2)}%
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       )}
//       {/* View More Link */}
//       <div className="mt-4 text-left">
//         <a
//           href="/investments"
//           className="inline-flex items-center text-sm font-bold text-accent hover:underline"
//         >
//           View More
//           <span className="ml-1">&gt;</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default MostFollowed;

import { useEffect, useState } from "react";
import { MOST_FOLLOWED, PGM_STOCK_DETAIL } from "@/src/api/platinumAPI";
import { useRouter } from "next/navigation";
import axios from "axios";

const MostFollowed = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MOST_FOLLOWED);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setStockData(data.slice(0, 12)); // Limit to 10-12 stocks
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const checkSubpageExists = async (stockTicker) => {
    try {
      const response = await axios.get(
        `${PGM_STOCK_DETAIL}?stock_ticker=${stockTicker}`
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

  return (
    <div className="w-full">
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

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && (
        <table className="w-full text-left text-sm font-sans">
          <thead>
            <tr>
              <th className="pb-2 text-xs font-medium text-black1/60">
                COMPANY
              </th>
              <th className="pb-2 text-xs font-medium text-black1/60 text-right">
                PRICE
              </th>
            </tr>
          </thead>
          <tbody>
            {stockData
              .sort(
                (a, b) =>
                  (b.intraday_percentage || 0) - (a.intraday_percentage || 0)
              ) // Sort by intraday percentage
              .map((stock) => (
                <tr
                  key={stock.id || stock.ticker || Math.random()}
                  className="border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleStockClick(stock.ticker?.split(".")[0])}
                >
                  <td className="py-2">
                    <div>
                      <strong className="text-accent">
                        {stock.ticker || "N/A"}
                      </strong>
                    </div>
                    <div className="text-gray-500">{stock.name || "N/A"}</div>
                  </td>
                  <td className="py-2 text-right">
                    <div>${(stock.current_price ?? 0).toFixed(2)}</div>
                    <div
                      className={`${
                        (stock.intraday_percentage ?? 0) < 0
                          ? "text-red-600"
                          : "text-green-500"
                      }`}
                    >
                      {(stock.intraday_percentage ?? 0).toFixed(2)}%
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      {/* View More Link */}
      <div className="mt-4 text-left">
        <a
          href="/investments"
          className="inline-flex items-center text-sm font-bold text-accent hover:underline"
        >
          View More
          <span className="ml-1">&gt;</span>
        </a>
      </div>
    </div>
  );
};

export default MostFollowed;
