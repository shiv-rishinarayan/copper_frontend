// import React, { useState, useEffect } from "react";
// import Loader from "../Loader";
// import { COPPER_NEWS } from "@/src/api/copperAPI";

// const LatestNews = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(COPPER_NEWS);
//         if (!response.ok) {
//           throw new Error("Failed to fetch news");
//         }
//         const data = await response.json();
//         if (!data || data.length === 0) {
//           throw new Error("No news available");
//         }
//         setNewsData(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-32">
//         <span className="ml-3 text-gray-800 font-semibold mx-auto">
//           <Loader />
//         </span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-32 text-red-500">
//         <span>Error: {error}</span>
//       </div>
//     );
//   }

//   return (
//     <div className="">
//       <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
//         Latest Platinum News
//       </h1>

//       <div className="flex flex-wrap md:flex-nowrap ">
//         {/* Full News Section */}
//         <div className="w-full md:w-[65%] space-y-4">
//           {newsData.slice(0, 5).map((news, index) => (
//             <a
//               key={index}
//               href={news.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
//             >
//               <div>
//                 <h2 className="group-hover:underline font-medium text-[15px] text-primary leading-6 mt-1 line-clamp-1">
//                   {news.title}
//                 </h2>
//                 <p className="text-gray-500 text-xs mt-2">
//                   {new Date(news.date).toLocaleDateString("en-US", {
//                     month: "short",
//                     day: "numeric",
//                     year: "numeric",
//                   })}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* Right Side News */}
//         <div className="w-full md:w-[35%] grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {/* Top Two News */}
//           {newsData.slice(6, 10).map((news, index) => (
//             <a
//               key={index}
//               href={news.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
//             >
//               <div>
//                 <h2 className="group-hover:underline font-medium text-[15px] text-primary mt-1 leading-6">
//                   {news.title.length > 43
//                     ? `${news.title.substring(0, 43)}...`
//                     : news.title}
//                 </h2>
//                 <p className="text-gray-500 text-xs mt-2">
//                   {new Date(news.date).toLocaleDateString("en-US", {
//                     month: "short",
//                     day: "numeric",
//                     year: "numeric",
//                   })}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestNews;

// import React, { useState, useEffect } from "react";
// import Loader from "../Loader";
// import { COPPER_NEWS } from "@/src/api/copperAPI";

// const LatestNews = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(COPPER_NEWS);
//         if (!response.ok) {
//           throw new Error("Failed to fetch news");
//         }
//         const data = await response.json();
//         if (!data || data.length === 0) {
//           throw new Error("No news available");
//         }
//         setNewsData(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   // Function to format date safely
//   const formatDate = (dateString) => {
//     if (!dateString) return "";

//     try {
//       return new Date(dateString).toLocaleDateString("en-US", {
//         month: "short",
//         day: "numeric",
//         year: "numeric",
//       });
//     } catch (error) {
//       console.warn("Invalid date format:", dateString);
//       return "";
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-32">
//         <span className="ml-3 text-gray-800 font-semibold mx-auto">
//           <Loader />
//         </span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-32 text-red-500">
//         <span>Error: {error}</span>
//       </div>
//     );
//   }

//   return (
//     <div className="">
//       <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
//         Latest Platinum News
//       </h1>

//       <div className="flex flex-wrap md:flex-nowrap ">
//         {/* Full News Section */}
//         <div className="w-full md:w-[65%] space-y-4">
//           {newsData.slice(0, 5).map((news, index) => (
//             <a
//               key={index}
//               href={news.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
//             >
//               <div>
//                 <h2 className="group-hover:underline font-medium text-[15px] text-primary leading-6 mt-1 line-clamp-1">
//                   {news.title || ""}
//                 </h2>
//                 <p className="text-gray-500 text-xs mt-2">
//                   {formatDate(news.date)}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* Right Side News */}
//         <div className="w-full md:w-[35%] grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {/* Top Two News */}
//           {newsData.slice(6, 10).map((news, index) => (
//             <a
//               key={index}
//               href={news.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
//             >
//               <div>
//                 <h2 className="group-hover:underline font-medium text-[15px] text-primary mt-1 leading-6">
//                   {news.title.length > 43
//                     ? `${news.title.substring(0, 43)}...`
//                     : " "}
//                 </h2>
//                 <p className="text-gray-500 text-xs mt-2">
//                   {formatDate(news.date)}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestNews;

// import React, { useState, useEffect } from "react";
// import Loader from "../Loader";
// import { COPPER_NEWS } from "@/src/api/copperAPI";

// const LatestNews = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentDate, setCurrentDate] = useState(new Date().toISOString());

//   // Update current date every minute
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentDate(new Date().toISOString());
//     }, 60000); // Update every minute

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(COPPER_NEWS);
//         if (!response.ok) {
//           throw new Error("Failed to fetch news");
//         }
//         const data = await response.json();
//         if (!data || data.length === 0) {
//           throw new Error("No news available");
//         }

//         // Use current date for any null dates
//         const processedData = data.map((news) => ({
//           ...news,
//           date: news.date || currentDate,
//         }));

//         setNewsData(processedData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, [currentDate]); // Re-fetch when current date updates

//   // Function to format date safely
//   const formatDate = (dateString) => {
//     if (!dateString) return "";

//     try {
//       return new Date(dateString).toLocaleDateString("en-US", {
//         month: "short",
//         day: "numeric",
//         year: "numeric",
//       });
//     } catch (error) {
//       console.warn("Invalid date format:", dateString);
//       return "";
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-32">
//         <span className="ml-3 text-gray-800 font-semibold mx-auto">
//           <Loader />
//         </span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-32 text-red-500">
//         <span>Error: {error}</span>
//       </div>
//     );
//   }

//   return (
//     <div className="">
//       <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
//         Latest Copper News
//       </h1>

//       <div className="flex flex-wrap md:flex-nowrap">
//         {/* Full News Section */}
//         <div className="w-full md:w-[65%] space-y-4">
//           {newsData.slice(0, 5).map((news, index) => (
//             <a
//               key={index}
//               href={news.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
//             >
//               <div>
//                 <h2 className="group-hover:underline font-medium text-[15px] text-primary leading-6 mt-1 line-clamp-1">
//                   {news.title || ""}
//                 </h2>
//                 <p className="text-gray-500 text-xs mt-2">
//                   {formatDate(news.date)}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* Right Side News */}
//         <div className="w-full md:w-[35%] grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {newsData.slice(6, 10).map((news, index) => (
//             <a
//               key={index}
//               href={news.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white rounded-sm overflow-hidden block group transition-shadow duration-300"
//             >
//               <div>
//                 <h2 className="group-hover:underline font-medium text-[15px] text-primary mt-1 leading-6">
//                   {news.title?.length > 43
//                     ? `${news.title.substring(0, 43)}...`
//                     : news.title || ""}
//                 </h2>
//                 <p className="text-gray-500 text-xs mt-2">
//                   {formatDate(news.date)}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestNews;

import React, { useState, useEffect } from "react";
import Loader from "../Loader";
import { STOCK_NEWS } from "@/src/api/copperAPI";

const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log('Fetching latest news from:', STOCK_NEWS);
        const response = await fetch(STOCK_NEWS);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Latest news data:', data);
        
        if (!data || data.length === 0) {
          throw new Error("No news available");
        }

        // Process the data to add today's date for missing dates
        const processedData = Array.isArray(data)
          ? data.map((news) => ({
              ...news,
              date: news.date || new Date().toISOString(),
            }))
          : [];

        setNewsData(processedData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching latest news:', err);
        setError(err.message);
        setNewsData([]);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch (error) {
      console.warn("Invalid date format:", dateString);
      return "";
    }
  };

  if (loading) {
    return (
      <div>
        <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
          Latest Copper News
        </h1>
        <div className="flex justify-center items-center h-32">
          <Loader />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
          Latest Copper News
        </h1>
        <div className="flex justify-center items-center h-32 text-red-500">
          <span>Error: {error}</span>
        </div>
      </div>
    );
  }

  if (newsData.length === 0) {
    return (
      <div>
        <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
          Latest Copper News
        </h1>
        <div className="text-center py-8 text-gray-500">
          No news available at this time
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
        Latest Copper News
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side: Main News with Image */}
        <div>
          {newsData[0] && (
            <a
              href={newsData[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {newsData[0].image_url && (
                <img
                  src={newsData[0].image_url}
                  alt={newsData[0].title}
                  className="w-full h-64 object-cover mb-2 rounded-md"
                />
              )}
              
              {/* Ticker Badge */}
              {newsData[0].ticker && (
                <div className="mb-2">
                  <span className="bg-accent text-[11px] rounded-sm text-white px-2 py-1">
                    {newsData[0].ticker}
                  </span>
                </div>
              )}
              
              <h2 className="text-lg font-semibold text-primary mb-1 hover:underline">
                {newsData[0].title}
              </h2>
              
              {/* Company Name */}
              {newsData[0].company_name && (
                <p className="text-[13px] text-gray-600 mb-1">
                  {newsData[0].company_name}
                </p>
              )}
              
              {/* Summary */}
              {newsData[0].summary && (
                <p className="text-[14px] text-gray-600 mb-2 line-clamp-2">
                  {newsData[0].summary.length > 150 
                    ? `${newsData[0].summary.substring(0, 150)}...`
                    : newsData[0].summary}
                </p>
              )}
              
              <p className="text-gray-500 text-sm">
                {formatDate(newsData[0].date)}
              </p>
            </a>
          )}
        </div>

        {/* Right Side: Three Vertical News with Images */}
        <div className="space-y-4">
          {newsData.slice(1, 4).map((news, index) => (
            <a
              key={news.id || index}
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex space-x-4"
            >
              {news.image_url && (
                <img
                  src={news.image_url}
                  alt={news.title}
                  className="w-24 h-24 object-cover flex-shrink-0 rounded-md"
                />
              )}
              <div className="flex flex-col justify-start">
                {/* Ticker Badge */}
                {news.ticker && (
                  <div className="mb-1">
                    <span className="bg-accent text-[10px] rounded-sm text-white px-2 py-1">
                      {news.ticker}
                    </span>
                  </div>
                )}
                
                <h3 className="text-sm font-medium text-primary line-clamp-2 text-left hover:underline">
                  {news.title}
                </h3>
                
                {/* Company Name */}
                {news.company_name && (
                  <p className="text-[11px] text-gray-600 mt-1">
                    {news.company_name}
                  </p>
                )}
                
                <p className="text-gray-500 text-xs mt-2">
                  {formatDate(news.date)}
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
