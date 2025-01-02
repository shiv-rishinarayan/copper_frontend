import React, { useState, useEffect } from "react";
import Loader from "../Loader";

const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://platinumdjango-production.up.railway.app/api/platinum_news/"
        );
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
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-800"></div>
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

      <div className="flex flex-wrap md:flex-nowrap gap-5">
        {/* Featured News */}
        <div className="w-full md:w-[53%]">
          <a
            href={newsData[0]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
          >
            <img
              src={newsData[0]?.image_url || "/no-image.png"}
              alt={newsData[0]?.title}
              className="w-full h-[250px] md:h-[317px] object-cover group-hover:opacity-90"
            />
            <div>
              <h2 className="group-hover:underline text-[18px] text-primary leading-6 mt-1">
                {newsData[0]?.title}
              </h2>
              <p className="text-gray-500 text-xs mt-2">
                {new Date(newsData[0]?.date).toLocaleDateString()}
              </p>
            </div>
          </a>
        </div>

        {/* Other News */}
        <div className="w-full md:w-[45%] grid grid-cols-1 sm:grid-cols-2 gap-4">
          {newsData.slice(1, 5).map((news, index) => (
            <a
              key={index}
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
            >
              <img
                src={news.image_url || "/no-image.png"}
                alt={news.title}
                className="w-full h-28 object-cover group-hover:opacity-90"
              />
              <div>
                <h2 className="group-hover:underline text-[16px] text-primary mt-1 leading-6">
                  {news.title.length > 43
                    ? `${news.title.substring(0, 43)}...`
                    : news.title}
                </h2>
                <p className="text-gray-500 text-xs mt-2">
                  {new Date(news.date).toLocaleDateString()}
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
