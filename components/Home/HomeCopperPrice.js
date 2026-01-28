import React, { useState, useEffect } from "react";
import { FaLink } from "react-icons/fa6";
import { COPPER_PRICES } from "@/src/api/copperAPI";

const HomeCopperPrice = () => {
  const [copperPrices, setCopperPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(COPPER_PRICES);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        // Sort data to ensure Copper comes first
        const sortedData = data.sort((a, b) => {
          if (a.metal_name === "Copper") return -1;
          if (b.metal_name === "Copper") return 1;
          return 0;
        });
        setCopperPrices(sortedData);
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
    <tr className="text-sm hover:bg-accent/10" key={metalData.metal_name}>
      <td className="border-t px-4 py-2 font-sm">{metalData.metal_name}</td>
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
          href="https://www.lme.com/en/metals/non-ferrous/copper"
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
        <tbody>{copperPrices.map((metalData) => renderRow(metalData))}</tbody>
      </table>
    </div>
  );
};

export default HomeCopperPrice;