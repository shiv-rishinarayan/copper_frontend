import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const TabsSection = () => {
  const tabs = [
    { name: "Price & Premiums", query: "priceandpremiums" },
    { name: "Demand Database", query: "demanddatabase" },
    { name: "Supply", query: "supply" },
    { name: "WPIC Supply Demand Estimates", query: "wpicsupply" },
  ];

  const router = useRouter();
  const { tab } = router.query; // Get the current tab from query parameters

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Set active tab based on the query parameter
    const activeIndex = tabs.findIndex((t) => t.query === tab);
    if (activeIndex >= 0) {
      setActiveTab(activeIndex);
    } else {
      setActiveTab(0); // Default to the first tab if no query is present
    }
  }, [tab]);

  const handleTabClick = (index, query) => {
    setActiveTab(index); // Update active tab
    router.push(
      {
        pathname: router.pathname, // Keep the current path
        query: { tab: query }, // Add or update the `tab` query parameter
      },
      undefined,
      { shallow: true } // Avoid full page reload
    );
  };

  return (
    <div className="bg-white border-t border-gray-200">
      <div className="container px-3 md:px-12">
        <ul className="flex justify-start items-center gap-x-3 sm:gap-x-5 py-6 bg-white shadow-sm">
          {tabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => handleTabClick(index, tab.query)}
              className={`cursor-pointer font-medium lg:text-[15px] sm:text-[12px] px-2.5 sm:px-4 py-1 sm:py-2 rounded-full mb-2 md:mb-0 ${
                activeTab === index
                  ? "text-white bg-accent hover:bg-accent/90"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabsSection;
