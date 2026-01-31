import React, { useState, useEffect } from "react";

const DirectCopperPrice = () => {
  const [copperData, setCopperData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCopperPriceDirectly = async () => {
      try {
        setLoading(true);
        
        // Method 1: Try Yahoo Finance directly (might have CORS issues)
        let response;
        try {
          response = await fetch('https://query1.finance.yahoo.com/v8/finance/chart/HG=F?interval=1d&range=5d', {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
          });
        } catch (corsError) {
          console.log('Direct Yahoo Finance blocked by CORS, trying proxy...');
          
          // Method 2: Use CORS proxy
          const proxyUrl = 'https://api.allorigins.win/raw?url=';
          const yahooUrl = 'https://query1.finance.yahoo.com/v8/finance/chart/HG=F?interval=1d&range=5d';
          response = await fetch(proxyUrl + encodeURIComponent(yahooUrl));
        }
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
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
        
        console.log('Direct Yahoo Finance fetch successful:', {
          currentPrice,
          previousClose,
          change,
          changePercent
        });
        
        setCopperData({
          price: parseFloat(currentPrice.toFixed(4)),
          price_change: parseFloat(change.toFixed(4)),
          price_change_percent: parseFloat(changePercent.toFixed(2)),
          source: "Yahoo Finance (Direct)",
          symbol: "HG=F",
          last_updated: new Date().toISOString()
        });
        
      } catch (error) {
        console.error('Error fetching copper price directly:', error);
        
        // Fallback: Generate realistic mock data
        const basePrice = 4.15;
        const randomChange = (Math.random() - 0.5) * 0.20; // Random change between -0.10 and +0.10
        const currentPrice = basePrice + randomChange;
        const changePercent = (randomChange / basePrice) * 100;
        
        setCopperData({
          price: parseFloat(currentPrice.toFixed(4)),
          price_change: parseFloat(randomChange.toFixed(4)),
          price_change_percent: parseFloat(changePercent.toFixed(2)),
          source: "Market Data (Simulated)",
          symbol: "COPPER",
          last_updated: new Date().toISOString(),
          note: "Real-time data temporarily unavailable"
        });
        
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCopperPriceDirectly();
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchCopperPriceDirectly, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
          Live Copper Price
        </h2>
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-800"></div>
          <span className="ml-3 text-gray-800 font-semibold">Loading...</span>
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
          Unable to load copper price data
        </div>
      </div>
    );
  }

  const { price, price_change, price_change_percent, source, note } = copperData;

  return (
    <div className="text-center">
      <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
        Live Copper Price
      </h2>

      <div className="bg-accent/30 p-3 md:p-2 lg:p-3 py-4 w-full border border-accent/30 rounded-md flex justify-between items-center">
        <div className="h-8 md:h-6 lg:h-8">
          <img
            className="w-16 md:w-12 lg:w-28 h-16 md:h-6 lg:h-10 sm:h-10 sm:w-28"
            src="/logo.jpg"
            alt="Copper Tracker Logo"
          />
        </div>

        <div className="w-[60%] md:w-[70%] pr-1">
          <ul className="flex items-center gap-x-5 md:gap-x-3 lg:gap-x-5 text-xs md:text-[10px] lg:text-sm">
            <li className="w-[33%] text-black1/80 font-medium">Price</li>
            <li className="w-[33%] text-black1/80 font-medium">Change</li>
            <li className="w-[33%] text-black1/80 font-medium">% Change</li>
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
                {parseFloat(price_change) >= 0 ? `$+${price_change}` : `$${price_change}`}
              </p>
            </li>
            <li className="w-[33%]">
              <p
                className={`${
                  parseFloat(price_change_percent) >= 0 ? "text-green-600" : "text-red-500"
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
        <p className="text-xs text-gray-600">
          Source: {source}
        </p>
        {note && (
          <p className="text-xs text-orange-600 mt-1">
            {note}
          </p>
        )}
        {error && (
          <p className="text-xs text-red-500 mt-1">
            Note: Using simulated data due to API restrictions
          </p>
        )}
        <p className="font-medium text-date text-sm md:text-xs lg:text-sm">
          <a
            target="_blank"
            className="text-accent hover:text-accent/60 transition-all duration-200"
            href="https://finance.yahoo.com/quote/HG=F"
            rel="noopener noreferrer"
          >
            Yahoo Finance - Copper Futures
          </a>
        </p>
      </div>
    </div>
  );
};

export default DirectCopperPrice;