import React from "react";
import Link from "next/link";
import Hero from "@/components/Home/Hero";
import LatestNews from "@/components/Home/LatestNews";
import StockNews from "@/components/Home/StockNews";
import Navbar from "@/components/Navbar";
import PopularIntradayReturn from "@/components/Home/MostFollowed";
import PlatinumLivePrice from "@/components/Home/PlatinumLivePrice";
import CopperTradingviewChart from "@/components/Home/CopperTradingviewChart";
import StayAhead from "@/components/Home/StayAhead";
import PressReleaseNews from "@/components/Home/PressReleaseNews";
import PopularTools from "@/components/Home/PopularTools";
import MostPopularNews from "@/components/Home/MostPopularNews";
import Substacks from "@/components/Home/Substacks";
import DailyNewsletterAd from "@/components/Home/DailyNewsletterAd";
import Footer from "@/components/Footer";
import TVCopper from "@/components/Home/TVCopper";
import TVCopperETF from "@/components/Home/TVCopperETF";
import PlainNews from "@/components/Home/PlainNews";
import HomeInsiderTransactionTable from "@/components/Home/HomeInsiderTransactionTable";
import ChartIridium from "@/components/Home/ChartIridium";
import ChartRhodium from "@/components/Home/ChartRhodium";
import ChartRuthenium from "@/components/Home/ChartRuthenium";
import HomeCopperPrice from "@/components/Home/HomeCopperPrice";
import SEO from "@/components/SEO";
import StocksMarquee from "@/components/Home/StocksMarquee";

const home = () => {
  return (
    <div>
      <SEO
        title="Copper Tracker - Real-time News, Prices & Analysis"
        description="Stay ahead with real-time Copper market news, price updates, and in-depth analysis. Get accurate insights into the copper market trends."
        keywords="Copper prices, Copper news, Copper market analysis, Industrial metals, Copper trading, Copper updates, Copper investment, Real-time Copper updates,investment"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/"
      />

      <Navbar />
      <div className="mt-[80px]">
        <StocksMarquee />
      </div>

      <Hero />

      {/* 3 cols  */}
      <div className="flex justify-between flex-wrap px-3 md:px-10 lg:px-12 pt-4 pb-12 mb-7">
        {/* 1  */}
        <div className="w-full lg:w-[24%] flex flex-col space-y-14">
          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Copper Price Chart
            </h1>
            <TVCopper />
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
            <HomeCopperPrice />
          </div>
          <PlainNews />
        </div>

        {/* 3  */}
        <div className="w-full lg:w-[24%] flex flex-col space-y-14  ">
          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Copper ETF Chart
            </h1>
            <TVCopperETF />
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
          {/* <CopperTradingviewChart /> */}
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
