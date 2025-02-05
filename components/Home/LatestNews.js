import React, { useState, useEffect } from "react";
import Loader from "../Loader";
import { PLATINUM_NEWS } from "@/src/api/platinumAPI";

const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(PLATINUM_NEWS);
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        if (!data || data.length === 0) {
          throw new Error("No news available");
        }
        setNewsData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <span className="ml-3 text-gray-800 font-semibold mx-auto">
          <Loader />
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-32 text-red-500">
        <span>Error: {error}</span>
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
        Latest Platinum News
      </h1>

      <div className="flex flex-wrap md:flex-nowrap ">
        {/* Full News Section */}
        <div className="w-full md:w-[65%] space-y-4">
          {newsData.slice(0, 5).map((news, index) => (
            <a
              key={index}
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
            >
              <div>
                <h2 className="group-hover:underline font-medium text-[15px] text-primary leading-6 mt-1 line-clamp-1">
                  {news.title}
                </h2>
                <p className="text-gray-500 text-xs mt-2">
                  {new Date(news.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Right Side News */}
        <div className="w-full md:w-[35%] grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Top Two News */}
          {newsData.slice(3, 7).map((news, index) => (
            <a
              key={index}
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
            >
              <div>
                <h2 className="group-hover:underline font-medium text-[15px] text-primary mt-1 leading-6">
                  {news.title.length > 43
                    ? `${news.title.substring(0, 43)}...`
                    : news.title}
                </h2>
                <p className="text-gray-500 text-xs mt-2">
                  {new Date(news.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
