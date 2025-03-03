"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { GetUserData } from "../../src/utils/GetUserData";
import GeneralHelpers from "../../src/utils/general-helpers";
import Navbar from "../Navbar";
import ImageModal from "../../components/Community/CommunityPostImageModal";
import CommunityLeftSide from "../../components/Community/CommunityLeftSide";
import CommunityRightSide from "../../components/Community/CommunityRightSide";
import PostUtils from "../../components/Community/CommunityPostUtils";
import CommunityCategoriesSidebar from "./CommunityCategoriesSidebar";
import { useSidebarLatestNews } from "../../context/SidebarLatestNewsContext";
import { useCommunityPostUtils } from "../../context/CommunityPostUtilsContext";
import { useForumPosts } from "../../context/ForumPostsContext";
import useAxios from "@/src/network/useAxios";

const Community = () => {
  const router = useRouter();
  const axiosInstance = useAxios();
  const userData = GetUserData();
  const { newsData: contextNewsData = [] } = useSidebarLatestNews() || {};
  const { postCommentData: contextPostData = [] } = useCommunityPostUtils() || {};
  const { 
    posts,
    searchQuery,
    isSearchActive,
    searchResults,
    fetchPosts,
    filterPosts,
    clearSearch,
    updateState,
    loading,
    hasMore,
    loadMore
  } = useForumPosts();

  // Local UI state that doesn't need to be in the global context
  const [localState, setLocalState] = useState({
    postTitle: "",
    postImage: null,
    isModalOpen: false,
    selectedImage: "",
    stockDetailsData: null,
    newPost: "",
  });

  const updateLocalState = (updates) => {
    setLocalState((prev) => ({ ...prev, ...updates }));
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
      if (!identifier || (Array.isArray(identifier) && identifier.length === 0)) {
        return;
      }

      try {
        const cleanIdentifier = type === "cashtag" 
          ? identifier.replace("$", "")?.toUpperCase() 
          : identifier?.toUpperCase();

        const { data } = await axiosInstance.get(
          `api/pgm-stock-detail/?stock_ticker=${cleanIdentifier}`
        );

        updateLocalState({ stockDetailsData: data });
      } catch (error) {
        console.error("Error fetching stock details:", error);
        updateLocalState({ stockDetailsData: [] });
      }
    },

    async createPost() {
      if (!localState.postTitle.trim() && !localState.newPost.trim()) {
        toast.error("Please enter a title and content for your post");
        return;
      }

      if (!userData || !userData.access_token) {
        toast.error("Please log in to create a post");
        router.push("/auth/login");
        return;
      }

      const { hashtags, cashtags } = detectAndRenderContent(localState.newPost);
      const formData = new FormData();
      formData.append("post_title", localState.postTitle);
      formData.append("post_content", localState.newPost);
      formData.append("author_name", userData.name || "Anonymous");
      formData.append("hashtags", JSON.stringify(hashtags));
      formData.append("cashtags", JSON.stringify(cashtags));

      if (localState.postImage) {
        formData.append("post_image", localState.postImage);
      }

      const loadingToast = toast.loading("Creating post...");

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

        // Update posts in context
        updateState({
          posts: [newPostWithImage, ...posts],
          originalPosts: [newPostWithImage, ...posts],
        });

        updateLocalState({
          postTitle: "",
          newPost: "",
          postImage: null,
        });

        toast.success("Post created successfully!", { id: loadingToast });
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
          withCredentials: true,
        };

        const { data } = await axiosInstance.post(
          `community/api/forum/posts/${postId}/like/`,
          null,
          config
        );

        const { status, likes_count } = data;

        const updatedPosts = posts.map((post) =>
          post.id === postId
            ? { ...post, likes_count, is_liked: status === "liked" }
            : post
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
          withCredentials: true,
        };

        await axiosInstance.delete(
          `community/api/forum/posts/${postId}/`,
          config
        );

        const filterPost = (posts) => posts.filter((post) => post.id !== postId);
        updateState({
          posts: filterPost(posts),
          searchResults: isSearchActive ? filterPost(searchResults) : searchResults,
        });

        toast.success("Post deleted successfully.", { id: loadingToast });
      } catch (error) {
        toast.error("Failed to delete the post. Please try again.", {
          id: loadingToast,
        });
      }
    },
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    filterPosts(query);

    if (query.startsWith("$")) {
      api.fetchStockDetails(query.slice(1), "cashtag");
    } else {
      api.fetchStockDetails(query);
    }
  };

  useEffect(() => {
    fetchPosts();
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
      fetchPosts({ reset: true });
    }
  }, [contextNewsData, contextPostData]);

  // Add handler for load more posts
  const handleLoadMore = () => {
    if (!loading && hasMore) {
      loadMore();
    }
  };

  return (
    <div className="relative h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden px-2 lg:px-4 mt-[80px] flex-col lg:flex-row">
        <CommunityLeftSide
          stockDetailsData={localState.stockDetailsData}
          setSearchQuery={(query) => updateState({ cashtag: query , isSearchActive: true})}
        />
        <CommunityRightSide
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          isSearchActive={isSearchActive}
          searchResults={searchResults}
          clearSearch={clearSearch}
          cashTag={localState.cashTag}
          auth={{ user: userData, accessToken: userData?.access_token }}
          posts={posts}
          loading={loading}
          hasMore={hasMore}
          onLoadMore={handleLoadMore}
          deletePost={api.deletePost}
          likePost={api.likePost}
          openModal={(imageUrl) =>
            updateLocalState({ selectedImage: imageUrl, isModalOpen: true })
          }
          navigate={router.push}
          postTitle={localState.postTitle}
          setPostTitle={(title) => updateLocalState({ postTitle: title })}
          newPost={localState.newPost}
          setNewPost={(post) => updateLocalState({ newPost: post })}
          postImage={localState.postImage}
          setPostImage={(image) => updateLocalState({ postImage: image })}
          sendPost={api.createPost}
        />
        <CommunityCategoriesSidebar
          onCategoryClick={(hashtag) => {
            fetchPosts({ reset: true, hashtag });
            updateState({
              searchQuery: `#${hashtag}`,
              isSearchActive: true,
            });
          }}
          setNewPost={(post) => updateLocalState({ newPost: post })}
          newPost={localState.newPost}
        />
      </div>
      <ImageModal
        isModalOpen={localState.isModalOpen}
        selectedImage={localState.selectedImage}
        closeModal={() =>
          updateLocalState({ isModalOpen: false, selectedImage: "" })
        }
      />
    </div>
  );
};

export default Community;
