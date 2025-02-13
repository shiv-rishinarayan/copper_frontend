// import React, { useState, useEffect } from "react";
// import { IoTimerOutline } from "react-icons/io5";
// import axios from "axios";
// import { PLATINUM_NEWS } from "@/src/api/platinumAPI";
// import Loader from "../Loader";

// const PlainNews = () => {
//   // const axiosInstance = useAxios();
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNewsData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`${PLATINUM_NEWS}?news_type=platinum`);
//         const data = response.data;

//         if (data && Array.isArray(data) && data.length > 0) {
//           setNewsData(data);
//         } else {
//           setNewsData([]);
//         }
//       } catch (err) {
//         setError("Failed to fetch news data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNewsData();
//   }, []);

//   // Function to format the date
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   if (loading) {
//     return (
//       <div>
//         <Loader />
//       </div>
//     );
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!newsData || newsData.length === 0) {
//     return <div>No data available</div>;
//   }

//   return (
//     <div>
//       <div className="">
//         <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
//           Latest Platinum News
//         </h1>

//         <div className="flex flex-wrap md:flex-nowrap gap-5">
//           <div className="w-full grid grid-cols-1 gap-3">
//             {newsData.slice(0, 10).map((news, index) => (
//               <a
//                 key={index}
//                 target="_blank"
//                 href={news.url}
//                 className="bg-white border-b border-black/10 pb-4 rounded-sm overflow-hidden block group transition-shadow duration-300"
//               >
//                 <div>
//                   <h2 className="group-hover:underline text-[16px] md:text-[17px] text-primary mt-1 leading-6">
//                     {news.title}
//                   </h2>
//                   <p className="text-gray-500 text-xs mt-2 flex gap-x-1.5 items-center">
//                     {/* <span>
//                       <IoTimerOutline className="text-sm" />
//                     </span>{" "} */}
//                     {news.date && formatDate(news.date)}{" "}
//                     {/* Format and display date */}
//                   </p>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlainNews;

import React, { useState, useEffect } from "react";
import { IoTimerOutline } from "react-icons/io5";
import axios from "axios";
import { PLATINUM_NEWS } from "@/src/api/platinumAPI";
import Loader from "../Loader";

const PlainNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${PLATINUM_NEWS}?news_type=platinum`);
        const data = response.data;

        if (data && Array.isArray(data) && data.length > 0) {
          // Process the data to add today's date for null dates
          const processedData = data.map((news) => ({
            ...news,
            date: news.date || new Date().toISOString(),
          }));
          setNewsData(processedData);
        } else {
          setNewsData([]);
        }
      } catch (err) {
        setError("Failed to fetch news data");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  // Function to format the date
  const formatDate = (dateString) => {
    if (!dateString) {
      return new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }

    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (error) {
      console.warn("Invalid date format:", dateString);
      return new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }
  };

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!newsData || newsData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <div className="">
        <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
          Latest Platinum News
        </h1>

        <div className="flex flex-wrap md:flex-nowrap gap-5">
          <div className="w-full grid grid-cols-1 gap-3">
            {newsData.slice(0, 10).map((news, index) => (
              <a
                key={index}
                target="_blank"
                href={news.url}
                className="bg-white border-b border-black/10 pb-4 rounded-sm overflow-hidden block group transition-shadow duration-300"
              >
                <div>
                  <h2 className="group-hover:underline text-[16px] md:text-[17px] text-primary mt-1 leading-6">
                    {news.title}
                  </h2>
                  <p className="text-gray-500 text-xs mt-2 flex gap-x-1.5 items-center">
                    {formatDate(news.date)}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlainNews;
