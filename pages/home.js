import Hero from "@/components/Home/Hero";
import LatestNews from "@/components/Home/LatestNews";
import StockNews from "@/components/Home/StockNews";
import Navbar from "@/components/Navbar";
import PopularIntradayReturn from "@/components/Home/PopularIntradayReturn";
import React from "react";

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="flex justify-between flex-wrap px-3 md:px-10 lg:px-16 py-12">
        {/* left  */}
        <div className="w-full md:w-[66%] flex flex-col space-y-20">
          <LatestNews />
          <StockNews />
        </div>
        {/* right  */}
        <div className="w-full md:w-[26%]">
          <PopularIntradayReturn />
        </div>
      </div>
    </div>
  );
};

export default home;
