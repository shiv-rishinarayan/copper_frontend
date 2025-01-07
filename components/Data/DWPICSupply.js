import React from "react";
import { useRouter } from "next/router";

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
              {chart.description.substring(0, 120)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DWPICSupply;
