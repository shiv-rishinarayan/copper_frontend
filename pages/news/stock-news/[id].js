// StockNewsPage.js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import { IoTimerOutline } from "react-icons/io5";
import PlatinumLivePrice from "@/components/Home/PlatinumLivePrice";
import DailyNewsletterAd from "@/components/Home/DailyNewsletterAd";
import PopularIntradayReturn from "@/components/Home/MostFollowed";
import MoreNews from "@/components/News/MoreNews";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

const StockNewsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsData = async () => {
      if (!id) return;

      try {
        const response = await fetch(
          "https://platinumdjango-production.up.railway.app/api/stock-news/"
        );

        if (!response.ok) throw new Error("Failed to fetch press release");

        const allPressReleases = await response.json();
        // Modified to ensure string comparison
        const specificPressRelease = allPressReleases.find(
          (release) => release.id.toString() === id.toString()
        );

        if (specificPressRelease) {
          setNewsData(specificPressRelease);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching press release:", error);
        setLoading(false);
      }
    };

    fetchNewsData();
  }, [id]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (loading) {
    return (
      <div className="text-center py-8 mx-auto">
        <Loader />
      </div>
    );
  }

  if (!newsData) {
    return <div className="text-center py-8">Press release not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="mt-16 w-full flex justify-between px-3 md:px-20 py-8 md:py-16">
        {/* news  */}
        <div className="w-full md:w-[60%]">
          <h1 className="text-2xl md:text-[1.7rem] font-bold mb-4">
            {newsData.title}
          </h1>

          <div className="text-[14px] text-black1/60 space-x-1.5 mb-6 flex items-center">
            <span>
              <IoTimerOutline className="text-[15px]" />
            </span>{" "}
            <span>{newsData.date}</span>
          </div>

          <div className="mb-6">
            <img
              src={newsData.image_url || "/no-image.png"}
              alt={newsData.title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {newsData.content && (
            <p className="mt-3 text-gray-700 mb-6">{newsData.content}</p>
          )}

          <button
            onClick={() => router.back()}
            className="mt-6 text-accent hover:text-accent/90 flex items-center"
          >
            <span className="mr-2 scale-110">{"<"} </span> Back to news
          </button>
        </div>

        {/* sidebar  */}
        <div className="w-full flex flex-col space-y-14 md:w-[29%]">
          <PlatinumLivePrice />
          <DailyNewsletterAd />
          <PopularIntradayReturn />
        </div>
      </div>

      {/* more news  */}
      <div>
        <MoreNews />
      </div>
      <Footer />
    </>
  );
};

export default StockNewsPage;
