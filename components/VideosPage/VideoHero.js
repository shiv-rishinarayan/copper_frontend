// import React from "react";

// const VideoHero = () => {
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
//         <div className="w-full md:w-[60%] lg:w-[52%]">
//           <h1 className="text-2xl sm:text-3xl md:text-[3rem] lg:text-[3.1rem] font-bold text-white leading-tight sm:leading-[1.15]">
//             Your Source for the Latest{" "}
//             <span className="text-accent">Platinum Market Updates</span>
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoHero;

// with bg video

// import React from "react";

// const VideoHero = () => {
//   return (
//     <div className="relative w-full py-16 md:py-32 lg:py-44">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute inset-0 w-full h-full object-cover object-top"
//       >
//         <source src="/FooterBG.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50 bg-opacity-70"></div>

//       {/* Content */}
//       <div className="max-w-7xl mx-auto relative container px-4 sm:px-6 md:px-12 z-10 pt-14 md:pt-12">
//         <div className="w-full md:w-[60%] lg:w-[52%]">
//           <h1 className="text-2xl sm:text-3xl md:text-[3rem] lg:text-[3.1rem] font-bold text-white leading-tight sm:leading-[1.15]">
//             Your Source for the Latest{" "}
//             <span className="text-accent">Platinum Market Updates</span>
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoHero;
import React from "react";

const VideoHero = () => {
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
              PGM Videos
            </p>

            <h1 className="text-2xl lg:text-4xl font-bold my-4 cambay">
              Your Source for the Latest{" "}
              <span className="text-white">PGM Market Updates</span>
            </h1>

            <p className="text-sm md:text-base mb-10">
              Enhance your PGM market knowledge through our educational video
              content. From market fundamentals to advanced trading strategies,
              explore our comprehensive library of featured, company insights,
              podcasts, and educational resources.
            </p>

            <div className="text-xs text-gray-300">
              <p className="text-gray-300">
                Learn, grow, and master PGM markets with our expert content
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
