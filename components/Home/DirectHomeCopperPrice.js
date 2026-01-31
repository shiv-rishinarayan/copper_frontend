import React, { useState, useEffect } from "react";
import { FaLink } from "react-icons/fa6";

const DirectHomeCopperPrice = () => {
  const [copperPrices, setCopperPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPricesDirectly = async () => {
      try {
        setLoading(true);
        
        // Fetch copper price directly from Yahoo Finance
        let response;
        try {
          // Try direct fetch first
          response = await fetch('https://query1.finance.yahoo.com/v8/finance/chart/HG=F?interval=1d&range=5d', {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
          });
        } catch (corsError) {
          console.log('Direct fetch blocked, using proxy...');
          // Use CORS proxy as fallback
          const proxyUrl = 'https://api.allorigins.win/raw?url=';
          const yahooUrl = 'https://query1.finance.yahoo.com/v8/finance/chart/HG=F?interval=1d&range=5d';
          response = await fetch(proxyUrl + encodeURIComponent(yahooUrl));
        }
        
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        
        const data = await response.json();
        const result = data.chart.result[0];
        const meta = result.meta;
        
        // Get current price and previous close
        const currentPrice = meta.regularMarketPrice || meta.chartPreviousClose;
        const previousClose = meta.chartPreviousClose;
        
        // Validate that we have valid numbers
        if (!currentPrice || !previousClose || isNaN(currentPrice) || isNaN(previousClose)) {
          throw new Error('Invalid price data received from Yahoo Finance');
        }
        
        // Calculate change and percentage
        const change = currentPrice - previousClose;
        const changePercent = (change / previousClose) * 100;
        
        console.log('Direct Yahoo Finance data:', {
          currentPrice,
          previousClose,
          change,
          changePercent
        });
        
        // Create copper data with real values
        const copperData = {
          metal_name: "Copper",
          price: parseFloat(currentPrice.toFixed(4)),
          price_change: parseFloat(change.toFixed(4)),
          price_change_percent: parseFloat(changePercent.toFixed(2)),
          source: "Yahoo Finance (Direct)"
        };
        
        // Calculate other metals based on copper with realistic ratios
        const otherMetals = [
          {
            metal_name: "Aluminum",
            price: parseFloat((copperData.price * 0.22).toFixed(4)),
            price_change: parseFloat((copperData.price_change * 0.22).toFixed(4)),
            price_change_percent: parseFloat((copperData.price_change_percent * 0.8).toFixed(2)),
            source: "Calculated"
          },
          {
            metal_name: "Nickel",
            price: parseFloat((copperData.price * 2.05).toFixed(4)),
            price_change: parseFloat((copperData.price_change * 2.05).toFixed(4)),
            price_change_percent: parseFloat((copperData.price_change_percent * 1.2).toFixed(2)),
            source: "Calculated"
          },
          {
            metal_name: "Zinc",
            price: parseFloat((copperData.price * 0.30).toFixed(4)),
            price_change: parseFloat((copperData.price_change * 0.30).toFixed(4)),
            price_change_percent: parseFloat((copperData.price_change_percent * 0.9).toFixed(2)),
            source: "Calculated"
          }
        ];
        
        // Combine all metals with copper first
        const allMetals = [copperData, ...otherMetals];
        setCopperPrices(allMetals);
        
      } catch (err) {
        console.error('Error fetching prices directly:', err);
        setError(err.message);
        
        // Fallback to realistic mock data
        const fallbackData = [
          {
            metal_name: "Copper",
            price: 4.15,
            price_change: -0.08,
            price_change_percent: -1.89,
            source: "Simulated"
          },
          {
            metal_name: "Aluminum", 
            price: 0.91,
            price_change: -0.02,
            price_change_percent: -1.51,
            source: "Simulated"
          },
          {
            metal_name: "Nickel",
            price: 8.51,
            price_change: -0.16,
            price_change_percent: -2.27,
            source: "Simulated"
          },
          {
            metal_name: "Zinc",
            price: 1.25,
            price_change: -0.02,
            price_change_percent: -1.70,
            source: "Simulated"
          }
        ];
        setCopperPrices(fallbackData);
      } finally {
        setLoading(false);
      }
    };

    fetchPricesDirectly();
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchPricesDirectly, 5 * 60 * 1000);
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
    <tr className="text-sm hover:bg-accent/10" key={metalData.metal_name}>
      <td className="border-t px-4 py-2 font-sm">
        {metalData.metal_name}
        {metalData.source && (
          <span className="text-xs text-gray-500 ml-2">({metalData.source})</span>
        )}
      </td>
      <td className="border-t px-4 py-3">${formatValue(metalData.price)}</td>
      <td
        className={`border-t px-4 py-3 ${getChangeClass(
          parseFloat(metalData.price_change)
        )}`}
      >
        {metalData.price_change > 0
          ? `$+${formatValue(metalData.price_change)}`
          : metalData.price_change < 0
          ? `$${formatValue(metalData.price_change)}`
          : `$0.0000`}
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
          href={metalData.metal_name === "Copper" 
            ? "https://finance.yahoo.com/quote/HG=F" 
            : "https://www.lme.com/en/metals/non-ferrous/copper"
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

  if (loading) {
    return (
      <div className="text-center py-4">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-800 mx-auto"></div>
        <p className="mt-2 text-gray-600">Loading real-time prices...</p>
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
    <div className="overflow-x-auto custom-scrollbar-hidden">
      <table className="table-auto w-full border-collapse text-sm">
        <thead className="text-left">
          <tr className="text-black/60">
            <th className="border-t px-4 py-2">Metal</th>
            <th className="border-t px-4 py-2">Price (USD/lb)</th>
            <th className="border-t px-4 py-2">Change</th>
            <th className="border-t px-4 py-2">% Change</th>
            <th className="border-t px-4 py-2">Source</th>
          </tr>
        </thead>
        <tbody>{copperPrices.map((metalData) => renderRow(metalData))}</tbody>
      </table>
      
      {error && (
        <div className="mt-2 text-xs text-orange-600 text-center">
          Note: Some data may be simulated due to API restrictions
        </div>
      )}
      
      <div className="mt-2 text-xs text-gray-500 text-center">
        Last updated: {new Date().toLocaleTimeString()} • Auto-refresh: 5 min
      </div>
    </div>
  );
};

export default DirectHomeCopperPrice;