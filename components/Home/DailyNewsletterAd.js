import React from "react";
import { useRouter } from "next/router";

const DailyNewsletterAd = () => {
  const router = useRouter();

  const handleSubscribe = () => {
    router.push("/auth/signup"); // Redirects to the signup page
  };

  return (
    <div className="bg-gradient-to-b from-accent to-accent/50 rounded-lg p-8 mt-4">
      {/* Heading Section */}
      <h2 className="text-white text-3xl font-semibold cambay">
        Receive our <span className="text-white">FREE</span>
      </h2>
      <h2 className="text-white text-3xl font-bold cambay">
        Weekly Newsletter.
      </h2>

      {/* Button Section */}
      <div className="mt-6">
        <button
          onClick={handleSubscribe}
          className="w-full text-sm bg-white hover:bg-white/80 text-black font-bold py-[10px] rounded transition-colors duration-200"
        >
          SUBSCRIBE TODAY
        </button>
      </div>
    </div>
  );
};

export default DailyNewsletterAd;
