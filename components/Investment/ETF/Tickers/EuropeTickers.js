import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const EuropeETFTickers = () => {
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
        { description: "", proName: "MIL:XAD3" },
        { description: "", proName: "MIL:XPPE" },
        { description: "", proName: "TURQUOISE:PTCHAZ" },
        { description: "", proName: "SIX:ZPLA" },
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

const DynamicEuropeETFTickers = dynamic(
  () => Promise.resolve(EuropeETFTickers),
  {
    ssr: false,
  }
);

export default EuropeETFTickers;
