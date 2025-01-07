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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
  },
  {
    id: 2,
    image:
      "/WPIC-supply-demand-estimates/2025OutlookAnnualTotalDemandAndChanges2023To2025f(koz).jpg",
    title: "2025 Outlook: Annual Total Demand And Changes 2023 To 2025f (koz)",
    source: "WPIC Platinum Quarterly Q3 2024, Metals Focus",
    path: "/DataWPICSupplyDemand/2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
  },
  {
    id: 3,
    image: "/WPIC-supply-demand-estimates/PriceDriversMarketDeficits.jpg",
    title: "Price Drivers: Market Deficits",
    source: "Bloomberg, WPIC Research",
    path: "/DataWPICSupplyDemand/3",
    description:
      "Price Drivers: Ongoing market deficits and depletion of above ground stocks. Market deficits : We forcast platinum market deficits countinuing through 2028",
  },
  {
    id: 4,
    image: "/WPIC-supply-demand-estimates/PriceDriversAboveGroundStocks.jpg",
    title: "Price Drivers: Above Ground Stocks",
    source: "Bloomberg, WPIC Research",
    path: "/DataWPICSupplyDemand/4",
    description:
      "Price Drivers: Ongoing market deficits and depletion of above ground stocks. Above Ground Stocks : Above ground stocks are fully depleted by 2028",
  },
  {
    id: 5,
    image:
      "/WPIC-supply-demand-estimates/FundamentalsAutomotiveDemandForPlatinum.jpg",
    title: "Fundamentals: Automotive Demand For Pt",
    source: "Metals Focus, WPIC Research",
    path: "/DataWPICSupplyDemand/5",
    description:
      "Fundamentals: The automotive and jewellery segments to grow in 2025f. Automotive demand for platinum: 2025f: +2% y/y, 8 year high, Included in outlook: +ve Hybridisation, +ve Commercial vehicle growth, +ve Pt:Pd substitution",
  },
  {
    id: 6,
    image:
      "/WPIC-supply-demand-estimates/FundamentalsJwelleryDemandForPlatinum.jpg",
    title: "Fundamentals: Jwellery Demand For Pt",
    source: "Metals Focus, WPIC Research",
    path: "/DataWPICSupplyDemand/6",
    description:
      "Fundamentals: The automotive and jewellery segments to grow in 2025f. Jwellery Demand For Platinum: 2025f: +2% y/y, Included in outlook: +ve China Growth, +ve India & US growing, +ve Pt:Au switching",
  },
  {
    id: 7,
    image: "/WPIC-supply-demand-estimates/FundamentalsDemand.jpg",
    title: "Fundamentals: Demand",
    source:
      "Global Data Regional Automative Associations (US, China & Europe) WPIC Research",
    path: "/DataWPICSupplyDemand/7",
    description:
      "Fundamentals: Higher-for-longer ice demand entrenched in the drivetrain transition. Demand: Weaker Q3'24, Pure-BEV and pure-ICE revised lower, 2025f growth of 3% y/y vs. 2024: Normalised inflation and Lower interest rates",
  },
  {
    id: 8,
    image: "/WPIC-supply-demand-estimates/FundamentalsDrivetraintransition.jpg",
    title: "Fundamentals: Drivetrain Transition",
    source:
      "Global Data Regional Automative Associations (US, China & Europe) WPIC Research",
    path: "/DataWPICSupplyDemand/8",
    description:
      "Fundamentals: Higher-for-longer ice demand entrenched in the drivetrain transition. Drivetrain transition: Higher-for-longer ICE and hybrid well established, Decelerating BEV growth 2024: Cost and Infrastructure, 2025 growth: Hybridisation complements BEV to meet CO2 reductions",
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere
          architecto ut, labore voluptatum ad magni assumenda libero quaerat
          aspernatur quasi fugiat, quas quo, laudantium ullam distinctio numquam
          beatae illum? ullam distinctio numquam
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
              {chart.description.substring(0, 105)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DWPICSupply;
