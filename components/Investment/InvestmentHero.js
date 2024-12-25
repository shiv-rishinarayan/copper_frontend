import React from "react";

const InvestmentHero = () => {
  return (
    <div
      className="relative w-full bg-secondary/0 py-16 md:py-24 lg:py-48 bg-cover bg-top"
      style={{
        backgroundImage: "url(/investmenthero1.png)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary bg-opacity-20"></div>

      <div className="relative container px-4 sm:px-6 md:px-12 z-10">
        <div className="w-full md:w-[60%] lg:w-[50%]">
          <h1 className="text-2xl sm:text-3xl md:text-[3rem] lg:text-[3.15rem] font-bold text-primary/90 leading-tight lg:leading-[1.1]">
            Elevate Your Portfolio with{" "}
            <span className="text-accent/90">
              Platinum Investment Strategies
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default InvestmentHero;
