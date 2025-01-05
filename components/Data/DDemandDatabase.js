import React from "react";
import { useRouter } from "next/router";

const DDemandDatabase = () => {
  const router = useRouter();

  const charts = [
    {
      id: 1,
      image: "/data-demand/AnnualPlatinumSupplyDemandBalance(koz).jpg",
      title: "Annual Platinum Supply / Demand Balance (koz)",
      source: "SFA (Oxford) 2014 - 2018, Metals Focus 2019 - 2025f",
      path: "/charts/",
    },
    {
      id: 2,
      image: "/data-demand/AnnualTotalDemandAndChanges2023To2025f(koz).jpg",
      title: "Annual Total Demand And Changes 2023 To 2025f (koz)",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/charts/",
    },
    {
      id: 3,
      image: "/data-demand/ChangesInDemandByCategory,2023Vs2024f.jpg",
      title: "Changes In Demand By Category, 2023 vs. 2024f",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/charts/",
    },
    {
      id: 4,
      image: "/data-demand/SupplyDemandBalanceBalance,koz,Q32024.jpg",
      title: "Supply Demand Balance Balance, koz, Q3 2024",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/charts/",
    },
    {
      id: 5,
      image: "/data-demand/SupplyDemandBalance,koz,2013-2024f.jpg",
      title: "Supply Demand Balance, koz, 2013-2024f",
      source: "SFA (Oxford) 2013 - 2018, Metals Focus 2019 - 2024f",
      path: "/charts/",
    },
    {
      id: 6,
      image: "/data-demand/PlatinumInvestment,koz.jpg",
      title: "Platinum Investment, koz",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/charts/",
    },
    {
      id: 7,
      image: "/data-demand/PlatinumDemand,koz.jpg",
      title: "Platinum Demand, koz",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/charts/",
    },
    {
      id: 8,
      image: "/data-demand/ETFHoldingsByRegion.jpg",
      title: "ETF Holdings By Region",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/charts/",
    },
    {
      id: 9,
      image: "/data-demand/ChinasTotalBarAndCoinDemand.jpg",
      title: "China's Total Bar And Coin Demand",
      source: "Metals Focus",
      path: "/charts/",
    },
    {
      id: 10,
      image: "/data-demand/DemandEndUseShares,2023Vs2024f.jpg",
      title: "Demand End Use Shares, 2023 vs. 2024f",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/charts/",
    },
    {
      id: 11,
      image: "/data-demand/FourCoreSegmentsOfPlatinumDemand.jpg",
      title: "Four Core Segments Of Platinum Demand",
      source: "",
      path: "/charts/",
    },
  ];

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="px-3 md:px-12 py-5 md:py-5">
      <div className="mb-9 md:mb-16">
        <h1 className="cambay text-[22px] sm:text-2xl font-semibold">
          Demand Database
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

export default DDemandDatabase;
