import React, { useEffect, useRef } from "react";

const StockDetailsProfile = ({ ticker }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js";
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: 250,
      isTransparent: false,
      colorTheme: "light",
      symbol: ticker, // Pass the ticker dynamically
      locale: "en",
    });

    if (containerRef.current) {
      // Clear previous widget and add the new one
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }

    // Cleanup function to avoid multiple widgets
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

export default StockDetailsProfile;
