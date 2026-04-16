// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function CopperCFDTradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "width": "100%",
          "height": "100%",
          "symbol": "CAPITALCOM:COPPER",
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
          "hide_volume": true className="border border-black/10 rounded-lg pt-3 pl-3 pb-2 pr-3 ">
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Copper Futures
            </h1>
            <TVCopper />
          </div>
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div
      className="tradingview-widget-container rounded-xl"
      ref={container}
      style={{ height: "290px" }}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(CopperCFDTradingViewWidget);
