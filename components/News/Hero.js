import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns"; // Importing date-fns function for relative time
import { IoIosTimer } from "react-icons/io";
import { STOCK_NEWS } from "@/src/api/copperAPI";

const Hero = () => {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        console.log("Fetching hero news from:", STOCK_NEWS);
        const response = await fetch(STOCK_NEWS);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Hero news data:", data);
        
        // Filter news with images for better hero display
        const newsWithImages = Array.isArray(data) 
          ? data.filter(item => item.image_url).slice(0, 10)
          : [];
        
        setNews(newsWithImages.length > 0 ? newsWithImages : data.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hero news:", error);
        setError(error.message);
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  useEffect(() => {
    if (news.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % news.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [news.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
  };

  if (loading) {
    return (
      <div className="relative bg-black w-full py-12">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="relative flex items-center justify-center overflow-hidden rounded-lg" style={{ height: "350px" }}>
            <div className="text-white text-center">
              <p className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-accent mb-4">
                Copper News
              </p>
              <h1 className="text-2xl lg:text-4xl font-bold cambay">Loading latest news...</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative bg-black w-full py-12">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="relative flex items-center justify-center overflow-hidden rounded-lg" style={{ height: "350px" }}>
            <div className="text-white text-center">
              <p className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-red-500 mb-4">
                Error
              </p>
              <h1 className="text-2xl lg:text-4xl font-bold cambay">Failed to load news</h1>
              <p className="text-base mt-4">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="relative bg-black w-full py-12">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="relative flex items-center justify-center overflow-hidden rounded-lg" style={{ height: "350px" }}>
            <div className="text-white text-center">
              <p className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-accent mb-4">
                Copper News
              </p>
              <h1 className="text-2xl lg:text-4xl font-bold cambay">No news available</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            height: "350px", // Reduced height for the container
          }}
        >
          {/* Text Content */}
          <div className="relative z-10 p-6 text-white max-w-2xl">
            <p className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-accent">
              Copper News
            </p>

            {/* Ticker Badge */}
            {news[currentIndex]?.ticker && (
              <div className="mt-2 mb-2">
                <span className="bg-white text-black text-xs rounded-sm px-2 py-1 font-semibold">
                  {news[currentIndex].ticker}
                </span>
              </div>
            )}

            <h1 className="text-2xl lg:text-4xl font-bold my-4 line-clamp-2 cambay">
              {news[currentIndex]?.title || "Exciting News Coming Soon"}
            </h1>
            
            {/* Company Name */}
            {news[currentIndex]?.company_name && (
              <p className="text-sm text-gray-300 mb-2">
                {news[currentIndex].company_name}
              </p>
            )}
            
            <p className="text-base mb-10">
              {news[currentIndex]?.summary
                ? `${news[currentIndex]?.summary.substring(0, 200)}...`
                : news[currentIndex]?.title
                ? `${news[currentIndex]?.title.substring(0, 200)}...`
                : "Catch up on our latest Copper news and updates."}
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
              {/* Provider */}
              {news[currentIndex]?.provider && (
                <>
                  <span>•</span>
                  <span>{news[currentIndex].provider}</span>
                </>
              )}
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
