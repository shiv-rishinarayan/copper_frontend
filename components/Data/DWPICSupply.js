import React from "react";
import { useRouter } from "next/router";

const charts = [
  {
    id: 1,
    image:
      "/WPIC-supply-demand-estimates/2025OutlookAnnualTotalSupplyAndChanges2023To2025f(koz).jpg",
    title: "2025 Outlook: Annual Total Supply And Changes 2023 To 2025f (koz)",
    source: "WPIC Platinum Quarterly Q3 2024, Metals Focus",
    path: "/DataWPICSupplyDemand/1",
    description:
      "2025 Outlook: Annual Total Supply and Changes 2023 to 2025f (koz). Platinum supply in 2025 is projected to see a modest increase, largely",
  },
  {
    id: 2,
    image:
      "/WPIC-supply-demand-estimates/2025OutlookAnnualTotalDemandAndChanges2023To2025f(koz).jpg",
    title: "2025 Outlook: Annual Total Demand And Changes 2023 To 2025f (koz)",
    source: "WPIC Platinum Quarterly Q3 2024, Metals Focus",
    path: "/DataWPICSupplyDemand/2",
    description:
      "2025 Outlook: Annual Total Demand and Changes 2023 to 2025f (koz).The demand for platinum in 2025 is expected to remain robust, with significant",
  },
  {
    id: 3,
    image: "/WPIC-supply-demand-estimates/PriceDriversMarketDeficits.jpg",
    title: "Price Drivers: Market Deficits",
    source: "Bloomberg, WPIC Research",
    path: "/DataWPICSupplyDemand/3",
    description:
      "Price Drivers: Ongoing Market Deficits and Depletion of Above-Ground Stocks.The platinum market is facing persistent deficits as demand continues to outstrip supply",
  },
  {
    id: 4,
    image: "/WPIC-supply-demand-estimates/PriceDriversAboveGroundStocks.jpg",
    title: "Price Drivers: Above Ground Stocks",
    source: "Bloomberg, WPIC Research",
    path: "/DataWPICSupplyDemand/4",
    description:
      "The platinum market analysis from 1993 to 2025 (forecast) reveals a compelling narrative of market evolution and structural changes. Initially",
  },
  {
    id: 5,
    image:
      "/WPIC-supply-demand-estimates/FundamentalsAutomotiveDemandForPlatinum.jpg",
    title: "Fundamentals: Automotive Demand For Pt",
    source: "Metals Focus, WPIC Research",
    path: "/DataWPICSupplyDemand/5",
    description:
      "This chart tracks the demand for platinum in the automotive sector from 2021 to 2025, measured in kilotons (koz). It shows a fluctuating trend, with demand",
  },
  {
    id: 6,
    image:
      "/WPIC-supply-demand-estimates/FundamentalsJwelleryDemandForPlatinum.jpg",
    title: "Fundamentals: Jwellery Demand For Pt",
    source: "Metals Focus, WPIC Research",
    path: "/DataWPICSupplyDemand/6",
    description:
      "The chart illustrates the annual demand and its year-over-year (y/y) growth percentage from 2021 to 2025, with projections for 2024 and 2025. The annual demand,",
  },
  {
    id: 7,
    image: "/WPIC-supply-demand-estimates/FundamentalsDemand.jpg",
    title: "Fundamentals: Demand",
    source:
      "Global Data Regional Automative Associations (US, China & Europe) WPIC Research",
    path: "/DataWPICSupplyDemand/7",
    description:
      "The chart illustrates the market share percentage over several quarters, starting from Q1 2021 to Q1 2024. It begins with a market share of 30% in Q1 2021, ",
  },
  {
    id: 8,
    image: "/WPIC-supply-demand-estimates/FundamentalsDrivetraintransition.jpg",
    title: "Fundamentals: Drivetrain Transition",
    source:
      "Global Data Regional Automative Associations (US, China & Europe) WPIC Research",
    path: "/DataWPICSupplyDemand/8",
    description:
      "The chart depicts a gradual transition in drivetrain mix from 2023-2025. ICE and hybrid remain established, with flat production. BEV growth decelerates in",
  },
  {
    id: 9,
    image: "/WPIC-supply-demand-estimates/PGMMarketBalance.jpg",
    title: "PGM Market Balance",
    source: "PGM Market Report",
    path: "/DataWPICSupplyDemand/9",
    description:
      "The chart lists three precious metals—Platinum, Palladium, and Rhodium—under the headings for 2023 and 2024. This suggests that the focus is on these metals for the specified years,",
  },
];

const DWPICSupply = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    if (path) router.push(path);
  };

  return (
    <div className="px-3 md:px-12 py-5 md:py-5">
      <div className="mb-9 md:mb-16">
        <h1 className="cambay text-[22px] sm:text-2xl font-semibold">
          WPIC Supply Demand Estimates
        </h1>
        <p className="text-black/80 mt-2">
          WPIC Supply Demand Estimates highlight stable fundamentals in the 2025
          outlook, with minor shifts in supply and demand. Persistent market
          deficits, driven by declining above-ground stocks, continue to
          influence prices. Platinum demand in automotive and jewelry is
          expected to grow, while the drivetrain transition shapes future market
          trends.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14">
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
              {chart.description.substring(0, 105)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DWPICSupply;
