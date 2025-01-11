// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { toast } from "react-toastify";
// import useAxios from "../../src/network/useAxios";
// import { GetUserData } from "../../src/utils/GetUserData";
// import GeneralHelpers from "../../src/utils/general-helpers";
// import Navbar from "../Navbar";
// import Loader from "../Loader";
// import ImageModal from "../../components/Community/CommunityPostImageModal";
// import CommunityChatInterfaceLeftSide from "../../components/Community/CommunityRightSide";
// import CommunityChatInterfaceRightSide from "../../components/Community/CommunityRightSide";
// import PostUtils from "../../components/Community/CommunityPostUtils";
// import UraniumCategoriesSidebar from "../../components/Community/CommunityCategoriesSidebar";
// import { useSidebarLatestNews } from "../../context/SidebarLatestNewsContext";
// import { useCommunityPostUtils } from "../../context/CommunityPostUtilsContext";

// const Community = () => {
//   const router = useRouter();
//   const axiosInstance = useAxios();
//   const userData = GetUserData();
//   const { newsData: contextNewsData = [] } = useSidebarLatestNews() || {};
//   const { postCommentData: contextPostData = [] } =
//     useCommunityPostUtils() || {};

//   const [loading, setLoading] = useState(false);
//   const [posts, setPosts] = useState([]);
//   const [originalPosts, setOriginalPosts] = useState([]);
//   const [newPost, setNewPost] = useState("");
//   const [postTitle, setPostTitle] = useState("");
//   const [postImage, setPostImage] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [isSearchActive, setIsSearchActive] = useState(false);
//   const [stockDetailsData, setStockDetailsData] = useState(null);

//   const { detectAndRenderContent } = PostUtils({
//     auth: { user: userData, accessToken: userData?.access_token },
//     expandedPostComments: {},
//     setExpandedPostComments: () => {},
//     postComments: {},
//     setPostComments: () => {},
//     commentInputs: {},
//     setCommentInputs: () => {},
//     setPosts,
//   });

//   const fetchStockDetails = async (identifier, type = "hashtag") => {
//     if (!identifier || (Array.isArray(identifier) && identifier.length === 0)) {
//       return;
//     }

//     try {
//       const cleanIdentifier =
//         type === "cashtag" ? identifier.replace("$", "") : identifier;
//       const response = await axiosInstance.get(
//         `/api/stock-details/${cleanIdentifier.toUpperCase()}/`
//       );
//       setStockDetailsData(response.data);
//     } catch (error) {
//       console.error("Error fetching stock details:", error);
//       setStockDetailsData([]);
//     }
//   };

//   useEffect(() => {
//     if (contextNewsData) {
//       if (contextNewsData.startsWith("$")) {
//         fetchStockDetails(contextNewsData, "cashtag");
//       } else {
//         fetchStockDetails(contextNewsData);
//       }
//     }

//     if (contextPostData) {
//       fetchPosts(false);
//     }
//   }, [contextNewsData, contextPostData]);

//   const fetchPosts = async (loader = true) => {
//     loader && setLoading(true);
//     try {
//       const response = await axiosInstance.get("/api/forum/posts/");
//       const postsWithImage = response.data.reverse().map((post) => ({
//         ...post,
//         post_image: post.post_image,
//       }));

//       setPosts(postsWithImage);
//       setOriginalPosts(postsWithImage);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//       toast.error("Failed to fetch posts");
//     } finally {
//       loader && setLoading(false);
//     }
//   };

//   const filterPosts = (query) => {
//     const cleanedQuery = query.toLowerCase().trim();

//     if (!cleanedQuery) {
//       setSearchResults([]);
//       setPosts(originalPosts);
//       setIsSearchActive(false);
//       return;
//     }

//     const filteredPosts = originalPosts.filter((post) => {
//       const content = post.post_content?.toLowerCase() || "";
//       const title = post.post_title?.toLowerCase() || "";
//       const hashtags = (post.hashtags || []).map((tag) => tag.toLowerCase());
//       const cashtags = (post.cashtags || []).map((tag) => tag.toLowerCase());
//       const authorName = post.author_name?.toLowerCase() || "";

//       return (
//         content.includes(cleanedQuery) ||
//         title.includes(cleanedQuery) ||
//         hashtags.some((tag) => tag.includes(cleanedQuery)) ||
//         cashtags.some((tag) => tag.includes(cleanedQuery)) ||
//         authorName.includes(cleanedQuery)
//       );
//     });

//     setSearchResults(filteredPosts);
//     setPosts(filteredPosts);
//     setIsSearchActive(true);
//   };

//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     filterPosts(query);

//     if (query.startsWith("$")) {
//       fetchStockDetails(query.slice(1), "cashtag");
//     } else {
//       fetchStockDetails(query);
//     }
//   };

//   const sendPost = async () => {
//     if (!postTitle.trim() && !newPost.trim()) {
//       toast.error("Please enter a title and content for your post");
//       return;
//     }

//     if (!userData) {
//       toast.error("Please log in to create a post");
//       return;
//     }

//     const { hashtags, cashtags } = detectAndRenderContent(newPost);
//     const formData = new FormData();
//     formData.append("post_title", postTitle);
//     formData.append("post_content", newPost);
//     formData.append("author_name", userData.name || "Anonymous");
//     formData.append("hashtags", JSON.stringify(hashtags));
//     formData.append("cashtags", JSON.stringify(cashtags));

//     if (postImage) {
//       formData.append("post_image", postImage);
//     }

//     try {
//       const response = await axiosInstance.post("/api/forum/posts/", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       const newPostWithImage = {
//         ...response.data,
//         post_image: response.data.post_image
//           ? GeneralHelpers.getImageUrl(response.data.post_image)
//           : null,
//       };

//       const updatedResult = [newPostWithImage, ...originalPosts];
//       setOriginalPosts(updatedResult);
//       setPosts(updatedResult);
//       setPostTitle("");
//       setNewPost("");
//       setPostImage(null);
//       toast.success("Post created successfully!");
//     } catch (error) {
//       console.error("Error creating post:", error);
//       if (error.response?.status === 401) {
//         toast.error("Session expired. Please log in again.");
//         document.cookie =
//           "userData=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
//         router.push("/auth/login");
//       } else {
//         toast.error("Failed to create post. Please try again.");
//       }
//     }
//   };

//   const likePost = async (postId) => {
//     if (!userData) {
//       toast.error("Please log in to like posts");
//       return;
//     }

//     try {
//       const response = await axiosInstance.post(
//         `/api/forum/posts/${postId}/like/`
//       );
//       const { status, likes_count } = response.data;

//       setPosts(
//         originalPosts.map((post) =>
//           post.id === postId ? { ...post, likes_count } : post
//         )
//       );

//       if (status === "liked") {
//         toast.success("Post liked!");
//       } else if (status === "unliked") {
//         toast.info("Post unliked!");
//       }
//     } catch (error) {
//       console.error("Error liking/unliking post:", error);
//       toast.error("Failed to like/unlike the post. Please try again.");
//     }
//   };

//   const deletePost = async (postId) => {
//     if (!userData) {
//       toast.error("Please log in to delete a post");
//       return;
//     }

//     if (!window.confirm("Are you sure you want to delete this post?")) {
//       return;
//     }

//     try {
//       await axiosInstance.delete(`/api/forum/posts/${postId}/`);

//       setPosts((prev) => prev.filter((post) => post.id !== postId));
//       setOriginalPosts((prev) => prev.filter((post) => post.id !== postId));

//       if (isSearchActive) {
//         setSearchResults((prev) => prev.filter((post) => post.id !== postId));
//       }

//       toast.success("Post deleted successfully.");
//     } catch (error) {
//       console.error("Error deleting post:", error);
//       if (error.response?.status === 401) {
//         toast.error("Session expired. Please log in again.");
//         document.cookie =
//           "userData=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
//         router.push("/auth/login");
//       } else {
//         toast.error("Failed to delete the post. Please try again.");
//       }
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   useEffect(() => {
//     const delayDebounce = setTimeout(() => {
//       if (searchQuery.trim() === "") {
//         setPosts(originalPosts);
//       } else {
//         filterPosts(searchQuery);
//       }
//     }, 300);

//     return () => clearTimeout(delayDebounce);
//   }, [searchQuery, originalPosts]);

//   const openModal = (imageUrl) => {
//     setSelectedImage(imageUrl);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedImage("");
//   };

//   if (loading) return <Loader />;

//   return (
//     <div className="relative h-screen flex flex-col">
//       <Navbar />
//       <div className="flex flex-1 overflow-hidden px-2 lg:px-4 mt-[80px] flex-col lg:flex-row">
//         <CommunityChatInterfaceLeftSide stockDetailsData={stockDetailsData} />
//         <CommunityChatInterfaceRightSide
//           searchQuery={searchQuery}
//           handleSearchChange={handleSearchChange}
//           isSearchActive={isSearchActive}
//           searchResults={searchResults}
//           clearSearch={() => {
//             setSearchQuery("");
//             setSearchResults([]);
//             setPosts(originalPosts);
//             setIsSearchActive(false);
//             setStockDetailsData(null);
//           }}
//           posts={posts.length > 0 ? posts : originalPosts}
//           setPosts={setPosts}
//           auth={{ user: userData, accessToken: userData?.access_token }}
//           deletePost={deletePost}
//           likePost={likePost}
//           openModal={openModal}
//           navigate={router.push}
//           postTitle={postTitle}
//           setPostTitle={setPostTitle}
//           newPost={newPost}
//           setNewPost={setNewPost}
//           postImage={postImage}
//           setPostImage={setPostImage}
//           sendPost={sendPost}
//         />
//         <UraniumCategoriesSidebar
//           onCategoryClick={(hashtag) => {
//             const postsWithHashtag = originalPosts.filter((post) =>
//               post.hashtags?.includes(hashtag.toLowerCase())
//             );
//             setPosts(postsWithHashtag);
//             setSearchQuery(`#${hashtag}`);
//             setIsSearchActive(true);
//           }}
//         />
//       </div>
//       <ImageModal
//         isModalOpen={isModalOpen}
//         selectedImage={selectedImage}
//         closeModal={closeModal}
//       />
//     </div>
//   );
// };

// export default Community;

// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { toast } from "react-toastify";
// import useAxios from "../../src/network/useAxios";
// import { GetUserData } from "../../src/utils/GetUserData";
// import GeneralHelpers from "../../src/utils/general-helpers";
// import Navbar from "../Navbar";
// import Loader from "../Loader";
// import ImageModal from "../../components/Community/CommunityPostImageModal";
// import CommunityChatInterfaceLeftSide from "../../components/Community/CommunityLeftSide";
// import CommunityChatInterfaceRightSide from "../../components/Community/CommunityRightSide";
// import PostUtils from "../../components/Community/CommunityPostUtils";
// import UraniumCategoriesSidebar from "../../components/Community/CommunityCategoriesSidebar";
// import { useSidebarLatestNews } from "../../context/SidebarLatestNewsContext";
// import { useCommunityPostUtils } from "../../context/CommunityPostUtilsContext";

// const Community = () => {
//   const router = useRouter();
//   const axiosInstance = useAxios();
//   const userData = GetUserData();
//   const { newsData: contextNewsData = [] } = useSidebarLatestNews() || {};
//   const { postCommentData: contextPostData = [] } =
//     useCommunityPostUtils() || {};

//   // State management
//   const [state, setState] = useState({
//     loading: false,
//     posts: [],
//     originalPosts: [],
//     newPost: "",
//     postTitle: "",
//     postImage: null,
//     searchQuery: "",
//     isModalOpen: false,
//     selectedImage: "",
//     searchResults: [],
//     isSearchActive: false,
//     stockDetailsData: null,
//   });

//   const updateState = (updates) => {
//     setState((prev) => ({ ...prev, ...updates }));
//   };

//   // Post utilities setup
//   const { detectAndRenderContent } = PostUtils({
//     auth: { user: userData, accessToken: userData?.access_token },
//     expandedPostComments: {},
//     setExpandedPostComments: () => {},
//     postComments: {},
//     setPostComments: () => {},
//     commentInputs: {},
//     setCommentInputs: () => {},
//     setPosts: (posts) => updateState({ posts }),
//   });

//   // API calls
//   const api = {
//     async fetchStockDetails(identifier, type = "hashtag") {
//       if (!identifier || (Array.isArray(identifier) && identifier.length === 0))
//         return;

//       try {
//         const cleanIdentifier =
//           type === "cashtag" ? identifier.replace("$", "") : identifier;
//         const response = await axiosInstance.get(
//           `/api/stock-details/${cleanIdentifier.toUpperCase()}/`
//         );
//         updateState({ stockDetailsData: response.data });
//       } catch (error) {
//         console.error("Error fetching stock details:", error);
//         updateState({ stockDetailsData: [] });
//       }
//     },

//     async fetchPosts(showLoader = true) {
//       showLoader && updateState({ loading: true });
//       try {
//         const { data } = await axiosInstance.get("/api/forum/posts/");
//         const postsWithImage = data.reverse().map((post) => ({
//           ...post,
//           post_image: post.post_image,
//         }));
//         updateState({
//           posts: postsWithImage,
//           originalPosts: postsWithImage,
//           loading: false,
//         });
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//         toast.error("Failed to fetch posts");
//         updateState({ loading: false });
//       }
//     },

//     async createPost() {
//       if (!state.postTitle.trim() && !state.newPost.trim()) {
//         toast.error("Please enter a title and content for your post");
//         return;
//       }

//       if (!userData) {
//         toast.error("Please log in to create a post");
//         return;
//       }

//       const { hashtags, cashtags } = detectAndRenderContent(state.newPost);
//       const formData = new FormData();
//       formData.append("post_title", state.postTitle);
//       formData.append("post_content", state.newPost);
//       formData.append("author_name", userData.name || "Anonymous");
//       formData.append("hashtags", JSON.stringify(hashtags));
//       formData.append("cashtags", JSON.stringify(cashtags));

//       if (state.postImage) {
//         formData.append("post_image", state.postImage);
//       }

//       try {
//         const { data } = await axiosInstance.post(
//           "/api/forum/posts/",
//           formData,
//           {
//             headers: { "Content-Type": "multipart/form-data" },
//           }
//         );

//         const newPostWithImage = {
//           ...data,
//           post_image: data.post_image
//             ? GeneralHelpers.getImageUrl(data.post_image)
//             : null,
//         };

//         updateState({
//           posts: [newPostWithImage, ...state.originalPosts],
//           originalPosts: [newPostWithImage, ...state.originalPosts],
//           postTitle: "",
//           newPost: "",
//           postImage: null,
//         });

//         toast.success("Post created successfully!");
//       } catch (error) {
//         handleApiError(error, "Failed to create post");
//       }
//     },

//     async likePost(postId) {
//       if (!userData) {
//         toast.error("Please log in to like posts");
//         return;
//       }

//       try {
//         const { data } = await axiosInstance.post(
//           `/api/forum/posts/${postId}/like/`
//         );
//         const { status, likes_count } = data;

//         const updatedPosts = state.originalPosts.map((post) =>
//           post.id === postId ? { ...post, likes_count } : post
//         );

//         updateState({ posts: updatedPosts, originalPosts: updatedPosts });
//         toast.success(status === "liked" ? "Post liked!" : "Post unliked!");
//       } catch (error) {
//         handleApiError(error, "Failed to like/unlike the post");
//       }
//     },

//     async deletePost(postId) {
//       if (!userData) {
//         toast.error("Please log in to delete a post");
//         return;
//       }

//       if (!window.confirm("Are you sure you want to delete this post?")) return;

//       try {
//         await axiosInstance.delete(`/api/forum/posts/${postId}/`);

//         const filterPost = (posts) =>
//           posts.filter((post) => post.id !== postId);
//         updateState({
//           posts: filterPost(state.posts),
//           originalPosts: filterPost(state.originalPosts),
//           searchResults: state.isSearchActive
//             ? filterPost(state.searchResults)
//             : state.searchResults,
//         });

//         toast.success("Post deleted successfully.");
//       } catch (error) {
//         handleApiError(error, "Failed to delete the post");
//       }
//     },
//   };

//   // Helper functions
//   const handleApiError = (error, defaultMessage) => {
//     console.error(error);
//     if (error.response?.status === 401) {
//       document.cookie =
//         "userData=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
//       router.push("/auth/login");
//       toast.error("Session expired. Please log in again.");
//     } else {
//       toast.error(defaultMessage);
//     }
//   };

//   const filterPosts = (query) => {
//     const cleanedQuery = query.toLowerCase().trim();

//     if (!cleanedQuery) {
//       updateState({
//         searchResults: [],
//         posts: state.originalPosts,
//         isSearchActive: false,
//       });
//       return;
//     }

//     const filteredPosts = state.originalPosts.filter((post) => {
//       const searchFields = [
//         post.post_content?.toLowerCase() || "",
//         post.post_title?.toLowerCase() || "",
//         post.author_name?.toLowerCase() || "",
//         ...(post.hashtags || []).map((tag) => tag.toLowerCase()),
//         ...(post.cashtags || []).map((tag) => tag.toLowerCase()),
//       ];

//       return searchFields.some((field) => field.includes(cleanedQuery));
//     });

//     updateState({
//       searchResults: filteredPosts,
//       posts: filteredPosts,
//       isSearchActive: true,
//     });
//   };

//   // Event handlers
//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     updateState({ searchQuery: query });
//     filterPosts(query);

//     if (query.startsWith("$")) {
//       api.fetchStockDetails(query.slice(1), "cashtag");
//     } else {
//       api.fetchStockDetails(query);
//     }
//   };

//   // Effects
//   useEffect(() => {
//     api.fetchPosts();
//   }, []);

//   useEffect(() => {
//     if (contextNewsData) {
//       api.fetchStockDetails(
//         contextNewsData.startsWith("$")
//           ? contextNewsData.slice(1)
//           : contextNewsData,
//         contextNewsData.startsWith("$") ? "cashtag" : "hashtag"
//       );
//     }

//     if (contextPostData) {
//       api.fetchPosts(false);
//     }
//   }, [contextNewsData, contextPostData]);

//   useEffect(() => {
//     const delayDebounce = setTimeout(() => {
//       if (state.searchQuery.trim() === "") {
//         updateState({ posts: state.originalPosts });
//       } else {
//         filterPosts(state.searchQuery);
//       }
//     }, 300);

//     return () => clearTimeout(delayDebounce);
//   }, [state.searchQuery, state.originalPosts]);

//   if (state.loading) return <Loader />;

//   return (
//     <div className="relative h-screen flex flex-col">
//       <Navbar />
//       <div className="flex flex-1 overflow-hidden px-2 lg:px-4 mt-[80px] flex-col lg:flex-row">
//         <CommunityChatInterfaceLeftSide
//           stockDetailsData={state.stockDetailsData}
//         />
//         <CommunityChatInterfaceRightSide
//           searchQuery={state.searchQuery}
//           handleSearchChange={handleSearchChange}
//           isSearchActive={state.isSearchActive}
//           searchResults={state.searchResults}
//           clearSearch={() => {
//             updateState({
//               searchQuery: "",
//               searchResults: [],
//               posts: state.originalPosts,
//               isSearchActive: false,
//               stockDetailsData: null,
//             });
//           }}
//           posts={state.posts.length > 0 ? state.posts : state.originalPosts}
//           setPosts={(posts) => updateState({ posts })}
//           auth={{ user: userData, accessToken: userData?.access_token }}
//           deletePost={api.deletePost}
//           likePost={api.likePost}
//           openModal={(imageUrl) =>
//             updateState({ selectedImage: imageUrl, isModalOpen: true })
//           }
//           navigate={router.push}
//           postTitle={state.postTitle}
//           setPostTitle={(title) => updateState({ postTitle: title })}
//           newPost={state.newPost}
//           setNewPost={(post) => updateState({ newPost: post })}
//           postImage={state.postImage}
//           setPostImage={(image) => updateState({ postImage: image })}
//           sendPost={api.createPost}
//         />
//         <UraniumCategoriesSidebar
//           onCategoryClick={(hashtag) => {
//             const postsWithHashtag = state.originalPosts.filter((post) =>
//               post.hashtags?.includes(hashtag.toLowerCase())
//             );
//             updateState({
//               posts: postsWithHashtag,
//               searchQuery: `#${hashtag}`,
//               isSearchActive: true,
//             });
//           }}
//         />
//       </div>
//       <ImageModal
//         isModalOpen={state.isModalOpen}
//         selectedImage={state.selectedImage}
//         closeModal={() =>
//           updateState({ isModalOpen: false, selectedImage: "" })
//         }
//       />
//     </div>
//   );
// };

// export default Community;
// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { toast } from "react-toastify";
// import useAxios from "../../src/network/useAxios";
// import { GetUserData } from "../../src/utils/GetUserData";
// import GeneralHelpers from "../../src/utils/general-helpers";
// import Navbar from "../Navbar";
// import Loader from "../Loader";
// import ImageModal from "../../components/Community/CommunityPostImageModal";
// import CommunityChatInterfaceLeftSide from "../../components/Community/CommunityLeftSide";
// import CommunityChatInterfaceRightSide from "../../components/Community/CommunityRightSide";
// import PostUtils from "../../components/Community/CommunityPostUtils";
// import UraniumCategoriesSidebar from "../../components/Community/CommunityCategoriesSidebar";
// import { useSidebarLatestNews } from "../../context/SidebarLatestNewsContext";
// import { useCommunityPostUtils } from "../../context/CommunityPostUtilsContext";

// const Community = () => {
//   const router = useRouter();
//   const axiosInstance = useAxios();
//   const userData = GetUserData();
//   const { newsData: contextNewsData = [] } = useSidebarLatestNews() || {};
//   const { postCommentData: contextPostData = [] } =
//     useCommunityPostUtils() || {};

//   const [state, setState] = useState({
//     loading: false,
//     posts: [],
//     originalPosts: [],
//     newPost: "",
//     postTitle: "",
//     postImage: null,
//     searchQuery: "",
//     isModalOpen: false,
//     selectedImage: "",
//     searchResults: [],
//     isSearchActive: false,
//     stockDetailsData: null,
//   });

//   const updateState = (updates) => {
//     setState((prev) => ({ ...prev, ...updates }));
//   };

//   const { detectAndRenderContent } = PostUtils({
//     auth: { user: userData, accessToken: userData?.access_token },
//     expandedPostComments: {},
//     setExpandedPostComments: () => {},
//     postComments: {},
//     setPostComments: () => {},
//     commentInputs: {},
//     setCommentInputs: () => {},
//     setPosts: (posts) => updateState({ posts }),
//   });

//   const api = {
//     async fetchStockDetails(identifier, type = "hashtag") {
//       if (!identifier || (Array.isArray(identifier) && identifier.length === 0))
//         return;

//       try {
//         const cleanIdentifier =
//           type === "cashtag" ? identifier.replace("$", "") : identifier;
//         const { data } = await axiosInstance.get(
//           `/api/stock-details/${cleanIdentifier.toUpperCase()}/`
//         );
//         updateState({ stockDetailsData: data });
//       } catch (error) {
//         console.error("Error fetching stock details:", error);
//         updateState({ stockDetailsData: [] });
//       }
//     },

//     // async fetchPosts(showLoader = true) {
//     //   showLoader && updateState({ loading: true });
//     //   try {
//     //     const { data } = await axiosInstance.get("/community/forum/posts/");
//     //     if (!data) throw new Error("No data received from server");

//     //     const postsWithImage = data.reverse().map((post) => ({
//     //       ...post,
//     //       post_image: post.post_image,
//     //     }));
//     //     console.log(data);
//     //     updateState({
//     //       posts: postsWithImage,
//     //       originalPosts: postsWithImage,
//     //       loading: false,
//     //     });
//     //   } catch (error) {
//     //     console.error("Error fetching posts:", error);
//     //     toast.error("Failed to fetch posts. Please try again later.");
//     //     updateState({
//     //       loading: false,
//     //       posts: [],
//     //       originalPosts: [],
//     //     });
//     //   }
//     // },
//     async fetchPosts(showLoader = true) {
//       showLoader && updateState({ loading: true });
//       try {
//         // Add some logging to debug the full URL
//         console.log(
//           "Fetching from URL:",
//           axiosInstance.defaults.baseURL + "community/forum/posts/"
//         );

//         const { data } = await axiosInstance.get("community/forum/posts/", {
//           // Add error handling config
//           validateStatus: function (status) {
//             return status >= 200 && status < 500; // Handle all responses
//           },
//         });

//         if (!data) throw new Error("No data received from server");

//         const postsWithImage = data.reverse().map((post) => ({
//           ...post,
//           post_image: post.post_image,
//         }));

//         updateState({
//           posts: postsWithImage,
//           originalPosts: postsWithImage,
//           loading: false,
//         });
//       } catch (error) {
//         // Enhanced error logging
//         console.error("Error details:", {
//           message: error.message,
//           status: error.response?.status,
//           statusText: error.response?.statusText,
//           data: error.response?.data,
//         });

//         toast.error("Failed to fetch posts. Please try again later.");
//         updateState({
//           loading: false,
//           posts: [],
//           originalPosts: [],
//         });
//       }
//     },
//     // async createPost() {
//     //   if (!state.postTitle.trim() && !state.newPost.trim()) {
//     //     toast.error("Please enter a title and content for your post");
//     //     return;
//     //   }

//     //   if (!userData) {
//     //     toast.error("Please log in to create a post");
//     //     return;
//     //   }

//     //   const { hashtags, cashtags } = detectAndRenderContent(state.newPost);
//     //   const formData = new FormData();
//     //   formData.append("post_title", state.postTitle);
//     //   formData.append("post_content", state.newPost);
//     //   formData.append("author_name", userData.name || "Anonymous");
//     //   formData.append("hashtags", JSON.stringify(hashtags));
//     //   formData.append("cashtags", JSON.stringify(cashtags));

//     //   if (state.postImage) {
//     //     formData.append("post_image", state.postImage);
//     //   }

//     //   try {
//     //     const { data } = await axiosInstance.post(
//     //       "community/forum/posts/",
//     //       formData,
//     //       {
//     //         headers: {
//     //           "Content-Type": "multipart/form-data",
//     //           Accept: "application/json, text/plain, */*",
//     //           authorization: `Bearer ${userData?.access_token}`,
//     //         },
//     //       }
//     //     );

//     //     const newPostWithImage = {
//     //       ...data,
//     //       post_image: data.post_image
//     //         ? GeneralHelpers.getImageUrl(data.post_image)
//     //         : null,
//     //     };

//     //     updateState({
//     //       posts: [newPostWithImage, ...state.originalPosts],
//     //       originalPosts: [newPostWithImage, ...state.originalPosts],
//     //       postTitle: "",
//     //       newPost: "",
//     //       postImage: null,
//     //     });

//     //     toast.success("Post created successfully!");
//     //   } catch (error) {
//     //     toast.error("Failed to create post. Please try again.");
//     //   }
//     // },
//     async createPost() {
//       if (!state.postTitle.trim() && !state.newPost.trim()) {
//         toast.error("Please enter a title and content for your post");
//         return;
//       }

//       // First verify user is logged in and has valid token
//       const userData = GetUserData();
//       if (!userData || !userData.access_token) {
//         toast.error("Please log in to create a post");
//         router.push("/auth/login");
//         return;
//       }

//       const { hashtags, cashtags } = detectAndRenderContent(state.newPost);
//       const formData = new FormData();
//       formData.append("post_title", state.postTitle);
//       formData.append("post_content", state.newPost);
//       formData.append("author_name", userData.name || "Anonymous");
//       formData.append("hashtags", JSON.stringify(hashtags));
//       formData.append("cashtags", JSON.stringify(cashtags));

//       if (state.postImage) {
//         formData.append("post_image", state.postImage);
//       }

//       try {
//         // Explicitly set headers for this request
//         const config = {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${userData.access_token}`,
//           },
//           withCredentials: true,
//         };

//         const { data } = await axiosInstance.post(
//           "community/forum/posts/",
//           formData,
//           config
//         );

//         // Handle successful response
//         const newPostWithImage = {
//           ...data,
//           post_image: data.post_image
//             ? GeneralHelpers.getImageUrl(data.post_image)
//             : null,
//         };

//         updateState({
//           posts: [newPostWithImage, ...state.originalPosts],
//           originalPosts: [newPostWithImage, ...state.originalPosts],
//           postTitle: "",
//           newPost: "",
//           postImage: null,
//         });

//         toast.success("Post created successfully!");
//       } catch (error) {
//         // Enhanced error handling
//         if (error.response?.status === 401) {
//           toast.error("Your session has expired. Please log in again.");
//           router.push("/auth/login");
//         } else {
//           console.error(
//             "Post creation error:",
//             error.response?.data || error.message
//           );
//           toast.error("Failed to create post. Please try again.");
//         }
//       }
//     },
//     async likePost(postId) {
//       if (!userData) {
//         toast.error("Please log in to like posts");
//         return;
//       }

//       try {
//         const { data } = await axiosInstance.post(
//           `community/forum/posts/${postId}/like/`
//         );
//         const { status, likes_count } = data;

//         const updatedPosts = state.originalPosts.map((post) =>
//           post.id === postId ? { ...post, likes_count } : post
//         );

//         updateState({ posts: updatedPosts, originalPosts: updatedPosts });
//         toast.success(status === "liked" ? "Post liked!" : "Post unliked!");
//       } catch (error) {
//         toast.error("Failed to like/unlike the post. Please try again.");
//       }
//     },

//     async deletePost(postId) {
//       if (!userData) {
//         toast.error("Please log in to delete a post");
//         return;
//       }

//       if (!window.confirm("Are you sure you want to delete this post?")) return;

//       try {
//         await axiosInstance.delete(`community/forum/posts/${postId}/`);

//         const filterPost = (posts) =>
//           posts.filter((post) => post.id !== postId);
//         updateState({
//           posts: filterPost(state.posts),
//           originalPosts: filterPost(state.originalPosts),
//           searchResults: state.isSearchActive
//             ? filterPost(state.searchResults)
//             : state.searchResults,
//         });

//         toast.success("Post deleted successfully.");
//       } catch (error) {
//         toast.error("Failed to delete the post. Please try again.");
//       }
//     },
//   };

//   const filterPosts = (query) => {
//     const cleanedQuery = query.toLowerCase().trim();

//     if (!cleanedQuery) {
//       updateState({
//         searchResults: [],
//         posts: state.originalPosts,
//         isSearchActive: false,
//       });
//       return;
//     }

//     const filteredPosts = state.originalPosts.filter((post) => {
//       const searchFields = [
//         post.post_content?.toLowerCase() || "",
//         post.post_title?.toLowerCase() || "",
//         post.author_name?.toLowerCase() || "",
//         ...(post.hashtags || []).map((tag) => tag.toLowerCase()),
//         ...(post.cashtags || []).map((tag) => tag.toLowerCase()),
//       ];

//       return searchFields.some((field) => field.includes(cleanedQuery));
//     });

//     updateState({
//       searchResults: filteredPosts,
//       posts: filteredPosts,
//       isSearchActive: true,
//     });
//   };

//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     updateState({ searchQuery: query });
//     filterPosts(query);

//     if (query.startsWith("$")) {
//       api.fetchStockDetails(query.slice(1), "cashtag");
//     } else {
//       api.fetchStockDetails(query);
//     }
//   };

//   useEffect(() => {
//     api.fetchPosts();
//   }, []);

//   useEffect(() => {
//     if (contextNewsData) {
//       api.fetchStockDetails(
//         contextNewsData.startsWith("$")
//           ? contextNewsData.slice(1)
//           : contextNewsData,
//         contextNewsData.startsWith("$") ? "cashtag" : "hashtag"
//       );
//     }

//     if (contextPostData) {
//       api.fetchPosts(false);
//     }
//   }, [contextNewsData, contextPostData]);

//   useEffect(() => {
//     const delayDebounce = setTimeout(() => {
//       if (state.searchQuery.trim() === "") {
//         updateState({ posts: state.originalPosts });
//       } else {
//         filterPosts(state.searchQuery);
//       }
//     }, 300);

//     return () => clearTimeout(delayDebounce);
//   }, [state.searchQuery, state.originalPosts]);

//   if (state.loading) return <Loader />;

//   return (
//     <div className="relative h-screen flex flex-col">
//       <Navbar />
//       <div className="flex flex-1 overflow-hidden px-2 lg:px-4 mt-[80px] flex-col lg:flex-row">
//         <CommunityChatInterfaceLeftSide
//           stockDetailsData={state.stockDetailsData}
//         />
//         <CommunityChatInterfaceRightSide
//           searchQuery={state.searchQuery}
//           handleSearchChange={handleSearchChange}
//           isSearchActive={state.isSearchActive}
//           searchResults={state.searchResults}
//           clearSearch={() => {
//             updateState({
//               searchQuery: "",
//               searchResults: [],
//               posts: state.originalPosts,
//               isSearchActive: false,
//               stockDetailsData: null,
//             });
//           }}
//           posts={state.posts.length > 0 ? state.posts : state.originalPosts}
//           setPosts={(posts) => updateState({ posts })}
//           auth={{ user: userData, accessToken: userData?.access_token }}
//           deletePost={api.deletePost}
//           likePost={api.likePost}
//           openModal={(imageUrl) =>
//             updateState({ selectedImage: imageUrl, isModalOpen: true })
//           }
//           navigate={router.push}
//           postTitle={state.postTitle}
//           setPostTitle={(title) => updateState({ postTitle: title })}
//           newPost={state.newPost}
//           setNewPost={(post) => updateState({ newPost: post })}
//           postImage={state.postImage}
//           setPostImage={(image) => updateState({ postImage: image })}
//           sendPost={api.createPost}
//         />
//         <UraniumCategoriesSidebar
//           onCategoryClick={(hashtag) => {
//             const postsWithHashtag = state.originalPosts.filter((post) =>
//               post.hashtags?.includes(hashtag.toLowerCase())
//             );
//             updateState({
//               posts: postsWithHashtag,
//               searchQuery: `#${hashtag}`,
//               isSearchActive: true,
//             });
//           }}
//         />
//       </div>
//       <ImageModal
//         isModalOpen={state.isModalOpen}
//         selectedImage={state.selectedImage}
//         closeModal={() =>
//           updateState({ isModalOpen: false, selectedImage: "" })
//         }
//       />
//     </div>
//   );
// };

// export default Community;

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
import UraniumCategoriesSidebar from "../../components/Community/CommunityCategoriesSidebar";
import { useSidebarLatestNews } from "../../context/SidebarLatestNewsContext";
import { useCommunityPostUtils } from "../../context/CommunityPostUtilsContext";

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

  console.log(userData);

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
      if (!identifier || (Array.isArray(identifier) && identifier.length === 0))
        return;

      try {
        const cleanIdentifier =
          type === "cashtag" ? identifier.replace("$", "") : identifier;
        const { data } = await axiosInstance.get(
          `/api/stock-details/${cleanIdentifier.toUpperCase()}/`
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
        console.log(
          "Fetching from URL:",
          axiosInstance.defaults.baseURL + "community/api/forum/posts/"
        );

        const { data } = await axiosInstance.get("community/api/forum/posts/", {
          validateStatus: function (status) {
            return status >= 200 && status < 500;
          },
        });

        if (!data) throw new Error("No data received from server");

        const postsWithImage = data.reverse().map((post) => ({
          ...post,
          post_image: post.post_image,
        }));

        updateState({
          posts: postsWithImage,
          originalPosts: postsWithImage,
          loading: false,
        });
      } catch (error) {
        console.error("Error details:", {
          message: error.message,
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
        });

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

    // async likePost(postId) {
    //   if (!userData) {
    //     toast.error("Please log in to like posts");
    //     return;
    //   }

    //   const loadingToast = toast.loading("Processing..."); // Added loading toast

    //   try {
    //     const { data } = await axiosInstance.post(
    //       `community/api/forum/posts/${postId}/like/`
    //     );
    //     const { status, likes_count } = data;

    //     const updatedPosts = state.originalPosts.map((post) =>
    //       post.id === postId ? { ...post, likes_count } : post
    //     );

    //     updateState({ posts: updatedPosts, originalPosts: updatedPosts });
    //     toast.success(status === "liked" ? "Post liked!" : "Post unliked!", {
    //       id: loadingToast,
    //     });
    //   } catch (error) {
    //     toast.error("Failed to like/unlike the post. Please try again.", {
    //       id: loadingToast,
    //     });
    //   }
    // },
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

      const loadingToast = toast.loading("Deleting post..."); // Added loading toast

      try {
        await axiosInstance.delete(`community/api/forum/posts/${postId}/`);

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

  // Rest of the component remains the same...

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
        <CommunityChatInterfaceLeftSide
          stockDetailsData={state.stockDetailsData}
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
        <UraniumCategoriesSidebar
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
