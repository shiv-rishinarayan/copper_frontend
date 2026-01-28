// import React from "react";
// import { data } from "../../public/static-data/demand-data";

// const PlatinumTable = () => {
//   const publishedYears = ["2021", "2022", "2023", "2024"];
//   const estimateYears = ["2025", "2026", "2027", "2028"];

//   const getSupplyData = (year, dataKey) => {
//     const yearData =
//       year >= 2025 ? data.wpic_estimates[year] : data.published_platinum[year];
//     return yearData.supply.refined_mine_production[dataKey];
//   };

//   const getRecyclingData = (year, dataKey) => {
//     const yearData =
//       year >= 2025 ? data.wpic_estimates[year] : data.published_platinum[year];
//     return yearData.supply.recycling[dataKey];
//   };

//   const getDemandData = (year, dataKey) => {
//     const yearData =
//       year >= 2025 ? data.wpic_estimates[year] : data.published_platinum[year];
//     return yearData.demand[dataKey];
//   };

//   const getInvestmentData = (year, dataKey) => {
//     const yearData =
//       year >= 2025 ? data.wpic_estimates[year] : data.published_platinum[year];
//     return yearData.demand.investment[dataKey];
//   };

//   return (
//     <div className="w-full overflow-x-auto">
//       <div className="min-w-[1000px] p-4">
//         <h2 className="text-center text-lg mb-4">
//           Figure 2: Supply/demand summary table – See previous forecast from
//           January 2024 in Appendix III
//         </h2>

//         <table className="w-full text-sm">
//           <thead>
//             <tr>
//               <th className="text-left p-2 font-normal"></th>
//               <th className="text-center font-bold p-2" colSpan={4}>
//                 <div className="border-b pb-2">PUBLISHED PLATINUM</div>
//                 <div className="grid grid-cols-4 pt-2">
//                   {publishedYears.map((year) => (
//                     <div key={year}>
//                       {year}
//                       {year === "2024" ? "†" : ""}
//                     </div>
//                   ))}
//                 </div>
//               </th>
//               <th
//                 className="text-center font-bold text-blue-500 p-2"
//                 colSpan={4}
//               >
//                 <div className="border-b pb-2">WPIC ESTIMATES‡</div>
//                 <div className="grid grid-cols-4 pt-2">
//                   {estimateYears.map((year) => (
//                     <div key={year}>{year}†</div>
//                   ))}
//                 </div>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td colSpan={9} className="font-bold p-2">
//                 PLATINUM SUPPLY
//               </td>
//             </tr>
//             <tr>
//               <td className="p-2">Refined mine production</td>
//             </tr>
//             <tr>
//               <td className="pl-4 p-2">- South Africa</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {getSupplyData(year, "south_africa")}
//                 </td>
//               ))}
//             </tr>
//             <tr>
//               <td className="pl-4 p-2">- Zimbabwe</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {getSupplyData(year, "zimbabwe")}
//                 </td>
//               ))}
//             </tr>
//             <tr>
//               <td className="pl-4 p-2">- North America</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {getSupplyData(year, "north_america")}
//                 </td>
//               ))}
//             </tr>
//             <tr>
//               <td className="pl-4 p-2">- Russia</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {getSupplyData(year, "russia")}
//                 </td>
//               ))}
//             </tr>
//             <tr>
//               <td className="pl-4 p-2">- Other</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {getSupplyData(year, "other")}
//                 </td>
//               ))}
//             </tr>
//             <tr>
//               <td className="pl-4 p-2">- Producer inventory movement</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {getSupplyData(year, "producer_inventory_movement")}
//                 </td>
//               ))}
//             </tr>
//             <tr className="font-bold">
//               <td className="pl-4 p-2">Total mining supply</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {getSupplyData(year, "total_mining_supply")}
//                 </td>
//               ))}
//             </tr>
//             <tr>
//               <td className="p-2">Recycling</td>
//             </tr>
//             <tr>
//               <td className="pl-4 p-2">- Autocatalyst</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {getRecyclingData(year, "autocatalyst")}
//                 </td>
//               ))}
//             </tr>
//             <tr>
//               <td className="pl-4 p-2">- Jewellery</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {getRecyclingData(year, "jewellery")}
//                 </td>
//               ))}
//             </tr>
//             <tr>
//               <td className="pl-4 p-2">- Industrial</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {getRecyclingData(year, "industrial")}
//                 </td>
//               ))}
//             </tr>
//             <tr className="font-bold">
//               <td className="pl-4 p-2">Total recycling</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {getRecyclingData(year, "total_recycling")}
//                 </td>
//               ))}
//             </tr>
//             <tr className="font-bold border-t border-gray-300">
//               <td className="p-2">Total supply</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {year >= 2025
//                     ? data.wpic_estimates[year].supply.total_supply
//                     : data.published_platinum[year].supply.total_supply}
//                 </td>
//               ))}
//             </tr>
//             <tr>
//               <td colSpan={9} className="font-bold p-2">
//                 PLATINUM DEMAND
//               </td>
//             </tr>
//             <tr>
//               <td className="p-2">Automotive</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {getDemandData(year, "automotive")}
//                 </td>
//               ))}
//             </tr>
//             <tr>
//               <td className="p-2">Jewellery</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {getDemandData(year, "jewellery")}
//                 </td>
//               ))}
//             </tr>
//             <tr>
//               <td className="p-2">Industrial</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {getDemandData(year, "industrial")}
//                 </td>
//               ))}
//             </tr>
//             <tr>
//               <td className="p-2">Total Investment</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {getInvestmentData(year, "total")}
//                 </td>
//               ))}
//             </tr>
//             <tr>
//               <td className="pl-4 p-2">- Bar and coin</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {getInvestmentData(year, "bar_and_coin")}
//                 </td>
//               ))}
//             </tr>
//             <tr>
//               <td className="pl-4 p-2">- China bars ≥500g</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {getInvestmentData(year, "china_bars")}
//                 </td>
//               ))}
//             </tr>
//             <tr>
//               <td className="pl-4 p-2">- ETF</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {getInvestmentData(year, "etf")}
//                 </td>
//               ))}
//             </tr>
//             <tr>
//               <td className="pl-4 p-2">- Stocks held by exchanges</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {getInvestmentData(year, "stocks_held_by_exchanges")}
//                 </td>
//               ))}
//             </tr>
//             <tr className="font-bold border-t border-gray-300">
//               <td className="p-2">Total demand</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {year >= 2025
//                     ? data.wpic_estimates[year].demand.total_demand
//                     : data.published_platinum[year].demand.total_demand}
//                 </td>
//               ))}
//             </tr>
//             <tr className="font-bold border-t border-gray-300">
//               <td className="p-2">Supply/demand balance</td>
//               {[...publishedYears, ...estimateYears].map((year) => (
//                 <td
//                   key={year}
//                   className={`text-right p-2 ${
//                     year >= 2025 ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {year >= 2025
//                     ? data.wpic_estimates[year].supply_demand_balance
//                     : data.published_platinum[year].supply_demand_balance}
//                 </td>
//               ))}
//             </tr>
//           </tbody>
//         </table>

//         <div className="text-xs mt-4 text-gray-500">
//           <p>
//             †The Platinum Quarterly report and data are prepared independently
//             for the WPIC by Metals Focus
//           </p>
//           <p>
//             ‡WPIC estimates and analysis are based upon publicly available
//             information
//           </p>
//           <p>
//             Source: Metals Focus from 2021 to 2024†, Company guidance, WPIC
//             Research from 2025†
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlatinumTable;
import React from "react";
import { data } from "../../public/static-data/demand-data";

const PlatinumTable = () => {
  const publishedYears = ["2021", "2022", "2023", "2024"];
  const estimateYears = ["2025", "2026", "2027", "2028"];

  const getSupplyData = (year, dataKey) => {
    const yearData =
      year >= 2025 ? data.wpic_estimates[year] : data.published_copper[year];
    return yearData.supply.refined_mine_production[dataKey];
  };

  const getRecyclingData = (year, dataKey) => {
    const yearData =
      year >= 2025 ? data.wpic_estimates[year] : data.published_copper[year];
    return yearData.supply.recycling[dataKey];
  };

  const getDemandData = (year, dataKey) => {
    const yearData =
      year >= 2025 ? data.wpic_estimates[year] : data.published_copper[year];
    return yearData.demand[dataKey];
  };

  const getInvestmentData = (year, dataKey) => {
    const yearData =
      year >= 2025 ? data.wpic_estimates[year] : data.published_copper[year];
    return yearData.demand.investment[dataKey];
  };

  return (
    // <div className="w-full overflow-x-auto">
    //   <div className="">
    //     <table className="w-auto text-sm border-collapse mx-auto">
    //       <thead>
    //         <tr className="bg-gray-50">
    //           <th className="text-left px-3 py-2 font-normal border border-gray-200 whitespace-nowrap"></th>
    //           <th
    //             className="text-center font-bold px-3 py-2 border border-gray-200"
    //             colSpan={4}
    //           >
    //             <div className="border-b border-gray-200 pb-1 bg-gray-50">
    //               PUBLISHED PLATINUM
    //             </div>
    //             <div className="grid grid-cols-4 pt-1">
    //               {publishedYears.map((year) => (
    //                 <div key={year} className="text-xs px-1">
    //                   {year}
    //                   {year === "2024" ? "f" : ""}
    //                 </div>
    //               ))}
    //             </div>
    //           </th>
    //           <th
    //             className="text-center font-bold text-accent px-2 py-2 border border-gray-200"
    //             colSpan={4}
    //           >
    //             <div className="border-b border-gray-200 pb-1 ">
    //               WPIC ESTIMATES‡
    //             </div>
    //             <div className="grid grid-cols-4 pt-1">
    //               {estimateYears.map((year) => (
    //                 <div key={year} className="text-xs px-1">
    //                   {year}f
    //                 </div>
    //               ))}
    //             </div>
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody className="text-sm">
    //         <tr className="bg-gray-50">
    //           <td
    //             colSpan={9}
    //             className="font-bold px-2 py-2 border border-gray-200 whitespace-nowrap"
    //           >
    //             PLATINUM SUPPLY
    //           </td>
    //         </tr>
    //         <tr>
    //           <td className="px-2 py-2 border border-gray-200 bg-gray-50 whitespace-nowrap">
    //             Refined mine production
    //           </td>
    //           {[...Array(8)].map((_, i) => (
    //             <td key={i} className="border border-gray-200 w-24"></td>
    //           ))}
    //         </tr>
    //         {[
    //           { label: "- South Africa", key: "south_africa" },
    //           { label: "- Zimbabwe", key: "zimbabwe" },
    //           { label: "- North America", key: "north_america" },
    //           { label: "- Russia", key: "russia" },
    //           { label: "- Other", key: "other" },
    //           {
    //             label: "- Producer inventory movement",
    //             key: "producer_inventory_movement",
    //           },
    //         ].map(({ label, key }) => (
    //           <tr key={key} className="hover:bg-gray-50">
    //             <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //               {label}
    //             </td>
    //             {[...publishedYears, ...estimateYears].map((year) => (
    //               <td
    //                 key={year}
    //                 className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                   year >= 2025 ? "text-accent" : ""
    //                 }`}
    //               >
    //                 {getSupplyData(year, key)}
    //               </td>
    //             ))}
    //           </tr>
    //         ))}

    //         <tr className="font-semibold bg-gray-50">
    //           <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //             Total mining supply
    //           </td>
    //           {[...publishedYears, ...estimateYears].map((year) => (
    //             <td
    //               key={year}
    //               className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                 year >= 2025 ? "text-accent" : ""
    //               }`}
    //             >
    //               {getSupplyData(year, "total_mining_supply")}
    //             </td>
    //           ))}
    //         </tr>

    //         <tr>
    //           <td className="px-2 py-2 border border-gray-200 bg-gray-50 whitespace-nowrap">
    //             Recycling
    //           </td>
    //           {[...Array(8)].map((_, i) => (
    //             <td key={i} className="border border-gray-200 w-24"></td>
    //           ))}
    //         </tr>

    //         {[
    //           { label: "- Autocatalyst", key: "autocatalyst" },
    //           { label: "- Jewellery", key: "jewellery" },
    //           { label: "- Industrial", key: "industrial" },
    //         ].map(({ label, key }) => (
    //           <tr key={key} className="hover:bg-gray-50">
    //             <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //               {label}
    //             </td>
    //             {[...publishedYears, ...estimateYears].map((year) => (
    //               <td
    //                 key={year}
    //                 className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                   year >= 2025 ? "text-accent" : ""
    //                 }`}
    //               >
    //                 {getRecyclingData(year, key)}
    //               </td>
    //             ))}
    //           </tr>
    //         ))}

    //         <tr className="font-bold bg-gray-50">
    //           <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //             Total recycling
    //           </td>
    //           {[...publishedYears, ...estimateYears].map((year) => (
    //             <td
    //               key={year}
    //               className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                 year >= 2025 ? "text-accent" : ""
    //               }`}
    //             >
    //               {getRecyclingData(year, "total_recycling")}
    //             </td>
    //           ))}
    //         </tr>

    //         <tr className="font-bold bg-gray-100">
    //           <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //             Total supply
    //           </td>
    //           {[...publishedYears, ...estimateYears].map((year) => (
    //             <td
    //               key={year}
    //               className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                 year >= 2025 ? "text-accent" : ""
    //               }`}
    //             >
    //               {year >= 2025
    //                 ? data.wpic_estimates[year].supply.total_supply
    //                 : data.published_platinum[year].supply.total_supply}
    //             </td>
    //           ))}
    //         </tr>

    //         <tr className="bg-gray-50">
    //           <td
    //             colSpan={9}
    //             className="font-bold px-2 py-2 border border-gray-200 whitespace-nowrap"
    //           >
    //             PLATINUM DEMAND
    //           </td>
    //         </tr>

    //         {[
    //           { label: "Automotive", key: "automotive" },
    //           { label: "Jewellery", key: "jewellery" },
    //           { label: "Industrial", key: "industrial" },
    //         ].map(({ label, key }) => (
    //           <tr key={key} className="hover:bg-gray-50 font-bold">
    //             <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //               {label}
    //             </td>
    //             {[...publishedYears, ...estimateYears].map((year) => (
    //               <td
    //                 key={year}
    //                 className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                   year >= 2025 ? "text-accent" : ""
    //                 }`}
    //               >
    //                 {getDemandData(year, key)}
    //               </td>
    //             ))}
    //           </tr>
    //         ))}

    //         <tr className="hover:bg-gray-50 font-bold">
    //           <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //             Total Investment
    //           </td>
    //           {[...publishedYears, ...estimateYears].map((year) => (
    //             <td
    //               key={year}
    //               className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                 year >= 2025 ? "text-accent" : ""
    //               }`}
    //             >
    //               {getInvestmentData(year, "total")}
    //             </td>
    //           ))}
    //         </tr>

    //         {[
    //           { label: "- Bar and coin", key: "bar_and_coin" },
    //           { label: "- China bars ≥500g", key: "china_bars" },
    //           { label: "- ETF", key: "etf" },
    //           {
    //             label: "- Stocks held by exchanges",
    //             key: "stocks_held_by_exchanges",
    //           },
    //         ].map(({ label, key }) => (
    //           <tr key={key} className="hover:bg-gray-50">
    //             <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //               {label}
    //             </td>
    //             {[...publishedYears, ...estimateYears].map((year) => (
    //               <td
    //                 key={year}
    //                 className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                   year >= 2025 ? "text-accent0" : ""
    //                 }`}
    //               >
    //                 {getInvestmentData(year, key)}
    //               </td>
    //             ))}
    //           </tr>
    //         ))}

    //         <tr className="font-bold bg-gray-100">
    //           <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //             Total demand
    //           </td>
    //           {[...publishedYears, ...estimateYears].map((year) => (
    //             <td
    //               key={year}
    //               className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                 year >= 2025 ? "text-accent" : ""
    //               }`}
    //             >
    //               {year >= 2025
    //                 ? data.wpic_estimates[year].demand.total_demand
    //                 : data.published_platinum[year].demand.total_demand}
    //             </td>
    //           ))}
    //         </tr>

    //         <tr className="font-bold bg-gray-100">
    //           <td className="px-2 py-2 border border-gray-200 whitespace-nowrap">
    //             Supply/demand balance
    //           </td>
    //           {[...publishedYears, ...estimateYears].map((year) => (
    //             <td
    //               key={year}
    //               className={`text-right px-2 py-2 border border-gray-200 w-24 ${
    //                 year >= 2025 ? "text-accent" : ""
    //               }`}
    //             >
    //               {year >= 2025
    //                 ? data.wpic_estimates[year].supply_demand_balance
    //                 : data.published_platinum[year].supply_demand_balance}
    //             </td>
    //           ))}
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
    // </div>

    //..............................responsive

    <div className="w-full">
      <div className="overflow-x-auto md:overflow-x-visible">
        <table className="w-full text-xs md:text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-1 md:px-3 md:py-2 font-normal border border-gray-200 whitespace-nowrap"></th>
              <th
                className="text-center font-bold p-1 md:px-3 md:py-2 border border-gray-200"
                colSpan={4}
              >
                <div className="border-b border-gray-200 pb-1 bg-gray-50">
                  PUBLISHED PLATINUM
                </div>
                <div className="grid grid-cols-4 pt-1">
                  {publishedYears.map((year) => (
                    <div key={year} className="text-xs px-0.5 md:px-1">
                      {year}
                      {year === "2024" ? "f" : ""}
                    </div>
                  ))}
                </div>
              </th>
              <th
                className="text-center font-bold text-accent p-1 md:px-2 md:py-2 border border-gray-200"
                colSpan={4}
              >
                <div className="border-b border-gray-200 pb-1">
                  WPIC ESTIMATES‡
                </div>
                <div className="grid grid-cols-4 pt-1">
                  {estimateYears.map((year) => (
                    <div key={year} className="text-xs px-0.5 md:px-1">
                      {year}f
                    </div>
                  ))}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-sm">
            <tr className="bg-gray-50">
              <td
                colSpan={9}
                className="font-bold p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap"
              >
                PLATINUM SUPPLY
              </td>
            </tr>
            <tr>
              <td className="p-1 md:px-2 md:py-2 border border-gray-200 bg-gray-50 whitespace-nowrap">
                Refined mine production
              </td>
              {[...Array(8)].map((_, i) => (
                <td
                  key={i}
                  className="border border-gray-200 min-w-[3rem] md:w-24"
                ></td>
              ))}
            </tr>
            {[
              { label: "- South Africa", key: "south_africa" },
              { label: "- Zimbabwe", key: "zimbabwe" },
              { label: "- North America", key: "north_america" },
              { label: "- Russia", key: "russia" },
              { label: "- Other", key: "other" },
              {
                label: "- Producer inventory movement",
                key: "producer_inventory_movement",
              },
            ].map(({ label, key }) => (
              <tr key={key} className="hover:bg-gray-50">
                <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                  {label}
                </td>
                {[...publishedYears, ...estimateYears].map((year) => (
                  <td
                    key={year}
                    className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                      year >= 2025 ? "text-accent" : ""
                    }`}
                  >
                    {getSupplyData(year, key)}
                  </td>
                ))}
              </tr>
            ))}

            <tr className="font-semibold bg-gray-50">
              <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                Total mining supply
              </td>
              {[...publishedYears, ...estimateYears].map((year) => (
                <td
                  key={year}
                  className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                    year >= 2025 ? "text-accent" : ""
                  }`}
                >
                  {getSupplyData(year, "total_mining_supply")}
                </td>
              ))}
            </tr>

            <tr>
              <td className="p-1 md:px-2 md:py-2 border border-gray-200 bg-gray-50 whitespace-nowrap">
                Recycling
              </td>
              {[...Array(8)].map((_, i) => (
                <td
                  key={i}
                  className="border border-gray-200 min-w-[3rem] md:w-24"
                ></td>
              ))}
            </tr>

            {[
              { label: "- Autocatalyst", key: "autocatalyst" },
              { label: "- Jewellery", key: "jewellery" },
              { label: "- Industrial", key: "industrial" },
            ].map(({ label, key }) => (
              <tr key={key} className="hover:bg-gray-50">
                <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                  {label}
                </td>
                {[...publishedYears, ...estimateYears].map((year) => (
                  <td
                    key={year}
                    className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                      year >= 2025 ? "text-accent" : ""
                    }`}
                  >
                    {getRecyclingData(year, key)}
                  </td>
                ))}
              </tr>
            ))}

            <tr className="font-bold bg-gray-50">
              <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                Total recycling
              </td>
              {[...publishedYears, ...estimateYears].map((year) => (
                <td
                  key={year}
                  className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                    year >= 2025 ? "text-accent" : ""
                  }`}
                >
                  {getRecyclingData(year, "total_recycling")}
                </td>
              ))}
            </tr>

            <tr className="font-bold bg-gray-100">
              <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                Total supply
              </td>
              {[...publishedYears, ...estimateYears].map((year) => (
                <td
                  key={year}
                  className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                    year >= 2025 ? "text-accent" : ""
                  }`}
                >
                  {year >= 2025
                    ? data.wpic_estimates[year].supply.total_supply
                    : data.published_copper[year].supply.total_supply}
                </td>
              ))}
            </tr>

            <tr className="bg-gray-50">
              <td
                colSpan={9}
                className="font-bold p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap"
              >
                PLATINUM DEMAND
              </td>
            </tr>

            {[
              { label: "Automotive", key: "automotive" },
              { label: "Jewellery", key: "jewellery" },
              { label: "Industrial", key: "industrial" },
            ].map(({ label, key }) => (
              <tr key={key} className="hover:bg-gray-50 font-bold">
                <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                  {label}
                </td>
                {[...publishedYears, ...estimateYears].map((year) => (
                  <td
                    key={year}
                    className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                      year >= 2025 ? "text-accent" : ""
                    }`}
                  >
                    {getDemandData(year, key)}
                  </td>
                ))}
              </tr>
            ))}

            <tr className="hover:bg-gray-50 font-bold">
              <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                Total Investment
              </td>
              {[...publishedYears, ...estimateYears].map((year) => (
                <td
                  key={year}
                  className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                    year >= 2025 ? "text-accent" : ""
                  }`}
                >
                  {getInvestmentData(year, "total")}
                </td>
              ))}
            </tr>

            {[
              { label: "- Bar and coin", key: "bar_and_coin" },
              { label: "- China bars ≥500g", key: "china_bars" },
              { label: "- ETF", key: "etf" },
              {
                label: "- Stocks held by exchanges",
                key: "stocks_held_by_exchanges",
              },
            ].map(({ label, key }) => (
              <tr key={key} className="hover:bg-gray-50">
                <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                  {label}
                </td>
                {[...publishedYears, ...estimateYears].map((year) => (
                  <td
                    key={year}
                    className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                      year >= 2025 ? "text-accent" : ""
                    }`}
                  >
                    {getInvestmentData(year, key)}
                  </td>
                ))}
              </tr>
            ))}

            <tr className="font-bold bg-gray-100">
              <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                Total demand
              </td>
              {[...publishedYears, ...estimateYears].map((year) => (
                <td
                  key={year}
                  className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                    year >= 2025 ? "text-accent" : ""
                  }`}
                >
                  {year >= 2025
                    ? data.wpic_estimates[year].demand.total_demand
                    : data.published_copper[year].demand.total_demand}
                </td>
              ))}
            </tr>

            <tr className="font-bold bg-gray-100">
              <td className="p-1 md:px-2 md:py-2 border border-gray-200 whitespace-nowrap">
                Supply/demand balance
              </td>
              {[...publishedYears, ...estimateYears].map((year) => (
                <td
                  key={year}
                  className={`text-right p-1 md:px-2 md:py-2 border border-gray-200 min-w-[3rem] md:w-24 ${
                    year >= 2025 ? "text-accent" : ""
                  }`}
                >
                  {year >= 2025
                    ? data.wpic_estimates[year].supply_demand_balance
                    : data.published_copper[year].supply_demand_balance}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlatinumTable;
