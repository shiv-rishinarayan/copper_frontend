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
        { description: "", proName: "LSE:IPLT" },
        { description: "", proName: "LSE:SPPT" },
        { description: "", proName: "LSE:PHPT" },
        { description: "", proName: "MIL:XAD3" },
        { description: "", proName: "MIL:XPPE" },
        { description: "", proName: "LSE:XPPT" },
        { description: "", proName: "TURQUOISE:PTCHAZ" },
        { description: "", proName: "SIX:ZPLA" },
        { description: "", proName: "LSE:PHPM" },
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

// Create dynamic components with no SSR
const DynamicEuropeETFTickers = dynamic(
  () => Promise.resolve(EuropeETFTickers),
  {
    ssr: false,
  }
);

export default EuropeETFTickers;

//...................

// import React, { useEffect, useRef } from "react";
// import dynamic from "next/dynamic";
// import { ETFdata } from "../ETFdata";

// const EuropeETFTickers = () => {
//   const widgetRef = useRef(null);

//   useEffect(() => {
//     if (widgetRef.current) {
//       // Cleanup previous content to avoid duplication
//       widgetRef.current.innerHTML = "";
//     }

//     // Get Europe ETF tickers from the data
//     const europeETFs = ETFdata.regions.find(
//       (region) => region.name === "Europe"
//     ).funds;

//     const symbols = europeETFs.map((fund) => ({
//       description: fund.fund || "", // Use the fund name or an empty string
//       proName: fund.ticker.split(" ")[0], // Get the first part of the ticker before space
//     }));

//     // Dynamically inject the TradingView widget script
//     const script = document.createElement("script");
//     script.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
//     script.async = true;
//     script.innerHTML = JSON.stringify({
//       symbols: symbols,
//       isTransparent: false,
//       showSymbolLogo: true,
//       colorTheme: "light",
//       locale: "en",
//     });

//     widgetRef.current.appendChild(script);

//     return () => {
//       // Cleanup the script when the component unmounts
//       if (widgetRef.current) {
//         widgetRef.current.innerHTML = "";
//       }
//     };
//   }, []);

//   return (
//     <div className="tradingview-widget-container">
//       <div
//         ref={widgetRef}
//         className="tradingview-widget-container__widget"
//       ></div>
//       <div className="tradingview-widget-copyright"></div>
//     </div>
//   );
// };

// // Create dynamic component with no SSR
// const DynamicEuropeETFTickers = dynamic(
//   () => Promise.resolve(EuropeETFTickers),
//   {
//     ssr: false,
//   }
// );

// export default DynamicEuropeETFTickers;
