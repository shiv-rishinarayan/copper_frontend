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

import React from "react";

const VideoHero = () => {
  return (
    <div className="relative w-full py-16 md:py-32 lg:py-44">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover object-top"
      >
        <source src="/FooterBG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50 bg-opacity-70"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative container px-4 sm:px-6 md:px-12 z-10 pt-14 md:pt-12">
        <div className="w-full md:w-[60%] lg:w-[52%]">
          <h1 className="text-2xl sm:text-3xl md:text-[3rem] lg:text-[3.1rem] font-bold text-white leading-tight sm:leading-[1.15]">
            Your Source for the Latest{" "}
            <span className="text-accent">Platinum Market Updates</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
