"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import data from "@/public/static-data/glossaryData";

const GlossaryAccordion = () => {
  // Split data into two columns
  const midPoint = Math.ceil(data.length / 2);
  const leftColumnData = data.slice(0, midPoint);
  const rightColumnData = data.slice(midPoint);

  // Separate state for each column
  const [leftActiveIndex, setLeftActiveIndex] = useState(null);
  const [rightActiveIndex, setRightActiveIndex] = useState(null);

  const toggleAccordion = (index, column) => {
    if (column === "left") {
      setLeftActiveIndex(leftActiveIndex === index ? null : index);
    } else {
      setRightActiveIndex(rightActiveIndex === index ? null : index);
    }
  };

  const AccordionItem = ({ item, index, activeIndex, column }) => (
    <div className="border-b border-gray-200 rounded-md overflow-hidden group">
      <button
        className="w-full px-2 py-4 text-left bg-white group-hover:text-accent flex justify-between items-center"
        onClick={() => toggleAccordion(index, column)}
      >
        <span className="font-medium">{item.title}</span>
        {activeIndex === index ? (
          <FiChevronUp className="w-5 h-5 text-gray-500 group-hover:text-accent" />
        ) : (
          <FiChevronDown className="w-5 h-5 text-gray-500 group-hover:text-accent" />
        )}
      </button>
      <AnimatePresence>
        {activeIndex === index && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-2 py-3 pb-4">
              <p className="text-gray-700">{item.content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="lg:px-16 w-full lg:w-[71%] mx-auto px-3 md:px-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 gap-x-8">
        <div>
          {leftColumnData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index}
              activeIndex={leftActiveIndex}
              column="left"
            />
          ))}
        </div>
        <div>
          {rightColumnData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index}
              activeIndex={rightActiveIndex}
              column="right"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlossaryAccordion;
