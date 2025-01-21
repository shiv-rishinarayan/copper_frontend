import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const NorthAmericaETFTickers = () => {
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
        { description: "", proName: "AMEX:GLTR" },
        { description: "", proName: "AMEX:PPLT" },
        { description: "", proName: "AMEX:SPPP" },
        { description: "", proName: "AMEX:PLTM" },
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
    </div>
  );
};

const DynamicNorthAmericaETFTickers = dynamic(
  () => Promise.resolve(NorthAmericaETFTickers),
  {
    ssr: false,
  }
);

export default NorthAmericaETFTickers;
