import { useRouter } from "next/router";
import DataBreadcrumb from "@/components/Data/DataBreadcrumb";
import React from "react";
import Footer from "@/components/Footer";
import { tables } from "../../../public/static-data/Table Data/DemandDatabaseTable";

const TableSubpage = () => {
  const router = useRouter();
  const { tableid } = router.query;

  // Find the table data by combining all tables from different categories
  const allTables = tables.reduce((acc, category) => {
    return [...acc, ...category.tables];
  }, []);

  const table = allTables.find((item) => item.id === parseInt(tableid));

  if (!table) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <DataBreadcrumb title={table.title} />
      <div className="px-6 py-10 md:px-20 mt-14 mb-10">
        <h1 className="text-2xl font-bold mb-8">{table.title}</h1>

        {/* Table Container */}
        <div className="w-full overflow-x-auto bg-white rounded-lg shadow-sm p-6">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                {table.data[0].map((header, index) => (
                  <th
                    key={index}
                    className="text-left p-3 border-b-2 font-semibold text-black/70"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.data.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`p-3 border-b text-black/80 ${
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

        {/* Data Analysis Section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-xl font-semibold mb-4">Data Analysis</h2>

          {/* Year-over-Year Changes */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium mb-4">Year-over-Year Changes</h3>
            <div className="space-y-2">
              {table.data[0].slice(1).map((year, yearIndex) => {
                if (yearIndex > 0) {
                  const currentYear = year;
                  const previousYear = table.data[0][yearIndex];
                  return (
                    <p key={yearIndex} className="text-black/80">
                      <span className="font-medium">
                        {previousYear} to {currentYear}:
                      </span>{" "}
                      {calculateYearOverYearChange(table.data, yearIndex)}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>

          {/* Category Analysis */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium mb-4">Category Analysis</h3>
            <div className="space-y-2">
              {calculateCategoryAnalysis(table.data)}
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
  } in total demand`;
};

// Helper function to analyze categories
const calculateCategoryAnalysis = (data) => {
  const latestYearIndex = data[0].length - 1;
  const categories = data.slice(1).map((row) => ({
    category: row[0],
    value: parseFloat(row[latestYearIndex].replace(",", "")),
  }));

  // Sort categories by value
  categories.sort((a, b) => b.value - a.value);

  return categories.map((cat, index) => (
    <p key={index} className="text-black/80">
      <span className="font-medium">{cat.category}:</span>{" "}
      {cat.value.toLocaleString()} thousand oz (
      {(
        (cat.value / categories.reduce((sum, c) => sum + c.value, 0)) *
        100
      ).toFixed(1)}
      % of total)
    </p>
  ));
};

export default TableSubpage;
