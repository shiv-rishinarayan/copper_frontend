import React, { useEffect, useRef } from "react";

const Financial = ({ symbol }) => {
  const container = useRef();

  useEffect(() => {
    // Clean up any existing widget
    const existingScript = container.current?.querySelector("script");
    if (existingScript) {
      existingScript.remove();
    }

    // Create new script element
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
    script.type = "text/javascript";
    script.async = true;

    // Set the widget configuration
    script.innerHTML = JSON.stringify({
      isTransparent: false,
      largeChartUrl: "",
      displayMode: "regular",
      width: "100%",
      height: "100%",
      colorTheme: "light",
      symbol: symbol,
      locale: "en",
    });

    // Add the script to container
    if (container.current) {
      container.current.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (container.current) {
        const script = container.current.querySelector("script");
        if (script) {
          script.remove();
        }
      }
    };
  }, [symbol]); // Re-run effect when symbol changes

  return (
    <div className="h-full w-full">
      <div ref={container} className="tradingview-widget-container h-full">
        <div className="tradingview-widget-container__widget h-full"></div>
        <div className="tradingview-widget-copyright">
          {/* <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
          >
            Track all markets on TradingView
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Financial;

//........................................
