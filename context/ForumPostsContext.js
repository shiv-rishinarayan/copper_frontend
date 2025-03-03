import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { FORUM_POSTS } from '@/src/api/platinumAPI';
import toast from 'react-hot-toast';
import useAxios from '@/src/network/useAxios';

const ForumPostsContext = createContext();

export const useForumPosts = () => {
  const context = useContext(ForumPostsContext);
  if (!context) {
    throw new Error('useForumPosts must be used within a ForumPostsProvider');
  }
  return context;
};

export const ForumPostsProvider = ({ children }) => {
  const axiosInstance = useAxios();

  const [state, setStateRaw] = useState({
    posts: [],
    originalPosts: [],
    loading: false,
    hasMore: true,
    error: null,
    searchQuery: "",
    hashtag: null,
    cashtag: null,
    isSearchActive: false,
    offset: 0,
    count: 0,
    selectedStock: null,
    isLoadingMore: false,
    newPostsCount: 0,
    lastLoadedTimestamp: null,  // Track when last load happened
  });

  const setState = useCallback((updater) => {
    setStateRaw((prevState) => {
      const newState = typeof updater === 'function' ? updater(prevState) : { ...prevState, ...updater };
      return newState;
    });
  }, []);

  const updateState = (update)=>{
    setState(prev => ({...prev, ...update}));
  }

  const fetchPosts = async ({
    limit = 5,
    offset = 0,
    reset = false,
    searchQuery = state.searchQuery,
    hashtag = state.hashtag,
    cashtag = state.cashtag,
  } = {}) => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      // Build the API URL with query parameters
      let url = `${FORUM_POSTS}?limit=${limit}&offset=${offset}`;
      if (searchQuery) {
        url += `&search=${encodeURIComponent(searchQuery)}`;
      }
      if (hashtag) {
        url += `&hashtag=${encodeURIComponent(hashtag)}`;
      }
      if (cashtag) {
        url += `&cashtag=${encodeURIComponent(cashtag)}`;
      }

      const response = await axiosInstance.get(url);
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = response.data;

      // Ensure each post has a post_image key
      const postsWithImage = data.results.map((post) => ({
        ...post,
        post_image: post.post_image || null,
      }));


      setState(prev => {
        if (reset) {
          return {
            ...prev,
            posts: postsWithImage,
            originalPosts: postsWithImage,
            hasMore: Boolean(data.next),
            offset: postsWithImage.length,
            loading: false,
            count: data.count,
            newPostsCount: 0
          };
        } else {
          return {
            ...prev,
            originalPosts: [...prev.originalPosts ,...postsWithImage],
            posts: postsWithImage,
            hasMore: Boolean(data.next),
            offset: prev.offset + postsWithImage.length,
            loading: false,
            count: data.count
          };
        }
      });

      return data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      toast.error("Failed to fetch posts. Please try again later.");
      setState(prev => ({ ...prev, loading: false }));
      return null;
    }
  };

  // Re-fetch posts when search parameters change.
  useEffect(() => {
    if (state.isSearchActive) {
      fetchPosts({ reset: true, offset: 0 });
    }
  }, [state.searchQuery, state.hashtag, state.cashtag, state.isSearchActive]);

  // Update search parameters
  const filterPosts = useCallback((query) => {
      setState(prev => ({
        ...prev,
        searchQuery: query,
        isSearchActive: Boolean(query) ,
      }));
    
  }, [state.searchQuery]);

  // Clear search parameters and re-fetch posts immediately
  const clearSearch = useCallback(() => {
    setState(prev => ({
      ...prev,
      searchQuery: "",
      searchResults: [],
      hashtag: "",
      cashtag: "",
      selectedStock: null,
      posts: [],
      isSearchActive:  false,
      offset: 0,
    }));
    fetchPosts({ reset: true, offset: 0 });
  }, []);

    // Clear search parameters and re-fetch posts immediately
    const clearSearchText = useCallback(() => {
        setState(prev => ({
          ...prev,
          searchQuery: "",
          posts: [],
          isSearchActive: !!prev.hashtag || !!prev.cashtag,
          offset: 0,
        }));
        fetchPosts({ reset: true, offset: 0 });
      }, []);


          // Clear search parameters and re-fetch posts immediately
    const clearCashTag = useCallback(() => {
        setState(prev => ({
          ...prev,
          cashtag:"",
          selectedStock: null,
          posts: [],
          isSearchActive: !!prev.searchQuery || !!prev.hashtag ,
          offset: 0,
        }));
        fetchPosts({ reset: true, offset: 0 });
      }, []);

  // Load more posts using the current state parameters
  const loadMore = async () => {
    if (!state.loading && state.hasMore) {
      // Save current posts as originalPosts before loading more
      setState(prev => ({ 
        ...prev, 
        isLoadingMore: true, // Add a flag to indicate we're loading more posts, not initial load
        lastLoadedTimestamp: new Date().getTime() // Track when we loaded more posts
      }));
      
      // Then fetch new posts
      const result = await fetchPosts({
        limit: 5,
        offset: state.offset,
        reset: false,
        searchQuery: state.searchQuery,
        hashtag: state.hashtag,
        cashtag: state.cashtag,
      });
      
      // After posts are loaded, update the flag
      setState(prev => ({ 
        ...prev, 
        isLoadingMore: false,
      }));
      
      // Return the information about the original and new posts
      return {
        originalPostsLength: state.originalPosts.length,
        newPostsLength: state.posts.length,
        newPostsCount: state.newPostsCount,
        timestamp: state.lastLoadedTimestamp
      };
    }
  };

  const value = {
    ...state,
    fetchPosts,
    filterPosts,
    clearSearch,
    clearSearchText,
    clearCashTag,
    loadMore,
    updateState,
  };

  return (
    <ForumPostsContext.Provider value={value}>
      {children}
    </ForumPostsContext.Provider>
  );
};
