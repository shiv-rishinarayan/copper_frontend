import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns"; // Importing date-fns function for relative time
import { IoIosTimer } from "react-icons/io";
import { PLATINUM_NEWS } from "@/src/api/platinumAPI";
import axios from "axios";

const Hero = () => {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchNews() {
      const response = await axios.get(PLATINUM_NEWS);

      const data = response?.data;
      setNews(data);
    }
    fetchNews();

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [news.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
  };

  return (
    <div className="relative bg-black w-full py-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${
            news[currentIndex]?.image_url ||
            "https://www.aupreciousmetals.com/wp-content/uploads/2022/07/platinum-bars-or-ingots.png"
          })`,
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div
          className="relative flex items-center overflow-hidden rounded-lg fade-in"
          style={{
            height: "450px", // Increased height for the container
          }}
        >
          {/* Text Content */}
          <div className="relative z-10 p-6 text-white max-w-2xl">
            <p className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-accent">
              PGM News
            </p>

            <h1 className="text-2xl lg:text-4xl font-bold my-4 line-clamp-2 cambay">
              {news[currentIndex]?.title || "Exciting News Coming Soon"}
            </h1>
            <p className="text-base mb-10">
              {news[currentIndex]?.content
                ? `${news[currentIndex]?.content.substring(0, 200)}...`
                : "Catch up on our latest PGM news and updates."}
            </p>
            <div className="text-xs text-gray-300 flex items-center space-x-1">
              {/* Time Icon */}
              <IoIosTimer className="h-4 w-4 text-white" />
              {/* Relative Time using date-fns */}
              <span className="text-gray-300">
                {news[currentIndex]?.date
                  ? formatDistanceToNow(new Date(news[currentIndex]?.date), {
                      addSuffix: true,
                    })
                  : "Just now"}
              </span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute right-4 bottom-4 flex items-center space-x-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white bg-opacity-30 text-white hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300"
            >
              &#8249;
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white bg-opacity-30 text-white hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
