// import React, { useState, useEffect } from "react";
// import Link from "next/link";

// const MoreNews = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(
//           "https://platinumdjango-production.up.railway.app/api/platinum_news/"
//         );
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
//       <div className="flex justify-center items-center h-32">
//         <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-800"></div>
//         <span className="ml-3 text-gray-800 font-semibold">Loading...</span>
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
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-7">
//         {news.slice(5, 20).map((item) => (
//           <Link
//             key={item.id}
//             href={item.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-start space-x-4 pb-4 border-b group"
//           >
//             <div className="flex-grow">
//               <h3 className="text-md font-bold text-gray-800 group-hover:text-accent transition-colors leading-tight">
//                 {item.title}
//               </h3>
//               <span className="text-xs text-gray-500 mt-2 block">
//                 {formatDate(item.date)}
//               </span>
//             </div>
//             <div className="w-[80px] h-[75px] flex-shrink-0 overflow-hidden rounded-md">
//               <img
//                 src={item.image_url || "/no-image.png"}
//                 alt={item.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
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

const MoreNews = () => {
  const [news, setNews] = useState([]);
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
        setNews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const formatDate = (isoDate) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(isoDate).toLocaleDateString("en-US", options);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center ">
        <Loader />
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
    <div className="px-3 md:px-10 lg:px-16 py-12 md:py-24 bg-secondary/10 mt-10">
      <h2 className="text-[19px] md:text-[21px] font-bold cambay border-b border-gray-300 pb-2 mb-6">
        More News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.slice(5, 20).map((item) => (
          <Link
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col space-y-2 pb-4 border-b group"
          >
            <h3 className="text-md font-bold text-gray-800 group-hover:text-accent transition-colors leading-tight">
              {item.title}
            </h3>
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
