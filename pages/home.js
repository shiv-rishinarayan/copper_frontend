import Hero from "@/components/Home/Hero";
import LatestNews from "@/components/Home/LatestNews";
import Navbar from "@/components/Navbar";
import PopularIntradayReturn from "@/components/Home/PopularIntradayReturn";
import PlatinumLivePrice from "@/components/Home/PlatinumLivePrice";
import PlatinumTradingviewChart from "@/components/Home/PlatinumTradingviewChart";
import React from "react";

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="flex justify-between flex-wrap px-3 md:px-10 lg:px-16 py-12">
        {/* left  */}
        <div className="w-full md:w-[68%]">
          <LatestNews />
        </div>
        {/* right  */}
        <div className="w-full md:w-[28%]">
          <PlatinumLivePrice />
        </div>
      </div>
    </div>
  );
};

export default home;
