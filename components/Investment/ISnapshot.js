// import React from "react";

// const ISnapshot = () => {
//   return (
//     <div className="px-3 md:px-12 py-5 md:py-5">
//       <h1 className="cambay text-[22px] sm:text-3xl  font-semibold">Snapshot</h1>

//       {/* content  */}
//       <div className="mt-1 md:mt-5">
//         <div className="w-full rounded-md bg-secondary/15 h-[40vh]"></div>
//       </div>
//     </div>
//   );
// };

// export default ISnapshot;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader"; // Assuming your Loader component is in this path

const logos = [
  { name: "New Age Metals Inc.", image: "/snapshotImgs/NAM-2.png" },
  { name: "Ivanhoe Mines Ltd.", image: "/snapshotImgs/Ivanhoe.png" },
  { name: "LifeZoom Metals Corp.", image: "/snapshotImgs/Lifezone.png" },
  { name: "Magna Mining Inc.", image: "/snapshotImgs/MagnaMining.jpg" },
  { name: "BRVO Bravo Mining Corp.", image: "/snapshotImgs/Bravo.png" },
  {
    name: "Canadian North Resources Inc.",
    image: "/snapshotImgs/CanadianNorth.png",
  },
  {
    name: "Generation Mining Ltd.",
    image: "/snapshotImgs/GenerationMining.png",
  },
  {
    name: "Eastern Platinum Ltd.",
    image: "/snapshotImgs/EasternPlatinum.jpg",
  },
  {
    name: "Stillwater Critical Minerals Corp.",
    image: "/snapshotImgs/Stillwater.jpg",
  },
  {
    name: "ValOre Metals Corp.",
    image: "/snapshotImgs/Valore.png",
  },
  {
    name: "St-Georges Eco-Mining Corp.",
    image: "/snapshotImgs/StGeorge.jpg",
  },
  {
    name: "GT Resources Ltd.",
    image: "/snapshotImgs/GT.png",
  },
  {
    name: "Platinum Group Metals Ltd.",
    image: "/snapshotImgs/PlatinumGroup.png",
  },
  {
    name: "Tanaka Chemical Corp.",
    image: "/snapshotImgs/Tanaka.png",
  },
  {
    name: "Umicore SA",
    image: "/snapshotImgs/Umicore.png",
  },
  {
    name: "Johnson Matthey Plc",
    image: "/snapshotImgs/JohnsonMatthey.png",
  },
  {
    name: "Sibanye Stillwater Ltd.",
    image: "/snapshotImgs/SibanyeStillwater.png",
  },
  {
    name: "Impala Platinum Holdings Ltd.",
    image: "/snapshotImgs/Implats.png",
  },
  {
    name: "Prospector Metals Corp.",
    image: "/snapshotImgs/Prospector.png",
  },
  {
    name: "Clean Air Metals Inc.",
    image: "/snapshotImgs/CleanAir.jpg",
  },
];

const ISnapshot = () => {
  const [stocksData, setStocksData] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const router = useRouter();

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        setIsLoading(true); // Start loading
        const response = await fetch(
          "https://platinumdjango-production.up.railway.app/api/most-followed-stocks/"
        );
        const data = await response.json();
        const filteredStocks = data.filter(
          (item) => item.stock_type === "most_followed"
        );
        setStocksData(filteredStocks);
      } catch (err) {
        console.error("Error fetching stock data:", err);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setIsLoading(false); // End loading regardless of outcome
      }
    };
    fetchStocks();
  }, []);

  const checkSubpageExists = async (stockTicker) => {
    try {
      const response = await fetch(
        `https://platinumdjango-production.up.railway.app/api/stock-details/${stockTicker}`
      );
      const data = await response.json();
      return data.exists ?? true;
    } catch (error) {
      console.error("Error checking subpage existence:", error);
      return false;
    }
  };

  const handleRowClick = async (stockTicker) => {
    setErrorMessage("");
    const exists = await checkSubpageExists(stockTicker);

    if (exists) {
      router.push(`/stock-details/${stockTicker}`);
    } else {
      setErrorMessage(`No details found for stock: ${stockTicker}`);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage("");
  };

  return (
    <div className="px-3 md:px-12 py-5 md:py-5">
      <h1 className="cambay text-[22px] sm:text-3xl font-semibold">Snapshot</h1>

      {/* content */}
      <div className="mt-1 md:mt-5">
        <div className="w-full rounded-md bg-secondary/10 p-4 md:p-7">
          {isModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 transition-colors"
              onClick={closeModal}
            >
              <div
                className="bg-white p-4 rounded shadow-md w-96"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-lg font-bold mb-2">Oops!</h2>
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

          {isLoading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <Loader />
            </div>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-2 md:gap-3">
              {stocksData.length > 0 ? (
                stocksData.map((stock, index) => (
                  <div
                    className="bg-white p-4 rounded-sm border border-date/10 flex flex-col items-center cursor-pointer"
                    key={index}
                    onClick={() => handleRowClick(stock.ticker)}
                  >
                    {logos.map((logo, i) => {
                      if (logo.name === stock.name) {
                        return (
                          <Image
                            key={i}
                            src={logo.image}
                            alt={logo.name}
                            width={100}
                            height={100}
                            className={`h-8 w-auto mb-2 ${
                              stock.name === "New Age Metals Inc."
                                ? "scale-105"
                                : ""
                            } ${
                              stock.name === "Eastern Platinum Ltd."
                                ? " h-9 scale-150"
                                : ""
                            } 
                            ${
                              stock.name === "St-Georges Eco-Mining Corp."
                                ? " h-9 scale-150"
                                : ""
                            } 
                             `}
                          />
                        );
                      }
                      return null;
                    })}

                    <div className="flex space-x-4 font-semibold text-[13px] md:text-[13.8px] mt-2 text-black1/90">
                      <span className="inline-flex">
                        ${stock.current_price?.toFixed(2) ?? "0.00"}
                      </span>

                      <span
                        className={`inline-flex ${
                          stock.intraday_change >= 0
                            ? "text-green"
                            : "text-red-500"
                        }`}
                      >
                        ${stock.intraday_change?.toFixed(2) ?? "0.00"}
                      </span>
                      <span
                        className={`inline-flex ${
                          stock.intraday_percentage >= 0
                            ? "text-green"
                            : "text-red-500"
                        }`}
                      >
                        {stock.intraday_percentage?.toFixed(2) ?? "0.00"}%
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-lightgray">
                  No most-followed stocks available.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ISnapshot;
