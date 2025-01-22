import React, { useEffect, useRef } from "react";

const Financial = ({ symbol }) => {
  const tickerContainer = useRef();
  const financialContainer = useRef();

  useEffect(() => {
    const cleanup = (container) => {
      const existingScript = container.current?.querySelector("script");
      if (existingScript) {
        existingScript.remove();
      }
    };

    const setupWidget = (container, scriptSrc, scriptOptions) => {
      cleanup(container);

      const script = document.createElement("script");
      script.src = scriptSrc;
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify(scriptOptions);

      if (container.current) {
        container.current.appendChild(script);
      }

      return () => cleanup(container);
    };

    setupWidget(
      tickerContainer,
      "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js",
      {
        symbol: symbol,
        width: "95%",
        isTransparent: false,
        colorTheme: "light",
        locale: "en",
      }
    );

    setupWidget(
      financialContainer,
      "https://s3.tradingview.com/external-embedding/embed-widget-financials.js",
      {
        isTransparent: false,
        largeChartUrl: "",
        displayMode: "regular",
        width: "95%",
        height: "100%",
        colorTheme: "light",
        symbol: symbol,
        locale: "en",
      }
    );
  }, [symbol]);

  return (
    <div className="flex flex-col h-full w-full border-2 rounded-lg border-black/10 pt-5 pl-10 pr-2 sm:pr-5">
      <div
        ref={tickerContainer}
        className="tradingview-widget-container h-[50px] -mb-4"
      >
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright"></div>
      </div>

      <div
        ref={financialContainer}
        className="tradingview-widget-container flex-1"
      >
        <div className="tradingview-widget-container__widget h-full"></div>
        <div className="tradingview-widget-copyright"></div>
      </div>
    </div>
  );
};

export default Financial;
