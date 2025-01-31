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
        "2025 Outlook: Annual Total Supply and Changes 2023 to 2025f (koz). Platinum supply in 2025 is projected to see a modest increase, largely driven by improved recycling rates as the industry seeks to maximize the utilization of available platinum. This uptick in recycling is expected to make up for the slight decline in mining production, which continues to face challenges due to geopolitical factors, lower ore grades, and rising extraction costs. The forecasted increase in supply from 7,269 koz in 2024 to 7,324 koz in 2025 reflects this balance. The platinum market is adapting to the evolving dynamics of resource availability and sustainability efforts, as manufacturers seek to reduce their reliance on primary mining through enhanced recycling initiatives. Moreover, advancements in extraction technology are providing marginal improvements in recovery rates, which could further support the stability of platinum supply in the medium term. While the growth in supply is modest, it remains a critical factor in maintaining market balance amidst growing demand in specific sectors.",
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
        "2025 Outlook: Annual Total Demand and Changes 2023 to 2025f (koz).The demand for platinum in 2025 is expected to remain robust, with significant increases in the automotive and jewelry industries. Automotive demand is particularly strong due to the ongoing use of platinum in internal combustion engines, especially in regions with high vehicle sales and slow adoption of electric vehicles. In addition to this, there is an increasing trend toward using platinum in alternative fuel cell technologies, which is also expected to contribute to a modest rise in overall demand. The jewelry sector is also showing positive growth, driven by platinum's appeal as a luxury and durable metal in high-end pieces. However, industrial demand, particularly from sectors such as electronics and chemical manufacturing, is forecasted to experience a slight downturn, primarily due to economic slowdowns in major industrial regions. Despite this, the overall demand for platinum remains strong, though it is expected to decrease marginally from 7,951 koz in 2024 to 7,863 koz in 2025, reflecting shifting market dynamics and the varying pace of recovery across industries.",
    },
    {
      id: 3,
      image: "/WPIC-supply-demand-estimates/PriceDriversMarketDeficits.jpg",
      title: "Price Drivers: Market Deficits",
      source: "Bloomberg, WPIC Research",
      path: "/DataWPICSupplyDemand/3",
      description:
        "Price Drivers: Ongoing Market Deficits and Depletion of Above-Ground Stocks.The platinum market is facing persistent deficits as demand continues to outstrip supply, a situation that has been exacerbated by the depletion of above-ground stocks. These stocks, which have been a buffer against production shortfalls in the past, are diminishing at a rapid pace, creating upward pressure on prices. As these stockpiles deplete, the market will increasingly depend on new mining output to meet demand, but with mining production expected to decline slightly, this reliance on primary supply could intensify price volatility. Historical trends have shown that periods of supply deficits are often accompanied by significant price fluctuations, and the forecasted continuation of this pattern suggests that market participants will need to prepare for ongoing volatility. Projections indicate that platinum market deficits will persist through 2028, with supply struggles expected to increase as both demand from key sectors and the depletion of above-ground stocks continue to outpace production capacity. This long-term outlook underscores the need for increased investment in mining and recycling technologies to address the looming supply-demand imbalance.",
    },
    {
      id: 4,
      image: "/WPIC-supply-demand-estimates/PriceDriversAboveGroundStocks.jpg",
      title: "Price Drivers: Above Ground Stocks",
      source: "Bloomberg, WPIC Research",
      path: "/DataWPICSupplyDemand/4",
      description:
        "The platinum market analysis from 1993 to 2025 (forecast) reveals a compelling narrative of market evolution and structural changes. Initially characterized by price stability around $400/oz throughout the 1990s, the market entered a transformative phase in the early 2000s with steadily rising prices, culminating in a dramatic peak near $1,700/oz in 2009. This period coincided with robust above-ground stocks, which have since shown a consistent downward trend. The post-2009 era marked a significant shift, with prices generally declining despite occasional rallies, while above-ground stocks continued their steady depletion. The relationship between prices and stocks becomes particularly noteworthy approaching 2025, where the forecast indicates a critical phase of rapidly depleting above-ground stocks. This depletion occurs alongside a modest upward price trend, suggesting potential supply constraints could influence future market dynamics. The data illustrates a clear transition from a market characterized by abundant supply and price stability to one facing increasing supply challenges and potential price volatility. The pattern of declining stocks coincides with evolving industrial demand, particularly from sectors like automotive and green technology, pointing to a market potentially entering a new phase where supply constraints could become a dominant price driver. This long-term market assessment indicates that structural changes in both supply fundamentals and demand patterns have reshaped the platinum market over three decades, with the forecast suggesting heightened importance of stock levels as a key market indicator moving forward.",
    },
    {
      id: 5,
      image:
        "/WPIC-supply-demand-estimates/FundamentalsAutomotiveDemandForPlatinum.jpg",
      title: "Fundamentals: Automotive Demand For Pt",
      source: "Metals Focus, WPIC Research",
      path: "/DataWPICSupplyDemand/5",
      description:
        "This chart tracks the demand for platinum in the automotive sector from 2021 to 2025, measured in kilotons (koz). It shows a fluctuating trend, with demand peaking in 2022 before declining in 2023. The forecast suggests a recovery in demand by 2025. The right-hand side axis represents the annual demand growth rate, which experienced a significant drop in 2023 but is expected to stabilize and grow slightly in the coming years. This data reflects the impact of market dynamics, such as changes in vehicle production and the adoption of alternative technologies, on platinum demand. The decline in 2023 could be attributed to reduced vehicle production or increased recycling of platinum. The recovery in 2025 may be driven by stricter emission regulations and the continued use of platinum in catalytic converters, despite the rise of electric vehicles.",
    },
    {
      id: 6,
      image:
        "/WPIC-supply-demand-estimates/FundamentalsJwelleryDemandForPlatinum.jpg",
      title: "Fundamentals: Jwellery Demand For Pt",
      source: "Metals Focus, WPIC Research",
      path: "/DataWPICSupplyDemand/6",
      description:
        "The chart illustrates the annual demand and its year-over-year (y/y) growth percentage from 2021 to 2025, with projections for 2024 and 2025. The annual demand, shown on the left-hand side, starts at 2,200 in 2021 and declines steadily each year, reaching a projected 1,400 by 2025. This indicates a significant decrease in demand over the five-year period. The y/y demand growth percentage, displayed on the right-hand side, begins at 8% in 2021 but drops sharply to 4% in 2022 and further to 0% in 2023, signaling stagnation. The projections for 2024 and 2025 show negative growth rates of -4% and -8%, respectively, suggesting a contraction in demand. The use of denotes forecasted values for these years. The chart's dual axes accommodate the range of values, with the left axis representing absolute demand and the right axis showing growth percentages. The decline in both demand and growth rates could be attributed to factors such as market saturation, economic downturns, or other external influences. The sharp transition from positive to negative growth rates highlights a significant shift in market conditions. This data is crucial for stakeholders to identify trends, adjust strategies, and make informed decisions, such as reducing production or exploring new markets to mitigate the impact of declining demand. Overall, the chart provides a clear visual representation of market dynamics, helping to understand both the absolute demand and its growth trajectory over the specified period.",
    },
    {
      id: 7,
      image: "/WPIC-supply-demand-estimates/FundamentalsDemand.jpg",
      title: "Fundamentals: Demand",
      source:
        "Global Data Regional Automative Associations (US, China & Europe) WPIC Research",
      path: "/DataWPICSupplyDemand/7",
      description:
        "The chart illustrates the market share percentage over several quarters, starting from Q1 2021 to Q1 2024. It begins with a market share of 30% in Q1 2021, indicating a strong initial presence. However, the market share declines significantly over the subsequent quarters, dropping to 20% in Q1 2022, 10% in Q1 2023, and finally reaching 0% in Q1 2024. This downward trend suggests a substantial contraction in market share over the four-year period. The term BEV likely refers to a specific metric or category relevant to the market being analyzed, possibly indicating a particular segment or product type. The consistent decline in market share could be attributed to various factors such as increased competition, changes in consumer preferences, or external market conditions. This data is crucial for stakeholders to understand the market dynamics and to strategize accordingly to address the declining market share. Overall, the chart provides a clear visual representation of the market share trends, highlighting the need for potential interventions to reverse or mitigate the downward trajectory.",
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
        "The chart depicts a gradual transition in drivetrain mix from 2023-2025. ICE and hybrid remain established, with flat production. BEV growth decelerates in 2024 due to cost and infrastructure challenges. In 2025, hybridization complements rising BEV adoption to meet emissions targets. Key factors include higher-for-longer ICE/hybrid, decelerating 2024 BEV growth, and hybridization supporting BEVs in 2025 for emissions. The data illustrates the industry's evolving landscape, balancing established and emerging drivetrain technologies. Overall, the transition indicates a more gradual shift, with ICE/hybrid and BEVs playing complementary roles amidst constraints.",
    },
    {
      id: 9,
      image: "/WPIC-supply-demand-estimates/PGMMarketBalance.jpg",
      title: "PGM Market Balance",
      source: "PGM Market Report",
      path: "/DataWPICSupplyDemand/9",
      description:
        "The chart lists three precious metals—Platinum, Palladium, and Rhodium—under the headings for 2023 and 2024. This suggests that the focus is on these metals for the specified years, likely in the context of their market performance, production, or usage trends. Platinum, Palladium, and Rhodium are highly valuable metals, commonly used in industrial applications, particularly in the automotive industry for catalytic converters, as well as in jewelry and electronics. The inclusion of both 2023 and 2024 indicates that the chart may be comparing or forecasting trends, prices, or demand for these metals over the two years. This information would be particularly relevant for investors, industry analysts, and stakeholders who are interested in understanding the dynamics of the precious metals market, including factors such as supply chain issues, technological advancements, or shifts in demand that could impact these metals during the specified period.",
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
        <p className="mt-3 text-black/80 text-[16px]">{chart.description}</p>
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
