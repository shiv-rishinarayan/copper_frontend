import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const PopularTools = () => {
  return (
    <div>
      {/* heading  */}
      <div className="flex justify-between border-b border-black1/20 pb-2 mb-4">
        <h2 className="flex items-center text-[21px] font-bold cambay capitalize ">
          Popular Tools
        </h2>

        <a
          href="/investments"
          className="text-accent hover:text-accent/70 text-sm font-bold  "
        >
          view all&nbsp;&gt;
        </a>
      </div>

      {/* cards  */}
      <div className="flex flex-col gap-y-3">
        {/* c 1  */}
        <a href="/investments?tab=stock-screener">
          <div className="w-full bg-gray-100 p-4 py-7 border border-gray-300 rounded-sm relative group hover:bg-accent/15 hover:scale-[1.02] transition-all duration-200">
            <h1 className="text-[1.2rem] font-medium  text-black/80 mb-2 group-hover:text-accent">
              Copper Stock Screener
            </h1>
            <p className="text-[15px]  group-hover:text-black/70">
              Identify and filter Copper-focused companies based on key factors,
              financial metrics, and market performance.
            </p>
            <span className="absolute top-4 right-4 text-gray-400/80 font-extrabold text-[1.6rem] group-hover:text-green/60">
              <BsArrowUpRight />
            </span>
          </div>
        </a>

        {/* c 2  */}
        <a href="/investments?tab=insider-transactions">
          <div className="w-full bg-gray-100 p-4 py-7 border border-gray-300 rounded-sm relative group hover:bg-accent/15 hover:scale-[1.02] transition-all duration-200">
            <h1 className="text-[1.2rem] font-medium mb-2 text-black/80 group-hover:text-accent">
              Copper Insider Trading Screener
            </h1>
            <p className="text-[15px]  group-hover:text-black/70">
              Track insider transactions in the Copper space to gain valuable
              insights each Copper company.
            </p>
            <span className="absolute top-4 right-4 text-gray-400/80 font-extrabold text-[1.6rem] group-hover:text-green/60">
              <BsArrowUpRight />
            </span>
          </div>
        </a>

        {/* c 3  */}
        <a href="/investments?tab=etf-trust-holdings">
          <div className="w-full bg-gray-100 p-4 py-7 border border-gray-300 rounded-sm relative group hover:bg-accent/15 hover:scale-[1.02] transition-all duration-200">
            <h1 className="text-[1.2rem] font-medium text-black/80 mb-2 group-hover:text-accent">
              ETF/Trust Holdings
            </h1>
            <p className="text-[15px] group-hover:text-black/70">
              View up-to-date holdings and return profiles for Copper ETFs and
              track daily purchases and valuation metrics.
            </p>
            <span className="absolute top-4 right-4 text-gray-400/80 font-extrabold text-[1.6rem] group-hover:text-green/60">
              <BsArrowUpRight />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PopularTools;
