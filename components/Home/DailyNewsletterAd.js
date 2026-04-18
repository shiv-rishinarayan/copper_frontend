import React from "react";
import { useRouter } from "next/router";

const DailyNewsletterAd = () => {
  const router = useRouter();

  const handleSubscribe = () => {
    router.push("/data");
  };

  return (
    <div className="bg-gradient-to-b from-accent to-accent/50 rounded-lg px-8 pt-4 pb-4 xl:py-2 2xl:py-4">
      {/* Heading Section */}
      <h2 className="text-white text-2xl xl:text-xl 2xl:text-2xl  font-semibold cambay">
        See our <span className="text-white xl:text-xl">Latest</span>
      </h2>
      <h2 className="text-white text-2xl xl:text-xl 2xl:text-2xl font-bold cambay">
        Copper Data in a better way
      </h2>

      {/* Button Section */}
      <div className="mt-3">
        <button
          onClick={handleSubscribe}
          className="w-full text-sm bg-white hover:bg-white/80 text-black font-bold py-[10px] rounded transition-colors duration-200"
        >
          SEE DATA
        </button>
      </div>
    </div>
  );
};

export default DailyNewsletterAd;
