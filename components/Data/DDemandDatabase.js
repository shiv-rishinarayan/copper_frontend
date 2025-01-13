// import React from "react";
// import { useRouter } from "next/router";
// import { tables } from "../../public/static-data/DemandDatabaseTable";
// const DDemandDatabase = () => {
//   const router = useRouter();

//   const charts = [
//     {
//       id: 1,
//       image: "/data-demand/AnnualPlatinumSupplyDemandBalance(koz).jpg",
//       title: "Annual Platinum Supply / Demand Balance (koz)",
//       source: "SFA (Oxford) 2014 - 2018, Metals Focus 2019 - 2025f",
//       path: "/DataDemandDatabase/1",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 2,
//       image: "/data-demand/AnnualTotalDemandAndChanges2023To2025f(koz).jpg",
//       title: "Annual Total Demand And Changes 2023 To 2025f (koz)",
//       source: "Metals Focus Prepared For World Pt Investment Council",
//       path: "/DataDemandDatabase/2",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 3,
//       image: "/data-demand/ChangesInDemandByCategory,2023Vs2024f.jpg",
//       title: "Changes In Demand By Category, 2023 vs. 2024f",
//       source: "Metals Focus Prepared For World Pt Investment Council",
//       path: "/DataDemandDatabase/3",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 4,
//       image: "/data-demand/SupplyDemandBalanceBalance,koz,Q32024.jpg",
//       title: "Supply Demand Balance Balance, koz, Q3 2024",
//       source: "Metals Focus Prepared For World Pt Investment Council",
//       path: "/DataDemandDatabase/4",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 5,
//       image: "/data-demand/SupplyDemandBalance,koz,2013-2024f.jpg",
//       title: "Supply Demand Balance, koz, 2013-2024f",
//       source: "SFA (Oxford) 2013 - 2018, Metals Focus 2019 - 2024f",
//       path: "/DataDemandDatabase/5",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 6,
//       image: "/data-demand/PlatinumInvestment,koz.jpg",
//       title: "Platinum Investment, koz",
//       source: "Metals Focus Prepared For World Pt Investment Council",
//       path: "/DataDemandDatabase/6",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 7,
//       image: "/data-demand/PlatinumDemand,koz.jpg",
//       title: "Platinum Demand, koz",
//       source: "Metals Focus Prepared For World Pt Investment Council",
//       path: "/DataDemandDatabase/7",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 8,
//       image: "/data-demand/ETFHoldingsByRegion.jpg",
//       title: "ETF Holdings By Region",
//       source: "Metals Focus Prepared For World Pt Investment Council",
//       path: "/DataDemandDatabase/8",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 9,
//       image: "/data-demand/ChinasTotalBarAndCoinDemand.jpg",
//       title: "China's Total Bar And Coin Demand",
//       source: "Metals Focus",
//       path: "/DataDemandDatabase/9",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 10,
//       image: "/data-demand/DemandEndUseShares,2023Vs2024f.jpg",
//       title: "Demand End Use Shares, 2023 vs. 2024f",
//       source: "Metals Focus Prepared For World Pt Investment Council",
//       path: "/DataDemandDatabase/10",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 11,
//       image: "/data-demand/FourCoreSegmentsOfPlatinumDemand.jpg",
//       title: "Four Core Segments Of Platinum Demand",
//       source: "",
//       path: "/DataDemandDatabase/11",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 12,
//       image: "/data-demand/ShareOfAutomotivePGMDemandByMetal.jpg",
//       title: "Share Of Automotive PGM Demand By Metal",
//       source: "PGM Market Report",
//       path: "/DataDemandDatabase/12",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 13,
//       image: "/data-demand/IndustrialPGMDemandByMetal.jpg",
//       title: "Industrial PGM Demand By Metal",
//       source: "PGM Market Report",
//       path: "/DataDemandDatabase/13",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//   ];

//   const handleNavigation = (path) => {
//     router.push(path);
//   };
//   return (
//     <div className="px-3 md:px-12 py-5 md:py-5">
//       <div className="mb-9 md:mb-16">
//         <h1 className="cambay text-[22px] sm:text-2xl font-semibold">
//           Demand Database
//         </h1>
//         <p className="text-black/80 mt-2">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
//           explicabo eum nulla non sint voluptatibus voluptas animi deserunt quo,
//           veniam, ex exercitationem distinctio odio, reiciendis quibusdam
//           expedita adipisci iste aperiam!
//         </p>
//       </div>

//       {/* Charts Section */}
//       <div className="mt-1 md:mt-5">
//         <div className="w-full rounded-md">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14">
//             {charts.map((chart) => (
//               <div
//                 key={chart.id}
//                 onClick={() => handleNavigation(chart.path)}
//                 className="block cursor-pointer"
//               >
//                 <div className="-ml-2 w-full h-[200px] md:h-[300px] flex items-center justify-center">
//                   <img
//                     src={chart.image}
//                     alt={`Chart ${chart.id}`}
//                     className="w-full h-full object-contain rounded-lg"
//                   />
//                 </div>
//                 <h3 className=" font-medium text-black/90 text-lg lg:text-xl">
//                   {chart.title}
//                 </h3>
//                 <p className="mt-1.5 mb-1 font-medium text-black/50 text-sm">
//                   Source:{" "}
//                   <span className="hover:text-accent transition-all duration-200 text-sm">
//                     {chart.source}
//                   </span>
//                 </p>
//                 <p className="mt-1.5 text-black/80 text-[15px]">
//                   {chart.description.substring(0, 120)}...
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Tables Section */}
//       <div className="mt-16">
//         <h2 className="cambay text-xl sm:text-2xl font-semibold mb-5">
//           Industrial Demand Data Tables
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14">
//           {tables.map((table) => (
//             <div
//               key={table.id}
//               onClick={() => handleNavigation(table.path)}
//               className="block cursor-pointer"
//             >
//               <div className="w-full bg-white rounded-lg shadow-sm p-4 h-[295px] flex flex-col">
//                 <h3 className="font-medium text-black/90 text-lg mb-3">
//                   {table.title}
//                 </h3>
//                 <div className="overflow-hidden flex-grow">
//                   <table className="w-full text-sm">
//                     <thead>
//                       <tr>
//                         {table.data[0].map((header, index) => (
//                           <th
//                             key={index}
//                             className="text-left p-2 border-b font-medium text-black/70"
//                           >
//                             {header}
//                           </th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {table.data.slice(1, 6).map((row, rowIndex) => (
//                         <tr key={rowIndex}>
//                           {row.map((cell, cellIndex) => (
//                             <td
//                               key={cellIndex}
//                               className={`p-2 border-b text-black/80 ${
//                                 cellIndex === 0 ? "font-medium" : ""
//                               }`}
//                             >
//                               {cell}
//                             </td>
//                           ))}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default DDemandDatabase;

//......................new.............

// import React from "react";
// import { useRouter } from "next/router";
// import { tables } from "../../public/static-data/DemandDatabaseTable";

// const DDemandDatabase = () => {
//   const router = useRouter();

//   const charts = [
//     {
//       id: 1,
//       image: "/data-demand/AnnualPlatinumSupplyDemandBalance(koz).jpg",
//       title: "Annual Platinum Supply / Demand Balance (koz)",
//       source: "SFA (Oxford) 2014 - 2018, Metals Focus 2019 - 2025f",
//       path: "/DataDemandDatabase/1",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 2,
//       image: "/data-demand/AnnualTotalDemandAndChanges2023To2025f(koz).jpg",
//       title: "Annual Total Demand And Changes 2023 To 2025f (koz)",
//       source: "Metals Focus Prepared For World Pt Investment Council",
//       path: "/DataDemandDatabase/2",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 3,
//       image: "/data-demand/ChangesInDemandByCategory,2023Vs2024f.jpg",
//       title: "Changes In Demand By Category, 2023 vs. 2024f",
//       source: "Metals Focus Prepared For World Pt Investment Council",
//       path: "/DataDemandDatabase/3",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 4,
//       image: "/data-demand/SupplyDemandBalanceBalance,koz,Q32024.jpg",
//       title: "Supply Demand Balance Balance, koz, Q3 2024",
//       source: "Metals Focus Prepared For World Pt Investment Council",
//       path: "/DataDemandDatabase/4",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 5,
//       image: "/data-demand/SupplyDemandBalance,koz,2013-2024f.jpg",
//       title: "Supply Demand Balance, koz, 2013-2024f",
//       source: "SFA (Oxford) 2013 - 2018, Metals Focus 2019 - 2024f",
//       path: "/DataDemandDatabase/5",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 6,
//       image: "/data-demand/PlatinumInvestment,koz.jpg",
//       title: "Platinum Investment, koz",
//       source: "Metals Focus Prepared For World Pt Investment Council",
//       path: "/DataDemandDatabase/6",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 7,
//       image: "/data-demand/PlatinumDemand,koz.jpg",
//       title: "Platinum Demand, koz",
//       source: "Metals Focus Prepared For World Pt Investment Council",
//       path: "/DataDemandDatabase/7",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 8,
//       image: "/data-demand/ETFHoldingsByRegion.jpg",
//       title: "ETF Holdings By Region",
//       source: "Metals Focus Prepared For World Pt Investment Council",
//       path: "/DataDemandDatabase/8",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 9,
//       image: "/data-demand/ChinasTotalBarAndCoinDemand.jpg",
//       title: "China's Total Bar And Coin Demand",
//       source: "Metals Focus",
//       path: "/DataDemandDatabase/9",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 10,
//       image: "/data-demand/DemandEndUseShares,2023Vs2024f.jpg",
//       title: "Demand End Use Shares, 2023 vs. 2024f",
//       source: "Metals Focus Prepared For World Pt Investment Council",
//       path: "/DataDemandDatabase/10",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 11,
//       image: "/data-demand/FourCoreSegmentsOfPlatinumDemand.jpg",
//       title: "Four Core Segments Of Platinum Demand",
//       source: "",
//       path: "/DataDemandDatabase/11",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 12,
//       image: "/data-demand/ShareOfAutomotivePGMDemandByMetal.jpg",
//       title: "Share Of Automotive PGM Demand By Metal",
//       source: "PGM Market Report",
//       path: "/DataDemandDatabase/12",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//     {
//       id: 13,
//       image: "/data-demand/IndustrialPGMDemandByMetal.jpg",
//       title: "Industrial PGM Demand By Metal",
//       source: "PGM Market Report",
//       path: "/DataDemandDatabase/13",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
//     },
//   ];

//   const handleNavigation = (path) => {
//     router.push(path);
//   };

//   return (
//     <div className="px-3 md:px-12 py-5 md:py-5">
//       <div className="mb-9 md:mb-16">
//         <h1 className="cambay text-[22px] sm:text-2xl font-semibold">
//           Demand Database
//         </h1>
//         <p className="text-black/80 mt-2">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
//           explicabo eum nulla non sint voluptatibus voluptas animi deserunt quo,
//           veniam, ex exercitationem distinctio odio, reiciendis quibusdam
//           expedita adipisci iste aperiam!
//         </p>
//       </div>

//       {/* Charts Section */}
//       <div className="mt-1 md:mt-5">
//         <div className="w-full rounded-md">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14">
//             {charts.map((chart) => (
//               <div
//                 key={chart.id}
//                 onClick={() => handleNavigation(chart.path)}
//                 className="block cursor-pointer"
//               >
//                 <div className="-ml-2 w-full h-[200px] md:h-[300px] flex items-center justify-center">
//                   <img
//                     src={chart.image}
//                     alt={`Chart ${chart.id}`}
//                     className="w-full h-full object-contain rounded-lg"
//                   />
//                 </div>
//                 <h3 className="font-medium text-black/90 text-lg lg:text-xl">
//                   {chart.title}
//                 </h3>
//                 <p className="mt-1.5 mb-1 font-medium text-black/50 text-sm">
//                   Source:{" "}
//                   <span className="hover:text-accent transition-all duration-200 text-sm">
//                     {chart.source}
//                   </span>
//                 </p>
//                 <p className="mt-1.5 text-black/80 text-[15px]">
//                   {chart.description.substring(0, 120)}...
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Tables Section */}
//       {tables.map((category, categoryIndex) => (
//         <div key={categoryIndex} className="mt-16">
//           <h2 className="cambay text-xl sm:text-2xl font-semibold mb-5">
//             {category.category}
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14">
//             {category.tables.map((table) => (
//               <div
//                 key={table.id}
//                 onClick={() => handleNavigation(table.path)}
//                 className="block cursor-pointer"
//               >
//                 <div className="w-full bg-white rounded-lg shadow-sm p-4 h-[300px] flex flex-col">
//                   <h3 className="font-medium text-black/90 text-lg mb-3">
//                     {table.title}
//                   </h3>
//                   <div className="overflow-hidden flex-grow">
//                     <table className="w-full text-sm">
//                       <thead>
//                         <tr>
//                           {table.data[0].map((header, index) => (
//                             <th
//                               key={index}
//                               className="text-left p-2 border-b font-medium text-black/70"
//                             >
//                               {header}
//                             </th>
//                           ))}
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {table.data.slice(1, 7).map((row, rowIndex) => (
//                           <tr key={rowIndex}>
//                             {row.map((cell, cellIndex) => (
//                               <td
//                                 key={cellIndex}
//                                 className={`p-2 border-b text-black/80 ${
//                                   cellIndex === 0 ? "font-medium" : ""
//                                 }`}
//                               >
//                                 {cell}
//                               </td>
//                             ))}
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DDemandDatabase;

//..................................new

import React from "react";
import { useRouter } from "next/router";
import { tables } from "../../public/static-data/Table Data/DemandDatabaseTable";

const DDemandDatabase = () => {
  const router = useRouter();

  const charts = [
    {
      id: 1,
      image: "/data-demand/AnnualPlatinumSupplyDemandBalance(koz).jpg",
      title: "Annual Platinum Supply / Demand Balance (koz)",
      source: "SFA (Oxford) 2014 - 2018, Metals Focus 2019 - 2025f",
      path: "/DataDemandDatabase/1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 2,
      image: "/data-demand/AnnualTotalDemandAndChanges2023To2025f(koz).jpg",
      title: "Annual Total Demand And Changes 2023 To 2025f (koz)",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 3,
      image: "/data-demand/ChangesInDemandByCategory,2023Vs2024f.jpg",
      title: "Changes In Demand By Category, 2023 vs. 2024f",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 4,
      image: "/data-demand/SupplyDemandBalanceBalance,koz,Q32024.jpg",
      title: "Supply Demand Balance Balance, koz, Q3 2024",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 5,
      image: "/data-demand/SupplyDemandBalance,koz,2013-2024f.jpg",
      title: "Supply Demand Balance, koz, 2013-2024f",
      source: "SFA (Oxford) 2013 - 2018, Metals Focus 2019 - 2024f",
      path: "/DataDemandDatabase/5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 6,
      image: "/data-demand/PlatinumInvestment,koz.jpg",
      title: "Platinum Investment, koz",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 7,
      image: "/data-demand/PlatinumDemand,koz.jpg",
      title: "Platinum Demand, koz",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/7",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 8,
      image: "/data-demand/ETFHoldingsByRegion.jpg",
      title: "ETF Holdings By Region",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/8",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 9,
      image: "/data-demand/ChinasTotalBarAndCoinDemand.jpg",
      title: "China's Total Bar And Coin Demand",
      source: "Metals Focus",
      path: "/DataDemandDatabase/9",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 10,
      image: "/data-demand/DemandEndUseShares,2023Vs2024f.jpg",
      title: "Demand End Use Shares, 2023 vs. 2024f",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/10",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 11,
      image: "/data-demand/FourCoreSegmentsOfPlatinumDemand.jpg",
      title: "Four Core Segments Of Platinum Demand",
      source: "",
      path: "/DataDemandDatabase/11",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 12,
      image: "/data-demand/ShareOfAutomotivePGMDemandByMetal.jpg",
      title: "Share Of Automotive PGM Demand By Metal",
      source: "PGM Market Report",
      path: "/DataDemandDatabase/12",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 13,
      image: "/data-demand/IndustrialPGMDemandByMetal.jpg",
      title: "Industrial PGM Demand By Metal",
      source: "PGM Market Report",
      path: "/DataDemandDatabase/13",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
  ];

  const handleNavigation = (path) => {
    if (
      path.includes("DataDemandDatabase/platinum") ||
      path.includes("DataDemandDatabase/palladium") ||
      path.includes("DataDemandDatabase/rhodium") ||
      path.includes("DataDemandDatabase/ruthenium") ||
      path.includes("DataDemandDatabase/iridium")
    ) {
      // Extract the table ID from the tables array
      const allTables = tables.reduce(
        (acc, category) => [...acc, ...category.tables],
        []
      );
      const tableData = allTables.find((table) => table.path === path);
      if (tableData) {
        router.push(`/DataDemandDatabase/table/${tableData.id}`);
      }
    } else {
      router.push(path);
    }
  };

  return (
    <div className="px-3 md:px-12 py-5 md:py-5">
      <div className="mb-9 md:mb-16">
        <h1 className="cambay text-[22px] sm:text-2xl font-semibold">
          Demand Database
        </h1>
        <p className="text-black/80 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          explicabo eum nulla non sint voluptatibus voluptas animi deserunt quo,
          veniam, ex exercitationem distinctio odio, reiciendis quibusdam
          expedita adipisci iste aperiam!
        </p>
      </div>

      {/* Charts Section */}
      <div className="mt-1 md:mt-5">
        <div className="w-full rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14">
            {charts.map((chart) => (
              <div
                key={chart.id}
                onClick={() => handleNavigation(chart.path)}
                className="block cursor-pointer"
              >
                <div className="-ml-2 w-full h-[200px] md:h-[300px] flex items-center justify-center">
                  <img
                    src={chart.image}
                    alt={`Chart ${chart.id}`}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <h3 className="font-medium text-black/90 text-lg lg:text-xl">
                  {chart.title}
                </h3>
                <p className="mt-1.5 mb-1 font-medium text-black/50 text-sm">
                  Source:{" "}
                  <span className="hover:text-accent transition-all duration-200 text-sm">
                    {chart.source}
                  </span>
                </p>
                <p className="mt-1.5 text-black/80 text-[15px]">
                  {chart.description.substring(0, 120)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tables Section */}
      {tables.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mt-16">
          <h2 className="cambay text-xl sm:text-2xl font-semibold mb-5">
            {category.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14">
            {category.tables.map((table) => (
              <div
                key={table.id}
                onClick={() => handleNavigation(table.path)}
                className="block cursor-pointer  transition-shadow duration-200"
              >
                <div className="w-full bg-white rounded-lg shadow-sm p-4 h-[305px] flex flex-col">
                  <h3 className="font-medium text-black/90 text-lg mb-3">
                    {table.title}
                  </h3>
                  <div className="overflow-hidden flex-grow">
                    <table className="w-full text-sm">
                      <thead>
                        <tr>
                          {table.data[0].map((header, index) => (
                            <th
                              key={index}
                              className="text-left p-2 border-b font-medium text-black/70"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.data.slice(1, 8).map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className={`p-2 border-b text-black/80 ${
                                  cellIndex === 0 ? "font-medium" : ""
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DDemandDatabase;
