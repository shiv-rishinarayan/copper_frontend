import React, { useState, useEffect } from "react";

const DirectHomeCopperPrice = () => {
  const [copperPrices, setCopperPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPricesFromDatabase = async () => {
      try {
        setLoading(true);

        // Fetch metal prices from our database API
        const response = await fetch("/api/copper-prices");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.success || !data.data) {
          throw new Error("No metal price data available from database");
        }

        // Ensure data.data is an array
        const dataArray = Array.isArray(data.data) ? data.data : [data.data];

        if (dataArray.length === 0) {
          throw new Error("No metal price data available from database");
        }

        // Transform database data to component format
        const metalPrices = dataArray.map((item) => ({
          metal_name: item.metal_name,
          price: parseFloat(item.price),
          price_change: parseFloat(item.price_change),
          price_change_percent: parseFloat(item.price_change_percent),
        }));

        setCopperPrices(metalPrices);
      } catch (err) {
        console.error("Error fetching prices from database:", err);
        setError(err.message);

        // Fallback to mock data
        const fallbackData = [
          {
            metal_name: "Copper",
            price: 4.15,
            price_change: -0.08,
            price_change_percent: -1.89,
          },
          {
            metal_name: "Aluminum",
            price: 0.91,
            price_change: -0.02,
            price_change_percent: -1.51,
          },
          {
            metal_name: "Nickel",
            price: 8.51,
            price_change: -0.16,
            price_change_percent: -2.27,
          },
          {
            metal_name: "Zinc",
            price: 1.25,
            price_change: -0.02,
            price_change_percent: -1.7,
          },
        ];
        setCopperPrices(fallbackData);
      } finally {
        setLoading(false);
      }
    };

    fetchPricesFromDatabase();

    // Refresh every 2 minutes
    const interval = setInterval(fetchPricesFromDatabase, 2 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatValue = (value) => {
    if (value === null || value === undefined || isNaN(value)) {
      return "0.00";
    }
    return parseFloat(value).toFixed(4);
  };

  const getChangeClass = (value) => {
    if (value > 0) return "text-green-500";
    if (value < 0) return "text-red-500";
    return "text-black";
  };

  const renderRow = (metalData) => (
    <tr className="text-md  hover:bg-accent/10" key={metalData.metal_name}>
      <td className="border-t pr-24 py-3 font-sm">{metalData.metal_name}</td>
      <td className="border-t pl-24 py-4">${formatValue(metalData.price)}</td>
      <td
        className={`border-t pl-24 py-3 ${getChangeClass(
          parseFloat(metalData.price_change),
        )}`}
      >
        {metalData.price_change > 0
          ? `$+${formatValue(metalData.price_change)}`
          : metalData.price_change < 0
            ? `${formatValue(metalData.price_change)}`
            : `$0.0000`}
      </td>
      <td
        className={`border-t pl-24 py-3 ${getChangeClass(
          parseFloat(metalData.price_change_percent),
        )}`}
      >
        {formatValue(metalData.price_change_percent)}%
      </td>
    </tr>
  );

  if (loading) {
    let rows = 5;
    return (
      <div className="overflow-x-auto border border-black/10 rounded-xl pl-5 mr-3 pb-2 custom-scrollbar-hidden">
        <table className="table-auto w-full border-collapse text-sm">
          <thead className="text-left">
            <tr className="text-black/60">
              <th className="border-t py-2">Metal</th>
              <th className="border-t px-[94px] py-2">Price (USD/lb)</th>
              <th className="border-t px-24 py-2">Change</th>
              <th className="border-t px-[87px] py-2">% Change</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, i) => (
              <tr key={i} className="border-t border-gray-100">
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3.5 w-16 bg-gray-200 rounded animate-pulse" />
                  </div>
                </td>
                <td className="py-3 px-24">
                  <div className="h-3.5 w-24 bg-gray-200 rounded animate-pulse" />
                </td>
                <td className="py-3 px-24">
                  <div className="h-3.5 w-16 bg-gray-200 rounded animate-pulse" />
                </td>
                <td className="py-3 px-24">
                  <div className="h-3.5 w-14 bg-gray-200 rounded animate-pulse" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-2 flex justify-center">
          <div className="h-3 w-48 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  if (error && copperPrices.length === 0) {
    return (
      <div className="text-center py-4 text-red-500">
        Error: {error}
        <p className="text-sm text-gray-600 mt-2">Using fallback data</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border border-black/10 rounded-xl pl-5 mr-3 pb-2  custom-scrollbar-hidden">
      <table className="table-auto w-full border-collapse text-sm">
        <thead className="text-left">
          <tr className="text-black/60">
            <th className="border-t py-2">Metal</th>
            <th className="border-t px-[94px] py-2">Price (USD/lb)</th>
            <th className="border-t px-24 py-2">Change</th>
            <th className="border-t px-[87px] py-2">% Change</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(copperPrices) && copperPrices.length > 0 ? (
            copperPrices.map((metalData) => renderRow(metalData))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">
                No price data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {error && (
        <div className="mt-2 text-xs text-orange-600 text-center">
          Note: Some data may be simulated due to API restrictions
        </div>
      )}

      <div className="mt-2 text-xs text-gray-500 text-center">
        Last updated: {new Date().toLocaleTimeString()} • Auto-refresh: 2 min
      </div>
    </div>
  );
};

export default DirectHomeCopperPrice;
