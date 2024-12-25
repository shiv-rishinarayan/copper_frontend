// import { useEffect, useState } from "react";

// export default function Home() {
//   const [news, setNews] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     async function fetchNews() {
//       const response = await fetch(
//         "https://platinumdjango-production.up.railway.app/api/platinum_news/"
//       );
//       const data = await response.json();
//       setNews(data);
//     }
//     fetchNews();
//   }, []);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % news.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
//   };

//   return (
//     <div className="relative bg-black w-full py-12">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 w-full h-full bg-cover bg-center"
//         style={{
//           backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${
//             news[currentIndex]?.image_url ||
//             "https://www.aupreciousmetals.com/wp-content/uploads/2022/07/platinum-bars-or-ingots.png"
//           })`,
//         }}
//       ></div>

//       {/* Content Wrapper */}
//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         <div
//           className="relative flex items-center overflow-hidden  rounded-lg fade-in"
//           style={{
//             height: "390px", // Increased height for the container
//           }}
//         >
//           {/* Text Content */}
//           <div className="relative z-10 p-6 text-white max-w-2xl">
//             <p
//               className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
//                 currentIndex % 2 === 0 ? "bg-green-500" : "bg-blue-500"
//               }`}
//             >
//               FOOD & DRINKS
//             </p>
//             <h1 className="text-2xl lg:text-4xl font-bold my-4 line-clamp-2">
//               {news[currentIndex]?.title || "Exciting News Coming Soon"}
//             </h1>
//             <p className="text-base mb-24">
//               {news[currentIndex]?.content
//                 ? `${news[currentIndex]?.content.substring(0, 200)}...`
//                 : "Catch up on our latest updates and trends in the world of food and drinks."}
//             </p>
//             <p className="text-xs text-gray-300">
//               {news[currentIndex]?.date
//                 ? new Date(news[currentIndex]?.date).toLocaleDateString("en-US")
//                 : "2024-11-26"}
//             </p>
//           </div>

//           {/* Navigation Buttons */}
//           <div className="absolute right-4 bottom-4 flex items-center space-x-4">
//             <button
//               onClick={prevSlide}
//               className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
//             >
//               &#8249;
//             </button>
//             <button
//               onClick={nextSlide}
//               className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
//             >
//               &#8250;
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns"; // Importing date-fns function for relative time
import { IoIosTimer } from "react-icons/io";

export default function Home() {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to fetch news
  useEffect(() => {
    async function fetchNews() {
      const response = await fetch(
        "https://platinumdjango-production.up.railway.app/api/platinum_news/"
      );
      const data = await response.json();
      setNews(data);
    }
    fetchNews();

    // Auto-scroll logic
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length); // Move to the next slide every 3 seconds
    }, 4000); // Adjust the interval time as needed (3000ms = 3 seconds)

    // Clear interval when the component unmounts
    return () => clearInterval(interval);
  }, [news.length]);

  // Functions for manual navigation
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
              Platinum News
            </p>

            <h1 className="text-2xl lg:text-4xl font-bold my-4 line-clamp-2 cambay">
              {news[currentIndex]?.title || "Exciting News Coming Soon"}
            </h1>
            <p className="text-base mb-10">
              {news[currentIndex]?.content
                ? `${news[currentIndex]?.content.substring(0, 200)}...`
                : "Catch up on our latest platinum news and updates."}
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
}
