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
      image: "/data-demand/AnnualPlatinumSupplyDemandBalance(koz).jpg",
      title: "Annual Platinum Supply / Demand Balance (koz)",
      source: "SFA (Oxford) 2014 - 2018, Metals Focus 2019 - 2025f",
      path: "/DataDemandDatabase/1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 2,
      image: "/data-demand/AnnualTotalDemandAndChanges2023To2025f(koz).jpg",
      title: "Annual Total Demand And Changes 2023 To 2025f (koz)",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 3,
      image: "/data-demand/ChangesInDemandByCategory,2023Vs2024f.jpg",
      title: "Changes In Demand By Category, 2023 vs. 2024f",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 4,
      image: "/data-demand/SupplyDemandBalanceBalance,koz,Q32024.jpg",
      title: "Supply Demand Balance Balance, koz, Q3 2024",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 5,
      image: "/data-demand/SupplyDemandBalance,koz,2013-2024f.jpg",
      title: "Supply Demand Balance, koz, 2013-2024f",
      source: "SFA (Oxford) 2013 - 2018, Metals Focus 2019 - 2024f",
      path: "/DataDemandDatabase/5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 6,
      image: "/data-demand/PlatinumInvestment,koz.jpg",
      title: "Platinum Investment, koz",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 7,
      image: "/data-demand/PlatinumDemand,koz.jpg",
      title: "Platinum Demand, koz",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/7",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 8,
      image: "/data-demand/ETFHoldingsByRegion.jpg",
      title: "ETF Holdings By Region",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/8",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 9,
      image: "/data-demand/ChinasTotalBarAndCoinDemand.jpg",
      title: "China's Total Bar And Coin Demand",
      source: "Metals Focus",
      path: "/DataDemandDatabase/9",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 10,
      image: "/data-demand/DemandEndUseShares,2023Vs2024f.jpg",
      title: "Demand End Use Shares, 2023 vs. 2024f",
      source: "Metals Focus Prepared For World Pt Investment Council",
      path: "/DataDemandDatabase/10",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 11,
      image: "/data-demand/FourCoreSegmentsOfPlatinumDemand.jpg",
      title: "Four Core Segments Of Platinum Demand",
      source: "",
      path: "/DataDemandDatabase/11",
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
        <div className="mt-12 w-full md:w-[70%] h-full  flex justify-center items-center">
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
