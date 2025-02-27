// import { useEffect, useState } from "react";
// import { STOCK_SCREENER } from "@/src/api/platinumAPI";

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
// import { STOCK_SCREENER } from "@/src/api/platinumAPI";

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
        { description: "", proName: "OTC:AGPPF" },
        { description: "", proName: "TSXV:BRVO" },
        { description: "", proName: "TSXV:CNC" },
        { description: "", proName: "TSXV:CNRI" },
        { description: "", proName: "ASX:CHN" },
        { description: "", proName: "TSXV:AIR" },
        { description: "", proName: "TSX:ELR" },
        { description: "", proName: "TSX:GENM" },
        { description: "", proName: "TSXV:GT" },
        { description: "", proName: "TSX:IVN" },
        { description: "", proName: "NYSE:LZM" },
        { description: "", proName: "TSXV:NICU" },
        { description: "", proName: "TSXV:NAM" },
        { description: "", proName: "AMEX:PLG" },
        { description: "", proName: "TSXV:PPP" },
        { description: "", proName: "TSXV:RAMP" },
        { description: "", proName: "NYSE:SBSW" },
        { description: "", proName: "CSE:SX" },
        { description: "", proName: "TSXV:PGE" },
        { description: "", proName: "OTC:TIHRF" },
        { description: "", proName: "TSXV:VO" },
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
