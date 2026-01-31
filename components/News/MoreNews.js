// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Loader from "../Loader";
// import { COPPER_NEWS } from "@/src/api/copperAPI";

// const MoreNews = () => {
//   const [news, setNews] = useState([]);
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
//         setNews(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchNews();
//   }, []);

//   const formatDate = (isoDate) => {
//     const options = { year: "numeric", month: "short", day: "numeric" };
//     return new Date(isoDate).toLocaleDateString("en-US", options);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center ">
//         <Loader />
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
//     <div className="px-3 md:px-10 lg:px-16 py-12 md:py-24 bg-secondary/10 mt-10">
//       <h2 className="text-[19px] md:text-[21px] font-bold cambay border-b border-gray-300 pb-2 mb-6">
//         More News
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {news.slice(5, 20).map((item) => (
//           <Link
//             key={item.id}
//             href={item.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex flex-col space-y-2 pb-4 border-b group"
//           >
//             <h3 className="text-md font-bold text-gray-800 group-hover:text-accent transition-colors leading-tight">
//               {item.title}
//             </h3>
//             <span className="text-xs text-gray-500">
//               {formatDate(item.date)}
//             </span>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MoreNews;

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loader from "../Loader";
import { STOCK_NEWS } from "@/src/api/copperAPI";

const MoreNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log('Fetching more news from:', STOCK_NEWS);
        const response = await fetch(STOCK_NEWS);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('More news data:', data);
        
        if (!data || data.length === 0) {
          throw new Error("No news available");
        }

        // Process the data to add today's date for null dates
        const processedData = Array.isArray(data)
          ? data.map((item) => ({
              ...item,
              date: item.date || new Date().toISOString(),
            }))
          : [];

        setNews(processedData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching more news:', err);
        setError(err.message);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const formatDate = (isoDate) => {
    if (!isoDate) {
      return new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }

    try {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(isoDate).toLocaleDateString("en-US", options);
    } catch (error) {
      console.warn("Invalid date format:", isoDate);
      return new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }
  };

  if (loading) {
    return (
      <div className="px-3 md:px-10 lg:px-16 py-12 md:py-24 bg-secondary/10 mt-10">
        <h2 className="text-[19px] md:text-[21px] font-bold cambay border-b border-gray-300 pb-2 mb-6">
          More News
        </h2>
        <div className="flex justify-center items-center py-8">
          <Loader />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-3 md:px-10 lg:px-16 py-12 md:py-24 bg-secondary/10 mt-10">
        <h2 className="text-[19px] md:text-[21px] font-bold cambay border-b border-gray-300 pb-2 mb-6">
          More News
        </h2>
        <div className="flex justify-center items-center h-32 text-red-500">
          <span>Error: {error}</span>
        </div>
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="px-3 md:px-10 lg:px-16 py-12 md:py-24 bg-secondary/10 mt-10">
        <h2 className="text-[19px] md:text-[21px] font-bold cambay border-b border-gray-300 pb-2 mb-6">
          More News
        </h2>
        <div className="text-center py-8 text-gray-500">
          No additional news available at this time
        </div>
      </div>
    );
  }

  return (
    <div className="px-3 md:px-10 lg:px-16 py-12 md:py-24 bg-secondary/10 mt-10">
      <h2 className="text-[19px] md:text-[21px] font-bold cambay border-b border-gray-300 pb-2 mb-6">
        More News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.slice(5, 20).map((item, index) => (
          <Link
            key={item.id || index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col space-y-2 pb-4 border-b group"
          >
            {/* Ticker Badge */}
            {item.ticker && (
              <div className="mb-1">
                <span className="bg-accent text-[10px] rounded-sm text-white px-2 py-1">
                  {item.ticker}
                </span>
              </div>
            )}
            
            <h3 className="text-md font-bold text-gray-800 group-hover:text-accent transition-colors leading-tight">
              {item.title}
            </h3>
            
            {/* Company Name */}
            {item.company_name && (
              <p className="text-xs text-gray-600">
                {item.company_name}
              </p>
            )}
            
            <span className="text-xs text-gray-500">
              {formatDate(item.date)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoreNews;
