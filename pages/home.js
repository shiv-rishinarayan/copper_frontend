import Hero from "@/components/Home/Hero";
import LatestNews from "@/components/Home/LatestNews";
import StockNews from "@/components/Home/StockNews";
import Navbar from "@/components/Navbar";
import PopularIntradayReturn from "@/components/Home/PopularIntradayReturn";
import PlatinumLivePrice from "@/components/Home/PlatinumLivePrice";
import PlatinumTradingviewChart from "@/components/Home/PlatinumTradingviewChart";
import StayAhead from "@/components/Home/StayAhead";
import PressReleaseNews from "@/components/Home/PressReleaseNews";
import PopularTools from "@/components/Home/PopularTools";
import MostPopularNews from "@/components/Home/MostPopularNews";
import Substacks from "@/components/Home/Substacks";
import DailyNewsletterAd from "@/components/Home/DailyNewsletterAd";
import React from "react";
import Footer from "@/components/Footer";
import TVPlatinum from "@/components/Home/TVPlatinum";
import TVPalladium from "@/components/Home/TVPalladium ";
import PlainNews from "@/components/Home/PlainNews";

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* 3 cols  */}
      <div className="flex justify-between flex-wrap px-3 md:px-10 lg:px-16 py-12 mb-10">
        {/* 1  */}
        <div className="w-full md:w-[22%] flex flex-col space-y-16 ">
          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Platinum Price Chart
            </h1>
            <TVPlatinum />
          </div>

          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Platinum Price Chart
            </h1>
            <TVPlatinum />
          </div>

          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Platinum Price Chart
            </h1>
            <TVPlatinum />
          </div>
        </div>

        {/* 2  */}
        <div className="w-full md:w-[45%] flex flex-col space-y-20  ">
          <h1>table</h1>
          <PlainNews />
        </div>

        {/* 3  */}
        <div className="w-full md:w-[22%] flex flex-col space-y-16  ">
          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Palladium Price Chart
            </h1>
            <TVPalladium />
          </div>

          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Palladium Price Chart
            </h1>
            <TVPalladium />
          </div>
          <Substacks />
        </div>
      </div>

      {/* 2 cols  */}
      <div className="flex justify-between flex-wrap px-3 md:px-10 lg:px-16 py-12">
        {/* left  */}
        <div className="w-full md:w-[66%] flex flex-col space-y-20">
          <LatestNews />
          <StockNews />
          <PressReleaseNews />
          <MostPopularNews />
        </div>
        {/* right  */}
        <div className="w-full md:w-[26%] space-y-20">
          <PlatinumLivePrice />
          {/* <PlatinumTradingviewChart /> */}
          <PopularIntradayReturn />
          <PopularTools />
          <DailyNewsletterAd />
          {/* <Substacks /> */}
        </div>
      </div>
      {/* Stay ahead section */}
      <div className="my-14">
        <StayAhead />
      </div>

      {/* footer -------------------------------------------------------------------------------------------- */}
      <div className="-mt-14">
        <Footer />
      </div>
    </div>
  );
};

export default home;
