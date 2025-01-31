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
        "The chart provides an overview of the platinum market's supply and demand dynamics from 2014 to 2019, measured in thousands of ounces (koz). It highlights the annual balance between the supply of platinum and the demand for it, reflecting periods of surplus or deficit in the market. Understanding this balance is crucial for stakeholders in the platinum industry, including miners, manufacturers, and investors. The data helps identify trends in production and consumption, influenced by factors such as industrial demand (e.g., automotive catalysts, jewelry), mining output, and recycling rates. By analyzing these trends, the chart offers insights into market stability, price volatility, and potential investment opportunities. This information is essential for making informed decisions in the platinum market and understanding its broader economic implications.",
    },
    {
      id: 2,
      image: "/data-demand/AnnualTotalDemandAndChanges2023To2025f(koz).jpg",
      title: "Annual Total Demand And Changes 2023 To 2025f (koz)",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/2",
      description:
        "The chart provides a detailed breakdown of platinum demand across various sectors—Automotive, Jewellery, Industrial, and Investment—from 2023 to the forecasted year 2025, measured in thousands of ounces (koz). It highlights the total demand for each year and the changes in demand within each sector. In 2023, the total demand is indicated at 7,918 koz, with specific contributions from Automotive, Jewellery, Industrial, and Investment sectors. The chart also shows projected changes for 2024 and 2025, offering insights into expected trends and shifts in demand. For instance, the Automotive sector, which is a significant consumer of platinum due to its use in catalytic converters, may see fluctuations based on vehicle production and emission regulations. Similarly, changes in the Jewellery and Investment sectors reflect consumer preferences and market sentiment. This data is crucial for industry stakeholders, including manufacturers, investors, and policymakers, as it helps in understanding market dynamics, planning production, and making informed investment decisions. The chart underscores the importance of monitoring sector-specific demand to anticipate future market trends and economic impacts.",
    },
    {
      id: 3,
      image: "/data-demand/ChangesInDemandByCategory,2023Vs2024f.jpg",
      title: "Changes In Demand By Category, 2023 vs. 2024f",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/3",
      description:
        "The chart provides a comparative analysis of platinum demand across various sectors for the year 2023 and the forecasted year 2024. It highlights the changes in demand measured in thousands of ounces (koz) for categories such as Automotive, Jewellery, Chemical, Petroleum, Electrical, Glass, Medical, Hydrogen, Other, and Investment. In 2023, the chart shows specific changes in demand for each category, with notable increases in sectors like Automotive (+102 koz) and Jewellery (+150 koz), and decreases in areas such as Investment (-49 koz) and Other (-4 koz). The forecast for 2024 suggests further shifts, with Industrial Demand expected to see changes as indicated by the +1 koz figure. This data is essential for industry stakeholders to understand the evolving demand dynamics across different sectors. It helps in identifying growth areas and potential declines, enabling better strategic planning and resource allocation. The chart underscores the importance of monitoring sector-specific trends to anticipate market movements and make informed decisions in the platinum industry.",
    },
    {
      id: 4,
      image: "/data-demand/SupplyDemandBalanceBalance,koz,Q32024.jpg",
      title: "Supply Demand Balance Balance, koz, Q3 2024",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/4",
      description:
        "The chart offers a concise overview of the platinum market's supply and demand dynamics for the third quarter of 2024, measured in thousands of ounces (koz). It highlights key metrics such as Total Supply, Total Demand, and the resulting Balance, with specific figures like 260 koz and 1,827 koz likely representing the balance and total demand, respectively. This data is crucial for understanding production levels, consumption across various sectors, and the overall market equilibrium. A positive balance indicates a surplus, while a negative balance suggests a deficit, providing valuable insights for industry stakeholders, including producers, investors, and policymakers. By analyzing these metrics, stakeholders can better anticipate price movements, plan production, and make informed decisions to ensure market stability and optimize investment strategies.",
    },
    {
      id: 5,
      image: "/data-demand/SupplyDemandBalance,koz,2013-2024f.jpg",
      title: "Supply Demand Balance, koz, 2013-2024f",
      source: "SFA (Oxford) 2013 - 2018, Metals Focus 2019 - 2024f",
      path: "/DataDemandDatabase/5",
      description:
        "The chart illustrates the annual supply-demand balance of platinum from 2013 to the forecasted year 2024, measured in thousands of ounces (koz). It captures the fluctuations between supply and demand over this period, highlighting years of surplus and deficit. For instance, in 2013, the balance was 675 koz, indicating a surplus, while in 2014, it dropped to -750 koz, suggesting a deficit. This data is essential for understanding the market dynamics, including production levels, consumption trends, and the impact of economic factors on platinum availability. By analyzing these trends, industry stakeholders can better anticipate market conditions, plan production, and make informed investment decisions to navigate the complexities of the platinum market.",
    },
    {
      id: 6,
      image: "/data-demand/PlatinumInvestment,koz.jpg",
      title: "Platinum Investment, koz",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/6",
      description:
        "The chart provides a detailed breakdown of platinum investment activities across different categories—Bars and Coins, ETFs, Exchange Stocks, and China Bars (2500g)—from Q3 2023 to Q3 2024, measured in thousands of ounces (koz). It highlights the fluctuations in investment demand, with specific figures such as 444 koz in Bars and Coins for Q3 2023 and notable changes in other categories over subsequent quarters. The data reveals periods of significant investment activity and withdrawal, reflecting investor sentiment and market conditions. This information is crucial for understanding the dynamics of platinum investment, helping stakeholders gauge market trends, anticipate price movements, and make informed decisions. By analyzing these trends, investors and analysts can better navigate the platinum market and optimize their investment strategies.",
    },
    {
      id: 7,
      image: "/data-demand/PlatinumDemand,koz.jpg",
      title: "Platinum Demand, koz",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/7",
      description:
        "The chart provides a quarterly breakdown of platinum demand across key sectors—Automotive, Jewellery, Industrial, and Investment—from Q3 2023 to Q3 2024, measured in thousands of ounces (koz). It captures the fluctuations in demand within each sector, reflecting changes in market conditions and consumer behavior. For instance, the Automotive sector, a major consumer of platinum due to its use in catalytic converters, may show variations based on vehicle production and emission regulations. Similarly, demand in the Jewellery and Investment sectors can indicate shifts in consumer preferences and market sentiment. This data is essential for industry stakeholders to understand sector-specific trends, plan production, and make informed decisions. By analyzing these demand patterns, investors and analysts can better anticipate market movements and optimize their strategies in the platinum market.",
    },
    {
      id: 8,
      image: "/data-demand/ETFHoldingsByRegion.jpg",
      title: "ETF Holdings By Region",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/8",
      description:
        "The chart provides a comprehensive overview of gold ETF holdings across major regions—Asia, Africa, North America, and Europe—from 2007 to 2023. It illustrates the trends in gold investments, measured in thousands of ounces and USD per ounce, highlighting the fluctuations and regional contributions to the global gold ETF market over time. The data reveals how each region's holdings have evolved, reflecting changes in investment patterns and market dynamics across the years",
    },
    {
      id: 9,
      image: "/data-demand/ChinasTotalBarAndCoinDemand.jpg",
      title: "China's Total Bar And Coin Demand",
      source: "Metals Focus",
      path: "/DataDemandDatabase/9",
      description:
        "This chart illustrates China's total bar and coin demand for platinum from 2019 to 2023, with a forecast extending to 2024. The data, measured in thousands of ounces (koz), highlights the trends and fluctuations in platinum investment demand over the years, providing insights into the market dynamics and investment behavior in China. The chart captures key periods of growth or decline, reflecting factors such as economic conditions, investor sentiment, and market speculation. By analyzing these trends, stakeholders can better understand the evolving landscape of platinum investment in one of the world's largest markets, aiding in strategic decision-making and future planning.",
    },
    {
      id: 10,
      image: "/data-demand/DemandEndUseShares,2023Vs2024f.jpg",
      title: "Demand End Use Shares, 2023 vs. 2024f",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/10",
      description:
        "This chart compares the demand end-use shares for 2023 and the forecast for 2024 (2024f), highlighting the distribution across various sectors such as Automotive, Jewellery, Industrial, Chemical, and others. The data shows a slight overall increase in demand from 7,918 in 2023 to 7,951 in 2024f. Notable changes include a decrease in the Automotive sector from 41% to 40%, and an increase in the Jewellery sector from 23% to 25%. The Industrial sector remains the second-largest contributor at 31%, while the Chemical sector sees a reduction from 10% to 7%. The Hydrogen sector shows growth, doubling its share from 0.4% to 1%. This comparison provides insights into shifting market dynamics and sectoral trends influencing demand.",
    },
    {
      id: 11,
      image: "/data-demand/FourCoreSegmentsOfPlatinumDemand.jpg",
      title: "Four Core Segments Of Platinum Demand",
      source: "",
      path: "/DataDemandDatabase/11",
      description:
        "This chart outlines the four core segments of platinum demand—Automotive, Industrial, Jewellery, and Investment—along with their respective minimum and maximum ranges over the period 2019-2023. The Automotive sector consistently represents the largest share, ranging between 30% and 44%. The Industrial sector follows, with a range of 27% to 36%, while the Jewellery sector accounts for 23% to 30% of demand. The Investment sector shows the most variability, with a range from -10% to 20%, reflecting fluctuations in market conditions and investor behavior. This data provides a comprehensive view of the primary drivers of platinum demand and their variability over recent years.",
    },
    {
      id: 12,
      image: "/data-demand/ShareOfAutomotivePGMDemandByMetal.jpg",
      title: "Share Of Automotive PGM Demand By Metal",
      source: "PGM Market Report",
      path: "/DataDemandDatabase/12",
      description:
        "This chart illustrates the share of automotive PGM demand by metal—Platinum, Palladium, and Rhodium—from 2012 to 2024. The y-axis represents the percentage share of total demand, showing how the contribution of each metal has evolved over the years. The data highlights the relative importance and fluctuations in the use of Platinum, Palladium, and Rhodium in the automotive sector, reflecting changes in technology, regulations, and market dynamics. This visualization provides insights into the shifting preferences and utilization of these metals in automotive applications over the past decade and into the near future.",
    },
    {
      id: 13,
      image: "/data-demand/IndustrialPGMDemandByMetal.jpg",
      title: "Industrial PGM Demand By Metal",
      source: "PGM Market Report",
      path: "/DataDemandDatabase/13",
      description:
        "This chart presents the industrial demand for Platinum Group Metals (PGMs)—Ruthenium, Rhodium, Palladium, and Platinum—from 2010 to 2024. It illustrates the trends and fluctuations in demand for each metal within the industrial sector over the years. The data provides insights into how the utilization of these metals has evolved, reflecting changes in industrial applications, technological advancements, and market conditions. This visualization helps in understanding the relative importance and demand dynamics of each PGM in industrial contexts over the past decade and into the near future.",
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
          Explore detailed data on the demand for platinum and other PGMs across
          various industries. Gain insights into consumption patterns,
          sector-specific demand drivers, and market trends shaping the future
          of these critical metals.
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
                  {chart.description.substring(0, 117)}...
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
                className="block cursor-pointer duration-200"
              >
                <div className="w-full bg-white rounded-lg p-2 sm:p-4 flex flex-col">
                  <h3 className="font-medium text-black/90 text-sm mb-2 lg:text-xl">
                    {table.title}
                  </h3>
                  <div className="w-full">
                    <table className="w-full text-[10px] sm:text-sm border border-gray-200">
                      <thead>
                        <tr className="bg-gray-50">
                          {table.data[0].map((header, index) => (
                            <th
                              key={index}
                              className="text-left p-0.5 sm:p-2 text-accent border-b border-r border-gray-200 font-medium break-words"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.data.slice(1, 6).map((row, rowIndex) => (
                          <tr key={rowIndex} className="hover:bg-gray-50">
                            {row.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className={`p-0.5 sm:p-2 border-b border-r border-gray-200 text-black/80 break-words ${
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
                  <div className="text-xs sm:text-sm text-black/60 mt-3 text-center">
                    ......
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* ......................... */}
      {/* {tables.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mt-16">
          <h2 className="cambay text-xl sm:text-2xl font-semibold mb-5">
            {category.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14">
            {category.tables.map((table) => (
              <div
                key={table.id}
                onClick={() => handleNavigation(table.path)}
                className="block cursor-pointer duration-200"
              >
                <div className="w-full bg-white rounded-lg p-4 flex flex-col">
                  <h3 className="font-medium text-black/90 text-lg mb-3 lg:text-xl">
                    {table.title}
                  </h3>
                  <div className="overflow-hidden sm:overflow-visible md:overflow-visible">
                    <div className="overflow-x-auto md:overflow-visible">
                      <table className="w-full text-sm border border-gray-200">
                        <thead>
                          <tr className="bg-gray-50">
                            {table.data[0].map((header, index) => (
                              <th
                                key={index}
                                className="text-left p-2 text-accent border-b border-r border-gray-200 font-medium"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {table.data.slice(1, 6).map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-gray-50">
                              {row.map((cell, cellIndex) => (
                                <td
                                  key={cellIndex}
                                  className={`p-2 border-b border-r border-gray-200 text-black/80 ${
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
                  <div className="text-sm text-black/60 mt-3 text-center">
                    ......
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default DDemandDatabase;
