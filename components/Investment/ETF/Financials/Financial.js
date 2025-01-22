// import React, { useEffect, useRef } from "react";

// const Financial = ({ symbol }) => {
//   const tickerContainer = useRef();
//   const financialContainer = useRef();

//   useEffect(() => {
//     // Clean up any existing widgets
//     const cleanup = (container) => {
//       const existingScript = container.current?.querySelector("script");
//       if (existingScript) {
//         existingScript.remove();
//       }
//     };

//     // Setup ticker widget
//     cleanup(tickerContainer);
//     const tickerScript = document.createElement("script");
//     tickerScript.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
//     tickerScript.type = "text/javascript";
//     tickerScript.async = true;
//     tickerScript.innerHTML = JSON.stringify({
//       symbol: symbol,
//       width: "95%",
//       isTransparent: false,
//       colorTheme: "light",
//       locale: "en",
//     });

//     // Setup financial widget
//     cleanup(financialContainer);
//     const financialScript = document.createElement("script");
//     financialScript.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
//     financialScript.type = "text/javascript";
//     financialScript.async = true;
//     financialScript.innerHTML = JSON.stringify({
//       isTransparent: false,
//       largeChartUrl: "",
//       displayMode: "regular",
//       width: "95%",
//       height: "100%",
//       colorTheme: "light",
//       symbol: symbol,
//       locale: "en",
//     });

//     // Add scripts to containers
//     if (tickerContainer.current) {
//       tickerContainer.current.appendChild(tickerScript);
//     }
//     if (financialContainer.current) {
//       financialContainer.current.appendChild(financialScript);
//     }

//     // Cleanup function
//     return () => {
//       cleanup(tickerContainer);
//       cleanup(financialContainer);
//     };
//   }, [symbol]);

//   return (
//     <div className="flex flex-col h-full w-full border-2 rounded-lg border-black/10 pt-5 pl-10 pr-2 ">
//       <div
//         ref={tickerContainer}
//         className="tradingview-widget-container h-[50px]"
//       >
//         <div className="tradingview-widget-container__widget"></div>
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

//       <div
//         ref={financialContainer}
//         className="tradingview-widget-container flex-1"
//       >
//         <div className="tradingview-widget-container__widget h-full"></div>
//         <div className="tradingview-widget-copyright h-full">
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

//....................
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
    <div className="flex flex-col h-full w-full border-2 rounded-lg border-black/10 pt-5 pl-10 pr-2">
      <div
        ref={tickerContainer}
        className="tradingview-widget-container h-[50px] mb-4"
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
