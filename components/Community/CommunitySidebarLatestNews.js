import React, { useState, useEffect } from "react";
import Loader from "../Loader";
// import noimg from "../assets/no-image.png";

const CommunitySidebarLatestNews = () => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          "https://web-production-d96b.up.railway.app/api/news-articles/?limit=30"
        );
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNewsData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white p-3 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Latest News</h2>
      {!newsData ? (
        <Loader />
      ) : (
        <div className="space-y-6">
          {newsData.slice(0, 6).map((newsItem) => (
            <div
              key={newsItem.id}
              className="flex items-center overflow-hidden hover:underline"
            >
              <a
                href={`/news/${newsItem.site_name}/${newsItem.id}`}
                className="flex"
              >
                <img
                  src={newsItem.image_url}
                  alt={newsItem.title}
                  className="w-24 h-16 object-cover rounded-md"
                />
                <div className="pl-4">
                  <h3 className="text-sm font-medium leading-tight mb-1">
                    {newsItem.title.length > 80
                      ? `${newsItem.title.slice(0, 80)}...`
                      : newsItem.title}
                  </h3>
                  <div className="text-xs text-gray-500">
                    {formatDate(newsItem.publish_date)}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommunitySidebarLatestNews;
