import React from "react";

const DataHero = () => {
  return (
    <div
      className="relative w-full bg-secondary/0 py-16 md:py-32 lg:py-44 bg-cover bg-top"
      style={{
        backgroundImage:
          "url(https://www.garfieldrefining.com/wp-content/uploads/2021/07/platinum-scaled.jpeg)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50 bg-opacity-70 "></div>

      <div className="max-w-7xl mx-auto relative container px-4 sm:px-6 md:px-12 z-10 pt-14 md:pt-12">
        <div className="w-full md:w-[60%] lg:w-[55%]">
          <h1 className="text-2xl sm:text-3xl md:text-[3rem] lg:text-[3.1rem] font-bold text-white leading-tight sm:leading-[1.15]">
            Discover the data you need to analyse and{" "}
            <span className="text-accent">Research Platinum</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DataHero;
