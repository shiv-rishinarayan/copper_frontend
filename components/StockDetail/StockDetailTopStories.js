import React, { useEffect, useRef } from "react";

const StockDetailTopStories = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.innerHTML = JSON.stringify({
      feedMode: "all_symbols", // Shows all symbols in the feed
      isTransparent: false, // Non-transparent background
      displayMode: "regular", // Regular display mode
      width: "100%", // Fixed width
      height: 1030, // Fixed height
      colorTheme: "light", // Light theme
      locale: "en", // Locale set to English
    });

    if (containerRef.current) {
      // Clear the previous widget and append the new one
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }

    // Cleanup function to avoid multiple widgets
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []); // Empty dependency array as the widget does not require dynamic updates

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
};

export default StockDetailTopStories;
