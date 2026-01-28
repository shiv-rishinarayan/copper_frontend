import React from "react";

const C101Hero = () => {
  return (
    <div className="relative bg-black w-full py-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div
          className="relative flex items-start overflow-hidden rounded-lg fade-in pt-[60px] md:pt-[80px] "
          style={{ height: "350px" }}
        >
          {/* Text Content */}
          <div className="relative z-10 p-6 text-white max-w-2xl">
            <p className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-accent">
              Copper 101
            </p>

            <h1 className="text-2xl lg:text-4xl font-bold my-4  cambay">
              Explore the Latest Insights, Market Data, and{" "}
              <span className="text-white">Key Information on Copper</span>
            </h1>

            <p className="text-sm md:text-base mb-6">
              Get started with our comprehensive guide to copper markets. From
              fundamental concepts to advanced market analysis, discover
              everything you need to know about this essential metal's role in
              the global economy and renewable energy transition.
            </p>

            <div className="text-xs text-gray-300">
              <p className="text-gray-300">
                Your complete guide to understanding copper markets
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C101Hero;