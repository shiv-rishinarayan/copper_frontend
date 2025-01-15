// import React, { useState, useEffect } from "react";
// import Pagination from "../Pagination";
// import StockFilters from "../StockScreener/StockScreenerTableFilters";
// import StockScreenerTable from "../StockScreener/StockScrennerTable";

// const PAGE_SIZE = 15;
// const API_URL =
//   "https://platinumdjango-production.up.railway.app/api/stock-metrics/";

// const StockScreener = () => {
//   const [stocksScreenerTable, setStocksScreenerTable] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filters, setFilters] = useState({
//     stock_type: "All",
//     company_name: "All",
//     ticker: "All",
//     exchange: "All",
//     domiciled: "All",
//     mine_location: "All",
//   });

//   const [uniqueOptions, setUniqueOptions] = useState({
//     stock_type: [],
//     company_name: [],
//     ticker: [],
//     exchange: [],
//     domiciled: [],
//     mine_location: [],
//   });

//   useEffect(() => {
//     const fetchStockData = async () => {
//       try {
//         const response = await fetch(API_URL);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setStocksScreenerTable(data);

//         // Extract unique options for filters
//         const extractUniqueOptions = (field) => [
//           "All",
//           ...new Set(data.map((item) => item[field])),
//         ];

//         setUniqueOptions({
//           stock_type: extractUniqueOptions("stock_type"),
//           company_name: extractUniqueOptions("company_name"),
//           ticker: extractUniqueOptions("ticker"),
//           exchange: extractUniqueOptions("exchange"),
//           domiciled: extractUniqueOptions("domiciled"),
//           mine_location: extractUniqueOptions("mine_location"),
//         });

//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//         console.error("Error fetching stock data:", error);
//       }
//     };

//     fetchStockData();
//   }, []);

//   const handleFilterChange = (key, value) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [key]: value,
//     }));
//     setCurrentPage(1);
//   };

//   const filteredData = stocksScreenerTable.filter((stock) => {
//     return Object.entries(filters).every(([key, value]) => {
//       if (value === "All") return true;
//       return stock[key]?.toString().toLowerCase() === value.toLowerCase();
//     });
//   });

//   const displayedData = filteredData.slice(
//     (currentPage - 1) * PAGE_SIZE,
//     currentPage * PAGE_SIZE
//   );

//   const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);

//   if (loading) {
//     return <div className="text-black1">Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div className="text-black1">Error fetching data: {error.message}</div>
//     );
//   }

//   return (
//     <div
//       id="investment"
//       className="w-full bg-accent/10 border border-date/20 p-2 py-4 md:p-8 rounded-lg mb-24"
//     >
//       {stocksScreenerTable.length === 0 ? (
//         <p className="text-black1/90">No investment stocks available.</p>
//       ) : (
//         <>
//           <StockFilters
//             filters={filters}
//             uniqueOptions={uniqueOptions}
//             onFilterChange={handleFilterChange}
//           />

//           <StockScreenerTable
//             displayedData={displayedData}
//             getColorClass={(value) =>
//               value < 0 ? "text-red-500" : "text-green-500"
//             }
//           />

//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={setCurrentPage}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default StockScreener;

// import React, { useState, useEffect } from "react";
// import Pagination from "../Pagination";
// import StockFilters from "../StockScreener/StockScreenerTableFilters";
// import StockScreenerTable from "../StockScreener/StockScrennerTable";
// import { ArrowUp, ArrowDown } from "lucide-react";

// const PAGE_SIZE = 15;
// const API_URL =
//   "https://platinumdjango-production.up.railway.app/api/stock-metrics/";

// const StockScreener = () => {
//   const [stocksScreenerTable, setStocksScreenerTable] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filters, setFilters] = useState({
//     stock_type: "All",
//     company_name: "All",
//     ticker: "All",
//     exchange: "All",
//     domiciled: "All",
//     mine_location: "All",
//   });

//   const [uniqueOptions, setUniqueOptions] = useState({
//     stock_type: [],
//     company_name: [],
//     ticker: [],
//     exchange: [],
//     domiciled: [],
//     mine_location: [],
//   });

//   const [sortColumn, setSortColumn] = useState("market_cap");
//   const [sortDirection, setSortDirection] = useState("desc");

//   useEffect(() => {
//     const fetchStockData = async () => {
//       try {
//         const response = await fetch(API_URL);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setStocksScreenerTable(data);

//         // Extract unique options for filters
//         const extractUniqueOptions = (field) => [
//           "All",
//           ...new Set(data.map((item) => item[field])),
//         ];

//         setUniqueOptions({
//           stock_type: extractUniqueOptions("stock_type"),
//           company_name: extractUniqueOptions("company_name"),
//           ticker: extractUniqueOptions("ticker"),
//           exchange: extractUniqueOptions("exchange"),
//           domiciled: extractUniqueOptions("domiciled"),
//           mine_location: extractUniqueOptions("mine_location"),
//         });

//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//         console.error("Error fetching stock data:", error);
//       }
//     };

//     fetchStockData();
//   }, []);

//   const handleFilterChange = (key, value) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [key]: value,
//     }));
//     setCurrentPage(1);
//   };

//   const handleSort = (column) => {
//     if (sortColumn === column) {
//       setSortDirection(sortDirection === "asc" ? "desc" : "asc");
//     } else {
//       setSortColumn(column);
//       setSortDirection("asc");
//     }
//   };

//   const filteredData = stocksScreenerTable
//     .filter((stock) => {
//       return Object.entries(filters).every(([key, value]) => {
//         if (value === "All") return true;
//         return stock[key]?.toString().toLowerCase() === value.toLowerCase();
//       });
//     })
//     .sort((a, b) => {
//       if (!sortColumn) return 0;
//       const aValue = a[sortColumn];
//       const bValue = b[sortColumn];

//       // Handle null or undefined values
//       if (aValue == null) return 1;
//       if (bValue == null) return -1;

//       // Convert to numbers if possible
//       const aNum = Number(aValue);
//       const bNum = Number(bValue);

//       if (!isNaN(aNum) && !isNaN(bNum)) {
//         // Both values are numeric
//         return sortDirection === "asc" ? aNum - bNum : bNum - aNum;
//       } else {
//         // At least one value is not numeric, compare as strings
//         const aStr = aValue.toString().toLowerCase();
//         const bStr = bValue.toString().toLowerCase();
//         return sortDirection === "asc"
//           ? aStr.localeCompare(bStr)
//           : bStr.localeCompare(aStr);
//       }
//     });

//   const displayedData = filteredData.slice(
//     (currentPage - 1) * PAGE_SIZE,
//     currentPage * PAGE_SIZE
//   );

//   const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);

//   if (loading) {
//     return <div className="text-black1">Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div className="text-black1">Error fetching data: {error.message}</div>
//     );
//   }

//   return (
//     <div
//       id="investment"
//       className="w-full bg-accent/10 border border-date/20 p-2 py-4 md:p-8 rounded-lg mb-24"
//     >
//       {stocksScreenerTable.length === 0 ? (
//         <p className="text-black1/90">No investment stocks available.</p>
//       ) : (
//         <>
//           <StockFilters
//             filters={filters}
//             uniqueOptions={uniqueOptions}
//             onFilterChange={handleFilterChange}
//           />

//           <StockScreenerTable
//             displayedData={displayedData}
//             getColorClass={(value) =>
//               value < 0 ? "text-red-500" : "text-green-500"
//             }
//             onSort={handleSort}
//             sortColumn={sortColumn}
//             sortDirection={sortDirection}
//           />

//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={setCurrentPage}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default StockScreener;

import React, { useState, useEffect } from "react";
import Pagination from "../Pagination";
import StockFilters from "../StockScreener/StockScreenerTableFilters";
import StockScreenerTable from "../StockScreener/StockScrennerTable";
import { ArrowUp, ArrowDown } from "lucide-react";

const PAGE_SIZE = 15;
const API_URL =
  "https://platinumdjango-production.up.railway.app/api/stock-metrics/";

const convertToNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value !== "string") return 0;

  // Remove "$" and any commas, then trim whitespace
  const cleanedValue = value.replace(/[$,]/g, "").trim();

  // Extract the numeric part and the unit (if any)
  const match = cleanedValue.match(/^([\d.]+)\s*([KMB])?$/i);

  if (!match) return 0;

  const [, numPart, unit] = match;
  let multiplier = 1;

  if (unit) {
    switch (unit.toUpperCase()) {
      case "K":
        multiplier = 1000;
        break;
      case "M":
        multiplier = 1000000;
        break;
      case "B":
        multiplier = 1000000000;
        break;
    }
  }

  return parseFloat(numPart) * multiplier;
};

const StockScreener = () => {
  const [stocksScreenerTable, setStocksScreenerTable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    stock_type: "All",
    company_name: "All",
    ticker: "All",
    exchange: "All",
    domiciled: "All",
    mine_location: "All",
  });

  const [uniqueOptions, setUniqueOptions] = useState({
    stock_type: [],
    company_name: [],
    ticker: [],
    exchange: [],
    domiciled: [],
    mine_location: [],
  });

  const [sortColumn, setSortColumn] = useState("market_cap");
  const [sortDirection, setSortDirection] = useState("desc");

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStocksScreenerTable(data);

        // Extract unique options for filters
        const extractUniqueOptions = (field) => [
          "All",
          ...new Set(data.map((item) => item[field])),
        ];

        setUniqueOptions({
          stock_type: extractUniqueOptions("stock_type"),
          company_name: extractUniqueOptions("company_name"),
          ticker: extractUniqueOptions("ticker"),
          exchange: extractUniqueOptions("exchange"),
          domiciled: extractUniqueOptions("domiciled"),
          mine_location: extractUniqueOptions("mine_location"),
        });

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
    setCurrentPage(1);
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const filteredData = stocksScreenerTable
    .filter((stock) => {
      return Object.entries(filters).every(([key, value]) => {
        if (value === "All") return true;
        return stock[key]?.toString().toLowerCase() === value.toLowerCase();
      });
    })
    .sort((a, b) => {
      if (!sortColumn) return 0;
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      // Handle null or undefined values
      if (aValue == null) return 1;
      if (bValue == null) return -1;

      // Convert to numbers if possible
      const aNum = convertToNumber(aValue);
      const bNum = convertToNumber(bValue);

      if (!isNaN(aNum) && !isNaN(bNum)) {
        // Both values are numeric
        return sortDirection === "asc" ? aNum - bNum : bNum - aNum;
      } else {
        // At least one value is not numeric, compare as strings
        const aStr = aValue.toString().toLowerCase();
        const bStr = bValue.toString().toLowerCase();
        return sortDirection === "asc"
          ? aStr.localeCompare(bStr)
          : bStr.localeCompare(aStr);
      }
    });

  const displayedData = filteredData.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);

  if (loading) {
    return <div className="text-black1">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-black1">Error Fetching Data: {error.message}</div>
    );
  }

  return (
    <div
      id="investment"
      className="w-full bg-accent/10 border border-date/20 p-2 py-4 md:p-8 rounded-lg mb-24"
    >
      {stocksScreenerTable.length === 0 ? (
        <p className="text-black1/90">No investment stocks available.</p>
      ) : (
        <>
          <StockFilters
            filters={filters}
            uniqueOptions={uniqueOptions}
            onFilterChange={handleFilterChange}
          />

          <StockScreenerTable
            displayedData={displayedData}
            getColorClass={(value) =>
              value < 0 ? "text-red-500" : "text-green-500"
            }
            onSort={handleSort}
            sortColumn={sortColumn}
            sortDirection={sortDirection}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default StockScreener;
