import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SUBSTACKS } from "@/src/api/platinumAPI";

const Substacks = () => {
  const [platinumPosts, setPlatinumPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to truncate content
  const truncateContent = (content) => {
    if (!content) return "";
    const cleanContent = content.replace(/<[^>]*>/g, "");
    const words = cleanContent.split(/\s+/).slice(0, 10);
    return words.length > 0 ? `${words.join(" ")}...` : "";
  };

  // Intelligent title truncation function
  const formatTitle = (title) => {
    if (!title) return "Untitled";
    if (title.length <= 70) return title;
    return `${title.substring(0, 70)}...`;
  };

  useEffect(() => {
    // Fetch data from the API
    fetch(SUBSTACKS)
      .then((response) => response.json())
      .then((data) => {
        const formattedPosts = data.map((post) => ({
          id: post.id || Math.random().toString(36).substr(2, 9),
          category: post.category || "Platinum",
          title: formatTitle(post.title) || "Title for Substack Post",
          author: post.author || "Anonymous Author",
          readTime: post.readTime || "5 min read",
          date: post.date || "Jan 1, 2024",
          image:
            post.image_url ||
            post.image_srcset ||
            post.image ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4sEG5g9GFcy4SUxbzWNzUTf1jMISTDZrTw&s",
          url: post.url || "#",
          content: truncateContent(post.content),
        }));

        setPlatinumPosts(formattedPosts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 className="flex items-center text-[19px] md:text-[21px] font-bold cambay border-b border-gray-300 pb-1 mb-3">
        PGM Substacks
      </h2>
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-800"></div>
          <span className="ml-3 text-gray-800 font-semibold">Loading...</span>
        </div>
      ) : (
        <div className="space-y-6">
          {platinumPosts.slice(0, 6).map((post) => (
            <Link
              key={post.id}
              href={post.url}
              target="_blank"
              className="flex items-start justify-between space-x-4 pb-4 cursor-pointer"
            >
              <div className="flex flex-col flex-grow">
                {post.category && (
                  <p className="text-xs font-semibold text-gray-600">
                    {post.category}
                  </p>
                )}
                {post.title && (
                  <h3 className="text-md font-bold text-gray-800 mt-1">
                    {post.title}
                  </h3>
                )}
                {post.content && (
                  <p className="text-sm text-gray-600 mt-1">{post.content}</p>
                )}
              </div>
              <div className="flex flex-col items-end space-y-2">
                {post.date && (
                  <span className="text-xs text-gray-500">{post.date}</span>
                )}
                <div className="w-[80px] h-[75px] overflow-hidden rounded-md">
                  <img
                    src={post.image}
                    alt={post.title ? post.title.substring(0, 10) + "..." : ""}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Substacks;
