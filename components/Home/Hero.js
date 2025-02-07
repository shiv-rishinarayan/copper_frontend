import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PlatinumPrice from "./PlatinumPrice";
import { useRouter } from "next/router";

const Hero = () => {
  const videoRef = useRef(null);
  const router = useRouter();

  // Animation variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5, duration: 0.8 },
    },
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Set the playback rate to slow down the video
    }
  }, []);

  return (
    <div className="mt-16 lg:mt-20 relative overflow-hidden px-5 sm:px-8 md:px-20 lg:px-32 xl:px-40 w-full h-[80vh] py-20 md:h-[70vh] flex items-center justify-start mb-14 bg-black">
      {/* Background video and black overlay */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src="/HeroBG.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover md:object-left pl-0 md:pl-0"
        ></video>
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Text content */}
      <div className="relative z-10 text-white w-full sm:w-[90%] md:w-[80%] lg:w-[77%]">
        {/* Heading */}
        <motion.h1
          className="text-[30px] sm:text-[37px] md:text-[48px] lg:text-[57px]  font-extrabold capitalize tracking-[-1px]  md:leading-[67px] drop-shadow-md"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Stay ahead with real-time{" "}
          {/* <span className="text-accent">Platinum news, price And analysis</span> */}
          <span
            className="text-accent"
            // style={{ textShadow: "1px 1px 2px rgba(255, 255, 255, 0.8)" }}
          >
            Platinum news, price and analysis
          </span>
        </motion.h1>

        {/* PlatinumPrice component */}
        <motion.div
          className="mt-8"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 1 }}
        >
          <PlatinumPrice />
        </motion.div>

        {/* Button */}
        <motion.div
          className="mt-10"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <button
            onClick={() => router.push("/investments")}
            className="bg-accent text-white px-6 py-2 rounded-sm w-full sm:w-auto hover:bg-accent/90"
          >
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
