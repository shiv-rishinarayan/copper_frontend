import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `{
          "autosize": true,
          "symbol": "CAPITALCOM:PLATINUM",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "allow_symbol_change": false,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;

    // Append the script to the container
    container.current.appendChild(script);

    // Force a resize once the widget is loaded
    script.onload = () => {
      window.dispatchEvent(new Event("resize"));
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }} // Ensure height is explicitly set
    >
      <div className="tradingview-widget-copyright">
        {/* Optional: You can add links here to TradingView */}
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
