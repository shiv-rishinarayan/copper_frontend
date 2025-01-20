import React, { useEffect, useRef } from "react";
import { ETFdata } from "../ETFdata";

const AsiaETFIntradayReturnTickers = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (widgetRef.current) {
      // Cleanup previous content to avoid duplication
      widgetRef.current.innerHTML = "";
    }

    // Get Asia ETF tickers from the data
    const asiaETFs = ETFdata.regions.find(
      (region) => region.name === "Asia"
    ).funds;
    const symbols = asiaETFs.map((fund) => ({
      description: fund.fund,
      proName: fund.ticker.split(" ")[0], // Get the first part of the ticker before space
    }));

    // Dynamically inject the TradingView widget script
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: symbols,
      isTransparent: false,
      showSymbolLogo: true,
      colorTheme: "light",
      locale: "en",
    });

    widgetRef.current.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
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
    </div>
  );
};

export default AsiaETFIntradayReturnTickers;
