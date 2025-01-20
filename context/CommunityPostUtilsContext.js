import { createContext, useState, useContext } from "react";

// Create Context
const CommunityPostUtilsContext = createContext();

// Create Provider component
export const CommunityPostUtilsProvider = ({ children }) => {
  const [postCommentData, setPostCommentData] = useState(null);

  // Function to update news data
  const updatePostCommentData = (newData) => {
    setPostCommentData({ id: newData, timestamp: Date.now() });
  };

  return (
    <CommunityPostUtilsContext.Provider
      value={{ postCommentData, updatePostCommentData }}
    >
      {children}
    </CommunityPostUtilsContext.Provider>
  );
};

export const useCommunityPostUtils = () =>
  useContext(CommunityPostUtilsContext);
