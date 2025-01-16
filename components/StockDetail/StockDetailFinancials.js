import React, { useEffect, useRef } from "react";

const StockDetailsFinancials = ({ ticker }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
    script.innerHTML = JSON.stringify({
      isTransparent: false,
      largeChartUrl: "",
      displayMode: "regular",
      width: "100%", // Full width
      height: "770", // Fixed height
      colorTheme: "light", // Light theme
      symbol: ticker, // Dynamic ticker
      locale: "en", // Locale set to English
    });

    if (containerRef.current) {
      // Clear the previous widget and add the new one
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }

    // Cleanup function to avoid multiple widgets
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [ticker]); // Update widget when ticker changes

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
};

export default StockDetailsFinancials;
