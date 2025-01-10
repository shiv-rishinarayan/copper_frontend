import { createContext, useState, useContext } from "react";

// Create Context
const SidebarLatestNewsContext = createContext();

// Create Provider component
export const SidebarLatestNewsProvider = ({ children }) => {
  const [newsData, setNewsData] = useState(null);

  // Function to update news data
  const updateNewsData = (newData) => {
    setNewsData(newData);
  };

  return (
    <SidebarLatestNewsContext.Provider value={{ newsData, updateNewsData }}>
      {children}
    </SidebarLatestNewsContext.Provider>
  );
};

export const useSidebarLatestNews = () => useContext(SidebarLatestNewsContext);
