import React from "react";
import { useRouter } from "next/router";
import { tables } from "../../public/static-data/Table Data/SupplyDatabaseTable";
const DSupply = () => {
  const router = useRouter();

  const charts = [
    {
      id: 1,
      image: "/data-supply/AnnualTotalSuppyAndChanges2023To2025.jpg",
      title: "Annual Total Supply And Changes 2023 To 2025",
      source: "Metals Focus Prepared For World Platinum Investment Council",
      path: "/DataSupply/1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 2,
      image: "/data-supply/ChangesInSupply,2023Vs2024.jpg",
      title: "Changes In Supply, 2023 vs. 2024",
      source: "Metals Focus Prepared For World Platinum Investment Council",
      path: "/DataSupply/2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 3,
      image: "/data-supply/PlatinumSupply.jpg",
      title: "Platinum Supply",
      source: "Metals Focus Prepared For World Platinum Investment Council",
      path: "/DataSupply/3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
    {
      id: 4,
      image: "/data-supply/SouthAfricaAveragrPlatinumProductionForecasts.jpg",
      title: "South African Average Platinum Production Forecasts",
      source: "Metals Focus 2022 to 2024F, Company data,WPIC 2025F and after",
      path: "/DataSupply/4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias vitae consequatur veniam quos, eos quod similique blanditiis hic sit eaque dicta esse modi reiciendis officiis incidunt laudantium laboriosam commodi!",
    },
  ];

  const handleNavigation = (path) => {
    if (
      path.includes("DataSupply/platinum") ||
      path.includes("DataSupply/palladium") ||
      path.includes("DataSupply/rhodium") ||
      path.includes("DataSupply/ruthenium") ||
      path.includes("DataSupply/iridium")
    ) {
      // Extract the table ID from the tables array
      const allTables = tables.reduce(
        (acc, category) => [...acc, ...category.tables],
        []
      );
      const tableData = allTables.find((table) => table.path === path);
      if (tableData) {
        router.push(`/DataSupply/table/${tableData.id}`);
      }
    } else {
      router.push(path);
    }
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

      {/* Charts Section */}
      <div className="mt-1 md:mt-5">
        <div className="w-full rounded-md">
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
                <h3 className="font-medium text-black/90 text-lg mb-3 ml-2 lg:text-xl">
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
      </div>
      <h1 className="cambay text-[22px] sm:text-2xl font-semibold mt-10">
        Primary and the Secondary Supply :
      </h1>
      {/* Tables Section */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14 mt-10">
        {tables.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="font-medium text-black/90 text-lg mb-3 ml-4 lg:text-xl">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {category.tables.map((table) => (
                <div
                  key={table.id}
                  onClick={() => handleNavigation(table.path)}
                  className="block cursor-pointer duration-200"
                >
                  <div className="w-full bg-white rounded-lg p-4 flex flex-col">
                    <div className="w-full">
                      <table className="w-full text-xs sm:text-sm border border-gray-200">
                        <thead>
                          <tr className="bg-gray-50">
                            {table.data[0].map((header, index) => (
                              <th
                                key={index}
                                className="text-left p-1 sm:p-2 text-accent border-b border-r border-gray-200 font-medium whitespace-normal"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {table.data.slice(1, 2).map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-gray-50">
                              {row.map((cell, cellIndex) => (
                                <td
                                  key={cellIndex}
                                  className={`p-1 sm:p-2 border-b border-r border-gray-200 text-black/80 whitespace-normal ${
                                    cellIndex === 0 ? "font-medium" : ""
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="text-sm text-black/60 mt-3 text-center">
                      ......
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ...................... */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14 mt-10">
        {tables.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="font-medium text-black/90 text-lg mb-3 ml-4 lg:text-xl">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {category.tables.map((table) => (
                <div
                  key={table.id}
                  onClick={() => handleNavigation(table.path)}
                  className="block cursor-pointer duration-200"
                >
                  <div className="w-full bg-white rounded-lg p-4 flex flex-col">
                    <div className="overflow-hidden sm:overflow-visible md:overflow-visible">
                      <div className="overflow-x-auto md:overflow-visible">
                        <table className="w-full text-sm border border-gray-200">
                          <thead>
                            <tr className="bg-gray-50">
                              {table.data[0].map((header, index) => (
                                <th
                                  key={index}
                                  className="text-left p-2 text-accent border-b border-r border-gray-200 font-medium"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {table.data.slice(1, 2).map((row, rowIndex) => (
                              <tr key={rowIndex} className="hover:bg-gray-50">
                                {row.map((cell, cellIndex) => (
                                  <td
                                    key={cellIndex}
                                    className={`p-2 border-b border-r border-gray-200 text-black/80 ${
                                      cellIndex === 0 ? "font-medium" : ""
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="text-sm text-black/60 mt-3 text-center">
                      ......
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default DSupply;
