import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget({ ticker }) {
  const container = useRef(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    // Clear any existing content and scripts
    if (container.current) {
      container.current.innerHTML = "";
    }

    // Create new script element
    const script = document.createElement("script");
    scriptRef.current = script;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: ticker,
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "2",
      locale: "en",
      hide_top_toolbar: true,
      allow_symbol_change: false,
      save_image: false,
      calendar: false,
      hide_volume: true,
      support_host: "https://www.tradingview.com",
      height: 200,
      width: "100%",
    });

    // Create widget container
    const widgetContainer = document.createElement("div");
    widgetContainer.className = "tradingview-widget-container__widget";
    widgetContainer.style.height = "100%";
    widgetContainer.style.width = "100%";

    // Append elements
    if (container.current) {
      container.current.appendChild(widgetContainer);
      container.current.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (container.current) {
        container.current.innerHTML = "";
      }
      if (scriptRef.current) {
        scriptRef.current.remove();
      }
    };
  }, [ticker]); // Depend on ticker to refresh when it changes

  return (
    <div
      ref={container}
      className="tradingview-widget-container"
      style={{
        height: "300px",
        width: "100%",
        minHeight: "300px",
      }}
    />
  );
}

export default memo(TradingViewWidget);
