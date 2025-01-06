import React from "react";
import { useRouter } from "next/router";

const DSupply = () => {
  const router = useRouter();

  const charts = [
    {
      id: 1,
      image: "/data-supply/AnnualTotalSuppyAndChanges2023To2025.jpg",
      title: "Annual Total Supply And Changes 2023 To 2025",
      source: "Metals Focus Prepared For World Platinum Investment Council",
      path: "/DataSupply/1",
    },
    {
      id: 2,
      image: "/data-supply/ChangesInSupply,2023Vs2024.jpg",
      title: "Changes In Supply, 2023 vs. 2024",
      source: "Metals Focus Prepared For World Platinum Investment Council",
      path: "/DataSupply/2",
    },
    {
      id: 3,
      image: "/data-supply/PlatinumSupply.jpg",
      title: "Platinum Supply",
      source: "Metals Focus Prepared For World Platinum Investment Council",
      path: "/DataSupply/3",
    },
    {
      id: 4,
      image: "/data-supply/SouthAfricaAveragrPlatinumProductionForecasts.jpg",
      title: "South African Average Platinum Production Forecasts",
      source: "Metals Focus 2022 to 2024F, Company data,WPIC 2025F and after",
      path: "/DataSupply/4",
    },
  ];

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="px-3 md:px-12 py-5 md:py-5">
      <div className="mb-9 md:mb-16">
        <h1 className="cambay text-[22px] sm:text-2xl font-semibold">Supply</h1>
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

export default DSupply;
