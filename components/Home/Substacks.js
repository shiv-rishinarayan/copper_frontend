import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SUBSTACKS } from "@/src/api/copperAPI";

const Substacks = () => {
  const [substackPosts, setSubstackPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to truncate content
  const truncateContent = (content) => {
    if (!content) return "";
    const cleanContent = content.replace(/<[^>]*>/g, "");
    const words = cleanContent.split(/\s+/).slice(0, 15);
    return words.length > 0 ? `${words.join(" ")}...` : "";
  };

  // Intelligent title truncation function
  const formatTitle = (title) => {
    if (!title) return "Untitled";
    if (title.length <= 70) return title;
    return `${title.substring(0, 70)}...`;
  };

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (error) {
      console.warn("Invalid date format:", dateString);
      return '';
    }
  };

  useEffect(() => {
    const fetchSubstacks = async () => {
      try {
        console.log('Fetching substacks from:', SUBSTACKS);
        const response = await fetch(SUBSTACKS);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Substacks data:', data);
        
        const formattedPosts = Array.isArray(data) 
          ? data.map((post) => ({
              id: post.id || Math.random().toString(36).substr(2, 9),
              title: formatTitle(post.title) || "Untitled Substack Post",
              url: post.url || "#",
              content: truncateContent(post.content),
              subtitle: post.subtitle || "",
              image: post.image_url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4sEG5g9GFcy4SUxbzWNzUTf1jMISTDZrTw&s",
              date: formatDate(post.date || post.created_at),
            }))
          : [];

        setSubstackPosts(formattedPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching substacks:", error);
        setError(error.message);
        setSubstackPosts([]);
        setLoading(false);
      }
    };

    fetchSubstacks();
  }, []);

  if (loading) {
    return (
      <div>
        <h2 className="flex items-center text-[19px] md:text-[21px] font-bold cambay border-b border-gray-300 pb-1 mb-3">
          Copper Substacks
        </h2>
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-800"></div>
          <span className="ml-3 text-gray-800 font-semibold">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2 className="flex items-center text-[19px] md:text-[21px] font-bold cambay border-b border-gray-300 pb-1 mb-3">
          Copper Substacks
        </h2>
        <div className="text-center py-8 text-red-500">
          Error loading substacks: {error}
        </div>
      </div>
    );
  }

  if (substackPosts.length === 0) {
    return (
      <div>
        <h2 className="flex items-center text-[19px] md:text-[21px] font-bold cambay border-b border-gray-300 pb-1 mb-3">
          Copper Substacks
        </h2>
        <div className="text-center py-8 text-gray-500">
          No Substack posts available at this time
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="flex items-center text-[19px] md:text-[21px] font-bold cambay border-b border-gray-300 pb-1 mb-3">
        Copper Substacks
      </h2>
      <div className="space-y-6">
        {substackPosts.slice(0, 4).map((post) => (
          <Link
            key={post.id}
            href={post.url}
            target="_blank"
            className="flex items-start justify-between space-x-4 pb-4 cursor-pointer group border-b border-gray-100 last:border-b-0"
          >
            <div className="flex flex-col flex-grow">
              <p className="text-xs font-semibold text-accent mb-1">
                Substack
              </p>
              
              <h3 className="text-md font-bold text-gray-800 mt-1 group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              
              {post.content && (
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {post.content}
                </p>
              )}
              
              {post.date && (
                <span className="text-xs text-gray-500 mt-2">{post.date}</span>
              )}
            </div>
            
            <div className="flex-shrink-0">
              <div className="w-[80px] h-[75px] overflow-hidden rounded-md">
                <img
                  src={post.image}
                  alt={post.title ? post.title.substring(0, 10) + "..." : "Substack post"}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4sEG5g9GFcy4SUxbzWNzUTf1jMISTDZrTw&s";
                  }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Substacks;
