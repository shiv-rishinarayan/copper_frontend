// import React from "react";

// const InvestmentHero = () => {
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
//         <div className="w-full md:w-[60%] lg:w-[53%]">
//           <h1 className="text-2xl sm:text-3xl md:text-[3rem] lg:text-[3.1rem] font-bold text-white leading-tight sm:leading-[1.15]">
//             Elevate Your Portfolio with{" "}
//             <span className="text-accent">Platinum Investment Strategies</span>
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InvestmentHero;
import React from "react";

const InvestmentHero = () => {
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
          className="relative flex items-start overflow-hidden rounded-lg fade-in"
          style={{
            height: "505px",
            paddingTop: "125px", // Added padding to move content down
          }}
        >
          {/* Text Content */}
          <div className="relative z-10 p-6 text-white max-w-2xl">
            <p className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-accent">
              Platinum Investments
            </p>

            <h1 className="text-2xl lg:text-4xl font-bold my-4  cambay">
              Elevate Your Portfolio with{" "}
              <span className="text-white">Platinum Investment Strategies</span>
            </h1>

            <p className="text-base mb-10">
              Discover the potential of platinum investments through our
              comprehensive range of investment options. From physical platinum
              to ETFs and mining stocks, we offer diverse ways to incorporate
              this precious metal into your portfolio.
            </p>

            <div className="text-xs text-gray-300">
              <p className="text-gray-300">
                Secure your financial future with timeless value and strategic
                investments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentHero;
