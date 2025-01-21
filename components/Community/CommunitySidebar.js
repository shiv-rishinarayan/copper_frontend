import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  RiAddLine,
  RiSendPlaneFill,
  RiImageAddLine,
  RiCloseLine,
  RiSearchLine,
} from "react-icons/ri";
import useAxios from "../../src/network/useAxios";
import GeneralHelpers from "../../src/utils/general-helpers";
import { toast } from "react-hot-toast";

const CommunitySidebar = ({
  auth,
  newPost,
  setNewPost,
  postImage,
  setPostImage,
  sendPost,
  setPosts,
}) => {
  const router = useRouter();
  const { id } = router.query;
  const axiosInstance = useAxios();

  const [searchQuery, setSearchQuery] = useState("");
  const [originalPosts, setOriginalPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllPosts = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/categories/${id}/posts/`);
      const postsWithImage = response.data.reverse().map((post) => ({
        ...post,
        post_image: post.post_image
          ? GeneralHelpers.getImageUrl(post.post_image)
          : null,
      }));
      setOriginalPosts(postsWithImage);
      setPosts(postsWithImage);
    } catch (error) {
      console.error("Error fetching posts:", error);
      toast.error("Failed to fetch posts. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchAllPosts();
    }
  }, [id]);

  const handleHashtagSearch = async (query) => {
    const cleanedQuery = query.replace(/^#/, "").trim();

    if (!cleanedQuery) {
      setPosts(originalPosts);
      setSearchQuery("");
      return;
    }

    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/community/forum/posts/?hashtag=${cleanedQuery}`
      );

      const postsWithImage = response.data.map((post) => ({
        ...post,
        post_image: post.post_image
          ? GeneralHelpers.getImageUrl(post.post_image)
          : null,
      }));

      setPosts(postsWithImage);
    } catch (error) {
      console.error("Error searching posts:", error);
      setPosts(originalPosts);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchQuery.trim() === "") {
        setPosts(originalPosts);
      } else {
        handleHashtagSearch(searchQuery);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery, originalPosts]);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full p-4 bg-gray-100">
      {auth && auth.user ? (
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <textarea
              placeholder="What's on your mind?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="flex-grow h-10 p-2 rounded-md placeholder:text-sm placeholder:text-black1/50 focus:outline-gray-100 resize-none text-sm"
            />

            <label className="cursor-pointer transition-colors duration-300 p-1 rounded-md">
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
                  const maxSize = 5 * 1024 * 1024; // 5MB

                  if (!file) return;

                  if (!allowedTypes.includes(file.type)) {
                    toast.error(
                      "Invalid file type. Please upload JPEG, PNG, or GIF."
                    );
                    return;
                  }
                  if (file.size > maxSize) {
                    toast.error("File is too large. Maximum size is 5MB.");
                    return;
                  }
                  setPostImage(file);
                }}
              />
              <div className="rounded-md text-gray-400 hover:text-green transition-colors">
                <RiImageAddLine className="w-6 h-6" />
              </div>
            </label>

            <button
              onClick={sendPost}
              className="bg-accent hover:bg-accent/90 text-white p-2 rounded-md flex items-center justify-center space-x-1 text-sm"
            >
              <RiSendPlaneFill className="w-4 h-4" />
              <span>Post</span>
            </button>
          </div>

          {postImage && (
            <div className="relative mt-2">
              <img
                src={URL.createObjectURL(postImage)}
                alt="Preview"
                className="w-full h-24 object-cover rounded-md shadow-md"
              />
              <button
                onClick={() => setPostImage(null)}
                className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full transition-colors duration-300"
              >
                <RiCloseLine className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="mb-2 text-sm text-gray-700">
            Please log in to create a post
          </p>
          <button
            onClick={() => router.push("/auth/login")}
            className="bg-accent text-white px-4 py-2 rounded-sm hover:bg-text/90 text-sm transition-colors duration-300"
          >
            Log In
          </button>
        </div>
      )}
    </div>
  );
};

export default CommunitySidebar;
