import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import toast from "react-hot-toast";
import useAxios from "../../src/network/useAxios";
import { useSidebarLatestNews } from "../../context/SidebarLatestNewsContext";
import { useCommunityPostUtils } from "../../context/CommunityPostUtilsContext";
import GeneralHelpers from "../../src/utils/general-helpers";
import { GetUserData } from "../../src/utils/GetUserData";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "@/src/api/platinumAPI";

const PostUtils = ({
  auth,
  expandedPostComments,
  setExpandedPostComments,
  postComments,
  setPostComments,
  commentInputs,
  setCommentInputs,
  setPosts,
  posts,
  expandedPosts,
  setExpandedPosts,
}) => {
  const router = useRouter();
  const axiosInstance = useAxios();
  const context = useSidebarLatestNews() || {};
  const { updateNewsData } = context;

  const postContext = useCommunityPostUtils() || {};
  const { updatePostCommentData } = postContext;

  // Add pagination state
  const [pagination, setPagination] = useState({
    count: 0,
    next: null,
    previous: null,
  });

  const formatImageUrl = (imageUrl) => {
    if (!imageUrl) return null;
    if (imageUrl.startsWith("http")) return imageUrl;
    return GeneralHelpers.getImageUrl(imageUrl);
  };

  const detectAndRenderContent = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const mentionRegex = /(@\w+)/g;
    const hashtagRegex = /#\w+(?=#|$|\s)/g;
    const cashtagRegex = /\$[A-Za-z]+/g;

    const extractTags = (text) => {
      const hashtags = [];
      const cashtags = [];

      text.replace(hashtagRegex, (match) => {
        hashtags.push(match.slice(1));
        return match;
      });

      text.replace(cashtagRegex, (match) => {
        cashtags.push(match.slice(1));
        return match;
      });

      return {
        hashtags: [...new Set(hashtags)],
        cashtags: [...new Set(cashtags)],
      };
    };

    const separateHashtags = (text) => {
      return text.replace(/(#\w+)(?=#)/g, "$1 ");
    };

    const renderUrls = (part) => {
      const urlMatches = part.match(urlRegex);
      if (urlMatches) {
        return urlMatches.map((url, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline break-all"
          >
            {url}
          </a>
        ));
      }
      return part;
    };

    // const tagClick = async (tag, type) => {
    //   try {
    //     const endpoint =
    //       type === "hashtag"
    //         ? `community/api/forum/posts/?hashtag=${tag}`
    //         : `community/api/forum/posts/?cashtag=${tag}`;

    //     const response = await axiosInstance.get(endpoint, {
    //       headers: auth.accessToken
    //         ? { Authorization: `Bearer ${auth.accessToken}` }
    //         : {},
    //     });

    //     // Extract posts from the "results" array
    //     const posts = response.data?.results || [];

    //     // Check if there are no posts
    //     if (posts.length === 0) {
    //       toast(`No posts found for ${type === "hashtag" ? "#" : "$"}${tag}`);
    //       setPosts([]);
    //       return;
    //     }

    //     // Process posts to handle post images
    //     const postsWithImage = posts.map((post) => ({
    //       ...post,
    //       post_image: post.post_image?.startsWith("http")
    //         ? post.post_image
    //         : post.post_image
    //         ? GeneralHelpers.getImageUrl(post.post_image)
    //         : null,
    //     }));

    //     setPosts(postsWithImage);

    //     // Update news data
    //     if (type === "hashtag") {
    //       updateNewsData(tag);
    //     } else {
    //       updateNewsData(tag, "cashtag");
    //     }
    //   } catch (error) {
    //     console.error(`Error fetching ${type} posts:`, error);
    //     setPosts([]);
    //     toast.error(`Failed to fetch posts for this ${type}`);
    //   }
    // };

    const tagClick = async (tag, type) => {
      try {
        const endpoint =
          type === "hashtag"
            ? `${BASE_URL}/community/api/forum/posts/?hashtag=${tag}`
            : `${BASE_URL}/community/api/forum/posts/?cashtag=${tag}`;

        // Direct axios call without instance
        const response = await axios.get(endpoint);
        const posts = response.data?.results || [];

        if (posts.length === 0) {
          toast.info(
            `No posts found for ${type === "hashtag" ? "#" : "$"}${tag}`
          );
          setPosts([]);
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

        setPosts(postsWithImage);

        if (type === "hashtag") {
          updateNewsData(tag);
        } else {
          updateNewsData(tag, "cashtag");
        }
      } catch (error) {
        console.error(`Error fetching ${type} posts:`, error);
        setPosts([]);
        toast.error(`No posts found for this ${type}`);
      }
    };

    const lines = text.split(/\r?\n/);
    const { hashtags, cashtags } = extractTags(text);

    return {
      renderedContent: lines.map((line, lineIndex) => {
        const processedLine = separateHashtags(line);
        const parts = processedLine.split(/(\s+)/);

        const renderedParts = parts.map((part, index) => {
          const urlResult = renderUrls(part);
          if (urlResult !== part) return urlResult;

          if (mentionRegex.test(part)) {
            return (
              <span
                key={`${lineIndex}-${index}`}
                className="text-green-600 font-bold"
              >
                {part}
              </span>
            );
          }

          if (part.startsWith("#")) {
            const hashtag = part.match(/#\w+/)?.[0];
            if (hashtag) {
              return (
                <span
                  key={`${lineIndex}-${index}`}
                  className="text-red-800 font-semibold bg-red-50 text-sm cursor-pointer hover:underline hover:bg-red-700 hover:text-white"
                  onClick={() => tagClick(hashtag.slice(1), "hashtag")}
                >
                  {hashtag}
                </span>
              );
            }
          }

          if (part.startsWith("$")) {
            const cashtag = part.match(/\$[A-Za-z]+/)?.[0];
            if (cashtag) {
              return (
                <span
                  key={`${lineIndex}-${index}`}
                  className="bg-purple-50 text-blue-800 font-semibold text-sm cursor-pointer hover:underline hover:bg-blue-700 hover:text-white"
                  onClick={() => tagClick(cashtag.slice(1), "cashtag")}
                >
                  {cashtag}
                </span>
              );
            }
          }

          return part;
        });

        return (
          <div key={lineIndex} className="break-words">
            {renderedParts}
          </div>
        );
      }),
      hashtags,
      cashtags,
    };
  };

  const formatPostContent = (content = "", postId) => {
    // Ensure content is a string to avoid errors
    const sanitizedContent = typeof content === "string" ? content : "";

    const words = sanitizedContent.split(" ");
    const isLong = words.length > 100;
    const isExpanded = expandedPosts?.[postId] || false;

    const limitedContent =
      isLong && !isExpanded ? words.slice(0, 100).join(" ") : sanitizedContent;

    // Ensure detectAndRenderContent is callable and returns an expected object
    const { renderedContent = limitedContent } =
      typeof detectAndRenderContent === "function"
        ? detectAndRenderContent(limitedContent)
        : {};

    return (
      <div>
        {renderedContent}
        {isLong && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setExpandedPosts((prev) => ({
                ...prev,
                [postId]: !prev?.[postId],
              }));
            }}
            className="text-accent hover:text-accent/80 text-sm font-medium"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    );
  };

  const formatTimeAgo = (createdAt) => {
    try {
      return formatDistanceToNow(new Date(createdAt), { addSuffix: true });
    } catch (error) {
      console.error("Error formatting time:", error);
      return createdAt;
    }
  };

  const fetchComments = async (postId) => {
    const userData = GetUserData(); // Retrieve user data (access token)

    if (!userData?.access_token) {
      toast.error("You need to log in to fetch comments.");
      return [];
    }

    try {
      const response = await axiosInstance.get(
        `community/api/forum/posts/${postId}/comments/`,
        {
          headers: {
            Authorization: `Bearer ${userData.access_token}`, // Pass the token in the header
          },
          withCredentials: true, // Ensure cookies are included if needed
        }
      );

      setPostComments((prev) => ({
        ...prev,
        [postId]: response.data,
      }));
      return response.data;
    } catch (error) {
      console.error("Error fetching comments:", error);
      toast.error("Failed to fetch comments.");
      return [];
    }
  };

  const toggleComments = async (postId) => {
    if (!expandedPostComments[postId]) {
      await fetchComments(postId);
    }

    setExpandedPostComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const addComment = async (postId) => {
    const commentText = commentInputs[postId];
    const userData = GetUserData();

    if (!commentText?.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }

    if (!userData?.access_token) {
      toast.error("Please log in to comment");
      router.push("/auth/login");
      return;
    }

    try {
      const response = await axiosInstance.post(
        "/community/api/forum/comments/create/",
        {
          post_id: postId,
          content: commentText.trim(),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData.access_token}`,
          },
          withCredentials: true,
        }
      );

      // Update additional post comment data if needed
      updatePostCommentData(postId);

      toast.success("Comment added successfully");
    } catch (error) {
      console.error("Error adding comment:", error);

      if (error.response?.status === 401) {
        router.push("/auth/login");
        toast.error("Please login again to comment");
      } else {
        toast.error(error.response?.data?.message || "Failed to add comment");
      }
    }
  };

  const deleteComment = async (postId, commentId) => {
    try {
      const userData = GetUserData();

      if (!userData?.access_token) {
        toast.error("Please log in to delete comments");
        return;
      }

      // Perform the delete request
      let res = await axiosInstance.delete(
        `/community/api/forum/comments/${commentId}/`,
        {
          headers: {
            Authorization: `Bearer ${userData.access_token}`,
          },
          withCredentials: true,
        }
      );

      updatePostCommentData(postId);

      // Show success message
      toast.success("Comment deleted successfully");
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("Please log in again to delete comments");
        router.push("/auth/login");
      } else {
        toast.error("Failed to delete comment");
      }
      console.error("Error deleting comment:", error);
    }
  };

  const fetchPostsByUsername = async (username) => {
    try {
      // Direct axios call without instance
      const response = await axios.get(
        `${BASE_URL}/community/api/forum/posts/by-username/${username}/`
      );

      const postsData = response.data?.results || [];

      if (!Array.isArray(postsData) || postsData.length === 0) {
        toast.info(`No posts found from ${username}`);
        setPosts([]);
        return;
      }

      const postsWithImage = postsData.map((post) => ({
        ...post,
        post_image: post.post_image?.startsWith("http")
          ? post.post_image
          : post.post_image
          ? GeneralHelpers.getImageUrl(post.post_image)
          : null,
      }));

      setPosts(postsWithImage);
      updateNewsData(username, "user");
    } catch (error) {
      console.error("Error fetching user posts:", error);
      setPosts([]);
      toast.error(`No posts found from ${username}`);
    }
  };

  return {
    formatPostContent,
    formatTimeAgo,
    fetchComments,
    toggleComments,
    addComment,
    deleteComment,
    fetchPostsByUsername,
    detectAndRenderContent,
    formatImageUrl,
    pagination,
    extractHashtags: (text) => {
      const hashtagRegex = /(#\w+)/g;
      const hashtags = text.match(hashtagRegex) || [];
      return hashtags.map((tag) => tag.slice(1));
    },
  };
};

export default PostUtils;
