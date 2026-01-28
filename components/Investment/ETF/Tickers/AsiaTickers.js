import { ETFdata } from "../ETFdata";
import React, { useEffect, useRef } from "react";

const AsiaETFIntradayReturnTickers = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.innerHTML = "";
    }

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: "", proName: "ASX:BHP" },
        { description: "", proName: "ASX:RIO" },
        { description: "", proName: "ASX:29M" },
      ],
      isTransparent: false,
      showSymbolLogo: true,
      colorTheme: "light",
      locale: "en",
    });

    widgetRef.current.appendChild(script);

    return () => {
      if (widgetRef.current) {
        widgetRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div
        ref={widgetRef}
        className="tradingview-widget-container__widget"
      ></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
};

export default AsiaETFIntradayReturnTickers;
