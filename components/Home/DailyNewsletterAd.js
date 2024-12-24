import React from "react";
import { useRouter } from "next/router";

const DailyNewsletterAd = () => {
  const router = useRouter();

  const handleSubscribe = () => {
    router.push("/signup"); // Redirects to the signup page
  };

  return (
    <div className="bg-gradient-to-br from-accent to-white/10 rounded-lg p-8 mt-4">
      {/* Heading Section */}
      <h2 className="text-white text-3xl font-semibold cambay">
        Receive our <span className="text-white">FREE</span>
      </h2>
      <h2 className="text-white text-3xl font-bold cambay">
        Daily Newsletter.
      </h2>

      {/* Button Section */}
      <div className="mt-6">
        <button
          onClick={handleSubscribe}
          className="w-full text-sm bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-[10px] rounded transition-colors duration-200"
        >
          SUBSCRIBE TODAY
        </button>
      </div>
    </div>
  );
};

export default DailyNewsletterAd;
