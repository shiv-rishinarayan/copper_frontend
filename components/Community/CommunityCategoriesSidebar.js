import React from "react";
import {
  FaRegNewspaper,
  FaDollarSign,
  FaCalendarAlt,
  FaGlobe,
} from "react-icons/fa"; // Importing icons

const PlatinumCategoriesSidebar = ({ onCategoryClick }) => {
  const categories = [
    { name: "Latest News", hashtag: "#latestnews", icon: <FaRegNewspaper /> },
    {
      name: "Platinum Price",
      hashtag: "#platinumprice",
      icon: <FaDollarSign />,
    },
    {
      name: "Platinum Industry Events",
      hashtag: "#platinumindustryevents",
      icon: <FaCalendarAlt />,
    },
    {
      name: "Geopolitical News",
      hashtag: "#geopoliticalnews",
      icon: <FaGlobe />,
    },
  ];

  return (
    <aside className="w-62 h-full border-l border-gray-200 p-3 hidden xl:block lg:order-3 shadow-sm">
      <h3 className="text-lg font-bold mb-4 text-black1/90">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.hashtag}
            onClick={() => onCategoryClick(category.hashtag.slice(1))}
            className="w-full flex items-center px-2 py-1 text-left  text-accent rounded-md bg-accent/10 hover:bg-accent/20 transition-colors duration-200 text-sm"
          >
            <span className="mr-2 text-lg">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default PlatinumCategoriesSidebar;
