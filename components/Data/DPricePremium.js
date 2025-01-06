import React from "react";
import { useRouter } from "next/router";

const DPricePremium = () => {
  const router = useRouter();

  const charts = [
    {
      id: 1,
      image: "/data-price-premiums/PlatinumInKeyEmergingMarketCurrencies.jpg",
      title: "Platinum Price In Key Emerging Market Currencies",
      source: "Bloomberg, WPIC Research",
      path: "/charts/platinum-emerging-market-currencies",
    },
    {
      id: 2,
      image:
        "/data-price-premiums/PreciousMetalsPricePerformanceOver1-40YearPeriods.jpg",
      title: "Precious Metals Price Performance Over 1-40 Year Periods",
      source: "Bloomberg, WPIC Research",
      path: "/charts/chart-2",
    },
    {
      id: 3,
      image:
        "/data-price-premiums/PlatinumPriceInKeyDevelopedMarketCurrencies.jpg",
      title: "Platinum Price In Key Developed Market Currencies",
      source: "Bloomberg, WPIC Research",
      path: "/charts/chart-3",
    },
    {
      id: 4,
      image: "/data-price-premiums/PlatinumPriceSince1976.jpg",
      title: "Platinum Price Since 1976",
      source: "Bloomberg, WPIC Research",
      path: "/charts/chart-3",
    },
    {
      id: 5,
      image: "/data-price-premiums/PlatinumVsEquityIndices.jpg",
      title: "Platinum vs. Equity Indices",
      source: "Bloomberg, WPIC Research",
      path: "/charts/chart-3",
    },
    {
      id: 6,
      image: "/data-price-premiums/PreciousMetalsPricePerformanceSince1995.jpg",
      title: "Precious Metals Price Performance Since 1995",
      source: "Bloomberg, WPIC Research",
      path: "/charts/chart-3",
    },

    {
      id: 9,
      image:
        "/data-price-premiums/MarketEconomicFactorsAreDirectionallyTrendingFavourablyForPlatinumPrices1.jpg",
      title: "Market Economic Factors: ZAR US$",
      source: "Bloomberg, WPIC Research",
      path: "/charts/chart-3",
    },
    {
      id: 10,
      image:
        "/data-price-premiums/MarketEconomicFactorsAreDirectionallyTrendingFavourablyForPlatinumPrices2.jpg",
      title: "Market Economic Factors: Interest Rates",
      source: "Bloomberg, WPIC Research",
      path: "/charts/chart-3",
    },
    {
      id: 11,
      image:
        "/data-price-premiums/MarketEconomicFactorsAreDirectionallyTrendingFavourablyForPlatinumPrices3.jpg",
      title: "Market Economic Factors: Gold",
      source: "Bloomberg, WPIC Research",
      path: "/charts/chart-3",
    },
    {
      id: 7,
      image:
        "/data-price-premiums/PlatinumVsVariousAssetOver5YearWindowsAnnualisedReturns.jpg",
      title:
        "Platinum vs. Various Asset Over 5 Year Windows Annualised Returns",
      source: "Bloomberg, WPIC Research",
      path: "/charts/chart-3",
    },
    {
      id: 8,
      image: "/data-price-premiums/PGMBasketPricesSupportLevels.jpg",
      title: "PGM Basket Prices Support Levels",
      source: "Bloomberg, WPIC Research",
      path: "/charts/chart-3",
    },
  ];

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="px-3 md:px-12 py-5 md:py-5">
      <div className="mb-9 md:mb-16">
        <h1 className="cambay text-[22px] sm:text-2xl font-semibold">
          Price & Premiums
        </h1>
        <p className="text-black/80 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          explicabo eum nulla non sint voluptatibus voluptas animi deserunt quo,
          veniam, ex exercitationem distinctio odio, reiciendis quibusdam
          expedita adipisci iste aperiam!
        </p>
      </div>

      {/* Content */}
      <div className="mt-1 md:mt-5">
        <div className="w-full rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14">
            {charts.map((chart) => (
              <div
                key={chart.id}
                onClick={() => handleNavigation(chart.path)}
                className="block cursor-pointer"
              >
                {/* Chart title */}
                <h3 className="font-medium text-black/90 text-lg lg:text-xl">
                  {chart.title}
                </h3>

                {/* Source text */}
                <p className="mt-1 mb-1 font-medium text-black/50 text-sm">
                  Source:{" "}
                  <span className="text-black/50 hover:text-accent transition-all duration-200">
                    {chart.source}
                  </span>
                </p>

                {/* Chart image */}
                <div className="w-full h-[200px] md:h-[300px] flex items-center justify-center -ml-2">
                  <img
                    src={chart.image}
                    alt={`Chart ${chart.id}`}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DPricePremium;
