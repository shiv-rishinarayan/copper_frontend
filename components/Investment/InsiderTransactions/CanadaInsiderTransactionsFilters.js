// import React, { useState } from "react";

// const CanadaInsiderTransactionsFilters = ({
//   selectedInsiderName,
//   selectedTradeType,
//   selectedStartDate,
//   selectedEndDate,
//   handleInsiderNameChange,
//   handleTradeTypeChange,
//   handleStartDateChange,
//   handleEndDateChange,
//   handleSymbolChange,
// }) => {
//   // List of insider names
//   const insiderNames = [
//     "All",
//     "Parker Thomas H",
//     "ESTEPA, JORGE",
//     "Walker Kathy E",
//     "Parker, Thomas Howard",
//     "Huber Gary C",
//     "Walker, Kathy E.",
//     "Goplerud Penne A",
//     "Huber, Gary Chase",
//     "Henderson, Marc Charles",
//     "Goplerud, Penne Ann",
//   ];

//   // List of trade types
//   const tradeTypes = ["All", "Purchase", "Sale"];

//   // Only US symbols
//   const symbols = [
//     "All",
//     "BRVO",
//     "NICU",
//     "CNRI",
//     "SX",
//     "GENM",
//     "ELR",
//     "PPP",
//     "PGE",
//     "VO",
//     "AIR",
//     "GT",
//     "IVN",
//   ];

//   return (
//     <div className="overflow-x-auto pb-2">
//       <div className="flex gap-x-4 flex-nowrap mt-3">
//         {/* Filter by Symbol */}
//         <div className="relative w-28 flex flex-col mb-6">
//           <label
//             htmlFor="symbol"
//             className="absolute top-[-8px] left-[8px] px-1 bg-white text-accent text-[0.7rem] rounded-lg"
//           >
//             Symbol
//           </label>
//           <select
//             id="symbol"
//             onChange={handleSymbolChange}
//             className="p-2 bg-white text-black/90 rounded border border-date/10 focus:outline-none"
//           >
//             {symbols.map((symbol) => (
//               <option key={symbol} value={symbol}>
//                 {symbol}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Filter by Trade Type */}
//         <div className="relative w-28 flex flex-col mb-6">
//           <label
//             htmlFor="tradeType"
//             className="absolute top-[-8px] left-[8px] px-1 bg-white text-accent text-[0.7rem] rounded-lg"
//           >
//             Trade Type
//           </label>
//           <select
//             id="tradeType"
//             value={selectedTradeType}
//             onChange={handleTradeTypeChange}
//             className="p-2 bg-white text-black/90 rounded border border-date/10 focus:outline-none"
//           >
//             {tradeTypes.map((type) => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Filter by Start Date */}
//         <div className="relative w-34 flex flex-col mb-6">
//           <label
//             htmlFor="startDate"
//             className="absolute top-[-8px] left-[8px] px-1 bg-white text-accent text-[0.7rem] rounded-lg"
//           >
//             Start Date
//           </label>
//           <input
//             type="date"
//             id="startDate"
//             value={selectedStartDate}
//             onChange={handleStartDateChange}
//             className="p-2 bg-white text-black/90 rounded border border-date/10 focus:outline-none"
//           />
//         </div>

//         {/* Filter by End Date */}
//         <div className="relative w-34 flex flex-col mb-6">
//           <label
//             htmlFor="endDate"
//             className="absolute top-[-8px] left-[8px] px-1 bg-white text-accent text-[0.7rem] rounded-lg"
//           >
//             End Date
//           </label>
//           <input
//             type="date"
//             id="endDate"
//             value={selectedEndDate}
//             onChange={handleEndDateChange}
//             className="p-2 bg-white text-black/90 rounded border border-date/10 focus:outline-none"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CanadaInsiderTransactionsFilters;

import React from "react";

const CanadaInsiderTransactionsFilters = ({
  selectedTradeType,
  selectedSymbol,
  selectedStartDate,
  selectedEndDate,
  handleTradeTypeChange,
  handleSymbolChange,
  handleStartDateChange,
  handleEndDateChange,
  symbolOptions,
  tradeTypeOptions,
}) => {
  return (
    <div className="overflow-x-auto pb-2 custom-scrollbar-hidden">
      <div className="flex gap-x-4  mt-3">
        {/* Filter by Symbol */}
        <div className="w-28 flex flex-col mb-6">
          <label
            htmlFor="symbol"
            className="mb-1 text-accent text-[0.75rem] font-medium"
          >
            Symbol
          </label>
          <select
            id="symbol"
            value={selectedSymbol}
            onChange={handleSymbolChange}
            className="p-2 bg-white text-black/90 rounded border border-date/10 focus:outline-none"
          >
            {symbolOptions.map((symbol) => (
              <option key={symbol} value={symbol}>
                {symbol}
              </option>
            ))}
          </select>
        </div>

        {/* Filter by Trade Type */}
        <div className="w-28 flex flex-col mb-6">
          <label
            htmlFor="tradeType"
            className="mb-1 text-accent text-[0.75rem] font-medium"
          >
            Trade Type
          </label>
          <select
            id="tradeType"
            value={selectedTradeType}
            onChange={handleTradeTypeChange}
            className="p-2 bg-white text-black/90 rounded border border-date/10 focus:outline-none"
          >
            {tradeTypeOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Filter by Start Date */}
        <div className="w-34 flex flex-col mb-6">
          <label
            htmlFor="startDate"
            className="mb-1 text-accent text-[0.75rem] font-medium"
          >
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={selectedStartDate}
            onChange={handleStartDateChange}
            className="p-2 bg-white text-black/90 rounded border border-date/10 focus:outline-none"
          />
        </div>

        {/* Filter by End Date */}
        <div className="w-34 flex flex-col mb-6">
          <label
            htmlFor="endDate"
            className="mb-1 text-accent text-[0.75rem] font-medium"
          >
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            value={selectedEndDate}
            onChange={handleEndDateChange}
            className="p-2 bg-white text-black/90 rounded border border-date/10 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default CanadaInsiderTransactionsFilters;
