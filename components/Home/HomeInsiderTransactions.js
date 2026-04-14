import React, { useState, useEffect } from "react";

const HomeInsiderTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("/api/insider-transactions/");
        if (!response.ok) {
          throw new Error("Failed to fetch insider transactions");
        }
        const data = await response.json();

        // Filter for Canadian transactions and limit to 10 most recent
        const canadianTransactions = data
          .filter((t) => t.country === "Canada")
          .slice(0, 10);

        setTransactions(canadianTransactions);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching insider transactions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const shimmer =
    "animate-pulse bg-gradient-to-r from-muted/80 via-muted to-muted/60 bg-[length:600px_100%]";

  const cols = [
    null,
    "w-10 px-10 ",
    "w-10 ", // ticker
    "w-10 px-10 ", // insider
    "w-8", // title
    "w-10 px-7", // type
    "w-10 px-6", // price
    "w-9 px-9", // qty
    "w-10 px-8", // amount
    "w-9 px-6", // date
  ];
  const rows = 10;

  if (loading) {
    // return (
    //   <div className="text-center py-4">
    //     <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-accent mx-auto"></div>
    //   </div>
    // );
    return (
      <div className="overflow-auto md:overflow-scroll 2xl:overflow-visible border border-black/10 rounded-xl custom-scrollbar-hidden">
        <table className="table-auto w-full border-collapse text-md ">
          <thead className="">
            <tr className="text-black/60">
              {[
                "Country",
                "Company",
                "Ticker",
                "Insider",
                "Title",
                "Type",
                "Price",
                "Qty",
                "Amount",
                "Date",
              ].map((h) => (
                <th key={h} className={`py-2`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, i) => (
              <tr key={i}>
                <td className="border-t py-2">
                  <span
                    className={`${shimmer} bg-zinc-200 ml-2 inline-block h-4 w-8 `}
                  />
                </td>

                {cols.slice(1).map((w, ci) => (
                  <td key={ci} className="border-t px-10 py-[10px] ">
                    <span
                      className={`${shimmer} bg-zinc-200 rounded-md inline-block h-4 ${w}`}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-4 text-red-500 text-sm">
        Error loading transactions: {error}
      </div>
    );
  }

  if (transactions.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500 text-sm">
        No recent transactions available
      </div>
    );
  }

  return (
    <div className="overflow-auto md:overflow-scroll 2xl:overflow-visible custom-scrollbar-hidden">
      <table className="table-auto w-full border-collapse text-md ">
        <thead className="text-left ">
          <tr className="text-black/60">
            <th className="border-t px-10 py-2">Country</th>
            <th className="border-t px-10 py-2">Company</th>
            <th className="border-t px-10 py-2">Ticker</th>
            <th className="border-t px-10 py-2">Insider</th>
            <th className="border-t px-10 py-2">Title</th>
            <th className="border-t px-10 py-2">Type</th>
            <th className="border-t px-10 py-2">Price</th>
            <th className="border-t px-10 py-2">Qty</th>
            <th className="border-t px-10 py-2">Amount</th>
            <th className="border-t px-10 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr
              key={transaction.id || index}
              className="text-sm hover:bg-accent/10 transition-colors"
            >
              <td className="border-t px-10 py-2">
                <span className="text-lg" title="Canada">
                  🇨🇦
                </span>
              </td>
              <td
                className="border-t py-2 max-w-[120px] truncate"
                title={transaction.company_name}
              >
                {transaction.company_name || "N/A"}
              </td>
              <td className="border-t text-sm px-12 py-2 font-semibold text-accent">
                {transaction.ticker || "N/A"}
              </td>
              <td
                className="border-t py-2 max-w-[100px] truncate"
                title={transaction.insider_name}
              >
                {transaction.insider_name || "N/A"}
              </td>
              <td
                className="border-t px-7 py-2 max-w-[100px] truncate"
                title={transaction.title}
              >
                {transaction.title || "N/A"}
              </td>
              <td className="border-t px-6 py-2">
                {transaction.trade_type || "N/A"}
              </td>
              <td className="border-t px-9 py-2">
                {transaction.price || "$0.00"}
              </td>
              <td className="border-t px-8 py-2 text-green-600 font-medium">
                {transaction.qty || "0"}
              </td>
              <td className="border-t px-8 py-2 text-green-600 font-medium">
                {transaction.value || "$0"}
              </td>
              <td className="border-t px-6 py-2 whitespace-nowrap">
                {formatDate(transaction.transaction_date)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeInsiderTransactions;
