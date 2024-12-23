const PopularIntradayReturn = () => {
  const stockData = [
    {
      ticker: "GVXXF",
      name: "GoviEx Uranium Inc",
      current_price: 0.04,
      intraday_percentage: 15.15,
    },
    {
      ticker: "GLATF",
      name: "Global Atomic Corporation",
      current_price: 0.6,
      intraday_percentage: 11.52,
    },
    {
      ticker: "BOE.AX",
      name: "Boss Energy Limited",
      current_price: 2.36,
      intraday_percentage: 3.51,
    },
    {
      ticker: "URG",
      name: "Ur-Energy Incorporated",
      current_price: 1.15,
      intraday_percentage: 1.77,
    },
    {
      ticker: "CCJ",
      name: "Cameco Corporation",
      current_price: 52.77,
      intraday_percentage: 0.63,
    },
    {
      ticker: "UUUU",
      name: "Energy Fuels Incorporated",
      current_price: 5.38,
      intraday_percentage: 0.56,
    },
    {
      ticker: "YCA.L",
      name: "Yellow Cake plc",
      current_price: 488.8,
      intraday_percentage: 0.08,
    },
    {
      ticker: "PALAF",
      name: "Paladin Energy Limited",
      current_price: 5.0,
      intraday_percentage: 0.0,
    },
    {
      ticker: "EU",
      name: "enCore Energy Corporation",
      current_price: 3.32,
      intraday_percentage: -0.15,
    },
    {
      ticker: "NXE",
      name: "NexGen Energy Limited",
      current_price: 6.96,
      intraday_percentage: -0.29,
    },
  ];

  return (
    <div className="w-full">
      <table className="w-full text-left text-sm font-sans">
        <thead>
          <tr>
            <th className="pb-2 text-xs font-medium text-black1/60">COMPANY</th>
            <th className="pb-2 text-xs font-medium text-black1/60 text-right">
              PRICE
            </th>
          </tr>
        </thead>
        <tbody>
          {stockData
            .sort((a, b) => b.intraday_percentage - a.intraday_percentage) // Sort by intraday percentage
            .map((stock) => (
              <tr
                key={stock.ticker}
                className="border-b border-gray-200 cursor-pointer hover:bg-gray-100"
              >
                <td className="py-2">
                  <div>
                    <strong className="text-accent">{stock.ticker}</strong>
                  </div>
                  <div className="text-gray-500">{stock.name || "N/A"}</div>
                </td>
                <td className="py-2 text-right">
                  <div>${stock.current_price.toFixed(2)}</div>
                  <div
                    className={`${
                      stock.intraday_percentage < 0
                        ? "text-red-600"
                        : "text-green-500"
                    }`}
                  >
                    {stock.intraday_percentage.toFixed(2)}%
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* View More Link */}
      <div className="mt-4 text-left">
        <a
          href="/investments"
          className="inline-flex items-center text-sm font-bold text-accent hover:underline"
        >
          View More
          <span className="ml-1">&gt;</span>
        </a>
      </div>
    </div>
  );
};

export default PopularIntradayReturn;
