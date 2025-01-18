// import React from "react";
// import {
//   FaRegNewspaper,
//   FaDollarSign,
//   FaCalendarAlt,
//   FaGlobe,
// } from "react-icons/fa"; // Importing icons

// const PlatinumCategoriesSidebar = ({ onCategoryClick }) => {
//   const categories = [
//     { name: "Latest News", hashtag: "#latestnews", icon: <FaRegNewspaper /> },
//     {
//       name: "Platinum Price",
//       hashtag: "#platinumprice",
//       icon: <FaDollarSign />,
//     },
//     {
//       name: "Platinum Industry Events",
//       hashtag: "#platinumindustryevents",
//       icon: <FaCalendarAlt />,
//     },
//     {
//       name: "Geopolitical News",
//       hashtag: "#geopoliticalnews",
//       icon: <FaGlobe />,
//     },
//   ];

//   return (
//     <aside className="w-62 h-full border-l border-gray-200 p-3 hidden xl:block lg:order-3 shadow-sm">
//       <h3 className="text-lg font-bold mb-4 text-black/90">Categories</h3>
//       <div className="space-y-2">
//         {categories.map((category) => (
//           <button
//             key={category.hashtag}
//             onClick={() => onCategoryClick(category.hashtag.slice(1))}
//             className="w-full flex items-center px-2 py-1 text-left  text-accent rounded-md bg-accent/10 hover:bg-accent/20 transition-colors duration-200 text-sm"
//           >
//             <span className="mr-2 text-lg">{category.icon}</span>
//             {category.name}
//           </button>
//         ))}
//       </div>
//     </aside>
//   );
// };

// export default PlatinumCategoriesSidebar;

import React, { useState } from "react";
import {
  FaRegNewspaper,
  FaDollarSign,
  FaCalendarAlt,
  FaGlobe,
} from "react-icons/fa"; // Importing icons
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const PlatinumCategoriesSidebar = ({
  onCategoryClick,
  setNewPost,
  newPost,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const handleCategoryClick = (category) => {
    // Call the original onCategoryClick for filtering
    onCategoryClick(category.hashtag.slice(1));

    // Remove any existing hashtags from the categories
    let updatedPost = newPost;
    categories.forEach((cat) => {
      updatedPost = updatedPost.replace(
        new RegExp(cat.hashtag + "\\s*", "g"),
        ""
      );
    });

    // Trim any leading/trailing whitespace
    updatedPost = updatedPost.trim();

    // Add the new hashtag at the end
    updatedPost += (updatedPost ? " " : "") + category.hashtag + " ";

    // Update the post
    setNewPost(updatedPost);

    // Set the selected category
    setSelectedCategory(category.hashtag);
  };

  return (
    <aside className="w-62 h-full border-l border-gray-200 p-3 hidden xl:block lg:order-3 shadow-sm">
      <h3 className="text-lg font-bold mb-4 text-black/90">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.hashtag}
            onClick={() => handleCategoryClick(category)}
            className={`w-full flex items-center px-2 py-1 text-left text-accent  rounded-md 
                       font-medium transition-colors duration-200
                       ${
                         selectedCategory === category.hashtag
                           ? "bg-accent/10"
                           : "bg-accent/10 hover:bg-accent/20"
                       }`}
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
