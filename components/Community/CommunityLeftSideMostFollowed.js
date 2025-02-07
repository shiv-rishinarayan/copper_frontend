// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { MOST_FOLLOWED } from "@/src/api/platinumAPI";

// const MostFollowed = ({ setSearchQuery, filterPosts }) => {
//   const [stocks, setStocks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchStocks = async () => {
//       try {
//         const response = await axios.get(MOST_FOLLOWED);
//         setStocks(response.data);
//       } catch (error) {
//         console.error("Error fetching most followed stocks:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStocks();
//   }, []);

//   const handleStockClick = (stock) => {
//     // Update search query with stock ticker as a cashtag
//     const searchTerm = stock.ticker;
//     setSearchQuery(searchTerm);
//     // Trigger the search/filter
//     filterPosts(searchTerm);
//   };

//   if (loading) {
//     return (
//       <div className="text-center text-lg font-medium">
//         Loading Most Followed Stocks...
//       </div>
//     );
//   }

//   return (
//     <div className="">
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white p-6 rounded-lg shadow-lg w-96"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2 className="text-xl font-semibold mb-3">Error</h2>
//             <p className="text-base mb-4">{errorMessage}</p>
//             <button
//               className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//       <h1 className="text-lg font-bold mb-4">Most Followed Stocks</h1>
//       <div>
//         {stocks.slice(0, 11).map((stock) => (
//           <div
//             key={stock.id}
//             className="flex items-center justify-between border-b py-1 cursor-pointer hover:bg-secondary/10 transition-colors"
//             onClick={() => handleStockClick(stock)}
//           >
//             <div className="flex flex-col text-sm">
//               <span className="font-semibold">{stock.ticker || "N/A"}</span>
//               <span className="text-sm text-gray-500">
//                 {stock.name || "N/A"}
//               </span>
//             </div>

//             <div className="text-right">
//               <span className="block font-semibold text-sm">
//                 $
//                 {stock.current_price !== null
//                   ? stock.current_price.toFixed(2)
//                   : "0.00"}
//               </span>
//               <span
//                 className={`block text-sm ${
//                   stock.intraday_percentage >= 0
//                     ? "text-green-600"
//                     : "text-red-600"
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
import { MOST_FOLLOWED } from "@/src/api/platinumAPI";

const MostFollowed = ({ setSearchQuery }) => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(MOST_FOLLOWED);
        setStocks(response.data);
      } catch (error) {
        console.error("Error fetching most followed stocks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  const handleStockClick = (stock) => {
    // Just update the search query with the stock ticker
    const searchTerm = `${stock.ticker}`;
    setSearchQuery(searchTerm);
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
            onClick={() => handleStockClick(stock)}
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
