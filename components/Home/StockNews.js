// import React from "react";
// import { useRouter } from "next/router"; // For navigation

// const StockNews = () => {
//   const router = useRouter();

//   // Static JSON for press releases
//   const pressReleases = [
//     {
//       id: 1,
//       title: "Uranium Energy Corp Reports Record Quarterly Revenue",
//       thumbnail:
//         "https://s.yimg.com/uu/api/res/1.2/.o9fC9._kZ1NLZ2R_VFsZw--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/motleyfool.com/2a368088fed8ccb28f20d9f57c4b99d4",
//       date: "2024-12-20",
//       publisher: "Uranium Energy Corp",
//       tickers: [{ ticker: "UEC" }],
//     },
//     {
//       id: 2,
//       title: "Cameco Announces Strategic Partnership with Nuclear Energy Firms",
//       thumbnail: "https://example.com/images/cameco-partnership-thumbnail.jpg",
//       date: "2024-12-18",
//       publisher: "Cameco Corp",
//       tickers: [{ ticker: "CCJ" }],
//     },
//     {
//       id: 3,
//       title: "Denison Mines Unveils Latest Exploration Results",
//       thumbnail: "",
//       date: "2024-12-15",
//       publisher: "Denison Mines",
//       tickers: [{ ticker: "DML" }],
//     },
//     {
//       id: 4,
//       title: "Global Atomic Secures Key Contract for Uranium Supply",
//       thumbnail: "https://example.com/images/global-atomic-thumbnail.jpg",
//       date: "2024-12-10",
//       publisher: "Global Atomic",
//       tickers: [{ ticker: "GLO" }],
//     },
//     {
//       id: 5,
//       title: "Energy Fuels Expands Production at Its Uranium Mill",
//       thumbnail: "https://example.com/images/energy-fuels-thumbnail.jpg",
//       date: "2024-12-08",
//       publisher: "Energy Fuels",
//       tickers: [{ ticker: "UUUU" }],
//     },
//   ];

//   // Function to format date
//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "short", day: "numeric" };
//     return new Date(dateString).toLocaleDateString("en-US", options);
//   };

//   // Navigate to a specific press release
//   const handleNavigate = (id) => {
//     router.push(`/news/press-release/${id}`);
//   };

//   return (
//     <div>
//       {/* Heading */}
//       <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
//         Platinum Stock News
//       </h1>

//       {/* Press Release Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-9 gap-6">
//         {/* Featured Release on the left, spanning 4 columns */}
//         <div className="col-span-5">
//           {pressReleases[0] && (
//             <div
//               className="overflow-hidden group cursor-pointer"
//               onClick={() => handleNavigate(pressReleases[0].id)}
//             >
//               <img
//                 src={pressReleases[0].thumbnail || "/no-image.png"}
//                 alt={pressReleases[0].title}
//                 className="w-full h-[300px] object-cover rounded-sm"
//               />
//               <div className="pt-4">
//                 <div className="mb-2">
//                   <div className="flex gap-x-3">
//                     {pressReleases[0].tickers.length > 0 && (
//                       <span className="bg-accent text-[11px] rounded-sm text-white px-2 py-1">
//                         {pressReleases[0].tickers[0].ticker}
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 <h3 className="text-[18px] font-medium leading-6 mb-2  group-hover:underline">
//                   {pressReleases[0].title}
//                 </h3>
//                 <div className="text-[14px] text-black1/60 space-x-2 ">
//                   <span>{formatDate(pressReleases[0].date)}</span>
//                   <span>|</span>
//                   <span>{pressReleases[0].publisher}</span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Vertical List of Smaller Press Releases on the right, spanning 4 columns */}
//         <div className="col-span-4 space-y-3">
//           {pressReleases.slice(1, 5).map((release) => (
//             <div
//               key={release.id}
//               className="flex items-center overflow-hidden group cursor-pointer border-b border-black/10 pb-2"
//               onClick={() => handleNavigate(release.id)}
//             >
//               <div>
//                 <div className="mb-2">
//                   <div className="flex gap-x-3">
//                     {release.tickers.length > 0 && (
//                       <span className="bg-accent text-[11px] rounded-sm text-white px-2 py-1">
//                         {release.tickers[0].ticker}
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 <h3 className="text-[15px] leading-6 mb-1  font-medium group-hover:underline">
//                   {release.title.length > 90
//                     ? `${release.title.slice(0, 120)}...`
//                     : release.title}
//                 </h3>
//                 <div className="text-[12px] text-black1/60 ">
//                   {formatDate(release.date)}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StockNews;

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const StockNews = () => {
  const [pressReleases, setPressReleases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://platinumdjango-production.up.railway.app/api/stock-news/"
        );
        const data = await response.json();
        setNewsData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Navigate to a specific press release
  const handleNavigate = (id) => {
    router.push(`/news/stock-news/${id}`);
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
        Platinum Stock News
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-9 gap-6">
        {/* Featured Release on the left, spanning 4 columns */}
        <a href={newsData[0].url} target="_blank" className="col-span-5">
          {newsData[0] && (
            <div
              className="overflow-hidden group cursor-pointer"
              // onClick={() => handleNavigate(newsData[0].id)}
            >
              <img
                src={newsData[0].image_url || "/no-image.png"}
                alt={newsData[0].title}
                className="w-full h-[300px] object-cover rounded-sm"
              />
              <div className="pt-4">
                <div className="mb-2">
                  <div className="flex gap-x-3">
                    <span className="bg-accent text-[11px] rounded-sm text-white px-2 py-1">
                      {newsData[0].ticker}
                    </span>
                  </div>
                </div>

                <h3 className="text-[18px] font-medium leading-6 mb-2 group-hover:underline">
                  {newsData[0].title}
                </h3>
                <div className="text-[14px] text-black1/60 space-x-2">
                  <span>{formatDate(newsData[0].date)}</span>
                  <span>|</span>
                  <span>{newsData[0].provider}</span>
                </div>
              </div>
            </div>
          )}
        </a>

        {/* Vertical List of Smaller Press Releases on the right, spanning 4 columns */}
        <a className="col-span-4 space-y-3">
          {newsData.slice(1, 5).map((news) => (
            <a
              href={news.url}
              target="_blank"
              key={news.id}
              className="flex items-center overflow-hidden group cursor-pointer border-b border-black/10 pb-2"
              // onClick={() => handleNavigate(news.id)}
            >
              <div>
                <div className="mb-2">
                  <div className="flex gap-x-3">
                    <span className="bg-accent text-[11px] rounded-sm text-white px-2 py-1">
                      {news.ticker}
                    </span>
                  </div>
                </div>

                <h3 className="text-[15px] leading-6 mb-1 font-medium group-hover:underline">
                  {news.title.length > 90
                    ? `${news.title.slice(0, 90)}...`
                    : news.title}
                </h3>
                <div className="text-[12px] text-black1/60">
                  {formatDate(news.date)}
                </div>
              </div>
            </a>
          ))}
        </a>
      </div>
    </div>
  );
};

export default StockNews;
