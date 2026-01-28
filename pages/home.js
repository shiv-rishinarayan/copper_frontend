import React from "react";
import Link from "next/link";
import Hero from "@/components/Home/Hero";
import LatestNews from "@/components/Home/LatestNews";
import StockNews from "@/components/Home/StockNews";
import Navbar from "@/components/Navbar";
import MostFollowed from "@/components/Home/MostFollowed";
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

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* 3 cols  */}
      <div className=" flex flex-col  justify-between flex-wrap px-3 md:px-10 lg:px-12 py-12 mb-7">
        {/* 1  */}
        <div className="w-full md:w-[24%] flex flex-col space-y-14">
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
          <DailyNewsletterAd />
        </div>

        {/* 2  */}

        <div className="w-full lg:w-[40%] flex flex-col space-y-14">
          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Prices
            </h1>
            <HomeCopperPrice />
          </div>
          <PlainNews />
        </div>

        {/* 3  */}
        <div className="w-full md:w-[24%] flex flex-col space-y-14  ">
          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Copper ETF Chart
            </h1>
            <TVCopperETF />
          </div>
          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Ruthenium Price Chart
            </h1>
            <ChartRuthenium />
          </div>
          <Substacks />
        </div>
      </div>

      {/* 2 cols  */}
      <div className="flex justify-between flex-wrap px-3 md:px-10 lg:px-12 py-12">
        {/* left  */}
        <div className="w-full md:w-[66%] flex flex-col space-y-20">
          {/* <LatestNews /> */}
          <PressReleaseNews />
          <StockNews />
          <MostPopularNews />
        </div>
        {/* right  */}
        <div className="w-full md:w-[26%] space-y-20">
          <PlatinumLivePrice />
          {/* <CopperTradingviewChart /> */}
          <MostFollowed />
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

// "use client";
// import React from "react";
// import Link from "next/link";
// import Hero from "@/components/Home/Hero";
// import LatestNews from "@/components/Home/LatestNews";
// import StockNews from "@/components/Home/StockNews";
// import Navbar from "@/components/Navbar";
// import MostFollowed from "@/components/Home/MostFollowed";
// import PlatinumLivePrice from "@/components/Home/PlatinumLivePrice";
// import PlatinumTradingviewChart from "@/components/Home/PlatinumTradingviewChart";
// import StayAhead from "@/components/Home/StayAhead";
// import PressReleaseNews from "@/components/Home/PressReleaseNews";
// import PopularTools from "@/components/Home/PopularTools";
// import MostPopularNews from "@/components/Home/MostPopularNews";
// import Substacks from "@/components/Home/Substacks";
// import DailyNewsletterAd from "@/components/Home/DailyNewsletterAd";
// import Footer from "@/components/Footer";
// import TVPlatinum from "@/components/Home/TVPlatinum";
// import TVPalladium from "@/components/Home/TVPalladium ";
// import PlainNews from "@/components/Home/PlainNews";
// import HomeInsiderTransactionTable from "@/components/Home/HomeInsiderTransactionTable";
// import ChartIridium from "@/components/Home/ChartIridium";
// import ChartRhodium from "@/components/Home/ChartRhodium";
// import ChartRuthenium from "@/components/Home/ChartRuthenium";
// import HomeCopperPrice from "@/components/Home/HomeCopperPrice";

// const home = () => {
//   return (
//     <div>
//       <Navbar />
//       <Hero />

//       {/* 3 cols section - revised for better responsiveness */}
//       <div className="flex flex-col justify-between flex-wrap px-3 sm:px-5 md:px-10 lg:px-12 py-6 sm:py-8 md:py-12 mb-4 sm:mb-7">
//         {/* First column */}
//         <div className="w-full sm:w-full md:w-full lg:w-[24%] flex flex-col space-y-8 sm:space-y-10 md:space-y-14 mb-8 lg:mb-0">
//           <div>
//             <h1 className="text-[18px] sm:text-[20px] md:text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
//               Platinum Price Chart
//             </h1>
//             <TVPlatinum />
//           </div>

//           <div>
//             <h1 className="text-[18px] sm:text-[20px] md:text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
//               Iridium Price Chart
//             </h1>
//             <ChartIridium />
//           </div>

//           <div>
//             <h1 className="text-[18px] sm:text-[20px] md:text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
//               Rhodium Price Chart
//             </h1>
//             <ChartRhodium />
//           </div>
//           <div className="hidden lg:block">
//             <DailyNewsletterAd />
//           </div>
//         </div>

//         {/* Second column */}
//         <div className="w-full sm:w-full md:w-full lg:w-[40%] flex flex-col space-y-8 sm:space-y-10 md:space-y-14 mb-8 lg:mb-0">
//           <div>
//             <h1 className="text-[18px] sm:text-[20px] md:text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
//               Prices
//             </h1>
//             <HomeCopperPrice />
//           </div>
//           <PlainNews />
//           <div className="block lg:hidden">
//             <DailyNewsletterAd />
//           </div>
//         </div>

//         {/* Third column */}
//         <div className="w-full sm:w-full md:w-full lg:w-[24%] flex flex-col space-y-8 sm:space-y-10 md:space-y-14">
//           <div>
//             <h1 className="text-[18px] sm:text-[20px] md:text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
//               Palladium Price Chart
//             </h1>
//             <TVPalladium />
//           </div>
//           <div>
//             <h1 className="text-[18px] sm:text-[20px] md:text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
//               Ruthenium Price Chart
//             </h1>
//             <ChartRuthenium />
//           </div>
//           <Substacks />
//         </div>
//       </div>

//       {/* 2 cols section - revised for better responsiveness */}
//       <div className="flex flex-col lg:flex-row justify-between flex-wrap px-3 sm:px-5 md:px-10 lg:px-12 py-6 sm:py-8 md:py-12">
//         {/* Left column */}
//         <div className="w-full lg:w-[66%] flex flex-col space-y-10 sm:space-y-16 md:space-y-20 mb-10 lg:mb-0">
//           <PressReleaseNews />
//           <StockNews />
//           <MostPopularNews />
//         </div>
//         {/* Right column */}
//         <div className="w-full lg:w-[26%] space-y-10 sm:space-y-16 md:space-y-20">
//           <PlatinumLivePrice />
//           <MostFollowed />
//           <PopularTools />
//         </div>
//       </div>

//       {/* Stay ahead section */}
//       <div className="my-8 sm:my-10 md:my-14">
//         <StayAhead />
//       </div>

//       {/* footer */}
//       <div className="-mt-8 sm:-mt-10 md:-mt-14">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default home;
