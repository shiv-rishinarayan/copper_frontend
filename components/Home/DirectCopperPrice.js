import React, { useState, useEffect } from "react";

const DirectCopperPrice = () => {
  const [copperData, setCopperData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCopperPrice = async () => {
      try {
        setLoading(true);

        // Fetch copper price from CME Group API
        const response = await fetch("/api/cme-copper-spot");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.success || !data.data) {
          throw new Error(
            "No CME copper spot price data available - real data only",
          );
        }

        // Use CME copper data directly
        const cmeData = data.data;

        setCopperData({
          price: parseFloat(cmeData.last_price),
          price_change: parseFloat(cmeData.price_change),
          price_change_percent: parseFloat(cmeData.price_change_percent),
          source: "CME Group",
          symbol: cmeData.globex_code,
          last_updated: cmeData.scraped_at,
        });
      } catch (error) {
        console.error("Error fetching CME copper spot price:", error);
        setError(error.message);

        // No fallback data - set to null to show error state
        setCopperData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCopperPrice();

    // Refresh every 2 minutes
    const interval = setInterval(fetchCopperPrice, 2 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
          Live Copper Price
        </h2>
        <div className="bg-accent/30 p-3 md:p-2 lg:p-3 py-4 w-full border border-accent/30 rounded-md flex justify-between items-center">
          <div className="h-8 md:h-6 lg:h-8">
            <img
              className="w-28 md:w-6 lg:w-28 h-9 md:h-6 lg:h-10 sm:h-10 sm:w-28"
              src="/logo.jpg"
              alt="Copper Tracker Logo"
            />
          </div>

          <div className="w-[60%] md:w-[70%] pr-1">
            <ul className="flex items-center gap-x-5 md:gap-x-3 lg:gap-x-5 text-md md:text-[10px] lg:text-sm">
              <li className="w-[33%] text-black1/80 font-medium">Price</li>
              <li className="w-[33%] text-black1/80 font-medium">Change</li>
              <li className="w-[33%] text-black1/80 font-medium">%Change</li>
            </ul>
          </div>
        </div>

        <div className="mt-1 bg-accent/30 p-3 md:p-2 lg:p-3 py-4 w-full border border-accent/30 rounded-md flex justify-between items-center">
          <div>
            <h3 className="text-xs md:text-[9px] lg:text-sm font-bold text-green">
              Copper Spot Price
            </h3>
          </div>

          <div className="w-[60%] md:w-[70%]">
            <ul className="flex items-center gap-x-5 md:gap-x-3 lg:gap-x-5 text-xs md:text-[9px] lg:text-sm font-semibold text-green">
              <li className="w-[33%]">
                <p className="w-12 h-5 bg-black/30 animate-pulse rounded-lg"></p>
              </li>
              <li className="w-[33%]">
                <p className="w-12 h-5 bg-black/30 animate-pulse rounded-lg"></p>
              </li>
              <li className="w-[33%]">
                <p className="w-12 h-5 bg-black/30 animate-pulse rounded-lg"></p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-2 text-start">
          <p className="text-xs min-w-25 h-5 text-gray-600 bg-black/30 animate-pulse rounded-lg"></p>
          <p className="text-xs text-orange-600 mt-1 bg-black/30 animate-pulse rounded-lg"></p>

          <p className="text-xs text-red-500 mt-1 bg-black/30 animate-pulse rounded-lg "></p>

          <p className="font-medium text-date text-sm md:text-xs lg:text-sm">
            <a
              target="_blank"
              className="text-accent hover:text-accent/60 transition-all duration-200"
              href="/api/cme-copper-spot"
              rel="noopener noreferrer"
            >
              CME Group - Copper Futures
            </a>
          </p>
        </div>
      </div>
    );
  }

  if (!copperData) {
    return (
      <div className="text-center">
        <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
          Live Copper Price
        </h2>
        <div className="text-center py-8 text-red-500">
          <p>CME copper spot price data unavailable</p>
          <p className="text-sm text-gray-600 mt-2">
            Real-time data only - no fallback data
          </p>
          {error && <p className="text-xs text-red-400 mt-2">Error: {error}</p>}
        </div>
      </div>
    );
  }

  const { price, price_change, price_change_percent, source, note } =
    copperData;

  return (
    <div className="text-center">
      <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
        Live Copper Price
      </h2>

      <div className="bg-accent/30 p-3 md:p-2 lg:p-3 py-4 w-full border border-accent/30 rounded-md flex justify-between items-center">
        <div className="h-8 md:h-6 lg:h-8">
          <img
            className="w-28 md:w-12 lg:w-28 h-10 md:h-6 lg:h-10 sm:h-10 sm:w-28"
            src="/logo.jpg"
            alt="Copper Tracker Logo"
          />
        </div>

        <div className="w-[60%] md:w-[70%] pr-1">
          <ul className="flex items-center gap-x-5 md:gap-x-3 lg:gap-x-5 text-sm md:text-[10px] lg:text-sm">
            <li className="w-[33%] text-black1/80 font-medium">Price</li>
            <li className="w-[33%] text-black1/80 font-medium">Change</li>
            <li className="w-[33%] text-black1/80 font-medium">%Change</li>
          </ul>
        </div>
      </div>

      <div className="mt-1 bg-accent/30 p-3 md:p-2 lg:p-3 py-4 w-full border border-accent/30 rounded-md flex justify-between items-center">
        <div>
          <h3 className="text-xs md:text-[9px] lg:text-sm font-bold text-green">
            Copper Spot Price
          </h3>
        </div>

        <div className="w-[60%] md:w-[70%]">
          <ul className="flex items-center gap-x-5 md:gap-x-3 lg:gap-x-5 text-xs md:text-[9px] lg:text-sm font-semibold text-green">
            <li className="w-[33%]">
              <p>${price}</p>
            </li>
            <li className="w-[33%]">
              <p
                className={`${parseFloat(price_change) >= 0 ? "text-green-600" : "text-red-500"}`}
              >
                {parseFloat(price_change) >= 0
                  ? `$+${price_change}`
                  : `${price_change}`}
              </p>
            </li>
            <li className="w-[33%]">
              <p
                className={`${
                  parseFloat(price_change_percent) >= 0
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {parseFloat(price_change_percent) >= 0
                  ? `+${price_change_percent}%`
                  : `${price_change_percent}%`}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-2 text-start">
        <p className="text-xs text-gray-600">Source: {source}</p>
        {note && <p className="text-xs text-orange-600 mt-1">{note}</p>}
        {error && (
          <p className="text-xs text-red-500 mt-1">
            Note: Using fallback data - {error}
          </p>
        )}
        <p className="font-medium text-date text-sm md:text-xs lg:text-sm">
          <a
            target="_blank"
            className="text-accent hover:text-accent/60 transition-all duration-200"
            href="/api/cme-copper-spot"
            rel="noopener noreferrer"
          >
            CME Group - Copper Futures
          </a>
        </p>
      </div>
    </div>
  );
};

export default DirectCopperPrice;
