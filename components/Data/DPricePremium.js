import React from "react";
import { useRouter } from "next/router";
import DataDemandPlatinumSupplyTable from "./DataDemandPlatinumSupplyTable";
const charts = [
  {
    id: 1,
    image: "/data-price-premiums/PlatinumInKeyEmergingMarketCurrencies.jpg",
    title: "Platinum Price In Key Emerging Market Currencies",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/1",
    description:
      "The chart provide a detailed overview of platinum price trends from 1995 to 2023 across various currencies, including CNY, ZAR, and NR, as well as indexed values. They illustrate the fluctuations in platinum prices over nearly three decades, reflecting economic shifts, market demand, and global events that have influenced the precious metals market. The indexed chart offers a normalized view for easier comparison of relative price changes, highlighting periods of significant growth or decline. Meanwhile, the comparative chart showcases how platinum prices have varied in different economic contexts, emphasizing the interplay between global market forces and regional economic conditions. These visualizations are valuable for understanding the historical performance of platinum, offering insights into its role as a commodity and its sensitivity to economic and geopolitical factors over time.",
  },
  {
    id: 2,
    image:
      "/data-price-premiums/PreciousMetalsPricePerformanceOver1-40YearPeriods.jpg",
    title: "Precious Metals Price Performance Over 1-40 Year Periods",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/2",
    description:
      "This chart, titled 'Precious Metals Price Performance Over 1-40 Year Periods,' compares the performance of platinum, gold, and silver over various time frames, ranging from 5 to 40 years. It uses percentage changes to illustrate the growth or decline in the value of these precious metals, with performance metrics ranging from -100% to 800%. The chart provides a clear visual representation of how each metal has historically performed over different investment horizons, offering insights into their relative stability, volatility, and long-term value. This information is particularly useful for investors and analysts looking to understand the trends and potential returns associated with investing in precious metals over extended periods.",
  },
  {
    id: 3,
    image:
      "/data-price-premiums/PlatinumPriceInKeyDevelopedMarketCurrencies.jpg",
    title: "Platinum Price In Key Developed Market Currencies",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/3",
    description:
      "This chart provides a detailed historical overview of platinum prices expressed in major global currencies such as JPY (Japanese Yen), CHF (Swiss Franc), EUR (Euro), GBP (British Pound), and USD (US Dollar) from 1995 to 2023. It illustrates how platinum prices have fluctuated over nearly three decades, influenced by factors such as currency exchange rates, economic conditions, and global market dynamics. By comparing platinum prices across these key developed markets, the chart highlights regional variations and trends, offering valuable insights for investors, economists, and analysts. This information is particularly useful for understanding the interplay between precious metal valuations and currency movements, as well as for making informed decisions in global commodity trading and investment strategies.",
  },
  {
    id: 4,
    image: "/data-price-premiums/PlatinumPriceSince1976.jpg",
    title: "Platinum Price Since 1976",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/4",
    description:
      "This chart provides a historical overview of platinum prices in USD per ounce (USD/oz) over several decades. It highlights key price points at specific dates, such as 342 USD/oz on 31-Dec-85, 401 USD/oz on 31-Dec-95, 971 USD/oz on 31-Dec-65, and 894 USD/oz on 31-Dec-15. The chart illustrates the significant fluctuations in platinum prices, reflecting changes in market demand, economic conditions, and global events that have impacted the precious metals market. By presenting this long-term data, the chart offers valuable insights into the historical performance of platinum, helping investors and analysts understand its volatility and long-term trends. This information is crucial for making informed decisions in commodity trading and investment strategies.",
  },
  {
    id: 5,
    image: "/data-price-premiums/PlatinumVsEquityIndices.jpg",
    title: "Platinum vs. Equity Indices",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/5",
    description:
      "This chart compares the performance of platinum with various equity indices from 1995 to 2019. It presents indexed values that illustrate the relative performance of platinum against equities in regions such as the US, Europe, Emerging Markets (EM), and Japan. The indexed data shows fluctuations over the years, with notable peaks and troughs, reflecting the dynamic relationship between platinum prices and equity markets. This comparison provides valuable insights into how platinum, as a precious metal, performs in relation to stock markets, highlighting periods of divergence and convergence. Such information is crucial for investors and analysts seeking to diversify portfolios or understand the hedging potential of platinum against equity market volatility. The chart underscores the importance of considering both commodity and equity performance in comprehensive investment strategies.",
  },
  {
    id: 6,
    image: "/data-price-premiums/PreciousMetalsPricePerformanceSince1995.jpg",
    title: "Precious Metals Price Performance Since 1995",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/6",
    description:
      "This chart provides an indexed overview of the performance of key precious metals—silver, gold, and platinum—from 1995 to 2023. The indexed values range from 0 to 1,100, illustrating the relative price movements of these metals over nearly three decades. Specific price points are highlighted, such as silver at 31 USD/oz, gold at 2,661 USD/oz, and platinum at 950 USD/oz. The chart captures the significant fluctuations in precious metal prices, reflecting changes in market demand, economic conditions, and global events. By comparing the performance of these metals, the chart offers valuable insights into their relative stability, growth, and volatility, aiding investors and analysts in making informed decisions about commodity investments and portfolio diversification. This historical perspective is essential for understanding long-term trends in the precious metals market.",
  },
  {
    id: 7,
    image:
      "/data-price-premiums/PlatinumVsVariousAssetOver5YearWindowsAnnualisedReturns.jpg",
    title: "Platinum vs. Various Asset Over 5 Year Windows Annualised Returns",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/7",
    description:
      "This chart compares the annualized returns of platinum against various other assets over rolling five-year periods. It provides insights into how platinum has performed relative to equities, bonds, commodities, and other investment classes, helping investors assess its historical stability, growth potential, and role in a diversified portfolio. By analyzing these trends, users can gauge platinum’s resilience during different market cycles and its effectiveness as a hedge against inflation or economic uncertainty.",
  },
  {
    id: 8,
    image: "/data-price-premiums/PGMBasketPricesSupportLevels.jpg",
    title: "PGM Basket Prices Support Levels",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/8",
    description:
      "This chart provides a detailed analysis of key support levels for PGM (Platinum Group Metals) basket prices, identifying historical price points where strong buying interest has consistently emerged, preventing further declines. These support levels serve as critical indicators of market sentiment, offering insights into price stability and potential reversal points. By examining past trends and how prices have reacted at these levels, investors can assess the resilience of PGM prices and make more informed decisions regarding entry and exit points. Additionally, the chart helps highlight broader market dynamics, such as supply-demand imbalances, macroeconomic influences, and investor sentiment shifts that impact PGM pricing over time. Understanding these support levels can be valuable for traders, long-term investors, and industry stakeholders looking to navigate price fluctuations in the PGM market.",
  },
  {
    id: 9,
    image:
      "/data-price-premiums/MarketEconomicFactorsAreDirectionallyTrendingFavourablyForPlatinumPrices1.jpg",
    title: "Market Economic Factors: ZAR US$",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/9",
    description:
      "This chart explores the impact of key market and economic factors on the exchange rate between the South African Rand (ZAR) and the US Dollar (US$). It highlights trends, volatility, and correlations with macroeconomic indicators such as interest rates, inflation, trade balances, and commodity prices, particularly those of platinum and other PGMs, which are significant to South Africa’s economy. By analyzing historical movements and external influences, investors and businesses can gain insights into currency fluctuations, potential risks, and opportunities in forex markets. This data is crucial for assessing economic stability, global trade competitiveness, and the broader implications of exchange rate shifts on mining, exports, and financial markets.",
  },
  {
    id: 10,
    image:
      "/data-price-premiums/MarketEconomicFactorsAreDirectionallyTrendingFavourablyForPlatinumPrices2.jpg",
    title: "Market Economic Factors: Interest Rates",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/10",
    description:
      "This chart examines the relationship between interest rates and key market economic factors, highlighting how changes in central bank policies influence financial markets, inflation, and investment flows. It tracks historical interest rate trends and their impact on asset prices, including commodities, equities, and currencies, providing insights into borrowing costs, consumer spending, and overall economic growth. By analyzing these patterns, investors can better understand the role of interest rates in shaping market conditions, managing risk, and making informed decisions regarding fixed-income investments, currency markets, and macroeconomic trends.",
  },
  {
    id: 11,
    image:
      "/data-price-premiums/MarketEconomicFactorsAreDirectionallyTrendingFavourablyForPlatinumPrices3.jpg",
    title: "Market Economic Factors: Gold",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/11",
    description:
      "Gold often serves as a key indicator in the precious metals market, influencing and being influenced by factors such as inflation, currency fluctuations, interest rates, and global economic stability. If the chart includes gold, it might highlight how platinum prices correlate with or diverge from gold prices under different economic conditions. This comparison can provide insights into investor behavior, market sentiment, and the relative value of precious metals during periods of economic uncertainty or growth. Understanding these dynamics is crucial for investors and analysts looking to navigate the complexities of the commodities market.",
  },
  {
    id: 12,
    image: "/data-price-premiums/PlatinumPalladiumAndRhodiumPrices.jpg",
    title: "Platinum, Palladium And Rhodium Prices",
    source: "PGM Market Report",
    path: "/DataPricePremiums/12",
    description:
      "This chart provides a comparative analysis of the prices of these three precious metals over a specified period, likely from April to December of a given year. The data is plotted with Platinum and Palladium on the left-hand side (LHS) and Rhodium on the right-hand side (RHS), using a scale that ranges from 0 to 3,500 units. The chart captures the price fluctuations of these metals, reflecting their market dynamics and economic influences. Platinum, Palladium, and Rhodium are critical industrial metals, often used in automotive catalysts and other high-tech applications, making their prices sensitive to industrial demand and supply constraints. By comparing their price movements, the chart offers valuable insights into their relative performance and market behavior. This information is essential for investors, industry analysts, and economists who track the precious metals market for investment opportunities and economic indicators. The chart underscores the importance of monitoring these metals to understand broader market trends and economic conditions.",
  },
];

const DPricePremium = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    if (path) router.push(path);
  };

  return (
    <div className="px-3 md:px-12 py-5 md:py-5">
      <div className="mb-9 md:mb-16">
        <h1 className="cambay text-[22px] sm:text-2xl font-semibold">
          Price & Premiums
        </h1>
        <p className="text-black/80 mt-2">
          Explore in-depth analysis of price trends and premiums for platinum
          and other precious metals. Gain insights into the market dynamics and
          economic factors driving these trends.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14">
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
            <h3 className=" font-medium text-black/90 text-lg lg:text-xl">
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

      <div className="mt-20">
        <DataDemandPlatinumSupplyTable />
      </div>
    </div>
  );
};

export default DPricePremium;
