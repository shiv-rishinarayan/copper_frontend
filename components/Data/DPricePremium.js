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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
  },
  {
    id: 2,
    image:
      "/data-price-premiums/PreciousMetalsPricePerformanceOver1-40YearPeriods.jpg",
    title: "Precious Metals Price Performance Over 1-40 Year Periods",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
  },
  {
    id: 3,
    image:
      "/data-price-premiums/PlatinumPriceInKeyDevelopedMarketCurrencies.jpg",
    title: "Platinum Price In Key Developed Market Currencies",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
  },
  {
    id: 4,
    image: "/data-price-premiums/PlatinumPriceSince1976.jpg",
    title: "Platinum Price Since 1976",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
  },
  {
    id: 5,
    image: "/data-price-premiums/PlatinumVsEquityIndices.jpg",
    title: "Platinum vs. Equity Indices",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
  },
  {
    id: 6,
    image: "/data-price-premiums/PreciousMetalsPricePerformanceSince1995.jpg",
    title: "Precious Metals Price Performance Since 1995",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
  },
  {
    id: 7,
    image:
      "/data-price-premiums/PlatinumVsVariousAssetOver5YearWindowsAnnualisedReturns.jpg",
    title: "Platinum vs. Various Asset Over 5 Year Windows Annualised Returns",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
  },
  {
    id: 8,
    image: "/data-price-premiums/PGMBasketPricesSupportLevels.jpg",
    title: "PGM Basket Prices Support Levels",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
  },
  {
    id: 9,
    image:
      "/data-price-premiums/MarketEconomicFactorsAreDirectionallyTrendingFavourablyForPlatinumPrices1.jpg",
    title: "Market Economic Factors: ZAR US$",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/9",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
  },
  {
    id: 10,
    image:
      "/data-price-premiums/MarketEconomicFactorsAreDirectionallyTrendingFavourablyForPlatinumPrices2.jpg",
    title: "Market Economic Factors: Interest Rates",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/10",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
  },
  {
    id: 11,
    image:
      "/data-price-premiums/MarketEconomicFactorsAreDirectionallyTrendingFavourablyForPlatinumPrices3.jpg",
    title: "Market Economic Factors: Gold",
    source: "Bloomberg, WPIC Research",
    path: "/DataPricePremiums/11",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
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
