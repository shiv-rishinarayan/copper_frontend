import React, { useState, useEffect, useMemo, useCallback } from "react";
import { RiSearchLine } from "react-icons/ri";
import PostList from "../Community/CommunityPostList";
import CommunitySidebar from "../Community/CommunitySidebar";
import { useForumPosts } from "../../context/ForumPostsContext";

const CommunityRightSide = ({
  auth,
  deletePost,
  likePost,
  openModal,
  navigate,
  postTitle,
  setPostTitle,
  newPost,
  setNewPost,
  postImage,
  setPostImage,
  sendPost,
}) => {
  const [showAllPosts, setShowAllPosts] = useState(false);
  const { 
    loadMore, 
    hasMore, 
    originalPosts,
    count,
    loading, 
    hashtag,
    cashtag,
    updateState, 
    selectedStock,
    searchQuery,
    isSearchActive,
    filterPosts,
    clearSearch,
    clearSearchText,
    clearCashTag
  } = useForumPosts();

  const handleShowAllPosts = () => {
    setShowAllPosts(true);
    clearSearch();
  };

  return (
    <div className="flex-1 lg:ml-2 h-full flex flex-col order-1 lg:order-2">
      {/* Search Bar */}
      <div className="py-3 px-5 relative bg-gray-50">
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts by content, title, hashtags, or author"
            value={searchQuery}
            onChange={(e) => {
              filterPosts(e.target.value);
              setShowAllPosts(false);
            }}
            className="w-full p-2 lato pl-10 pr-20 rounded-md placeholder:text-sm placeholder:text-black1/50 focus:outline-gray-100"
          />
          <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1/50" />

          {/* Search Results Indicator */}
          {isSearchActive && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <span className="bg-accent/10 text-accent px-3 py-1.5 rounded text-xs">
                {count} Results
              </span>
              { searchQuery && <button
                onClick={() => {
                  clearSearchText();
                  setShowAllPosts(false);
                }}
                className="bg-red-500 text-white px-3 py-1.5 rounded text-xs flex items-center"
              >
                Clear
              </button>}
            </div>
          )}
        </div>
      </div>

      {/* Selected Stock Tag */}
      {selectedStock && (
        <div className="px-5 py-2 bg-gray-50 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold">{selectedStock.ticker}</span>
              <span className="text-gray-500">{selectedStock.name}</span>
            </div>
            <button
              onClick={() => clearCashTag()}
              className="text-red-500 hover:text-red-600"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Post List or Shimmer Loading */}
      <div className="flex-1 overflow-y-auto p-5 bg-gray-50 custom-scrollbar-hidden">
        {originalPosts.length === 0 && !loading ? (
          <div className="text-center space-y-4">
            <div className="text-gray-400 p-4">
              {isSearchActive
                ? `No posts found for "${searchQuery || hashtag || cashtag}"`
                : "No posts available"}
            </div>
            {isSearchActive && (
              <button
                onClick={handleShowAllPosts}
                className="bg-accent/10 text-accent px-2 py-2 rounded text-sm hover:bg-accent/20 transition-colors"
              >
                View all posts
              </button>
            )}
          </div>
        ) : (
          <PostList
            posts={originalPosts}
            auth={auth}
            deletePost={deletePost}
            likePost={likePost}
            openModal={openModal}
            onLoadMore={loadMore}
            hasMore={hasMore}
            initialLoading={loading && originalPosts.length === 0}
          />
        )}
      </div>

      {/* Create Post Section */}
      <div className="h-auto">
        <div className="bg-white">
          <CommunitySidebar
            auth={auth}
            navigate={navigate}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            newPost={newPost}
            setNewPost={setNewPost}
            postImage={postImage}
            setPostImage={setPostImage}
            sendPost={sendPost}
            setPosts={(newPosts) => updateState({ posts: newPosts })}
          />
        </div>
      </div>
    </div>
  );
};

export default CommunityRightSide;
