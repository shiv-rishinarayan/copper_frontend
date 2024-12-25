import Footer from "@/components/Footer";
import DailyNewsletterAd from "@/components/Home/DailyNewsletterAd";
import LatestNews from "@/components/Home/LatestNews";
import StockNews from "@/components/Home/PressReleaseNews";
import PressReleaseNews from "@/components/Home/PressReleaseNews";
import Substacks from "@/components/Home/Substacks";
import Navbar from "@/components/Navbar";
import Hero from "@/components/News/Hero";
import React from "react";

const news = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-14">
        {" "}
        <Hero />
      </div>

      <div className="flex justify-between flex-wrap px-3 md:px-10 lg:px-16 py-12 mt-6">
        {/* left  */}
        <div className="w-full md:w-[66%] flex flex-col space-y-20">
          <LatestNews />
          <StockNews />
          <PressReleaseNews />
        </div>
        {/* right  */}
        <div className="w-full md:w-[26%] space-y-20">
          <DailyNewsletterAd />
          <Substacks />
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default news;
