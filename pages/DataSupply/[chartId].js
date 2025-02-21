import { useRouter } from "next/router";
import DataBreadcrumb from "@/components/Data/DataBreadcrumb";
import React from "react";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ChartSubpage = () => {
  const router = useRouter();
  const { chartId } = router.query;

  const charts = [
    {
      id: 1,
      image: "/data-supply/AnnualTotalSuppyAndChanges2023To2025.jpg",
      title: "Annual Total Supply And Changes 2023 To 2025",
      source: "Metals Focus Prepared For World Platinum Investment Council",
      path: "/DataSupply/1",
      description:
        "The chart appears to depict data related to mining supply and recycling over the years 2023 to 2025. The numbers listed, such as 7,159, 7,269, and 7,500, likely represent the total mining supply for specific periods, while the negative value (-133) and positive values (188) could indicate changes or adjustments in the supply. The terms 2024f and 2025f suggest forecasts for those years. Recycling is also mentioned, indicating it plays a role in the overall supply chain. The chart seems to track the balance between new mining output and recycled materials, showing fluctuations and projected trends over the three-year span.",
    },
    {
      id: 2,
      image: "/data-supply/ChangesInSupply,2023Vs2024.jpg",
      title: "Changes In Supply, 2023 vs. 2024",
      source: "Metals Focus Prepared For World Platinum Investment Council",
      path: "/DataSupply/2",
      description:
        "This world map provides an overview of platinum production and recycling data for several key regions in 2023 and 2024. North America is shown as a major platinum production center, with projected outputs of 275 koz in 2023 and 252 koz in 2024. Russia is also a significant producer, forecasted to yield 674 koz in 2023 and 678 koz in 2024. South Africa is expected to be the largest producer, with 3,957 koz in 2023 and 4,000 koz in 2024, while Zimbabwe's production is projected to decrease slightly from 507 koz in 2023 to 504 koz in 2024. The Other category represents smaller producers, with relatively stable production around 191 koz. In terms of recycling, the data indicates that North America, Russia, and South Africa have the highest levels, with increases expected in the Other category from 545 koz in 2023 to 1,587 koz in 2024. This information provides insights into the global distribution and potential future trends in the platinum market.",
    },
    {
      id: 3,
      image: "/data-supply/PlatinumSupply.jpg",
      title: "Platinum Supply",
      source: "Metals Focus Prepared For World Platinum Investment Council",
      path: "/DataSupply/3",
      description:
        "This chart provides a detailed breakdown of platinum market data, covering refined production, producer inventory, recycling, and total figures across several quarters from Q3 2023 to Q3 2024. Refined production shows a gradual increase over the quarters, rising from 1,393 koz in Q3 2023 to 1,827 koz in Q3 2024, suggesting growing platinum output. Producer inventory levels fluctuate, declining in Q1 2024 before rebounding, potentially indicating supply-demand dynamics. Recycling volumes remain relatively steady, ranging from 347 koz to 348 koz, showcasing consistent efforts to recover and reuse platinum. The total figures aggregate these metrics, displaying an overall growth trend in platinum market activity from 1,733 koz in Q3 2023 to 1,827 koz in Q3 2024, pointing to a positive outlook for the industry. This comprehensive data provides stakeholders with insights to analyze trends, identify potential imbalances, and make informed decisions about the platinum market's future.",
    },
    {
      id: 4,
      image: "/data-supply/SouthAfricaAveragrPlatinumProductionForecasts.jpg",
      title: "South African Average Platinum Production Forecasts",
      source: "Metals Focus 2022 to 2024F, Company data,WPIC 2025F and after",
      path: "/DataSupply/4",
      description:
        "The chart provides WPIC (World Platinum Investment Council) forecasts for South African platinum supply from 2022 to 2028, showing both the previous forecast (in green) and the revised forecast (in blue) for each year. The revised forecast suggests a general upward trend in platinum supply, with a dip in 2026 and 2027 before recovering in 2028. Compared to the previous forecast, the revised forecast indicates higher projected supply across most years, with the most significant change being the spike in 2024, where the revised forecast is substantially higher than the previous one. This suggests that the WPIC has adjusted its outlook for the South African platinum market, potentially due to factors such as improved mining productivity, new projects coming online, or changes in economic and industry conditions. The divergence between the previous and revised forecasts highlights the dynamic nature of the platinum market and the importance of regularly updating supply projections to account for evolving industry dynamics.",
    },
    {
      id: 5,
      image:
        "/data-supply/GlobalRecoveriesOfPlatinum,PalladiumAndRhodiumFromAutomotiveScrap.jpg",
      title:
        "Global Recoveries Of Platinum, Palladium And Rhodium From Automotive Scrap",
      source: "PGM Market Report",
      path: "/DataSupply/5",
      description:
        "The chart presents the historical and forecast trends for three precious metals: platinum, palladium, and rhodium, from 2015 to 2024. The chart depicts a clear upward trend for all three metals, with palladium and rhodium showing more pronounced growth compared to platinum. Palladium, in particular, exhibits a sharp increase, reaching over 4,000 koz by 2024, likely driven by rising demand from the automotive industry for catalytic converters. Rhodium also demonstrates significant growth, more than doubling in volume from 2015 to 2024, underscoring its importance in various industrial applications. Platinum, while not experiencing the same level of growth as palladium and rhodium, still maintains a substantial presence, with volumes projected to reach around 3,000 koz by 2024, suggesting its continued importance in the precious metals market. The contrasting trajectories of these three metals provide a comprehensive view of the evolving dynamics in the precious metals industry, which can inform investment decisions, production planning, and strategic initiatives for companies and policymakers operating in this sector.",
    },
  ];

  const chart = charts.find((item) => item.id === parseInt(chartId));

  if (!chart) {
    return <p>Loading...</p>; // Optional: Add a better loading state
  }

  return (
    <div>
      <SEO
        title={`${chart.title} - Data Supply & Market Insights`}
        description={chart.description}
        keywords="data, supply, market insights, price trends, investment data, financial charts, stock analysis"
        canonicalUrl={`https://musical-panda-75f15d.netlify.app/DataSupply/${chart.id}`}
      />
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
