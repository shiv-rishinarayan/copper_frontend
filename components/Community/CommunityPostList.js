import React, { useState, useMemo } from "react";
import { RiUserLine, RiDeleteBin6Fill, RiThumbUpFill } from "react-icons/ri";
import { BiSolidSend } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import PostUtils from "../Community/CommunityPostUtils";
import toast from "react-hot-toast";
import Image from "next/image";
import useAxios from "@/src/network/useAxios";

const PostList = ({
  posts = [],
  auth,
  deletePost,
  likePost,
  openModal,
  setPosts,
  lastPostElementRef,
}) => {
  const [expandedPostComments, setExpandedPostComments] = useState({});
  const [postComments, setPostComments] = useState({});
  const [commentInputs, setCommentInputs] = useState({});
  const [expandedPosts, setExpandedPosts] = useState({});
  const axiosInstance = useAxios();

  const {
    formatPostContent,
    formatTimeAgo,
    fetchComments,
    toggleComments,
    addComment,
    deleteComment,
    fetchPostsByUsername,
  } = PostUtils({
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
  });
  // const handleUsernameClick = (username) => {
  //   fetchPostsByUsername(username);
  // };

  const sortedPosts = useMemo(() => {
    return Array.isArray(posts)
      ? [...posts]
          .filter((post) => post && post.id)
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      : [];
  }, [posts]);

  const fetchCommentss = async (postId) => {
    const response = await axiosInstance.get(
      `community/api/forum/posts/${postId}/comments/`
    );
    commentInputs[postId] = "";
    postComments[postId] = response?.data;
  };

  return (
    <div className="space-y-3 bg-gray-50">
      {sortedPosts.length > 0 ? (
        sortedPosts.map((post, index) => (
          <div
            key={post.id}
            className="bg-white p-5 rounded-lg relative"
            ref={index === sortedPosts.length - 1 ? lastPostElementRef : null}
          >
            {/* Post Header */}
            <div className="flex justify-between items-center mb-2">
              {/* <h3 className="font-semibold text-base">
                <span className="py-1 text-purple-900">
                  @{post.author_name || "Anonymous"}
                </span>{" "}
                {post.post_title}
              </h3> */}
              <h3 className="font-semibold text-base">
                <span
                  className="py-1 text-purple-900 cursor-pointer hover:underline"
                  // onClick={() => handleUsernameClick(post.author_name)}
                  onClick={() => fetchPostsByUsername(post.author_name)}
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

            {/* Post Content */}
            <p className="text-base text-gray-700 mb-3">
              {formatPostContent(post.post_content, post.id)}
            </p>

            {/* Post Image */}
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

            {/* {formattedImageUrl && (
                <img
                  src={formattedImageUrl}
                  alt="Post"
                  className="w-auto h-40 object-cover rounded-lg mb-3 cursor-pointer"
                  onClick={() => openModal(formattedImageUrl)}
                />
              )} */}

            {/* Post Actions */}
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

            {/* Comments Section */}
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
                      await fetchCommentss(post.id);
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
                          await fetchCommentss(post.id);
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
        ))
      ) : (
        <div className="text-center text-sm text-gray-500 bg-white p-4 rounded-lg shadow-md">
          No posts yet. Be the first to start a conversation!
        </div>
      )}
    </div>
  );
};

export default PostList;
