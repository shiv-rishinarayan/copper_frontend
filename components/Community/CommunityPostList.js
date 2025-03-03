import React, { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { RiUserLine, RiDeleteBin6Fill, RiThumbUpFill } from "react-icons/ri";
import { BiSolidSend } from "react-icons/bi";
import { FaRegCopy, FaComment } from "react-icons/fa";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { useForumPosts } from "../../context/ForumPostsContext";
import PostUtils from "./CommunityPostUtils";
import axios from "axios";
import GeneralHelpers from "@/src/utils/general-helpers";
import { ShimmerPostCard, ShimmerPostList } from "./Shimmer";


// Main PostList component
const PostList = ({
  posts = [],
  auth,
  deletePost,
  likePost,
  openModal,
  onLoadMore,
  hasMore: propHasMore,
  initialLoading = false,
}) => {
  // Main state for tracking posts
  const [previousPostsLength, setPreviousPostsLength] = useState(0);
  const [loading, setLoading] = useState(false);
  
  // Update previousPostsLength when posts change
  useEffect(() => {
    setPreviousPostsLength(posts.length);
  }, [posts.length]);
  
  // Refs for scroll position
  const postsContainerRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const lastVisiblePostRef = useRef(null);
  // Add new ref to track when we're in the middle of loading more posts
  const isLoadingRef = useRef(false);
  
  // Other state for post functionality
  const [expandedPostComments, setExpandedPostComments] = useState({});
  const [postComments, setPostComments] = useState({});
  const [commentInputs, setCommentInputs] = useState({});
  const [expandedPosts, setExpandedPosts] = useState({});
  
  const { updateState } = useForumPosts();

  // Safely try to use PostUtils
  let postUtilsData = {};
  try {
    postUtilsData = PostUtils({
      auth,
      expandedPostComments,
      setExpandedPostComments,
      postComments,
      setPostComments,
      commentInputs,
      setCommentInputs,
      setPosts: (newPosts) => updateState?.({ posts: newPosts }),
      posts,
      expandedPosts,
      setExpandedPosts,
    }) || {};
  } catch (error) {
    console.error("Error loading PostUtils:", error);
    // Provide fallback implementations of required functions
    postUtilsData = {
      formatPostContent: (content) => content,
      formatTimeAgo: (date) => new Date(date).toLocaleDateString(),
      fetchComments: async () => {},
      toggleComments: () => {},
      addComment: async () => {},
      deleteComment: async () => {},
      fetchPostsByUsername: async () => {},
      detectAndRenderContent: (content) => content,
    };
  }

  const {
    formatPostContent,
    formatTimeAgo,
    fetchComments,
    toggleComments,
    addComment,
    deleteComment,
    fetchPostsByUsername,
    detectAndRenderContent,
  } = postUtilsData;

  // Capture scroll position before loading more posts
  const handleLoadMore = useCallback(async () => {
    if (loading || isLoadingRef.current || initialLoading) return; // Prevent loading during initialLoading
    
    // Remember current position - use window.scrollY for more reliable position tracking
    scrollPositionRef.current = window.scrollY || document.documentElement.scrollTop;
    console.log("Saving scroll position:", scrollPositionRef.current);
    
    // Mark that we're in the process of loading
    isLoadingRef.current = true;
    setLoading(true);
    
    try {
      // Call the onLoadMore function
      await onLoadMore?.();
      console.log("Loading more posts...");
    } catch (error) {
      console.error("Error loading more posts:", error);
    } finally {
      // Clear loading flag whether successful or not
      setLoading(false);
      setTimeout(() => {
        isLoadingRef.current = false;
      }, 500); // Small delay to ensure state updates have processed
    }
  }, [onLoadMore, loading, initialLoading]);

  // Add a new effect to restore scroll position after posts are loaded
  useEffect(() => {
    // Only run this if we were previously loading and now we're not
    if (!loading && isLoadingRef.current === false && posts.length > previousPostsLength) {
      // Restore scroll position after a tiny delay to let the DOM update
      setTimeout(() => {
        window.scrollTo({
          top: scrollPositionRef.current,
          behavior: 'auto' // Use 'auto' for immediate scrolling without animation
        });
        console.log("Restoring scroll to:", scrollPositionRef.current);
      }, 0);
    }
  }, [loading, posts.length, previousPostsLength]);

  // Observer refs for posts - use multiple refs to increase chances of triggering
  const observerRefs = useRef(new Map());
  
  // Last post ref for intersection observer
  const lastPostRef = useCallback(
    (node) => {
      if (!node || !propHasMore || initialLoading) return;
      
      // Disconnect any existing observers
      observerRefs.current.forEach((observer) => {
        observer.disconnect();
      });
      
      const observer = new IntersectionObserver(
        (entries) => {
          // Only trigger if we're not already loading and the user can see the observed post
          if (entries[0].isIntersecting && propHasMore && !loading && !isLoadingRef.current && !initialLoading) {
            console.log("Post is visible in viewport, loading more...");
            handleLoadMore();
          }
        },
        { 
          threshold: 0.1,
          rootMargin: "800px 0px 800px 0px" // Very large margin to detect much earlier
        }
      );
      
      observer.observe(node);
      observerRefs.current.set(node, observer);
      
      return () => {
        observer.disconnect();
        observerRefs.current.delete(node);
      };
    },
    [loading, propHasMore, handleLoadMore, isLoadingRef, initialLoading]
  );

  // Helper to determine which posts should trigger loading more
  const shouldAddIntersectionRef = (index, total) => {
    if (!propHasMore) return false;
    
    // For fewer posts, observe most posts
    if (total <= 5) return index >= Math.floor(total * 0.3);
    
    // For more posts, observe posts at 40%, 50%, 60%, 70% through the list
    // This will trigger loading when the user is approaching halfway through
    const triggerPoints = [
      Math.floor(total * 0.4),
      Math.floor(total * 0.5),
      Math.floor(total * 0.6),
      Math.floor(total * 0.7)
    ];
    
    return triggerPoints.includes(index);
  };

  // Add styles for the components
  useEffect(() => {
    if (!document.getElementById('post-list-styles')) {
      const style = document.createElement('style');
      style.id = 'post-list-styles';
      style.textContent = `
        .new-posts-container {
          border-top: 1px dashed #e0e0e0;
          padding-top: 12px;
          position: relative;
        }
        
        .new-posts-container::before {
          content: 'New Posts';
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #f9fafb;
          padding: 0 10px;
          font-size: 12px;
          color: #6b7280;
        }
        
        .shimmer-container::before {
          content: 'Loading...';
          background-color: #f0f0f0;
          color: #805ad5;
          font-weight: 500;
        }
        
        .new-post {
          border-left: 3px solid #805ad5;
        }
        
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
        
        @keyframes slide-up {
          0% { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-pulse {
          animation: pulse 1.5s infinite ease-in-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
        
        .shimmer-label {
          text-align: center;
          font-size: 13px;
          color: #6b7280;
          margin-bottom: 10px;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Clean up all observers on unmount
  useEffect(() => {
    return () => {
      observerRefs.current.forEach((observer) => {
        observer.disconnect();
      });
      observerRefs.current.clear();
    };
  }, []);

  // If in initial loading state, show ShimmerPostList
  if (initialLoading) {
    return (
      <div className="space-y-3 bg-gray-50">
        <ShimmerPostList count={4} />
      </div>
    );
  }

  // If no posts at all
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center space-y-4 bg-white p-4 rounded-lg shadow-md">
        <p className="text-sm text-gray-500">
          No posts yet. Be the first to start a conversation!
        </p>
      </div>
    );
  }

  // Render component with posts and loader
  return (
    <div className="space-y-3 bg-gray-50" ref={postsContainerRef}>
      {posts.map((post, index) => (
        <div
          key={post.id}
          // Apply the ref to multiple posts throughout the list
          ref={shouldAddIntersectionRef(index, posts.length) ? lastPostRef : null}
          className="bg-white p-5 rounded-lg relative"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-base">
              <span className="py-1 text-purple-900">
                @{post.author_name || "Anonymous"}
              </span>{" "}
              {post.post_title}
            </h3>

            {auth.user?.username === post.author_name && (
              <button
                onClick={() => deletePost(post.id)}
                className="text-red-400 hover:text-red-600"
              >
                <RiDeleteBin6Fill size={16} />
              </button>
            )}
          </div>
          <div className="text-base text-gray-700 mb-3">
            {formatPostContent(post.post_content)}
          </div>
          {post.post_image && (
            <div className="relative w-auto h-40 mb-3">
              <Image
                src={post.post_image}
                alt="Post"
                fill
                className="object-cover rounded-lg cursor-pointer"
                onClick={() => openModal(post.post_image)}
              />
            </div>
          )}
          <div className="flex justify-between items-center mt-5 text-black/50">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => {
                  if (!auth.user) {
                    toast.info("Please login to like this post.");
                    return;
                  }
                  likePost(post.id);
                }}
                className="flex items-center text-sm hover:text-green"
              >
                <RiThumbUpFill className="mr-1 text-sm" />
                {post.likes_count}
              </button>

              <button
                onClick={() => {
                  if (!auth.user) {
                    toast.info("Please login to comment on this post.");
                    return;
                  }
                  toggleComments(post.id);
                }}
                className="flex items-center text-sm hover:text-green"
              >
                <FaComment className="mr-1 text-sm" />
                {post.comment_count}
              </button>
            </div>

            <div className="text-xs text-black/50 text-thin">
              {formatTimeAgo(post.created_at)}
            </div>
          </div>
          {expandedPostComments[post.id] && (
            <div className="mt-4 pt-1">
              <div className="flex items-end mb-3">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  value={commentInputs[post.id] || ""}
                  onChange={(e) =>
                    setCommentInputs((prev) => ({
                      ...prev,
                      [post.id]: e.target.value,
                    }))
                  }
                  className="flex-grow p-1 pb-2 border-b rounded focus:outline-none mr-2 placeholder:text-sm placeholder:text-black/50"
                />
                <button
                  onClick={async () => {
                    await addComment(post.id);
                    await fetchComments(post.id);
                  }}
                  className="bg-accent text-white px-2 rounded h-7"
                >
                  <BiSolidSend className="text-sm" />
                </button>
              </div>

              {postComments[post.id]?.map((comment) => (
                <div
                  key={`${post.id}-${comment.id}`}
                  className="bg-secondary/10 p-3 px-4 rounded-md mb-2 flex justify-between items-center"
                >
                  <div>
                    <p className="text-xs text-black/50">
                      {comment.created_by_name} • {formatTimeAgo(comment.created_at)}
                    </p>
                    <p className="text-sm">{comment.content}</p>
                  </div>
                  {auth.user?.username === comment.created_by_name && (
                    <button
                      onClick={async () => {
                        await deleteComment(post.id, comment.id);
                        await fetchComments(post.id);
                      }}
                      className="text-red-400 hover:text-red-600"
                    >
                      <RiDeleteBin6Fill size={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Show skeleton posts when more posts can be loaded */}
      {(loading || propHasMore) && !initialLoading && (
        <div className="space-y-3">
          {/* Small indicator that we're loading more */}
          {loading && (
            <div className="text-center py-1">
              <span className="text-xs text-purple-500 bg-purple-50 px-2 py-1 rounded-full animate-pulse inline-block">
                Loading more...
              </span>
            </div>
          )}
          {/* Always show at least one skeleton post */}
          <ShimmerPostCard />
          {/* Show more skeleton posts when actively loading */}
          {loading && (
            <>
              <ShimmerPostCard />
              <ShimmerPostCard />
            </>
          )}
        </div>
      )}

      {!propHasMore && posts.length > 0 && !loading && (
        <div className="text-center text-sm text-gray-500 py-4">
          No more posts to load
        </div>
      )}
    </div>
  );
};

export default PostList;
