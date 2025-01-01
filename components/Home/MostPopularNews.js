import { useEffect, useState } from "react";
import Link from "next/link";

const MostPopularNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetching news articles from the API
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://platinumdjango-production.up.railway.app/api/platinum_news/"
        );
        const data = await response.json();
        // Slice to get news starting from 6th item and limit to 8 items
        setNews(data.slice(0, 8));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="mb-14 md:mb-10">
      <h2 className="text-[21px] font-bold cambay text-black1/80 border-b border-gray-300 pb-2 mb-4">
        Most Popular
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {news.map((item, index) => (
          <Link
            href={`/news/${item.site_name}/${item.id}`}
            key={item.id}
            className="flex group w-full border-b border-gray-300 pb-4"
          >
            {/* Number vertically aligned */}
            <div className="flex flex-col items-center justify-start mr-4">
              <span className="text-3xl font-bold text-black/30 group-hover:text-accent">
                {index + 1}
              </span>
            </div>
            {/* Title and Image */}
            <div className="flex-1 flex">
              {/* Title with consistent width */}
              <h3
                className="text-[14.5px] group-hover:underline transition-all duration-200 font-medium flex-1"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {item.title}
              </h3>
              {/* Image fixed to the right */}
              <img
                src={item.image_url}
                alt={item.title.substring(0, 10)}
                className="w-20 h-16 object-cover group-hover:opacity-70 bg-black ml-4"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostPopularNews;
