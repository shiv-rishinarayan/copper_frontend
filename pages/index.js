"use client";
import React from "react";
import Link from "next/link";
import Hero from "@/components/Home/Hero";
import LatestNews from "@/components/Home/LatestNews";
import StockNews from "@/components/Home/StockNews";
import Navbar from "@/components/Navbar";
import PopularIntradayReturn from "@/components/Home/MostFollowed";
import PlatinumLivePrice from "@/components/Home/PlatinumLivePrice";
import PlatinumTradingviewChart from "@/components/Home/PlatinumTradingviewChart";
import StayAhead from "@/components/Home/StayAhead";
import PressReleaseNews from "@/components/Home/PressReleaseNews";
import PopularTools from "@/components/Home/PopularTools";
import MostPopularNews from "@/components/Home/MostPopularNews";
import Substacks from "@/components/Home/Substacks";
import DailyNewsletterAd from "@/components/Home/DailyNewsletterAd";
import Footer from "@/components/Footer";
import TVPlatinum from "@/components/Home/TVPlatinum";
import TVPalladium from "@/components/Home/TVPalladium ";
import PlainNews from "@/components/Home/PlainNews";
import HomeInsiderTransactionTable from "@/components/Home/HomeInsiderTransactionTable";
import ChartIridium from "@/components/Home/ChartIridium";
import ChartRhodium from "@/components/Home/ChartRhodium";
import ChartRuthenium from "@/components/Home/ChartRuthenium";
import HomePGMPrice from "@/components/Home/HomePGMPrice";
import SEO from "@/components/SEO";

const home = () => {
  return (
    <div>
      <SEO
        title="PGM Tracker - Real-time News, Prices & Analysis"
        description="Stay ahead with real-time Platinum Group Metals news, price updates, and in-depth analysis. Get accurate insights into the PGM market trends."
        keywords="PGM prices, PGM news, PGM market analysis, Precious metals, PGM trading, PGMs updates, PGM investment, Real-time PGM updates,investment"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/"
      />

      <Navbar />
      <Hero />

      {/* 3 cols  */}
      <div className="flex justify-between flex-wrap px-3 md:px-10 lg:px-12 py-12 mb-7">
        {/* 1  */}
        <div className="w-full lg:w-[24%] flex flex-col space-y-14">
          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Platinum Price Chart
            </h1>
            <TVPlatinum />
          </div>

          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Iridium Price Chart
            </h1>
            <ChartIridium />
          </div>

          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Rhodium Price Chart
            </h1>
            <ChartRhodium />
          </div>

          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Ruthenium Price Chart
            </h1>
            <ChartRuthenium />
          </div>
        </div>

        {/* 2  */}

        <div className="w-full lg:w-[40%] flex flex-col space-y-14">
          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1 mt-14 md:mt-0">
              Prices
            </h1>
            <HomePGMPrice />
          </div>
          <PlainNews />
        </div>

        {/* 3  */}
        <div className="w-full lg:w-[24%] flex flex-col space-y-14  ">
          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Palladium Price Chart
            </h1>
            <TVPalladium />
          </div>

          <Substacks />

          <DailyNewsletterAd />
        </div>
      </div>

      {/* 2 cols  */}
      <div className="flex justify-between flex-wrap px-3 md:px-10 lg:px-12 py-12">
        {/* left  */}
        <div className="w-full lg:w-[66%] flex flex-col space-y-20">
          {/* <LatestNews /> */}
          <PressReleaseNews />
          <StockNews />
          <MostPopularNews />
        </div>
        {/* right  */}
        <div className="w-full lg:w-[26%] space-y-20">
          <PlatinumLivePrice />
          {/* <PlatinumTradingviewChart /> */}
          <PopularIntradayReturn />
          <PopularTools />
          {/* <DailyNewsletterAd /> */}
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
