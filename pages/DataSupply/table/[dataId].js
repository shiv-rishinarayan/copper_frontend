// import { useRouter } from "next/router";
// import DataBreadcrumb from "@/components/Data/DataBreadcrumb";
// import React from "react";
// import Footer from "@/components/Footer";
// import { tables } from "../../../public/static-data/Table Data/SupplyDatabaseTable";

// const TableSubpage = () => {
//   const router = useRouter();
//   const { dataId } = router.query;

//   // Find the table data by combining all tables from different categories
//   const allTables = tables.reduce((acc, category) => {
//     return [...acc, ...category.tables];
//   }, []);

//   const table = allTables.find((item) => item.id === parseInt(dataId));

//   if (!table) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <DataBreadcrumb title={table.title} />
//       <div className="px-6 py-10 md:px-20 mt-14 mb-10">
//         <h1 className="text-2xl font-bold mb-8">{table.title}</h1>

//         {/* Table Container */}
//         <div className="w-full overflow-x-auto bg-white rounded-lg shadow-sm p-6">
//           <table className="w-full min-w-[600px]">
//             {/* Header Row */}
//             <thead className="bg-gray-100">
//               <tr>
//                 {table.data[0].map((header, index) => (
//                   <th
//                     key={index}
//                     className="text-left p-3 border-b-2 font-semibold text-accent"
//                   >
//                     {header}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {table.data.slice(1).map((row, rowIndex) => (
//                 <tr
//                   key={rowIndex}
//                   className={`hover:bg-gray-50 transition-colors duration-150 ${
//                     [
//                       "Primary supply '000 oz",
//                       "Total primary supply",
//                       "Secondary supply '000 oz",
//                       "Total secondary supply",
//                       "Combined primary and secondary supply",
//                     ].includes(row[0])
//                       ? "bg-gray-100 text-accent font-semibold"
//                       : ""
//                   }`}
//                 >
//                   {row.map((cell, cellIndex) => (
//                     <td
//                       key={cellIndex}
//                       className={`p-3 border-b ${
//                         cellIndex === 0 ? "font-medium" : ""
//                       }`}
//                     >
//                       {cell}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Data Analysis Section */}
//         <div className="mt-12 space-y-6">
//           <h2 className="text-xl font-semibold mb-4">Data Analysis</h2>

//           {/* Year-over-Year Changes */}
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <h3 className="text-lg font-medium mb-4">Year-over-Year Changes</h3>
//             <div className="space-y-2">
//               {table.data[0].slice(1).map((year, yearIndex) => {
//                 if (yearIndex > 0) {
//                   const currentYear = year;
//                   const previousYear = table.data[0][yearIndex];
//                   return (
//                     <p key={yearIndex} className="text-black/80">
//                       <span className="font-medium">
//                         {previousYear} to {currentYear}:
//                       </span>{" "}
//                       {calculateYearOverYearChange(table.data, yearIndex)}
//                     </p>
//                   );
//                 }
//                 return null;
//               })}
//             </div>
//           </div>

//           {/* Category Analysis */}
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <h3 className="text-lg font-medium mb-4">Category Analysis</h3>
//             <div className="space-y-2">
//               {calculateCategoryAnalysis(table.data)}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// // Helper function to calculate year-over-year changes
// const calculateYearOverYearChange = (data, yearIndex) => {
//   const latestYearData = data.slice(1).reduce((sum, row) => {
//     const value = parseFloat(row[yearIndex + 1].replace(",", ""));
//     return isNaN(value) ? sum : sum + value;
//   }, 0);

//   const previousYearData = data.slice(1).reduce((sum, row) => {
//     const value = parseFloat(row[yearIndex].replace(",", ""));
//     return isNaN(value) ? sum : sum + value;
//   }, 0);

//   const percentageChange =
//     ((latestYearData - previousYearData) / previousYearData) * 100;

//   return `${percentageChange.toFixed(1)}% ${
//     percentageChange > 0 ? "increase" : "decrease"
//   } in total supply`;
// };

// // Helper function to analyze categories
// const calculateCategoryAnalysis = (data) => {
//   const latestYearIndex = data[0].length - 1;
//   const categories = data.slice(1).map((row) => ({
//     category: row[0],
//     value: parseFloat(row[latestYearIndex].replace(",", "")),
//   }));

//   // Sort categories by value
//   categories.sort((a, b) => b.value - a.value);

//   return categories.map((cat, index) => (
//     <p key={index} className="text-black/80">
//       <span className="font-medium">{cat.category}:</span>{" "}
//       {cat.value.toLocaleString()} thousand oz (
//       {(
//         (cat.value / categories.reduce((sum, c) => sum + c.value, 0)) *
//         100
//       ).toFixed(1)}
//       % of total)
//     </p>
//   ));
// };

// export default TableSubpage;

//................responsive

import { useRouter } from "next/router";
import DataBreadcrumb from "@/components/Data/DataBreadcrumb";
import React from "react";
import Footer from "@/components/Footer";
import { tables } from "../../../public/static-data/Table Data/SupplyDatabaseTable";

const TableSubpage = () => {
  const router = useRouter();
  const { dataId } = router.query;

  const allTables = tables.reduce((acc, category) => {
    return [...acc, ...category.tables];
  }, []);

  const table = allTables.find((item) => item.id === parseInt(dataId));

  if (!table) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <DataBreadcrumb title={table.title} />
      <div className="px-4 py-6 md:px-20 mt-8 md:mt-14 mb-6 md:mb-10">
        <h1 className="text-2xl md:text-2xl font-bold mb-6 md:mb-8 mt-14">
          {table.title}
        </h1>

        {/* Table Container */}
        <div className="w-full bg-white rounded-lg shadow-sm p-3 md:p-6">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              {/* Header Row */}
              <thead className="bg-gray-50">
                <tr>
                  {table.data[0].map((header, index) => (
                    <th
                      key={index}
                      className={`p-2 md:p-3 border-b-2 font-semibold text-accent text-sm md:text-base whitespace-nowrap ${
                        index === 0 ? "text-left" : "text-right"
                      }`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.data.slice(1).map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`hover:bg-gray-50 transition-colors duration-150 ${
                      [
                        "Primary supply '000 oz",
                        "Total primary supply",
                        "Secondary supply '000 oz",
                        "Total secondary supply",
                        "Combined primary and secondary supply",
                      ].includes(row[0])
                        ? "bg-gray-50 text-accent font-semibold"
                        : ""
                    }`}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`p-2 md:p-3 border-b text-sm md:text-base ${
                          cellIndex === 0
                            ? "font-medium whitespace-nowrap"
                            : "text-right"
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

        {/* Data Analysis Section */}
        <div className="mt-8 md:mt-12 space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-xl font-semibold mb-3 md:mb-4">
            Data Analysis
          </h2>

          {/* Year-over-Year Changes */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            <h3 className="text-base text-accent md:text-lg font-medium mb-3 md:mb-4">
              Year-over-Year Changes
            </h3>
            <div className="space-y-2 text-sm md:text-base">
              {table.data[0].slice(1).map((year, yearIndex) => {
                if (yearIndex > 0) {
                  const currentYear = year;
                  const previousYear = table.data[0][yearIndex];
                  return (
                    <div
                      key={yearIndex}
                      className="flex flex-wrap gap-1 md:gap-2"
                    >
                      <span className="font-medium whitespace-nowrap">
                        {previousYear} to {currentYear}:
                      </span>
                      <span className="text-black/80">
                        {calculateYearOverYearChange(table.data, yearIndex)}
                      </span>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>

          {/* Category Analysis */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            <h3 className="text-base text-accent md:text-lg font-medium mb-3 md:mb-4">
              Category Analysis
            </h3>
            <div className="space-y-2 text-sm md:text-base">
              {calculateCategoryAnalysis(table.data).map((analysis, index) => (
                <div key={index} className="flex flex-wrap gap-1 md:gap-2">
                  {analysis}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Helper function to calculate year-over-year changes
const calculateYearOverYearChange = (data, yearIndex) => {
  const latestYearData = data.slice(1).reduce((sum, row) => {
    const value = parseFloat(row[yearIndex + 1].replace(",", ""));
    return isNaN(value) ? sum : sum + value;
  }, 0);

  const previousYearData = data.slice(1).reduce((sum, row) => {
    const value = parseFloat(row[yearIndex].replace(",", ""));
    return isNaN(value) ? sum : sum + value;
  }, 0);

  const percentageChange =
    ((latestYearData - previousYearData) / previousYearData) * 100;

  return `${percentageChange.toFixed(1)}% ${
    percentageChange > 0 ? "increase" : "decrease"
  } in total supply`;
};

// Helper function to analyze categories
const calculateCategoryAnalysis = (data) => {
  const latestYearIndex = data[0].length - 1;
  const categories = data.slice(1).map((row) => ({
    category: row[0],
    value: parseFloat(row[latestYearIndex].replace(",", "")),
  }));

  categories.sort((a, b) => b.value - a.value);

  return categories.map((cat, index) => (
    <React.Fragment key={index}>
      <span className="font-medium whitespace-nowrap">{cat.category}:</span>
      <span className="text-black/80">
        {cat.value.toLocaleString()} thousand oz (
        {(
          (cat.value / categories.reduce((sum, c) => sum + c.value, 0)) *
          100
        ).toFixed(1)}
        % of total)
      </span>
    </React.Fragment>
  ));
};

export default TableSubpage;
