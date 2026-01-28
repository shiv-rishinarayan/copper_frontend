import React from "react";

const DataHero = () => {
  return (
    <div className="relative bg-black w-full py-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-top"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.8)), url(/datahero.jpg)`,
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* <div
          className="relative flex items-start overflow-hidden rounded-lg fade-in"
          style={{
            height: "350px",
            paddingTop: "80px",
          }}
        > */}
        <div
          className="relative flex items-start overflow-hidden rounded-lg fade-in pt-[60px] md:pt-[80px] "
          style={{ height: "350px" }}
        >
          {/* Text Content */}
          <div className="relative z-10 p-6 text-white max-w-2xl">
            <p className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-accent">
              Copper Data
            </p>

            <h1 className="text-2xl lg:text-4xl font-bold my-4 cambay">
              Discover the data you need to analyze and{" "}
              <span className="text-white">Research Copper</span>
            </h1>

            <p className="text-sm md:text-base mb-10">
              Access comprehensive Copper market data, including price trends,
              supply and demand metrics, and industry analysis. Our detailed
              datasets provide the insights you need for informed
              decision-making in the Copper market.
            </p>

            <div className="text-xs text-gray-300">
              <p className="text-gray-300">
                Unlock actionable insights with reliable data and in-depth
                expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataHero;
