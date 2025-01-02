// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";

// const StockNewsSubpage = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [newsData, setNewsData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNewsData = async () => {
//       if (!id) return;

//       try {
//         const response = await fetch(
//           `https://platinumdjango-production.up.railway.app/api/stock-news/${id}`
//         );
//         if (!response.ok) throw new Error("Failed to fetch news");
//         const data = await response.json();
//         setNewsData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching news:", error);
//         setLoading(false);
//       }
//     };

//     fetchNewsData();
//   }, [id]);

//   if (loading) {
//     return <div className="text-center py-8">Loading...</div>;
//   }

//   if (!newsData) {
//     return <div className="text-center py-8">News not found</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       {/* Title */}
//       <h1 className="text-2xl font-bold mb-6">{newsData.title}</h1>

//       {/* Image */}
//       <div className="mb-6">
//         <img
//           src={newsData.image_url || "/no-image.png"}
//           alt={newsData.title}
//           className="w-full h-[400px] object-cover rounded-lg"
//         />
//       </div>

//       {/* Back button */}
//       <button
//         onClick={() => router.back()}
//         className="mt-6 text-blue-600 hover:text-blue-800"
//       >
//         ← Back to news
//       </button>
//     </div>
//   );
// };

// export default StockNewsSubpage;

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const StockNewsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsData = async () => {
      // Only fetch if we have an ID
      if (!id) return;

      try {
        // First, fetch the full list
        const response = await fetch(
          "https://platinumdjango-production.up.railway.app/api/stock-news/"
        );

        if (!response.ok) throw new Error("Failed to fetch news");

        const allNews = await response.json();

        // Find the specific news item with matching ID
        const specificNews = allNews.find((news) => news.id === id);

        if (specificNews) {
          setNewsData(specificNews);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNewsData();
  }, [id]);

  // Format date function
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!newsData) {
    return <div className="text-center py-8">News not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Ticker */}
      <div className="mb-4">
        <span className="bg-accent text-[11px] rounded-sm text-white px-2 py-1">
          {newsData.ticker}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">{newsData.title}</h1>

      {/* Date and Provider */}
      <div className="text-[14px] text-black1/60 space-x-2 mb-6">
        <span>{formatDate(newsData.date)}</span>
        <span>|</span>
        <span>{newsData.provider}</span>
      </div>

      {/* Image */}
      <div className="mb-6">
        <img
          src={newsData.image_url || "/no-image.png"}
          alt={newsData.title}
          className="w-full h-[400px] object-cover rounded-lg"
        />
      </div>

      {/* Summary */}
      {newsData.summary && (
        <p className="text-gray-700 mb-6">{newsData.summary}</p>
      )}

      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="mt-6 text-blue-600 hover:text-blue-800 flex items-center"
      >
        <span className="mr-2">←</span> Back to news
      </button>
    </div>
  );
};

export default StockNewsPage;
