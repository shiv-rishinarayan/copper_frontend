// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// const MostFollowed = () => {
//   const [stocks, setStocks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchStocks = async () => {
//       try {
//         const response = await axios.get(
//           "https://platinumdjango-production.up.railway.app/api/most-followed-stocks/"
//         );
//         setStocks(response.data);
//       } catch (error) {
//         console.error("Error fetching most followed stocks:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStocks();
//   }, []);

//   const checkSubpageExists = async (stockTicker) => {
//     try {
//       const response = await axios.get(
//         `https://platinumdjango-production.up.railway.app/api/pgm-stock-detail/?stock_ticker=${stockTicker}`
//       );
//       return response.data.exists ?? true; // Default to true if `exists` is not defined
//     } catch (error) {
//       console.error("Error checking stock details page existence:", error);
//       return false;
//     }
//   };

//   const handleStockClick = async (stockTicker) => {
//     setErrorMessage("");
//     const exists = await checkSubpageExists(stockTicker);

//     if (exists) {
//       window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
//       router.push(`/stock-detail/${stockTicker}`);
//     } else {
//       setErrorMessage(`Details for ${stockTicker} are not available.`);
//       setIsModalOpen(true);
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setErrorMessage("");
//   };

//   if (loading) {
//     return <div>Loading Most Followed Stocks...</div>;
//   }

//   return (
//     <div>
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white p-4 rounded shadow-md w-96"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2 className="text-lg font-bold mb-2">Error</h2>
//             <p className="text-sm mb-4">{errorMessage}</p>
//             <button
//               className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       <div>
//         {stocks.slice(0, 11).map((stock) => (
//           <div
//             key={stock.id}
//             className="flex items-center justify-between border-b py-1 cursor-pointer hover:bg-gray-100"
//             onClick={() => handleStockClick(stock.ticker)}
//           >
//             <div className="flex flex-col text-xs">
//               <span className="font-bold">{stock.ticker || "N/A"}</span>
//               <span className="text-xs text-gray-400">
//                 {stock.name || "N/A"}
//               </span>
//             </div>

//             <div className="text-right">
//               <span className="block font-bold text-xs">
//                 $
//                 {stock.current_price !== null
//                   ? stock.current_price.toFixed(2)
//                   : "0.0"}
//               </span>
//               <span
//                 className={`block text-xs ${
//                   stock.intraday_percentage >= 0
//                     ? "text-green-500"
//                     : "text-red-500"
//                 }`}
//               >
//                 {stock.intraday_percentage !== null
//                   ? `${stock.intraday_percentage.toFixed(2)}%`
//                   : "0.00%"}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MostFollowed;

"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const MostFollowed = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(
          "https://platinumdjango-production.up.railway.app/api/most-followed-stocks/"
        );
        setStocks(response.data);
      } catch (error) {
        console.error("Error fetching most followed stocks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  const checkSubpageExists = async (stockTicker) => {
    try {
      const response = await axios.get(
        `https://platinumdjango-production.up.railway.app/api/pgm-stock-detail/?stock_ticker=${stockTicker}`
      );
      return response.data.exists ?? true;
    } catch (error) {
      console.error("Error checking stock details page existence:", error);
      return false;
    }
  };

  const handleStockClick = async (stockTicker) => {
    setErrorMessage("");
    const exists = await checkSubpageExists(stockTicker);

    if (exists) {
      window.scrollTo({ top: 0, behavior: "smooth" });
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

  if (loading) {
    return (
      <div className="text-center text-lg font-medium">
        Loading Most Followed Stocks...
      </div>
    );
  }

  return (
    <div className="">
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-3">Error</h2>
            <p className="text-base mb-4">{errorMessage}</p>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <h1 className="text-lg font-bold mb-4">Most Followed Stocks</h1>
      <div>
        {stocks.slice(0, 11).map((stock) => (
          <div
            key={stock.id}
            className="flex items-center justify-between border-b py-1 cursor-pointer hover:bg-secondary/10 transition-colors"
            onClick={() => handleStockClick(stock.ticker)}
          >
            <div className="flex flex-col text-sm">
              <span className="font-semibold">{stock.ticker || "N/A"}</span>
              <span className="text-sm text-gray-500">
                {stock.name || "N/A"}
              </span>
            </div>

            <div className="text-right">
              <span className="block font-semibold text-sm">
                $
                {stock.current_price !== null
                  ? stock.current_price.toFixed(2)
                  : "0.00"}
              </span>
              <span
                className={`block text-sm ${
                  stock.intraday_percentage >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {stock.intraday_percentage !== null
                  ? `${stock.intraday_percentage.toFixed(2)}%`
                  : "0.00%"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostFollowed;
