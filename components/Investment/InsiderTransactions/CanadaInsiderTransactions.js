// import { useState, useEffect } from "react";
// import CanadaInsiderTransactionsFilters from "./CanadaInsiderTransactionsFilters";
// import Pagination from "../Pagination";
// import TableCanadaInsiderTransactions from "./CanadaInsiderTransactionsTable";

// const InvestmentsCanadaInsiderTransaction = () => {
//   const [insiderTransactionsData, setInsiderTransactionsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [selectedInsiderName, setSelectedInsiderName] = useState("");
//   const [selectedTradeType, setSelectedTradeType] = useState("");
//   const [selectedSymbol, setSelectedSymbol] = useState("");
//   const [selectedStartDate, setSelectedStartDate] = useState("");
//   const [selectedEndDate, setSelectedEndDate] = useState("");

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;
//   const refreshInterval = 2 * 60 * 1000; // 2 minutes in milliseconds

//   // New sorting state
//   const [sortColumn, setSortColumn] = useState(null);
//   const [sortDirection, setSortDirection] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://platinumdjango-production.up.railway.app/api/insider-transactions/"
//         );
//         if (!response.ok) throw new Error(`Error: ${response.status}`);
//         const data = await response.json();
//         setInsiderTransactionsData(data);
//         sessionStorage.setItem(
//           "canadaInsiderTransactions",
//           JSON.stringify(data)
//         );
//         sessionStorage.setItem("canadaFetchTimestamp", Date.now().toString());

//         setLoading(false);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     };

//     const checkDataAndFetchIfNeeded = () => {
//       const storedData = sessionStorage.getItem("canadaInsiderTransactions");
//       const fetchTimestamp = parseInt(
//         sessionStorage.getItem("canadaFetchTimestamp"),
//         10
//       );
//       const now = Date.now();

//       if (
//         storedData &&
//         fetchTimestamp &&
//         now - fetchTimestamp < refreshInterval
//       ) {
//         const parsedData = JSON.parse(storedData);
//         setInsiderTransactionsData(parsedData);
//         setLoading(false);
//       } else {
//         fetchData();
//       }
//     };

//     checkDataAndFetchIfNeeded();
//   }, []);

//   const handleTradeTypeChange = (e) => setSelectedTradeType(e.target.value);
//   const handleSymbolChange = (e) => setSelectedSymbol(e.target.value);
//   const handleStartDateChange = (e) => setSelectedStartDate(e.target.value);
//   const handleEndDateChange = (e) => setSelectedEndDate(e.target.value);

//   const handleSort = (column) => {
//     if (sortColumn === column) {
//       setSortDirection(sortDirection === "asc" ? "desc" : "asc");
//     } else {
//       setSortColumn(column);
//       setSortDirection("asc");
//     }
//     setCurrentPage(1);
//   };

//   console.log(insiderTransactionsData);

//   const filteredTransactions = insiderTransactionsData
//     .filter((transaction) => {
//       const tradeTypeMatch =
//         selectedTradeType === "All" ||
//         selectedTradeType === "" ||
//         transaction.trade_type?.toLowerCase().trim() ===
//           selectedTradeType.toLowerCase().trim();
//       const symbolMatch =
//         selectedSymbol === "All" ||
//         selectedSymbol === "" ||
//         transaction.ticker?.toLowerCase().trim() ===
//           selectedSymbol.toLowerCase().trim();
//       const transactionDate = new Date(transaction.transaction_date);
//       const startDate = selectedStartDate ? new Date(selectedStartDate) : null;
//       const endDate = selectedEndDate ? new Date(selectedEndDate) : null;
//       const dateRangeMatch =
//         (!startDate || transactionDate >= startDate) &&
//         (!endDate || transactionDate <= endDate);

//       return tradeTypeMatch && symbolMatch && dateRangeMatch;
//     })
//     .sort((a, b) => {
//       if (!sortColumn) return 0;

//       const extractValue = (value) => {
//         return parseFloat(value.replace(/[^\d.-]/g, "")) || 0;
//       };

//       let valueA, valueB;
//       switch (sortColumn) {
//         case "price":
//           valueA = extractValue(a.price || "0");
//           valueB = extractValue(b.price || "0");
//           break;
//         case "quantity":
//           valueA = extractValue(a.qty || "0");
//           valueB = extractValue(b.qty || "0");
//           break;
//         case "amount":
//           valueA = extractValue(a.value || "0");
//           valueB = extractValue(b.value || "0");
//           break;
//         case "owned":
//           valueA = extractValue(a.owned || "0");
//           valueB = extractValue(b.owned || "0");
//           break;
//         default:
//           return 0;
//       }

//       return sortDirection === "asc" ? valueA - valueB : valueB - valueA;
//     });

//   const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
//   const paginatedData = filteredTransactions.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePageChange = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching data: {error.message}</p>;

//   return (
//     <div className="bg-accent/10 p-2 py-4 md:p-8 rounded-md mb-7">
//       <h2 className="flex items-center text-[1rem] md:text-[1.4rem] frank mb-6 font-semibold text-black/90 capitalize">
//         Canada Insider Transactions
//       </h2>

//       <CanadaInsiderTransactionsFilters
//         selectedTradeType={selectedTradeType}
//         selectedSymbol={selectedSymbol}
//         selectedStartDate={selectedStartDate}
//         selectedEndDate={selectedEndDate}
//         handleTradeTypeChange={handleTradeTypeChange}
//         handleSymbolChange={handleSymbolChange}
//         handleStartDateChange={handleStartDateChange}
//         handleEndDateChange={handleEndDateChange}
//       />

//       <TableCanadaInsiderTransactions
//         homeData={paginatedData}
//         rows={10}
//         sortColumn={sortColumn}
//         sortDirection={sortDirection}
//         onSort={handleSort}
//       />

//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// };

// export default InvestmentsCanadaInsiderTransaction;

import { useState, useEffect } from "react";
import CanadaInsiderTransactionsFilters from "./CanadaInsiderTransactionsFilters";
import Pagination from "../Pagination";
import TableCanadaInsiderTransactions from "./CanadaInsiderTransactionsTable";

const InvestmentsCanadaInsiderTransaction = () => {
  const [insiderTransactionsData, setInsiderTransactionsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedInsiderName, setSelectedInsiderName] = useState("");
  const [selectedTradeType, setSelectedTradeType] = useState("");
  const [selectedSymbol, setSelectedSymbol] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const refreshInterval = 2 * 60 * 1000; // 2 minutes in milliseconds

  // New sorting state
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  // New state for dropdown options
  const [symbolOptions, setSymbolOptions] = useState([]);
  const [tradeTypeOptions, setTradeTypeOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://platinumdjango-production.up.railway.app/api/insider-transactions/"
        );
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setInsiderTransactionsData(data);
        sessionStorage.setItem(
          "canadaInsiderTransactions",
          JSON.stringify(data)
        );
        sessionStorage.setItem("canadaFetchTimestamp", Date.now().toString());

        // Extract unique symbols and trade types
        const symbols = [
          "All",
          ...new Set(data.map((item) => item.ticker).filter(Boolean)),
        ];
        const tradeTypes = [
          "All",
          ...new Set(data.map((item) => item.trade_type).filter(Boolean)),
        ];

        setSymbolOptions(symbols);
        setTradeTypeOptions(tradeTypes);

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    const checkDataAndFetchIfNeeded = () => {
      const storedData = sessionStorage.getItem("canadaInsiderTransactions");
      const fetchTimestamp = parseInt(
        sessionStorage.getItem("canadaFetchTimestamp"),
        10
      );
      const now = Date.now();

      if (
        storedData &&
        fetchTimestamp &&
        now - fetchTimestamp < refreshInterval
      ) {
        const parsedData = JSON.parse(storedData);
        setInsiderTransactionsData(parsedData);

        // Extract unique symbols and trade types from stored data
        const symbols = [
          "All",
          ...new Set(parsedData.map((item) => item.ticker).filter(Boolean)),
        ];
        const tradeTypes = [
          "All",
          ...new Set(parsedData.map((item) => item.trade_type).filter(Boolean)),
        ];

        setSymbolOptions(symbols);
        setTradeTypeOptions(tradeTypes);

        setLoading(false);
      } else {
        fetchData();
      }
    };

    checkDataAndFetchIfNeeded();
  }, []);

  const handleTradeTypeChange = (e) => setSelectedTradeType(e.target.value);
  const handleSymbolChange = (e) => setSelectedSymbol(e.target.value);
  const handleStartDateChange = (e) => setSelectedStartDate(e.target.value);
  const handleEndDateChange = (e) => setSelectedEndDate(e.target.value);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
    setCurrentPage(1);
  };

  const filteredTransactions = insiderTransactionsData
    .filter((transaction) => {
      const tradeTypeMatch =
        selectedTradeType === "All" ||
        selectedTradeType === "" ||
        transaction.trade_type?.toLowerCase().trim() ===
          selectedTradeType.toLowerCase().trim();
      const symbolMatch =
        selectedSymbol === "All" ||
        selectedSymbol === "" ||
        transaction.ticker?.toLowerCase().trim() ===
          selectedSymbol.toLowerCase().trim();
      const transactionDate = new Date(transaction.transaction_date);
      const startDate = selectedStartDate ? new Date(selectedStartDate) : null;
      const endDate = selectedEndDate ? new Date(selectedEndDate) : null;
      const dateRangeMatch =
        (!startDate || transactionDate >= startDate) &&
        (!endDate || transactionDate <= endDate);

      return tradeTypeMatch && symbolMatch && dateRangeMatch;
    })
    .sort((a, b) => {
      if (!sortColumn) return 0;

      const extractValue = (value) => {
        return parseFloat(value.replace(/[^\d.-]/g, "")) || 0;
      };

      let valueA, valueB;
      switch (sortColumn) {
        case "price":
          valueA = extractValue(a.price || "0");
          valueB = extractValue(b.price || "0");
          break;
        case "quantity":
          valueA = extractValue(a.qty || "0");
          valueB = extractValue(b.qty || "0");
          break;
        case "amount":
          valueA = extractValue(a.value || "0");
          valueB = extractValue(b.value || "0");
          break;
        case "owned":
          valueA = extractValue(a.owned || "0");
          valueB = extractValue(b.owned || "0");
          break;
        default:
          return 0;
      }

      return sortDirection === "asc" ? valueA - valueB : valueB - valueA;
    });

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedData = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="bg-accent/10 p-2 py-4 md:p-8 rounded-md mb-7">
      <h2 className="flex items-center text-[1rem] md:text-[1.4rem] frank mb-6 font-semibold text-black/90 capitalize">
        Canada Insider Transactions
      </h2>

      <CanadaInsiderTransactionsFilters
        selectedTradeType={selectedTradeType}
        selectedSymbol={selectedSymbol}
        selectedStartDate={selectedStartDate}
        selectedEndDate={selectedEndDate}
        handleTradeTypeChange={handleTradeTypeChange}
        handleSymbolChange={handleSymbolChange}
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
        symbolOptions={symbolOptions}
        tradeTypeOptions={tradeTypeOptions}
      />

      <TableCanadaInsiderTransactions
        homeData={paginatedData}
        rows={10}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
        onSort={handleSort}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default InvestmentsCanadaInsiderTransaction;
