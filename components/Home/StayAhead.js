import React from "react";
import Link from "next/link";
import { LuCrown } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineSetting } from "react-icons/ai";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StayAhead = () => {
  const features = [
    {
      title: "PGM Stock Screener",
      icon: <LuCrown className="w-6 h-6 text-accent" />,
      description: [
        "Use our PGM Stock screener to find suitable PGM stocks",
        "Search by Jurisdiction, stock exchange, marketcap",
      ],
      link: "/investments?tab=stock-screener",
    },
    {
      title: "PGM News",
      icon: <IoNewspaperOutline className="w-6 h-6 text-accent" />,
      description: [
        "Stay ahead with up to date PGM News",
        "Track most recent press releases on all PGM stocks",
      ],
      link: "/news",
    },
    {
      title: "Track Insider Transactions",
      icon: <AiOutlineSetting className="w-6 h-6 text-accent" />,
      description: [
        "See if insiders are buying or selling your PGM stocks",
        "See recent insider trades so you can stay ahead of the game",
      ],
      link: "/investments?tab=insider-transactions",
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    threshold: 0.7, // Trigger animation when 70% of the section is visible
  });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-accent p-4 sm:p-8 py-12 sm:py-20 relative overflow-hidden"
    >
      {/* Decorative Background Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <path
            d="M0,600 Q250,500 500,600 T1000,600 V1000 H0 Z"
            className="fill-white/20"
          />
        </svg>
      </div>

      <div className="relative flex flex-col md:flex-row gap-4 sm:gap-8 min-h-[250px]">
        {/* Left Section - Subscription */}
        <div className="md:w-2/6 sm:p-8 rounded-lg flex flex-col justify-between">
          <div>
            <h1 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-6 cambay text-white">
              Stay ahead with real-time PGM news, price and analysis
            </h1>
            <p className="text-sm text-white/80 font-medium mb-4 sm:mb-8">
              Sign up for PGM Tracker's to gain access to PGM Tracker's full
              suite of research tools
            </p>
          </div>
          <Link
            href="/auth/signup"
            className="bg-white hover:bg-white/90 lg:bg-white lg:hover:bg-white/90 text-center text-accent font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded w-full text-sm"
          >
            SUBSCRIBE TODAY
          </Link>
        </div>

        {/* Right Section - Feature Cards */}
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="group hover:no-underline"
            >
              <Link href={feature.link}>
                <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 py-8 sm:py-12 pb-12 sm:pb-16 rounded-lg flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1">
                  <div>
                    <div className="flex justify-center mb-4 bg-accent/25 rounded-full w-12 sm:w-14 h-12 sm:h-14 mx-auto items-center group-hover:bg-accent/30 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-center group-hover:text-accent transition-colors cambay">
                      {feature.title}
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {feature.description.map((item, i) => (
                        <li key={i} className="text-gray-600 text-sm flex">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StayAhead;
