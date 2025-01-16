import React, { useEffect, useRef } from "react";

const StockDetailsTechAnalysis = ({ ticker }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
    script.innerHTML = JSON.stringify({
      interval: "1m", // Default interval (1-minute)
      width: "100%", // Full width for responsive layout
      height: 370, // Fixed height
      isTransparent: false, // Non-transparent background
      symbol: ticker, // Dynamic ticker
      showIntervalTabs: true, // Show interval tabs for user selection
      displayMode: "single", // Display a single widget mode
      locale: "en", // Locale set to English
      colorTheme: "light", // Light theme
    });

    if (containerRef.current) {
      // Clear the previous widget and append the new one
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }

    // Cleanup function to prevent multiple widgets
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [ticker]); // Re-run the effect when the ticker changes

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
};

export default StockDetailsTechAnalysis;
