import React, { useState, useCallback, useRef } from "react";
import { RiDeleteBin6Fill, RiThumbUpFill } from "react-icons/ri";
import { BiSolidSend } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import toast from "react-hot-toast";
import Image from "next/image";
import { useForumPosts } from "../../context/ForumPostsContext";
import PostUtils from "./CommunityPostUtils";
import { ShimmerPostCard, ShimmerPostList } from "./Shimmer";

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
  const [loading, setLoading] = useState(false);
  const { updateState } = useForumPosts();

  // Consolidate comment-related state
  const [expandedComments, setExpandedComments] = useState({});
  const [commentInputs, setCommentInputs] = useState({});

  // Use PostUtils for helper functions
  const postUtilsData = PostUtils({
    auth,
    posts,
    setPosts: (newPosts) => updateState?.({ posts: newPosts }),
  }) || {};
  const { formatPostContent, formatTimeAgo, fetchComments, addComment, deleteComment } = postUtilsData;

  // Single observer for infinite scroll attached to the last post
  const observer = useRef();
  const lastPostRef = useCallback(
    (node) => {
      if (loading || !propHasMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            handleLoadMore();
          }
        },
        { threshold: 0.1 }
      );
      if (node) observer.current.observe(node);
    },
    [loading, propHasMore, onLoadMore]
  );

  const handleLoadMore = useCallback(async () => {
    setLoading(true);
    try {
      await onLoadMore?.();
    } catch (error) {
      console.error("Error loading more posts:", error);
    } finally {
      setLoading(false);
    }
  }, [onLoadMore]);

  // Toggle comments section and fetch comments if expanding
  const handleToggleComments = async (postId) => {
    setExpandedComments((prev) => ({ ...prev, [postId]: !prev[postId] }));
    if (!expandedComments[postId]) {
      await fetchComments?.(postId);
    }
  };

  if (initialLoading) {
    return (
      <div className="space-y-3 bg-gray-50">
        <ShimmerPostList count={4} />
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center space-y-4 bg-white p-4 rounded-lg shadow-md">
        <p className="text-sm text-gray-500">
          No posts yet. Be the first to start a conversation!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 bg-gray-50">
      {posts.map((post, index) => (
        <div
          key={post.id}
          ref={index === posts.length - 1 ? lastPostRef : null}
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
                  handleToggleComments(post.id);
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
          {expandedComments[post.id] && (
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
                    await addComment(post.id, commentInputs[post.id]);
                    setCommentInputs((prev) => ({ ...prev, [post.id]: "" }));
                    await fetchComments(post.id);
                  }}
                  className="bg-accent text-white px-2 rounded h-7"
                >
                  <BiSolidSend className="text-sm" />
                </button>
              </div>
              {post.comments?.map((comment) => (
                <div
                  key={comment.id}
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

      {(loading || propHasMore) && (
        <div className="space-y-3">
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
