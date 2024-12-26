// import React from "react";

// const Loader = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="relative">
//         {/* Outer spinning ring */}
//         <div className="w-16 h-16 border-4 border-t-blue-500 border-r-blue-500 border-b-gray-200 border-l-gray-200 rounded-full animate-spin"></div>

//         {/* Inner pulsing circle */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>

//         {/* Center dot */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
//       </div>

//       {/* Loading text with shimmer effect */}
//       <div className="mt-6 relative">
//         <p className="text-gray-700 text-lg font-semibold tracking-wide">
//           Loading
//           <span className="animate-bounce inline-block">.</span>
//           <span className="animate-bounce inline-block delay-100">.</span>
//           <span className="animate-bounce inline-block delay-200">.</span>
//         </p>
//         {/* Shimmer overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shine"></div>
//       </div>
//     </div>
//   );
// };

// export default Loader;

import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <StyledWrapper>
        <div className="loader">
          <span className="loader-text">loading</span>
          <span className="load" />
        </div>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .loader {
    width: 80px;
    height: 50px;
    position: relative;
  }

  .loader-text {
    position: absolute;
    top: 0;
    padding: 0;
    margin: 0;
    color: #0089a4;
    animation: text_713 3.5s ease both infinite;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }

  .load {
    background-color: #7fc4d1;
    border-radius: 50px;
    display: block;
    height: 16px;
    width: 16px;
    bottom: 0;
    position: absolute;
    transform: translateX(64px);
    animation: loading_713 3.5s ease both infinite;
  }

  .load::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: #0089a4;
    border-radius: inherit;
    animation: loading2_713 3.5s ease both infinite;
  }

  @keyframes text_713 {
    0% {
      letter-spacing: 1px;
      transform: translateX(0px);
    }

    40% {
      letter-spacing: 2px;
      transform: translateX(26px);
    }

    80% {
      letter-spacing: 1px;
      transform: translateX(32px);
    }

    90% {
      letter-spacing: 2px;
      transform: translateX(0px);
    }

    100% {
      letter-spacing: 1px;
      transform: translateX(0px);
    }
  }

  @keyframes loading_713 {
    0% {
      width: 16px;
      transform: translateX(0px);
    }

    40% {
      width: 100%;
      transform: translateX(0px);
    }

    80% {
      width: 16px;
      transform: translateX(64px);
    }

    90% {
      width: 100%;
      transform: translateX(0px);
    }

    100% {
      width: 16px;
      transform: translateX(0px);
    }
  }

  @keyframes loading2_713 {
    0% {
      transform: translateX(0px);
      width: 16px;
    }

    40% {
      transform: translateX(0%);
      width: 80%;
    }

    80% {
      width: 100%;
      transform: translateX(0px);
    }

    90% {
      width: 80%;
      transform: translateX(15px);
    }

    100% {
      transform: translateX(0px);
      width: 16px;
    }
  }
`;

export default Loader;
