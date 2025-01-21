// import React, { useEffect, useRef } from "react";

// const Financial = ({ symbol }) => {
//   const container = useRef();

//   useEffect(() => {
//     // Clean up any existing widget
//     const existingScript = container.current?.querySelector("script");
//     if (existingScript) {
//       existingScript.remove();
//     }

//     // Create new script element
//     const script = document.createElement("script");
//     script.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
//     script.type = "text/javascript";
//     script.async = true;

//     // Set the widget configuration
//     script.innerHTML = JSON.stringify({
//       isTransparent: false,
//       largeChartUrl: "",
//       displayMode: "regular",
//       width: "100%",
//       height: "100%",
//       colorTheme: "light",
//       symbol: symbol,
//       locale: "en",
//     });

//     // Add the script to container
//     if (container.current) {
//       container.current.appendChild(script);
//     }

//     // Cleanup function
//     return () => {
//       if (container.current) {
//         const script = container.current.querySelector("script");
//         if (script) {
//           script.remove();
//         }
//       }
//     };
//   }, [symbol]); // Re-run effect when symbol changes

//   return (
//     <div className="h-full w-full">
//       <div ref={container} className="tradingview-widget-container h-full">
//         <div className="tradingview-widget-container__widget h-full"></div>
//         <div className="tradingview-widget-copyright">
//           {/* <a
//             href="https://www.tradingview.com/"
//             rel="noopener nofollow"
//             target="_blank"
//             className="text-blue-500 hover:text-blue-700"
//           >
//             Track all markets on TradingView
//           </a> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Financial;

// //........................................
import React, { useEffect, useRef } from "react";

const Financial = ({ symbol }) => {
  const tickerContainer = useRef();
  const financialContainer = useRef();

  useEffect(() => {
    // Clean up any existing widgets
    const cleanup = (container) => {
      const existingScript = container.current?.querySelector("script");
      if (existingScript) {
        existingScript.remove();
      }
    };

    // Setup ticker widget
    cleanup(tickerContainer);
    const tickerScript = document.createElement("script");
    tickerScript.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    tickerScript.type = "text/javascript";
    tickerScript.async = true;
    tickerScript.innerHTML = JSON.stringify({
      symbol: symbol,
      width: "100%",
      isTransparent: false,
      colorTheme: "light",
      locale: "en",
    });

    // Setup financial widget
    cleanup(financialContainer);
    const financialScript = document.createElement("script");
    financialScript.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
    financialScript.type = "text/javascript";
    financialScript.async = true;
    financialScript.innerHTML = JSON.stringify({
      isTransparent: false,
      largeChartUrl: "",
      displayMode: "regular",
      width: "100%",
      height: "100%",
      colorTheme: "light",
      symbol: symbol,
      locale: "en",
    });

    // Add scripts to containers
    if (tickerContainer.current) {
      tickerContainer.current.appendChild(tickerScript);
    }
    if (financialContainer.current) {
      financialContainer.current.appendChild(financialScript);
    }

    // Cleanup function
    return () => {
      cleanup(tickerContainer);
      cleanup(financialContainer);
    };
  }, [symbol]);

  return (
    <div className="flex flex-col h-full w-full border-2 rounded-lg border-accent/10 p-3">
      <div
        ref={tickerContainer}
        className="tradingview-widget-container h-[50px]"
      >
        <div className="tradingview-widget-container__widget"></div>
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

      <div
        ref={financialContainer}
        className="tradingview-widget-container flex-1"
      >
        <div className="tradingview-widget-container__widget h-full"></div>
        <div className="tradingview-widget-copyright h-full">
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
