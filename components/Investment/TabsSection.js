import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const TabsSection = () => {
  const tabs = [
    { name: "Snapshot", query: "snapshot" },
    { name: "Stock Screener", query: "stock-screener" },
    { name: "Insider Transactions", query: "insider-transactions" },
    { name: "ETF/Trust Holdings", query: "etf-trust-holdings" },
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
      <div className="container mx-auto px-3 md:px-12">
        <ul className="flex items-center gap-x-8 md:gap-x-9 py-7 bg-white shadow-sm">
          {tabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => handleTabClick(index, tab.query)}
              className={`cursor-pointer font-medium text-sm ${
                activeTab === index
                  ? "text-black px-4 py-2 bg-secondary/15 rounded-full"
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
