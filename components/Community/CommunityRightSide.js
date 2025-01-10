// ChatInterfaceRightContent.jsx
import React from "react";
import { RiSearchLine, RiCloseLine } from "react-icons/ri";
import PostList from "../Community/CommunityPostList";
import CommunitySidebar from "../Community/CommunitySidebar";

const CommunityRightSide = ({
  searchQuery,
  handleSearchChange,
  isSearchActive,
  searchResults,
  clearSearch,
  posts,
  setPosts,
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
  return (
    <div className="flex-1 lg:ml-2 h-full flex flex-col order-1 lg:order-2 ">
      {/* Search Bar */}
      <div className=" py-3 px-5 relative bg-gray-50">
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts by content, title, hashtags, or author"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full p-2 lato pl-10 pr-20  rounded-md placeholder:text-sm placeholder:text-black1/50 focus:outline-gray-100"
          />
          <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black1/50" />

          {/* Search Results Indicator */}
          {isSearchActive && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <span className="bg-accent/10 text-accent px-3 py-1.5 rounded text-xs">
                {searchResults.length} Results
              </span>
              <button
                onClick={clearSearch}
                className="bg-red-500 text-white px-3 py-1.5 rounded text-xs flex items-center"
              >
                Clear
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Post List */}
      <div className="flex-1 overflow-y-auto p-5 bg-gray-50 custom-scrollbar-hidden">
        <PostList
          posts={posts}
          setPosts={setPosts}
          auth={auth}
          deletePost={deletePost}
          likePost={likePost}
          openModal={openModal}
        />
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
            setPosts={setPosts}
          />
        </div>
      </div>
    </div>
  );
};

export default CommunityRightSide;
