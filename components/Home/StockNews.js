import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const StockNews = () => {
  const [pressReleases, setPressReleases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Fetch press release data
  useEffect(() => {
    const fetchPressReleases = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          "https://platinumdjango-production.up.railway.app/api/stock-news"
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (!data || !Array.isArray(data) || data.length === 0) {
          setError("No press releases found.");
          setPressReleases([]);
        } else {
          setPressReleases(data);
        }
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPressReleases();
  }, []);

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Navigate to a specific press release
  const handleNavigate = (id) => {
    router.push(`/news/press-release/${id}`);
  };

  // Conditional rendering
  if (isLoading) {
    return <div>Loading press releases...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (pressReleases.length === 0) {
    return <div>No press releases available.</div>;
  }

  return (
    <div>
      <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
        Platinum Stock News
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-9 gap-6">
        {/* Featured Release */}
        <a href={pressReleases[0].url} target="_blank" className="col-span-5">
          {pressReleases[0] && (
            <div
              className="overflow-hidden group cursor-pointer"
              // onClick={() => handleNavigate(pressReleases[0].id)}
            >
              <img
                src={pressReleases[0].thumbnail || "/no-image.png"}
                alt={pressReleases[0].title}
                className="w-full h-[300px] object-cover rounded-sm"
              />
              <div className="pt-4">
                <div className="mb-2">
                  <div className="flex gap-x-3">
                    {pressReleases[0].ticker && (
                      <span className="bg-accent text-[11px] rounded-sm text-white px-2 py-1">
                        {pressReleases[0].ticker}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-[18px] font-medium leading-6 mb-2 group-hover:underline">
                  {pressReleases[0].title}
                </h3>
                <div className="text-[14px] text-black1/60 space-x-2">
                  <span>{formatDate(pressReleases[0].date)}</span>
                  <span>|</span>
                  <span>{pressReleases[0].provider}</span>
                </div>
              </div>
            </div>
          )}
        </a>

        {/* List of Smaller Press Releases */}
        <a
          href={pressReleases.url}
          target="_blank"
          className="col-span-4 space-y-3"
        >
          {pressReleases.slice(1, 5).map((release) => (
            <div
              key={release.id}
              className="flex items-center overflow-hidden group cursor-pointer border-b border-black/10 pb-2"
              // onClick={() => handleNavigate(release.id)}
            >
              <div>
                <div className="mb-2">
                  <div className="flex gap-x-3">
                    {release.ticker && (
                      <span className="bg-accent text-[11px] rounded-sm text-white px-2 py-1">
                        {release.ticker}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-[15px] leading-6 mb-1 font-medium group-hover:underline">
                  {release.title.length > 90
                    ? `${release.title.slice(0, 90)}...`
                    : release.title}
                </h3>
                <div className="text-[12px] text-black1/60">
                  {formatDate(release.date)}
                </div>
              </div>
            </div>
          ))}
        </a>
      </div>
    </div>
  );
};

export default StockNews;
