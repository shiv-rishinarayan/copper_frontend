import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // For navigation
import { PRESS_RELEASE } from "@/src/api/platinumAPI";

const PressRelease = () => {
  const router = useRouter();
  const [pressReleases, setPressReleases] = useState([]);

  // Fetch the press releases from the API
  useEffect(() => {
    const fetchPressReleases = async () => {
      const res = await fetch(PRESS_RELEASE);
      const data = await res.json();
      setPressReleases(data);
    };

    fetchPressReleases();
  }, []);

  // Navigate to a specific press release
  const handleNavigate = (id) => {
    router.push(`/news/press-release/${id}`);
  };

  return (
    <div>
      {/* Heading */}
      <h1 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
        Platinum Company Press Release
      </h1>

      {/* Press Release Layout */}
      <div className="grid grid-cols-1 md:grid-cols- gap-6">
        {/* Featured Release on the left, spanning 4 columns */}
        {/* <div className="col-span-5">
          {pressReleases[0] && (
            <div
              className="overflow-hidden group cursor-pointer"
              onClick={() => handleNavigate(pressReleases[0].id)}
            >
              <img
                src={pressReleases[0].thumbnail || "/no-image.png"}
                alt={pressReleases[0].title}
                className="w-full h-[300px] object-cover rounded-sm"
              />
              <div className="pt-4">
                <h3 className="text-[18px] font-medium leading-6 mb-2 group-hover:underline">
                  {pressReleases[0].title}
                </h3>
                <div className="text-[14px] text-black1/60 space-x-2">
                  <span>{pressReleases[0].date}</span>{" "}
                </div>
              </div>
            </div>
          )}
        </div> */}

        {/* Vertical List of Smaller Press Releases on the right, spanning 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-7">
          {pressReleases.slice(0, 8).map((release) => (
            <div
              key={release.id}
              className="flex  overflow-hidden group cursor-pointer border-b border-black/10 pb-4"
              onClick={() => handleNavigate(release.id)}
            >
              <div>
                <h3 className="text-[15px] leading-6 mb-1 font-medium group-hover:underline">
                  {release.title.length > 90
                    ? `${release.title.substring(0, 150)}...`
                    : release.title}
                </h3>
                <div className="text-[12px] text-gray-500">
                  {release.date} {/* Directly displaying the raw date string */}
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
