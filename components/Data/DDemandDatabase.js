// import React from 'react'

// const DDemandDatabase = () => {
//   return (
//     <div className="px-3 md:px-12 py-5 md:py-5">
//       <h1 className="cambay text-[22px] sm:text-3xl  font-semibold">Demand Database</h1>

//       {/* content  */}
//       <div className="mt-1 md:mt-5">
//         <div className="w-full rounded-md bg-secondary/15 h-[40vh]"></div>
//       </div>
//     </div>
//   )
// }

// export default DDemandDatabase

import React from "react";

const DDemandDatabase = () => {
  // Data structure with specific chart information
  const charts = [
    {
      id: 1,
      image: "/data-demand/platinum-demand.jpg",
      title: "Chart 1 Title",
      source: "Source: Dataset 1",
    },
    {
      id: 2,
      image: "/data-demand/supply-demand-balance.jpg",
      title: "Chart 2 Title",
      source: "Source: Dataset 2",
    },
    {
      id: 3,
      image: "/data-demand/platinum-investments.jpg",
      title: "Chart 3 Title",
      source: "Source: Dataset 3",
    },
  ];

  return (
    <div className="px-3 md:px-12 py-5 md:py-5">
      <h1 className="cambay text-[22px] sm:text-2xl font-semibold">
        Demand Database
      </h1>

      {/* Content */}
      <div className="mt-1 md:mt-5">
        <div className="w-full rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {charts.map((chart) => (
              <div key={chart.id} className="flex flex-col items-center">
                {/* Chart image */}
                <div className="w-full h-[200px] md:h-[300px] flex items-center justify-center">
                  <img
                    src={chart.image}
                    alt={`Chart ${chart.id}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Chart title */}
                <h3 className="text-lg font-medium mt-3">{chart.title}</h3>

                {/* Source text */}
                <p className="mt-1 text-sm text-gray-500">{chart.source}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DDemandDatabase;
