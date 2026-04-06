import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // For navigation
import { PRESS_RELEASE } from "@/src/api/copperAPI";

const PressRelease = () => {
  const router = useRouter();
  const [pressReleases, setPressReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the press releases from the local API
  useEffect(() => {
    const fetchPressReleases = async () => {
      try {
        console.log("Fetching press releases from:", PRESS_RELEASE);
        const res = await fetch(PRESS_RELEASE);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Press releases data:", data);
        setPressReleases(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching press releases:", error);
        setError(error.message);
        setPressReleases([]);
        setLoading(false);
      }
    };

    fetchPressReleases();
  }, []);

  // Navigate to a specific press release
  const handleNavigate = (id) => {
    router.push(`/news/press-release/${id}`);
  };

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (error) {
      console.warn("Invalid date format:", dateString);
      return "";
    }
  };

  if (loading) {
    return (
      <div className="border border-black/10 rounded-lg pt-3 pl-3 pb-2 pr-3 w-full">
        {/* Heading */}
        <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
          Copper Company Press Release
        </h1>

        {/* Press Release Layout */}
        <div className="">
          {/* Vertical List of Press Releases */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 gap-x-16 gap-y-16">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
              return (
                <div key={i} className="flex overflow-hidden group cursor-pointer border-b border-black/10 pb-4 rounded-md">
                  <div className="flex-1">
                    {/* Ticker Badge */}
                    <div className="bg-zinc-300 animate-pulse w-10 h-3  text-white mb-2 rounded-md"></div>

                    {/* Title */}
                    <h3 className="bg-zinc-300 w-96 h-5 animate-pulse mb-2 rounded-md"></h3>

                    {/* Company Name */}

                    <p className="bg-zinc-300 animate-pulse w-44 h-3 mb-2 rounded-md"></p>

                    {/* Date */}
                    <div className="bg-zinc-300 animate-pulse w-9 h-3 rounded-md"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
          Copper Company Press Release
        </h1>
        <div className="text-center py-8 text-red-500">
          Error loading press releases: {error}
        </div>
      </div>
    );
  }

  if (pressReleases.length === 0) {
    return (
      <div>
        <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
          Copper Company Press Release
        </h1>
        <div className="text-center py-8 text-gray-500">
          No press releases available at this time
        </div>
      </div>
    );
  }

  return (
    <div className="border border-black/10 rounded-lg pt-3 pl-3 pr-3">
      {/* Heading */}
      <h1 className="text-[21px] cambay font-bold mb-6 border-b border-black/10 pb-2">
        Copper Company Press Release
      </h1>

      {/* Press Release Layout */}
      <div className="">
        {/* Vertical List of Press Releases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 gap-x-16">
          {pressReleases.slice(0, 8).map((release) => (
            <div
              key={release.id}
              className="flex overflow-hidden group cursor-pointer border-b border-black/10 pb-4"
              onClick={() => handleNavigate(release.id)}
            >
              <div className="flex-1">
                {/* Ticker Badge */}
                {release.ticker && (
                  <div className="mb-2">
                    <span className="bg-accent text-[11px] rounded-sm text-white px-2 py-1">
                      {release.ticker}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-[15px] leading-6 mb-1 font-medium group-hover:underline">
                  {release.title && release.title.length > 120
                    ? `${release.title.substring(0, 120)}...`
                    : release.title || "No title available"}
                </h3>

                {/* Company Name */}
                {release.company_name && (
                  <p className="text-[13px] text-gray-600 mb-1">
                    {release.company_name}
                  </p>
                )}

                {/* Date */}
                <div className="text-[12px] text-gray-500">
                  {formatDate(release.date || release.created_at)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PressRelease;
