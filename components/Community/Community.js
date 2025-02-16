"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast"; // Changed import
import useAxios from "../../src/network/useAxios";
import { GetUserData } from "../../src/utils/GetUserData";
import GeneralHelpers from "../../src/utils/general-helpers";
import Navbar from "../Navbar";
import Loader from "../Loader";
import ImageModal from "../../components/Community/CommunityPostImageModal";
import CommunityChatInterfaceLeftSide from "../../components/Community/CommunityLeftSide";
import CommunityChatInterfaceRightSide from "../../components/Community/CommunityRightSide";
import PostUtils from "../../components/Community/CommunityPostUtils";
import CommunityCategoriesSidebar from "./CommunityCategoriesSidebar";
import { useSidebarLatestNews } from "../../context/SidebarLatestNewsContext";
import { useCommunityPostUtils } from "../../context/CommunityPostUtilsContext";
import { FORUM_POSTS } from "@/src/api/platinumAPI";

const Community = () => {
  const router = useRouter();
  const axiosInstance = useAxios();
  const userData = GetUserData();
  const { newsData: contextNewsData = [] } = useSidebarLatestNews() || {};
  const { postCommentData: contextPostData = [] } =
    useCommunityPostUtils() || {};

  const [state, setState] = useState({
    loading: false,
    posts: [],
    originalPosts: [],
    newPost: "",
    postTitle: "",
    postImage: null,
    searchQuery: "",
    isModalOpen: false,
    selectedImage: "",
    searchResults: [],
    isSearchActive: false,
    stockDetailsData: null,
  });

  const updateState = (updates) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const { detectAndRenderContent } = PostUtils({
    auth: { user: userData, accessToken: userData?.access_token },
    expandedPostComments: {},
    setExpandedPostComments: () => {},
    postComments: {},
    setPostComments: () => {},
    commentInputs: {},
    setCommentInputs: () => {},
    setPosts: (posts) => updateState({ posts }),
  });

  const api = {
    async fetchStockDetails(identifier, type = "hashtag") {
      if (
        !identifier ||
        (Array.isArray(identifier) && identifier.length === 0)
      ) {
        return;
      }

      try {
        // Clean the identifier by removing $ and ensuring uppercase
        const cleanIdentifier =
          type === "cashtag"
            ? identifier.replace("$", "")?.toUpperCase()
            : identifier?.toUpperCase();

        // Fix the URL structure by removing the trailing slash after the parameter
        const { data } = await axiosInstance.get(
          `api/pgm-stock-detail/?stock_ticker=${cleanIdentifier}`
        );

        updateState({ stockDetailsData: data });
      } catch (error) {
        console.error("Error fetching stock details:", error);
        updateState({ stockDetailsData: [] });
      }
    },

    async fetchPosts(showLoader = true) {
      showLoader && updateState({ loading: true });

      try {
        const response = await fetch(FORUM_POSTS);
        const data = await response.json();

        const postsWithImage = data?.reverse()?.map((post) => ({
          ...post,
          post_image: post.post_image || null,
        }));

        updateState({
          posts: postsWithImage,
          originalPosts: postsWithImage,
          loading: false,
        });
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        toast.error("Failed to fetch posts. Please try again later.");
        updateState({
          loading: false,
          posts: [],
          originalPosts: [],
        });
      }
    },

    async createPost() {
      if (!state.postTitle.trim() && !state.newPost.trim()) {
        toast.error("Please enter a title and content for your post");
        return;
      }

      const userData = GetUserData();
      if (!userData || !userData.access_token) {
        toast.error("Please log in to create a post");
        router.push("/auth/login");
        return;
      }

      const { hashtags, cashtags } = detectAndRenderContent(state.newPost);
      const formData = new FormData();
      formData.append("post_title", state.postTitle);
      formData.append("post_content", state.newPost);
      formData.append("author_name", userData.name || "Anonymous");
      formData.append("hashtags", JSON.stringify(hashtags));
      formData.append("cashtags", JSON.stringify(cashtags));

      if (state.postImage) {
        formData.append("post_image", state.postImage);
      }

      const loadingToast = toast.loading("Creating post..."); // Added loading toast

      try {
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${userData.access_token}`,
          },
          withCredentials: true,
        };

        const { data } = await axiosInstance.post(
          "community/api/forum/posts/create/",
          formData,
          config
        );

        const newPostWithImage = {
          ...data,
          post_image: data.post_image
            ? GeneralHelpers.getImageUrl(data.post_image)
            : null,
        };

        updateState({
          posts: [newPostWithImage, ...state.originalPosts],
          originalPosts: [newPostWithImage, ...state.originalPosts],
          postTitle: "",
          newPost: "",
          postImage: null,
        });

        toast.success("Post created successfully!", { id: loadingToast }); // Update loading toast with success
      } catch (error) {
        if (error.response?.status === 401) {
          toast.error("Your session has expired. Please log in again.", {
            id: loadingToast,
          });
          router.push("/auth/login");
        } else {
          console.error(
            "Post creation error:",
            error.response?.data || error.message
          );
          toast.error("Failed to create post. Please try again.", {
            id: loadingToast,
          });
        }
      }
    },

    async likePost(postId) {
      if (!userData) {
        toast.error("Please log in to like posts");
        return;
      }

      const loadingToast = toast.loading("Processing...");

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${userData.access_token}`,
          },
          withCredentials: true, // Optional, include if required by the API
        };

        const { data } = await axiosInstance.post(
          `community/api/forum/posts/${postId}/like/`,
          null, // Assuming no body is needed
          config
        );

        const { status, likes_count } = data;

        const updatedPosts = state.originalPosts.map((post) =>
          post.id === postId ? { ...post, likes_count } : post
        );

        updateState({ posts: updatedPosts, originalPosts: updatedPosts });
        toast.success(status === "liked" ? "Post liked!" : "Post unliked!", {
          id: loadingToast,
        });
      } catch (error) {
        toast.error("Failed to like/unlike the post. Please try again.", {
          id: loadingToast,
        });
      }
    },

    async deletePost(postId) {
      if (!userData) {
        toast.error("Please log in to delete a post");
        return;
      }

      if (!window.confirm("Are you sure you want to delete this post?")) return;

      const loadingToast = toast.loading("Deleting post...");

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${userData.access_token}`,
          },
          withCredentials: true, // Optional, include if required by the API
        };

        await axiosInstance.delete(
          `community/api/forum/posts/${postId}/`,
          config
        );

        const filterPost = (posts) =>
          posts.filter((post) => post.id !== postId);
        updateState({
          posts: filterPost(state.posts),
          originalPosts: filterPost(state.originalPosts),
          searchResults: state.isSearchActive
            ? filterPost(state.searchResults)
            : state.searchResults,
        });

        toast.success("Post deleted successfully.", { id: loadingToast });
      } catch (error) {
        toast.error("Failed to delete the post. Please try again.", {
          id: loadingToast,
        });
      }
    },
  };

  const filterPosts = (query) => {
    const cleanedQuery = query.toLowerCase().trim();

    if (!cleanedQuery) {
      updateState({
        searchResults: [],
        posts: state.originalPosts,
        isSearchActive: false,
      });
      return;
    }

    const filteredPosts = state.originalPosts.filter((post) => {
      const searchFields = [
        post.post_content?.toLowerCase() || "",
        post.post_title?.toLowerCase() || "",
        post.author_name?.toLowerCase() || "",
        ...(post.hashtags || []).map((tag) => tag.toLowerCase()),
        ...(post.cashtags || []).map((tag) => tag.toLowerCase()),
      ];

      return searchFields.some((field) => field.includes(cleanedQuery));
    });

    updateState({
      searchResults: filteredPosts,
      posts: filteredPosts,
      isSearchActive: true,
    });
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    updateState({ searchQuery: query });
    filterPosts(query);

    if (query.startsWith("$")) {
      api.fetchStockDetails(query.slice(1), "cashtag");
    } else {
      api.fetchStockDetails(query);
    }
  };

  useEffect(() => {
    api.fetchPosts();
  }, []);

  useEffect(() => {
    if (contextNewsData) {
      api.fetchStockDetails(
        contextNewsData.startsWith("$")
          ? contextNewsData.slice(1)
          : contextNewsData,
        contextNewsData.startsWith("$") ? "cashtag" : "hashtag"
      );
    }

    if (contextPostData) {
      api.fetchPosts(false);
    }
  }, [contextNewsData, contextPostData]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (state.searchQuery.trim() === "") {
        updateState({ posts: state.originalPosts });
      } else {
        filterPosts(state.searchQuery);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [state.searchQuery, state.originalPosts]);

  if (state.loading) return <Loader />;

  return (
    <div className="relative h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden px-2 lg:px-4 mt-[80px] flex-col lg:flex-row">
        {/* <CommunityChatInterfaceLeftSide
          stockDetailsData={state.stockDetailsData}
        /> */}
        <CommunityChatInterfaceLeftSide
          stockDetailsData={state.stockDetailsData}
          setSearchQuery={(query) => updateState({ searchQuery: query })}
        />
        <CommunityChatInterfaceRightSide
          searchQuery={state.searchQuery}
          handleSearchChange={handleSearchChange}
          isSearchActive={state.isSearchActive}
          searchResults={state.searchResults}
          clearSearch={() => {
            updateState({
              searchQuery: "",
              searchResults: [],
              posts: state.originalPosts,
              isSearchActive: false,
              stockDetailsData: null,
            });
          }}
          posts={state.posts.length > 0 ? state.posts : state.originalPosts}
          setPosts={(posts) => updateState({ posts })}
          auth={{ user: userData, accessToken: userData?.access_token }}
          deletePost={api.deletePost}
          likePost={api.likePost}
          openModal={(imageUrl) =>
            updateState({ selectedImage: imageUrl, isModalOpen: true })
          }
          navigate={router.push}
          postTitle={state.postTitle}
          setPostTitle={(title) => updateState({ postTitle: title })}
          newPost={state.newPost}
          setNewPost={(post) => updateState({ newPost: post })}
          postImage={state.postImage}
          setPostImage={(image) => updateState({ postImage: image })}
          sendPost={api.createPost}
        />

        <CommunityCategoriesSidebar
          onCategoryClick={(hashtag) => {
            const postsWithHashtag = state.originalPosts.filter((post) =>
              post.hashtags?.includes(hashtag.toLowerCase())
            );
            updateState({
              posts: postsWithHashtag,
              searchQuery: `#${hashtag}`,
              isSearchActive: true,
            });
          }}
          setNewPost={(post) => updateState({ newPost: post })} // Fixed: Use updateState
          newPost={state.newPost} // Fixed: Use state.newPost
        />
      </div>
      <ImageModal
        isModalOpen={state.isModalOpen}
        selectedImage={state.selectedImage}
        closeModal={() =>
          updateState({ isModalOpen: false, selectedImage: "" })
        }
      />
    </div>
  );
};

export default Community;
