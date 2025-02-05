import { useEffect, useState } from "react";
import Link from "next/link";
import { PLATINUM_NEWS } from "@/src/api/platinumAPI";
import axios from "axios";

const MostPopularNews = () => {
  const [news, setNews] = useState([]);

  console.log(PLATINUM_NEWS);
  useEffect(() => {
    // Fetching news articles from the API
    const fetchNews = async () => {
      try {
        const response = await axios.get(PLATINUM_NEWS);
        const data = response?.data;
        console.log(data);
        // Slice to get news starting from 6th item and limit to 8 items
        setNews(data.slice(10, 18));
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-5">
        {news.map((item, index) => (
          <Link
            // href={`/news/${item.site_name}/${item.id}`}
            href={item.url}
            target="_blank"
            key={item.id}
            className="flex items-center group w-full border-b border-gray-300 pb-7"
          >
            {/* Number vertically aligned */}
            <div className="flex flex-col items-center justify-center mr-4">
              <span className="text-3xl font-bold text-black/30 group-hover:text-accent">
                {index + 1}
              </span>
            </div>
            {/* Title */}
            <div className="flex-1 flex">
              <h3
                className="text-[15px] group-hover:underline transition-all duration-200 font-medium flex-1"
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostPopularNews;
