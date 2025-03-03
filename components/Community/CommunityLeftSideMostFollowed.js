"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MOST_FOLLOWED } from "@/src/api/platinumAPI";
import { useForumPosts } from "../../context/ForumPostsContext";

// Shimmer Stock Card Component
const ShimmerStockCard = () => {
  return (
    <div className="flex items-center justify-between border-b py-[0.6rem] animate-pulse">
      <div className="flex flex-col gap-2">
        <div className="h-4 w-16 bg-gray-200 rounded"></div>
        <div className="h-3 w-24 bg-gray-200 rounded"></div>
      </div>
      <div className="text-right flex flex-col gap-2">
        <div className="h-4 w-16 bg-gray-200 rounded ml-auto"></div>
        <div className="h-3 w-12 bg-gray-200 rounded ml-auto"></div>
      </div>
    </div>
  );
};

const MostFollowed = ({ setSearchQuery }) => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { fetchPosts, updateState } = useForumPosts();

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
    updateState({
      selectedStock: stock,
      cashtag: stock.ticker,
      isSearchActive: true
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage("");
  };

  const renderShimmerLoading = () => {
    return (
      <div className="space-y-1">
        <div className="h-6 w-48 bg-gray-200 rounded mb-6 animate-pulse"></div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <ShimmerStockCard key={index} />
        ))}
      </div>
    );
  };

  if (loading) {
    return renderShimmerLoading();
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
