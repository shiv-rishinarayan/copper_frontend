// import React from "react";

// const P101Hero = () => {
//   return (
//     <div
//       className="relative w-full bg-secondary/0 py-16 md:py-32 lg:py-44 bg-cover bg-top"
//       style={{
//         backgroundImage:
//           "url(https://www.garfieldrefining.com/wp-content/uploads/2021/07/platinum-scaled.jpeg)",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50 bg-opacity-70 "></div>

//       <div className="max-w-7xl mx-auto relative container px-4 sm:px-6 md:px-12 z-10 pt-14 md:pt-12">
//         <div className="w-full md:w-[70%] ">
//           <h1 className="text-2xl sm:text-3xl md:text-[3rem] lg:text-[3.1rem] font-bold text-white leading-tight sm:leading-[1.15]">
//             Explore the Latest Insights, Market Data, and{" "}
//             <span className="text-accent">Key Information on Platinum</span>
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default P101Hero;

import React from "react";

const P101Hero = () => {
  return (
    <div className="relative bg-black w-full py-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(https://www.garfieldrefining.com/wp-content/uploads/2021/07/platinum-scaled.jpeg)`,
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div
          className="relative flex items-start overflow-hidden rounded-lg fade-in pt-[80px] md:pt-[125px] "
          style={{ height: "505px" }}
        >
          {/* <div
          className="relative flex items-start overflow-hidden rounded-lg fade-in"
          style={{
            height: "505px",
            paddingTop: "125px",
          }}
        > */}
          {/* Text Content */}
          <div className="relative z-10 p-6 text-white max-w-2xl">
            <p className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-accent">
              Platinum 101
            </p>

            <h1 className="text-2xl lg:text-4xl font-bold my-4  cambay">
              Explore the Latest Insights, Market Data, and{" "}
              <span className="text-white">Key Information on Platinum</span>
            </h1>

            <p className="text-sm md:text-base mb-10">
              Get started with our comprehensive guide to platinum markets. From
              fundamental concepts to advanced market analysis, discover
              everything you need to know about this precious metal's role in
              the global economy.
            </p>

            <div className="text-xs text-gray-300">
              <p className="text-gray-300">
                Your complete guide to understanding platinum markets
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P101Hero;
