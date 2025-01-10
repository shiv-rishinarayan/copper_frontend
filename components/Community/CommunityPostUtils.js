import { formatDistanceToNow } from "date-fns";
import { toast } from "react-toastify";
import useAxios from "../../src/network/useAxios";
import { useSidebarLatestNews } from "../../context/SidebarLatestNewsContext";
import { useCommunityPostUtils } from "../../context/CommunityPostUtilsContext";
import GeneralHelpers from "../../src/utils/general-helpers";
import { GetUserData } from "../../src/utils/GetUserData";

const PostUtils = ({
  auth,
  expandedPostComments,
  setExpandedPostComments,
  postComments,
  setPostComments,
  commentInputs,
  setCommentInputs,
  setPosts,
}) => {
  const axiosInstance = useAxios();
  const context = useSidebarLatestNews() || {};
  const { updateNewsData } = context;

  const postContext = useCommunityPostUtils() || {};
  const { updatePostCommentData } = postContext;

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

    const tagClick = async (tag, type) => {
      try {
        const endpoint =
          type === "hashtag"
            ? `/community/forum/posts/?hashtag=${tag}`
            : `/community/forum/posts/?cashtag=${tag}`;

        const response = await axiosInstance.get(endpoint);

        const postsWithImage = response.data.map((post) => ({
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
        toast.error(`Failed to fetch posts for this ${type}`);
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

  const formatPostContent = (content, limit = 100) => {
    const words = content.split(" ");
    const limitedContent =
      words.length > limit ? words.slice(0, limit).join(" ") + "..." : content;

    const { renderedContent } = detectAndRenderContent(limitedContent);
    return <div>{renderedContent}</div>;
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
    try {
      const response = await axiosInstance.get(
        `community/posts/${postId}/comments/`
      );
      setPostComments((prev) => ({
        ...prev,
        [postId]: response.data,
      }));
      return response.data;
    } catch (error) {
      console.error("Error fetching comments:", error);
      toast.error("Failed to fetch comments");
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

  // const addComment = async (postId) => {
  //   const commentText = commentInputs[postId];

  //   if (!commentText || !commentText.trim()) {
  //     toast.error("Comment cannot be empty");
  //     return;
  //   }

  //   if (!auth.user) {
  //     toast.error("Please log in to comment");
  //     return;
  //   }

  //   try {
  //     const response = await axiosInstance.post("/community/forum/comments/", {
  //       post_id: postId,
  //       post: postId,
  //       content: commentText,
  //     });

  //     await fetchComments(postId);

  //     setCommentInputs((prev) => ({
  //       ...prev,
  //       [postId]: "",
  //     }));

  //     setPosts((prevPosts) =>
  //       prevPosts.map((post) =>
  //         post.id === postId
  //           ? { ...post, comment_count: (post.comment_count || 0) + 1 }
  //           : post
  //       )
  //     );
  //     updatePostCommentData(postId);
  //   } catch (error) {
  //     console.error("Error adding comment:", error);
  //     toast.error("Failed to add comment");
  //   }
  // };
  // const addComment = async (postId) => {
  //   const commentText = commentInputs[postId];
  //   const userData = GetUserData();

  //   if (!commentText || !commentText.trim()) {
  //     toast.error("Comment cannot be empty");
  //     return;
  //   }

  //   if (!userData || !userData.access_token) {
  //     toast.error("Please log in to comment");
  //     return;
  //   }

  //   try {
  //     const response = await axiosInstance.post(
  //       "/community/forum/comments/",
  //       {
  //         post_id: postId,
  //         post: postId,
  //         content: commentText,
  //       },
  //       {
  //         // headers: {
  //         //   "Content-Type": "multipart/form-data",
  //         //   Authorization: `Bearer ${userData.access_token}`,
  //         // },
  //       }
  //     );

  //     if (response.data) {
  //       await fetchComments(postId);

  //       setCommentInputs((prev) => ({
  //         ...prev,
  //         [postId]: "",
  //       }));

  //       setPosts((prevPosts) =>
  //         prevPosts.map((post) =>
  //           post.id === postId
  //             ? { ...post, comment_count: (post.comment_count || 0) + 1 }
  //             : post
  //         )
  //       );

  //       updatePostCommentData(postId);
  //       toast.success("Comment added successfully");
  //     }
  //   } catch (error) {
  //     console.error("Error adding comment:", error);
  //     if (error.response?.status === 401) {
  //       toast.error("Your session has expired. Please login again.");
  //       // You might want to redirect to login page here
  //     } else {
  //       toast.error(error.response?.data?.message || "Failed to add comment");
  //     }
  //   }
  // };

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
      // Explicitly set headers for this request
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.access_token}`, // Note the capital 'B' in Bearer
        },
        withCredentials: true, // Include credentials if your API requires them
      };

      const response = await axiosInstance.post(
        "/community/forum/comments/",
        {
          post_id: postId,
          post: postId,
          content: commentText.trim(),
        },
        config // Pass the config with headers
      );

      if (response.data) {
        await fetchComments(postId);

        setCommentInputs((prev) => ({
          ...prev,
          [postId]: "",
        }));

        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === postId
              ? { ...post, comment_count: (post.comment_count || 0) + 1 }
              : post
          )
        );

        updatePostCommentData(postId);
        toast.success("Comment added successfully");
      }
    } catch (error) {
      console.error("Comment error details:", {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });

      if (error.response?.status === 401) {
        toast.error("Please login again to comment");
        router.push("/auth/login");
        return;
      }

      toast.error(error.response?.data?.message || "Failed to add comment");
    }
  };

  // const deleteComment = async (postId, commentId) => {
  //   try {
  //     await axiosInstance.delete(`/community/forum/comments/${commentId}/`);
  //     await fetchComments(postId);

  //     setPosts((prevPosts) =>
  //       prevPosts.map((post) =>
  //         post.id === postId
  //           ? {
  //               ...post,
  //               comment_count: Math.max((post.comment_count || 0) - 1, 0),
  //             }
  //           : post
  //       )
  //     );
  //   } catch (error) {
  //     console.error("Error deleting comment:", error);
  //     toast.error("Failed to delete comment");
  //   }
  // };
  const deleteComment = async (postId, commentId) => {
    const userData = GetUserData();

    if (!userData?.access_token) {
      toast.error("Please log in to delete comments");
      return;
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.access_token}`,
        },
        withCredentials: true,
      };

      await axiosInstance.delete(
        `/community/forum/comments/${commentId}/`,
        config
      );

      await fetchComments(postId);

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? {
                ...post,
                comment_count: Math.max((post.comment_count || 0) - 1, 0),
              }
            : post
        )
      );

      toast.success("Comment deleted successfully");
    } catch (error) {
      console.error("Error deleting comment:", error);
      if (error.response?.status === 401) {
        toast.error("Please login again to delete comments");
        router.push("/auth/login");
        return;
      }
      toast.error("Failed to delete comment");
    }
  };

  return {
    formatPostContent,
    formatTimeAgo,
    fetchComments,
    toggleComments,
    addComment,
    deleteComment,
    detectAndRenderContent,
    extractHashtags: (text) => {
      const hashtagRegex = /(#\w+)/g;
      const hashtags = text.match(hashtagRegex) || [];
      return hashtags.map((tag) => tag.slice(1));
    },
  };
};

export default PostUtils;
