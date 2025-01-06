import React from "react";
import { useRouter } from "next/router";
import DataBreadcrumb from "@/components/Data/DataBreadcrumb";
import Footer from "@/components/Footer";

const ChartSubpage = () => {
  const router = useRouter();
  const { chartId } = router.query;
  const charts = [
    {
      id: 1,
      image: "/data-price-premiums/PlatinumInKeyEmergingMarketCurrencies.jpg",
      title: "Platinum Price In Key Emerging Market Currencies",
      source: "Bloomberg, WPIC Research",
      path: "/DataPricePremiums/1",
    },
    {
      id: 2,
      image:
        "/data-price-premiums/PreciousMetalsPricePerformanceOver1-40YearPeriods.jpg",
      title: "Precious Metals Price Performance Over 1-40 Year Periods",
      source: "Bloomberg, WPIC Research",
      path: "/DataPricePremiums/2",
    },
    {
      id: 3,
      image:
        "/data-price-premiums/PlatinumPriceInKeyDevelopedMarketCurrencies.jpg",
      title: "Platinum Price In Key Developed Market Currencies",
      source: "Bloomberg, WPIC Research",
      path: "/DataPricePremiums/3",
    },
    {
      id: 4,
      image: "/data-price-premiums/PlatinumPriceSince1976.jpg",
      title: "Platinum Price Since 1976",
      source: "Bloomberg, WPIC Research",
      path: "/DataPricePremiums/4",
    },
    {
      id: 5,
      image: "/data-price-premiums/PlatinumVsEquityIndices.jpg",
      title: "Platinum vs. Equity Indices",
      source: "Bloomberg, WPIC Research",
      path: "/DataPricePremiums/5",
    },
    {
      id: 6,
      image: "/data-price-premiums/PreciousMetalsPricePerformanceSince1995.jpg",
      title: "Precious Metals Price Performance Since 1995",
      source: "Bloomberg, WPIC Research",
      path: "/DataPricePremiums/6",
    },
    {
      id: 7,
      image:
        "/data-price-premiums/PlatinumVsVariousAssetOver5YearWindowsAnnualisedReturns.jpg",
      title:
        "Platinum vs. Various Asset Over 5 Year Windows Annualised Returns",
      source: "Bloomberg, WPIC Research",
      path: "/DataPricePremiums/7",
    },
    {
      id: 8,
      image: "/data-price-premiums/PGMBasketPricesSupportLevels.jpg",
      title: "PGM Basket Prices Support Levels",
      source: "Bloomberg, WPIC Research",
      path: "/DataPricePremiums/8",
    },
    {
      id: 9,
      image:
        "/data-price-premiums/MarketEconomicFactorsAreDirectionallyTrendingFavourablyForPlatinumPrices1.jpg",
      title: "Market Economic Factors: ZAR US$",
      source: "Bloomberg, WPIC Research",
      path: "/DataPricePremiums/9",
    },
    {
      id: 10,
      image:
        "/data-price-premiums/MarketEconomicFactorsAreDirectionallyTrendingFavourablyForPlatinumPrices2.jpg",
      title: "Market Economic Factors: Interest Rates",
      source: "Bloomberg, WPIC Research",
      path: "/DataPricePremiums/10",
    },
    {
      id: 11,
      image:
        "/data-price-premiums/MarketEconomicFactorsAreDirectionallyTrendingFavourablyForPlatinumPrices3.jpg",
      title: "Market Economic Factors: Gold",
      source: "Bloomberg, WPIC Research",
      path: "/DataPricePremiums/11",
    },
  ];
  const chart = charts.find((item) => item.id === parseInt(chartId));

  if (!chart) return <p>Loading...</p>;

  return (
    <div>
      <DataBreadcrumb title={chart.title} />
      <div className="px-6 py-10 md:px-20 mt-14 mb-10">
        <h1 className="text-2xl font-bold">{chart.title}</h1>
        <p className="text-gray-500 mt-2">Source: {chart.source}</p>
        <div className="mt-6 w-full md:w-[70%] h-full mx-auto flex justify-center items-center">
          <img
            src={chart.image}
            alt={chart.title}
            className="w-full h-auto rounded-lg object-contain"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChartSubpage;
