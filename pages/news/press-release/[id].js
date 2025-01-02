// PressReleasePage.js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const PressReleasePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsData = async () => {
      if (!id) return;

      try {
        const response = await fetch(
          "https://platinumdjango-production.up.railway.app/api/press-releases/"
        );

        if (!response.ok) throw new Error("Failed to fetch press release");

        const allPressReleases = await response.json();
        // Modified to ensure string comparison
        const specificPressRelease = allPressReleases.find(
          (release) => release.id.toString() === id.toString()
        );

        if (specificPressRelease) {
          setNewsData(specificPressRelease);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching press release:", error);
        setLoading(false);
      }
    };

    fetchNewsData();
  }, [id]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!newsData) {
    return <div className="text-center py-8">Press release not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-4">
        <span className="bg-accent text-[11px] rounded-sm text-white px-2 py-1">
          {newsData.ticker}
        </span>
      </div>

      <h1 className="text-2xl font-bold mb-4">{newsData.title}</h1>

      <div className="text-[14px] text-black1/60 space-x-2 mb-6">
        <span>{formatDate(newsData.date)}</span>
        <span>|</span>
        <span>{newsData.publisher}</span>
      </div>

      <div className="mb-6">
        <img
          src={newsData.image_url || "/no-image.png"}
          alt={newsData.title}
          className="w-full h-[400px] object-cover rounded-lg"
        />
      </div>

      {newsData.content && (
        <p className="text-gray-700 mb-6">{newsData.content}</p>
      )}

      <button
        onClick={() => router.back()}
        className="mt-6 text-blue-600 hover:text-blue-800 flex items-center"
      >
        <span className="mr-2">←</span> Back to news
      </button>
    </div>
  );
};

export default PressReleasePage;
