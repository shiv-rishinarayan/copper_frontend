import { useRouter } from "next/router";
import DataBreadcrumb from "@/components/Data/DataBreadcrumb";
import React from "react";
import Footer from "@/components/Footer";

const ChartSubpage = () => {
  const router = useRouter();
  const { chartId } = router.query;

  const charts = [
    {
      id: 1,
      image:
        "/WPIC-supply-demand-estimates/2025OutlookAnnualTotalSupplyAndChanges2023To2025f(koz).jpg",
      title:
        "2025 Outlook: Annual Total Supply And Changes 2023 To 2025f (koz)",
      source: "WPIC Platinum Quarterly Q3 2024, Metals Focus",
      path: "/DataWPICSupplyDemand/1",
      description:
        "2025 Outlook: Fundamentals are entrenched as both supply and demand see minor changes. Annual Total Supply And Changes 2023 To 2025f (koz)",
    },
    {
      id: 2,
      image:
        "/WPIC-supply-demand-estimates/2025OutlookAnnualTotalDemandAndChanges2023To2025f(koz).jpg",
      title:
        "2025 Outlook: Annual Total Demand And Changes 2023 To 2025f (koz)",
      source: "WPIC Platinum Quarterly Q3 2024, Metals Focus",
      path: "/DataWPICSupplyDemand/2",
      description:
        "2025 Outlook: Fundamentals are entrenched as both supply and demand see minor changes. Annual Total Demand And Changes 2023 To 2025f (koz)",
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
      image:
        "/WPIC-supply-demand-estimates/FundamentalsDrivetraintransition.jpg",
      title: "Fundamentals: Drivetrain Transition",
      source:
        "Global Data Regional Automative Associations (US, China & Europe) WPIC Research",
      path: "/DataWPICSupplyDemand/8",
      description:
        "Fundamentals: Higher-for-longer ice demand entrenched in the drivetrain transition. Drivetrain transition: Higher-for-longer ICE and hybrid well established, Decelerating BEV growth 2024: Cost and Infrastructure, 2025 growth: Hybridisation complements BEV to meet CO2 reductions",
    },
    {
      id: 9,
      image: "/WPIC-supply-demand-estimates/PGMMarketBalance.jpg",
      title: "PGM Market Balance",
      source: "PGM Market Report",
      path: "/DataWPICSupplyDemand/9",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
  ];

  const chart = charts.find((item) => item.id === parseInt(chartId));

  if (!chart) {
    return <p>Loading...</p>; // Optional: Add a better loading state
  }

  return (
    <div>
      <DataBreadcrumb title={chart.title} />
      <div className="px-6 py-10 md:px-20 mt-14 mb-10">
        <h1 className="text-2xl font-bold">{chart.title}</h1>
        <p className="mt-1.5 mb-1 font-medium text-black/50 text-sm">
          Source:{" "}
          <span className="hover:text-accent transition-all duration-200 text-sm">
            {chart.source}
          </span>
        </p>
        <p className="mt-3 text-black/80 text-[15px]">{chart.description}</p>
        <div className="mt-14 w-full md:w-[65%] h-full  flex justify-center items-center">
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
