import React, { useState, useMemo, useEffect, useCallback } from "react";
import { RiUserLine, RiDeleteBin6Fill, RiThumbUpFill } from "react-icons/ri";
import { BiSolidSend } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import PostUtils from "@/components/Community/CommunityPostUtils";
import toast from "react-hot-toast";
import Image from "next/image";
import useAxiosPrivate from "@/src/network/useAxiosPrivate";
import { BASE_URL } from "@/src/api/platinumAPI";
import GeneralHelpers from "@/src/utils/general-helpers";
import axios from "axios";

const PostList = ({
  posts = [],
  auth,
  deletePost,
  likePost,
  openModal,
  setPosts,
  onClearFilter,
}) => {
  const [expandedPostComments, setExpandedPostComments] = useState({});
  const [postComments, setPostComments] = useState({});
  const [commentInputs, setCommentInputs] = useState({});
  const [expandedPosts, setExpandedPosts] = useState({});
  const [loading, setLoading] = useState(false);
  const [lastId, setLastId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [allPosts, setAllPosts] = useState(posts);
  const [hasMore, setHasMore] = useState(true);
  const [activeFilter, setActiveFilter] = useState({ type: null, value: null });

  const axiosInstance = useAxiosPrivate();

  // const handleViewAllPosts = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axiosInstance.get(
  //       `${BASE_URL}/community/api/forum/posts/?limit=10&offset=0`
  //     );
  //     const { results } = response.data;

  //     if (results && results.length > 0) {
  //       const postsWithImage = results.map((post) => ({
  //         ...post,
  //         post_image: post.post_image?.startsWith("http")
  //           ? post.post_image
  //           : post.post_image
  //           ? GeneralHelpers.getImageUrl(post.post_image)
  //           : null,
  //       }));

  //       setAllPosts(postsWithImage);
  //       setActiveFilter({ type: null, value: null });
  //       setHasMore(true);
  //       setCurrentPage(1);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching all posts:", error);
  //     toast.error("Failed to load posts");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleViewAllPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${BASE_URL}/community/api/forum/posts/?limit=10&offset=0`
      );
      const { results } = response.data;

      if (results && results.length > 0) {
        const postsWithImage = results.map((post) => ({
          ...post,
          post_image: post.post_image?.startsWith("http")
            ? post.post_image
            : post.post_image
            ? GeneralHelpers.getImageUrl(post.post_image)
            : null,
        }));

        setAllPosts(postsWithImage); // Set initial posts
        setHasMore(true); // Assume there are more posts to load
      }
    } catch (error) {
      console.error("Error fetching all posts:", error);
      toast.error("Failed to load posts");
    } finally {
      setLoading(false);
    }
  };

  const handleTagClick = async (tag, type) => {
    try {
      setLoading(true);
      setCurrentPage(0);
      setActiveFilter({ type, value: tag });

      const endpoint =
        type === "hashtag"
          ? `${BASE_URL}/community/api/forum/posts/?limit=10&hashtag=${tag}`
          : `${BASE_URL}/community/api/forum/posts/?limit=10&cashtag=${tag}`;

      const response = await axios.get(endpoint);
      const posts = response.data?.results || [];

      if (posts.length === 0) {
        toast.info(
          `No posts found for ${type === "hashtag" ? "#" : "$"}${tag}`
        );
        setAllPosts([]);
        setHasMore(false);
        return;
      }

      const postsWithImage = posts.map((post) => ({
        ...post,
        post_image: post.post_image?.startsWith("http")
          ? post.post_image
          : post.post_image
          ? GeneralHelpers.getImageUrl(post.post_image)
          : null,
      }));

      setAllPosts(postsWithImage);
      setHasMore(true);
      setCurrentPage(1);
    } catch (error) {
      console.error(`Error fetching ${type} posts:`, error);
      setAllPosts([]);
      toast.error(`No posts found for this ${type}`);
    } finally {
      setLoading(false);
    }
  };

  const {
    formatPostContent,
    formatTimeAgo,
    fetchComments,
    toggleComments,
    addComment,
    deleteComment,
    fetchPostsByUsername,
    detectAndRenderContent,
  } = PostUtils({
    auth,
    expandedPostComments,
    setExpandedPostComments,
    postComments,
    setPostComments,
    commentInputs,
    setCommentInputs,
    setPosts: setAllPosts,
    posts: allPosts,
    expandedPosts,
    setExpandedPosts,
    handleTagClick,
  });

  const handleClearFilter = useCallback(() => {
    setActiveFilter({ type: null, value: null });
    setCurrentPage(1);
    setHasMore(true);
    if (typeof onClearFilter === "function") {
      onClearFilter();
    }
  }, [onClearFilter]);

  // const fetchMorePosts = useCallback(async () => {
  //   if (loading || !hasMore) return;

  //   try {
  //     setLoading(true);
  //     const offset = currentPage * 10;

  //     let endpoint = `${BASE_URL}/community/api/forum/posts/?limit=10&offset=${offset}`;
  //     if (activeFilter.type === "hashtag") {
  //       endpoint = `${BASE_URL}/community/api/forum/posts/?limit=10&offset=${offset}&hashtag=${activeFilter.value}`;
  //     } else if (activeFilter.type === "cashtag") {
  //       endpoint = `${BASE_URL}/community/api/forum/posts/?limit=10&offset=${offset}&cashtag=${activeFilter.value}`;
  //     }

  //     const response = await axiosInstance.get(endpoint);
  //     const { results, next, last_id } = response.data;

  //     if (results && results.length > 0) {
  //       const postsWithImage = results.map((post) => ({
  //         ...post,
  //         post_image: post.post_image?.startsWith("http")
  //           ? post.post_image
  //           : post.post_image
  //           ? GeneralHelpers.getImageUrl(post.post_image)
  //           : null,
  //       }));

  //       setAllPosts((prevPosts) =>
  //         currentPage === 1 ? postsWithImage : [...prevPosts, ...postsWithImage]
  //       );
  //       setCurrentPage((prev) => prev + 1);
  //       setLastId(last_id);
  //       setHasMore(Boolean(next));
  //     } else {
  //       setHasMore(false);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching more posts:", error);
  //     toast.error("Failed to load more posts");
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [currentPage, loading, hasMore, axiosInstance, activeFilter]);
  const fetchMorePosts = useCallback(async () => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);

      // Calculate offset based on the current number of posts
      const limit = 10; // Fetch 10 posts at a time
      const offset = allPosts.length; // Offset is the current number of posts

      let endpoint = `${BASE_URL}/community/api/forum/posts/?limit=${limit}&offset=${offset}`;
      if (activeFilter.type === "hashtag") {
        endpoint = `${BASE_URL}/community/api/forum/posts/?limit=${limit}&offset=${offset}&hashtag=${activeFilter.value}`;
      } else if (activeFilter.type === "cashtag") {
        endpoint = `${BASE_URL}/community/api/forum/posts/?limit=${limit}&offset=${offset}&cashtag=${activeFilter.value}`;
      }

      const response = await axios.get(endpoint);
      const { results, next } = response.data;

      if (results && results.length > 0) {
        const postsWithImage = results.map((post) => ({
          ...post,
          post_image: post.post_image?.startsWith("http")
            ? post.post_image
            : post.post_image
            ? GeneralHelpers.getImageUrl(post.post_image)
            : null,
        }));

        // Append new posts to the existing posts
        setAllPosts((prevPosts) => [...prevPosts, ...postsWithImage]);
        setHasMore(Boolean(next)); // Update hasMore based on the API response
      } else {
        setHasMore(false); // No more posts to load
      }
    } catch (error) {
      console.error("Error fetching more posts:", error);
      toast.error("Failed to load more posts");
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, activeFilter, allPosts.length]);

  useEffect(() => {
    if (posts && posts.length > 0) {
      setAllPosts(posts);
      setActiveFilter({ type: null, value: null });
    }
  }, [posts]);

  const lastPostRef = useCallback(
    (node) => {
      if (loading) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            fetchMorePosts();
          }
        },
        { threshold: 0.5 }
      );

      if (node) observer.observe(node);
      return () => {
        if (node) observer.disconnect();
      };
    },
    [loading, hasMore, fetchMorePosts]
  );

  const sortedPosts = useMemo(() => {
    return Array.isArray(allPosts)
      ? [...allPosts]
          .filter((post) => post && post.id)
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      : [];
  }, [allPosts]);

  if (!sortedPosts || sortedPosts.length === 0) {
    return (
      <div className="text-center space-y-4 bg-white p-4 rounded-lg shadow-md">
        <p className="text-sm text-gray-500">
          {activeFilter.type
            ? `No posts found for ${
                activeFilter.type === "hashtag" ? "#" : "$"
              }${activeFilter.value}`
            : "No posts yet. Be the first to start a conversation!"}
        </p>
        {activeFilter.type && (
          <button
            onClick={handleViewAllPosts}
            className="bg-accent text-white px-4 py-2 rounded-md text-sm hover:bg-accent/90 transition-colors"
          >
            View All Posts
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-3 bg-gray-50">
      {activeFilter.type && (
        <div className="bg-white p-2 rounded-lg mb-3 flex justify-between items-center">
          <span className="text-sm font-bold text-black/80">
            Filtered by {activeFilter.type === "hashtag" ? "#" : "$"}
            {activeFilter.value}
          </span>
          <button
            onClick={handleClearFilter}
            className="text-xs bg-red-100 p-2 rounded-md text-red-700 hover:bg-red-200"
          >
            Clear Filter
          </button>
        </div>
      )}

      {sortedPosts.map((post, index) => (
        <div
          key={post.id}
          ref={index === sortedPosts.length - 1 ? lastPostRef : null}
          className="bg-white p-5 rounded-lg relative"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-base">
              <span
                className="py-1 text-purple-900"
                // onClick={() => fetchPostsByUsername(post.author_name)}/
              >
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
          {/* {expandedPostComments[post.id] && (
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
                  key={comment.id}
                  className="bg-secondary/10 p-3 px-4 rounded-md mb-2 flex justify-between items-center"
                >
                  <div>
                    <p className="text-xs text-black/50">
                      {comment.created_by_name} •{" "}
                      {formatTimeAgo(comment.created_at)}
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
            </div> */}
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
                  key={`${post.id}-${comment.id}`} // Ensure unique key
                  className="bg-secondary/10 p-3 px-4 rounded-md mb-2 flex justify-between items-center"
                >
                  <div>
                    <p className="text-xs text-black/50">
                      {comment.created_by_name} •{" "}
                      {formatTimeAgo(comment.created_at)}
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

      {loading && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto"></div>
        </div>
      )}

      {!hasMore && sortedPosts.length > 0 && (
        <div className="text-center text-sm text-gray-500 py-4">
          No more posts to load
        </div>
      )}
    </div>
  );
};

export default PostList;
