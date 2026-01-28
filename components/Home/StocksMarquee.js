// import { useEffect, useState } from "react";
// import { STOCK_SCREENER } from "@/src/api/copperAPI";

// const StocksMarquee = () => {
//   const [symbols, setSymbols] = useState([]);

//   useEffect(() => {
//     const fetchStockData = async () => {
//       try {
//         const response = await fetch(STOCK_SCREENER);
//         const data = await response.json();

//         const formattedSymbols = data.map((stock) => ({
//           description: "",
//           proName: `${stock.exchange.toUpperCase()}:${stock.ticker.toUpperCase()}`,
//         }));

//         setSymbols(formattedSymbols);
//       } catch (error) {
//         console.error("Error fetching stock data:", error);
//       }
//     };

//     fetchStockData();
//   }, []);

//   useEffect(() => {
//     if (symbols.length > 0) {
//       const script = document.createElement("script");
//       script.src =
//         "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
//       script.async = true;
//       script.innerHTML = JSON.stringify({
//         symbols: symbols,
//         showSymbolLogo: true,
//         isTransparent: false,
//         displayMode: "regular",
//         colorTheme: "light",
//         locale: "en",
//       });

//       document.getElementById("tradingview-widget-script").appendChild(script);
//     }
//   }, [symbols]);

//   return (
//     <div className="tradingview-widget-container">
//       <div
//         className="tradingview-widget-container__widget"
//         id="tradingview-widget-script"
//       ></div>
//     </div>
//   );
// };

// export default StocksMarquee;

// import { useEffect, useState } from "react";
// import { STOCK_SCREENER } from "@/src/api/copperAPI";

// const StocksMarquee = () => {
//   const [symbols, setSymbols] = useState([]);

//   useEffect(() => {
//     const fetchStockData = async () => {
//       try {
//         const response = await fetch(STOCK_SCREENER);
//         const data = await response.json();

//         const formattedSymbols = data.map((stock) => ({
//           description: "",
//           proName: `${stock.exchange.toUpperCase()}:${stock.ticker
//             .split(".")[0]
//             .toUpperCase()}`, // Extract only the first part before `.`
//         }));

//         setSymbols(formattedSymbols);
//       } catch (error) {
//         console.error("Error fetching stock data:", error);
//       }
//     };

//     fetchStockData();
//   }, []);

//   useEffect(() => {
//     if (symbols.length > 0) {
//       const script = document.createElement("script");
//       script.src =
//         "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
//       script.async = true;
//       script.innerHTML = JSON.stringify({
//         symbols: symbols,
//         showSymbolLogo: true,
//         isTransparent: false,
//         displayMode: "regular",
//         colorTheme: "light",
//         locale: "en",
//       });

//       document.getElementById("tradingview-widget-script").appendChild(script);
//     }
//   }, [symbols]);

//   return (
//     <div className="tradingview-widget-container">
//       <div
//         className="tradingview-widget-container__widget"
//         id="tradingview-widget-script"
//       ></div>
//     </div>
//   );
// };

// export default StocksMarquee;

import { useEffect } from "react";

const StocksMarquee = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: "", proName: "NYSE:FCX" }, // Freeport-McMoRan - Major copper producer
        { description: "", proName: "NYSE:SCCO" }, // Southern Copper Corporation
        { description: "", proName: "NYSE:TECK" }, // Teck Resources - Copper mining
        { description: "", proName: "AMEX:COPX" }, // Global X Copper Miners ETF
        { description: "", proName: "NYSE:AA" }, // Alcoa Corporation
        { description: "", proName: "TSX:TKO" }, // Taseko Mines - Copper producer
        { description: "", proName: "TSX:CS" }, // Capstone Copper Corp
        { description: "", proName: "TSX:HBM" }, // Hudbay Minerals
        { description: "", proName: "TSX:FM" }, // First Quantum Minerals
        { description: "", proName: "NYSE:VALE" }, // Vale S.A. - Mining company
        { description: "", proName: "LSE:GLEN" }, // Glencore - Mining and commodities
        { description: "", proName: "NYSE:BHP" }, // BHP Group - Mining company
        { description: "", proName: "TSX:CCO" }, // Cameco Corporation
        { description: "", proName: "TSX:LUN" }, // Lundin Mining Corporation
        { description: "", proName: "TSX:IVN" }, // Ivanhoe Mines - Copper projects
        { description: "", proName: "TSX:NCU" }, // Nevada Copper Corp
        { description: "", proName: "TSX:CU" }, // Copper Mountain Mining
        { description: "", proName: "OTC:JJCTF" }, // iPath Series B Bloomberg Copper ETN
        { description: "", proName: "TSX:ERO" }, // Ero Copper Corp
        { description: "", proName: "TSX:AQN" }, // Algonquin Power & Utilities
        { description: "", proName: "TSX:CXB" }, // Calibre Mining Corp
        { description: "", proName: "AMEX:CPER" }, // United States Copper Index Fund
        { description: "", proName: "AMEX:DBB" }, // Invesco DB Base Metals Fund
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "regular",
      colorTheme: "light",
      locale: "en",
    });

    document.getElementById("tradingview-widget").appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div
        className="tradingview-widget-container__widget"
        id="tradingview-widget"
      ></div>
    </div>
  );
};

export default StocksMarquee;
