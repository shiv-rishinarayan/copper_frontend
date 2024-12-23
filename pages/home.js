import Hero from "@/components/Home/Hero";
import LatestNews from "@/components/Home/LatestNews";
import StockNews from "@/components/Home/StockNews";
import Navbar from "@/components/Navbar";
import PopularIntradayReturn from "@/components/Home/PopularIntradayReturn";
import PlatinumLivePrice from "@/components/Home/PlatinumLivePrice";
import PlatinumTradingviewChart from "@/components/Home/PlatinumTradingviewChart";
import React from "react";
import Footer from "@/components/Footer";

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
          <div className="mb-12">
            <PlatinumLivePrice />
          </div>
          {/* <div>
            <PlatinumTradingviewChart />
          </div> */}

          <PopularIntradayReturn />
        </div>
      </div>

      {/* footer -------------------------------------------------------------------------------------------- */}
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default home;
