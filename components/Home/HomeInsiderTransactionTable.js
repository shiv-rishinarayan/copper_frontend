import React, { useState, useEffect } from "react";
import { flags } from "../../public/static-data/flagsData";

const HomeInsiderTransactionTable = () => {
  const [insiderTransactionsData, setInsiderTransactionsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;

  // Fetch data from API
  useEffect(() => {
    const fetchInsiderTransactions = async () => {
      try {
        const response = await fetch(
          "https://web-production-d96b.up.railway.app/api/insider-transactions/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setInsiderTransactionsData(data);
      } catch (error) {
        console.error("Error fetching insider transactions data:", error);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchInsiderTransactions();
  }, []);

  const totalPages = Math.ceil(insiderTransactionsData.length / rowsPerPage);

  const getCountryFlag = (countryName) => {
    const name = countryName || "US";
    const country = flags.countries.find(
      (flag) => flag.name.toLowerCase() === name.toLowerCase()
    );
    return country ? country.svg : name;
  };

  const formatLargeNumber = (value, tradeType) => {
    const hasDollarSign = value.includes("$");
    const num = parseFloat(value.replace(/[^\d.-]/g, ""));
    if (isNaN(num)) return value;

    const formattedValue = tradeType === "S - Sale" ? -Math.abs(num) : num;
    const absNum = Math.abs(formattedValue);

    let result;
    if (absNum >= 1000000000) {
      result = (formattedValue / 1000000000).toFixed(2) + "B";
    } else if (absNum >= 1000000) {
      result = (formattedValue / 1000000).toFixed(2) + "M";
    } else if (absNum >= 1000) {
      result = (formattedValue / 1000).toFixed(2) + "K";
    } else {
      result = formattedValue.toFixed(2);
    }

    return hasDollarSign ? `$${result}` : result;
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const dataToShow = insiderTransactionsData.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className="flex justify-between border-b border-black1/20 pb-2 mb-4">
        <h2 className="flex items-center text-[1rem] md:text-[1.1rem] font-bold text-black1/80 capitalize">
          Recent Uranium Company Insider Transactions
        </h2>
        <a
          href="/investments?tab=insiderTransactions"
          className="text-green hover:text-green2 text-sm font-bold frank"
        >
          view more &nbsp; &gt;
        </a>
      </div>

      {loading ? (
        <div className="text-white">Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : insiderTransactionsData.length > 0 ? (
        <div className="overflow-x-auto bg-white">
          <table className="w-full uranium-stocks-table min-w-[600px] mb-8">
            <thead className="bg-bg text-date/50 font-semibold border-b border-date/10">
              <tr>
                {[
                  "Country",
                  "Company Name",
                  "Insider Name",
                  "Title",
                  "Trade Type",
                  "Price",
                  "Quantity",
                  "Amount",
                  "Owned",
                  "Transaction Date",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="px-2 py-2 md:px-4 md:py-[16px] text-left text-[10px] md:text-[11px] font-semibold uppercase tracking-wider"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-bg text-black1/90">
              {dataToShow.map((data) => (
                <tr
                  key={data.id}
                  className="hover:bg-green/10 py-2 border-b border-date/10 text-[13px] text-start"
                >
                  <td
                    className="px-4 py-[10px] scale-90"
                    dangerouslySetInnerHTML={{
                      __html: getCountryFlag(data.country),
                    }}
                  />
                  <td className="px-5 py-[10px] font-semibold">
                    {data.company_name || "N/A"}
                  </td>
                  <td className="px-4 py-[10px]">
                    {data.insider_name || "N/A"}
                  </td>
                  <td className="px-5 py-[10px] text-[14px]">
                    {data.title || "N/A"}
                  </td>
                  <td className="px-5 py-[10px] text-[14px]">
                    {data.trade_type || "N/A"}
                  </td>
                  <td className="px-4 py-[10px] text-black">
                    {formatLargeNumber(data.price || "0.00", data.trade_type)}
                  </td>
                  <td className="px-4 py-[10px]">
                    {formatLargeNumber(data.qty || "0", data.trade_type)}
                  </td>
                  <td className="px-5 py-[10px]">
                    {formatLargeNumber(data.value || "0.00")}
                  </td>
                  <td className="px-4 py-[10px]">
                    {formatLargeNumber(data.owned || "0")}
                  </td>
                  <td className="px-4 py-[10px]">
                    {data.transaction_date || "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div> */}
        </div>
      ) : (
        <div className="text-white text-start w-full">No data available</div>
      )}
    </div>
  );
};

export default HomeInsiderTransactionTable;
