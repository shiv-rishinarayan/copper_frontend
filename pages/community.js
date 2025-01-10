// import Dashboard from "@/components/Dashboard";
// import Community from "@/components/Community/Community";
// import Navbar from "@/components/Navbar";
// import React from "react";

// const community = () => {
//   return (
//     <div>
//       <Navbar />
//       <Community />
//     </div>
//   );
// };

// export default community;

// File: pages/community.js
import React from "react";
import { SidebarLatestNewsProvider } from "../context/SidebarLatestNewsContext";
import { CommunityPostUtilsProvider } from "../context/CommunityPostUtilsContext";
import Community from "../components/Community/Community";

const CommunityPage = () => {
  return (
    <SidebarLatestNewsProvider>
      <CommunityPostUtilsProvider>
        <Community />
      </CommunityPostUtilsProvider>
    </SidebarLatestNewsProvider>
  );
};

export default CommunityPage;
